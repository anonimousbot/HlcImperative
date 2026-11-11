import React from 'react';
import { X, Printer, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMMODITIES } from '../data/commodities';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-4xl my-8 bg-[#0B172B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden print:border-none print:shadow-none print:bg-white print:text-black animate-in fade-in"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
              COMPANY OVERVIEW
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-[#D4AF37] hover:bg-[#FFF] rounded transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dossier Printable Content Area */}
        <div className="p-5 sm:p-10 space-y-6 sm:space-y-8 max-h-[85vh] overflow-y-auto print:max-h-none print:p-0 print:overflow-visible text-slate-100 print:text-slate-900">
          
          {/* Header Banner with Brand Mark */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-700 print:border-slate-300">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-700 p-2 overflow-hidden shrink-0 print:border-slate-300">
                <img
                  src="/assets/aistudio/Screenshot_2026-11-06_211450_8dc35734.png"
                  alt="HLC Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white print:text-slate-950">
                  HLC IMPERATIVE GRUPO LIMITED
                </h2>
                <div className="text-xs text-[#D4AF37] font-mono tracking-wider print:text-amber-800">
                  GLOBAL COMMODITY TRADING & SOURCING HOUSE
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 print:text-slate-600">
                  Commodity sourcing and trading · Nigeria and African supply enquiries
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right font-mono text-xs text-slate-400 print:text-slate-600">
              <div>HLC IMPERATIVE GRUPO LIMITED</div>
              <div>Company overview</div>
              <div>Prepared for business enquiries</div>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#D4AF37] font-bold print:text-amber-800">
              1. Executive Statement & Scope
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed">
              HLC IMPERATIVE GRUPO LIMITED is an international commodity sourcing and trading company focused on solid minerals, industrial raw materials and energy commodities from Nigeria and Africa. We aim to connect buyers with suppliers through careful verification, clear communication and reliable execution. Availability, origin, specifications and export arrangements are confirmed for each enquiry.
            </p>
          </div>

          {/* Commercial approach */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
            <h4 className="text-xs font-mono uppercase text-slate-400 print:text-slate-800 mb-3 font-semibold">
              How we approach each enquiry
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px]">01 · Requirements</span>
                <span className="text-white print:text-black">Understand product, grade, volume and destination.</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">02 · Verification</span>
                <span className="text-white print:text-black">Review source, availability and supporting documents.</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">03 · Terms</span>
                <span className="text-white print:text-black">Agree assay, inspection, logistics and payment terms before any offer.</span>
              </div>
            </div>
          </div>

          {/* 10 Core Commodities Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#D4AF37] font-bold print:text-amber-800">
              2. Sourcing Catalogue
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 print:border-slate-300">
              <table className="w-full min-w-[550px] text-left text-xs font-mono">
                <thead>
                  <tr className="bg-slate-900 text-slate-400 print:bg-slate-100 print:text-black border-b border-slate-800 print:border-slate-300">
                    <th className="py-2.5 px-3">Commodity</th>
                    <th className="py-2.5 px-3">Applications</th>
                    <th className="py-2.5 px-3">Supply information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 print:divide-slate-200 text-slate-300 print:text-slate-800">
                  {COMMODITIES.map((c) => (
                    <tr key={c.id}>
                      <td className="py-2 px-3 font-semibold text-white print:text-black">{c.name}</td>
                      <td className="py-2 px-3">{c.applications[0]}</td>
                      <td className="py-2 px-3">Origin, grade and volume confirmed per lot</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Trade Banking & Incoterms */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#D4AF37] font-bold print:text-amber-800">
              3. Commercial Terms & Inspection
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <strong className="text-white print:text-black block mb-1">Payment terms</strong>
                <p className="text-slate-400 print:text-slate-600 text-[11px]">
                  Payment method and schedule are discussed for each enquiry and stated in the agreed contract.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <strong className="text-white print:text-black block mb-1">Incoterms® 2020 Governed</strong>
                <p className="text-slate-400 print:text-slate-600 text-[11px]">
                  Delivery terms and named locations are agreed for each transaction using the applicable Incoterms® rules.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <strong className="text-white print:text-black block mb-1">Independent Inspection</strong>
                <p className="text-slate-400 print:text-slate-600 text-[11px]">
                  Independent sampling, assay and weight inspection can be discussed and agreed before shipment.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details in Profile */}
          <div className="pt-4 border-t border-slate-700 print:border-slate-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-slate-400 print:text-slate-600">
            <div>
              <span>Official Trade Inquiries: </span>
              <a href="mailto:hlcimperativegrupo@gmail.com" className="text-[#D4AF37] hover:underline font-bold">hlcimperativegrupo@gmail.com</a> · <a href="mailto:info@hlcgrupo.co.uk" className="text-white print:text-black">info@hlcgrupo.co.uk</a>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Company overview · Prepared for discussion</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
