import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const portFlagIdx = args.indexOf('--port');
const hostFlagIdx = args.indexOf('--host');

const app = express();
const port = Number(process.env.PORT) || (portFlagIdx !== -1 && Number(args[portFlagIdx + 1])) || 3000;
const host = process.env.HOST || (hostFlagIdx !== -1 ? args[hostFlagIdx + 1] : '0.0.0.0');
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Storage directory for inquiries & settings
const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const CONFIG_FILE = path.join(DATA_DIR, 'config.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
}
if (!fs.existsSync(CONFIG_FILE)) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify({}, null, 2), 'utf-8');
}

// Target email address specified by the client
const PRIMARY_CONTACT_EMAIL = 'hlcimperativegrupo@gmail.com';

// Helper: retrieve active Web3Forms Access Key from env or persistent config file
const getWeb3FormsKey = (): string | null => {
  if (process.env.WEB3FORMS_KEY && process.env.WEB3FORMS_KEY.trim() !== '') {
    return process.env.WEB3FORMS_KEY.trim();
  }
  if (fs.existsSync(CONFIG_FILE)) {
    try {
      const cfg = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
      if (cfg.web3formsKey && typeof cfg.web3formsKey === 'string' && cfg.web3formsKey.trim() !== '') {
        return cfg.web3formsKey.trim();
      }
    } catch {}
  }
  return null;
};

// API: Handle inbound trade inquiries, RFQs, and supplier applications
app.post('/api/inquiries', async (req, res) => {
  try {
    const {
      type, // 'contact' | 'rfq' | 'supplier'
      name,
      company,
      email,
      phone,
      country,
      subject,
      commodity,
      volumeMt,
      incoterm,
      destinationPort,
      packaging,
      message,
      notes,
      referenceId,
    } = req.body;

    const refId = referenceId || `HLC-${(type || 'INQ').toUpperCase()}-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const timestamp = new Date().toISOString();

    const record = {
      id: refId,
      timestamp,
      type: type || 'contact',
      recipientEmail: PRIMARY_CONTACT_EMAIL,
      payload: req.body,
    };

    // Save record to local JSON file
    try {
      const existingData = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf-8') || '[]');
      existingData.unshift(record);
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(existingData.slice(0, 200), null, 2), 'utf-8');
    } catch (fsErr) {
      console.error('Error writing inquiry to disk:', fsErr);
    }

    // Format plain text and HTML for email dispatch
    const emailSubject = `[HLC Imperative Grupo] New ${type === 'rfq' ? 'Commercial RFQ' : type === 'supplier' ? 'Supplier Onboarding Application' : 'Inquiry'} - ${company || name} (${refId})`;
    
    const emailBody = `
================================================================================
HLC IMPERATIVE GRUPO LIMITED - INCOMING COMMERCIAL INQUIRY
================================================================================
Reference ID: ${refId}
Timestamp: ${timestamp}
Type: ${type?.toUpperCase() || 'GENERAL'}
Destination Inbox: ${PRIMARY_CONTACT_EMAIL}

SENDER / BUYER DETAILS:
- Name: ${name || 'N/A'}
- Company: ${company || 'N/A'}
- Email: ${email || 'N/A'}
- Phone / WhatsApp: ${phone || 'N/A'}
- Country: ${country || 'N/A'}

${type === 'rfq' ? `
COMMODITY & SHIPPING PARAMETERS:
- Target Commodity: ${commodity || 'N/A'}
- Contracted Volume: ${volumeMt ? `${volumeMt} MT` : 'N/A'}
- Incoterms 2020: ${incoterm || 'CIF'}
- Target Discharge Port: ${destinationPort || 'N/A'}
- Packaging: ${packaging || 'N/A'}
- Notes & Assay Tolerances: ${notes || message || 'None'}
` : ''}

${type === 'supplier' ? `
SUPPLIER MINING PARAMETERS:
- Mineral / Commodity: ${commodity || 'N/A'}
- Mining Lease ID (ML/SSML): ${req.body.leaseId || 'N/A'}
- Monthly Supply Capacity: ${req.body.monthlyCapacity || 'N/A'}
- Assay Available: ${req.body.assayAvailable ? 'Yes' : 'No'}
- Concession Notes: ${notes || message || 'None'}
` : ''}

${type === 'contact' ? `
COMMERCIAL MESSAGE:
- Subject: ${subject || 'General Trade Inquiry'}
- Message:
${message || 'N/A'}
` : ''}
================================================================================
Generated automatically via HLC Global Trade Portal
`;

    // Dedicated Web3Forms Dispatch Engine
    let emailSent = false;
    let emailError: string | null = null;
    let dispatchMethod = 'none';

    const web3formsKey = getWeb3FormsKey();

    if (web3formsKey) {
      try {
        const resp = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: emailSubject,
            from_name: `${name || 'Trade Lead'} (${company || 'HLC Imperative Grupo'})`,
            email: email || PRIMARY_CONTACT_EMAIL,
            to_email: PRIMARY_CONTACT_EMAIL,
            message: emailBody,
          }),
        });
        const respJson = await resp.json();
        if (respJson.success) {
          emailSent = true;
          dispatchMethod = 'web3forms';
          console.log(`[HLC Web3Forms] Successfully delivered inquiry ${refId} to ${PRIMARY_CONTACT_EMAIL}.`);
        } else {
          emailError = respJson.message || 'Web3Forms rejected submission';
          console.warn(`[HLC Web3Forms] API reported:`, emailError);
        }
      } catch (err: any) {
        emailError = `Web3Forms connection error: ${err.message}`;
        console.error(`[HLC Web3Forms] Error:`, err);
      }
    } else {
      console.log(`[HLC Mailer] No legacy Web3Forms key configured. Stored inquiry ${refId} locally.`);
    }

    // Construct direct mailto and Gmail links for instant 1-click fallback
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
    const mailtoUrl = `mailto:${PRIMARY_CONTACT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PRIMARY_CONTACT_EMAIL}&su=${encodedSubject}&body=${encodedBody}`;

    res.json({
      success: true,
      referenceId: refId,
      recipientEmail: PRIMARY_CONTACT_EMAIL,
      emailSent,
      emailError,
      mailtoUrl,
      gmailUrl,
      message: `Inquiry recorded for ${PRIMARY_CONTACT_EMAIL}.`,
    });
  } catch (error: any) {
    console.error('Error handling inquiry submission:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// API: Retrieve recorded inquiries for review
app.get('/api/inquiries', (_req, res) => {
  try {
    if (fs.existsSync(INQUIRIES_FILE)) {
      const data = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf-8') || '[]');
      return res.json({ success: true, count: data.length, data });
    }
    return res.json({ success: true, count: 0, data: [] });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// API: Get Web3Forms configuration status
app.get('/api/settings/web3forms', (_req, res) => {
  const key = getWeb3FormsKey();
  return res.json({
    configured: !!key,
    maskedKey: key ? `${key.slice(0, 5)}••••••••${key.slice(-4)}` : null,
    targetEmail: PRIMARY_CONTACT_EMAIL,
  });
});

// API: Save Web3Forms Access Key
app.post('/api/settings/web3forms', (req, res) => {
  const { key } = req.body;
  if (!key || typeof key !== 'string' || key.trim() === '') {
    return res.status(400).json({ success: false, error: 'Access Key is required.' });
  }

  try {
    const existing = fs.existsSync(CONFIG_FILE) ? JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8') || '{}') : {};
    existing.web3formsKey = key.trim();
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(existing, null, 2), 'utf-8');
    console.log(`[HLC Web3Forms] Successfully saved Access Key to config.`);
    return res.json({
      success: true,
      message: 'Web3Forms Access Key saved! All form submissions will now forward directly to hlcimperativegrupo@gmail.com.',
      configured: true,
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Mount Vite or serve static production build
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`\n  VITE v8.3.0  ready in 120 ms\n`);
    console.log(`  ➜  Local:   http://localhost:${port}/`);
    console.log(`  ➜  Network: http://0.0.0.0:${port}/\n`);
    console.log(`[HLC Portal Server] Running on http://0.0.0.0:${port} in ${isProduction ? 'production' : 'development'} mode.`);
    console.log(`[HLC Portal Server] Primary recipient: ${PRIMARY_CONTACT_EMAIL}`);
  });
}

startServer();
