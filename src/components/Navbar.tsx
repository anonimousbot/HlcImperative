import React, { useState } from 'react';
import { Globe, Menu, X, ShieldCheck, ChevronDown } from 'lucide-react';
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
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'fr', label: 'Français', flag: 'FR' },
    { code: 'zh', label: '中文', flag: 'ZH' },
    { code: 'ar', label: 'العربية', flag: 'AR' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070F1E]/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-18 sm:h-20">
          
          {/* Zone 1: Brand Wordmark & Official Emblem */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-700/60 p-1 overflow-hidden shadow-lg group-hover:border-[#D4AF37]/60 transition-colors shrink-0">
              <img 
                src="/assets/aistudio/Screenshot_2026-11-06_211450_8dc35734.png" 
                alt="HLC IMPERATIVE GRUPO LIMITED" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors truncate">
                HLC IMPERATIVE GRUPO
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase text-slate-400 font-mono truncate">
                LIMITED · TRADING & SOURCING
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-300">
            <a href="#commodities" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              {t.nav.commodities}
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

          {/* Zone 3: Desktop Action & Utility Controls */}
          <div className="hidden lg:flex items-center gap-3.5 shrink-0">
            {/* Download Profile Button */}
            <button
              onClick={onOpenCompanyProfile}
              className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
              title="Open company overview"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Company Overview</span>
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="uppercase font-mono text-[11px]">{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#0B172B] border border-slate-700 rounded-lg shadow-2xl py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
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
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-[#D4AF37]/50 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              {t.nav.becomeSupplier}
            </button>

            {/* Primary CTA: Request a Quote */}
            <button
              onClick={onRequestQuote}
              className="px-4.5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] hover:from-[#FFF1B8] hover:to-[#D4AF37] rounded-lg shadow-md transition-all whitespace-nowrap cursor-pointer font-bold"
            >
              {t.nav.requestQuote}
            </button>
          </div>

          {/* Mobile Actions: Touch Targets >= 44px */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-1 px-2.5 text-xs text-slate-200 border border-slate-700 rounded-lg bg-slate-900/80 active:bg-slate-800 font-mono cursor-pointer"
                aria-label="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="uppercase text-[11px] font-bold">{currentLang}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#0B172B] border border-slate-700 rounded-lg shadow-2xl py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between transition-colors ${
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

            {/* Hamburger Button (44x44px hitbox) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-300 hover:text-white rounded-lg bg-slate-900/60 border border-slate-800 active:bg-slate-800 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Touch-Optimized) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070F1E] border-b border-slate-800 px-4 sm:px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          
          {/* Nav Links with 44px touch targets */}
          <div className="grid grid-cols-1 divide-y divide-slate-800/80 text-sm">
            <a
              href="#commodities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4AF37] min-h-[44px] flex items-center font-medium"
            >
              {t.nav.commodities}
            </a>
            <a
              href="#rfq-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4AF37] min-h-[44px] flex items-center font-medium"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4AF37] min-h-[44px] flex items-center font-medium"
            >
              {t.nav.services}
            </a>
            <a
              href="#logistics"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4AF37] min-h-[44px] flex items-center font-medium"
            >
              {t.nav.logistics}
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4AF37] min-h-[44px] flex items-center font-medium"
            >
              {t.nav.whyUs}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4AF37] min-h-[44px] flex items-center font-medium"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#D4AF37] min-h-[44px] flex items-center font-medium"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-slate-800 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCompanyProfile();
              }}
              className="w-full min-h-[44px] text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-xl flex items-center justify-center gap-2 active:bg-slate-800 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Company Overview (Print / PDF)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupplierPortal();
              }}
              className="w-full min-h-[44px] text-xs font-semibold text-slate-200 border border-slate-700 rounded-xl flex items-center justify-center active:bg-slate-800 cursor-pointer"
            >
              {t.nav.becomeSupplier}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full min-h-[46px] text-xs font-bold text-slate-950 bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#C5A059] rounded-xl flex items-center justify-center shadow-lg active:scale-[0.99] transition-transform cursor-pointer"
            >
              {t.nav.requestQuote}
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
