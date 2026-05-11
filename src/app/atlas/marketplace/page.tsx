'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Store, Search, Star, Shield, Package, Truck, Users, BarChart3, CheckCircle2 } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function AtlasMarketplacePage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/30-atlas-marketplace-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/atlas" className="hover:text-white transition-colors">ATLAS</Link><span>/</span>
            <span className="text-white font-medium">Marketplace</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center"><Store className="h-7 w-7 text-emerald-400" /></div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">ATLAS Marketplace</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Africa&apos;s logistics marketplace connecting shippers with verified carriers, freight forwarders, customs brokers, and warehouse operators. Post your shipment requirements, receive competitive quotes from pre-vetted providers, and manage everything from a single platform.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Digital Marketplace</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">How the Marketplace Works</h2>
            <p className="text-gray-500 text-lg leading-relaxed">The ATLAS Marketplace eliminates the complexity of finding reliable logistics partners in Africa. Whether you need to move a single pallet or charter an entire vessel, our platform connects you with the right providers at competitive prices, all backed by Afri-Bridge&apos;s verification and quality assurance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { step: '01', title: 'List Your Shipment', desc: 'Post your cargo details including origin, destination, weight, dimensions, timeline, and any special requirements. It takes less than 5 minutes.', icon: Package },
              { step: '02', title: 'Receive Quotes', desc: 'Verified logistics providers compete for your business. Receive multiple quotes from rated and reviewed carriers, forwarders, and brokers.', icon: Search },
              { step: '03', title: 'Book & Track', desc: 'Compare quotes, review provider ratings, and book with confidence. Real-time tracking and milestone updates from booking to delivery.', icon: Truck },
              { step: '04', title: 'Rate & Review', desc: 'After delivery, rate your experience and review the provider. Your feedback helps maintain quality across the marketplace.', icon: Star },
            ].map(({ step, title, desc, icon: Icon }) => (
              <div key={step} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">{step}</div>
                <Icon className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-bold text-[#0B1F3A] text-sm mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <h3 className="col-span-full text-2xl font-bold text-[#0B1F3A] text-center">Who Can Join?</h3>
            {[
              { title: 'Shippers & Importers', desc: 'Post shipment requirements, compare rates, book freight, and track deliveries across all African trade corridors.' },
              { title: 'Carriers & Fleet Owners', desc: 'List available capacity, receive matching shipment requests, grow your business with new customers across Africa.' },
              { title: 'Freight Forwarders', desc: 'Offer end-to-end logistics solutions, manage multi-modal shipments, and expand your service coverage.' },
              { title: 'Customs Brokers', desc: 'Provide customs clearance services, connect with shippers needing compliance support at every border.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-5 rounded-xl bg-gray-50">
                <h4 className="font-bold text-[#0B1F3A] text-sm mb-2">{title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">Marketplace by the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '500+', label: 'Verified Providers' },
                { value: '25+', label: 'Countries Covered' },
                { value: '10,000+', label: 'Shipments Facilitated' },
                { value: '98%', label: 'Satisfaction Rate' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-emerald-700">{value}</p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Join the ATLAS Marketplace</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Whether you need to ship goods or offer logistics services, the ATLAS Marketplace connects you with the right partners.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Join as Provider <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/quote"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Post a Shipment</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
