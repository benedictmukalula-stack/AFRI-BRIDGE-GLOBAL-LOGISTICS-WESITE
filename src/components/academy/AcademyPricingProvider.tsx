'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { SupportedCurrency } from '@/lib/academyCurrency';

interface AcademyPricingContextValue {
  selectedCurrency: SupportedCurrency;
  setSelectedCurrency: (currency: SupportedCurrency) => void;
}

const AcademyPricingContext = createContext<AcademyPricingContextValue>({
  selectedCurrency: 'ZAR',
  setSelectedCurrency: () => {},
});

/**
 * AcademyPricingProvider
 *
 * Hydration-safe: initial state is always 'ZAR' with no browser API access.
 * Uses simple React state — no localStorage, no window, no events.
 */
export function AcademyPricingProvider({ children }: { children: ReactNode }) {
  const [selectedCurrency, setSelectedCurrency] = useState<SupportedCurrency>('ZAR');

  return (
    <AcademyPricingContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      {children}
    </AcademyPricingContext.Provider>
  );
}

export function useAcademyCurrency() {
  return useContext(AcademyPricingContext);
}
