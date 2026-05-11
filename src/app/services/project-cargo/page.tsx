'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HardHat, CheckCircle2, Shield, Globe, Ruler, Route, AlertTriangle, Construction } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function ProjectCargoPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/24-project-cargo-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white font-medium">Project Cargo Logistics</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <HardHat className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Project Cargo Logistics</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Specialised logistics solutions for oversized, heavy-lift, and complex project cargo. From mining equipment and construction machinery to energy infrastructure and industrial plant components, we manage the entire supply chain with custom routing, specialised equipment, and meticulous planning.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Heavy-Lift &amp; Oversized Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Complex Cargo, Expert Solutions</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Project cargo demands a different level of logistics expertise. Every shipment presents unique challenges — dimensional constraints, weight restrictions, route surveys, permits, and specialised handling requirements. Our project cargo team brings decades of experience in managing these complexities across Africa&apos;s most demanding environments, from remote mine sites to landlocked industrial zones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Route Surveys & Planning', desc: 'Comprehensive route analysis including bridge weight limits, road clearances, power line heights, and turn radius assessments. We survey every inch of the planned route to identify obstacles and engineer solutions before cargo moves.', icon: Route },
              { title: 'Multi-Modal Transport', desc: 'Seamless integration of ocean, road, rail, and inland waterway transport. We design the most efficient and cost-effective transport combination for each project, managing every handoff and transhipment point.', icon: Globe },
              { title: 'Specialised Equipment', desc: 'Access to self-propelled modular transporters (SPMTs), hydraulic trailers, girder bridges, lowbed trailers up to 200-ton capacity, and crane services for heavy-lift operations at origin and destination.', icon: Construction },
              { title: 'Permit & Compliance', desc: 'All abnormal load permits, police escorts, road closure applications, and utility line de-energisation coordination. We handle the entire regulatory process with transport authorities across all provinces and countries.', icon: Shield },
              { title: 'Dimensional Analysis', desc: 'Detailed cargo surveys, centre of gravity calculations, lifting point assessments, and lashing/securing engineering. Every project cargo is individually analysed to determine optimal handling and transport methods.', icon: Ruler },
              { title: 'Risk Management', desc: 'Comprehensive risk assessments, marine cargo insurance for high-value shipments, contingency planning for route disruptions, and real-time monitoring throughout the entire transport operation.', icon: AlertTriangle },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <Icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6 text-center">Industry Sectors We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { sector: 'Mining & Resources', examples: 'Crushers, mills, transformers, draglines, dump trucks, conveyor systems' },
                { sector: 'Energy & Power', examples: 'Turbines, generators, transformers, solar panels, wind turbine blades' },
                { sector: 'Construction', examples: 'Tower cranes, excavators, piling equipment, precast concrete elements' },
                { sector: 'Oil & Gas', examples: 'Drilling rigs, pressure vessels, pipe spools, compressors, refinery modules' },
              ].map(({ sector, examples }) => (
                <div key={sector} className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-[#0B1F3A] mb-2 text-sm">{sector}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Moving Heavy Equipment?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">No cargo is too big or too complex. Contact our project cargo specialists for a custom transport solution with detailed route surveys and competitive pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Request Project Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Speak to a Specialist</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
