import React, { useState } from 'react';
import { ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react';
import { Commodity, CommodityCategory, Language } from '../types';
import { COMMODITIES } from '../data/commodities';
import { TRANSLATIONS } from '../data/translations';

interface CommodityCatalogProps {
  currentLang: Language;
  onSelectCommodity: (commodity: Commodity) => void;
  onQuoteCommodity: (commodity: Commodity) => void;
}

export const CommodityCatalog: React.FC<CommodityCatalogProps> = ({
  currentLang,
  onSelectCommodity,
  onQuoteCommodity,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CommodityCategory | 'all'>('all');
  const t = TRANSLATIONS[currentLang].catalog;

  const filteredCommodities = selectedCategory === 'all'
    ? COMMODITIES
    : COMMODITIES.filter((item) => item.category === selectedCategory);

  const getLocalizedName = (c: Commodity): string => {
    if (currentLang === 'fr' && c.frenchName) return c.frenchName;
    if (currentLang === 'zh' && c.chineseName) return c.chineseName;
    if (currentLang === 'ar' && c.arabicName) return c.arabicName;
    return c.name;
  };

  return (
    <section id="commodities" className="py-20 bg-[#070F1E] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-mono mb-2">
              COMMODITY PORTFOLIO · SUPPLY SUBJECT TO CONFIRMATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              {t.title}
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          {/* Interactive Category Segmented Controls (Buttons with working handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto shrink-0 max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#D4AF37] text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.allCategories}
            </button>
            <button
              onClick={() => setSelectedCategory('energy')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'energy'
                  ? 'bg-[#D4AF37] text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.energy}
            </button>
            <button
              onClick={() => setSelectedCategory('solid_minerals')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'solid_minerals'
                  ? 'bg-[#D4AF37] text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.solidMinerals}
            </button>
            <button
              onClick={() => setSelectedCategory('industrial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'industrial'
                  ? 'bg-[#D4AF37] text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.industrial}
            </button>
            <button
              onClick={() => setSelectedCategory('polymers')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'polymers'
                  ? 'bg-[#D4AF37] text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.polymers}
            </button>
          </div>
        </div>

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommodities.map((commodity) => {
            const localizedName = getLocalizedName(commodity);

            return (
              <div
                key={commodity.id}
                className="group relative rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between overflow-hidden hover:shadow-xl"
              >
                {/* Image Aspect Box */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={commodity.heroImage}
                    alt={commodity.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091528] via-[#091528]/40 to-transparent" />
                  
                  {/* Clean unboxed category kicker */}
                  <div className="absolute top-3 left-3 text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700/50">
                    {commodity.categoryLabel}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                      {localizedName}
                    </h3>
                    
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {commodity.tagline}
                    </p>

                    {/* Spec Highlights Table */}
                    <div className="space-y-1.5 py-3 border-y border-slate-800/80 mb-4 text-xs font-mono">
                      {commodity.typicalSpecs.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex justify-between items-center text-slate-300">
                          <span className="text-slate-400 text-[11px] truncate max-w-[55%]">
                            {spec.parameter}
                          </span>
                          <span className="font-semibold text-white tabular-nums text-right">
                            {spec.typicalValue}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Origin & Capacity Clean Metadata (No Pills) */}
                    <div className="text-[11px] text-slate-400 space-y-1 mb-5">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="truncate"><strong>Origin:</strong> {commodity.origin}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="truncate"><strong>Availability:</strong> {commodity.exportCapability.monthlyCapacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectCommodity(commodity)}
                      className="flex-1 py-2 px-3 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{t.viewSpecs}</span>
                    </button>

                    <button
                      onClick={() => onQuoteCommodity(commodity)}
                      className="py-2 px-3.5 text-xs font-bold text-slate-950 bg-[#D4AF37] hover:bg-[#E5C07B] rounded transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                      title={t.requestQuote}
                    >
                      <span>RFQ</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
