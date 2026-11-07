import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  RefreshCw, 
  DollarSign, 
  Ship, 
  Calendar, 
  ArrowUpRight, 
  BarChart3, 
  Activity, 
  Layers, 
  Globe2, 
  Anchor
} from 'lucide-react';
import { Language, Commodity } from '../types';
import { COMMODITIES } from '../data/commodities';

interface MarketInsightsProps {
  currentLang: Language;
  onQuoteCommodity: (commodity: Commodity) => void;
}

type MarketCategory = 'all' | 'minerals' | 'energy' | 'polymers' | 'logistics';
type Currency = 'USD' | 'EUR' | 'CNY';
type Timeframe = '24H' | '7D' | '1M' | '3M' | 'YTD';

interface PriceBenchmark {
  id: string;
  name: string;
  grade: string;
  category: 'minerals' | 'energy' | 'polymers' | 'logistics';
  priceUsd: number;
  unit: string;
  change24h: number;
  changePercent: number;
  benchmarkSource: string;
  pricingBasis: string;
  high30d: number;
  low30d: number;
  commodityRefId?: string;
}

const INITIAL_BENCHMARKS: PriceBenchmark[] = [
  {
    id: 'cu-ore',
    name: 'Copper Ore & Concentrate (20% Cu)',
    grade: 'Cu 20.0% Min, Low As/Bi',
    category: 'minerals',
    priceUsd: 1820,
    unit: 'MT',
    change24h: 34.5,
    changePercent: 1.93,
    benchmarkSource: 'LME Cash Equiv / Fastmarkets',
    pricingBasis: 'FOB Apapa / Onne',
    high30d: 1860,
    low30d: 1740,
    commodityRefId: 'copper-ore',
  },
  {
    id: 'pb-ore',
    name: 'Lead Ore / Galena (60% Pb)',
    grade: 'Pb 60.0% Min, Ag 400g/t',
    category: 'minerals',
    priceUsd: 1140,
    unit: 'MT',
    change24h: -12.0,
    changePercent: -1.04,
    benchmarkSource: 'LME Cash Formula',
    pricingBasis: 'FOB Lagos Port',
    high30d: 1190,
    low30d: 1090,
    commodityRefId: 'lead-ore',
  },
  {
    id: 'sb-ore',
    name: 'Antimony Ore / Stibnite (50% Sb)',
    grade: 'Sb 50.0% Min, High Purity',
    category: 'minerals',
    priceUsd: 12850,
    unit: 'MT',
    change24h: 420.0,
    changePercent: 3.38,
    benchmarkSource: 'Rotterdam In-Warehouse Benchmark',
    pricingBasis: 'CIF Major Ports',
    high30d: 13200,
    low30d: 11800,
    commodityRefId: 'antimony-ore',
  },
  {
    id: 'fe-ore',
    name: 'Iron Ore (62% Fe Fines)',
    grade: 'Fe 62.0% Basis, Low Silica',
    category: 'minerals',
    priceUsd: 106.8,
    unit: 'DMT',
    change24h: 1.45,
    changePercent: 1.38,
    benchmarkSource: 'Platts IODEX 62% CFR',
    pricingBasis: 'CFR Qingdao / China Ports',
    high30d: 112.5,
    low30d: 98.4,
    commodityRefId: 'iron-ore',
  },
  {
    id: 'bx-ore',
    name: 'Bauxite (Al2O3 50% Min)',
    grade: 'Metallurgical Grade, R-SiO2 < 3%',
    category: 'minerals',
    priceUsd: 74.5,
    unit: 'MT',
    change24h: 2.1,
    changePercent: 2.9,
    benchmarkSource: 'West Africa Bauxite Index',
    pricingBasis: 'FOB Deepwater Quay',
    high30d: 76.0,
    low30d: 68.5,
    commodityRefId: 'bauxite',
  },
  {
    id: 'coal-steam',
    name: 'Thermal Steam Coal (6,500 kcal/kg)',
    grade: 'NAR 6,000–6,500, Sulfur < 0.8%',
    category: 'energy',
    priceUsd: 118.5,
    unit: 'MT',
    change24h: -1.2,
    changePercent: -1.0,
    benchmarkSource: 'API 4 / Argus McCloskey',
    pricingBasis: 'FOB Port Harcourt / Onne',
    high30d: 124.0,
    low30d: 114.0,
    commodityRefId: 'coal',
  },
  {
    id: 'charcoal-hd',
    name: 'Hardwood Lump & Shisha Charcoal',
    grade: 'Fixed Carbon > 75%, Clean Screened',
    category: 'energy',
    priceUsd: 480.0,
    unit: 'MT',
    change24h: 8.5,
    changePercent: 1.8,
    benchmarkSource: 'West Africa Agro-Forestry Export Index',
    pricingBasis: 'FOB Apapa Container Terminal',
    high30d: 495.0,
    low30d: 460.0,
    commodityRefId: 'charcoal',
  },
  {
    id: 'pp-resin',
    name: 'Polypropylene (PP) Virgin Raffia',
    grade: 'MFI 2.5–3.5 g/10min, Homopolymer',
    category: 'polymers',
    priceUsd: 1045.0,
    unit: 'MT',
    change24h: 15.0,
    changePercent: 1.46,
    benchmarkSource: 'ICIS Petrochemical CFR Hub',
    pricingBasis: 'FOB Onne Petrochem / CIF Europe',
    high30d: 1070.0,
    low30d: 1010.0,
    commodityRefId: 'polypropylene',
  },
  {
    id: 'pe-resin',
    name: 'Polyethylene HDPE Blow Molding',
    grade: 'Density 0.954, Film & Blow Grade',
    category: 'polymers',
    priceUsd: 1085.0,
    unit: 'MT',
    change24h: 10.0,
    changePercent: 0.93,
    benchmarkSource: 'Platts Polymers / ICIS',
    pricingBasis: 'FOB Lagos / Onne',
    high30d: 1110.0,
    low30d: 1050.0,
    commodityRefId: 'polyethylene',
  },
  {
    id: 'bdi-index',
    name: 'Baltic Dry Index (BDI Global Average)',
    grade: 'Composite Bulk Shipping Rate',
    category: 'logistics',
    priceUsd: 1684,
    unit: 'Points',
    change24h: 42,
    changePercent: 2.56,
    benchmarkSource: 'Baltic Exchange London',
    pricingBasis: 'Global Ocean Dry Bulk',
    high30d: 1790,
    low30d: 1520,
  },
  {
    id: 'supramax-tc',
    name: 'Supramax 58k DWT Atlantic Round-Voyage',
    grade: 'Geared Dry Bulk Timecharter',
    category: 'logistics',
    priceUsd: 15400,
    unit: '$/Day',
    change24h: 350,
    changePercent: 2.33,
    benchmarkSource: 'Clarksons / Baltic BSI',
    pricingBasis: 'Atlantic / Gulf of Guinea',
    high30d: 16200,
    low30d: 14100,
  },
  {
    id: 'vlsfo-bunker',
    name: 'VLSFO 0.5% Marine Bunker Fuel',
    grade: 'Offshore Lagos / West Africa Bunkers',
    category: 'logistics',
    priceUsd: 592.5,
    unit: 'MT',
    change24h: -4.5,
    changePercent: -0.75,
    benchmarkSource: 'Ship & Bunker West Africa',
    pricingBasis: 'Offshore Bunkering Berth',
    high30d: 618.0,
    low30d: 575.0,
  },
];

const CORRIDOR_FREIGHT_RATES = [
  {
    route: 'Lagos (Apapa) ➔ Rotterdam / Antwerp (ARA)',
    type: 'Dry Bulk Handymax (45,000 MT)',
    spotRate: '$28.50 – $32.00 / MT',
    transit: '16–18 Days',
    portWaitTime: '1.2 Days (Apapa Quay)',
    status: 'Stable Demand',
  },
  {
    route: 'Onne Deepwater ➔ Qingdao / Shanghai (China)',
    type: 'Mineral Ore Concentrate (20ft Heavy FCL)',
    spotRate: '$1,850 – $2,100 / TEU',
    transit: '30–33 Days',
    portWaitTime: '1.0 Days (Direct Berth)',
    status: 'High Volume',
  },
  {
    route: 'Lagos (Tin Can) ➔ Jebel Ali (Dubai, UAE)',
    type: 'Hardwood Charcoal (40ft HC FCL)',
    spotRate: '$2,350 – $2,650 / FEU',
    transit: '21–23 Days',
    portWaitTime: '1.5 Days',
    status: 'Firming Rates',
  },
  {
    route: 'Warri / Onne ➔ Houston (US Gulf Coast)',
    type: 'Bauxite & Refractory Bulk Carrier',
    spotRate: '$34.00 – $38.50 / MT',
    transit: '24–26 Days',
    portWaitTime: '1.4 Days',
    status: 'Balanced Supply',
  },
];

export const MarketInsights: React.FC<MarketInsightsProps> = ({
  onQuoteCommodity,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MarketCategory>('all');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [timeframe, setTimeframe] = useState<Timeframe>('24H');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Live Stream (LME / Baltic Feed)');
  const [benchmarks, setBenchmarks] = useState<PriceBenchmark[]>(INITIAL_BENCHMARKS);

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date();
      setLastRefreshed(`${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} GMT`);
    };
    updateTimestamp();
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Simulate minor price fluctuation
      setBenchmarks((prev) =>
        prev.map((item) => {
          const delta = (Math.random() - 0.48) * (item.priceUsd * 0.008);
          const newPrice = Number((item.priceUsd + delta).toFixed(item.priceUsd < 200 ? 2 : 1));
          const change = Number((item.change24h + delta).toFixed(2));
          const changePct = Number(((change / item.priceUsd) * 100).toFixed(2));
          return {
            ...item,
            priceUsd: newPrice,
            change24h: change,
            changePercent: changePct,
          };
        })
      );
      const now = new Date();
      setLastRefreshed(`${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} GMT`);
      setIsRefreshing(false);
    }, 700);
  };

  const getConvertedPrice = (priceUsd: number): { value: string; symbol: string } => {
    if (currency === 'EUR') {
      return { value: (priceUsd * 0.92).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }), symbol: '€' };
    }
    if (currency === 'CNY') {
      return { value: (priceUsd * 7.23).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }), symbol: '¥' };
    }
    return { value: priceUsd.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }), symbol: '$' };
  };

  const filteredBenchmarks = selectedCategory === 'all'
    ? benchmarks
    : benchmarks.filter((b) => b.category === selectedCategory);

  return (
    <section id="market-insights" className="py-20 bg-[#060D1A] border-b border-slate-800 relative">
      {/* Blueprint grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A18_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-mono mb-2">
              <Activity className="w-4 h-4 text-[#D4AF37]" />
              <span>MARKET INTELLIGENCE & FREIGHT DESK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Global Commodity Pricing & Freight Index
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Real-time trading benchmarks, London Metal Exchange (LME) mineral formula indexes, and Gulf of Guinea ocean freight analytics.
            </p>
          </div>

          {/* Interactive Utility Controls Toolbar */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Live Refresh Button */}
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="px-3 py-2 text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
              title="Refresh Global Price Benchmarks"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#D4AF37] ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Feed:</span>
              <span className="text-[#D4AF37] font-bold">{lastRefreshed}</span>
            </button>

            {/* Currency Selector */}
            <div className="flex items-center p-0.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono">
              {(['USD', 'EUR', 'CNY'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1.5 rounded transition-all cursor-pointer font-bold ${
                    currency === curr
                      ? 'bg-[#D4AF37] text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Timeframe Selector */}
            <div className="hidden sm:flex items-center p-0.5 bg-slate-900 border border-slate-700/80 rounded-lg text-xs font-mono">
              {(['24H', '7D', '1M', '3M', 'YTD'] as Timeframe[]).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-2 py-1.5 rounded transition-all cursor-pointer ${
                    timeframe === tf
                      ? 'bg-slate-800 text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* 4 Marquee KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          
          {/* Card 1: Baltic Dry Index */}
          <div className="p-5 rounded-xl bg-[#091528] border border-slate-800 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 uppercase font-semibold">
                <Ship className="w-3.5 h-3.5 text-[#D4AF37]" />
                Baltic Dry Index (BDI)
              </span>
              <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> +2.56%
              </span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
              1,684 <span className="text-xs font-normal text-slate-400 font-sans">Pts</span>
            </div>
            <div className="mt-2 text-[11px] text-slate-400 font-mono">
              Supramax Atlantic: <strong className="text-slate-200">$15,400/day</strong>
            </div>
          </div>

          {/* Card 2: Copper Benchmark */}
          <div className="p-5 rounded-xl bg-[#091528] border border-slate-800 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 uppercase font-semibold">
                <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                Copper Concentrate (Cu 20%)
              </span>
              <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> +1.93%
              </span>
            </div>
            <div className="text-2xl font-extrabold text-[#D4AF37] font-mono tabular-nums">
              {getConvertedPrice(1820).symbol}{getConvertedPrice(1820).value}{' '}
              <span className="text-xs font-normal text-slate-400 font-sans">/ MT</span>
            </div>
            <div className="mt-2 text-[11px] text-slate-400 font-mono">
              LME Settlement: <strong className="text-slate-200">$9,580/MT Cu</strong>
            </div>
          </div>

          {/* Card 3: Thermal Coal Benchmark */}
          <div className="p-5 rounded-xl bg-[#091528] border border-slate-800 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 uppercase font-semibold">
                <DollarSign className="w-3.5 h-3.5 text-[#D4AF37]" />
                Steam Coal (6,500 kcal)
              </span>
              <span className="text-rose-400 font-bold flex items-center gap-0.5">
                <TrendingDown className="w-3 h-3" /> -1.00%
              </span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
              {getConvertedPrice(118.5).symbol}{getConvertedPrice(118.5).value}{' '}
              <span className="text-xs font-normal text-slate-400 font-sans">/ MT</span>
            </div>
            <div className="mt-2 text-[11px] text-slate-400 font-mono">
              API4 Caloric Parity: <strong className="text-slate-200">FOB Rivers</strong>
            </div>
          </div>

          {/* Card 4: Antimony Strategic Mineral */}
          <div className="p-5 rounded-xl bg-[#091528] border border-slate-800 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 uppercase font-semibold">
                <BarChart3 className="w-3.5 h-3.5 text-[#D4AF37]" />
                Antimony Ore (50% Sb)
              </span>
              <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> +3.38%
              </span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
              {getConvertedPrice(12850).symbol}{getConvertedPrice(12850).value}{' '}
              <span className="text-xs font-normal text-slate-400 font-sans">/ MT</span>
            </div>
            <div className="mt-2 text-[11px] text-slate-400 font-mono">
              Critical Mineral: <strong className="text-amber-400">Restricted Supply</strong>
            </div>
          </div>

        </div>

        {/* Category Segmented Tabs */}
        <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-800/80 overflow-x-auto">
          {[
            { id: 'all', label: 'All Benchmarks' },
            { id: 'minerals', label: 'Solid Minerals & Ores' },
            { id: 'energy', label: 'Energy & Carbon Commodities' },
            { id: 'polymers', label: 'Petrochemical Polymers' },
            { id: 'logistics', label: 'Maritime Freight & Bunkers' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as MarketCategory)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#D4AF37] text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pricing Dashboard Table */}
        <div className="bg-[#091528] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
                  <th className="py-3.5 px-4 font-semibold">Commodity / Index</th>
                  <th className="py-3.5 px-4 font-semibold">Standard Grade & Assay</th>
                  <th className="py-3.5 px-4 font-semibold">Benchmark Source</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Spot Price ({currency})</th>
                  <th className="py-3.5 px-4 font-semibold text-right">24H Delta</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Pricing Basis</th>
                  <th className="py-3.5 px-4 font-semibold text-center">Procurement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredBenchmarks.map((item) => {
                  const converted = getConvertedPrice(item.priceUsd);
                  const isPositive = item.changePercent >= 0;

                  return (
                    <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 whitespace-nowrap">
                        {item.grade}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap text-[11px]">
                        {item.benchmarkSource}
                      </td>
                      <td className="py-3.5 px-4 text-right font-extrabold text-white text-sm tabular-nums whitespace-nowrap">
                        {converted.symbol}{converted.value}{' '}
                        <span className="text-[10px] text-slate-400 font-normal">/{item.unit}</span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-semibold tabular-nums whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {isPositive ? '+' : ''}{item.changePercent.toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-300 whitespace-nowrap text-[11px]">
                        {item.pricingBasis}
                      </td>
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        {item.commodityRefId ? (
                          <button
                            onClick={() => {
                              const found = COMMODITIES.find((c) => c.id === item.commodityRefId);
                              if (found) onQuoteCommodity(found);
                            }}
                            className="px-2.5 py-1 text-[11px] font-bold text-slate-900 bg-[#D4AF37] hover:bg-[#FFF] rounded transition-colors cursor-pointer"
                          >
                            RFQ
                          </button>
                        ) : (
                          <span className="text-slate-600 text-[10px]">Index Ref</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 bg-slate-900/60 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span>* Spot prices reflect indicative wholesale cargo benchmarks for minimum order parcels. Final contract pricing is governed by actual SGS assay and agreed Incoterms®.</span>
            <span className="font-mono text-[#D4AF37]">Live Institutional Settlement</span>
          </div>
        </div>

        {/* Global Maritime Ocean Freight Spot Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 bg-[#091528] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                <Anchor className="w-4 h-4" />
                <span>Primary Maritime Freight Corridors (Current Spot)</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Gulf of Guinea Dispatches</span>
            </div>

            <div className="space-y-3">
              {CORRIDOR_FREIGHT_RATES.map((corridor, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-white font-bold">{corridor.route}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">{corridor.type} · {corridor.transit}</div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <div className="text-[#D4AF37] font-bold text-sm">{corridor.spotRate}</div>
                    <div className="text-slate-400 text-[10px]">{corridor.status} · {corridor.portWaitTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Intelligence Bulletins */}
          <div className="lg:col-span-5 bg-[#091528] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold mb-4">
                <Globe2 className="w-4 h-4" />
                <span>Macro Commodity & Sourcing Bulletins</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span className="text-[#D4AF37] font-bold">CRITICAL MINERALS</span>
                    <span>Recent Dispatch</span>
                  </div>
                  <h4 className="font-bold text-white text-xs mb-1">
                    Tightened Asian Smelter Capacity Propels Demand for African Copper & Lead Concentrates
                  </h4>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Smelter TC/RC margins remain constrained, driving aggressive procurement for low-impurity chalcopyrite and argentiferous galena from Nigerian hydrothermal deposits.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span className="text-emerald-400 font-bold">ESG & BIO-CARBON</span>
                    <span>Policy Update</span>
                  </div>
                  <h4 className="font-bold text-white text-xs mb-1">
                    EU CBAM Preparation Drives Demand for Traceable African Tropical Hardwood Charcoal
                  </h4>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    European silicon and metallurgical producers seek certified, zero-deforestation bio-carbon solutions to reduce carbon border tax exposure on imports.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">HLC Trade Analytics Desk</span>
              <a
                href="#rfq-estimator"
                className="text-[#D4AF37] hover:text-white font-bold flex items-center gap-1 font-mono text-[11px]"
              >
                <span>Request Custom Pricing Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
