'use client';

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
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ScrollAnimation';

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

export function AtlasSection() {
  return (
    <section id="atlas" className="py-20 lg:py-28 bg-white" aria-label="Afri-Bridge Atlas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Content + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <ScrollAnimation direction="right">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                Intelligence Platform
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
                Afri-Bridge Atlas
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Your gateway to African trade intelligence. Access real-time corridor data, a curated
                marketplace of verified suppliers, and expert publications covering trade dynamics,
                regulations, and opportunities across the continent.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 sm:gap-8 mb-10">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label}>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="h-5 w-5 text-emerald-600" />
                        <span className="text-3xl font-bold text-[#0B1F3A]">{stat.value}</span>
                      </div>
                      <span className="text-sm text-gray-400">{stat.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="/atlas">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                    Explore Atlas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/atlas/publications">
                  <Button variant="outline" className="border-emerald-600 text-emerald-700 bg-transparent hover:bg-emerald-50 font-semibold">
                    View Publications
                  </Button>
                </Link>
                <Link href="/atlas/media">
                  <Button className="bg-[#0891B2] hover:bg-[#0e7490] text-white font-semibold">
                    Advertise With ATLAS
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Image */}
          <ScrollAnimation direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/atlas-platform-v2.png"
                  alt="Afri-Bridge Atlas Platform"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-1">Afri-Bridge Atlas</h3>
                  <p className="text-sm text-gray-300">Intelligence. Marketplace. Publications.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Feature Grid */}
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollAnimation key={feature.title} delay={i * 80}>
                  <div className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{feature.description}</p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
