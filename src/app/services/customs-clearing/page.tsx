'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, CheckCircle2, FileText, Scale, Globe, Clock, Users, BarChart3 } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function CustomsClearingPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/04-customs-clearing-hero.png"
          alt=""
          width={1672}
          height={941}
          priority
          className="w-full h-auto brightness-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0B1F3A]/55" />
        <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white font-medium">Customs Clearing &amp; Brokerage</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Shield className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Customs Clearing &amp; Brokerage</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">SARS-licensed customs clearance services for seamless import and export processing across all South African and SADC border posts. We handle tariff classification, duty optimization, and full regulatory compliance so your goods move without delay.</p>
        </div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Expert Clearance Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Comprehensive Customs Solutions</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Our team of licensed customs brokers handles every aspect of the clearance process, from documentation preparation to final release. With decades of combined experience at SARS and deep knowledge of the Customs and Excise Act, we ensure your shipments clear efficiently and compliantly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: FileText, title: 'Import & Export Declarations', desc: 'Complete preparation and submission of all customs declarations through SARS eFiling, including DA500, DA550, and DA185 documentation for all types of goods.' },
              { icon: Scale, title: 'Tariff Classification', desc: 'Accurate HS code classification to ensure correct duty rates are applied. Our experts stay current with annual tariff amendments and SARS interpretation notes.' },
              { icon: BarChart3, title: 'Duty Optimization', desc: 'Strategic use of preferential rates under AGOA, SADC, TFTA, and EU-EPA agreements. We identify every opportunity to minimise your duty burden legally.' },
              { icon: Globe, title: 'SADC Cross-Border', desc: 'Clearance expertise across all SADC border posts including Beit Bridge, Lebombo, Oshoek, Kopfontein, and Kazungula. We navigate each country\'s unique requirements.' },
              { icon: Clock, title: 'Express Clearance', desc: 'Priority clearance service for time-sensitive shipments with guaranteed turnaround times. Same-day clearance available for qualifying entries at major ports.' },
              { icon: Users, title: 'Compliance Advisory', desc: 'Ongoing customs compliance consulting including valuation reviews, origin audits, duty recovery assessments, and SARS dispute resolution support.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">Our Clearance Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Document Collection', desc: 'We receive commercial invoices, packing lists, bills of lading, certificates of origin, and any required permits from the importer or exporter.' },
                { step: '02', title: 'Entry Preparation', desc: 'Our brokers classify goods, determine valuation, calculate duties and taxes, and prepare all customs declarations for SARS eFiling submission.' },
                { step: '03', title: 'Submission & Payment', desc: 'Declarations are submitted to SARS, duties and VAT are paid, and any risk assessment flags are resolved through our compliance team.' },
                { step: '04', title: 'Release & Delivery', desc: 'SARS issues the release notification, cargo is released from the port or border, and goods proceed to final destination with all documentation in order.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">{step}</div>
                  <h4 className="font-bold text-[#0B1F3A] mb-2">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '98.5%', label: 'First-Time Clearance Rate' },
              { value: '15+', label: 'SADC Countries Covered' },
              { value: '4hrs', label: 'Average Clearance Time' },
              { value: '50,000+', label: 'Entries Processed Yearly' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-lg bg-emerald-50">
                <p className="text-2xl font-bold text-emerald-700">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Need Customs Clearance?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Get a fast, compliant clearance for your next shipment. Our licensed brokers are ready to assist with imports, exports, and cross-border trade across Africa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Contact Our Team</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
