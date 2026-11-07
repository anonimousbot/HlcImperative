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
      title: 'Nigerian Sourcing Expertise',
      icon: Compass,
      description: 'Decades of deep on-the-ground relationships across Nigeria’s prominent mineral provinces: the Benue trough coal deposits, Nasarawa copper-lead veins, Taraba antimony belt, and Niger Delta petrochemical complexes. We know the geology, the local communities, and the transport realities.',
    },
    {
      title: 'International Business Standards',
      icon: ShieldCheck,
      description: 'We bridge African resource abundance with Western and Asian corporate governance. Every contract is drafted under standard ICC Incoterms® 2020 rules, with enforceable banking covenants, clear force majeure parameters, and English legal jurisdiction.',
    },
    {
      title: 'Vetted & Reliable Supplier Network',
      icon: Users,
      description: 'We eliminate fly-by-night brokers and fraudulent paper allocations. HLC exclusively aggregates from licensed mining leaseholders with confirmed cadastral titles, active extraction pits, and audited stockpile reserves.',
    },
    {
      title: 'Uncompromising Quality Assurance',
      icon: CheckCircle,
      description: 'Every metric ton we ship is subject to strict pre-shipment sampling and testing by globally recognized independent inspection agencies (SGS, Bureau Veritas, Alex Stewart). Discharge happens strictly against authenticated Certificates of Analysis.',
    },
    {
      title: 'Transparent Communication & Real-Time Tracking',
      icon: MessageSquare,
      description: 'No guessing on loading timelines or customs holds. We provide daily haulage reports, quayside storage manifests, and vessel tracking updates with direct access to our commercial directors in London and Lagos.',
    },
    {
      title: 'Built for Long-Term Industrial Partnerships',
      icon: Handshake,
      description: 'We are not spot-market opportunists. Our operating model is designed to support multi-year procurement programs for smelters, foundries, cement kilns, and plastics manufacturers requiring predictable raw material deliveries.',
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
