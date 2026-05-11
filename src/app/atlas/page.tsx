'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BarChart3,
  Globe2,
  BookOpen,
  Route,
  FileBarChart,
  Store,
  Newspaper,
  Database,
  Megaphone,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Globe2, value: '40+', label: 'Corridors' },
  { icon: BarChart3, value: '500+', label: 'Suppliers' },
  { icon: BookOpen, value: '150+', label: 'Reports' },
];

const features = [
  {
    icon: Route,
    title: 'Corridor Intelligence',
    description: 'Real-time data on border crossings, transit times, and corridor performance metrics.',
  },
  {
    icon: FileBarChart,
    title: 'Trade Reports',
    description: 'In-depth market analysis and trade flow reports covering African markets.',
  },
  {
    icon: Store,
    title: 'Supplier Marketplace',
    description: '500+ verified logistics suppliers across freight, warehousing, and compliance.',
  },
  {
    icon: Newspaper,
    title: 'Publications',
    description: 'Expert publications on trade policy, market trends, and regulatory updates.',
  },
  {
    icon: Database,
    title: 'Logistics Data',
    description: 'Comprehensive datasets on freight volumes, port throughput, and trade flows.',
  },
  {
    icon: Megaphone,
    title: 'Media & Advertising',
    description: 'Sponsored content, advertising, and brand visibility across the ATLAS platform.',
  },
];

export default function AtlasPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/08-atlas-hero.png"
          alt=""
          width={1672}
          height={941}
          priority
          className="w-full h-auto brightness-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/45 via-[#0B1F3A]/30 to-[#0B1F3A]/15" />
        <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Atlas</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Afri-Bridge Atlas
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
            Your gateway to African trade intelligence. Access real-time corridor data, a curated
            marketplace of verified suppliers, and expert publications covering trade dynamics,
            regulations, and opportunities across the continent.
          </p>
        </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-16">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon className="h-6 w-6 text-emerald-600" />
                    <span className="text-4xl font-bold text-[#0B1F3A]">{stat.value}</span>
                  </div>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              );
            })}
          </div>

          {/* Feature Grid */}
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

      {/* Platform Image */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/atlas-platform.png"
                  alt="Afri-Bridge Atlas Platform"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/45 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-1">Afri-Bridge Atlas</h3>
                  <p className="text-sm text-gray-300">Intelligence. Marketplace. Publications.</p>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                EXPLORE ATLAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
                Dive Deeper into African Trade
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                From media intelligence to corridor analytics, ATLAS provides the insights you need
                to make informed trade decisions across Africa.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/atlas/media">
                  <Button className="w-full bg-[#E67E22] hover:bg-[#d35400] text-white font-semibold h-12 justify-start">
                    Media &amp; Intelligence Network
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/atlas/intelligence">
                  <Button className="w-full bg-[#0891B2] hover:bg-[#0e7490] text-white font-semibold h-12 justify-start">
                    Corridor Intelligence
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/atlas/publications">
                  <Button className="w-full bg-[#0B1F3A] hover:bg-[#122d52] text-white font-semibold h-12 justify-start">
                    Publications &amp; Reports
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#0891B2] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Unlock African Trade Intelligence
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Get started with ATLAS and gain access to the data, insights, and connections that drive
            successful trade across Africa.
          </p>
          <Link href="/quote">
            <Button className="bg-white text-[#0B1F3A] hover:bg-gray-100 font-semibold px-8 h-12">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
