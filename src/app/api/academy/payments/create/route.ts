// =============================================================================
// Afri-Bridge Academy — Payment Create API (Placeholder)
// =============================================================================
// POST /api/academy/payments/create
//
// MOCK IMPLEMENTATION — No real payment processing.
// Returns safe mock JSON for frontend development and testing.
//
// When activating a real payment provider:
//   1. Import the provider handler (e.g. paystackHandler.ts)
//   2. Validate the request body against PaymentCreateRequest
//   3. Dispatch to the provider's initializePayment() function
//   4. Return the provider's response as PaymentCreateResponse
//   5. Store the payment record in the database
//   6. Send notification emails (registration confirmation, payment pending)
//
// SAFETY: This route does NOT process real money, does NOT call external APIs,
// and does NOT store any payment information.
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import type {
  PaymentCreateRequest,
  PaymentCreateResponse,
} from '@/lib/paymentProviders';

/**
 * POST /api/academy/payments/create
 *
 * Creates a mock payment intent and returns a placeholder response.
 *
 * In production, this would:
 *   - Validate the request against PaymentCreateRequest schema
 *   - Look up the registration by registrationId
 *   - Verify the amount matches the course pricing
 *   - Create a payment intent with the selected provider
 *   - Return checkout URL or client secret
 *   - Update the registration status
 *
 * Current behaviour: Returns mock JSON. Always succeeds.
 */
export async function POST(request: NextRequest) {
  try {
    // --- Parse request body ------------------------------------------------
    let body: Partial<PaymentCreateRequest> = {};
    try {
      const raw = await request.json();
      body = typeof raw === 'object' && raw !== null ? raw : {};
    } catch {
      // Body parsing failed — proceed with defaults (graceful degradation)
    }

    // --- Mock payment ID ----------------------------------------------------
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const mockPaymentId = `PAY-MOCK-${timestamp}-${random}`;

    // --- Determine mock status based on provider ---------------------------
    const providerId = body.providerId || 'bank_transfer';
    let mockStatus: PaymentCreateResponse['status'] = 'pending';
    let mockCheckoutUrl: string | undefined;
    let mockClientSecret: string | undefined;
    let mockMessage = '';

    switch (providerId) {
      case 'paystack':
        mockStatus = 'pending';
        mockCheckoutUrl = `https://checkout.paystack.com/mock/${mockPaymentId}`;
        mockMessage = 'Mock Paystack checkout URL generated. No real payment will be processed.';
        break;

      case 'flutterwave':
        mockStatus = 'pending';
        mockCheckoutUrl = `https://checkout.flutterwave.com/v3/mock/${mockPaymentId}`;
        mockMessage = 'Mock Flutterwave checkout link generated. No real payment will be processed.';
        break;

      case 'stripe':
        mockStatus = 'pending';
        mockClientSecret = `pi_mock_${random}_secret_${random}`;
        mockMessage = 'Mock Stripe payment intent created. No real payment will be processed.';
        break;

      case 'bank_transfer':
        mockStatus = 'awaiting_verification';
        mockMessage = 'Bank transfer details have been provided. Please transfer the full amount and send proof of payment to finance@afribridge.co.za.';
        break;

      case 'invoice':
        mockStatus = 'invoice_requested';
        mockMessage = 'Proforma invoice request received. An invoice will be sent to your email within 2 business hours.';
        break;

      default:
        mockStatus = 'pending';
        mockMessage = 'Payment request received. No real payment will be processed.';
    }

    // --- Build mock response ------------------------------------------------
    const response: PaymentCreateResponse = {
      success: true,
      paymentId: mockPaymentId,
      status: mockStatus,
      checkoutUrl: mockCheckoutUrl,
      clientSecret: mockClientSecret,
      message: mockMessage,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    // --- Error handling (safe, no sensitive data exposed) -------------------
    console.error('[Academy Payments] Create endpoint error:', error);

    return NextResponse.json(
      {
        success: false,
        paymentId: 'ERROR',
        status: 'pending' as const,
        message: 'An unexpected error occurred. Please try again or contact academy@afribridge.co.za for assistance.',
        createdAt: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}

/**
 * GET /api/academy/payments/create
 *
 * Health check / provider discovery endpoint.
 * Returns a list of configured payment providers and their status.
 */
export async function GET() {
  const providers = [
    {
      id: 'paystack',
      displayName: 'Paystack',
      active: false,
      message: 'Paystack integration is not yet activated.',
    },
    {
      id: 'flutterwave',
      displayName: 'Flutterwave',
      active: false,
      message: 'Flutterwave integration is not yet activated.',
    },
    {
      id: 'stripe',
      displayName: 'Stripe',
      active: false,
      message: 'Stripe integration is not yet activated.',
    },
    {
      id: 'bank_transfer',
      displayName: 'Manual Bank Transfer',
      active: true,
      message: 'Bank transfer is available. Use the bank details provided on the payment page.',
    },
    {
      id: 'invoice',
      displayName: 'Invoice Request',
      active: true,
      message: 'Invoice requests are available for corporate registrations.',
    },
  ];

  return NextResponse.json({
    status: 'mock',
    message: 'Payment API is running in mock mode. No real payments are processed.',
    providers,
    timestamp: new Date().toISOString(),
  });
}
