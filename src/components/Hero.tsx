import React from 'react';
import { ArrowRight, Ship, ShieldCheck, Anchor, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onRequestQuote: () => void;
  onOpenSupplierPortal: () => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onRequestQuote,
  onOpenSupplierPortal,
  onExploreCatalog,
}) => {
  const t = TRANSLATIONS[currentLang].hero;

  return (
    <section className="relative overflow-hidden bg-[#070F1E] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/60">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F213E15_1px,transparent_1px),linear-gradient(to_bottom,#0F213E15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Subtle Unboxed Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37] mb-4 uppercase font-mono">
              <span className="w-2 h-2 rounded-sm bg-[#D4AF37]" aria-hidden="true" />
              <span>{t.badge}</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12] mb-6 text-balance">
              {t.headline}{' '}
              <span className="gold-gradient-text block sm:inline">
                {t.headlineHighlight}
              </span>
            </h1>

            {/* Subheadline prose */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {t.subheadline}
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] text-sm font-bold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] hover:from-[#FFF1B8] hover:to-[#D4AF37] rounded-xl shadow-lg hover:shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer active:scale-[0.99]"
              >
                <span>{t.requestQuoteBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenSupplierPortal}
                className="w-full sm:w-auto px-5 py-3.5 min-h-[48px] text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#D4AF37]/60 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.becomeSupplierBtn}</span>
              </button>

              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-4 py-3 min-h-[44px] text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>{t.exploreCatalogBtn}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Fast Compliance Notice */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Ship className="w-3.5 h-3.5 text-[#D4AF37]" />
                FOB Lagos / Onne & CIF Global Ports
              </span>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
              <span>Incoterms® 2020 Governed</span>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
              <span>Full SGS Assay Verification</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              
              {/* Generated Real Commercial Vessel Image */}
              <div className="aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/assets/images/hero_maritime_bulk_shipping_1794006521042.jpg"
                  alt="Modern bulk carrier vessel loading commodities at deepwater terminal"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#070F1E]/30 to-transparent pointer-events-none" />

              {/* Floating Overlay Badge with Vessel Clearance */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B172B]/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider mb-0.5">
                    MARITIME CORRIDOR · DIRECT CHARTER
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Gulf of Guinea to Global Discharge Terminals
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0">
                  <Anchor className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Quantitative KPI Strip */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              {t.stats.capacity}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {t.stats.capacityLabel}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] font-mono tabular-nums mb-1">
              {t.stats.destinations}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {t.stats.destinationsLabel}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              {t.stats.compliance}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {t.stats.complianceLabel}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              {t.stats.purity}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {t.stats.purityLabel}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
