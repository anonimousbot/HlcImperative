import React, { useState } from 'react';
import { Ship, Anchor, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface LogisticsMapProps {
  currentLang: Language;
}

const SHIPPING_ROUTES = [
  {
    corridor: 'West Africa ➔ Northwest Europe (ARA)',
    originPort: 'Loading port agreed after source and cargo review',
    dischargeHubs: 'Examples: Rotterdam, Antwerp and Hamburg',
    typicalSailing: 'To be confirmed with the carrier',
    vesselClass: 'Container or bulk options reviewed per cargo',
    primaryCargo: 'All listed products, subject to confirmed supply and suitability',
    draftCapacity: 'Checked for the selected port and vessel',
  },
  {
    corridor: 'West Africa ➔ East Asia / Far East',
    originPort: 'Loading port agreed after source and cargo review',
    dischargeHubs: 'Examples: Qingdao, Shanghai, Tianjin and Busan',
    typicalSailing: 'To be confirmed with the carrier',
    vesselClass: 'Container or bulk options reviewed per cargo',
    primaryCargo: 'All listed products, subject to confirmed supply and suitability',
    draftCapacity: 'Checked for the selected port and vessel',
  },
  {
    corridor: 'West Africa ➔ Middle East & Arabian Gulf',
    originPort: 'Loading port agreed after source and cargo review',
    dischargeHubs: 'Examples: Jebel Ali, Hamad and Dammam',
    typicalSailing: 'To be confirmed with the carrier',
    vesselClass: 'Container or bulk options reviewed per cargo',
    primaryCargo: 'All listed products, subject to confirmed supply and suitability',
    draftCapacity: 'Checked for the selected port and vessel',
  },
  {
    corridor: 'West Africa ➔ North America (Gulf Coast)',
    originPort: 'Loading port agreed after source and cargo review',
    dischargeHubs: 'Examples: Houston and New Orleans',
    typicalSailing: 'To be confirmed with the carrier',
    vesselClass: 'Container or bulk options reviewed per cargo',
    primaryCargo: 'All listed products, subject to confirmed supply and suitability',
    draftCapacity: 'Checked for the selected port and vessel',
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
              SHIPPING OPTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Possible Destinations
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Destination examples are provided for enquiry planning. Loading port, carrier, route, transit time, cargo suitability and costs are confirmed for each transaction.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 shrink-0">
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>ROUTE REVIEW PER ENQUIRY</span>
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
                    Example 0{idx + 1}
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
              <span>ILLUSTRATIVE ROUTE</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                {activeRoute.corridor}
              </h3>

              {/* Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 pb-6 border-y border-slate-800/80 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Port of loading:</span>
                  <span className="text-white font-semibold text-sm">{activeRoute.originPort}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Transit time:</span>
                  <span className="text-[#D4AF37] font-bold text-sm">{activeRoute.typicalSailing}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Key Discharge Terminals:</span>
                  <span className="text-slate-200 font-medium">{activeRoute.dischargeHubs}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Vessel options:</span>
                  <span className="text-slate-200 font-medium">{activeRoute.vesselClass}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Cargo:</span>
                  <span className="text-white font-medium">{activeRoute.primaryCargo}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 uppercase text-[10px]">Port suitability:</span>
                  <span className="text-slate-200 font-medium">{activeRoute.draftCapacity}</span>
                </div>
              </div>
            </div>

            {/* Maritime Security & Trade Finance Bar */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Insurance and other delivery costs are reviewed and stated in any applicable offer.</span>
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
