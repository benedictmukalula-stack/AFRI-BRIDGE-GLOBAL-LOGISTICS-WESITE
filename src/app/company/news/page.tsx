'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Mail, ArrowRightIcon } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const featured = {
  title: 'Afri-Bridge Launches ATLAS 2.0: Next-Generation Trade Intelligence Platform',
  date: '20 April 2026',
  category: 'Technology',
  excerpt: 'Afri-Bridge has announced the launch of ATLAS 2.0, a major upgrade to its proprietary trade intelligence platform. The new version features real-time corridor monitoring, predictive analytics for shipment delays, automated compliance checks, and a redesigned marketplace for freight and logistics services. ATLAS 2.0 also introduces mobile accessibility, allowing shippers and freight forwarders to access critical trade data from anywhere in Africa.',
  excerpt2: 'The platform now covers 28 African trade corridors with data from over 50 border posts, port authorities, and customs agencies. Key new features include AI-powered ETAs, carbon footprint tracking, and integration with major ERP systems. The launch marks a significant milestone in Afri-Bridge\'s strategy to digitise African trade.',
};

const articles = [
  {
    title: 'SADC Trade Corridors: Opportunities for South African Exporters',
    date: '15 Apr 2026',
    category: 'Trade Insights',
    excerpt: 'An in-depth analysis of the most promising SADC trade corridors for South African businesses, including the North-South Corridor, Maputo Corridor, and Dar es Salaam Corridor.',
  },
  {
    title: 'New Customs Regulations: What Importers Need to Know in 2026',
    date: '8 Apr 2026',
    category: 'Compliance',
    excerpt: 'SARS has introduced several regulatory changes affecting importers. We break down the key amendments to customs procedures, tariff classifications, and valuation rules.',
  },
  {
    title: 'Afri-Bridge Academy Graduates 500th Professional',
    date: '1 Apr 2026',
    category: 'Academy',
    excerpt: 'The Afri-Bridge Academy has reached a milestone with its 500th graduate completing a professional certification programme in customs and freight forwarding.',
  },
  {
    title: 'Cross-Border Logistics: Navigating Zimbabwe\'s New Trade Requirements',
    date: '22 Mar 2026',
    category: 'Operations',
    excerpt: 'Zimbabwe\'s recent changes to import licensing and customs procedures require careful navigation. Our operations team shares practical guidance for shippers.',
  },
  {
    title: 'Mining Sector Logistics: Trends and Innovations for 2026',
    date: '15 Mar 2026',
    category: 'Industry',
    excerpt: 'From autonomous haul trucks to predictive maintenance, the mining logistics sector is undergoing rapid transformation. We explore the trends shaping the industry.',
  },
  {
    title: 'Digital Transformation in African Freight Forwarding',
    date: '8 Mar 2026',
    category: 'Technology',
    excerpt: 'How technology is reshaping freight forwarding in Africa, from automated documentation to real-time shipment tracking and digital customs platforms.',
  },
];

const categoryColors: Record<string, string> = {
  'Trade Insights': 'bg-blue-100 text-blue-700',
  'Compliance': 'bg-amber-100 text-amber-700',
  'Academy': 'bg-emerald-100 text-emerald-700',
  'Operations': 'bg-purple-100 text-purple-700',
  'Industry': 'bg-gray-100 text-gray-700',
  'Technology': 'bg-cyan-100 text-cyan-700',
};

export default function NewsPage() {
  const [subEmail, setSubEmail] = useState('');

  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/25-news-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Company</span>
            <span>/</span>
            <span className="text-white font-medium">News & Insights</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            News &amp; Insights
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Stay informed with the latest developments in African trade, logistics, and customs
            compliance. Expert analysis, industry news, and company updates from the Afri-Bridge team.
          </p>
        </div>
      </div>

      {/* Featured Article */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-[#0B1F3A] to-emerald-800 rounded-2xl p-8 lg:p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200">{featured.category}</span>
                <span className="text-sm text-gray-300">{featured.date}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">{featured.title}</h2>
              <p className="text-gray-200 leading-relaxed mb-4">{featured.excerpt}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{featured.excerpt2}</p>
              <Link href="#">
                <Button className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold text-sm">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Article Grid */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#0B1F3A] mb-6">Latest Articles</h3>
            <div className="space-y-4">
              {articles.map((article) => (
                <div key={article.title} className="bg-gray-50 rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-700'}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#0B1F3A] mb-2">{article.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{article.excerpt}</p>
                  <Link href="#" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                    Read More <ArrowRightIcon className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Stay Updated</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest trade insights, regulatory updates, and company news directly in your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={subEmail}
              onChange={(e) => setSubEmail(e.target.value)}
              className="h-12"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12 px-6 shrink-0">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-gray-400 mt-3">By subscribing, you agree to receive occasional emails from Afri-Bridge. We respect your privacy.</p>
        </div>
      </div>
    </SiteLayout>
  );
}
