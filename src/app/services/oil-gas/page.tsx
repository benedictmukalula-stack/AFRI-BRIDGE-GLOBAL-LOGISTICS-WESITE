'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Fuel, CheckCircle2, Shield, Globe, Anchor, Truck, AlertTriangle, FlaskConical } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function OilGasPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/06-oil-gas-hero.png"
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
            <span className="text-white font-medium">Oil &amp; Gas Logistics</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Fuel className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Oil &amp; Gas Logistics</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Comprehensive logistics solutions for upstream and downstream oil and gas operations across Africa. From rig move coordination and pipeline logistics to refinery supply chain management and fuel distribution, we provide the specialised transport and compliance services this demanding sector requires.</p>
        </div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Energy Sector Logistics</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Fueling Africa&apos;s Energy Supply Chain</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Africa&apos;s oil and gas sector operates across some of the most challenging logistics environments on the continent — from deepwater offshore platforms in Nigeria and Angola to onshore operations in Mozambique and the SADC region. Afri-Bridge provides the critical logistics link between supply bases, rig sites, refineries, and distribution terminals, ensuring materials and fuel flow without interruption.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Rig Move Coordination', desc: 'Complete logistics management for drilling rig mobilisation and demobilisation. Heavy-lift transport, multi-modal routing, port handling, and onshore movement to remote drill sites with full schedule management.', icon: Anchor },
              { title: 'Pipeline Materials Transport', desc: 'Delivery of line pipe, valves, fittings, welding consumables, and coating materials for pipeline construction projects. Organised delivery sequences aligned with construction spreads.', icon: Truck },
              { title: 'Hazardous Cargo Handling', desc: 'Licensed transport of chemicals, solvents, acids, compressed gases, and other hazardous materials used in oil and gas processing. Full compliance with ADR and IMO dangerous goods regulations.', icon: AlertTriangle },
              { title: 'Refinery Supply Chain', desc: 'Inbound logistics for crude oil and feedstock deliveries, plus outbound distribution of refined products to fuel depots, retail networks, and industrial customers across the region.', icon: FlaskConical },
              { title: 'Base & Camp Logistics', desc: 'Supply chain management for remote oil field camps and operational bases. Regular provisioning of food, water, equipment, and consumables via road, air, or coastal shipping.', icon: Globe },
              { title: 'Environmental Compliance', desc: 'Spill prevention planning, waste transport permits, emissions documentation, and full environmental compliance for all logistics operations within sensitive oil and gas areas.', icon: Shield },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6 text-center">Regional Operations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { region: 'Nigeria', focus: 'Upstream logistics, swamp buggy transport, NLNG base operations, pipeline materials for Niger Delta projects.' },
                { region: 'Mozambique', focus: 'LNG project logistics, supply base management for Cabo Delgado operations, coastal vessel support.' },
                { region: 'South Africa', focus: 'Refinery supply chain, fuel distribution, synthetic fuel logistics, petrochemical transport.' },
                { region: 'Angola', focus: 'Offshore supply vessel coordination, Luanda base operations, rig move logistics for deepwater blocks.' },
              ].map(({ region, focus }) => (
                <div key={region} className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-[#0B1F3A] mb-2">{region}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Oil &amp; Gas Logistics Support</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Specialised logistics for specialised operations. Contact our energy sector team to discuss your requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Contact Energy Team</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
