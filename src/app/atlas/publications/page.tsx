'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  FileBarChart,
  Mail,
  Award,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

const publications = [
  {
    icon: BookOpen,
    title: 'Digital Magazines',
    description:
      'Quarterly digital magazines covering African trade, logistics innovation, corridor developments, and industry interviews.',
  },
  {
    icon: FileBarChart,
    title: 'Industry Reports',
    description:
      'In-depth research reports on trade flows, market trends, regulatory changes, and sector-specific analysis.',
  },
  {
    icon: Mail,
    title: 'Newsletters',
    description:
      'Weekly and monthly newsletters delivering the latest trade news, corridor updates, and market intelligence.',
  },
  {
    icon: Award,
    title: 'Executive Briefings',
    description:
      'Concise briefings for senior executives covering strategic trade developments, policy changes, and investment opportunities.',
  },
];

export default function AtlasPublicationsPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/41-publications-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/atlas" className="hover:text-white transition-colors">Atlas</Link>
            <span>/</span>
            <span className="text-white font-medium">Publications</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            ATLAS Publications
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Expert publications on African trade policy, market trends, regulatory updates, and
            logistics industry developments. Stay informed with insights from leading trade analysts
            and industry practitioners.
          </p>
        </div>
      </div>

      {/* Publications Grid */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              OUR PUBLICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Expert Trade Publications
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Access a library of publications designed to keep you at the forefront of African trade
              and logistics intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {publications.map((pub) => {
              const Icon = pub.icon;
              return (
                <div
                  key={pub.title}
                  className="group bg-white rounded-xl border border-gray-100 p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{pub.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 flex-1">{pub.description}</p>
                  <Button
                    variant="outline"
                    className="self-start border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 hover:border-emerald-700 font-semibold text-sm"
                  >
                    Access
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sponsorship CTA */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#0891B2] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Sponsor a Publication
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Partner with Afri-Bridge ATLAS to sponsor a report, magazine edition, or newsletter series.
            Reach thousands of trade professionals across Africa with your brand.
          </p>
          <Link href="/contact">
            <Button className="bg-[#E67E22] hover:bg-[#d35400] text-white font-semibold px-8 h-12">
              Enquire About Sponsorship
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
