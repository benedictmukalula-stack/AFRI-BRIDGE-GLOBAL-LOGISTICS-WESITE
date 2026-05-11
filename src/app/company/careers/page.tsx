'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, TrendingUp, Globe, Cpu, Heart, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const perks = [
  { icon: TrendingUp, title: 'Career Growth', description: 'Structured career paths with mentorship, professional development budgets, and leadership training programmes for every team member.' },
  { icon: Globe, title: 'Pan-African Impact', description: 'Work on projects that shape trade across 15+ African markets. Your work directly contributes to growing Africa\'s economy.' },
  { icon: Cpu, title: 'Technology-Driven', description: 'Access cutting-edge tools including ATLAS, our proprietary trade intelligence platform, and modern logistics management systems.' },
  { icon: Heart, title: 'Supportive Culture', description: 'A collaborative, values-driven environment where every voice matters. Regular team events, wellness programmes, and flexible working arrangements.' },
];

const openings = [
  { title: 'Senior Customs Clearance Officer', department: 'Customs & Compliance', location: 'Johannesburg', type: 'Full-time' },
  { title: 'Freight Forwarding Manager', department: 'Freight Operations', location: 'Johannesburg', type: 'Full-time' },
  { title: 'Logistics Coordinator', department: 'Operations', location: 'Durban', type: 'Full-time' },
  { title: 'Full Stack Developer', department: 'Technology', location: 'Johannesburg', type: 'Full-time' },
  { title: 'Business Development Executive', department: 'Sales', location: 'Johannesburg', type: 'Full-time' },
  { title: 'Training Coordinator', department: 'Academy', location: 'Johannesburg', type: 'Full-time' },
];

const steps = [
  { step: '01', title: 'Application', desc: 'Submit your CV and a brief cover letter to careers@afribridge.co.za. Our talent team reviews every application within 5 business days.' },
  { step: '02', title: 'Screening', desc: 'Qualified candidates are invited for an initial phone screening with our HR team. This is an opportunity for us to learn about your experience and for you to ask questions about the role.' },
  { step: '03', title: 'Interview', desc: 'Shortlisted candidates participate in one or two interviews with the hiring manager and team members. Some roles may include a practical assessment or case study.' },
  { step: '04', title: 'Offer', desc: 'Successful candidates receive a formal offer within 3 business days of the final interview. We aim to make the process as smooth and transparent as possible.' },
];

export default function CareersPage() {
  const [cvEmail, setCvEmail] = useState('');

  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/26-careers-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Company</span>
            <span>/</span>
            <span className="text-white font-medium">Careers</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Careers at Afri-Bridge
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Build your career at Africa&apos;s fastest-growing logistics company. We are looking for
            passionate professionals who want to make a real impact on African trade.
          </p>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Why Afri-Bridge</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Why Work With Us</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              More than a job — a career with purpose, growth, and impact across the African continent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perks.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Open Positions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Current Openings</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Explore our current openings and find the role that matches your skills and ambitions.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">{job.department}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">{job.type}</span>
                    </div>
                  </div>
                  <a href={`mailto:careers@afribridge.co.za?subject=Application: ${job.title}`}>
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold text-sm whitespace-nowrap">
                      Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Our Hiring Process</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              A straightforward, transparent process designed to be respectful of your time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">{step}</div>
                <h4 className="font-bold text-[#0B1F3A] mb-2">{title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Send CV CTA */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-emerald-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-600/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-emerald-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Can&apos;t Find the Right Role?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Send us your CV and tell us about your skills and experience. We are always interested in hearing from talented professionals.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={cvEmail}
              onChange={(e) => setCvEmail(e.target.value)}
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <a
              href={`mailto:careers@afribridge.co.za?subject=General Application&body=I am interested in joining the Afri-Bridge team. My email is ${cvEmail || '[your email]'}.`}
            >
              <Button className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold h-12 px-6 shrink-0">
                Send CV <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            <Clock className="h-3.5 w-3.5 inline mr-1" />
            We review every application within 5 business days.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
