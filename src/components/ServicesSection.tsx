import React from 'react';
import { Search, Ship, CheckCircle2, ShoppingBag, Truck, UserCheck, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ServicesSectionProps {
  currentLang: Language;
  onRequestQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onRequestQuote,
}) => {
  const t = TRANSLATIONS[currentLang].services;

  const services = [
    {
      number: '01',
      title: 'Commodity Sourcing',
      icon: Search,
      description: 'Direct mine-site and quarry identification across Nigeria’s prolific mineral belts. We aggregate premium-grade solid minerals and energy resources directly from verified concession holders with consistent chemical purity.',
      scope: ['Deposit field assay verification', 'Pit-head sample testing', 'Extraction volume auditing'],
    },
    {
      number: '02',
      title: 'Export Management & Regulatory Compliance',
      icon: Ship,
      description: 'End-to-end statutory export governance. We navigate Central Bank of Nigeria (CBN) Form NXP processing, Nigerian Export Promotion Council (NEPC) documentation, customs clearance, and Pre-shipment Inspection Agent (PIA) mandates.',
      scope: ['Statutory Form NXP documentation', 'Clean Certificate of Inspection (CCI)', 'Customs export manifest filing'],
    },
    {
      number: '03',
      title: 'Supplier Verification & KYC Auditing',
      icon: CheckCircle2,
      description: 'Rigorous vetting of African mine operators, quarry leaseholders, and aggregators. Our verification framework audits Mining Cadastre Office (MCO) titles, environmental compliance, and ethical labor standards.',
      scope: ['Cadastral lease validation (ML/SSML)', 'Assay laboratory cross-checks', 'Anti-child labor & ESG adherence'],
    },
    {
      number: '04',
      title: 'Institutional Procurement',
      icon: ShoppingBag,
      description: 'Structured procurement programs tailored to industrial consumers, smelters, and converters requiring steady monthly feedstock. We negotiate bank-backed offtake agreements with predictable pricing bands.',
      scope: ['Multi-year supply agreements', 'Price risk hedging structures', 'Buffer stockpile aggregation'],
    },
    {
      number: '05',
      title: 'Multimodal Logistics & Vessel Chartering',
      icon: Truck,
      description: 'Orchestrating the complete inland haulage and maritime shipping chain: from remote pitheads via heavy-payload trucks to Apapa, Tin Can, and Onne deep-water quays, chartering breakbulk or containerized carriers.',
      scope: ['Inland haulage coordination', 'Quayside container stuffing & fumigation', 'Handymax / Supramax vessel chartering'],
    },
    {
      number: '06',
      title: 'International Buyer Representation',
      icon: UserCheck,
      description: 'Acting as your dedicated eyes and ears on the ground in Nigeria and West Africa. We safeguard overseas buyers against off-spec shipments through independent assay sampling and escrow banking instruments.',
      scope: ['Pre-loading joint inspection (SGS/BV)', 'Warehouse audit representation', 'Contractual milestone dispute resolution'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#091528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-mono mb-2">
            INTEGRATED TRADE INFRASTRUCTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Services Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-[#070F1E] border border-slate-800 hover:border-slate-700/80 p-7 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest">
                      {service.number}. SERVICE
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Scope items */}
                <div className="pt-4 border-t border-slate-800/80 space-y-1.5 text-[11px] font-mono text-slate-400">
                  {service.scope.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/80" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B172B] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white mb-1">
              Need a bespoke sourcing mandate or institutional offtake agreement?
            </div>
            <div className="text-xs text-slate-300">
              Our London and Lagos trade desks structure multi-vessel contracts governed by English law and ICC Incoterms®.
            </div>
          </div>

          <button
            onClick={onRequestQuote}
            className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-[#D4AF37] hover:bg-[#E5C07B] rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto cursor-pointer"
          >
            <span>Inquire with Trade Desk</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
