import React, { useState } from 'react';
import { Ship, Anchor, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface LogisticsMapProps {
  currentLang: Language;
}

const SHIPPING_ROUTES = [
  {
    corridor: 'West Africa ➔ Northwest Europe (ARA)',
    originPort: 'Apapa & Tin Can Island Port, Lagos, Nigeria',
    dischargeHubs: 'Rotterdam (Netherlands), Antwerp (Belgium), Hamburg (Germany)',
    typicalSailing: '16 – 19 Days',
    vesselClass: 'Handymax / Supramax / Post-Panamax Container',
    primaryCargo: 'Coal, High-Calcium Limestone, Hardwood Charcoal, Polymers',
    draftCapacity: '13.5m deep-water berth',
  },
  {
    corridor: 'West Africa ➔ East Asia / Far East',
    originPort: 'Onne Deepwater Port & Warri Port, Nigeria',
    dischargeHubs: 'Qingdao, Shanghai, Tianjin (China), Busan (Korea)',
    typicalSailing: '30 – 34 Days',
    vesselClass: 'Handysize Geared Bulk / Heavy-Duty 20ft FCL Liners',
    primaryCargo: 'Copper Ore (15-28%+), Lead Ore (Galena), Antimony Ore (Stibnite), Iron Ore',
    draftCapacity: '14.2m multi-purpose deep berth',
  },
  {
    corridor: 'West Africa ➔ Middle East & Arabian Gulf',
    originPort: 'Apapa & Onne Deepwater Terminals, Nigeria',
    dischargeHubs: 'Jebel Ali (Dubai, UAE), Hamad (Qatar), Dammam (Saudi Arabia)',
    typicalSailing: '21 – 24 Days',
    vesselClass: 'Regular Feeder & 40ft HC High-Cube Container Liners',
    primaryCargo: 'Hardwood Shisha Charcoal, Polypropylene (PP), Polyethylene (PE)',
    draftCapacity: 'Dedicated container gantry berths',
  },
  {
    corridor: 'West Africa ➔ North America (Gulf Coast)',
    originPort: 'Onne Deepwater Port & Apapa Bulk Terminal, Nigeria',
    dischargeHubs: 'Houston (Texas, USA), New Orleans (Louisiana, USA)',
    typicalSailing: '23 – 26 Days',
    vesselClass: 'Direct Transatlantic Dry Bulk Carrier',
    primaryCargo: 'Bauxite (Refractory grade), Industrial Minerals, Chemical Resins',
    draftCapacity: 'Heavy lift vessel access',
  },
];

export const LogisticsMap: React.FC<LogisticsMapProps> = () => {
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);

  const activeRoute = SHIPPING_ROUTES[activeRouteIndex];

  return (
    <section id="logistics" className="py-20 bg-[#070F1E] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-mono mb-2">
              MARITIME LOGISTICS & TRADE LANES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Global Shipping Corridors & Discharges
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Connecting primary Nigerian loading terminals in Lagos and Rivers State directly to major deep-water ports across Europe, Asia, the Middle East, and North America.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 shrink-0">
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>INCOTERMS® 2020 CHARTERING DESK</span>
          </div>
        </div>

        {/* Interactive Map Visualizer & Corridor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Corridor Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {SHIPPING_ROUTES.map((route, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRouteIndex(idx)}
                className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  activeRouteIndex === idx
                    ? 'bg-[#0B172B] border-[#D4AF37] shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    activeRouteIndex === idx ? 'text-[#D4AF37]' : 'text-slate-400'
                  }`}>
                    Corridor 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-white tabular-nums bg-slate-800/80 px-2 py-0.5 rounded">
                    {route.typicalSailing}
                  </span>
                </div>

                <div className="text-sm sm:text-base font-bold text-white mb-1">
                  {route.corridor}
                </div>

                <div className="text-xs text-slate-300 line-clamp-1">
                  {route.dischargeHubs}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Corridor Operational Manifest */}
          <div className="lg:col-span-7 bg-[#0B172B] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Background nautical coordinates watermark effect */}
            <div className="absolute right-4 top-4 font-mono text-[10px] text-slate-700/60 pointer-events-none text-right">
              LAT 06°26&apos;N · LON 003°23&apos;E<br />GULF OF GUINEA DISPATCH
            </div>

            <div>
              {/* Active Corridor Title */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2">
                <Anchor className="w-4 h-4 text-[#D4AF37]" />
                <span>ACTIVE OPERATIONAL CORRIDOR</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                {activeRoute.corridor}
              </h3>

              {/* Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 pb-6 border-y border-slate-800/80 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Nigerian Port of Loading:</span>
                  <span className="text-white font-semibold text-sm">{activeRoute.originPort}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Average Voyage Duration:</span>
                  <span className="text-[#D4AF37] font-bold text-sm">{activeRoute.typicalSailing}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Key Discharge Terminals:</span>
                  <span className="text-slate-200 font-medium">{activeRoute.dischargeHubs}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Vessel & Liner Compatibility:</span>
                  <span className="text-slate-200 font-medium">{activeRoute.vesselClass}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Primary Carried Commodities:</span>
                  <span className="text-white font-medium">{activeRoute.primaryCargo}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Terminal Berth Draft:</span>
                  <span className="text-slate-200 font-medium">{activeRoute.draftCapacity}</span>
                </div>
              </div>
            </div>

            {/* Maritime Security & Trade Finance Bar */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Full maritime cargo insurance (Institute Cargo Clauses A) available upon CIF quotation.</span>
              </div>

              <a
                href="#rfq-estimator"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-[#FFF] whitespace-nowrap"
              >
                <span>Quote this Corridor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
