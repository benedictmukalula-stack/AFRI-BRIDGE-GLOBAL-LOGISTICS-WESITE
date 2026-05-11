// =============================================================================
// Academy Registration — Types, Helpers, and Constants
// =============================================================================
// Server-safe module. No browser APIs.
// Types for registration form data, payment methods, and registration records.
// =============================================================================

export type RegistrationType = 'individual' | 'company';

export type PaymentMethod =
  | 'card'
  | 'bank_transfer'
  | 'invoice'
  | 'purchase_order'
  | 'mobile_money';

export interface IndividualFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  company: string;
  jobTitle: string;
  preferredIntake: string;
  specialRequirements: string;
}

export interface CompanyFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  billingAddress: string;
  numberOfDelegates: number;
  delegateNames: string[];
  delegateEmails: string[];
  delegatePhones: string[];
  purchaseOrder: string;
}

export interface RegistrationData {
  id: string;
  registrationType: RegistrationType;
  courseSlug: string;
  courseTitle: string;
  courseCategory: string;
  programmeType: string;
  durationLabel: string;
  format: string;
  basePriceZar: number;
  pricingBasis: string;
  paymentMethod: PaymentMethod;
  individualData: IndividualFormData | null;
  companyData: CompanyFormData | null;
  submittedAt: string;
  status: 'pending' | 'payment_pending' | 'confirmed' | 'completed';
  referenceNumber: string;
}

export interface PaymentOption {
  id: PaymentMethod;
  label: string;
  description: string;
  details: string;
  icon: string;
}

/** Available payment options */
export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: 'card',
    label: 'Credit / Debit Card',
    description: 'Pay securely with Visa, Mastercard, or American Express',
    details: 'Card payments are processed securely. You will be redirected to our payment portal to complete your transaction. A payment confirmation will be emailed to you immediately.',
    icon: 'credit-card',
  },
  {
    id: 'bank_transfer',
    label: 'Bank Transfer (EFT)',
    description: 'Direct bank transfer to our South African account',
    details: 'Transfer the full amount to: Afri-Bridge (Pty) Ltd, FNB, Account: 6284 9100 327, Branch: 250655, Reference: Your registration number. Send proof of payment to finance@afribridge.co.za.',
    icon: 'building',
  },
  {
    id: 'invoice',
    label: 'Invoice Request',
    description: 'Receive a formal invoice for payment',
    details: 'A proforma invoice will be generated and sent to your email within 2 business hours. Payment terms: 14 days from invoice date. Registration is confirmed upon receipt of payment.',
    icon: 'file-text',
  },
  {
    id: 'purchase_order',
    label: 'Corporate Purchase Order',
    description: 'Pay via company purchase order',
    details: 'Upload or reference your company purchase order. Corporate accounts with approved credit terms may proceed with PO-based registration. Please contact academy@afribridge.co.za for credit account setup.',
    icon: 'briefcase',
  },
  {
    id: 'mobile_money',
    label: 'Mobile Money',
    description: 'Pay via mobile money services (coming soon)',
    details: 'Mobile money payment support for Zambian Kwacha (ZMW), Tanzanian Shilling (TZS), Kenyan Shilling (KES), Mozambican Metical (MZN), and other African currencies. Currently in development.',
    icon: 'smartphone',
  },
];

export function getPaymentOption(method: PaymentMethod): PaymentOption | undefined {
  return PAYMENT_OPTIONS.find((o) => o.id === method);
}

/** Generate a unique registration reference number */
export function generateReferenceNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, '0');
  return `ABR-${year}-${random}`;
}

/** Generate a unique registration ID */
export function generateRegistrationId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `REG-${timestamp}-${random}`;
}

/** Afri-Bridge Academy contact details */
export const ACADEMY_CONTACT = {
  name: 'Afri-Bridge Academy',
  address: 'Afri-Bridge House, West Street',
  city: 'Sandton, Johannesburg, 2196',
  country: 'South Africa',
  whatsapp: '+27 83 391 0863',
  phone: '+27 11 568 6712',
  email: 'info@afribridge.co.za',
  academyEmail: 'academy@afribridge.co.za',
  financeEmail: 'finance@afribridge.co.za',
  website: 'https://afribridge.co.za/academy',
} as const;

/** Empty individual form template */
export function emptyIndividualForm(): IndividualFormData {
  return {
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    company: '',
    jobTitle: '',
    preferredIntake: '',
    specialRequirements: '',
  };
}

/** Empty company form template */
export function emptyCompanyForm(): CompanyFormData {
  return {
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    billingAddress: '',
    numberOfDelegates: 1,
    delegateNames: [''],
    delegateEmails: [''],
    delegatePhones: [''],
    purchaseOrder: '',
  };
}

/** Create a full RegistrationData object from form inputs */
export function buildRegistrationData(
  course: {
    slug: string;
    title: string;
    category: string;
    programmeType: string;
    durationLabel: string;
    format: string;
    basePriceZar: number;
    pricingBasis: string;
  },
  registrationType: RegistrationType,
  paymentMethod: PaymentMethod,
  individualData: IndividualFormData | null,
  companyData: CompanyFormData | null,
): RegistrationData {
  return {
    id: generateRegistrationId(),
    registrationType,
    courseSlug: course.slug,
    courseTitle: course.title,
    courseCategory: course.category,
    programmeType: course.programmeType,
    durationLabel: course.durationLabel,
    format: course.format,
    basePriceZar: course.basePriceZar,
    pricingBasis: course.pricingBasis,
    paymentMethod,
    individualData,
    companyData,
    submittedAt: new Date().toISOString(),
    status: 'payment_pending',
    referenceNumber: generateReferenceNumber(),
  };
}
