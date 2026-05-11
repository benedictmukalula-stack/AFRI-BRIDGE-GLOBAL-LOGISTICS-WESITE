// =============================================================================
// Afri-Bridge Academy — Notification Templates
// =============================================================================
// Server-safe module. No browser APIs.
// Templates for future backend email integration.
// Each function returns a structured template object.
// Do NOT import into client components unless needed for preview.
// =============================================================================

import type { RegistrationData } from './academyRegistration';
import { ACADEMY_CONTACT } from './academyRegistration';

export interface EmailTemplate {
  subject: string;
  to: string;
  cc?: string;
  from: string;
  bodyHtml: string;
  bodyText: string;
}

export interface NotificationPreview {
  type: string;
  label: string;
  subject: string;
  preview: string;
  icon: string;
}

/**
 * 1. Registration Received Email
 * Sent to the learner/company contact when they submit the registration form.
 */
export function registrationReceivedEmail(registration: RegistrationData): EmailTemplate {
  const name =
    registration.registrationType === 'individual'
      ? registration.individualData?.fullName || 'Learner'
      : registration.companyData?.contactPerson || 'Contact Person';

  const email =
    registration.registrationType === 'individual'
      ? registration.individualData?.email || ''
      : registration.companyData?.email || '';

  const subject = `Registration Received — ${registration.courseTitle} (${registration.referenceNumber})`;

  const bodyText = `
Dear ${name},

Thank you for registering with Afri-Bridge Academy!

Registration Reference: ${registration.referenceNumber}
Course: ${registration.courseTitle}
Programme Type: ${registration.programmeType}
Duration: ${registration.durationLabel}
Format: ${registration.format}

Your registration has been successfully submitted and is now being reviewed by our admissions team. Here is what happens next:

1. Payment: Please complete payment using your selected method (${registration.paymentMethod}).
2. Confirmation: Once payment is received, you will receive a confirmation email with course access details.
3. Course Materials: Access to pre-course materials will be sent 5 business days before your intake date.

If you have any questions or need to update your registration, please contact us:
Email: ${ACADEMY_CONTACT.academyEmail}
Phone: ${ACADEMY_CONTACT.phone}
WhatsApp: ${ACADEMY_CONTACT.whatsapp}

We look forward to welcoming you to Afri-Bridge Academy.

Kind regards,
Afri-Bridge Academy Admissions Team
${ACADEMY_CONTACT.name}
${ACADEMY_CONTACT.address}, ${ACADEMY_CONTACT.city}
${ACADEMY_CONTACT.country}
  `.trim();

  const bodyHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>${subject}</title></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
  <div style="background: #0B1F3A; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0;">Afri-Bridge Academy</h1>
    <p style="color: #6EE7B7; margin: 8px 0 0;">Registration Confirmation</p>
  </div>
  <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <p>Dear ${name},</p>
    <p>Thank you for registering with Afri-Bridge Academy! Your registration has been successfully submitted.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #f9fafb;"><td style="padding: 10px; font-weight: bold; width: 40%;">Reference</td><td style="padding: 10px;">${registration.referenceNumber}</td></tr>
      <tr><td style="padding: 10px; font-weight: bold;">Course</td><td style="padding: 10px;">${registration.courseTitle}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 10px; font-weight: bold;">Programme Type</td><td style="padding: 10px;">${registration.programmeType}</td></tr>
      <tr><td style="padding: 10px; font-weight: bold;">Duration</td><td style="padding: 10px;">${registration.durationLabel}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 10px; font-weight: bold;">Format</td><td style="padding: 10px;">${registration.format}</td></tr>
      <tr><td style="padding: 10px; font-weight: bold;">Payment Method</td><td style="padding: 10px;">${registration.paymentMethod}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 10px; font-weight: bold;">Amount</td><td style="padding: 10px; font-weight: bold; color: #059669;">R ${registration.basePriceZar.toLocaleString('en-ZA')}</td></tr>
    </table>
    <h3 style="color: #0B1F3A;">What Happens Next?</h3>
    <ol style="padding-left: 20px;">
      <li style="margin-bottom: 8px;"><strong>Payment:</strong> Complete payment using your selected method (${registration.paymentMethod}).</li>
      <li style="margin-bottom: 8px;"><strong>Confirmation:</strong> Receive a confirmation email with course access details once payment is verified.</li>
      <li><strong>Course Materials:</strong> Pre-course materials sent 5 business days before your intake date.</li>
    </ol>
    <div style="background: #f0fdf4; border-left: 4px solid #059669; padding: 12px; margin: 20px 0; border-radius: 4px;">
      <strong>Need help?</strong> Contact us at ${ACADEMY_CONTACT.academyEmail} or call ${ACADEMY_CONTACT.phone}.
    </div>
  </div>
  <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #6b7280;">
    <p>Afri-Bridge Academy | ${ACADEMY_CONTACT.address}, ${ACADEMY_CONTACT.city}, ${ACADEMY_CONTACT.country}</p>
    <p>WhatsApp: ${ACADEMY_CONTACT.whatsapp} | Phone: ${ACADEMY_CONTACT.phone}</p>
  </div>
</body>
</html>`.trim();

  return {
    subject,
    to: email,
    cc: ACADEMY_CONTACT.academyEmail,
    from: `"${ACADEMY_CONTACT.name}" <${ACADEMY_CONTACT.academyEmail}>`,
    bodyHtml,
    bodyText,
  };
}

/**
 * 2. Payment Pending Email
 * Sent after registration to remind about pending payment.
 */
export function paymentPendingEmail(registration: RegistrationData): EmailTemplate {
  const name =
    registration.registrationType === 'individual'
      ? registration.individualData?.fullName || 'Learner'
      : registration.companyData?.contactPerson || 'Contact Person';

  const email =
    registration.registrationType === 'individual'
      ? registration.individualData?.email || ''
      : registration.companyData?.email || '';

  const subject = `Payment Pending — ${registration.courseTitle} (${registration.referenceNumber})`;

  const bodyText = `
Dear ${name},

Your registration for ${registration.courseTitle} is confirmed, but payment is still pending.

Registration Reference: ${registration.referenceNumber}
Outstanding Amount: R ${registration.basePriceZar.toLocaleString('en-ZA')}
Payment Method Selected: ${registration.paymentMethod}

Please complete your payment at your earliest convenience to secure your place on the programme. Spaces are allocated on a first-paid, first-served basis.

Payment Details:
- Bank: FNB (First National Bank)
- Account Name: Afri-Bridge (Pty) Ltd
- Account Number: 6284 9100 327
- Branch Code: 250655
- Reference: ${registration.referenceNumber}

Once your payment is received and verified, we will send you a payment confirmation email with full course access details and pre-reading materials.

If you have already made payment, please allow 1-2 business days for processing and forward your proof of payment to ${ACADEMY_CONTACT.financeEmail}.

Kind regards,
Afri-Bridge Academy Finance Team
${ACADEMY_CONTACT.phone} | ${ACADEMY_CONTACT.whatsapp}
  `.trim();

  const bodyHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>${subject}</title></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
  <div style="background: #0B1F3A; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0;">Afri-Bridge Academy</h1>
    <p style="color: #FBBF24; margin: 8px 0 0;">Payment Reminder</p>
  </div>
  <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <p>Dear ${name},</p>
    <p>Your registration for <strong>${registration.courseTitle}</strong> is confirmed, but payment is still pending.</p>
    <div style="background: #FFFBEB; border-left: 4px solid #F59E0B; padding: 16px; margin: 20px 0; border-radius: 4px;">
      <p style="margin: 0;"><strong>Reference:</strong> ${registration.referenceNumber}</p>
      <p style="margin: 4px 0 0;"><strong>Outstanding:</strong> <span style="color: #D97706; font-weight: bold; font-size: 18px;">R ${registration.basePriceZar.toLocaleString('en-ZA')}</span></p>
    </div>
    <h3 style="color: #0B1F3A;">Bank Transfer Details</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      <tr><td style="padding: 8px; font-weight: bold;">Bank</td><td style="padding: 8px;">FNB (First National Bank)</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold;">Account Name</td><td style="padding: 8px;">Afri-Bridge (Pty) Ltd</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Account Number</td><td style="padding: 8px;">6284 9100 327</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold;">Branch Code</td><td style="padding: 8px;">250655</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Reference</td><td style="padding: 8px; font-family: monospace; font-weight: bold;">${registration.referenceNumber}</td></tr>
    </table>
    <p>Please use your registration reference as the payment reference. Spaces are allocated on a first-paid, first-served basis.</p>
    <p>If you have already made payment, please forward your proof of payment to <a href="mailto:${ACADEMY_CONTACT.financeEmail}">${ACADEMY_CONTACT.financeEmail}</a>.</p>
  </div>
  <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #6b7280;">
    <p>Afri-Bridge Academy | ${ACADEMY_CONTACT.address}, ${ACADEMY_CONTACT.city}</p>
  </div>
</body>
</html>`.trim();

  return {
    subject,
    to: email,
    cc: ACADEMY_CONTACT.financeEmail,
    from: `"${ACADEMY_CONTACT.name}" <${ACADEMY_CONTACT.financeEmail}>`,
    bodyHtml,
    bodyText,
  };
}

/**
 * 3. Payment Confirmed Email
 * Sent when payment is verified and registration is confirmed.
 */
export function paymentConfirmedEmail(registration: RegistrationData): EmailTemplate {
  const name =
    registration.registrationType === 'individual'
      ? registration.individualData?.fullName || 'Learner'
      : registration.companyData?.contactPerson || 'Contact Person';

  const email =
    registration.registrationType === 'individual'
      ? registration.individualData?.email || ''
      : registration.companyData?.email || '';

  const intake =
    registration.registrationType === 'individual'
      ? registration.individualData?.preferredIntake || 'To be confirmed'
      : 'To be confirmed';

  const subject = `Payment Confirmed — ${registration.courseTitle} (${registration.referenceNumber})`;

  const bodyText = `
Dear ${name},

Great news! Your payment has been confirmed and your registration is now complete.

Registration Reference: ${registration.referenceNumber}
Course: ${registration.courseTitle}
Programme Type: ${registration.programmeType}
Duration: ${registration.durationLabel}
Format: ${registration.format}
Intake: ${intake}
Amount Paid: R ${registration.basePriceZar.toLocaleString('en-ZA')}

You are now officially enrolled. Here is what to expect:

1. Pre-Course Materials: You will receive pre-reading materials and course preparation guidelines 5 business days before the intake date.
2. Venue / Platform Details: Logistics information (venue address or virtual meeting link) will be sent 3 business days before the programme starts.
3. Day of Programme: Please arrive 15 minutes early for in-person sessions, or log in 10 minutes early for virtual sessions.
4. Certification: Upon successful completion, you will receive your Afri-Bridge certificate.

What to Bring:
- Valid ID or passport
- Laptop or tablet for note-taking
- Course pre-reading materials (sent via email)

We are excited to have you on board! If you have any questions, please do not hesitate to contact us.

Kind regards,
Afri-Bridge Academy Team
${ACADEMY_CONTACT.phone} | ${ACADEMY_CONTACT.whatsapp}
  `.trim();

  const bodyHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>${subject}</title></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
  <div style="background: linear-gradient(135deg, #059669, #0B1F3A); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0;">Afri-Bridge Academy</h1>
    <p style="color: #6EE7B7; margin: 8px 0 0; font-size: 18px;">Registration Confirmed!</p>
  </div>
  <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <p>Dear ${name},</p>
    <p>Great news! Your payment has been confirmed and you are now officially enrolled.</p>
    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0; text-align: center;">
      <p style="margin: 0; font-size: 24px; color: #059669; font-weight: bold;">R ${registration.basePriceZar.toLocaleString('en-ZA')}</p>
      <p style="margin: 4px 0 0; color: #6b7280; font-size: 14px;">Payment Confirmed</p>
    </div>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #f9fafb;"><td style="padding: 10px; font-weight: bold; width: 40%;">Reference</td><td style="padding: 10px;">${registration.referenceNumber}</td></tr>
      <tr><td style="padding: 10px; font-weight: bold;">Course</td><td style="padding: 10px;">${registration.courseTitle}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 10px; font-weight: bold;">Duration</td><td style="padding: 10px;">${registration.durationLabel}</td></tr>
      <tr><td style="padding: 10px; font-weight: bold;">Format</td><td style="padding: 10px;">${registration.format}</td></tr>
      <tr style="background: #f9fafb;"><td style="padding: 10px; font-weight: bold;">Intake</td><td style="padding: 10px;">${intake}</td></tr>
    </table>
    <h3 style="color: #0B1F3A;">What to Expect</h3>
    <ul style="padding-left: 20px;">
      <li style="margin-bottom: 8px;">Pre-course materials sent 5 business days before intake</li>
      <li style="margin-bottom: 8px;">Venue/platform details sent 3 business days before programme</li>
      <li style="margin-bottom: 8px;">Arrive 15 minutes early (in-person) or 10 minutes early (virtual)</li>
      <li>Afri-Bridge certificate issued upon successful completion</li>
    </ul>
  </div>
  <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #6b7280;">
    <p>Afri-Bridge Academy | ${ACADEMY_CONTACT.address}, ${ACADEMY_CONTACT.city}</p>
    <p>WhatsApp: ${ACADEMY_CONTACT.whatsapp} | Phone: ${ACADEMY_CONTACT.phone}</p>
  </div>
</body>
</html>`.trim();

  return {
    subject,
    to: email,
    cc: ACADEMY_CONTACT.academyEmail,
    from: `"${ACADEMY_CONTACT.name}" <${ACADEMY_CONTACT.academyEmail}>`,
    bodyHtml,
    bodyText,
  };
}

/**
 * 4. Admin Registration Alert
 * Internal notification to the Academy team when a new registration is submitted.
 */
export function adminRegistrationAlert(registration: RegistrationData): EmailTemplate {
  const subject = `[NEW REGISTRATION] ${registration.courseTitle} — ${registration.referenceNumber}`;
  const name =
    registration.registrationType === 'individual'
      ? registration.individualData?.fullName || 'N/A'
      : registration.companyData?.companyName || 'N/A';

  const bodyText = `
NEW ACADEMY REGISTRATION RECEIVED

Reference: ${registration.referenceNumber}
Type: ${registration.registrationType.toUpperCase()}
Registered By: ${name}
Course: ${registration.courseTitle}
Category: ${registration.courseCategory}
Programme Type: ${registration.programmeType}
Duration: ${registration.durationLabel}
Format: ${registration.format}
Base Price (ZAR): R ${registration.basePriceZar.toLocaleString('en-ZA')}
Payment Method: ${registration.paymentMethod}
Submitted: ${new Date(registration.submittedAt).toLocaleString('en-ZA', { dateStyle: 'full', timeStyle: 'short' })}

ACTION REQUIRED:
1. Review registration details
2. Verify payment method is valid
3. Send payment instructions to the registrant
4. Update registration status once payment is received

${registration.registrationType === 'company' && registration.companyData ? `
COMPANY DETAILS:
Company: ${registration.companyData.companyName}
Contact: ${registration.companyData.contactPerson}
Email: ${registration.companyData.email}
Phone: ${registration.companyData.phone}
Delegates: ${registration.companyData.numberOfDelegates}
PO Number: ${registration.companyData.purchaseOrder || 'N/A'}
` : `
LEARNER DETAILS:
Email: ${registration.individualData?.email || 'N/A'}
Phone: ${registration.individualData?.phone || 'N/A'}
Country: ${registration.individualData?.country || 'N/A'}
Intake: ${registration.individualData?.preferredIntake || 'Not selected'}
`}

This is an automated notification from Afri-Bridge Academy.
  `.trim();

  const bodyHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>${subject}</title></head>
<body style="font-family: monospace; max-width: 700px; margin: 0 auto; padding: 20px; background: #f9fafb;">
  <div style="background: #0B1F3A; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0;">NEW ACADEMY REGISTRATION</h1>
    <p style="color: #6EE7B7; margin: 4px 0 0;">${registration.referenceNumber}</p>
  </div>
  <div style="background: white; padding: 24px; border: 1px solid #e5e7eb; border-top: none; font-family: monospace; font-size: 13px; line-height: 1.6;">
    <p><strong>Reference:</strong> ${registration.referenceNumber}</p>
    <p><strong>Type:</strong> ${registration.registrationType.toUpperCase()}</p>
    <p><strong>Registered By:</strong> ${name}</p>
    <p><strong>Course:</strong> ${registration.courseTitle}</p>
    <p><strong>Category:</strong> ${registration.courseCategory}</p>
    <p><strong>Programme:</strong> ${registration.programmeType} | ${registration.durationLabel} | ${registration.format}</p>
    <p><strong>Price:</strong> R ${registration.basePriceZar.toLocaleString('en-ZA')} (${registration.pricingBasis})</p>
    <p><strong>Payment Method:</strong> ${registration.paymentMethod}</p>
    <p><strong>Submitted:</strong> ${new Date(registration.submittedAt).toLocaleString('en-ZA', { dateStyle: 'full', timeStyle: 'short' })}</p>
    <div style="background: #FEF3C7; border: 1px solid #FDE68A; border-radius: 4px; padding: 12px; margin: 16px 0;">
      <strong>ACTION REQUIRED:</strong> Review registration, send payment instructions, and update status upon payment.
    </div>
  </div>
  <div style="background: #f9fafb; padding: 12px; border-radius: 0 0 8px 8px; text-align: center; font-size: 11px; color: #9ca3af;">
    Afri-Bridge Academy Internal Notification
  </div>
</body>
</html>`.trim();

  return {
    subject,
    to: ACADEMY_CONTACT.academyEmail,
    cc: ACADEMY_CONTACT.financeEmail,
    from: `"Afri-Bridge Academy System" <noreply@afribridge.co.za>`,
    bodyHtml,
    bodyText,
  };
}

/**
 * 5. Company Delegate Confirmation Email
 * Sent to each delegate registered under a company booking.
 */
export function companyDelegateConfirmation(
  registration: RegistrationData,
  delegateIndex: number,
): EmailTemplate {
  const companyData = registration.companyData;
  const delegateName = companyData?.delegateNames[delegateIndex] || 'Delegate';
  const delegateEmail = companyData?.delegateEmails[delegateIndex] || '';
  const contactPerson = companyData?.contactPerson || 'Company Coordinator';

  const subject = `You Are Registered — ${registration.courseTitle}`;

  const bodyText = `
Dear ${delegateName},

You have been registered by ${contactPerson} at ${companyData?.companyName || 'your organisation'} for the following Afri-Bridge Academy programme:

Course: ${registration.courseTitle}
Programme Type: ${registration.programmeType}
Duration: ${registration.durationLabel}
Format: ${registration.format}
Registration Reference: ${registration.referenceNumber}

This registration was submitted on your behalf by your organisation. You do not need to take any payment action.

What to Expect:
1. You will receive pre-course materials 5 business days before the programme start date.
2. Venue or virtual platform details will be sent 3 business days before the programme.
3. Please arrive 15 minutes early for in-person sessions, or log in 10 minutes early for virtual sessions.
4. Upon successful completion, you will receive an Afri-Bridge certificate.

If you have any questions about your registration, please contact your organisation's training coordinator or reach out to us directly at ${ACADEMY_CONTACT.academyEmail}.

We look forward to welcoming you.

Kind regards,
Afri-Bridge Academy Team
${ACADEMY_CONTACT.phone}
  `.trim();

  const bodyHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>${subject}</title></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
  <div style="background: #0B1F3A; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0;">Afri-Bridge Academy</h1>
    <p style="color: #6EE7B7; margin: 8px 0 0;">Delegate Registration Notice</p>
  </div>
  <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <p>Dear ${delegateName},</p>
    <p>You have been registered by <strong>${contactPerson}</strong> at <strong>${companyData?.companyName || 'your organisation'}</strong> for the following programme:</p>
    <div style="background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin: 20px 0;">
      <p style="margin: 0 0 4px; font-weight: bold; font-size: 16px;">${registration.courseTitle}</p>
      <p style="margin: 0; color: #6b7280;">${registration.programmeType} | ${registration.durationLabel} | ${registration.format}</p>
    </div>
    <p style="color: #6b7280; font-size: 14px;">Reference: ${registration.referenceNumber}</p>
    <h3 style="color: #0B1F3A;">What to Expect</h3>
    <ul style="padding-left: 20px;">
      <li style="margin-bottom: 8px;">Pre-course materials sent 5 business days before start date</li>
      <li style="margin-bottom: 8px;">Venue/platform details sent 3 business days before start date</li>
      <li style="margin-bottom: 8px;">Arrive early on the day of the programme</li>
      <li>Afri-Bridge certificate issued upon successful completion</li>
    </ul>
    <p>If you have questions, contact your training coordinator or email <a href="mailto:${ACADEMY_CONTACT.academyEmail}">${ACADEMY_CONTACT.academyEmail}</a>.</p>
  </div>
  <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #6b7280;">
    <p>Afri-Bridge Academy | ${ACADEMY_CONTACT.address}, ${ACADEMY_CONTACT.city}</p>
    <p>WhatsApp: ${ACADEMY_CONTACT.whatsapp} | Phone: ${ACADEMY_CONTACT.phone}</p>
  </div>
</body>
</html>`.trim();

  return {
    subject,
    to: delegateEmail,
    cc: ACADEMY_CONTACT.academyEmail,
    from: `"${ACADEMY_CONTACT.name}" <${ACADEMY_CONTACT.academyEmail}>`,
    bodyHtml,
    bodyText,
  };
}

/**
 * Generate all notification previews for a registration.
 * Used for displaying template previews on admin/confirmation pages.
 */
export function getAllNotificationPreviews(registration: RegistrationData): NotificationPreview[] {
  const templates = [
    registrationReceivedEmail(registration),
    paymentPendingEmail(registration),
    paymentConfirmedEmail(registration),
    adminRegistrationAlert(registration),
    ...(registration.registrationType === 'company' && registration.companyData
      ? [companyDelegateConfirmation(registration, 0)]
      : []),
  ];

  return templates.map((t, i) => ({
    type: [
      'registration_received',
      'payment_pending',
      'payment_confirmed',
      'admin_alert',
      'delegate_confirmation',
    ][i] || 'unknown',
    label: [
      'Registration Received',
      'Payment Pending',
      'Payment Confirmed',
      'Admin Alert',
      'Delegate Confirmation',
    ][i] || 'Notification',
    subject: t.subject,
    preview: t.bodyText.substring(0, 120) + '...',
    icon: ['mail', 'clock', 'check-circle', 'bell', 'users'][i] || 'mail',
  }));
}
