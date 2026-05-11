'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Anchor, CheckCircle2, Shield, Globe, FileText, Ship, Clock, MapPin, Flame } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function MaritimePortPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/05-maritime-port-hero.png"
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
            <span className="text-white font-medium">Maritime &amp; Port Logistics</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Anchor className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Maritime &amp; Port Logistics</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">End-to-end port agency services, vessel husbandry, bunkering coordination, and terminal operations support at major African seaports. We serve as your trusted representative at port, managing every aspect of vessel calls from arrival notification to departure clearance.</p>
        </div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Port Agency Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Your Eyes, Ears &amp; Hands at Port</h2>
            <p className="text-gray-500 text-lg leading-relaxed">As a registered port agent, Afri-Bridge acts as the local representative for ship owners, charterers, and operators at all major African ports. We coordinate with port authorities, customs, immigration, health officials, terminal operators, and service providers to ensure efficient vessel turnaround. Our 24/7 port operations team handles everything from pre-arrival notices to final departure documentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Port Agency', desc: 'Full port agency services including pre-arrival and pre-departure notifications, customs and immigration clearance, berth arrangement, cargo documentation, and all statutory port formalities for every vessel call.', icon: Ship },
              { title: 'Vessel Husbandry', desc: 'Complete husbandry services including crew change coordination, cash to master, provisions and stores delivery, medical assistance, spare parts delivery, and technical support arrangements for vessels at anchorage or berth.', icon: Anchor },
              { title: 'Bunkering Coordination', desc: 'Organisation of bunker supply including fuel ordering, barge coordination, quantity and quality verification, sample retention, and bunker delivery documentation. We work with all major bunker suppliers at each port.', icon: Flame },
              { title: 'Terminal Operations', desc: 'Cargo operations coordination including loading and discharge supervision, tally services, damage inspection reports, container planning support, and stevedore liaison for efficient cargo handling.', icon: MapPin },
              { title: 'Port Documentation', desc: 'All vessel-related documentation including bills of lading, cargo manifests, mate receipts, statements of facts, time sheets, port cost statements, and disbursement accounts prepared accurately and promptly.', icon: FileText },
              { title: '24/7 Port Operations', desc: 'Round-the-clock port operations centre with experienced staff available for any vessel requirements. Emergency response capability for off-hire situations, crew emergencies, or unexpected port requirements.', icon: Clock },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6 text-center">Ports We Cover</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { port: 'Durban', country: 'South Africa', desc: 'Largest container port in Africa. Full agency services, terminal operations, and bunkering.' },
                { port: 'Cape Town', country: 'South Africa', desc: 'Major container and break-bulk port. Vessel husbandry and cruise ship support available.' },
                { port: 'Richards Bay', country: 'South Africa', desc: 'Bulk handling port for coal, minerals, and timber. Dry bulk and liquid bulk operations.' },
                { port: 'Maputo', country: 'Mozambique', desc: 'Gateway to Mozambique and hinterland. Container, break-bulk, and general cargo handling.' },
                { port: 'Dar es Salaam', country: 'Tanzania', desc: 'East African gateway port. Full agency, husbandry, and bunkering services available.' },
                { port: 'Mombasa', country: 'Kenya', desc: 'East Africa\'s largest port. Container terminal and oil jetty operations supported.' },
                { port: 'Lagos (Tin Can & Apapa)', country: 'Nigeria', desc: 'West Africa\'s busiest ports. Comprehensive agency services for all vessel types.' },
                { port: 'Tema', country: 'Ghana', desc: 'Ghana\'s main commercial port. Full agency and vessel husbandry services.' },
                { port: 'Abidjan', country: 'Cote d\'Ivoire', desc: 'Major West African hub port. Container and multi-purpose terminal operations.' },
              ].map(({ port, country, desc }) => (
                <div key={port} className="p-3 bg-white rounded-lg border border-gray-100">
                  <h4 className="font-bold text-[#0B1F3A] text-sm">{port}</h4>
                  <p className="text-xs text-gray-400 mb-1">{country}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Port Agency Services</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Professional port agency representation at all major African seaports. Contact our maritime team for vessel nomination and scheduling.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Nominate a Vessel <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Contact Maritime Team</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
