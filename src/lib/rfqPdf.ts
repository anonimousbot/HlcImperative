import { RfqQuoteRecord } from '../types';

const ascii = (value: string) => value
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^\x20-\x7E]/g, '?');

const pdfString = (value: string) => `(${ascii(value).replace(/[\\()]/g, '\\$&')})`;

function wrapLine(value: string, maxLength = 82) {
  const words = ascii(value).split(/\s+/);
  const lines: string[] = [];
  let line = '';

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLength && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }

  if (line) lines.push(line);
  return lines;
}

export function downloadRfqPdf(quote: RfqQuoteRecord, commodityName: string) {
  const rows = [
    'HLC IMPERATIVE GRUPO LIMITED',
    'BUYER REQUEST FOR QUOTATION',
    '',
    `Reference: ${quote.referenceId}`,
    `Date: ${new Date(quote.timestamp).toLocaleDateString('en-GB')}`,
    '',
    `Target commodity: ${commodityName}`,
    `Volume: ${quote.volumeMt.toLocaleString()} metric tons (MT)`,
    `Incoterms 2020: ${quote.incoterm}`,
    `Destination discharge port: ${quote.destinationPort}`,
    `Destination country: ${quote.buyerCountry || 'Not provided'}`,
    `Packaging preference: ${quote.packagingPreference}`,
    `Assay / sizing requirements: ${quote.grade || 'To be agreed with the buyer'}`,
    '',
    `Buyer / procurement officer: ${quote.buyerName}`,
    `Corporate / buyer entity: ${quote.buyerCompany}`,
    `Corporate email: ${quote.buyerEmail}`,
    `Telephone / WhatsApp: ${quote.buyerPhone || 'Not provided'}`,
    '',
    'Additional requirements:',
    quote.notes || 'None provided',
    '',
    'This document records a buyer enquiry only. Availability, assay, origin, price,',
    'logistics and commercial terms remain subject to confirmation by HLC.',
  ].flatMap((row) => row ? wrapLine(row) : ['']);

  const pageRows = Array.from({ length: Math.ceil(rows.length / 42) }, (_, pageIndex) =>
    rows.slice(pageIndex * 42, (pageIndex + 1) * 42),
  );
  const pageObjectIds = pageRows.map((_, pageIndex) => 3 + pageIndex);
  const fontObjectId = 3 + pageRows.length;
  const contentObjectIds = pageRows.map((_, pageIndex) => fontObjectId + pageIndex + 1);
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    `<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageRows.length} >>`,
    ...pageRows.map((_, pageIndex) =>
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontObjectId} 0 R >> >> /Contents ${contentObjectIds[pageIndex]} 0 R >>`,
    ),
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    ...pageRows.map((page, pageIndex) => {
      const content = page.map((row, index) => {
        const globalIndex = pageIndex * 42 + index;
        const size = globalIndex === 0 ? 17 : globalIndex === 1 ? 13 : 10;
        const y = 792 - index * 17;
        return `BT /F1 ${size} Tf 48 ${y} Td ${pdfString(row)} Tj ET`;
      }).join('\n');
      return `<< /Length ${content.length} >>\nstream\n${content}\nendstream`;
    }),
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets.slice(1)) {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const blob = new Blob([pdf], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${quote.referenceId}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
