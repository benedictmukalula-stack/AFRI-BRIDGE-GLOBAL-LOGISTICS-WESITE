'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileCheck, CheckCircle2, Shield, Building, FileText, BadgeCheck, Clock, Scale } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function RegistrationPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/23-registration-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white font-medium">Registration &amp; Compliance</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <FileCheck className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Registration &amp; Compliance</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Navigate South Africa&apos;s regulatory landscape with confidence. We handle SARS customs registration, import/export code applications, permits, licences, and ongoing compliance advisory to keep your trade operations fully legal and efficient.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Regulatory Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Stay Compliant, Trade Confidently</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Trading across African borders requires navigating a complex web of registrations, permits, and compliance requirements. Our dedicated regulatory team handles all the paperwork and liaises with SARS, ITAC, NRCS, and other government bodies on your behalf, ensuring your business meets every legal obligation from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Building, title: 'SARS Customs Registration', desc: 'Complete SARS customs and excise registration for importers and exporters. We prepare and submit your application, register you on the SARS eFiling system, and ensure your customs code is activated for immediate use. Typical turnaround: 5–7 working days.' },
              { icon: FileText, title: 'Import/Export Code Applications', desc: 'Processing of import and export codes through SARS for entities engaging in cross-border trade. Includes new applications, amendments, and code reactivations. We ensure all supporting documentation meets SARS requirements.' },
              { icon: Scale, title: 'Import/Export Permits', desc: 'Applications for ITAC import permits, export permits, and second-hand goods permits. We navigate the requirements for restricted goods, quota-controlled items, and strategically sensitive products across all categories.' },
              { icon: BadgeCheck, title: 'NRCS & Product Compliance', desc: 'National Regulator for Compulsory Specifications (NRCS) applications for vehicles, electrical products, and building materials. We manage LOA applications, compulsory specification compliance, and VC 8053 registration for vehicles.' },
              { icon: Shield, title: 'Licences & Certifications', desc: 'Applications for all trade-related licences including dangerous goods permits, hazardous materials transport licences, food import permits, phytosanitary certificates, and veterinary health certificates.' },
              { icon: Clock, title: 'Ongoing Compliance', desc: 'Continuous compliance monitoring including customs audit preparation, valuation reviews, origin verifications, duty drawback claims, and SARS dispute resolution. We keep you ahead of regulatory changes.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6 text-center">Common Registration Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { item: 'Customs Registration (Importer/Exporter)', time: '5–7 working days', docs: 'CIPC registration, ID/passport, proof of address, bank letter, tax clearance' },
                { item: 'Import Permit (ITAC)', time: '10–15 working days', docs: 'Application form, import rationale, pro-forma invoice, supplier details, product specifications' },
                { item: 'NRCS LOA (Letter of Authority)', time: '15–20 working days', docs: 'Product test reports, technical specifications, manufacturer compliance certificates, application forms' },
                { item: 'Vehicle Import (VC 8053)', time: '7–10 working days', docs: 'Vehicle title, Japanese export certificate, NRCS application, police clearance, roadworthy certificate' },
              ].map(({ item, time, docs }) => (
                <div key={item} className="p-4 bg-white rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-[#0B1F3A] text-sm">{item}</h4>
                    <span className="text-xs text-emerald-600 font-medium shrink-0 ml-2">{time}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Required: {docs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Need Registration Assistance?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Let our compliance experts handle your registrations and permits so you can focus on growing your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Contact Compliance Team</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
