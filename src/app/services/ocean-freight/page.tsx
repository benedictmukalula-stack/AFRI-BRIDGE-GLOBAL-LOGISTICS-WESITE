'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Ship, CheckCircle2, Anchor, Container, Globe, Clock, Package, BarChart3 } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function OceanFreightPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/20-ocean-freight-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white font-medium">Ocean Freight (FCL/LCL)</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Ship className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Ocean Freight (FCL/LCL)</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Comprehensive sea freight solutions connecting Africa to the world. Whether you need a full container load (FCL) or a cost-effective less-than-container (LCL) shipment, we partner with major shipping lines to deliver competitive rates, reliable scheduling, and seamless port-to-port or door-to-door service across all major African trade lanes.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Sea Freight Solutions</span>
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Full Container &amp; Consolidation Services</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Our ocean freight division manages shipments through all major African ports including Durban, Cape Town, Richards Bay, Maputo, Dar es Salaam, Mombasa, Lagos (Tin Can & Apapa), Tema, Abidjan, and Djibouti. We maintain contracts with leading carriers including Maersk, MSC, CMA CGM, COSCO, and Hapag-Lloyd to secure capacity and competitive pricing throughout the year.</p>
              <p className="text-gray-500 leading-relaxed">From a single pallet to multi-container project shipments, our team provides flexible solutions tailored to your cargo volume, timeline, and budget. We handle all documentation, customs clearance, and inland transport to deliver a truly door-to-door experience.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">FCL vs LCL: Which Is Right for You?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border-2 border-emerald-200 bg-emerald-50">
                  <h4 className="font-bold text-emerald-800 mb-2">Full Container (FCL)</h4>
                  <ul className="space-y-2">
                    {['Exclusive use of container', '20ft, 40ft, 40ft HC options', 'Faster transit, no consolidation', 'Lower per-unit cost at volume', 'Better for sensitive cargo'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-xl border-2 border-blue-200 bg-blue-50">
                  <h4 className="font-bold text-blue-800 mb-2">Consolidation (LCL)</h4>
                  <ul className="space-y-2">
                    {['Pay only for space used', 'From 1 CBM upwards', 'Weekly departures', 'Cost-effective for small loads', 'Shared container with other cargo'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600"><CheckCircle2 className="h-3.5 w-3.5 text-blue-600 mt-0.5 shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">Major Shipping Routes &amp; Transit Times</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { route: 'Durban → Singapore', fcl: '14–18 days', lcl: '18–22 days' },
                { route: 'Durban → Shanghai', fcl: '14–20 days', lcl: '20–28 days' },
                { route: 'Durban → Mumbai', fcl: '10–16 days', lcl: '14–20 days' },
                { route: 'Durban → Mombasa', fcl: '8–14 days', lcl: '12–18 days' },
                { route: 'Durban → Lagos', fcl: '10–16 days', lcl: '16–22 days' },
                { route: 'Cape Town → Rotterdam', fcl: '16–22 days', lcl: '22–28 days' },
                { route: 'Maputo → Dubai', fcl: '12–18 days', lcl: '18–24 days' },
                { route: 'Mombasa → Mumbai', fcl: '8–12 days', lcl: '12–16 days' },
              ].map(({ route, fcl, lcl }) => (
                <div key={route} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <span className="text-sm font-medium text-[#0B1F3A]">{route}</span>
                  <div className="flex gap-4 text-xs">
                    <span className="text-emerald-600 font-medium">FCL {fcl}</span>
                    <span className="text-blue-600 font-medium">LCL {lcl}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '3000+', label: 'TEUs Managed Monthly' },
              { value: '15+', label: 'Shipping Line Partners' },
              { value: '25+', label: 'African Ports Served' },
              { value: '85+', label: 'Global Destinations' },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Get Ocean Freight Rates</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">From FCL to LCL, we offer competitive sea freight rates on all major trade lanes serving Africa. Request a quote and let our ocean freight experts find the best solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/resources"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Use Rate Estimator</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
