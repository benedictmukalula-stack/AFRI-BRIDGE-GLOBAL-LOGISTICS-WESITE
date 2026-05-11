'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'What services does Afri-Bridge offer?',
    answer: 'Afri-Bridge provides comprehensive logistics and trade solutions across Africa. Our core services include customs clearing and brokerage, air freight, ocean freight (FCL and LCL), road and cross-border transport, warehousing and distribution, project cargo logistics, vehicle sourcing and delivery, mining and industrial logistics, oil and gas logistics, maritime and port logistics, registration and compliance, and trade documentation. We also offer the ATLAS trade intelligence platform and the Afri-Bridge Academy for professional training and certification.',
  },
  {
    question: 'Which African countries do you operate in?',
    answer: 'Afri-Bridge operates across 15+ African markets including South Africa, Zambia, Zimbabwe, Mozambique, Tanzania, Kenya, Namibia, Botswana, Angola, DRC, Nigeria, Ghana, Uganda, Rwanda, Malawi, and Eswatini. Our network continues to expand as we identify new trade corridor opportunities. We have physical offices in Johannesburg, Durban, Cape Town, Lusaka, Harare, and Maputo, with agent partnerships across the rest of our operating markets.',
  },
  {
    question: 'How do I get a freight quote?',
    answer: 'Getting a quote is easy. You can use our online quote form at afribridge.co.za/quote, email us at info@afribridge.co.za, call us at +27 11 568 6712, or WhatsApp us at +27 83 391 0863. Simply provide your origin, destination, cargo details (type, weight, dimensions), preferred mode of transport, and desired timeline. Our team will respond with a competitive quote within 2 business hours during working hours.',
  },
  {
    question: 'What is ATLAS?',
    answer: 'ATLAS (African Trade Logistics & Analytics System) is Afri-Bridge\'s proprietary trade intelligence platform. It provides real-time data on African trade corridors, border post conditions, port congestion, shipping schedules, and market intelligence. Features include corridor monitoring, ETAs, compliance checks, freight marketplace, and carbon tracking. ATLAS is available as a web platform and mobile app. Visit afribridge.co.za/atlas for more information and pricing.',
  },
  {
    question: 'What is the Afri-Bridge Academy?',
    answer: 'The Afri-Bridge Academy is our professional training and certification division. We offer 50 courses across 10 categories including customs clearing, freight forwarding, maritime shipping, oil and gas logistics, mining logistics, and more. Programmes range from short courses (1-5 days) to professional certificates (4-12 weeks) to corporate transformation programmes. Our certifications are industry-recognised and aligned with international standards including FIATA and SARS requirements.',
  },
  {
    question: 'How long does customs clearance take?',
    answer: 'Customs clearance timelines vary depending on the complexity of the shipment, completeness of documentation, and current border post conditions. For standard imports with complete documentation, clearance typically takes 1-3 business days. Complex shipments requiring additional permits, inspection, or valuation may take 5-10 business days. Our experienced customs team works proactively to minimise delays and keep clients informed at every stage. With our ATLAS platform, clients can track clearance status in real time.',
  },
  {
    question: 'Do you offer warehousing and distribution?',
    answer: 'Yes, Afri-Bridge provides comprehensive warehousing and distribution services across our network. We operate and partner with warehousing facilities in Johannesburg, Durban, Cape Town, Lusaka, Harare, and Maputo. Services include bonded warehousing, general storage, pick-and-pack, cross-docking, inventory management, and distribution. We also offer fulfilment services for e-commerce and retail clients with integrated last-mile delivery solutions.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'Afri-Bridge serves a diverse range of industries across Africa. Our key sectors include mining and resources, oil and gas, manufacturing and retail, automotive (vehicle sourcing), agriculture and food products, construction and project cargo, pharmaceutical and healthcare, fast-moving consumer goods (FMCG), and technology and electronics. Our industry specialists understand the unique logistics requirements and compliance needs of each sector.',
  },
  {
    question: 'How do I track my shipment?',
    answer: 'You can track your shipment through several channels. Use the Track Shipment feature on our website, log into the ATLAS platform for real-time tracking with ETAs, contact your dedicated account manager for updates, or WhatsApp us at +27 83 391 0863 with your shipment reference number. We provide proactive status updates at key milestones including collection, customs submission, clearance, and delivery.',
  },
  {
    question: 'How can I contact Afri-Bridge?',
    answer: 'You can reach us through multiple channels. Phone: +27 11 568 6712 (Mon-Fri 08:00-17:00 SAST, Sat 09:00-13:00). WhatsApp: +27 83 391 0863 (available during business hours). Email: info@afribridge.co.za for general enquiries, quotes@afribridge.co.za for quotes, and academy@afribridge.co.za for training enquiries. Visit our contact page at afribridge.co.za/contact or visit our office at Afri-Bridge House, West Street, Sandton, Johannesburg, 2196.',
  },
];

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/29-faq-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Company</span>
            <span>/</span>
            <span className="text-white font-medium">FAQ</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <HelpCircle className="h-7 w-7 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-400 mt-1">Find answers to common questions about our services</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Browse our most commonly asked questions. Can&apos;t find what you are looking for?
            Contact our team and we will be happy to help.
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = expandedIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-colors ${isOpen ? 'border-emerald-200 bg-emerald-50/30' : 'border-gray-100 hover:border-gray-200'}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-base font-semibold text-[#0B1F3A] pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-emerald-600 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Still Have Questions?</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Reach out through any channel and we will get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/quote">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold px-8 h-12">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
