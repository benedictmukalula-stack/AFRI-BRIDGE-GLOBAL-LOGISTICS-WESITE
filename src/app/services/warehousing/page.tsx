'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Warehouse, CheckCircle2, Shield, BarChart3, Package, Boxes, Truck, Clock, QrCode } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function WarehousingPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/14-warehousing-hero.png"
          alt=""
          width={1672}
          height={941}
          priority
          className="w-full h-auto brightness-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white font-medium">Warehousing &amp; Distribution</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Warehouse className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Warehousing &amp; Distribution</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Strategic warehousing facilities at key trade hubs across Southern Africa, offering inventory management, pick-and-pack services, cross-docking, bonded storage, and distribution solutions designed for efficient supply chain operations.</p>
        </div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Storage &amp; Fulfilment</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Strategic Warehouse Locations</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Our warehousing network spans major logistics hubs in Johannesburg, Cape Town, Durban, and Maputo, providing bonded and general storage within proximity to ports, airports, and major transport corridors. Each facility is equipped with modern inventory management systems, 24/7 security, and trained warehouse personnel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { location: 'Johannesburg', area: '25,000 sqm', type: 'Bonded & General', features: ['Cold storage', 'Hazmat zone', 'Racking systems', 'CCTV & access control'] },
              { location: 'Cape Town', area: '12,000 sqm', type: 'General & Distribution', features: ['Cross-dock facility', 'Container yard', 'Forklift fleet', 'Inventory tracking'] },
              { location: 'Durban', area: '18,000 sqm', type: 'Bonded & Port-Adjacent', features: ['Port proximity', 'Container stuffing', 'Break-bulk handling', 'Reefer points'] },
              { location: 'Maputo', area: '8,000 sqm', type: 'General & Transit', features: ['Bonded storage', 'Cross-border staging', 'Security compound', 'Vehicle storage'] },
            ].map(({ location, area, type, features }) => (
              <div key={location} className="p-5 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-1">{location}</h3>
                <p className="text-xs text-emerald-600 font-medium mb-3">{type} · {area}</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500"><CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">Value-Added Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Package, title: 'Pick, Pack & Ship', desc: 'Order fulfilment services including picking, quality checking, packaging, labelling, and dispatching. Ideal for e-commerce and retail distribution across Southern Africa with same-day processing available.' },
                { icon: Boxes, title: 'Inventory Management', desc: 'Real-time inventory visibility through our WMS with barcode scanning, cycle counting, FIFO/FEFO management, stock alerts, and comprehensive reporting via our online portal.' },
                { icon: QrCode, title: 'Kitting & Assembly', desc: 'Product kitting, promotional bundling, light assembly, and custom packaging services. We manage bill of materials, component sourcing, and quality inspection for assembled products.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 bg-white rounded-xl">
                  <Icon className="h-6 w-6 text-emerald-600 mb-3" />
                  <h4 className="font-bold text-[#0B1F3A] mb-2">{title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Need Warehouse Space?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Whether you need short-term storage, long-term warehousing, or a full distribution solution, we have the capacity and expertise.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Schedule a Visit</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
