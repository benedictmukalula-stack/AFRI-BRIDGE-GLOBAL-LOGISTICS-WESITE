'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mountain, CheckCircle2, Shield, Globe, Truck, AlertTriangle, HardHat, Route, Warehouse } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function MiningIndustrialPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/07-mining-hero.png"
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
            <span className="text-white font-medium">Mining &amp; Industrial Logistics</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Mountain className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Mining &amp; Industrial Logistics</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Specialised logistics solutions for the mining and industrial sectors across Africa. From heavy equipment transport and explosives handling to mine-to-port supply chain management, we understand the unique challenges of operating in Africa&apos;s resource-rich regions and deliver reliable solutions that keep your operations running.</p>
        </div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Mining Sector Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Supply Chain Solutions for Africa&apos;s Mines</h2>
            <p className="text-gray-500 text-lg leading-relaxed">The African mining sector demands logistics partners who understand the environment, timelines, and safety requirements that govern mine operations. Afri-Bridge provides integrated logistics services to mining companies across Southern, Central, and East Africa, managing the flow of equipment, consumables, and processed minerals between mines, ports, and processing facilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Heavy Equipment Transport', desc: 'Movement of mining excavators, haul trucks, drilling rigs, and processing plant components to remote mine sites. Includes route surveys for road and bridge capacity, escort vehicles, and multi-axle trailer configurations.', icon: HardHat },
              { title: 'Explosives & Dangerous Goods', desc: 'Licensed transport and documentation for explosives, blasting materials, and hazardous chemicals used in mining operations. Full compliance with Explosives Act and hazardous materials transport regulations.', icon: AlertTriangle },
              { title: 'Mine-to-Port Supply Chain', desc: 'Integrated logistics from mine gate to export port. We manage the complete flow including road transport, rail coordination, port logistics, and vessel loading for bulk mineral exports.', icon: Route },
              { title: 'Consumables & Spares Delivery', desc: 'Regular scheduled deliveries of mining consumables including drill bits, chemicals, lubricants, and replacement parts to mine sites. Consolidated shipments from multiple suppliers to reduce costs.', icon: Truck },
              { title: 'Regional Coverage', desc: 'Active operations supporting mines in South Africa (Bushveld Complex, Witwatersrand), Zambia (Copperbelt), DRC (Katanga), Zimbabwe (Great Dyke), Botswana, and Mozambique (coal provinces).', icon: Globe },
              { title: 'Mine Site Warehousing', desc: 'On-site or near-site warehousing for inventory management of critical spares and consumables. VMI solutions with automated reorder triggers and consignment stock arrangements.', icon: Warehouse },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '50+', label: 'Mining Clients' },
              { value: '8', label: 'African Countries' },
              { value: '15+', label: 'Years Mining Experience' },
              { value: '24/7', label: 'Dispatch Capability' },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Mining Logistics Partner</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Reduce downtime, improve supply chain reliability, and lower your mining logistics costs with a partner who understands the industry.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Request a Proposal <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Contact Mining Team</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
