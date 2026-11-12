import React, { useState, useEffect } from 'react';
import { Ship, Printer, CheckCircle, Calculator, Info } from 'lucide-react';
import { Commodity, Language, RfqFormData, RfqQuoteRecord } from '../types';
import { COMMODITIES } from '../data/commodities';
import { TRANSLATIONS } from '../data/translations';
import { PhoneInput } from './PhoneInput';
import { COUNTRIES } from '../data/callingCodes';
import { submitToWebForms } from '../lib/webforms';
import { downloadRfqPdf } from '../lib/rfqPdf';

interface RfqEstimatorProps {
  currentLang: Language;
  preselectedCommodity?: Commodity | null;
}

const DESTINATION_PORTS = [
  { name: 'Rotterdam, Netherlands', region: 'Europe' },
  { name: 'Antwerp, Belgium', region: 'Europe' },
  { name: 'Qingdao, China', region: 'Asia-Pacific' },
  { name: 'Shanghai, China', region: 'Asia-Pacific' },
  { name: 'Dubai (Jebel Ali), UAE', region: 'Middle East' },
  { name: 'Singapore Port, Singapore', region: 'Southeast Asia' },
  { name: 'Houston (Texas), United States', region: 'Americas' },
  { name: 'Mumbai (Nhava Sheva), India', region: 'South Asia' },
  { name: 'Iskenderun / Mersin, Turkey', region: 'Mediterranean' },
];

export const RfqEstimator: React.FC<RfqEstimatorProps> = ({
  currentLang,
  preselectedCommodity,
}) => {
  const t = TRANSLATIONS[currentLang].rfq;

  const [formData, setFormData] = useState<RfqFormData>({
    commodityId: preselectedCommodity?.id || COMMODITIES[0].id,
    grade: 'To be agreed with the buyer',
    volumeMt: 500,
    incoterm: 'CIF',
    destinationPort: 'Rotterdam, Netherlands',
    packagingPreference: 'Sealed 1MT Jumbo Bags (Containerized)',
    buyerName: '',
    buyerCompany: '',
    buyerEmail: '',
    buyerPhone: '',
    buyerCountry: '',
    notes: '',
  });

  const [generatedQuote, setGeneratedQuote] = useState<RfqQuoteRecord | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (preselectedCommodity) {
      setFormData((prev) => ({
        ...prev,
        commodityId: preselectedCommodity.id,
      }));
    }
  }, [preselectedCommodity]);

  const currentCommodity = COMMODITIES.find((c) => c.id === formData.commodityId) || COMMODITIES[0];
  const handleInputChange = (field: keyof RfqFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const emailDraftHref = (quote: RfqQuoteRecord) => {
    const subject = `HLC RFQ ${quote.referenceId} - ${currentCommodity.name}`;
    const body = [
      'Buyer request for quotation',
      `Reference: ${quote.referenceId}`,
      `Commodity: ${currentCommodity.name}`,
      `Volume: ${quote.volumeMt} MT`,
      `Incoterms 2020: ${quote.incoterm}`,
      `Destination port: ${quote.destinationPort}`,
      `Destination country: ${quote.buyerCountry || 'Not provided'}`,
      `Packaging: ${quote.packagingPreference}`,
      `Assay / sizing: ${quote.grade}`,
      `Buyer name: ${quote.buyerName}`,
      `Company: ${quote.buyerCompany}`,
      `Email: ${quote.buyerEmail}`,
      `Telephone / WhatsApp: ${quote.buyerPhone || 'Not provided'}`,
      `Additional requirements: ${quote.notes || 'None'}`,
    ].join('\n');
    return `mailto:hlcimperativegrupo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleGenerateQuote = async (e: React.FormEvent) => {
    e.preventDefault();

    const missingField = !formData.commodityId ? 'target commodity'
      : !formData.buyerName.trim() ? 'full name'
        : !formData.buyerCompany.trim() ? 'company / buyer entity'
          : !formData.buyerEmail.trim() ? 'corporate email' : '';
    if (missingField) {
      setSubmitError(`Please complete the ${missingField} field.`);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.buyerEmail.trim())) {
      setSubmitError('Please enter a valid corporate email address.');
      return;
    }

    setIsSubmitting(true);
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const quoteCode = `HLC-RFQ-${new Date().getFullYear()}-${randomSuffix}`;
    const quoteRecord: RfqQuoteRecord = {
      ...formData,
      referenceId: quoteCode,
      timestamp: new Date().toISOString(),
    };

    setSubmitError('');
    setGeneratedQuote(quoteRecord);
    setEmailSent(false);
    try {
      await submitToWebForms('Buyer quote request', {
        name: formData.buyerName,
        company: formData.buyerCompany,
        email: formData.buyerEmail,
        _replyto: formData.buyerEmail,
        phone_whatsapp: formData.buyerPhone || 'Not provided',
        country: formData.buyerCountry || 'Not provided',
        commodity: currentCommodity.name,
        grade: formData.grade,
        volume_mt: formData.volumeMt,
        incoterm: formData.incoterm,
        destination_port: formData.destinationPort,
        packaging: formData.packagingPreference,
        notes: formData.notes || 'None',
        reference: quoteCode,
      });
      setEmailSent(true);
      setSubmittedMessage(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'The quote request could not be sent. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rfq-estimator" className="py-20 bg-[#091528] border-b border-slate-800 relative">
      
      {/* Decorative Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-mono mb-3">
            <Calculator className="w-4 h-4" />
            <span>BUYER ENQUIRY FORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* Main 2-Column Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Parameter Inputs */}
          <div className="lg:col-span-7 bg-[#070F1E] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <form
              onSubmit={handleGenerateQuote}
              noValidate
              className="space-y-6"
            >
              
              {/* Row 1: Commodity Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  {t.commoditySelect}
                </label>
                <select
                  required
                  value={formData.commodityId}
                  onChange={(e) => handleInputChange('commodityId', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  {COMMODITIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.categoryLabel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 2: Volume (MT) + Incoterms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      {t.volumeLabel}
                    </label>
                    <span className="text-xs font-mono font-bold text-[#D4AF37]">
                      {formData.volumeMt.toLocaleString()} MT
                    </span>
                  </div>
                  <input
                    type="number"
                    min="25"
                    max="100000"
                    step="25"
                    value={formData.volumeMt}
                    onChange={(e) => handleInputChange('volumeMt', Math.max(25, Number(e.target.value)))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-[#D4AF37]"
                  />
                  {/* Preset Buttons */}
                  <div className="grid grid-cols-4 gap-1.5 mt-2">
                    {[100, 500, 2500, 10000].map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => handleInputChange('volumeMt', v)}
                        className={`text-xs py-1.5 rounded-lg font-mono transition-colors text-center cursor-pointer min-h-[36px] flex items-center justify-center ${
                          formData.volumeMt === v
                            ? 'bg-[#D4AF37] text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {v >= 1000 ? `${v / 1000}k` : v} MT
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    {t.incotermLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['FOB', 'CIF', 'CFR'] as const).map((incoterm) => (
                      <button
                        type="button"
                        key={incoterm}
                        onClick={() => handleInputChange('incoterm', incoterm)}
                        className={`min-h-[44px] py-2.5 text-xs font-bold rounded-lg border transition-all text-center cursor-pointer flex items-center justify-center ${
                          formData.incoterm === incoterm
                            ? 'bg-[#D4AF37] text-slate-950 border-[#D4AF37] shadow-sm font-extrabold'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        {incoterm}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1.5 block">
                    {formData.incoterm === 'FOB' ? 'Free on Board at Port of Lagos / Onne' : 'Cost, Insurance & Freight to Destination'}
                  </span>
                </div>
              </div>

              {/* Row 3: Destination Port & Packaging */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    {t.destinationPortLabel}
                  </label>
                  <select
                    value={formData.destinationPort}
                    onChange={(e) => handleInputChange('destinationPort', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    {DESTINATION_PORTS.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name} ({p.region})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    {t.packagingLabel}
                  </label>
                  <select
                    value={formData.packagingPreference}
                    onChange={(e) => handleInputChange('packagingPreference', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Sealed 1MT Jumbo Bags (Containerized)">Sealed 1MT Jumbo Bags (Containerized)</option>
                    <option value="Bulk Vessel Charter (Handysize Hold)">Bulk Vessel Charter (Handysize Hold)</option>
                    <option value="50kg Double Layer PP Bags">50kg Double Layer PP Bags</option>
                    <option value="25kg Multi-layer Palletized Sacks">25kg Multi-layer Palletized Sacks</option>
                  </select>
                </div>
              </div>

              {/* Buyer Contact Details */}
              <div className="pt-4 border-t border-slate-800 space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Buyer contact details · Name, company and email are required
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.nameLabel} *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.buyerName}
                      onChange={(e) => handleInputChange('buyerName', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.companyLabel} *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Industrial Smelting AG"
                      value={formData.buyerCompany}
                      onChange={(e) => handleInputChange('buyerCompany', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.emailLabel} *</label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={formData.buyerEmail}
                      onChange={(e) => handleInputChange('buyerEmail', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.phoneLabel}</label>
                    <PhoneInput
                      label={t.phoneLabel}
                      placeholder="Phone number"
                      value={formData.buyerPhone}
                      onChange={(phone) => handleInputChange('buyerPhone', phone)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.countryLabel}</label>
                    <select
                      value={formData.buyerCountry}
                      onChange={(e) => handleInputChange('buyerCountry', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="">Select a country</option>
                      {COUNTRIES.map((country) => <option key={country} value={country}>{country}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">{t.notesLabel}</label>
                  <textarea
                    rows={2}
                    placeholder="Provide specific chemical tolerances, size distributions, or target discharge window..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] hover:from-[#FFF1B8] hover:to-[#D4AF37] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Ship className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending…' : t.submitRfqBtn}</span>
              </button>

              {submitError && <p role="alert" className="text-sm text-red-300">{submitError}</p>}

            </form>
          </div>

          {/* Right Column: Request summary and confirmation */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Planning notes */}
            <div className="bg-[#070F1E] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-[#D4AF37] font-semibold">
                  {t.instantEstimate}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  SUBJECT TO CONFIRMATION
                </span>
              </div>

              <div className="py-4 space-y-3.5 text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Destination:</span>
                  <span className="text-[#D4AF37] font-semibold text-right">
                    {formData.destinationPort}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Requested delivery term:</span>
                  <span className="text-white font-bold">
                    Incoterms® 2020 {formData.incoterm}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">
                  {t.requiredDocs}
                </div>
                <p>Availability, origin, assay, inspection, transit time, export documents and payment terms are reviewed and confirmed before an offer is made.</p>
              </div>
            </div>

            {/* Enquiry acknowledgement */}
            {generatedQuote && (
              <div id="rfq-quote-document" className="bg-[#0B172B] border-2 border-[#D4AF37]/50 rounded-2xl p-6 shadow-2xl relative animate-in fade-in">
                
                {/* Stamped Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white font-mono">
                      {emailSent ? 'QUOTE REQUEST SENT' : 'PDF QUOTE READY'}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#D4AF37]">
                    {generatedQuote.referenceId}
                  </span>
                </div>

                <div className="py-4 space-y-2 text-xs font-mono text-slate-300">
                  <div>
                    <span className="text-slate-500">Buyer:</span>{' '}
                    <strong className="text-white">{generatedQuote.buyerName}</strong> ({generatedQuote.buyerCompany})
                  </div>
                  <div>
                    <span className="text-slate-500">Commodity:</span>{' '}
                    <span className="text-[#D4AF37] font-bold">{currentCommodity.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Requested volume:</span>{' '}
                    <span className="text-white font-bold">{generatedQuote.volumeMt.toLocaleString()} MT</span> · Incoterms® {generatedQuote.incoterm}
                  </div>
                  <div>
                    <span className="text-slate-500">Destination:</span>{' '}
                    <span>{generatedQuote.destinationPort}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">
                      Target Inbox: <strong className="text-[#D4AF37] font-mono">hlcimperativegrupo@gmail.com</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => downloadRfqPdf(generatedQuote, currentCommodity.name)}
                      className="px-2.5 py-1 text-[11px] text-slate-950 bg-[#D4AF37] hover:bg-[#F5D77F] rounded font-bold transition-colors print:hidden"
                    >
                      Download PDF
                    </button>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-2.5 py-1 text-[11px] text-slate-300 hover:text-white bg-slate-800 rounded font-bold transition-colors flex items-center gap-1 print:hidden"
                    >
                      <Printer className="w-3 h-3" />
                      <span>Print / Save as PDF</span>
                    </button>
                  </div>

                  {!emailSent && (
                    <a
                      href={emailDraftHref(generatedQuote)}
                      className="inline-flex mt-2 text-[11px] text-[#D4AF37] hover:underline print:hidden"
                    >
                      Open an email draft to HLC if delivery is delayed
                    </a>
                  )}

                  <p className="text-[11px] text-emerald-300">
                    {emailSent
                      ? 'Your quote request was sent to HLC.'
                      : isSubmitting
                        ? 'Your PDF quote summary is ready. Email delivery is being confirmed.'
                        : 'Your PDF quote summary is ready, but email delivery could not be confirmed.'}
                  </p>
                </div>

              </div>
            )}

            {/* Commercial terms note */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Inspection, logistics, payment method and delivery terms are discussed for each enquiry and included in any formal offer or contract.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
