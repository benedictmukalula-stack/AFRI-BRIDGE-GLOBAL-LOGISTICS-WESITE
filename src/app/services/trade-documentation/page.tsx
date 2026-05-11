'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ScrollText, CheckCircle2, Shield, Globe, FileText, Stamp, Building, BookOpen } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function TradeDocumentationPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/21-trade-doc-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white font-medium">Trade Documentation</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <ScrollText className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Trade Documentation</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Complete trade documentation services ensuring your shipments meet all legal and regulatory requirements. We prepare, verify, and manage every document needed for cross-border trade, from customs entries and certificates of origin to bills of lading and trade agreement compliance.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Documentation Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Every Document, Every Time</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Accurate and complete documentation is the foundation of smooth cross-border trade. Missing or incorrect paperwork is the single biggest cause of customs delays, demurrage charges, and cargo seizures at African borders. Our documentation specialists prepare and verify every document before submission, ensuring your cargo clears without a hitch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Customs Entries', desc: 'Preparation and submission of all SARS customs declarations including import (DA500), export (DA550), and transit entries. Accurate tariff classification, valuation, and origin declaration.', icon: FileText },
              { title: 'Certificates of Origin', desc: 'Issuance and verification of certificates of origin including SADC, COMESA, EU-EPA, AGOA, and RCEP certificates. We ensure your goods qualify for preferential tariff treatment under applicable trade agreements.', icon: Stamp },
              { title: 'Bills of Lading', desc: 'Review, amendment, and management of ocean, air, and road transport documentation. We verify cargo descriptions, weights, measurements, and ensure consistency across all transport documents.', icon: BookOpen },
              { title: 'Trade Agreement Compliance', desc: 'Expert compliance with SADC, COMESA, TFTA, AGOA, and bilateral trade agreements. We verify rules of origin, prepare supporting documentation, and manage preferential rate claims.', icon: Globe },
              { title: 'Permits & Licences', desc: 'Applications for import permits, export permits, second-hand goods permits, and all other statutory permits required for cross-border trade. We track application progress and ensure timely approval.', icon: Building },
              { title: 'Document Management', desc: 'Centralised digital document management system for all trade documents. Secure storage, easy retrieval, audit trail, and sharing with customs authorities, banks, and trading partners.', icon: Shield },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6 text-center">Trade Agreements We Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { agreement: 'SADC FTA', desc: 'Southern African Development Community Free Trade Area. Zero or reduced duties on goods traded between member states with qualifying origin.', countries: '16 member states' },
                { agreement: 'COMESA', desc: 'Common Market for Eastern and Southern Africa. Preferential rates for qualifying goods with COMESA Certificate of Origin.', countries: '21 member states' },
                { agreement: 'AGOA', desc: 'African Growth and Opportunity Act. Duty-free access to US market for qualifying African goods. Critical for apparel, automotive, and agricultural exports.', countries: 'Sub-Saharan Africa' },
                { agreement: 'TFTA', desc: 'Tripartite Free Trade Area combining SADC, COMESA, and EAC. Covers 26 African countries with a combined market of over 600 million people.', countries: '26 member states' },
              ].map(({ agreement, desc, countries }) => (
                <div key={agreement} className="p-4 bg-white rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-[#0B1F3A] text-sm">{agreement}</h4>
                    <span className="text-xs text-emerald-600 font-medium">{countries}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Need Document Assistance?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">From a single certificate of origin to full trade documentation packages, we handle it all accurately and on time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Request Document Services <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Contact Us</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
