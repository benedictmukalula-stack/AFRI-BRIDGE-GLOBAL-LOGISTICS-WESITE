'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Truck, CheckCircle2, Globe, Shield, MapPin, Clock, Route, FileText } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function RoadTransportPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/16-road-transport-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white font-medium">Road &amp; Cross-Border Transport</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Truck className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Road &amp; Cross-Border Transport</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Extensive road freight network spanning the SADC region and beyond. Our fleet and partner network covers all major trade corridors across Southern and East Africa, with full cross-border documentation, customs facilitation, and real-time tracking from pickup to delivery.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Road Freight Network</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Connecting Africa by Road</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Our road transport division operates a comprehensive fleet of trucks, flatbeds, and specialised vehicles covering South Africa, Botswana, Zimbabwe, Mozambique, Namibia, Zambia, Malawi, Kenya, Tanzania, and the DRC. We handle all cross-border documentation including customs entries, transit permits, bond notes, and insurance to ensure your cargo crosses borders seamlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Full Truckload (FTL)', desc: 'Dedicated vehicle for your shipment. Ideal for high-volume cargo requiring direct, uninterrupted transport from origin to destination without handling stops.', icon: Truck },
              { title: 'Part Truckload (PTL)', desc: 'Cost-effective shared transport for medium-sized shipments. Your cargo shares vehicle space with other compatible loads on the same corridor route.', icon: Route },
              { title: 'Cross-Border Expertise', desc: 'Full management of border formalities at all major SADC border posts. We maintain relationships with customs officials to expedite processing.', icon: Shield },
              { title: 'GPS Tracking & Visibility', desc: 'Real-time GPS tracking on all vehicles with milestone notifications at departure, border crossing, and delivery. Online portal access available 24/7.', icon: MapPin },
              { title: 'Specialised Vehicles', desc: 'Flatbeds for heavy equipment, refrigerated trucks for perishables, curtain-siders for easy loading, and tankers for liquid cargo transportation.', icon: Truck },
              { title: 'Insurance & Compliance', desc: 'Comprehensive cargo insurance, carrier liability coverage, roadworthy certifications, and full compliance with cross-border transport regulations.', icon: FileText },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="group p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">Key Trade Corridors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { corridor: 'Johannesburg – Harare (Beit Bridge)', distance: '1,420 km', time: '2–3 days' },
                { corridor: 'Johannesburg – Maputo (Lebombo)', distance: '560 km', time: '1–2 days' },
                { corridor: 'Johannesburg – Gaborone', distance: '350 km', time: '1 day' },
                { corridor: 'Johannesburg – Windhoek', distance: '1,490 km', time: '2–3 days' },
                { corridor: 'Johannesburg – Lusaka (Chirundu)', distance: '2,050 km', time: '3–5 days' },
                { corridor: 'Johannesburg – Dar es Salaam', distance: '2,820 km', time: '4–6 days' },
                { corridor: 'Durban – Johannesburg', distance: '570 km', time: '1 day' },
                { corridor: 'Johannesburg – Nairobi', distance: '3,900 km', time: '5–8 days' },
              ].map(({ corridor, distance, time }) => (
                <div key={corridor} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                  <div>
                    <p className="text-sm font-medium text-[#0B1F3A]">{corridor}</p>
                    <p className="text-xs text-gray-400">{distance}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium"><Clock className="h-3 w-3" />{time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '200+', label: 'Vehicles in Fleet' },
              { value: '10+', label: 'Countries Connected' },
              { value: '50+', label: 'Border Posts Covered' },
              { value: '99%', label: 'Delivery Success Rate' },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Need Road Freight?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">From full truckloads to part loads, domestic deliveries to cross-border transport — get a competitive quote for your road freight shipment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Contact Us</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
