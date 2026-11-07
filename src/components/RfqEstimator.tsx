import React, { useState, useEffect } from 'react';
import { Ship, Clock, CheckSquare, Printer, CheckCircle, Calculator, Info } from 'lucide-react';
import { Commodity, Language, RfqFormData, RfqQuoteRecord } from '../types';
import { COMMODITIES } from '../data/commodities';
import { TRANSLATIONS } from '../data/translations';

interface RfqEstimatorProps {
  currentLang: Language;
  preselectedCommodity?: Commodity | null;
}

const DESTINATION_PORTS = [
  { name: 'Rotterdam, Netherlands', region: 'Europe', transitDays: 18, baseFreightScore: 'Low' },
  { name: 'Antwerp, Belgium', region: 'Europe', transitDays: 19, baseFreightScore: 'Low' },
  { name: 'Qingdao, China', region: 'Asia-Pacific', transitDays: 32, baseFreightScore: 'Moderate' },
  { name: 'Shanghai, China', region: 'Asia-Pacific', transitDays: 31, baseFreightScore: 'Moderate' },
  { name: 'Dubai (Jebel Ali), UAE', region: 'Middle East', transitDays: 22, baseFreightScore: 'Favorable' },
  { name: 'Singapore Port, Singapore', region: 'Southeast Asia', transitDays: 26, baseFreightScore: 'Favorable' },
  { name: 'Houston (Texas), United States', region: 'Americas', transitDays: 24, baseFreightScore: 'Moderate' },
  { name: 'Mumbai (Nhava Sheva), India', region: 'South Asia', transitDays: 21, baseFreightScore: 'Favorable' },
  { name: 'Iskenderun / Mersin, Turkey', region: 'Mediterranean', transitDays: 20, baseFreightScore: 'Low' },
];

export const RfqEstimator: React.FC<RfqEstimatorProps> = ({
  currentLang,
  preselectedCommodity,
}) => {
  const t = TRANSLATIONS[currentLang].rfq;

  const [formData, setFormData] = useState<RfqFormData>({
    commodityId: preselectedCommodity?.id || COMMODITIES[0].id,
    grade: 'Commercial Standard Export Grade',
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

  useEffect(() => {
    if (preselectedCommodity) {
      setFormData((prev) => ({
        ...prev,
        commodityId: preselectedCommodity.id,
      }));
    }
  }, [preselectedCommodity]);

  const currentCommodity = COMMODITIES.find((c) => c.id === formData.commodityId) || COMMODITIES[0];
  const selectedPort = DESTINATION_PORTS.find((p) => p.name === formData.destinationPort) || DESTINATION_PORTS[0];

  const handleInputChange = (field: keyof RfqFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerateQuote = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.buyerName || !formData.buyerEmail || !formData.buyerCompany) {
      alert('Please provide your name, company, and corporate email to generate the formal quotation manifest.');
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const quoteCode = `HLC-RFQ-${new Date().getFullYear()}-${randomSuffix}`;

    const loadingPort = currentCommodity.exportCapability.loadingPorts[0];
    const docs = [
      'Original Clean On-Board Ocean Bills of Lading (3/3)',
      'Certificate of Quality, Weight & Assay issued by SGS / Bureau Veritas',
      'Certificate of Origin authenticated by Nigerian Chamber of Commerce',
      'Signed Commercial Invoice & Detailed Packing List (3 original copies)',
      'Central Bank of Nigeria Form NXP Clean Export Approval',
      formData.commodityId === 'charcoal' ? 'Federal Phytosanitary & Non-DG Fumigation Certificate' : 'Pre-Shipment Radiation & Contamination Free Certificate',
    ];

    const quoteRecord: RfqQuoteRecord = {
      ...formData,
      referenceId: quoteCode,
      timestamp: new Date().toISOString(),
      estimatedTransitDays: selectedPort.transitDays,
      loadingPort,
      complianceChecklist: docs,
    };

    setGeneratedQuote(quoteRecord);
    setSubmittedMessage(true);
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
            <span>REAL-TIME COMMERCIAL MANIFEST ENGINE</span>
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
            <form onSubmit={handleGenerateQuote} className="space-y-6">
              
              {/* Row 1: Commodity Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  {t.commoditySelect}
                </label>
                <select
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
                  <div className="flex gap-1.5 mt-2">
                    {[100, 500, 2500, 10000].map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => handleInputChange('volumeMt', v)}
                        className={`text-[10px] px-2 py-1 rounded font-mono transition-colors ${
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
                        className={`py-2.5 text-xs font-bold rounded-lg border transition-all text-center ${
                          formData.incoterm === incoterm
                            ? 'bg-[#D4AF37] text-slate-950 border-[#D4AF37] shadow-sm'
                            : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        {incoterm}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    {formData.incoterm === 'FOB' ? 'Free on Board at Port of Lagos / Onne' : 'Cost, Insurance & Freight to Discharge Port'}
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
                  Corporate Buyer Verification
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
                    <input
                      type="text"
                      placeholder="+44 20 ... or +86 138 ..."
                      value={formData.buyerPhone}
                      onChange={(e) => handleInputChange('buyerPhone', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">{t.countryLabel}</label>
                    <input
                      type="text"
                      placeholder="e.g. Germany / China"
                      value={formData.buyerCountry}
                      onChange={(e) => handleInputChange('buyerCountry', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
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
                className="w-full py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] hover:from-[#FFF1B8] hover:to-[#D4AF37] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Ship className="w-4 h-4" />
                <span>{t.submitRfqBtn}</span>
              </button>

            </form>
          </div>

          {/* Right Column: Live Manifest Preview & Stamped Document */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real-time Logistics Estimate Box */}
            <div className="bg-[#070F1E] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-[#D4AF37] font-semibold">
                  {t.instantEstimate}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  MARITIME DISPATCH
                </span>
              </div>

              <div className="py-4 space-y-3.5 text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">{t.estimatedTransit}:</span>
                  <span className="text-white font-bold text-sm tabular-nums flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    ~{selectedPort.transitDays} Days Sailing
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">{t.loadingPort}:</span>
                  <span className="text-slate-200 font-semibold text-right">
                    {currentCommodity.exportCapability.loadingPorts[0]}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Discharge Port:</span>
                  <span className="text-[#D4AF37] font-semibold text-right">
                    {formData.destinationPort}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Rule of Trade:</span>
                  <span className="text-white font-bold">
                    Incoterms® 2020 {formData.incoterm}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Assay Survey:</span>
                  <span className="text-slate-300">
                    SGS / Bureau Veritas Certified
                  </span>
                </div>
              </div>

              {/* Standard Export Documentation Checklist */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">
                  {t.requiredDocs}:
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Clean On-Board Ocean Bills of Lading (3/3)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Independent Chemical Assay & Weight Certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Certificate of Origin (Nigerian Chamber of Commerce)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>CBN Form NXP Statutory Clean Export Permit</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stamped Generated Quotation Dossier */}
            {generatedQuote && (
              <div className="bg-[#0B172B] border-2 border-[#D4AF37]/50 rounded-2xl p-6 shadow-2xl relative animate-in fade-in">
                
                {/* Stamped Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white font-mono">
                      OFFICIAL QUOTATION GENERATED
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
                    <span className="text-slate-500">Contracted Volume:</span>{' '}
                    <span className="text-white font-bold">{generatedQuote.volumeMt.toLocaleString()} MT</span> under Incoterms® {generatedQuote.incoterm}
                  </div>
                  <div>
                    <span className="text-slate-500">Delivery Route:</span>{' '}
                    <span>{generatedQuote.loadingPort} ➔ {generatedQuote.destinationPort}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">
                    Valid for 7 international banking days
                  </span>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-3 py-1.5 text-xs text-slate-900 bg-[#D4AF37] hover:bg-[#FFF] rounded font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Manifest</span>
                  </button>
                </div>

              </div>
            )}

            {/* Quick Banking Terms Note */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Standard international trade payment instruments supported: Irrevocable Documentary Letter of Credit (DLC / LC at Sight) issued by Top 50 prime international banks, or structured TT milestones against original shipping documentation.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
