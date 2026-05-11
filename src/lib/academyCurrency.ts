// =============================================================================
// Academy Currency Display Engine — Server-Safe Module
// =============================================================================
// PURE functions and constants only.
// NO window, NO localStorage, NO browser APIs.
// Safe to import in both server and client components.
// =============================================================================

export type SupportedCurrency =
  | 'ZAR'
  | 'ZMW'
  | 'USD'
  | 'GBP'
  | 'EUR'
  | 'BWP'
  | 'NAD'
  | 'MZN'
  | 'TZS'
  | 'KES'
  | 'AED';

export interface CurrencyInfo {
  code: SupportedCurrency;
  symbol: string;
  label: string;
  rateFromZar: number;
  decimals: number;
}

/** Static fallback conversion rates FROM ZAR */
export const FALLBACK_RATES: Record<SupportedCurrency, number> = {
  ZAR: 1,
  ZMW: 1.45,
  USD: 0.055,
  GBP: 0.044,
  EUR: 0.051,
  BWP: 0.74,
  NAD: 1,
  MZN: 3.5,
  TZS: 140,
  KES: 7.1,
  AED: 0.2,
};

export const SUPPORTED_CURRENCIES: CurrencyInfo[] = [
  { code: 'ZAR', symbol: 'R', label: 'South African Rand', rateFromZar: 1, decimals: 0 },
  { code: 'USD', symbol: '$', label: 'US Dollar', rateFromZar: 0.055, decimals: 2 },
  { code: 'GBP', symbol: '\u00A3', label: 'British Pound', rateFromZar: 0.044, decimals: 2 },
  { code: 'EUR', symbol: '\u20AC', label: 'Euro', rateFromZar: 0.051, decimals: 2 },
  { code: 'ZMW', symbol: 'ZK', label: 'Zambian Kwacha', rateFromZar: 1.45, decimals: 0 },
  { code: 'BWP', symbol: 'P', label: 'Botswana Pula', rateFromZar: 0.74, decimals: 2 },
  { code: 'NAD', symbol: 'N$', label: 'Namibian Dollar', rateFromZar: 1, decimals: 0 },
  { code: 'MZN', symbol: 'MT', label: 'Mozambican Metical', rateFromZar: 3.5, decimals: 0 },
  { code: 'TZS', symbol: 'TSh', label: 'Tanzanian Shilling', rateFromZar: 140, decimals: 0 },
  { code: 'KES', symbol: 'KSh', label: 'Kenyan Shilling', rateFromZar: 7.1, decimals: 0 },
  { code: 'AED', symbol: 'AED', label: 'UAE Dirham', rateFromZar: 0.2, decimals: 2 },
];

const currencyMap = new Map<SupportedCurrency, CurrencyInfo>(
  SUPPORTED_CURRENCIES.map((c) => [c.code, c]),
);

/** Check if a currency code is supported */
export function isSupportedCurrency(code: string): code is SupportedCurrency {
  return code in FALLBACK_RATES;
}

/** Get human-readable label for a currency */
export function getCurrencyLabel(code: SupportedCurrency): string {
  const info = currencyMap.get(code);
  return info ? info.label : 'South African Rand';
}

/** Get currency info object */
export function getCurrencyInfo(code: SupportedCurrency): CurrencyInfo | undefined {
  return currencyMap.get(code);
}

/**
 * Convert an amount from ZAR to the target currency.
 * Returns the converted amount as a number.
 * If currency is unsupported or amountZar is missing, returns amountZar as-is (ZAR).
 */
export function convertFromZar(
  amountZar: number | undefined | null,
  currency: string = 'ZAR',
): number {
  if (amountZar == null || !Number.isFinite(amountZar)) return 0;

  if (currency === 'ZAR' || !isSupportedCurrency(currency)) {
    return amountZar;
  }

  const rate = FALLBACK_RATES[currency];
  if (!rate || !Number.isFinite(rate)) {
    return amountZar;
  }

  return amountZar * rate;
}

/**
 * Format a converted amount with the correct currency symbol and decimals.
 * E.g. formatCurrency(15000, 'ZAR') => "R 15,000"
 * E.g. formatCurrency(825, 'USD')  => "$ 825.00"
 */
export function formatCurrency(
  amount: number | undefined | null,
  currency: string = 'ZAR',
): string {
  if (amount == null || !Number.isFinite(amount)) return 'Price on request';

  const info = currencyMap.get(currency as SupportedCurrency);

  if (!info) {
    // Fallback to ZAR formatting
    return 'R ' + Math.round(amount).toLocaleString('en-ZA');
  }

  const formattedValue =
    info.decimals === 0
      ? Math.round(amount).toLocaleString('en-ZA')
      : amount.toLocaleString('en-ZA', {
          minimumFractionDigits: info.decimals,
          maximumFractionDigits: info.decimals,
        });

  return info.symbol + ' ' + formattedValue;
}

/**
 * Convenience: convert from ZAR and format in one step.
 */
export function convertAndFormat(
  amountZar: number | undefined | null,
  currency: string = 'ZAR',
): string {
  if (amountZar == null || !Number.isFinite(amountZar)) return 'Price on request';
  const converted = convertFromZar(amountZar, currency);
  return formatCurrency(converted, currency);
}

/** Static ZAR format — server-safe, no context needed */
export function formatZar(amountZar: number | undefined | null): string {
  if (amountZar == null || !Number.isFinite(amountZar)) return 'Price on request';
  return 'R ' + Math.round(amountZar).toLocaleString('en-ZA');
}
