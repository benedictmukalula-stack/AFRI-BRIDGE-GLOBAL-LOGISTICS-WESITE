'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  User,
  Building2,
  Clock,
  CreditCard,
  ClipboardCheck,
  Download,
} from 'lucide-react';
import type { AcademyCourse } from '@/data/academyCourses';
import { AcademyPricingProvider } from '@/components/academy/AcademyPricingProvider';
import { CurrencySelector } from '@/components/academy/CurrencySelector';
import { PriceDisplay, PriceDisplayHighlight } from '@/components/academy/PriceDisplay';
import {
  type RegistrationType,
  type PaymentMethod,
  type IndividualFormData,
  type CompanyFormData,
  emptyIndividualForm,
  emptyCompanyForm,
  buildRegistrationData,
  generateReferenceNumber,
} from '@/lib/academyRegistration';

const COUNTRIES = [
  'South Africa', 'Zambia', 'Zimbabwe', 'Mozambique', 'Tanzania', 'Kenya',
  'Namibia', 'Botswana', 'Angola', 'DRC', 'Malawi', 'Nigeria', 'Ghana',
  'Uganda', 'Rwanda', 'Ethiopia', 'Mauritius', 'Madagascar', 'Eswatini',
  'Lesotho', 'Other',
];

const STEP_COUNT = 3;

export function RegistrationForm({ course }: { course: AcademyCourse }) {
  const router = useRouter();

  // Form state
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationType, setRegistrationType] = useState<RegistrationType>('individual');
  const [individualData, setIndividualData] = useState<IndividualFormData>(emptyIndividualForm());
  const [companyData, setCompanyData] = useState<CompanyFormData>(emptyCompanyForm());
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bank_transfer');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [referenceNumber] = useState(() => generateReferenceNumber());

  // Helpers for company delegate arrays
  const updateCompanyField = useCallback((field: keyof CompanyFormData, value: string | number) => {
    setCompanyData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const addDelegate = useCallback(() => {
    setCompanyData((prev) => ({
      ...prev,
      delegateNames: [...prev.delegateNames, ''],
      delegateEmails: [...prev.delegateEmails, ''],
      delegatePhones: [...prev.delegatePhones, ''],
    }));
  }, []);

  const removeDelegate = useCallback((index: number) => {
    setCompanyData((prev) => {
      if (prev.numberOfDelegates <= 1) return prev;
      return {
        ...prev,
        numberOfDelegates: prev.numberOfDelegates - 1,
        delegateNames: prev.delegateNames.filter((_, i) => i !== index),
        delegateEmails: prev.delegateEmails.filter((_, i) => i !== index),
        delegatePhones: prev.delegatePhones.filter((_, i) => i !== index),
      };
    });
  }, []);

  const updateDelegateField = useCallback((index: number, field: 'delegateNames' | 'delegateEmails' | 'delegatePhones', value: string) => {
    setCompanyData((prev) => {
      const arr = [...prev[field]];
      arr[index] = value;
      return { ...prev, [field]: arr };
    });
  }, []);

  // Step navigation
  const canProceedStep1 = (): boolean => {
    if (registrationType === 'individual') {
      return !!individualData.fullName && !!individualData.email && !!individualData.phone;
    }
    return !!companyData.companyName && !!companyData.contactPerson && !!companyData.email && !!companyData.phone;
  };

  const canProceedStep2 = (): boolean => {
    if (registrationType === 'individual') {
      return !!individualData.preferredIntake;
    }
    return companyData.numberOfDelegates >= 1 && companyData.delegateNames.some((n) => !!n.trim());
  };

  const handleNext = () => {
    if (currentStep < STEP_COUNT) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Submit
  const handleSubmit = () => {
    if (!agreedToTerms) return;
    const registration = buildRegistrationData(
      course,
      registrationType,
      paymentMethod,
      registrationType === 'individual' ? individualData : null,
      registrationType === 'company' ? companyData : null,
    );
    // Data saved in component state (registration object).
    // Redirect to payment page.
    router.push('/academy/payment/demo-registration');
  };

  const pricingSuffix = course.pricingBasis === 'per programme' ? ' per programme' : ' per learner';

  const stepLabels = [
    { step: 1, label: registrationType === 'individual' ? 'Personal Details' : 'Company Details', icon: registrationType === 'individual' ? User : Building2 },
    { step: 2, label: 'Course & Payment', icon: CreditCard },
    { step: 3, label: 'Review & Submit', icon: ClipboardCheck },
  ];

  return (
    <AcademyPricingProvider>
      {/* Hero */}
      <div className="bg-[#0B1F3A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/academy" className="hover:text-white transition-colors">Academy</Link>
            <span>/</span>
            <Link href="/academy/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white font-medium">Register</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full mb-4 ${course.categoryColor}`}>
                {course.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Register: {course.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                {course.durationLabel} &middot; {course.format} &middot; {course.level}
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3">
              <PriceDisplay amountZar={course.basePriceZar} suffix={pricingSuffix} className="text-2xl font-bold text-white" />
              <CurrencySelector />
            </div>
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-8">
                  {stepLabels.map(({ step, label, icon: Icon }, idx) => (
                    <div key={step} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          step < currentStep
                            ? 'bg-emerald-600 text-white'
                            : step === currentStep
                              ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                              : 'bg-gray-100 text-gray-400'
                        }`}>
                          {step < currentStep ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-4 w-4" />}
                        </div>
                        <span className={`text-xs mt-2 font-medium hidden sm:block ${
                          step === currentStep ? 'text-emerald-600' : 'text-gray-400'
                        }`}>
                          {label}
                        </span>
                      </div>
                      {idx < stepLabels.length - 1 && (
                        <div className={`w-12 sm:w-20 h-0.5 mx-2 mb-5 sm:mb-0 transition-colors ${
                          step < currentStep ? 'bg-emerald-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* STEP 1: Registration Type + Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    {/* Registration Type Toggle */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">Registration Type</Label>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setRegistrationType('individual')}
                          className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200 border flex items-center justify-center gap-2 ${
                            registrationType === 'individual'
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <User className="h-4 w-4" /> Individual
                        </button>
                        <button
                          type="button"
                          onClick={() => setRegistrationType('company')}
                          className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200 border flex items-center justify-center gap-2 ${
                            registrationType === 'company'
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <Building2 className="h-4 w-4" /> Company
                        </button>
                      </div>
                    </div>

                    {/* Individual Fields */}
                    {registrationType === 'individual' && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="ind-name" className="text-sm font-medium text-gray-700 mb-2 block">Full Name *</Label>
                            <Input id="ind-name" type="text" placeholder="John Doe" className="h-11" value={individualData.fullName} onChange={(e) => setIndividualData((p) => ({ ...p, fullName: e.target.value }))} />
                          </div>
                          <div>
                            <Label htmlFor="ind-email" className="text-sm font-medium text-gray-700 mb-2 block">Email Address *</Label>
                            <Input id="ind-email" type="email" placeholder="john@company.com" className="h-11" value={individualData.email} onChange={(e) => setIndividualData((p) => ({ ...p, email: e.target.value }))} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="ind-phone" className="text-sm font-medium text-gray-700 mb-2 block">Phone Number *</Label>
                            <Input id="ind-phone" type="tel" placeholder="+27 12 345 6789" className="h-11" value={individualData.phone} onChange={(e) => setIndividualData((p) => ({ ...p, phone: e.target.value }))} />
                          </div>
                          <div>
                            <Label htmlFor="ind-country" className="text-sm font-medium text-gray-700 mb-2 block">Country *</Label>
                            <Select value={individualData.country} onValueChange={(v) => setIndividualData((p) => ({ ...p, country: v }))}>
                              <SelectTrigger id="ind-country" className="h-11"><SelectValue placeholder="Select country" /></SelectTrigger>
                              <SelectContent>
                                {COUNTRIES.map((c) => (<SelectItem key={c} value={c}>{c}</SelectItem>))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="ind-city" className="text-sm font-medium text-gray-700 mb-2 block">City *</Label>
                            <Input id="ind-city" type="text" placeholder="Johannesburg" className="h-11" value={individualData.city} onChange={(e) => setIndividualData((p) => ({ ...p, city: e.target.value }))} />
                          </div>
                          <div>
                            <Label htmlFor="ind-company" className="text-sm font-medium text-gray-700 mb-2 block">Company (optional)</Label>
                            <Input id="ind-company" type="text" placeholder="Company name" className="h-11" value={individualData.company} onChange={(e) => setIndividualData((p) => ({ ...p, company: e.target.value }))} />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="ind-jobtitle" className="text-sm font-medium text-gray-700 mb-2 block">Job Title</Label>
                          <Input id="ind-jobtitle" type="text" placeholder="Logistics Manager" className="h-11" value={individualData.jobTitle} onChange={(e) => setIndividualData((p) => ({ ...p, jobTitle: e.target.value }))} />
                        </div>
                      </>
                    )}

                    {/* Company Fields */}
                    {registrationType === 'company' && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="comp-name" className="text-sm font-medium text-gray-700 mb-2 block">Company Name *</Label>
                            <Input id="comp-name" type="text" placeholder="Acme Logistics (Pty) Ltd" className="h-11" value={companyData.companyName} onChange={(e) => updateCompanyField('companyName', e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="comp-contact" className="text-sm font-medium text-gray-700 mb-2 block">Contact Person *</Label>
                            <Input id="comp-contact" type="text" placeholder="Jane Smith" className="h-11" value={companyData.contactPerson} onChange={(e) => updateCompanyField('contactPerson', e.target.value)} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="comp-email" className="text-sm font-medium text-gray-700 mb-2 block">Email Address *</Label>
                            <Input id="comp-email" type="email" placeholder="training@company.com" className="h-11" value={companyData.email} onChange={(e) => updateCompanyField('email', e.target.value)} />
                          </div>
                          <div>
                            <Label htmlFor="comp-phone" className="text-sm font-medium text-gray-700 mb-2 block">Phone Number *</Label>
                            <Input id="comp-phone" type="tel" placeholder="+27 11 123 4567" className="h-11" value={companyData.phone} onChange={(e) => updateCompanyField('phone', e.target.value)} />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="comp-address" className="text-sm font-medium text-gray-700 mb-2 block">Billing Address</Label>
                          <Input id="comp-address" type="text" placeholder="123 Main Road, Sandton, 2196" className="h-11" value={companyData.billingAddress} onChange={(e) => updateCompanyField('billingAddress', e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor="comp-po" className="text-sm font-medium text-gray-700 mb-2 block">Purchase Order Number (optional)</Label>
                          <Input id="comp-po" type="text" placeholder="PO-2026-00123" className="h-11" value={companyData.purchaseOrder} onChange={(e) => updateCompanyField('purchaseOrder', e.target.value)} />
                        </div>

                        {/* Delegates Section */}
                        <div className="border border-gray-200 rounded-lg p-4 mt-4">
                          <div className="flex items-center justify-between mb-4">
                            <Label className="text-sm font-bold text-[#0B1F3A]">Delegates</Label>
                            <button type="button" onClick={addDelegate} className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                              + Add Delegate
                            </button>
                          </div>
                          {companyData.delegateNames.map((_, idx) => (
                            <div key={idx} className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold text-gray-500">Delegate {idx + 1}</span>
                                {companyData.delegateNames.length > 1 && (
                                  <button type="button" onClick={() => removeDelegate(idx)} className="text-xs text-red-500 hover:text-red-600">
                                    Remove
                                  </button>
                                )}
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <Input placeholder="Full Name" className="h-10 text-sm" value={companyData.delegateNames[idx]} onChange={(e) => updateDelegateField(idx, 'delegateNames', e.target.value)} />
                                <Input placeholder="Email" type="email" className="h-10 text-sm" value={companyData.delegateEmails[idx]} onChange={(e) => updateDelegateField(idx, 'delegateEmails', e.target.value)} />
                                <Input placeholder="Phone" type="tel" className="h-10 text-sm" value={companyData.delegatePhones[idx]} onChange={(e) => updateDelegateField(idx, 'delegatePhones', e.target.value)} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* STEP 2: Course & Payment Preferences */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    {/* Preferred Intake */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">Preferred Intake Date *</Label>
                      <Select value={registrationType === 'individual' ? individualData.preferredIntake : ''} onValueChange={(v) => {
                        if (registrationType === 'individual') {
                          setIndividualData((p) => ({ ...p, preferredIntake: v }));
                        }
                      }}>
                        <SelectTrigger className="h-11"><SelectValue placeholder="Select preferred intake" /></SelectTrigger>
                        <SelectContent>
                          {course.intakeDates.map((date) => (<SelectItem key={date} value={date}>{date}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Special Requirements */}
                    <div>
                      <Label htmlFor="reg-requirements" className="text-sm font-medium text-gray-700 mb-2 block">Special Requirements</Label>
                      <Textarea
                        id="reg-requirements"
                        placeholder="Any special requirements, dietary needs, accessibility requirements, or other information..."
                        rows={3}
                        value={registrationType === 'individual' ? individualData.specialRequirements : ''}
                        onChange={(e) => { if (registrationType === 'individual') setIndividualData((p) => ({ ...p, specialRequirements: e.target.value })); }}
                      />
                    </div>

                    {/* Payment Method */}
                    <div>
                      <Label className="text-sm font-bold text-[#0B1F3A] mb-3 block">Select Payment Method *</Label>
                      <div className="space-y-3">
                        {[
                          { id: 'card' as PaymentMethod, label: 'Credit / Debit Card', desc: 'Secure online payment via payment portal' },
                          { id: 'bank_transfer' as PaymentMethod, label: 'Bank Transfer (EFT)', desc: 'Direct transfer to Afri-Bridge FNB account' },
                          { id: 'invoice' as PaymentMethod, label: 'Invoice Request', desc: 'Receive a formal invoice for payment' },
                          { id: 'purchase_order' as PaymentMethod, label: 'Corporate Purchase Order', desc: 'Pay via company purchase order' },
                          { id: 'mobile_money' as PaymentMethod, label: 'Mobile Money (Coming Soon)', desc: 'MTN Mobile Money, Airtel Money, M-Pesa' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => opt.id !== 'mobile_money' ? setPaymentMethod(opt.id) : undefined}
                            disabled={opt.id === 'mobile_money'}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-start gap-3 ${
                              paymentMethod === opt.id
                                ? 'border-emerald-500 bg-emerald-50'
                                : opt.id === 'mobile_money'
                                  ? 'border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed'
                                  : 'border-gray-200 hover:border-emerald-300 bg-white'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                              paymentMethod === opt.id ? 'border-emerald-500' : 'border-gray-300'
                            }`}>
                              {paymentMethod === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#0B1F3A]">{opt.label}</p>
                              <p className="text-xs text-gray-500">{opt.desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Review & Submit */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h3 className="text-sm font-bold text-emerald-800 mb-1">Review Your Registration</h3>
                      <p className="text-xs text-emerald-700">Please verify all details below before submitting.</p>
                    </div>

                    {/* Course Summary */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-[#0B1F3A] mb-3">Course Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-gray-500">Course</span><span className="font-medium text-[#0B1F3A]">{course.title}</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Category</span><span className="font-medium">{course.category}</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Programme Type</span><span className="font-medium">{course.programmeType}</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Duration</span><span className="font-medium">{course.durationLabel}</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Format</span><span className="font-medium">{course.format}</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Level</span><span className="font-medium">{course.level}</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Intake</span><span className="font-medium">{individualData.preferredIntake || 'Not selected'}</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Price</span><PriceDisplayHighlight amountZar={course.basePriceZar} suffix={pricingSuffix} size="sm" /></div>
                        <div className="flex justify-between"><span className="text-gray-500">Payment Method</span><span className="font-medium">{paymentMethod.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}</span></div>
                        <div className="flex justify-between"><span className="text-gray-500">Reference</span><span className="font-mono font-bold text-emerald-600">{referenceNumber}</span></div>
                      </div>
                    </div>

                    {/* Registrant Summary */}
                    {registrationType === 'individual' && (
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="text-sm font-bold text-[#0B1F3A] mb-3">Personal Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-gray-500">Name</span><span className="font-medium">{individualData.fullName || '-'}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Email</span><span className="font-medium">{individualData.email || '-'}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Phone</span><span className="font-medium">{individualData.phone || '-'}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Location</span><span className="font-medium">{individualData.city}{individualData.country ? `, ${individualData.country}` : ''}</span></div>
                          {individualData.company && <div className="flex justify-between"><span className="text-gray-500">Company</span><span className="font-medium">{individualData.company}</span></div>}
                          {individualData.jobTitle && <div className="flex justify-between"><span className="text-gray-500">Job Title</span><span className="font-medium">{individualData.jobTitle}</span></div>}
                        </div>
                      </div>
                    )}

                    {registrationType === 'company' && (
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="text-sm font-bold text-[#0B1F3A] mb-3">Company Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-gray-500">Company</span><span className="font-medium">{companyData.companyName || '-'}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Contact</span><span className="font-medium">{companyData.contactPerson || '-'}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Email</span><span className="font-medium">{companyData.email || '-'}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Phone</span><span className="font-medium">{companyData.phone || '-'}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Delegates</span><span className="font-medium">{companyData.numberOfDelegates}</span></div>
                          {companyData.purchaseOrder && <div className="flex justify-between"><span className="text-gray-500">PO Number</span><span className="font-medium">{companyData.purchaseOrder}</span></div>}
                        </div>
                        {companyData.delegateNames.some((n) => !!n.trim()) && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <h5 className="text-xs font-semibold text-gray-500 mb-2">Delegates</h5>
                            {companyData.delegateNames.map((name, i) => (
                              <div key={i} className="text-sm py-1">
                                <span className="font-medium">{name || `Delegate ${i + 1}`}</span>
                                {companyData.delegateEmails[i] && <span className="text-gray-400 ml-2">{companyData.delegateEmails[i]}</span>}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Terms */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agree-terms"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label htmlFor="agree-terms" className="text-sm text-gray-600 leading-relaxed">
                        I agree to the Afri-Bridge Academy <Link href="#" className="text-emerald-600 hover:underline font-medium">Terms of Service</Link> and <Link href="#" className="text-emerald-600 hover:underline font-medium">Privacy Policy</Link>. I understand that my registration is subject to availability and payment confirmation.
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  {currentStep > 1 ? (
                    <Button type="button" variant="outline" onClick={handleBack} className="border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                  ) : (
                    <Link href={`/academy/courses/${course.slug}`} className="block">
                      <Button type="button" variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Course Details
                      </Button>
                    </Link>
                  )}

                  {currentStep < STEP_COUNT ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      disabled={
                        (currentStep === 1 && !canProceedStep1()) ||
                        (currentStep === 2 && !canProceedStep2())
                      }
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!agreedToTerms}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <CheckCircle className="mr-2 h-4 w-4" /> Submit Registration
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4">
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-5">Price Summary</h3>
                  <div className="space-y-0 mb-6">
                    <div className="py-3 border-b border-gray-100"><p className="text-sm text-gray-500">Course</p><p className="text-sm font-semibold text-[#0B1F3A]">{course.title}</p></div>
                    <div className="py-3 border-b border-gray-100"><p className="text-sm text-gray-500">Duration</p><p className="text-sm font-semibold text-[#0B1F3A]">{course.durationLabel}</p></div>
                    <div className="py-3 border-b border-gray-100"><p className="text-sm text-gray-500">Format</p><p className="text-sm font-semibold text-[#0B1F3A]">{course.format}</p></div>
                    <div className="py-3 border-b border-gray-100"><p className="text-sm text-gray-500">Level</p><p className="text-sm font-semibold text-[#0B1F3A]">{course.level}</p></div>
                    <div className="py-3 border-b border-gray-100"><p className="text-sm text-gray-500">Reference</p><p className="text-sm font-mono font-bold text-emerald-600">{referenceNumber}</p></div>
                    <div className="py-3"><p className="text-sm text-gray-500">Price</p><PriceDisplayHighlight amountZar={course.basePriceZar} suffix={pricingSuffix} /></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="text-sm font-bold text-[#0B1F3A] mb-2">Certification</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{course.certification}</p>
                  </div>
                  <Link href={`/academy/courses/${course.slug}`} className="block">
                    <Button variant="outline" className="w-full border-gray-200 text-gray-600 bg-transparent hover:bg-gray-50 font-semibold text-sm">
                      Back to Course Details
                    </Button>
                  </Link>
                </div>

                {/* Help card */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h4 className="text-sm font-bold text-[#0B1F3A] mb-3">Need Help?</h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>WhatsApp: <a href="https://wa.me/27833910863" className="text-emerald-600 font-medium hover:underline">+27 83 391 0863</a></p>
                    <p>Phone: <a href="tel:+27115686712" className="text-emerald-600 font-medium hover:underline">+27 11 568 6712</a></p>
                    <p>Email: <a href="mailto:academy@afribridge.co.za" className="text-emerald-600 font-medium hover:underline">academy@afribridge.co.za</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademyPricingProvider>
  );
}
