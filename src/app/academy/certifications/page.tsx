'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2, BookOpen, Clock, Shield, Star, BarChart3, RefreshCcw } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function CertificationsPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/38-certifications-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/academy" className="hover:text-white transition-colors">Academy</Link><span>/</span>
            <span className="text-white font-medium">Certifications</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center"><Award className="h-7 w-7 text-emerald-400" /></div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Certifications</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Professional certification programmes that validate your expertise in African trade and logistics. Earn industry-recognised credentials that advance your career, demonstrate your competence, and give your organisation confidence in your capabilities.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Professional Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Industry-Recognised Certifications</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Our certification programmes are developed in collaboration with industry bodies and aligned with international standards. Each certification requires passing a rigorous examination that tests both theoretical knowledge and practical application in real-world logistics scenarios.</p>
          </div>

          <div className="space-y-8 mb-16">
            {[
              { name: 'Certified Customs Practitioner (CCP)', duration: '6–8 Weeks (self-paced)', modules: 8, exam: '3-hour written exam', prereqs: 'Minimum 2 years customs experience or completion of Customs Fundamentals course', description: 'The CCP certification validates expertise in customs clearance, tariff classification, valuation, origin determination, and SARS compliance. It is the gold standard for customs practitioners working in South Africa and SADC member states.', renew: 'Every 3 years (40 CPD points)' },
              { name: 'Certified Freight Forwarder (CFF)', duration: '8–10 Weeks (self-paced)', modules: 12, exam: '3-hour written + 1-hour practical', prereqs: 'Minimum 1 year freight forwarding experience or completion of Freight Forwarding Fundamentals course', description: 'The CFF certification covers multimodal freight planning, Incoterms, cargo insurance, documentation, carrier management, and international trade compliance. Aligned with FIATA standards and adapted for African trade corridors.', renew: 'Every 3 years (40 CPD points)' },
              { name: 'Certified Trade Compliance Specialist (CTCS)', duration: '6–8 Weeks (self-paced)', modules: 10, exam: '3-hour written exam', prereqs: 'Minimum 3 years trade compliance experience', description: 'Advanced certification for professionals responsible for ensuring organisational compliance with import/export regulations, trade sanctions, customs audits, and free trade agreement requirements across multiple African jurisdictions.', renew: 'Every 2 years (50 CPD points)' },
              { name: 'Certified Supply Chain Professional (CSCP)', duration: '10–12 Weeks (self-paced)', modules: 14, exam: '4-hour written + case study', prereqs: 'Minimum 3 years supply chain experience or relevant degree', description: 'Comprehensive certification covering end-to-end supply chain management including procurement, logistics, inventory management, demand planning, and supply chain strategy. Developed for professionals managing complex supply chains across Africa.', renew: 'Every 3 years (60 CPD points)' },
            ].map(({ name, duration, modules, exam, prereqs, description, renew }) => (
              <div key={name} className="p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-1">{name}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-emerald-600 shrink-0" /><span className="text-gray-600"><strong>Duration:</strong> {duration}</span></div>
                  <div className="flex items-center gap-2 text-sm"><BookOpen className="h-4 w-4 text-emerald-600 shrink-0" /><span className="text-gray-600"><strong>Modules:</strong> {modules}</span></div>
                  <div className="flex items-center gap-2 text-sm"><Shield className="h-4 w-4 text-emerald-600 shrink-0" /><span className="text-gray-600"><strong>Exam:</strong> {exam}</span></div>
                  <div className="flex items-center gap-2 text-sm"><RefreshCcw className="h-4 w-4 text-emerald-600 shrink-0" /><span className="text-gray-600"><strong>Renew:</strong> {renew}</span></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-600"><strong>Prerequisites:</strong> {prereqs}</p>
                </div>
                <Link href="/academy/register/customs-clearance-fundamentals"><Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold text-sm">Enrol Now <ArrowRight className="ml-2 h-3.5 w-3.5" /></Button></Link>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">Certification Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: '01', title: 'Enrol', desc: 'Choose your certification and complete the online enrolment with payment or corporate sponsorship.' },
                { step: '02', title: 'Study', desc: 'Access course materials, video lectures, practice quizzes, and downloadable study resources via our learning platform.' },
                { step: '03', title: 'Practice', desc: 'Complete mock exams and practical case studies to prepare for the final certification examination.' },
                { step: '04', title: 'Examination', desc: 'Sit the proctored exam at a test centre or online proctored session. Pass mark is 65% for all certifications.' },
                { step: '05', title: 'Certified', desc: 'Receive your digital certificate and physical certificate within 10 working days. Add credentials to your LinkedIn profile.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold">{step}</div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm mb-1">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Advance Your Career</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Earn a professional certification that sets you apart in the African logistics industry. Enrol today and start your journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy/courses"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Enrol Now <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Download Brochure</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
