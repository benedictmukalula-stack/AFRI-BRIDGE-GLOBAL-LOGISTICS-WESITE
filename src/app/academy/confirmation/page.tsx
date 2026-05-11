'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle,
  Mail,
  CreditCard,
  BookOpen,
  HelpCircle,
  Copy,
  Check,
  Phone,
  MessageCircle,
  Download,
  FileText,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { ACADEMY_CONTACT } from '@/lib/academyRegistration';
import { getAllNotificationPreviews } from '@/lib/academyNotifications';
import { courses } from '@/data/academyCourses';
import { buildRegistrationData, generateReferenceNumber } from '@/lib/academyRegistration';

export default function ConfirmationPage() {
  const [copied, setCopied] = useState(false);
  const [expandedNotification, setExpandedNotification] = useState<string | null>(null);

  const handleCopyRef = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Demo data for confirmation display
  const demoCourse = courses[0];
  const demoRegistration = buildRegistrationData(
    demoCourse,
    'individual',
    'bank_transfer',
    {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+27 83 123 4567',
      country: 'South Africa',
      city: 'Johannesburg',
      company: '',
      jobTitle: 'Logistics Manager',
      preferredIntake: demoCourse.intakeDates[0],
      specialRequirements: '',
    },
    null,
  );
  const referenceNumber = demoRegistration.referenceNumber;
  const notificationPreviews = getAllNotificationPreviews(demoRegistration);

  const today = new Date().toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <SiteLayout>
      {/* Hero */}
      <div className="bg-[#0B1F3A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/academy" className="hover:text-white transition-colors">Academy</Link>
            <span>/</span>
            <span className="text-white font-medium">Confirmation</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <CheckCircle className="h-7 w-7 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Registration Received
              </h1>
              <p className="text-gray-400 mt-1">
                Ref: <span className="text-emerald-400 font-mono font-semibold">{referenceNumber}</span>
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Thank you for your registration. We have received your details and our team will
            contact you within 24 hours to confirm your enrolment.
          </p>
        </div>
      </div>

      {/* Confirmation Content */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Banner */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-emerald-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-3">
              Your Registration Is Being Processed
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Thank you for choosing Afri-Bridge Academy. Your registration has been successfully
              submitted and is currently being reviewed by our admissions team.
            </p>
          </div>

          {/* Summary Card */}
          <div className="rounded-xl border border-gray-200 p-6 lg:p-8 mb-10">
            <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">Registration Summary</h3>
            <div className="space-y-5">
              {/* Reference Number */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Reference Number</p>
                  <p className="text-lg font-bold text-[#0B1F3A] font-mono">{referenceNumber}</p>
                </div>
                <button
                  onClick={handleCopyRef}
                  className="flex items-center gap-1.5 text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  {copied ? (<><Check className="h-4 w-4" /> Copied</>) : (<><Copy className="h-4 w-4" /> Copy</>)}
                </button>
              </div>

              {/* Course */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Course</p>
                  <p className="text-sm font-semibold text-[#0B1F3A]">{demoCourse.title}</p>
                </div>
              </div>

              {/* Payment Status */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Payment Status</p>
                  <p className="text-sm font-medium text-gray-700">Pending</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-700">Pending</span>
              </div>

              {/* Date */}
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Date Submitted</p>
                  <p className="text-sm font-medium text-gray-700">{today}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="rounded-xl border border-gray-200 p-6 lg:p-8 mb-10">
            <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">What Happens Next?</h3>
            <div className="space-y-6">
              {[
                { step: '1', icon: Mail, title: 'Email Confirmation', description: 'You will receive a confirmation email at the address you provided. This email contains your registration reference and summary details.' },
                { step: '2', icon: CreditCard, title: 'Payment Details', description: 'Our admissions team will send you payment instructions and available payment options. Payment must be confirmed before course access is granted.' },
                { step: '3', icon: BookOpen, title: 'Course Access', description: 'Once your payment is confirmed, you will receive login credentials for the learning platform along with your course materials and schedule.' },
              ].map(({ step, icon: Icon, title, description }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {step}
                    </div>
                    {step !== '3' && <div className="w-px flex-1 bg-emerald-200 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-4 w-4 text-emerald-600" />
                      <h4 className="font-bold text-[#0B1F3A]">{title}</h4>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notification Templates Preview */}
          <div className="rounded-xl border border-gray-200 p-6 lg:p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-bold text-[#0B1F3A]">Notification Templates</h3>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-500">Preview</span>
            </div>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              The following notifications will be triggered during the registration process. These templates are ready for backend integration.
            </p>
            <div className="space-y-3">
              {notificationPreviews.map((preview) => (
                <div key={preview.type} className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setExpandedNotification(expandedNotification === preview.type ? null : preview.type)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Mail className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0B1F3A]">{preview.label}</p>
                        <p className="text-xs text-gray-400">{preview.subject}</p>
                      </div>
                    </div>
                    {expandedNotification === preview.type ? (
                      <ChevronUp className="h-4 w-4 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {expandedNotification === preview.type && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line font-mono">{preview.preview}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/27833910863?text=Hi Afri-Bridge Academy, I just registered for a course (Ref: ${referenceNumber}) and have a question.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="rounded-xl border-2 border-green-200 p-5 hover:bg-green-50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0B1F3A]">WhatsApp Us</p>
                    <p className="text-xs text-gray-500">Quick response</p>
                  </div>
                </div>
                <p className="text-sm text-green-700 font-medium">{ACADEMY_CONTACT.whatsapp}</p>
              </div>
            </a>

            {/* Email CTA */}
            <a
              href={`mailto:${ACADEMY_CONTACT.academyEmail}?subject=Registration Inquiry - ${referenceNumber}`}
              className="block"
            >
              <div className="rounded-xl border-2 border-emerald-200 p-5 hover:bg-emerald-50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0B1F3A]">Email Academy</p>
                    <p className="text-xs text-gray-500">Detailed inquiries</p>
                  </div>
                </div>
                <p className="text-sm text-emerald-700 font-medium">{ACADEMY_CONTACT.academyEmail}</p>
              </div>
            </a>

            {/* Phone CTA */}
            <a href={`tel:${ACADEMY_CONTACT.phone.replace(/\s/g, '')}`} className="block">
              <div className="rounded-xl border-2 border-blue-200 p-5 hover:bg-blue-50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0B1F3A]">Call Us</p>
                    <p className="text-xs text-gray-500">Mon-Fri, 8am-5pm SAST</p>
                  </div>
                </div>
                <p className="text-sm text-blue-700 font-medium">{ACADEMY_CONTACT.phone}</p>
              </div>
            </a>

            {/* Download Brochure */}
            <Link href="/academy/courses" className="block">
              <div className="rounded-xl border-2 border-gray-200 p-5 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                    <Download className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0B1F3A]">Browse Courses</p>
                    <p className="text-xs text-gray-500">View full catalogue</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">Explore 50 programmes across 10 categories</p>
              </div>
            </Link>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-50 rounded-xl p-6 text-center mb-10">
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <strong>Afri-Bridge Academy</strong>
            </p>
            <p className="text-sm text-gray-500">
              {ACADEMY_CONTACT.address}, {ACADEMY_CONTACT.city}, {ACADEMY_CONTACT.country}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy/courses">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12 w-full sm:w-auto">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold px-8 h-12 w-full sm:w-auto">
                <HelpCircle className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
