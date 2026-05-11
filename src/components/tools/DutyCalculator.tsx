'use client';

import { useState, useMemo } from 'react';
import { Calculator, Info, RotateCcw, TrendingUp, Receipt, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CountryConfig {
  value: string;
  label: string;
  customsDutyMultiplier: number;
  vat: number;
  otherTaxes: { name: string; rate: number; appliesTo: 'cif' | 'duty' | 'total' }[];
}

const COUNTRIES: CountryConfig[] = [
  {
    value: 'za', label: 'South Africa', customsDutyMultiplier: 1, vat: 15,
    otherTaxes: [
      { name: 'Carbon Tax (motor vehicles)', rate: 0, appliesTo: 'cif' },
      { name: 'Ad Valorem Excise (vehicles)', rate: 0, appliesTo: 'cif' },
    ],
  },
  {
    value: 'bw', label: 'Botswana', customsDutyMultiplier: 1, vat: 12,
    otherTaxes: [
      { name: 'Levy Fund', rate: 0.5, appliesTo: 'cif' },
    ],
  },
  {
    value: 'na', label: 'Namibia', customsDutyMultiplier: 1, vat: 15,
    otherTaxes: [],
  },
  {
    value: 'mw', label: 'Malawi', customsDutyMultiplier: 1, vat: 16.5,
    otherTaxes: [
      { name: 'Import Excise', rate: 3, appliesTo: 'cif' },
    ],
  },
  {
    value: 'mz', label: 'Mozambique', customsDutyMultiplier: 1, vat: 16,
    otherTaxes: [
      { name: 'Specific Consumption Tax (ISC)', rate: 2, appliesTo: 'cif' },
    ],
  },
  {
    value: 'tz', label: 'Tanzania', customsDutyMultiplier: 1, vat: 18,
    otherTaxes: [
      { name: 'Stamp Duty', rate: 1, appliesTo: 'cif' },
    ],
  },
  {
    value: 'ke', label: 'Kenya', customsDutyMultiplier: 1, vat: 16,
    otherTaxes: [
      { name: 'Railway Development Levy', rate: 1.5, appliesTo: 'cif' },
      { name: 'Import Declaration Fee', rate: 2, appliesTo: 'cif' },
      { name: 'Anti-Dumping Duty', rate: 0, appliesTo: 'cif' },
    ],
  },
  {
    value: 'ng', label: 'Nigeria', customsDutyMultiplier: 1, vat: 7.5,
    otherTaxes: [
      { name: 'Nigerian Ports Authority Levy', rate: 1, appliesTo: 'cif' },
      { name: 'ECOWAS CET surcharge', rate: 0.5, appliesTo: 'cif' },
    ],
  },
  {
    value: 'gh', label: 'Ghana', customsDutyMultiplier: 1, vat: 12.5,
    otherTaxes: [
      { name: 'ECOWAS levy', rate: 0.5, appliesTo: 'cif' },
      { name: 'GetFund levy', rate: 2.5, appliesTo: 'cif' },
      { name: 'AU levy', rate: 0.2, appliesTo: 'cif' },
    ],
  },
  {
    value: 'zm', label: 'Zambia', customsDutyMultiplier: 1, vat: 16,
    otherTaxes: [
      { name: 'Import Declaration Fee', rate: 1, appliesTo: 'cif' },
    ],
  },
  {
    value: 'zw', label: 'Zimbabwe', customsDutyMultiplier: 1, vat: 15,
    otherTaxes: [
      { name: 'Surtax', rate: 0, appliesTo: 'cif' },
    ],
  },
  {
    value: 'ug', label: 'Uganda', customsDutyMultiplier: 1, vat: 18,
    otherTaxes: [
      { name: 'Withholding Tax (WHT)', rate: 6, appliesTo: 'cif' },
      { name: 'Import Duty Surcharge', rate: 1.5, appliesTo: 'cif' },
    ],
  },
];

interface CalculationResult {
  cifValue: number;
  customsDuty: number;
  otherTaxes: { name: string; amount: number }[];
  vatBase: number;
  vat: number;
  totalTaxes: number;
  totalLandedCost: number;
  effectiveRate: number;
}

export function DutyCalculator() {
  const [cifValue, setCifValue] = useState('');
  const [hsCode, setHsCode] = useState('');
  const [dutyRate, setDutyRate] = useState('');
  const [country, setCountry] = useState('za');
  const [exchangeRate, setExchangeRate] = useState('18.50');
  const [currency, setCurrency] = useState<'zar' | 'usd'>('zar');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const selectedCountry = COUNTRIES.find(c => c.value === country)!;

  const calculate = () => {
    const cif = parseFloat(cifValue.replace(/,/g, ''));
    const duty = parseFloat(dutyRate) || 0;
    const exRate = parseFloat(exchangeRate) || 1;

    if (!cif || cif <= 0) return;

    const cifZAR = currency === 'usd' ? cif * exRate : cif;
    const customsDutyAmount = cifZAR * (duty / 100) * selectedCountry.customsDutyMultiplier;

    let otherTaxAmounts: { name: string; amount: number }[] = [];
    let vatBase = cifZAR + customsDutyAmount;

    for (const tax of selectedCountry.otherTaxes) {
      if (tax.rate <= 0) continue;
      let amount = 0;
      if (tax.appliesTo === 'cif') {
        amount = cifZAR * (tax.rate / 100);
        vatBase += amount;
      } else if (tax.appliesTo === 'duty') {
        amount = customsDutyAmount * (tax.rate / 100);
        vatBase += amount;
      }
      otherTaxAmounts.push({ name: tax.name, amount });
    }

    const vatAmount = vatBase * (selectedCountry.vat / 100);
    const totalTaxes = customsDutyAmount + otherTaxAmounts.reduce((s, t) => s + t.amount, 0) + vatAmount;
    const totalLanded = cifZAR + totalTaxes;
    const effectiveRate = cifZAR > 0 ? (totalTaxes / cifZAR) * 100 : 0;

    setResult({
      cifValue: cifZAR,
      customsDuty: customsDutyAmount,
      otherTaxes: otherTaxAmounts,
      vatBase,
      vat: vatAmount,
      totalTaxes,
      totalLandedCost: totalLanded,
      effectiveRate,
    });
  };

  const reset = () => {
    setCifValue('');
    setHsCode('');
    setDutyRate('');
    setResult(null);
  };

  const fmt = (n: number) => new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

  return (
    <div className="space-y-4">
      {/* Currency toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setCurrency('zar')}
          className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-colors ${currency === 'zar' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          ZAR (R)
        </button>
        <button
          onClick={() => setCurrency('usd')}
          className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-colors ${currency === 'usd' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          USD ($)
        </button>
        {currency === 'usd' && (
          <Input
            type="number"
            placeholder="USD/ZAR rate"
            value={exchangeRate}
            onChange={(e) => setExchangeRate(e.target.value)}
            className="w-28 h-8 text-xs"
          />
        )}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">CIF Value ({currency === 'zar' ? 'R' : '$'})</label>
          <Input
            type="number"
            placeholder={currency === 'zar' ? 'e.g. 500000' : 'e.g. 27000'}
            value={cifValue}
            onChange={(e) => setCifValue(e.target.value)}
            className="h-11"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Customs Duty Rate (%)</label>
          <Input
            type="number"
            placeholder="e.g. 15"
            value={dutyRate}
            onChange={(e) => setDutyRate(e.target.value)}
            className="h-11"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">HS Code (optional)</label>
          <Input
            placeholder="e.g. 8703.24"
            value={hsCode}
            onChange={(e) => setHsCode(e.target.value)}
            className="h-11"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Destination Country</label>
          <select
            value={country}
            onChange={(e) => { setCountry(e.target.value); setResult(null); }}
            className="w-full h-11 rounded-md border border-input bg-transparent px-3 text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
          >
            {COUNTRIES.map(c => (
              <option key={c.value} value={c.value}>{c.label} (VAT {c.vat}%)</option>
            ))}
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <Button onClick={calculate} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-11">
          <Calculator className="mr-2 h-4 w-4" />
          Calculate Duties &amp; Taxes
        </Button>
        <Button onClick={reset} variant="outline" className="h-11 border-gray-300">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Results */}
      {result && (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-100">Total Estimated Landed Cost</p>
                <p className="text-2xl font-bold text-white">{fmt(result.totalLandedCost)}</p>
                {hsCode && <p className="text-xs text-blue-200 mt-0.5">HS Code: {hsCode} into {selectedCountry.label}</p>}
              </div>
              <div className="text-right">
                <p className="text-xs text-blue-200">Effective Tax Rate</p>
                <p className="text-xl font-bold text-white">{result.effectiveRate.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">CIF Value</span>
              <span className="text-sm font-semibold text-[#0B1F3A]">{fmt(result.cifValue)}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Receipt className="h-3.5 w-3.5 text-blue-500" />
                <span className="text-sm text-gray-600">Customs Duty ({parseFloat(dutyRate) || 0}%)</span>
              </div>
              <span className="text-sm font-semibold text-red-600">+ {fmt(result.customsDuty)}</span>
            </div>

            {result.otherTaxes.map((tax, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-3.5 w-3.5 text-orange-500" />
                  <span className="text-sm text-gray-600">{tax.name}</span>
                </div>
                <span className="text-sm font-semibold text-red-600">+ {fmt(tax.amount)}</span>
              </div>
            ))}

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-amber-500" />
                <span className="text-sm text-gray-600">VAT ({selectedCountry.vat}% on {fmt(result.vatBase)})</span>
              </div>
              <span className="text-sm font-semibold text-red-600">+ {fmt(result.vat)}</span>
            </div>

            <div className="flex justify-between items-center py-2 bg-emerald-50 -mx-4 px-4 rounded-b-lg">
              <span className="text-sm font-bold text-[#0B1F3A]">Total Taxes &amp; Duties</span>
              <span className="text-sm font-bold text-emerald-700">{fmt(result.totalTaxes)}</span>
            </div>
          </div>

          <div className="flex gap-2 bg-gray-50 p-3 border-t border-gray-100">
            <Info className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Estimates are based on standard MFN rates and may not reflect preferential rates under AGOA, SADC, TFTA, or other trade agreements. Actual costs may include port charges, clearance fees, insurance, and delivery. Contact Afri-Bridge for a precise quotation.
            </p>
          </div>
        </div>
      )}

      {!result && (
        <div className="text-center py-6">
          <Calculator className="h-10 w-10 text-gray-300 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-500">Enter shipment details to calculate</p>
          <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
            Provide the CIF value, duty rate (from the HS Code Validator), and destination country for an instant landed cost estimate.
          </p>
        </div>
      )}
    </div>
  );
}
