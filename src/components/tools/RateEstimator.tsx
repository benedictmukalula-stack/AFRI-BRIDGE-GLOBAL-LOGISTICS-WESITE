'use client';

import { useState, useMemo } from 'react';
import { Plane, Ship, Truck, Clock, Weight, ArrowRightLeft, Info, MapPin, BarChart3 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type TransportMode = 'air' | 'ocean' | 'road';
type CargoType = 'general' | 'perishable' | 'hazardous' | 'high-value' | 'oversized';
type ContainerSize = 'lcl' | '20ft' | '40ft' | '40hc';

interface RouteConfig {
  origin: string;
  destination: string;
  airPerKg: number;
  airMinCharge: number;
  airTransitDays: [number, number];
  ocean20ft: number;
  ocean40ft: number;
  ocean40hc: number;
  oceanLclPerCbm: number;
  oceanLclMin: number;
  oceanTransitDays: [number, number];
  roadPerTon: number;
  roadMinCharge: number;
  roadTransitDays: [number, number];
  currency: string;
}

const ROUTES: RouteConfig[] = [
  { origin: 'Johannesburg', destination: 'Nairobi', airPerKg: 4.80, airMinCharge: 220, airTransitDays: [1, 2], ocean20ft: 2800, ocean40ft: 4200, ocean40hc: 4600, oceanLclPerCbm: 85, oceanLclMin: 200, oceanTransitDays: [14, 21], roadPerTon: 380, roadMinCharge: 1800, roadTransitDays: [5, 7], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Dar es Salaam', airPerKg: 3.90, airMinCharge: 180, airTransitDays: [1, 2], ocean20ft: 2200, ocean40ft: 3400, ocean40hc: 3800, oceanLclPerCbm: 70, oceanLclMin: 180, oceanTransitDays: [10, 16], roadPerTon: 320, roadMinCharge: 1500, roadTransitDays: [4, 6], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Lagos', airPerKg: 5.20, airMinCharge: 250, airTransitDays: [1, 3], ocean20ft: 3200, ocean40ft: 4800, ocean40hc: 5200, oceanLclPerCbm: 95, oceanLclMin: 250, oceanTransitDays: [18, 28], roadPerTon: 520, roadMinCharge: 2400, roadTransitDays: [7, 10], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Accra', airPerKg: 5.50, airMinCharge: 260, airTransitDays: [1, 3], ocean20ft: 3400, ocean40ft: 5100, ocean40hc: 5500, oceanLclPerCbm: 100, oceanLclMin: 260, oceanTransitDays: [20, 30], roadPerTon: 560, roadMinCharge: 2600, roadTransitDays: [8, 12], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Cape Town', airPerKg: 1.80, airMinCharge: 80, airTransitDays: [1, 1], ocean20ft: 850, ocean40ft: 1200, ocean40hc: 1400, oceanLclPerCbm: 40, oceanLclMin: 100, oceanTransitDays: [3, 5], roadPerTon: 120, roadMinCharge: 600, roadTransitDays: [1, 2], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Durban', airPerKg: 1.20, airMinCharge: 60, airTransitDays: [1, 1], ocean20ft: 650, ocean40ft: 950, ocean40hc: 1100, oceanLclPerCbm: 35, oceanLclMin: 80, oceanTransitDays: [2, 3], roadPerTon: 80, roadMinCharge: 450, roadTransitDays: [1, 1], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Maputo', airPerKg: 2.80, airMinCharge: 130, airTransitDays: [1, 1], ocean20ft: 1200, ocean40ft: 1800, ocean40hc: 2100, oceanLclPerCbm: 55, oceanLclMin: 140, oceanTransitDays: [5, 8], roadPerTon: 180, roadMinCharge: 850, roadTransitDays: [1, 2], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Harare', airPerKg: 3.20, airMinCharge: 150, airTransitDays: [1, 1], ocean20ft: 1600, ocean40ft: 2400, ocean40hc: 2700, oceanLclPerCbm: 60, oceanLclMin: 150, oceanTransitDays: [8, 12], roadPerTon: 220, roadMinCharge: 1000, roadTransitDays: [2, 3], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Lusaka', airPerKg: 3.60, airMinCharge: 170, airTransitDays: [1, 2], ocean20ft: 1800, ocean40ft: 2700, ocean40hc: 3000, oceanLclPerCbm: 65, oceanLclMin: 170, oceanTransitDays: [10, 15], roadPerTon: 260, roadMinCharge: 1200, roadTransitDays: [2, 4], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Windhoek', airPerKg: 2.60, airMinCharge: 120, airTransitDays: [1, 1], ocean20ft: 1100, ocean40ft: 1700, ocean40hc: 1900, oceanLclPerCbm: 50, oceanLclMin: 130, oceanTransitDays: [6, 9], roadPerTon: 150, roadMinCharge: 700, roadTransitDays: [1, 2], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Gaborone', airPerKg: 2.20, airMinCharge: 100, airTransitDays: [1, 1], ocean20ft: 950, ocean40ft: 1400, ocean40hc: 1600, oceanLclPerCbm: 45, oceanLclMin: 120, oceanTransitDays: [4, 7], roadPerTon: 100, roadMinCharge: 500, roadTransitDays: [1, 1], currency: 'USD' },
  { origin: 'Johannesburg', destination: 'Kampala', airPerKg: 4.50, airMinCharge: 210, airTransitDays: [1, 2], ocean20ft: 2600, ocean40ft: 3900, ocean40hc: 4300, oceanLclPerCbm: 80, oceanLclMin: 210, oceanTransitDays: [16, 24], roadPerTon: 400, roadMinCharge: 1900, roadTransitDays: [5, 8], currency: 'USD' },
  { origin: 'Durban', destination: 'Mombasa', airPerKg: 3.50, airMinCharge: 160, airTransitDays: [1, 2], ocean20ft: 1800, ocean40ft: 2800, ocean40hc: 3100, oceanLclPerCbm: 55, oceanLclMin: 150, oceanTransitDays: [8, 14], roadPerTon: 280, roadMinCharge: 1300, roadTransitDays: [4, 6], currency: 'USD' },
  { origin: 'Durban', destination: 'Singapore', airPerKg: 6.80, airMinCharge: 320, airTransitDays: [2, 3], ocean20ft: 1800, ocean40ft: 2800, ocean40hc: 3100, oceanLclPerCbm: 60, oceanLclMin: 180, oceanTransitDays: [12, 18], roadPerTon: 0, roadMinCharge: 0, roadTransitDays: [0, 0], currency: 'USD' },
  { origin: 'Durban', destination: 'Shanghai', airPerKg: 7.50, airMinCharge: 380, airTransitDays: [2, 3], ocean20ft: 1200, ocean40ft: 1800, ocean40hc: 2000, oceanLclPerCbm: 45, oceanLclMin: 150, oceanTransitDays: [14, 20], roadPerTon: 0, roadMinCharge: 0, roadTransitDays: [0, 0], currency: 'USD' },
  { origin: 'Durban', destination: 'Mumbai', airPerKg: 5.80, airMinCharge: 270, airTransitDays: [2, 3], ocean20ft: 1400, ocean40ft: 2100, ocean40hc: 2400, oceanLclPerCbm: 50, oceanLclMin: 160, oceanTransitDays: [10, 16], roadPerTon: 0, roadMinCharge: 0, roadTransitDays: [0, 0], currency: 'USD' },
  { origin: 'Lagos', destination: 'Accra', airPerKg: 2.50, airMinCharge: 120, airTransitDays: [1, 1], ocean20ft: 1200, ocean40ft: 1800, ocean40hc: 2000, oceanLclPerCbm: 50, oceanLclMin: 130, oceanTransitDays: [4, 7], roadPerTon: 180, roadMinCharge: 850, roadTransitDays: [2, 3], currency: 'USD' },
  { origin: 'Nairobi', destination: 'Kigali', airPerKg: 3.00, airMinCharge: 140, airTransitDays: [1, 1], ocean20ft: 0, ocean40ft: 0, ocean40hc: 0, oceanLclPerCbm: 0, oceanLclMin: 0, oceanTransitDays: [0, 0], roadPerTon: 200, roadMinCharge: 900, roadTransitDays: [2, 3], currency: 'USD' },
];

interface RateResult {
  route: RouteConfig;
  mode: TransportMode;
  estimatedCost: number;
  transitMin: number;
  transitMax: number;
  costBreakdown: string;
}

const CARGO_MULTIPLIERS: Record<CargoType, { multiplier: number; label: string }> = {
  general: { multiplier: 1, label: 'General Cargo' },
  perishable: { multiplier: 1.35, label: 'Perishable Goods' },
  hazardous: { multiplier: 1.5, label: 'Hazardous Materials' },
  'high-value': { multiplier: 1.2, label: 'High-Value Goods' },
  oversized: { multiplier: 1.65, label: 'Oversized/Heavy Cargo' },
};

export function RateEstimator() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [volumeCbm, setVolumeCbm] = useState('');
  const [containerSize, setContainerSize] = useState<ContainerSize>('lcl');
  const [cargoType, setCargoType] = useState<CargoType>('general');
  const [results, setResults] = useState<RateResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const allLocations = useMemo(() => {
    const locs = new Set<string>();
    ROUTES.forEach(r => { locs.add(r.origin); locs.add(r.destination); });
    return Array.from(locs).sort();
  }, []);

  const matchingRoutes = useMemo(() => {
    if (!origin || !destination) return [];
    return ROUTES.filter(r =>
      r.origin.toLowerCase().includes(origin.toLowerCase()) &&
      r.destination.toLowerCase().includes(destination.toLowerCase())
    );
  }, [origin, destination]);

  const calculate = () => {
    if (!origin || !destination || !weight) return;

    const w = parseFloat(weight) || 0;
    const v = parseFloat(volumeCbm) || 0;
    const cargoMultiplier = CARGO_MULTIPLIERS[cargoType].multiplier;

    const rates: RateResult[] = [];

    for (const route of matchingRoutes) {
      // Air freight
      if (route.airPerKg > 0) {
        const chargeableWeight = Math.max(w, v * 167);
        const cost = Math.max(chargeableWeight * route.airPerKg, route.airMinCharge) * cargoMultiplier;
        rates.push({
          route,
          mode: 'air',
          estimatedCost: cost,
          transitMin: route.airTransitDays[0],
          transitMax: route.airTransitDays[1],
          costBreakdown: `Chargeable weight: ${chargeableWeight.toFixed(1)}kg x $${route.airPerKg}/kg${cargoMultiplier > 1 ? ` x ${cargoMultiplier} (${CARGO_MULTIPLIERS[cargoType].label})` : ''}${chargeableWeight * route.airPerKg < route.airMinCharge ? ` (min $${route.airMinCharge})` : ''}`,
        });
      }

      // Ocean freight
      if (containerSize === 'lcl' && route.oceanLclPerCbm > 0 && v > 0) {
        const cost = Math.max(v * route.oceanLclPerCbm, route.oceanLclMin) * cargoMultiplier;
        rates.push({
          route,
          mode: 'ocean',
          estimatedCost: cost,
          transitMin: route.oceanTransitDays[0],
          transitMax: route.oceanTransitDays[1],
          costBreakdown: `Volume: ${v} CBM x $${route.oceanLclPerCbm}/CBM${cargoMultiplier > 1 ? ` x ${cargoMultiplier}` : ''}${v * route.oceanLclPerCbm < route.oceanLclMin ? ` (min $${route.oceanLclMin})` : ''}`,
        });
      } else if (containerSize !== 'lcl') {
        const containerRate = containerSize === '20ft' ? route.ocean20ft : containerSize === '40ft' ? route.ocean40ft : route.ocean40hc;
        if (containerRate > 0) {
          const cost = containerRate * cargoMultiplier;
          rates.push({
            route,
            mode: 'ocean',
            estimatedCost: cost,
            transitMin: route.oceanTransitDays[0],
            transitMax: route.oceanTransitDays[1],
            costBreakdown: `${containerSize.toUpperCase()} container: $${containerRate.toLocaleString()}${cargoMultiplier > 1 ? ` x ${cargoMultiplier}` : ''}`,
          });
        }
      }

      // Road freight
      if (route.roadPerTon > 0 && w > 0) {
        const tons = w / 1000;
        const cost = Math.max(tons * route.roadPerTon, route.roadMinCharge) * cargoMultiplier;
        rates.push({
          route,
          mode: 'road',
          estimatedCost: cost,
          transitMin: route.roadTransitDays[0],
          transitMax: route.roadTransitDays[1],
          costBreakdown: `${tons.toFixed(2)} tons x $${route.roadPerTon}/ton${cargoMultiplier > 1 ? ` x ${cargoMultiplier}` : ''}${tons * route.roadPerTon < route.roadMinCharge ? ` (min $${route.roadMinCharge})` : ''}`,
        });
      }
    }

    rates.sort((a, b) => a.estimatedCost - b.estimatedCost);
    setResults(rates);
    setHasSearched(true);
  };

  const fmt = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

  const modeIcon = (mode: TransportMode) => {
    switch (mode) {
      case 'air': return <Plane className="h-4 w-4" />;
      case 'ocean': return <Ship className="h-4 w-4" />;
      case 'road': return <Truck className="h-4 w-4" />;
    }
  };

  const modeLabel = (mode: TransportMode) => {
    switch (mode) {
      case 'air': return 'Air Freight';
      case 'ocean': return 'Ocean Freight';
      case 'road': return 'Road Freight';
    }
  };

  const modeColor = (mode: TransportMode) => {
    switch (mode) {
      case 'air': return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'ocean': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'road': return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  return (
    <div className="space-y-4">
      {/* Route inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Origin</label>
          <Input
            placeholder="e.g. Johannesburg"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="h-11"
            list="origins"
          />
          <datalist id="origins">
            {allLocations.filter(l => l.toLowerCase().includes(origin.toLowerCase())).map(l => (
              <option key={l} value={l} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Destination</label>
          <Input
            placeholder="e.g. Nairobi"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="h-11"
            list="destinations"
          />
          <datalist id="destinations">
            {allLocations.filter(l => l.toLowerCase().includes(destination.toLowerCase())).map(l => (
              <option key={l} value={l} />
            ))}
          </datalist>
        </div>
      </div>

      {/* Route match indicator */}
      {origin && destination && matchingRoutes.length > 0 && (
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
          <span className="text-xs text-emerald-700 font-medium">
            {matchingRoutes.length} route{matchingRoutes.length > 1 ? 's' : ''} found: {matchingRoutes.map(r => `${r.origin} → ${r.destination}`).join(', ')}
          </span>
        </div>
      )}
      {origin && destination && matchingRoutes.length === 0 && (
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
          <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
          <span className="text-xs text-amber-700">No direct routes found. Try different cities or contact us for custom routing.</span>
        </div>
      )}

      {/* Cargo details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Weight (kg)</label>
          <Input
            type="number"
            placeholder="e.g. 500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="h-11"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Volume (CBM)</label>
          <Input
            type="number"
            placeholder="e.g. 2.5 (for LCL)"
            value={volumeCbm}
            onChange={(e) => setVolumeCbm(e.target.value)}
            className="h-11"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Cargo Type</label>
          <select
            value={cargoType}
            onChange={(e) => setCargoType(e.target.value as CargoType)}
            className="w-full h-11 rounded-md border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
          >
            {Object.entries(CARGO_MULTIPLIERS).map(([key, val]) => (
              <option key={key} value={key}>{val.label}{val.multiplier > 1 ? ` (${((val.multiplier - 1) * 100).toFixed(0)}% surcharge)` : ''}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Container size for ocean */}
      <div>
        <label className="text-xs font-medium text-gray-500 mb-1.5 block">Ocean Container Size</label>
        <div className="flex gap-2">
          {([
            { value: 'lcl' as ContainerSize, label: 'LCL (loose)' },
            { value: '20ft' as ContainerSize, label: "20ft FCL" },
            { value: '40ft' as ContainerSize, label: "40ft FCL" },
            { value: '40hc' as ContainerSize, label: '40ft HC' },
          ]).map(opt => (
            <button
              key={opt.value}
              onClick={() => setContainerSize(opt.value)}
              className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-colors ${containerSize === opt.value ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <Button onClick={calculate} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-11">
        <BarChart3 className="mr-2 h-4 w-4" />
        Compare Rates
      </Button>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#0B1F3A]">Rate Comparison</h3>
          {results.map((r, i) => (
            <div key={i} className={`border rounded-lg p-4 ${modeColor(r.mode)}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {modeIcon(r.mode)}
                  <div>
                    <span className="text-sm font-bold">{modeLabel(r.mode)}</span>
                    <p className="text-[11px] opacity-70">{r.route.origin} → {r.route.destination}</p>
                  </div>
                </div>
                {i === 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold uppercase">Best Rate</span>
                )}
              </div>
              <div className="flex items-end justify-between mb-2">
                <div>
                  <p className="text-xs opacity-70">Estimated Cost</p>
                  <p className="text-xl font-bold">{fmt(r.estimatedCost)}</p>
                </div>
                <div className="flex items-center gap-1 text-xs opacity-70">
                  <Clock className="h-3 w-3" />
                  {r.transitMin === r.transitMax ? `${r.transitMin} days` : `${r.transitMin}–${r.transitMax} days`}
                </div>
              </div>
              <p className="text-[11px] opacity-70 leading-relaxed">{r.costBreakdown}</p>
            </div>
          ))}

          <div className="flex gap-2 bg-gray-50 rounded-lg p-3">
            <Info className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Rates are indicative estimates based on current market averages. Actual rates vary by carrier, seasonality, fuel surcharges, and availability. Ocean rates exclude terminal handling charges (THC), customs clearance, and delivery. Air rates exclude security surcharges and fuel. Contact Afri-Bridge for confirmed bookings and competitive rates.
            </p>
          </div>
        </div>
      )}

      {hasSearched && results.length === 0 && (
        <div className="text-center py-6">
          <ArrowRightLeft className="h-10 w-10 text-gray-300 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-500">No rates available for this route</p>
          <p className="text-xs text-gray-400 mt-1">Try a different origin/destination combination or contact Afri-Bridge for custom routing solutions.</p>
        </div>
      )}

      {!hasSearched && (
        <div className="text-center py-6">
          <Weight className="h-10 w-10 text-gray-300 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-500">Compare freight rates across Africa</p>
          <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
            Enter origin, destination, and cargo details to get instant rate comparisons across air, ocean, and road transport modes.
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 mt-4">
            {['Johannesburg → Nairobi', 'Durban → Mombasa', 'Lagos → Accra'].map((tag) => {
              const [o, d] = tag.split(' → ');
              return (
                <button
                  key={tag}
                  onClick={() => { setOrigin(o); setDestination(d); }}
                  className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors font-medium"
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
