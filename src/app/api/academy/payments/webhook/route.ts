// =============================================================================
// Afri-Bridge Academy — Payment Webhook API (Placeholder)
// =============================================================================
// POST /api/academy/payments/webhook
//
// MOCK IMPLEMENTATION — No real webhook processing.
// Returns safe mock JSON for development and testing.
//
// When activating a real payment provider:
//   1. Verify the webhook signature using the provider's secret key
//      - Paystack: x-paystack-signature header (SHA-512)
//      - Flutterwave: verif-hash header
//      - Stripe: stripe-signature header (HMAC-SHA256)
//   2. Parse the provider-specific payload
//   3. Map the provider event to a PaymentWebhookPayload
//   4. Update the payment record in the database
//   5. Update the registration status
//   6. Trigger notification emails (payment confirmed, etc.)
//   7. Return 200 to acknowledge receipt
//
// SAFETY: This route does NOT process real webhooks, does NOT verify
// signatures, and does NOT update any database records.
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import type {
  PaymentWebhookPayload,
  PaymentWebhookResult,
} from '@/lib/paymentProviders';

/**
 * POST /api/academy/payments/webhook
 *
 * Receives mock webhook payloads and returns a placeholder result.
 *
 * In production, this would:
 *   1. Read the provider identification from the payload or headers
 *   2. Verify the webhook signature (HMAC or provider-specific method)
 *   3. Parse the provider-specific event data
 *   4. Look up the payment by providerTransactionId
 *   5. Validate the amount matches the expected payment
 *   6. Update payment status (pending → paid, pending → failed, etc.)
 *   7. Update the registration status
 *   8. Trigger notification emails via academyNotifications.ts
 *   9. Return 200 OK to acknowledge the webhook
 *
 * Current behaviour: Returns mock JSON acknowledging receipt.
 *                    Does NOT verify signatures or process events.
 */
export async function POST(request: NextRequest) {
  try {
    // --- Parse request body ------------------------------------------------
    let body: Record<string, unknown> = {};
    try {
      const raw = await request.json();
      body = typeof raw === 'object' && raw !== null ? raw : {};
    } catch {
      // Body parsing failed — return mock acknowledgement
    }

    // --- Extract provider hint from body or headers ------------------------
    const providerHint = (body.provider as string) || 'unknown';
    const eventType = (body.event as string) || 'mock.event';

    // --- Build mock webhook payload ----------------------------------------
    const mockPayload: PaymentWebhookPayload = {
      provider: providerHint as PaymentWebhookPayload['provider'],
      eventType,
      providerTransactionId: (body.transaction_id as string) || 'txn_mock_' + Date.now().toString(36),
      registrationReference: (body.reference as string) || 'ABR-MOCK-00000',
      status: 'pending',
      amountProvider: (body.amount as number) || 0,
      amountZar: (body.amount_zar as number) || 0,
      currency: (body.currency as string) || 'ZAR',
      providerTimestamp: (body.timestamp as string) || new Date().toISOString(),
      rawPayload: body,
    };

    // --- Determine mock result based on event type -------------------------
    let mockStatus = mockPayload.status;
    let mockMessage = '';

    if (eventType.includes('success') || eventType.includes('succeeded') || eventType.includes('complete')) {
      mockStatus = 'paid';
      mockMessage = 'Mock webhook processed: payment marked as paid (mock only, no real update).';
    } else if (eventType.includes('fail') || eventType.includes('declined')) {
      mockStatus = 'failed';
      mockMessage = 'Mock webhook processed: payment marked as failed (mock only, no real update).';
    } else if (eventType.includes('cancel')) {
      mockStatus = 'cancelled';
      mockMessage = 'Mock webhook processed: payment marked as cancelled (mock only, no real update).';
    } else {
      mockMessage = 'Mock webhook received and acknowledged. No real processing performed.';
    }

    // --- Build mock result -------------------------------------------------
    const result: PaymentWebhookResult = {
      success: true,
      verified: false, // mock mode — signatures are NOT verified
      message: mockMessage,
      newStatus: mockStatus,
      processedAt: new Date().toISOString(),
    };

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    // --- Error handling (safe, no sensitive data exposed) -------------------
    console.error('[Academy Payments] Webhook endpoint error:', error);

    return NextResponse.json(
      {
        success: false,
        verified: false,
        message: 'Webhook processing error. This is a mock endpoint — no real action was taken.',
        newStatus: 'pending' as const,
        processedAt: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}

/**
 * GET /api/academy/payments/webhook
 *
 * Health check endpoint.
 * Returns the current webhook configuration status.
 */
export async function GET() {
  return NextResponse.json({
    status: 'mock',
    message: 'Webhook endpoint is running in mock mode. No real webhooks are processed.',
    configuration: {
      paystack: {
        signatureHeader: 'x-paystack-signature',
        algorithm: 'SHA-512',
        secretEnvVar: 'PAYSTACK_SECRET_KEY',
        active: false,
      },
      flutterwave: {
        signatureHeader: 'verif-hash',
        algorithm: 'direct comparison',
        secretEnvVar: 'FLUTTERWAVE_WEBHOOK_SECRET',
        active: false,
      },
      stripe: {
        signatureHeader: 'stripe-signature',
        algorithm: 'HMAC-SHA256',
        secretEnvVar: 'STRIPE_WEBHOOK_SECRET',
        active: false,
      },
    },
    supportedEvents: [
      'charge.success',
      'charge.failed',
      'transfer.completed',
      'transfer.failed',
      'payment_intent.succeeded',
      'payment_intent.payment_failed',
      'invoice.payment_succeeded',
      'invoice.payment_failed',
    ],
    timestamp: new Date().toISOString(),
  });
}
