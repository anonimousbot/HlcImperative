import React from 'react';
import { Target, Compass, ShieldCheck, Handshake } from 'lucide-react';
import { Language } from '../types';

export const AboutSection: React.FC<{ currentLang: Language }> = () => (
  <section id="about" className="py-20 bg-[#091528] border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-mono mb-2">ABOUT HLC</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">African commodities, sourced with care</h2>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          HLC IMPERATIVE GRUPO LIMITED is an international commodity sourcing and trading company focused on solid minerals, industrial raw materials and energy commodities from Nigeria and Africa. We aim to connect buyers with suppliers through clear communication, careful verification and dependable execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <article className="p-7 rounded-2xl bg-[#070F1E] border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[#D4AF37]"><Target className="w-5 h-5" /></div>
            <h3 className="text-lg font-bold text-white">Our mission</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">To become one of Africa’s most trusted commodity sourcing and international trading companies, connecting verified African suppliers with global industrial buyers.</p>
        </article>
        <article className="p-7 rounded-2xl bg-[#070F1E] border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[#D4AF37]"><Compass className="w-5 h-5" /></div>
            <h3 className="text-lg font-bold text-white">Our vision</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">To be a leading African commodity trading company recognized for integrity, reliability and sustainable international trade.</p>
        </article>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-700">
          <img src="/assets/images/mining_solid_minerals_quarry_1794006537900.jpg" alt="Mining and mineral handling" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
          <div className="absolute bottom-4 left-4 text-sm text-white font-medium">Nigeria and African supply opportunities</div>
        </div>
        <div className="lg:col-span-7 space-y-5">
          <h3 className="text-2xl font-bold text-white">A careful approach to every trade</h3>
          <p className="text-sm text-slate-300 leading-relaxed">Our focus is to understand each buyer’s requirements, identify an appropriate supply source and agree clear product, inspection, delivery and payment terms before a transaction proceeds. Commodity availability, origin, specifications, volumes and export arrangements are confirmed case by case.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#070F1E] border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">Ethical sourcing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">We seek transparent supplier relationships and appropriate checks on source, documentation and responsible business practices.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#070F1E] border border-slate-800">
              <Handshake className="w-5 h-5 text-[#D4AF37] mb-2" />
              <h4 className="text-sm font-semibold text-white mb-1">Reliable communication</h4>
              <p className="text-xs text-slate-400 leading-relaxed">We set expectations clearly and share verified information as it becomes available through sourcing and export discussions.</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">Product listings are for initial discussion. Specifications, origin, quantity, inspection, documentation, and delivery terms are subject to confirmation for each enquiry.</p>
        </div>
      </div>
    </div>
  </section>
);
