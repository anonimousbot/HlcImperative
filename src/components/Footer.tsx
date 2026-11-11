import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { COMMODITIES } from '../data/commodities';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onOpenCompanyProfile: () => void;
  onSelectCommodity: (commodityId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenCompanyProfile,
  onSelectCommodity,
}) => {
  const t = TRANSLATIONS[currentLang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B16] text-slate-400 text-xs border-t border-slate-800">
      
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 p-1 overflow-hidden shrink-0">
                <img
                  src="/assets/aistudio/Screenshot_2026-11-06_211450_8dc35734.png"
                  alt="HLC Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white block">
                  HLC IMPERATIVE GRUPO
                </span>
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                  LIMITED · TRADING & SOURCING
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={onOpenCompanyProfile}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-[#D4AF37]/60 rounded-lg transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Company Overview (Print / PDF)</span>
              </button>

            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              {t.quickLinks}
            </div>
            <ul className="space-y-2">
              <li><a href="#commodities" className="hover:text-[#D4AF37] transition-colors">Commodities Catalog</a></li>
              <li><a href="#rfq-estimator" className="hover:text-[#D4AF37] transition-colors">Request a Quote</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Sourcing Services</a></li>
              <li><a href="#logistics" className="hover:text-[#D4AF37] transition-colors">Global Trade Routes</a></li>
              <li><a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Choose HLC</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us & ESG</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Desks</a></li>
            </ul>
          </div>

          {/* Commodities Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              {t.commodities}
            </div>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2">
              {COMMODITIES.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      onSelectCommodity(c.id);
                      const el = document.getElementById('commodities');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#D4AF37] transition-colors text-left truncate w-full cursor-pointer"
                  >
                    {c.name.split(' ')[0]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Compliance & Registrations */}
          <div className="lg:col-span-3 space-y-3 font-mono text-[11px]">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              {t.compliance}
            </div>
            <p className="text-slate-400 leading-relaxed font-sans">
              {t.corporateNotice}
            </p>
            <div className="space-y-1 text-slate-400 pt-1">
              <div>Commodity availability and origin are confirmed for each enquiry.</div>
              <div>Inspection and export documentation are agreed transaction by transaction.</div>
              <div>Direct Inbox: <a href="mailto:hlcimperativegrupo@gmail.com" className="text-[#D4AF37] hover:underline font-bold">hlcimperativegrupo@gmail.com</a></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Scroll to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} HLC IMPERATIVE GRUPO LIMITED. {t.rightsReserved}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
