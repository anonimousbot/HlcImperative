/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Commodity } from './types';
import { COMMODITIES } from './data/commodities';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CommodityCatalog } from './components/CommodityCatalog';
import { CommodityDetailModal } from './components/CommodityDetailModal';
import { RfqEstimator } from './components/RfqEstimator';
import { LogisticsMap } from './components/LogisticsMap';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SupplierPortalModal } from './components/SupplierPortalModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [selectedCommodityModal, setSelectedCommodityModal] = useState<Commodity | null>(null);
  const [rfqTargetCommodity, setRfqTargetCommodity] = useState<Commodity | null>(null);
  const [isSupplierPortalOpen, setIsSupplierPortalOpen] = useState(false);
  const [isCompanyProfileOpen, setIsCompanyProfileOpen] = useState(false);

  // Sync RTL direction when Arabic is selected
  useEffect(() => {
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLang]);

  useEffect(() => {
    const syncCommodityFromUrl = () => {
      const commodityId = new URLSearchParams(window.location.search).get('commodity');
      const commodity = COMMODITIES.find((item) => item.id === commodityId) || null;
      setSelectedCommodityModal(commodity);
    };

    syncCommodityFromUrl();
    window.addEventListener('popstate', syncCommodityFromUrl);
    return () => window.removeEventListener('popstate', syncCommodityFromUrl);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (commodity?: Commodity) => {
    if (commodity) {
      setRfqTargetCommodity(commodity);
    }
    handleScrollToSection('rfq-estimator');
  };

  const handleSelectCommodityById = (commodityId: string) => {
    const found = COMMODITIES.find((c) => c.id === commodityId);
    if (found) {
      const url = new URL(window.location.href);
      url.searchParams.set('commodity', found.id);
      window.history.pushState({}, '', url);
      setSelectedCommodityModal(found);
    }
  };

  const handleCloseCommodity = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('commodity');
    window.history.pushState({}, '', url);
    setSelectedCommodityModal(null);
  };

  return (
    <div className="min-h-screen bg-[#070F1E] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-slate-950">
      
      {/* Primary Top Bar Navigation */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
        onRequestQuote={() => handleRequestQuote()}
        onOpenSupplierPortal={() => setIsSupplierPortalOpen(true)}
        onOpenCompanyProfile={() => setIsCompanyProfileOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        
        {/* 1. Hero Section with Real Maritime Vessel Imagery & Value Proposition */}
        <Hero
          currentLang={currentLang}
          onRequestQuote={() => handleRequestQuote()}
          onOpenSupplierPortal={() => setIsSupplierPortalOpen(true)}
          onExploreCatalog={() => handleScrollToSection('commodities')}
        />

        {/* 2. Commodity Catalog with 10 Detailed Products & Laboratory Assays */}
        <CommodityCatalog
          currentLang={currentLang}
          onSelectCommodity={(c) => handleSelectCommodityById(c.id)}
          onQuoteCommodity={(c) => handleRequestQuote(c)}
        />

        {/* Interactive RFQ form */}
        <RfqEstimator
          currentLang={currentLang}
          preselectedCommodity={rfqTargetCommodity}
        />

        {/* Logistics overview */}
        <LogisticsMap currentLang={currentLang} />

        {/* 5. Integrated Sourcing & Maritime Services */}
        <ServicesSection
          currentLang={currentLang}
          onRequestQuote={() => handleRequestQuote()}
        />

        {/* 6. Why Choose HLC (6 Core Institutional Pillars) */}
        <WhyChooseUs currentLang={currentLang} />

        {/* 7. Corporate About, Mission, Vision, Experience & ESG Framework */}
        <AboutSection currentLang={currentLang} />

        {/* Contact details and enquiries form */}
        <ContactSection
          currentLang={currentLang}
        />

      </main>

      {/* Corporate Footer with Compliance & Dossier Shortcuts */}
      <Footer
        currentLang={currentLang}
        onOpenCompanyProfile={() => setIsCompanyProfileOpen(true)}
        onSelectCommodity={handleSelectCommodityById}
      />

      {/* Modals & Overlays */}
      <CommodityDetailModal
        commodity={selectedCommodityModal}
        currentLang={currentLang}
        onClose={handleCloseCommodity}
        onQuoteThis={(c) => handleRequestQuote(c)}
      />

      <SupplierPortalModal
        isOpen={isSupplierPortalOpen}
        currentLang={currentLang}
        onClose={() => setIsSupplierPortalOpen(false)}
      />

      <CompanyProfileModal
        isOpen={isCompanyProfileOpen}
        onClose={() => setIsCompanyProfileOpen(false)}
      />

    </div>
  );
}
