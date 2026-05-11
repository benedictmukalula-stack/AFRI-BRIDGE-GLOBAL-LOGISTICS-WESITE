// =============================================================================
// Afri-Bridge Academy — Payment Provider Architecture
// =============================================================================
// Server-safe module. No browser APIs. No external API calls.
//
// ARCHITECTURE NOTES
// ─────────────────────────────────────────────────────────────────────────────
// This module defines the payment provider types, configuration, and status
// model for future payment integration. It is designed to be extended when
// real payment processing is activated.
//
// PLANNED PROVIDERS:
//   1. Paystack     — Card & mobile money (ZA, NG, GH, KE)
//   2. Flutterwave  — Card, bank transfer, mobile money (30+ African markets)
//   3. Stripe       — International card payments
//   4. Manual Bank Transfer — Direct EFT to Afri-Bridge FNB account
//   5. Invoice Request      — Proforma invoice generated and emailed
//
// INTEGRATION APPROACH:
//   - Each provider is a typed configuration object (no SDK imports yet)
//   - When activating a provider, install its SDK and implement the handler
//     functions defined in the provider's `handlerFile` field
//   - The payment API routes (create / webhook) will switch on provider ID
//     to dispatch to the correct handler
//   - All real API keys MUST be stored as server-side environment variables
//     (PAYSTACK_SECRET_KEY, FLUTTERWAVE_SECRET_KEY, STRIPE_SECRET_KEY)
//     and MUST NEVER be committed to source control or exposed to the client
//
// SAFETY RULES:
//   - DO NOT add real API keys to this file
//   - DO NOT process real money from this module
//   - DO NOT call external APIs from this module
//   - DO NOT import this into client-side components unless needed for enums
//   - The frontend MUST work if these APIs are unavailable (graceful degradation)
// =============================================================================

// ---------------------------------------------------------------------------
// Payment Status Model
// ---------------------------------------------------------------------------

/**
 * The lifecycle of an Academy payment.
 *
 * State transitions:
 *
 *   pending ──► paid
 *     │
 *     ├──► failed
 *     ├──► cancelled
 *     ├──► awaiting_verification   (manual bank transfer)
 *     └──► invoice_requested       (invoice payment method)
 *
 *   awaiting_verification ──► paid
 *     │
 *     └──► failed             (verification rejected / timeout)
 *
 *   invoice_requested ──► pending    (invoice viewed, awaiting payment)
 *     │
 *     └──► cancelled          (invoice expired / cancelled)
 */
export type PaymentStatus =
  | 'pending'
  | 'paid'
  | 'failed'
  | 'cancelled'
  | 'awaiting_verification'
  | 'invoice_requested';

/** Human-readable labels for each payment status */
export const PAYMENT_STATUS_LABELS: Record<PaymentStatus, string> = {
  pending: 'Payment Pending',
  paid: 'Payment Confirmed',
  failed: 'Payment Failed',
  cancelled: 'Payment Cancelled',
  awaiting_verification: 'Awaiting Verification',
  invoice_requested: 'Invoice Requested',
};

/** Tailwind colour classes for status badges */
export const PAYMENT_STATUS_COLORS: Record<PaymentStatus, { bg: string; text: string; dot: string }> = {
  pending: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  paid: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  failed: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
  cancelled: { bg: 'bg-gray-50', text: 'text-gray-700', dot: 'bg-gray-400' },
  awaiting_verification: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
  invoice_requested: { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500' },
};

/**
 * Valid next statuses for a given current status.
 * Used for frontend/backend validation to prevent invalid transitions.
 */
export const PAYMENT_STATUS_TRANSITIONS: Record<PaymentStatus, PaymentStatus[]> = {
  pending: ['paid', 'failed', 'cancelled', 'awaiting_verification', 'invoice_requested'],
  paid: [], // terminal state
  failed: ['pending'], // allow retry
  cancelled: ['pending'], // allow re-registration
  awaiting_verification: ['paid', 'failed'],
  invoice_requested: ['pending', 'cancelled'],
};

/** Check whether a status transition is valid */
export function isValidTransition(from: PaymentStatus, to: PaymentStatus): boolean {
  return PAYMENT_STATUS_TRANSITIONS[from].includes(to);
}

// ---------------------------------------------------------------------------
// Provider Types
// ---------------------------------------------------------------------------

/** Unique provider identifiers */
export type PaymentProviderId = 'paystack' | 'flutterwave' | 'stripe' | 'bank_transfer' | 'invoice';

/**
 * Supported currencies per provider.
 * 'ALL' means any currency supported by the Academy currency engine.
 */
export type ProviderCurrencyScope = 'ALL' | string[];

/** A single payment provider configuration */
export interface PaymentProviderConfig {
  /** Unique provider identifier */
  id: PaymentProviderId;

  /** Human-readable display name */
  displayName: string;

  /** Brief description shown in the UI */
  description: string;

  /** Whether this provider is currently active */
  active: boolean;

  /** Whether this provider requires real-time payment processing */
  isLive: boolean;

  /**
   * Supported currencies.
   * 'ALL' = any currency from the Academy currency engine.
   * Array = only specific ISO codes.
   */
  supportedCurrencies: ProviderCurrencyScope;

  /**
   * Regions where this provider operates.
   * Used for auto-selecting providers based on registrant country.
   */
  regions: string[];

  /**
   * Payment methods supported by this provider.
   * Maps to the PaymentMethod type in academyRegistration.ts.
   */
  paymentMethods: string[];

  /**
   * Maximum payment amount in ZAR before requiring additional verification.
   */
  maxAmountZar: number;

  /**
   * Whether this provider supports automatic payment confirmation via webhook.
   */
  supportsWebhook: boolean;

  /**
   * Environment variable name for the secret key.
   * DO NOT put actual keys here.
   */
  secretKeyEnvVar: string;

  /**
   * Environment variable name for the public key (if applicable).
   * DO NOT put actual keys here.
   */
  publicKeyEnvVar: string | null;

  /**
   * Path to the handler module (for future implementation).
   * This file would contain the actual SDK integration code.
   */
  handlerFile: string;

  /**
   * Documentation / integration notes.
   */
  notes: string[];
}

// ---------------------------------------------------------------------------
// Provider Configurations
// ---------------------------------------------------------------------------

/**
 * Master list of all planned payment providers.
 *
 * When activating a provider:
 * 1. Set `active: true` and `isLive: true`
 * 2. Add the secret key to the server environment
 * 3. Implement the handler in the file specified by `handlerFile`
 * 4. Update the API routes to dispatch to the handler
 */
export const PAYMENT_PROVIDERS: PaymentProviderConfig[] = [
  {
    id: 'paystack',
    displayName: 'Paystack',
    description:
      'Card and mobile money payments across Africa. Supports Visa, Mastercard, Verve, and mobile money in Nigeria, Ghana, Kenya, and South Africa.',
    active: false,
    isLive: false,
    supportedCurrencies: ['ZAR', 'NGN', 'GHS', 'KES', 'USD'],
    regions: ['South Africa', 'Nigeria', 'Ghana', 'Kenya'],
    paymentMethods: ['card', 'mobile_money'],
    maxAmountZar: 500000,
    supportsWebhook: true,
    secretKeyEnvVar: 'PAYSTACK_SECRET_KEY',
    publicKeyEnvVar: 'PAYSTACK_PUBLIC_KEY',
    handlerFile: 'src/lib/payments/paystackHandler.ts',
    notes: [
      'Requires Paystack business account registration',
      'Test mode available with test keys',
      'Webhook endpoint: /api/academy/payments/webhook (provider=paystack)',
      'Redirect flow: user is redirected to Paystack hosted checkout',
      'Transaction verification required on server side after callback',
      'Supports recurring payments for subscription-based courses',
      'Mobile money support: MTN Mobile Money, Vodafone Cash, Airtel Money',
    ],
  },
  {
    id: 'flutterwave',
    displayName: 'Flutterwave',
    description:
      'Pan-African payment gateway supporting 30+ currencies, mobile money, bank transfers, and card payments across Africa.',
    active: false,
    isLive: false,
    supportedCurrencies: 'ALL',
    regions: [
      'South Africa', 'Nigeria', 'Kenya', 'Ghana', 'Tanzania', 'Uganda',
      'Zambia', 'Mozambique', 'Zimbabwe', 'Botswana', 'Namibia',
      'DRC Congo', 'Rwanda', 'Senegal', 'Cameroon',
    ],
    paymentMethods: ['card', 'bank_transfer', 'mobile_money'],
    maxAmountZar: 1000000,
    supportsWebhook: true,
    secretKeyEnvVar: 'FLUTTERWAVE_SECRET_KEY',
    publicKeyEnvVar: 'FLUTTERWAVE_PUBLIC_KEY',
    handlerFile: 'src/lib/payments/flutterwaveHandler.ts',
    notes: [
      'Broadest African market coverage — ideal for pan-African Academy learners',
      'Supports M-Pesa, Airtel Money, MTN Mobile Money, EcoCash, and more',
      'Bank transfer via Flutterwave virtual accounts for NGN, GHS, KES',
      'Test mode with sandbox environment available',
      'Webhook signature verification required (uses FLUTTERWAVE_WEBHOOK_SECRET)',
      'Transaction verification endpoint: GET /v3/transactions/{id}/verify',
      'Supports split payments for corporate/delegate registrations',
    ],
  },
  {
    id: 'stripe',
    displayName: 'Stripe',
    description:
      'International card payments for global learners. Supports Visa, Mastercard, American Express, and Apple Pay.',
    active: false,
    isLive: false,
    supportedCurrencies: ['ZAR', 'USD', 'EUR', 'GBP', 'KES'],
    regions: ['International'],
    paymentMethods: ['card'],
    maxAmountZar: 2000000,
    supportsWebhook: true,
    secretKeyEnvVar: 'STRIPE_SECRET_KEY',
    publicKeyEnvVar: 'STRIPE_PUBLISHABLE_KEY',
    handlerFile: 'src/lib/payments/stripeHandler.ts',
    notes: [
      'Best for international learners paying in USD, EUR, or GBP',
      'Stripe Elements for embedded card input (no redirect)',
      'Supports Apple Pay, Google Pay via Payment Request API',
      'Test mode with test card numbers (4242... for success)',
      'Webhook: stripe-signature header verification required',
      'Customer portal for saved cards and payment history',
      'Requires Stripe account with South Africa capabilities enabled',
    ],
  },
  {
    id: 'bank_transfer',
    displayName: 'Manual Bank Transfer (EFT)',
    description:
      'Direct electronic funds transfer to the Afri-Bridge FNB account. Proof of payment required for verification.',
    active: true,
    isLive: false,
    supportedCurrencies: ['ZAR'],
    regions: ['South Africa'],
    paymentMethods: ['bank_transfer'],
    maxAmountZar: 5000000,
    supportsWebhook: false,
    secretKeyEnvVar: '',
    publicKeyEnvVar: null,
    handlerFile: 'src/lib/payments/bankTransferHandler.ts',
    notes: [
      'Primary manual payment method for South African learners',
      'Bank: FNB (First National Bank)',
      'Account Name: Afri-Bridge (Pty) Ltd',
      'Account Number: 6284 9100 327',
      'Branch Code: 250655',
      'Payment reference MUST be the registration reference number (e.g. ABR-2026-00001)',
      'Proof of payment sent to finance@afribridge.co.za',
      'Status moves to awaiting_verification after submission',
      'Admin manually verifies payment and updates status to paid',
      'No API integration needed — purely manual workflow',
    ],
  },
  {
    id: 'invoice',
    displayName: 'Invoice Request',
    description:
      'A formal proforma invoice is generated and emailed to the billing contact. Payment terms: 14 days from invoice date.',
    active: true,
    isLive: false,
    supportedCurrencies: ['ZAR', 'USD'],
    regions: ['South Africa', 'International'],
    paymentMethods: ['invoice', 'purchase_order'],
    maxAmountZar: 10000000,
    supportsWebhook: false,
    secretKeyEnvVar: '',
    publicKeyEnvVar: null,
    handlerFile: 'src/lib/payments/invoiceHandler.ts',
    notes: [
      'Used primarily for corporate registrations and purchase orders',
      'Proforma invoice generated by the Academy admin team',
      'Invoice sent to company contact email within 2 business hours',
      'Payment terms: 14 days from invoice date unless otherwise agreed',
      'Status moves to invoice_requested after registration',
      'When payment is received, admin updates status to paid',
      'Supports custom payment terms for enterprise agreements',
      'Can be combined with purchase order numbers for tracking',
      'Registration confirmed only upon payment receipt',
    ],
  },
];

// ---------------------------------------------------------------------------
// Provider Lookup Helpers
// ---------------------------------------------------------------------------

/** Get a single provider config by ID */
export function getProviderById(id: PaymentProviderId): PaymentProviderConfig | undefined {
  return PAYMENT_PROVIDERS.find((p) => p.id === id);
}

/** Get only the currently active providers */
export function getActiveProviders(): PaymentProviderConfig[] {
  return PAYMENT_PROVIDERS.filter((p) => p.active);
}

/** Get providers that support a specific currency */
export function getProvidersForCurrency(currencyCode: string): PaymentProviderConfig[] {
  return PAYMENT_PROVIDERS.filter((p) => {
    if (p.supportedCurrencies === 'ALL') return true;
    return p.supportedCurrencies.includes(currencyCode);
  });
}

/** Get providers that support a specific region */
export function getProvidersForRegion(region: string): PaymentProviderConfig[] {
  return PAYMENT_PROVIDERS.filter((p) => {
    if (p.regions.includes('International')) return true;
    return p.regions.includes(region);
  });
}

/**
 * Auto-select the best provider for a given currency + region.
 * Priority: active providers first, then by match specificity.
 */
export function suggestProvider(currencyCode: string, region: string): PaymentProviderConfig | undefined {
  const active = getActiveProviders();

  // 1. Exact currency + region match
  const exact = active.find((p) => {
    const hasCurrency = p.supportedCurrencies === 'ALL' || p.supportedCurrencies.includes(currencyCode);
    const hasRegion = p.regions.includes(region) || p.regions.includes('International');
    return hasCurrency && hasRegion;
  });
  if (exact) return exact;

  // 2. Currency match (any region)
  const currencyMatch = active.find((p) => {
    return p.supportedCurrencies === 'ALL' || p.supportedCurrencies.includes(currencyCode);
  });
  if (currencyMatch) return currencyMatch;

  // 3. Bank transfer as universal fallback for ZAR
  if (currencyCode === 'ZAR') {
    return getProviderById('bank_transfer');
  }

  // 4. Invoice as final fallback
  return getProviderById('invoice');
}

// ---------------------------------------------------------------------------
// Payment Request / Response Types (for API route contracts)
// ---------------------------------------------------------------------------

/** Payload sent from the frontend to the create payment endpoint */
export interface PaymentCreateRequest {
  /** Registration ID from the registration flow */
  registrationId: string;
  /** Registration reference number (ABR-YYYY-XXXXX) */
  referenceNumber: string;
  /** Selected payment provider */
  providerId: PaymentProviderId;
  /** Amount in ZAR (base billing currency) */
  amountZar: number;
  /** Currency the user selected in the UI */
  displayCurrency: string;
  /** Converted amount in the display currency */
  displayAmount: number;
  /** Course slug for context */
  courseSlug: string;
  /** Course title for receipt/invoice */
  courseTitle: string;
  /** Registration type (individual or company) */
  registrationType: 'individual' | 'company';
  /** Learner email for payment notifications */
  payerEmail: string;
  /** Learner/company name */
  payerName: string;
  /** Optional redirect URL after payment completion */
  redirectUrl?: string;
}

/** Response returned from the create payment endpoint */
export interface PaymentCreateResponse {
  success: boolean;
  /** Unique payment intent/transaction ID */
  paymentId: string;
  /** Current payment status */
  status: PaymentStatus;
  /** Provider-specific checkout URL (for redirect-based providers) */
  checkoutUrl?: string;
  /** Provider-specific authorization key (for embedded providers like Stripe) */
  clientSecret?: string;
  /** Human-readable message */
  message: string;
  /** ISO timestamp of creation */
  createdAt: string;
}

/** Standard webhook payload (provider-agnostic envelope) */
export interface PaymentWebhookPayload {
  /** Provider that sent the webhook */
  provider: PaymentProviderId;
  /** Provider-specific event type (e.g. 'charge.success', 'payment_intent.succeeded') */
  eventType: string;
  /** Provider-specific transaction reference */
  providerTransactionId: string;
  /** Afri-Bridge registration reference */
  registrationReference: string;
  /** Payment status from the provider */
  status: PaymentStatus;
  /** Amount paid (in smallest currency unit from provider, e.g. cents) */
  amountProvider: number;
  /** Amount in ZAR (converted) */
  amountZar: number;
  /** Currency code used for the payment */
  currency: string;
  /** ISO timestamp from provider */
  providerTimestamp: string;
  /** Raw provider payload (for audit/debugging, not for business logic) */
  rawPayload?: Record<string, unknown>;
}

/** Standard webhook verification result */
export interface PaymentWebhookResult {
  success: boolean;
  verified: boolean;
  /** Human-readable message */
  message: string;
  /** Updated payment status */
  newStatus: PaymentStatus;
  /** ISO timestamp of processing */
  processedAt: string;
}

// ---------------------------------------------------------------------------
// Architecture Notes (for developer reference)
// ---------------------------------------------------------------------------

/**
 * FUTURE INTEGRATION CHECKLIST
 *
 * When activating a payment provider, follow these steps:
 *
 * 1. ENVIRONMENT SETUP
 *    - Add provider secret/public keys to .env.local (server only)
 *    - Add keys to deployment environment (Vercel/EC2/etc.)
 *    - DO NOT commit keys to git
 *
 * 2. HANDLER IMPLEMENTATION
 *    - Create the handler file (e.g. src/lib/payments/paystackHandler.ts)
 *    - Implement initializePayment(request): PaymentCreateResponse
 *    - Implement verifyWebhook(payload): PaymentWebhookResult
 *    - Implement verifyTransaction(transactionId): { status, amount }
 *
 * 3. API ROUTE WIRING
 *    - Update /api/academy/payments/create/route.ts
 *      - Import the handler
 *      - Dispatch to handler based on request.providerId
 *    - Update /api/academy/payments/webhook/route.ts
 *      - Verify webhook signature using provider's secret
 *      - Dispatch to handler for processing
 *      - Return appropriate response to provider
 *
 * 4. DATABASE SCHEMA (future Prisma migration)
 *    - Create Payment model linked to Registration
 *    - Fields: id, registrationId, providerId, providerTransactionId,
 *      amountZar, displayCurrency, displayAmount, status, paidAt,
 *      webhookPayload (JSON), createdAt, updatedAt
 *
 * 5. FRONTEND GRACEFUL DEGRADATION
 *    - Payment page must work if API is unavailable
 *    - Show manual fallback options (bank transfer, invoice)
 *    - Display clear error messaging with WhatsApp/phone contacts
 *    - Never block the user from completing registration due to API errors
 *
 * 6. TESTING
 *    - Test with provider sandbox/test mode first
 *    - Test success, failure, and timeout scenarios
 *    - Test webhook delivery and signature verification
 *    - Test status transitions are valid
 *    - Test frontend shows correct UI for each status
 */

/**
 * API ROUTES STRUCTURE
 *
 * /api/academy/payments/create
 *   POST  - Create a new payment intent
 *   Body:  PaymentCreateRequest
 *   Response: PaymentCreateResponse
 *   Errors: 400 (invalid request), 500 (provider error), 503 (provider unavailable)
 *
 * /api/academy/payments/webhook
 *   POST  - Receive webhook from payment provider
 *   Body:  Provider-specific (varies by provider)
 *   Response: 200 (acknowledged), 400 (invalid signature), 500 (processing error)
 *   Headers: Verify provider-specific signature (e.g. x-paystack-signature)
 *
 * /api/academy/payments/status/[paymentId]
 *   GET  - Check payment status (future route)
 *   Response: PaymentCreateResponse (updated)
 *
 * /api/academy/payments/verify
 *   POST  - Manually verify a bank transfer (future route, admin only)
 *   Body:  { registrationReference, proofOfPaymentUrl }
 *   Response: PaymentCreateResponse (status updated)
 */
