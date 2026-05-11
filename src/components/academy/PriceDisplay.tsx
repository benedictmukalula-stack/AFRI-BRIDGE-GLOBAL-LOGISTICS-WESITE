'use client';

import { useAcademyCurrency } from './AcademyPricingProvider';
import { convertAndFormat } from '@/lib/academyCurrency';

interface PriceDisplayProps {
  /** Base price in South African Rand — source of truth */
  amountZar: number | undefined | null;
  /** Optional additional text like " per learner" or " per programme" */
  suffix?: string;
  /** Optional CSS class */
  className?: string;
  /** Optional size variant */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * PriceDisplay — renders a price converted from ZAR to the selected currency.
 *
 * Consumes AcademyPricingProvider context.
 * Falls back to "Price on request" if amountZar is missing.
 * Falls back to ZAR if the selected currency is invalid.
 *
 * Hydration safe: initial render always shows ZAR (matching server HTML).
 */
export function PriceDisplay({
  amountZar,
  suffix = '',
  className = '',
  size = 'md',
}: PriceDisplayProps) {
  const { selectedCurrency } = useAcademyCurrency();

  if (amountZar == null || !Number.isFinite(amountZar)) {
    return (
      <span className={`text-gray-400 italic ${className}`}>
        Price on request
      </span>
    );
  }

  const formatted = convertAndFormat(amountZar, selectedCurrency);
  const sizeClass =
    size === 'lg'
      ? 'text-xl font-bold'
      : size === 'sm'
        ? 'text-sm font-semibold'
        : 'text-lg font-bold';

  const colorClass = 'text-[#0B1F3A]';

  return (
    <span className={`${sizeClass} ${colorClass} ${className}`}>
      {formatted}
      {suffix && <span className="text-sm font-normal text-gray-500"> {suffix}</span>}
    </span>
  );
}

/**
 * PriceDisplayInline — same as PriceDisplay but uses text-emerald-600 color
 * for use in sidebars and highlights.
 */
export function PriceDisplayHighlight({
  amountZar,
  suffix = '',
  className = '',
  size = 'md',
}: PriceDisplayProps) {
  const { selectedCurrency } = useAcademyCurrency();

  if (amountZar == null || !Number.isFinite(amountZar)) {
    return (
      <span className={`text-gray-400 italic ${className}`}>
        Price on request
      </span>
    );
  }

  const formatted = convertAndFormat(amountZar, selectedCurrency);
  const sizeClass =
    size === 'lg'
      ? 'text-xl font-bold'
      : size === 'sm'
        ? 'text-sm font-semibold'
        : 'text-lg font-bold';

  return (
    <span className={`${sizeClass} text-emerald-600 ${className}`}>
      {formatted}
      {suffix && <span className="text-sm font-normal text-gray-500"> {suffix}</span>}
    </span>
  );
}
