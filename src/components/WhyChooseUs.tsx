import React from 'react';
import { ShieldCheck, Compass, Users, CheckCircle, MessageSquare, Handshake } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang].whyUs;

  const pillars = [
    {
      title: 'Integrity first',
      icon: Compass,
      description: 'We are building the company around honest communication, realistic offers and dependable follow-through.',
    },
    {
      title: 'Careful sourcing',
      icon: ShieldCheck,
      description: 'Supplier, source and supporting information are reviewed before a commercial offer is made.',
    },
    {
      title: 'Lot-specific specifications',
      icon: Users,
      description: 'Grade, origin, volume, packaging and availability are confirmed for each lot and buyer requirement.',
    },
    {
      title: 'Independent checks by agreement',
      icon: CheckCircle,
      description: 'Sampling, assay, weight inspection and other checks can be agreed with the buyer for a transaction.',
    },
    {
      title: 'Long-term relationships',
      icon: MessageSquare,
      description: 'We welcome repeat business built on confirmed supply, clear contracts and consistent communication.',
    },
    {
      title: 'Clear communication',
      icon: Handshake,
      description: 'We aim to set expectations clearly and share updates when verified information is available.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#070F1E] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-mono mb-2">
            INSTITUTIONAL INTEGRITY & REPUTATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-[#D4AF37] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
