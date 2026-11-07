import React, { useState } from 'react';
import { Globe, Menu, X, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onRequestQuote: () => void;
  onOpenSupplierPortal: () => void;
  onOpenCompanyProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  onRequestQuote,
  onOpenSupplierPortal,
  onOpenCompanyProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English (EN)', flag: 'GB' },
    { code: 'fr', label: 'Français (FR)', flag: 'FR' },
    { code: 'zh', label: '中文 (ZH)', flag: 'CN' },
    { code: 'ar', label: 'العربية (AR)', flag: 'AE' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070F1E]/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark & Official Emblem */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-700/60 p-1 overflow-hidden shadow-lg group-hover:border-[#D4AF37]/60 transition-colors">
              <img 
                src="/assets/aistudio/Screenshot_2026-11-06_211450_8dc35734.png" 
                alt="HLC IMPERATIVE GRUPO LIMITED" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                HLC IMPERATIVE GRUPO
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-mono">
                LIMITED · TRADING & SOURCING
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#commodities" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              {t.nav.commodities}
            </a>
            <a href="#market-insights" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              {t.nav.insights}
            </a>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              {t.nav.services}
            </a>
            <a href="#logistics" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              {t.nav.logistics}
            </a>
            <a href="#why-us" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              {t.nav.whyUs}
            </a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              {t.nav.about}
            </a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              {t.nav.contact}
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Utility Controls */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            
            {/* Download Profile Button */}
            <button
              onClick={onOpenCompanyProfile}
              className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded border border-slate-800 hover:border-slate-700 bg-slate-900/50 transition-colors whitespace-nowrap flex items-center gap-1.5"
              title="Download Institutional Corporate Profile"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Dossier</span>
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 rounded transition-colors whitespace-nowrap"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="uppercase">{currentLang}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#0B172B] border border-slate-700 rounded-lg shadow-2xl py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between transition-colors ${
                        currentLang === lang.code
                          ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span>{lang.label}</span>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">{lang.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Become Supplier Button */}
            <button
              onClick={onOpenSupplierPortal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-[#D4AF37]/50 rounded transition-colors whitespace-nowrap"
            >
              {t.nav.becomeSupplier}
            </button>

            {/* Primary CTA: Request a Quote */}
            <button
              onClick={onRequestQuote}
              className="px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] hover:from-[#FFF1B8] hover:to-[#D4AF37] rounded shadow-md transition-all whitespace-nowrap"
            >
              {t.nav.requestQuote}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => onSelectLang(currentLang === 'en' ? 'fr' : currentLang === 'fr' ? 'zh' : currentLang === 'zh' ? 'ar' : 'en')}
              className="p-2 text-xs text-slate-300 border border-slate-700 rounded uppercase font-mono"
            >
              {currentLang}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070F1E] border-b border-slate-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="#commodities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4AF37] py-1"
            >
              {t.nav.commodities}
            </a>
            <a
              href="#market-insights"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4AF37] py-1"
            >
              {t.nav.insights}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4AF37] py-1"
            >
              {t.nav.services}
            </a>
            <a
              href="#logistics"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4AF37] py-1"
            >
              {t.nav.logistics}
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4AF37] py-1"
            >
              {t.nav.whyUs}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4AF37] py-1"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-[#D4AF37] py-1"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupplierPortal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-slate-300 border border-slate-700 rounded text-center"
            >
              {t.nav.becomeSupplier}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-2.5 text-xs font-bold text-slate-950 bg-[#D4AF37] rounded text-center"
            >
              {t.nav.requestQuote}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
