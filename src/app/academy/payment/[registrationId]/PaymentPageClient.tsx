'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  CreditCard,
  Building2,
  FileText,
  Briefcase,
  Smartphone,
  CheckCircle,
  Clock,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AcademyPricingProvider } from '@/components/academy/AcademyPricingProvider';
import { CurrencySelector } from '@/components/academy/CurrencySelector';
import { PriceDisplay, PriceDisplayHighlight } from '@/components/academy/PriceDisplay';
import { courses, getCourseBySlug } from '@/data/academyCourses';
import {
  type PaymentMethod,
  PAYMENT_OPTIONS,
  ACADEMY_CONTACT,
} from '@/lib/academyRegistration';

const paymentIcons: Record<string, React.ReactNode> = {
  'credit-card': <CreditCard className="h-5 w-5" />,
  'building': <Building2 className="h-5 w-5" />,
  'file-text': <FileText className="h-5 w-5" />,
  'briefcase': <Briefcase className="h-5 w-5" />,
  'smartphone': <Smartphone className="h-5 w-5" />,
};

export function PaymentPageClient() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('bank_transfer');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Demo data — in production this would come from the registration via API
  const demoCourse = getCourseBySlug('customs-clearance-fundamentals') || courses[0];
  const referenceNumber = 'ABR-2026-' + Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  const pricingSuffix = demoCourse.pricingBasis === 'per programme' ? ' per programme' : ' per learner';
  const selectedOption = PAYMENT_OPTIONS.find((o) => o.id === selectedMethod);

  const handleContinue = () => {
    if (!agreedToTerms) return;
    router.push('/academy/confirmation');
  };

  return (
    <>
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
              <span className="text-white font-medium">Payment</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Complete Payment
                </h1>
                <p className="text-gray-400 mt-1">Secure checkout for your Academy registration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Body */}
        <div className="bg-gray-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Options */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-[#0B1F3A] mb-6">Select Payment Method</h2>

                  <div className="space-y-3 mb-8">
                    {PAYMENT_OPTIONS.map((opt) => {
                      const isDisabled = opt.id === 'mobile_money';
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => !isDisabled && setSelectedMethod(opt.id)}
                          disabled={isDisabled}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                            selectedMethod === opt.id
                              ? 'border-emerald-500 bg-emerald-50'
                              : isDisabled
                                ? 'border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed'
                                : 'border-gray-200 hover:border-emerald-300 bg-white'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                              selectedMethod === opt.id ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500'
                            }`}>
                              {paymentIcons[opt.icon]}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-[#0B1F3A]">{opt.label}</p>
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  selectedMethod === opt.id ? 'border-emerald-500' : 'border-gray-300'
                                }`}>
                                  {selectedMethod === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />}
                                </div>
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5">{opt.description}</p>
                              {selectedMethod === opt.id && (
                                <div className="mt-3 p-3 bg-white rounded-lg border border-emerald-100 text-xs text-gray-600 leading-relaxed">
                                  {opt.details}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3 mb-6">
                    <input
                      type="checkbox"
                      id="pay-terms"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="pay-terms" className="text-sm text-gray-600 leading-relaxed">
                      I agree to the Afri-Bridge Academy <Link href="#" className="text-emerald-600 hover:underline font-medium">Terms of Service</Link>, <Link href="#" className="text-emerald-600 hover:underline font-medium">Refund Policy</Link>, and understand that final billing is processed in South African Rand (ZAR) unless otherwise agreed.
                    </label>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <Link href="/academy/courses" className="block">
                      <Button type="button" variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
                      </Button>
                    </Link>
                    <Button
                      type="button"
                      onClick={handleContinue}
                      disabled={!agreedToTerms}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue to Confirmation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-4">
                  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-5">Order Summary</h3>
                    <div className="space-y-0 mb-6">
                      <div className="py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-500">Course</p>
                        <p className="text-sm font-semibold text-[#0B1F3A]">{demoCourse.title}</p>
                      </div>
                      <div className="py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-500">Programme Type</p>
                        <p className="text-sm font-semibold text-[#0B1F3A]">{demoCourse.programmeType}</p>
                      </div>
                      <div className="py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="text-sm font-semibold text-[#0B1F3A]">{demoCourse.durationLabel}</p>
                      </div>
                      <div className="py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-500">Format</p>
                        <p className="text-sm font-semibold text-[#0B1F3A]">{demoCourse.format}</p>
                      </div>
                      <div className="py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-500">Reference</p>
                        <p className="text-sm font-mono font-bold text-emerald-600">{referenceNumber}</p>
                      </div>
                      <div className="py-3 border-b border-gray-100">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm text-gray-500">Amount</p>
                          <div><CurrencySelector /></div>
                        </div>
                        <PriceDisplayHighlight amountZar={demoCourse.basePriceZar} suffix={pricingSuffix} size="lg" />
                        <p className="text-xs text-gray-400 mt-1">Base billing in ZAR</p>
                      </div>
                      <div className="py-3">
                        <p className="text-sm text-gray-500">Payment Method</p>
                        <p className="text-sm font-semibold text-[#0B1F3A]">{selectedOption?.label || 'Select a method'}</p>
                      </div>
                    </div>

                    {/* Bank details (shown for EFT) */}
                    {selectedMethod === 'bank_transfer' && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
                        <h4 className="text-xs font-bold text-[#0B1F3A] mb-3 uppercase tracking-wider">Bank Transfer Details</h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between"><span className="text-gray-500">Bank</span><span className="font-medium">FNB</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Account Name</span><span className="font-medium">Afri-Bridge (Pty) Ltd</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Account No.</span><span className="font-mono font-medium">6284 9100 327</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Branch Code</span><span className="font-medium">250655</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Reference</span><span className="font-mono font-bold text-emerald-600">{referenceNumber}</span></div>
                        </div>
                      </div>
                    )}

                    {/* Download Brochure */}
                    <Button variant="ghost" className="w-full text-gray-600 hover:text-emerald-600 text-sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Course Brochure
                    </Button>
                  </div>

                  {/* Security badge */}
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex items-center gap-3">
                    <Shield className="h-5 w-5 text-emerald-600 shrink-0" />
                    <p className="text-xs text-gray-500 leading-relaxed">Your payment information is secure. Afri-Bridge Academy does not store card details on our servers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AcademyPricingProvider>
    </>
  );
}
