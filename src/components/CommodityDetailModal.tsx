import React from 'react';
import { X, ShieldCheck, Ship, Box, Check, ArrowRight } from 'lucide-react';
import { Commodity, Language } from '../types';

interface CommodityDetailModalProps {
  commodity: Commodity | null;
  currentLang: Language;
  onClose: () => void;
  onQuoteThis: (commodity: Commodity) => void;
}

export const CommodityDetailModal: React.FC<CommodityDetailModalProps> = ({
  commodity,
  currentLang,
  onClose,
  onQuoteThis,
}) => {
  if (!commodity) return null;

  const getLocalizedName = (): string => {
    if (currentLang === 'fr' && commodity.frenchName) return commodity.frenchName;
    if (currentLang === 'zh' && commodity.chineseName) return commodity.chineseName;
    if (currentLang === 'ar' && commodity.arabicName) return commodity.arabicName;
    return commodity.name;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl my-8 bg-[#0B172B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
              {commodity.categoryLabel}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 font-mono">
              SPECIFICATIONS SUBJECT TO CONFIRMATION
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {getLocalizedName()}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {commodity.description}
            </p>
          </div>

          {/* Chemical Composition & Typical Specs Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] font-mono">
                Typical Specifications & Buyer Requirements
              </h3>
              <span className="text-xs text-slate-400">Standardized Testing</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
              <table className="w-full min-w-[500px] text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-400">
                    <th className="py-3 px-4 font-semibold">Chemical / Physical Parameter</th>
                    <th className="py-3 px-4 font-semibold text-white">Typical Assay / Specification</th>
                    <th className="py-3 px-4 font-semibold text-slate-400">Reference Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {commodity.typicalSpecs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-2.5 px-4 font-medium text-slate-200">{spec.parameter}</td>
                      <td className="py-2.5 px-4 font-bold text-white tabular-nums">{spec.typicalValue}</td>
                      <td className="py-2.5 px-4 text-slate-400">{spec.testStandard || 'In-House Spectrometry'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Two-Column Grid: Applications & Export Logistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Industrial Applications */}
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-4">
                <Box className="w-4 h-4 text-[#D4AF37]" />
                <span>Primary Industrial Applications</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {commodity.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Export Capabilities & Logistics */}
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-4">
                <Ship className="w-4 h-4 text-[#D4AF37]" />
                <span>Export Logistics & Loading Ports</span>
              </div>
              
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5 font-mono">Availability:</span>
                  <span className="text-white font-semibold">{commodity.exportCapability.monthlyCapacity}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5 font-mono">Loading port:</span>
                  <span className="text-white font-semibold">
                    {commodity.exportCapability.loadingPorts.join(' · ')}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5 font-mono">Minimum Order Quantity (MOQ):</span>
                  <span className="text-[#D4AF37] font-semibold">{commodity.exportCapability.minimumOrderQuantity}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5 font-mono">Packaging Options:</span>
                  <span className="text-slate-300">{commodity.exportCapability.packaging.join(' / ')}</span>
                </div>
              </div>
            </div>

          </div>

            {/* Inspection approach */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300">
              <strong className="text-white block mb-0.5">Inspection by agreement:</strong>
              {commodity.inspectionStandard} Product specifications, availability, origin and export arrangements must be confirmed for each enquiry.
            </div>
          </div>

        </div>

        {/* Modal Footer Actions (Responsive) */}
        <div className="px-5 sm:px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer text-center"
          >
            Close Specifications
          </button>

          <button
            onClick={() => {
              onClose();
              onQuoteThis(commodity);
            }}
            className="w-full sm:w-auto px-5 py-2.5 min-h-[44px] text-xs font-bold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] hover:from-[#FFF1B8] hover:to-[#D4AF37] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <span>Configure Instant RFQ for {commodity.name.split(' ')[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
