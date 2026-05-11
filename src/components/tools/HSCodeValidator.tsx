'use client';

import { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, Info, ChevronDown, ChevronUp, ShieldCheck, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface HSCodeEntry {
  code: string;
  description: string;
  chapter: string;
  dutyRate: number;
  vatRate: number;
  restrictions: string[];
  docsRequired: string[];
  country: string;
}

const HS_CODES: HSCodeEntry[] = [
  { code: '0101.21', description: 'Live horses, asses, mules and hinnies - pure-bred breeding animals', chapter: '01 - Live Animals', dutyRate: 0, vatRate: 15, restrictions: ['Veterinary import permit', 'Health certificate'], docsRequired: ['Veterinary certificate', 'Import permit', 'Bill of lading'], country: 'South Africa' },
  { code: '0202.30', description: 'Meat of bovine animals - boneless', chapter: '02 - Meat & Edible Offal', dutyRate: 15, vatRate: 15, restrictions: ['Veterinary health certificate', 'HACCP certification'], docsRequired: ['Veterinary certificate', 'Import permit', 'Health certificate'], country: 'South Africa' },
  { code: '0901.11', description: 'Coffee, not roasted, not decaffeinated', chapter: '09 - Coffee, Tea, Mate & Spices', dutyRate: 5, vatRate: 15, restrictions: ['Phytosanitary certificate'], docsRequired: ['Phytosanitary certificate', 'Certificate of origin', 'Commercial invoice'], country: 'South Africa' },
  { code: '1006.30', description: 'Semi-milled or wholly milled rice, whether or not polished or glazed', chapter: '10 - Cereals', dutyRate: 0, vatRate: 15, restrictions: ['Phytosanitary certificate', 'Possible import quota'], docsRequired: ['Import permit', 'Phytosanitary certificate', 'Bill of lading'], country: 'South Africa' },
  { code: '1507.10', description: 'Soya-bean oil, crude - whether or not degummed', chapter: '15 - Animal/Vegetable Fats & Oils', dutyRate: 10, vatRate: 15, restrictions: ['Food safety certification'], docsRequired: ['Certificate of analysis', 'Certificate of origin', 'Commercial invoice'], country: 'South Africa' },
  { code: '1701.99', description: 'Cane sugar - other (refined)', chapter: '17 - Sugars & Confectionery', dutyRate: 96.36, vatRate: 15, restrictions: ['ITAC permit required', 'Sugar tariff rate quota'], docsRequired: ['ITAC import permit', 'Certificate of origin', 'Commercial invoice'], country: 'South Africa' },
  { code: '2204.21', description: 'Wine of fresh grapes - in containers of 2 litres or less', chapter: '22 - Beverages, Spirits & Vinegar', dutyRate: 25, vatRate: 15, restrictions: ['Liquor license required', 'Age verification'], docsRequired: ['Import permit', 'Certificate of origin', 'Analysis certificate'], country: 'South Africa' },
  { code: '2402.20', description: 'Cigarettes containing tobacco', chapter: '24 - Tobacco & Manufactured Substitutes', dutyRate: 114.5, vatRate: 15, restrictions: ['Tobacco control act compliance', 'Health warnings required'], docsRequired: ['Import permit', 'Health warnings compliance', 'Tax payment proof'], country: 'South Africa' },
  { code: '2523.29', description: 'Portland cement - other than white cement', chapter: '25 - Salt, Sulphur, Earth & Stone', dutyRate: 0, vatRate: 15, restrictions: ['SABS certification'], docsRequired: ['SABS certificate', 'Certificate of origin', 'Bill of lading'], country: 'South Africa' },
  { code: '2709.00', description: 'Petroleum oils and oils obtained from bituminous minerals, crude', chapter: '27 - Mineral Fuels, Oils & Wax', dutyRate: 0, vatRate: 15, restrictions: ['Environmental permits', 'Strategic fuel levy'], docsRequired: ['Import permit', 'Quality certificate', 'Bill of lading'], country: 'South Africa' },
  { code: '2710.12', description: 'Light petroleum oils - motor spirit (petrol)', chapter: '27 - Mineral Fuels, Oils & Wax', dutyRate: 0, vatRate: 15, restrictions: ['Fuel levy applies', 'Environmental compliance'], docsRequired: ['Import permit', 'Quality certificate', 'Customs declaration'], country: 'South Africa' },
  { code: '2846.90', description: 'Zirconium compounds - other', chapter: '28 - Inorganic Chemicals', dutyRate: 5, vatRate: 15, restrictions: ['Chemical safety data sheet'], docsRequired: ['Safety data sheet (SDS)', 'Certificate of analysis', 'Import permit'], country: 'South Africa' },
  { code: '3923.21', description: 'Sacks and bags of polymers of ethylene', chapter: '39 - Plastics & Articles Thereof', dutyRate: 20, vatRate: 15, restrictions: ['Environmental levy on plastic bags'], docsRequired: ['Certificate of origin', 'Commercial invoice', 'Bill of lading'], country: 'South Africa' },
  { code: '4011.10', description: 'New pneumatic tyres, of rubber - of a kind used on motor cars', chapter: '40 - Rubber & Articles Thereof', dutyRate: 25, vatRate: 15, restrictions: ['SABS standards compliance'], docsRequired: ['SABS certificate', 'Certificate of origin', 'Bill of lading'], country: 'South Africa' },
  { code: '4411.14', description: 'Fibreboard of wood - MDF with density > 0.8g/cm3', chapter: '44 - Wood & Articles of Wood', dutyRate: 0, vatRate: 15, restrictions: ['ISPM 15 treatment certification'], docsRequired: ['Phytosanitary certificate', 'ISPM 15 compliance', 'Commercial invoice'], country: 'South Africa' },
  { code: '4819.10', description: 'Corrugated paper and paperboard boxes', chapter: '47 - Pulp of Wood & Paper', dutyRate: 0, vatRate: 15, restrictions: [], docsRequired: ['Commercial invoice', 'Bill of lading', 'Packing list'], country: 'South Africa' },
  { code: '5201.00', description: 'Cotton, not carded or combed', chapter: '52 - Cotton', dutyRate: 0, vatRate: 15, restrictions: ['Phytosanitary certificate'], docsRequired: ['Certificate of origin', 'Phytosanitary certificate', 'Commercial invoice'], country: 'South Africa' },
  { code: '6109.10', description: 'T-shirts, singlets and other vests, of cotton, knitted', chapter: '61 - Articles of Apparel & Clothing', dutyRate: 45, vatRate: 15, restrictions: ['Permit required for certain origins', 'Possible anti-dumping duties'], docsRequired: ['Import permit', 'Certificate of origin', 'Commercial invoice'], country: 'South Africa' },
  { code: '6302.21', description: 'Bed linen, printed, of cotton', chapter: '63 - Other Made-Up Textile Articles', dutyRate: 40, vatRate: 15, restrictions: ['Possible import quota'], docsRequired: ['Import permit', 'Certificate of origin', 'Commercial invoice'], country: 'South Africa' },
  { code: '7108.12', description: 'Gold - non-monetary, unwrought, in powder form', chapter: '71 - Natural/Cultured Pearls, Precious Stones', dutyRate: 0, vatRate: 0, restrictions: ['SARB approval required', 'Precious metals control'], docsRequired: ['SARB authority', 'Certificate of origin', 'Customs declaration'], country: 'South Africa' },
  { code: '7208.25', description: 'Hot-rolled steel flat products - thickness < 4.75mm', chapter: '72 - Iron & Steel', dutyRate: 10, vatRate: 15, restrictions: ['ITAC permit required', 'Possible safeguard duties'], docsRequired: ['ITAC import permit', 'Mill test certificate', 'Certificate of origin'], country: 'South Africa' },
  { code: '8407.34', description: 'Spark-ignition reciprocating engines - 1500cc < capacity <= 3000cc', chapter: '84 - Nuclear Reactors, Boilers, Machinery', dutyRate: 0, vatRate: 15, restrictions: ['Emissions compliance'], docsRequired: ['Certificate of origin', 'Commercial invoice', 'Bill of lading'], country: 'South Africa' },
  { code: '8471.30', description: 'Portable digital automatic data processing machines (laptops)', chapter: '84 - Nuclear Reactors, Boilers, Machinery', dutyRate: 0, vatRate: 15, restrictions: ['ICASA approval for radio devices'], docsRequired: ['Certificate of origin', 'Commercial invoice', 'Bill of lading'], country: 'South Africa' },
  { code: '8517.12', description: 'Smartphones and cellular phones', chapter: '85 - Electrical Machinery & Equipment', dutyRate: 0, vatRate: 15, restrictions: ['ICASA type approval', 'IMEI registration'], docsRequired: ['ICASA letter of authority', 'Certificate of origin', 'Commercial invoice'], country: 'South Africa' },
  { code: '8703.23', description: 'Motor vehicles - 1000cc < engine <= 1500cc', chapter: '87 - Vehicles, Aircraft, Vessels', dutyRate: 18, vatRate: 15, restrictions: ['Letters of Authority (NCOP)', 'LCVS compliance', 'AUC approval for used vehicles'], docsRequired: ['LA from ITAC', 'NRCS letter of authority', 'SA Police clearance', 'Roadworthy certificate'], country: 'South Africa' },
  { code: '8703.24', description: 'Motor vehicles - 1500cc < engine <= 3000cc', chapter: '87 - Vehicles, Aircraft, Vessels', dutyRate: 25, vatRate: 15, restrictions: ['Letters of Authority (NCOP)', 'Carbon tax applicable', 'Ad valorem excise'], docsRequired: ['LA from ITAC', 'NRCS letter of authority', 'SA Police clearance', 'CO2 emissions certificate'], country: 'South Africa' },
  { code: '8708.99', description: 'Parts & accessories of motor vehicles - other', chapter: '87 - Vehicles, Aircraft, Vessels', dutyRate: 0, vatRate: 15, restrictions: ['NRCS standards for safety parts'], docsRequired: ['Certificate of origin', 'Commercial invoice', 'Bill of lading'], country: 'South Africa' },
  { code: '9018.90', description: 'Medical, surgical, dental or veterinary instruments and appliances', chapter: '90 - Optical, Photographic, Medical Instruments', dutyRate: 0, vatRate: 15, restrictions: ['SAHPRA registration'], docsRequired: ['SAHPRA registration', 'Certificate of origin', 'Commercial invoice'], country: 'South Africa' },
  { code: '9603.21', description: 'Toothbrushes, including dental-plate brushes', chapter: '96 - Miscellaneous Manufactured Articles', dutyRate: 20, vatRate: 15, restrictions: [], docsRequired: ['Certificate of origin', 'Commercial invoice', 'Bill of lading'], country: 'South Africa' },
  { code: '0102.29', description: 'Live bovine animals - other (for slaughter)', chapter: '01 - Live Animals', dutyRate: 5, vatRate: 15, restrictions: ['Veterinary import permit', 'Farm quarantine'], docsRequired: ['Veterinary certificate', 'Import permit', 'Quarantine facility approval'], country: 'Botswana' },
  { code: '0303.13', description: 'Fish - fresh or chilled, salmonidae', chapter: '03 - Fish & Crustaceans', dutyRate: 5, vatRate: 15, restrictions: ['Marine resources permit'], docsRequired: ['Catch certificate', 'Health certificate', 'Bill of lading'], country: 'Namibia' },
  { code: '0803.90', description: 'Bananas, including plantains, fresh or dried', chapter: '08 - Edible Fruit & Nuts', dutyRate: 0, vatRate: 15, restrictions: ['Phytosanitary certificate'], docsRequired: ['Phytosanitary certificate', 'Certificate of origin', 'Bill of lading'], country: 'Mozambique' },
  { code: '2601.11', description: 'Iron ores - non-agglomerated, with < 60% Fe content', chapter: '26 - Ores, Slag & Ash', dutyRate: 0, vatRate: 15, restrictions: [], docsRequired: ['Certificate of analysis', 'Certificate of origin', 'Bill of lading'], country: 'South Africa' },
  { code: '3004.90', description: 'Medicaments - other, consisting of mixed or unmixed products', chapter: '30 - Pharmaceutical Products', dutyRate: 0, vatRate: 15, restrictions: ['SAHPRA registration required', 'WHO-GMP certification'], docsRequired: ['SAHPRA registration', 'Certificate of analysis', 'Good Manufacturing Practice certificate'], country: 'South Africa' },
  { code: '6110.20', description: 'Jerseys, pullovers, cardigans - of cotton, knitted', chapter: '61 - Articles of Apparel & Clothing', dutyRate: 45, vatRate: 15, restrictions: ['AGOA preferences may apply', 'Origin certificate required'], docsRequired: ['Certificate of origin', 'AGOA certificate (if applicable)', 'Commercial invoice'], country: 'South Africa' },
  { code: '7208.25', description: 'Hot-rolled steel flat products - thickness < 4.75mm', chapter: '72 - Iron & Steel', dutyRate: 10, vatRate: 15, restrictions: ['ITAC permit required', 'Possible safeguard duties'], docsRequired: ['ITAC import permit', 'Mill test certificate', 'Certificate of origin'], country: 'Kenya' },
  { code: '8703.24', description: 'Motor vehicles - 1500cc < engine <= 3000cc', chapter: '87 - Vehicles, Aircraft, Vessels', dutyRate: 35, vatRate: 18, restrictions: ['Import declaration', 'KBS inspection'], docsRequired: ['Import declaration', 'Certificate of origin', 'Roadworthy certificate'], country: 'Kenya' },
  { code: '8517.12', description: 'Smartphones and cellular phones', chapter: '85 - Electrical Machinery & Equipment', dutyRate: 25, vatRate: 18, restrictions: ['Type approval required'], docsRequired: ['Type approval certificate', 'Certificate of origin', 'Commercial invoice'], country: 'Nigeria' },
];

export function HSCodeValidator() {
  const [search, setSearch] = useState('');
  const [selectedCode, setSelectedCode] = useState<HSCodeEntry | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const results = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase().trim();
    return HS_CODES.filter(c =>
      c.code.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.chapter.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [search]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by HS code, description, or chapter..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setSelectedCode(null); }}
          className="pl-10 h-11"
        />
      </div>

      {results.length > 0 && !selectedCode && (
        <div className="border border-gray-200 rounded-lg max-h-[280px] overflow-y-auto">
          {results.map((item) => (
            <button
              key={item.code + item.country}
              onClick={() => setSelectedCode(item)}
              className="w-full text-left px-4 py-3 hover:bg-emerald-50 border-b border-gray-100 last:border-0 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-bold text-emerald-700 font-mono">{item.code}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-medium">{item.country}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{item.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-[#0B1F3A]">{item.dutyRate}%</span>
                  <p className="text-[10px] text-gray-400">duty</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {search.trim() && results.length === 0 && !selectedCode && (
        <div className="text-center py-8">
          <AlertTriangle className="h-8 w-8 text-amber-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">No HS codes found for &quot;{search}&quot;</p>
          <p className="text-xs text-gray-400 mt-1">Try searching by code (e.g. 8703.24) or keyword (e.g. motor, steel, cotton)</p>
        </div>
      )}

      {!search.trim() && !selectedCode && (
        <div className="text-center py-8">
          <ShieldCheck className="h-10 w-10 text-gray-300 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-500">Search Harmonized System Codes</p>
          <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">Enter an HS code, product description, or chapter name to find tariff classifications across African jurisdictions.</p>
          <div className="flex flex-wrap justify-center gap-1.5 mt-4">
            {['8703.24', 'cotton', 'steel', 'coffee', 'motor vehicles'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearch(tag)}
                className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedCode && (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white font-mono">{selectedCode.code}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">{selectedCode.country}</span>
                </div>
                <p className="text-sm text-emerald-100 mt-1 leading-relaxed">{selectedCode.description}</p>
                <p className="text-xs text-emerald-200 mt-1">{selectedCode.chapter}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedCode(null)} className="text-white hover:bg-white/20 shrink-0">
                Search again
              </Button>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-xs text-blue-600 font-medium mb-1">Customs Duty</p>
                <p className="text-2xl font-bold text-blue-800">{selectedCode.dutyRate}<span className="text-sm">%</span></p>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-center">
                <p className="text-xs text-amber-600 font-medium mb-1">VAT</p>
                <p className="text-2xl font-bold text-amber-800">{selectedCode.vatRate}<span className="text-sm">%</span></p>
              </div>
            </div>

            {selectedCode.restrictions.length > 0 && (
              <div>
                <button onClick={() => setExpandedSection(expandedSection === 'restrictions' ? null : 'restrictions')} className="flex items-center justify-between w-full text-left">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-semibold text-[#0B1F3A]">Import Restrictions</span>
                  </div>
                  {expandedSection === 'restrictions' ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
                </button>
                {(expandedSection === 'restrictions' || expandedSection === null) && (
                  <ul className="mt-2 space-y-1.5 ml-6">
                    {selectedCode.restrictions.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div>
              <button onClick={() => setExpandedSection(expandedSection === 'docs' ? null : 'docs')} className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-semibold text-[#0B1F3A]">Required Documents</span>
                </div>
                {expandedSection === 'docs' ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
              </button>
              {expandedSection === 'docs' && (
                <ul className="mt-2 space-y-1.5 ml-6">
                  {selectedCode.docsRequired.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex gap-2 bg-gray-50 rounded-lg p-3">
              <Info className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Rates shown are for general guidance. Actual duty rates may vary based on country of origin, trade agreements (AGOA, SADC, TFTA), and specific product characteristics. Consult a licensed customs broker for accurate classification.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
