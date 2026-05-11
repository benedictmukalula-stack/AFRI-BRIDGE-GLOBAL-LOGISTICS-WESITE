'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, CheckCircle2, Building, Monitor, BookOpen, Award, Clock, Target } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function CorporateTrainingPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/36-corporate-training-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/academy" className="hover:text-white transition-colors">Academy</Link><span>/</span>
            <span className="text-white font-medium">Corporate Training</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center"><Users className="h-7 w-7 text-emerald-400" /></div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Corporate Training</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Custom training solutions designed for logistics companies, mining operations, manufacturing firms, and government agencies. We build programmes around your specific operational needs, compliance requirements, and team skill gaps.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Tailored Learning Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Training Built for Your Business</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Every organisation faces unique logistics and compliance challenges. Our corporate training team works with you to understand your operational environment, identify skill gaps, and design custom programmes that deliver measurable results. From one-day workshops to comprehensive multi-week programmes, we deliver training that makes a difference.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Needs Assessment', desc: 'We begin with a thorough analysis of your team\'s current capabilities, knowledge gaps, and operational requirements. This includes interviews with key staff, process observation, and review of compliance audit findings.', icon: Target },
              { title: 'Custom Curriculum', desc: 'Based on the assessment, our instructional designers develop a tailored curriculum using real-world case studies from African logistics operations. Content is continuously updated to reflect current regulations and best practices.', icon: BookOpen },
              { title: 'Blended Delivery', desc: 'Flexible delivery formats that work for your team: in-person workshops at your premises, virtual instructor-led sessions for distributed teams, self-paced online modules for flexible learning, or a hybrid approach combining all three.', icon: Monitor },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <Icon className="h-6 w-6 text-emerald-600 mb-3" />
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">Sample Corporate Programmes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Customs Compliance Bootcamp', duration: '3 Days', format: 'In-Person / Virtual', desc: 'Comprehensive customs law, tariff classification, valuation methods, and SARS procedures. Designed for customs teams and import/export managers who handle day-to-day clearance operations.' },
                { title: 'Freight Forwarding Fundamentals', duration: '5 Days', format: 'In-Person', desc: 'Complete freight forwarding operations including multimodal transport planning, Incoterms, documentation, cargo insurance, and carrier management. Ideal for new hires and career changers.' },
                { title: 'Cross-Border Trade Management', duration: '4 Days', format: 'In-Person / Hybrid', desc: 'In-depth coverage of cross-border logistics including SADC trade protocols, border post procedures, transit bond management, and trade agreement utilisation for maximum duty savings.' },
                { title: 'Dangerous Goods Handling', duration: '2 Days', format: 'In-Person', desc: 'IATA DGR and ADR compliant training for handling, packing, labelling, documenting, and transporting dangerous goods by air, road, and sea. Includes practical exercises and certification.' },
              ].map(({ title, duration, format, desc }) => (
                <div key={title} className="p-5 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-[#0B1F3A] text-sm">{title}</h4>
                    <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded shrink-0">{duration}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">{format}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '200+', label: 'Companies Trained' },
              { value: '5,000+', label: 'Professionals Certified' },
              { value: '15+', label: 'Industry Sectors' },
              { value: '98%', label: 'Satisfaction Rating' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-lg bg-emerald-50">
                <p className="text-2xl font-bold text-emerald-700">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <h3 className="col-span-full text-xl font-bold text-[#0B1F3A] mb-2">Industries We Serve</h3>
            {['Logistics & Freight', 'Mining & Resources', 'Manufacturing', 'Retail & FMCG', 'Government & Parastatals'].map((ind) => (
              <div key={ind} className="flex items-center gap-2 p-3 rounded-lg bg-gray-50">
                <Building className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-sm text-gray-600 font-medium">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Need a Custom Training Programme?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Our corporate training team will design a programme tailored to your exact requirements, team size, and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Request Training Proposal <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/academy/courses"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">View Course Catalogue</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
