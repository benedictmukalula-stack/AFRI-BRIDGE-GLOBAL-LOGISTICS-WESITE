'use client';

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
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const mediaCards = [
  { title: 'Logistics News', icon: Newspaper },
  { title: 'Maritime News', icon: Anchor },
  { title: 'Shipping Intelligence', icon: Ship },
  { title: 'Oil & Gas Logistics', icon: Fuel },
  { title: 'Mining Supply Chains', icon: Mountain },
  { title: 'Industrial Trade Reports', icon: BarChart3 },
  { title: 'Sponsored Reports', icon: FileText },
  { title: 'Newsletter Sponsorships', icon: Mail },
];

export function AtlasMediaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#1E293B]" aria-label="ATLAS Media & Intelligence">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">
              ATLAS MEDIA &amp; INTELLIGENCE NETWORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Reach Africa&apos;s Trade Decision-Makers
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Leverage the ATLAS platform to connect your brand with logistics professionals, trade
              policymakers, and supply chain leaders across Africa.
            </p>
          </div>
        </ScrollAnimation>

        {/* Media Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {mediaCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollAnimation key={card.title} delay={i * 60}>
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Publications & CTAs */}
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Print &amp; Digital Publications</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              The ATLAS magazine and digital publications reach thousands of trade professionals across
              Africa each month. Partner with us for sponsored content, display advertising, and branded
              reports that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/atlas/media">
                <Button className="bg-[#E67E22] hover:bg-[#d35400] text-white font-semibold">
                  Advertise With ATLAS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/atlas/media">
                <Button className="bg-[#0891B2] hover:bg-[#0e7490] text-white font-semibold text-sm px-6 h-10">
                  Download Media Kit
                </Button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
