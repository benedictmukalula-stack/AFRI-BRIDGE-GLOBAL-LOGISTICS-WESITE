'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

const leadership = [
  {
    name: 'Thabo Mokoena',
    title: 'CEO & Co-Founder',
    bio: 'Thabo founded Afri-Bridge in 2015 with a vision to simplify cross-border trade in Africa. With over 20 years in logistics and trade, he has grown the company from a small customs brokerage into a pan-African logistics provider serving 15+ markets. He holds an MBA from Wits Business School and serves on the board of the Freight Forwarders Association of South Africa.',
    image: '/images/team/thabo-mokoena.png',
  },
  {
    name: 'Sarah van der Merwe',
    title: 'Chief Operating Officer',
    bio: 'Sarah oversees all operations across Afri-Bridge\'s network, ensuring consistent service quality and operational excellence. She joined in 2017 after a decade at DHL Supply Chain and has been instrumental in building the company\'s road transport and warehousing capabilities across Southern Africa.',
    image: '/images/team/sarah-vdmerwe.png',
  },
  {
    name: 'Kofi Asante',
    title: 'Director of Freight Operations',
    bio: 'Kofi leads the freight forwarding division, managing air, ocean, and road freight operations. A certified FIATA freight forwarder with 18 years of experience in African trade lanes, he has established key carrier partnerships and routing solutions that benefit Afri-Bridge clients across the continent.',
    image: '/images/team/kofi-asante.png',
  },
  {
    name: 'Nomsa Dlamini',
    title: 'Head of Customs & Compliance',
    bio: 'Nomsa is a licensed customs broker with deep expertise in SARS regulations, tariff classification, and trade compliance across SADC member states. She leads a team of 25 customs practitioners and has personally handled over 10,000 customs entries throughout her career.',
    image: '/images/team/nomsa-dlamini.png',
  },
  {
    name: 'David Okafor',
    title: 'Director of Technology',
    bio: 'David is the architect behind ATLAS, Afri-Bridge\'s trade intelligence platform. With a background in software engineering and data science, he leads the technology team in building digital tools that bring transparency and efficiency to African trade corridors. Previously at Microsoft and Flutterwave.',
    image: '/images/team/david-okafor.png',
  },
  {
    name: 'Fatima Hassan',
    title: 'Head of Academy & Training',
    bio: 'Fatima leads the Afri-Bridge Academy, designing professional training programmes and certifications for the African logistics industry. She brings 15 years of experience in corporate education and has developed curricula in partnership with industry bodies including FIATA and SARS.',
    image: '/images/team/fatima-hassan.png',
  },
];

export default function TeamPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/27-team-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Company</span>
            <span>/</span>
            <span className="text-white font-medium">Our Team</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Leadership Team
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Experienced professionals united by a shared passion for African trade and logistics.
            Our leadership team brings decades of industry expertise to every client engagement.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Afri-Bridge is led by a diverse team of logistics professionals with deep expertise
              in African trade, customs compliance, freight operations, technology, and education.
              Our leaders bring a combined 100+ years of experience in African supply chains and are
              committed to delivering excellence for every client, every shipment, every time.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-1">{member.name}</h3>
                  <p className="text-sm text-emerald-600 font-medium mb-3">{member.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join CTA */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <Briefcase className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
            Join Our Team
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We are always looking for talented professionals who share our passion for African trade.
            Explore our current openings and build your career with Afri-Bridge.
          </p>
          <Link href="/company/careers">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">
              View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
