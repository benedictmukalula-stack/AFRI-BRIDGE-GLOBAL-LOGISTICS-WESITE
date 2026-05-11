'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Anchor,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  FileBarChart,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: BarChart3,
    title: 'Corridor Analytics',
    description:
      'Real-time performance data on Africa\'s major trade corridors including transit times, border wait times, throughput volumes, and efficiency scores.',
  },
  {
    icon: Anchor,
    title: 'Port Congestion Data',
    description:
      'Live and historical port congestion data for Durban, Walvis Bay, Dar es Salaam, Beira, and other major African seaports.',
  },
  {
    icon: ShieldCheck,
    title: 'Customs Updates',
    description:
      'Regulatory changes, tariff updates, customs procedural changes, and compliance alerts from SARS and other African customs authorities.',
  },
  {
    icon: AlertTriangle,
    title: 'Route Risk Assessment',
    description:
      'Comprehensive risk profiles for trade routes including security, weather, political stability, and infrastructure risk factors.',
  },
  {
    icon: TrendingUp,
    title: 'Trade Data Visualisation',
    description:
      'Interactive dashboards and data visualisations showing trade flows, freight volumes, commodity movements, and market trends.',
  },
  {
    icon: FileBarChart,
    title: 'Reports & Forecasts',
    description:
      'Expert analysis, quarterly trade forecasts, market outlooks, and sector-specific intelligence reports.',
  },
];

export default function AtlasIntelligencePage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/32-atlas-intelligence-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/atlas" className="hover:text-white transition-colors">Atlas</Link>
            <span>/</span>
            <span className="text-white font-medium">Corridor Intelligence</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Corridor Intelligence
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Data-driven insights into Africa&apos;s trade corridors. Monitor performance, assess risks,
            and make informed logistics decisions with real-time intelligence and expert analysis.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              INTELLIGENCE FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Data-Driven Trade Insights
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our intelligence platform aggregates data from across African trade corridors to provide
              actionable insights for logistics professionals and trade decision-makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#0891B2] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Access Expert Publications
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Deepen your understanding of African trade dynamics with our expert publications,
            market reports, and in-depth analysis.
          </p>
          <Link href="/atlas/publications">
            <Button className="bg-white text-[#0B1F3A] hover:bg-gray-100 font-semibold px-8 h-12">
              View Publications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
