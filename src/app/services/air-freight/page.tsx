'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plane, CheckCircle2, Clock, Shield, Globe, Package, AlertTriangle, Zap } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function AirFreightPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/17-air-freight-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white font-medium">Air Freight Solutions</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Plane className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Air Freight Solutions</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Time-critical air cargo services backed by IATA partnerships and a global network of airline carriers. Whether you need express delivery across Africa or international freight from any origin worldwide, our air freight team ensures reliable, efficient transportation with full end-to-end visibility.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Air Cargo Expertise</span>
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Reliable Air Freight Across Africa &amp; Beyond</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Afri-Bridge operates through all major African airports including O.R. Tambo (Johannesburg), Cape Town International, King Shaka (Durban), Jomo Kenyatta (Nairobi), Murtala Muhammed (Lagos), and Kotoka International (Accra). Our IATA-accredited team manages every aspect of your air cargo shipment, from pickup at origin to final delivery at destination.</p>
              <p className="text-gray-500 leading-relaxed">We partner with leading carriers including South African Airways Cargo, Ethiopian Airlines Cargo, Kenya Airways Cargo, Emirates SkyCargo, Qatar Airways Cargo, and Lufthansa Cargo to offer competitive rates and reliable capacity across all trade lanes serving the African continent.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: 'Express Services', desc: 'Same-day and next-day delivery for urgent shipments across Southern and East Africa.' },
                { icon: Package, title: 'General Cargo', desc: 'Standard air freight for commercial goods, electronics, textiles, and manufactured products.' },
                { icon: AlertTriangle, title: 'Dangerous Goods', desc: 'IATA DGR-certified handling for hazardous materials, lithium batteries, and chemicals.' },
                { icon: Shield, title: 'Temperature-Controlled', desc: 'Cold chain solutions for pharmaceuticals, fresh produce, and perishable goods.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-4 rounded-lg border border-gray-100">
                  <Icon className="h-5 w-5 text-emerald-600 mb-2" />
                  <h4 className="text-sm font-bold text-[#0B1F3A] mb-1">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">Airport Network &amp; Transit Times</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-[#0B1F3A]">Route</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#0B1F3A]">Transit</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#0B1F3A]">Frequency</th>
                </tr></thead>
                <tbody>
                  {[
                    ['Johannesburg → Nairobi', '1–2 days', 'Daily'],
                    ['Johannesburg → Lagos', '1–3 days', 'Daily'],
                    ['Johannesburg → Accra', '1–3 days', '5x weekly'],
                    ['Johannesburg → Dar es Salaam', '1–2 days', 'Daily'],
                    ['Johannesburg → Maputo', 'Same day', 'Daily'],
                    ['Johannesburg → Harare', 'Same day', 'Daily'],
                    ['Johannesburg → Lusaka', '1–2 days', 'Daily'],
                    ['Johannesburg → Dubai', '2–3 days', 'Daily'],
                    ['Johannesburg → London', '2–3 days', 'Daily'],
                    ['Johannesburg → Shanghai', '3–5 days', '5x weekly'],
                  ].map(([route, transit, freq]) => (
                    <tr key={route} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-[#0B1F3A]">{route}</td>
                      <td className="py-3 px-4 text-gray-500">{transit}</td>
                      <td className="py-3 px-4 text-emerald-600 font-medium">{freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '500+', label: 'Tons Shipped Monthly' },
              { value: '45+', label: 'Airline Partners' },
              { value: '99.2%', label: 'On-Time Delivery' },
              { value: '24/7', label: 'Operations Control' },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Ship by Air Today</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Whether you need express delivery or cost-effective air cargo solutions, our team will find the best option for your shipment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Get Air Freight Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/tracking"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Track Your Shipment</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
