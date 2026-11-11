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
      description: 'We review buyer requirements and discuss potential supply options, subject to verified availability, product fit and agreed terms.',
      scope: ['Product requirements', 'Supplier options', 'Availability and terms'],
    },
    {
      number: '02',
      title: 'Export Planning',
      icon: Ship,
      description: 'Export documentation, responsibilities and timelines depend on the product, origin, route and parties. These are reviewed before a transaction proceeds.',
      scope: ['Document checklist', 'Export responsibilities', 'Route and timing review'],
    },
    {
      number: '03',
      title: 'Supplier Review',
      icon: CheckCircle2,
      description: 'Supplier information and source documents can be reviewed as part of due diligence. Any transaction is subject to the checks agreed by the parties.',
      scope: ['Company and source documents', 'Licence checks where applicable', 'Assay and sampling plan'],
    },
    {
      number: '04',
      title: 'Industrial Procurement',
      icon: ShoppingBag,
      description: 'Procurement requests are assessed against the buyer’s product specification, volume, timing, destination and commercial requirements.',
      scope: ['Specification review', 'Volume and delivery window', 'Offer subject to confirmed supply'],
    },
    {
      number: '05',
      title: 'Logistics Options',
      icon: Truck,
      description: 'Logistics options can be discussed once source, cargo, volume and route are known. Shipping plans require confirmation by the relevant suppliers and carriers.',
      scope: ['Route and port options', 'Packing and handling needs', 'Carrier availability'],
    },
    {
      number: '06',
      title: 'Buyer Support',
      icon: UserCheck,
      description: 'Buyer representation, inspection coordination and other procurement support can be discussed and scoped for each enquiry.',
      scope: ['Buyer requirements', 'Inspection options', 'Support agreed per mandate'],
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
              Tell us your product, volume, destination and timing requirements. We will review them and discuss possible next steps.
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
