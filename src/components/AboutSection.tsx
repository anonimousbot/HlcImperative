import React from 'react';
import { Target, Compass, Award, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang].about;

  return (
    <section id="about" className="py-20 bg-[#091528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-mono mb-2">
            CORPORATE GOVERNANCE & HERITAGE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* Narrative & Image Split 1: Who We Are & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-2xl font-bold text-white">
              Connecting African Resource Abundance with Global Manufacturing
            </h3>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong>HLC IMPERATIVE GRUPO LIMITED</strong> is an international commodity sourcing and trading firm dedicated to bridging the natural mineral and petrochemical wealth of Nigeria and the broader African continent with heavy industrial consumers worldwide.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Our operations encompass the entire physical commodity lifecycle: from direct field geological appraisals and pithead aggregations to automated assay laboratory testing, statutory Nigerian export compliance (Form NXP / NEPC), and international deep-sea chartering.
            </p>

            {/* Core Principle Quote Card */}
            <div className="p-5 rounded-xl bg-[#070F1E] border border-slate-700/80 mt-4">
              <span className="text-xs font-mono uppercase text-[#D4AF37] font-semibold block mb-1">
                The HLC Founding Principle:
              </span>
              <p className="text-sm italic text-slate-200">
                &ldquo;Your reputation will be your greatest asset. If you only offer commodities that you can genuinely source and supply, and you communicate honestly with buyers and suppliers, you build the kind of trust that leads to decades of repeat business.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src="/assets/images/mining_solid_minerals_quarry_1794006537900.jpg"
                alt="Open-pit solid minerals quarry and heavy mining equipment in Nigeria"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-slate-300 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800">
                Direct concession relationships across Nasarawa, Kogi & Plateau
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="p-7 rounded-2xl bg-[#070F1E] border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[#D4AF37]">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">
                {t.missionTitle}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.missionText}
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#070F1E] border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[#D4AF37]">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">
                {t.visionTitle}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.visionText}
            </p>
          </div>

        </div>

        {/* Split 2: Laboratory Inspection & ESG Commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src="/assets/images/laboratory_assay_inspection_1794006539860.jpg"
                alt="Independent quality assurance metallurgical inspection"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-slate-300 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800">
                100% SGS & Bureau Veritas Pre-Shipment Assay Guarantee
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37]">
              <ShieldAlert className="w-4 h-4" />
              <span>ESG & SUSTAINABILITY MANDATE</span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              {t.ethicsTitle}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {t.ethicsText}
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong>Traceable Mining Cadastre Titling:</strong> We only execute contracts for ores extracted from legally gazetted Mining Leases (ML) and Small Scale Mining Leases (SSML).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong>Zero Child Labor Guarantee:</strong> Unannounced site audits and strict contractual sanctions protect human rights across all partner pits.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong>Environmental Reclamation:</strong> Contributing to post-extraction topsoil remediation and local community health and water infrastructure projects.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
