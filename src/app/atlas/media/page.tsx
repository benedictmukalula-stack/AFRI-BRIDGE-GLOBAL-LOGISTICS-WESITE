'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Newspaper,
  Anchor,
  Ship,
  Fuel,
  Mountain,
  BarChart3,
  FileText,
  Mail,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

const mediaCards = [
  {
    title: 'Logistics News',
    description: 'Breaking news and updates from across the African logistics and supply chain industry.',
    icon: Newspaper,
  },
  {
    title: 'Maritime News',
    description: 'Port developments, shipping movements, and maritime sector updates across Africa.',
    icon: Anchor,
  },
  {
    title: 'Shipping Intelligence',
    description: 'Vessel tracking data, fleet analysis, and shipping market intelligence reports.',
    icon: Ship,
  },
  {
    title: 'Oil & Gas Logistics',
    description: 'Upstream and downstream logistics coverage for Africa\'s energy sector.',
    icon: Fuel,
  },
  {
    title: 'Mining Supply Chains',
    description: 'Mining logistics, mineral exports, and supply chain coverage for Africa\'s resource sector.',
    icon: Mountain,
  },
  {
    title: 'Industrial Trade Reports',
    description: 'In-depth analysis of industrial trade flows, manufacturing, and cross-border commerce.',
    icon: BarChart3,
  },
  {
    title: 'Sponsored Reports',
    description: 'Branded research reports and whitepapers produced in partnership with industry leaders.',
    icon: FileText,
  },
  {
    title: 'Newsletter Sponsorships',
    description: 'Reach thousands of trade professionals through our weekly and monthly newsletters.',
    icon: Mail,
  },
];

export default function AtlasMediaPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/33-atlas-media-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-[#1E293B]/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/atlas" className="hover:text-white transition-colors">Atlas</Link>
            <span>/</span>
            <span className="text-white font-medium">Media &amp; Intelligence</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            ATLAS Media &amp; Intelligence Network
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Leverage the ATLAS platform to connect your brand with logistics professionals, trade
            policymakers, and supply chain leaders across Africa. Our media network reaches thousands
            of trade decision-makers every week.
          </p>
        </div>
      </div>

      {/* Media Cards Grid */}
      <div className="bg-[#1E293B] pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Print & Digital Publications */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              PUBLICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Print &amp; Digital Publications
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              The ATLAS magazine and digital publications reach thousands of trade professionals across
              Africa each month. Partner with us for sponsored content, display advertising, and branded
              reports that deliver measurable results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#0B1F3A] mb-1">10K+</div>
                <div className="text-sm text-gray-500">Monthly Readers</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#0B1F3A] mb-1">25+</div>
                <div className="text-sm text-gray-500">African Markets</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#0B1F3A] mb-1">50+</div>
                <div className="text-sm text-gray-500">Industry Sectors</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="bg-gradient-to-r from-[#1E293B] to-[#0B1F3A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Partner with ATLAS Media
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Amplify your brand reach and connect with Africa&apos;s most influential trade and logistics
            decision-makers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#E67E22] hover:bg-[#d35400] text-white font-semibold px-8 h-12">
                Advertise With ATLAS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="bg-[#0891B2] hover:bg-[#0e7490] text-white font-semibold px-8 h-12 border-none"
            >
              Download Media Kit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
