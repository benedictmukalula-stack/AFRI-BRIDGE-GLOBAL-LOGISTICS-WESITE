'use client';

import { useAcademyCurrency } from './AcademyPricingProvider';
import { SUPPORTED_CURRENCIES } from '@/lib/academyCurrency';
import type { SupportedCurrency } from '@/lib/academyCurrency';

/**
 * CurrencySelector — display-only currency toggle for Academy pages.
 *
 * Consumes AcademyPricingProvider context to update selected currency.
 * Renders as a compact dropdown with currency code and symbol.
 * NO browser APIs, NO localStorage, NO window — hydration safe.
 */
export function CurrencySelector() {
  const { selectedCurrency, setSelectedCurrency } = useAcademyCurrency();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && typeof value === 'string') {
      setSelectedCurrency(value as SupportedCurrency);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="academy-currency-select" className="text-xs font-medium text-gray-500 whitespace-nowrap">
        Display Currency:
      </label>
      <select
        id="academy-currency-select"
        value={selectedCurrency}
        onChange={handleChange}
        className="h-9 px-3 pr-8 text-sm font-semibold bg-white border border-gray-200 rounded-lg text-[#0B1F3A] appearance-none cursor-pointer hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M3 5l3 3 3-3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 8px center',
        }}
      >
        {SUPPORTED_CURRENCIES.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} ({c.symbol})
          </option>
        ))}
      </select>
    </div>
  );
}
