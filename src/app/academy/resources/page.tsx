'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  Download,
  ChevronDown,
  ChevronUp,
  FileText,
  FileSpreadsheet,
  Video,
  BookOpen,
  Wrench,
  AlertTriangle,
  Monitor,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

interface ResourceItem {
  title: string;
  description: string;
  type: 'PDF' | 'Excel' | 'Video';
}

interface ResourceCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  items: ResourceItem[];
}

const resourceCategories: ResourceCategory[] = [
  {
    id: 'industry-guides',
    title: 'Industry Guides',
    icon: BookOpen,
    items: [
      {
        title: 'Customs Clearance Guide',
        description:
          'A comprehensive guide to customs clearance procedures in South Africa, including tariff classification, valuation, origin determination, and SARS compliance requirements.',
        type: 'PDF',
      },
      {
        title: 'Freight Forwarding Handbook',
        description:
          'Essential reference for freight forwarding operations covering multimodal transport planning, Incoterms, documentation, cargo insurance, and carrier management.',
        type: 'PDF',
      },
      {
        title: 'Import/Export Checklist',
        description:
          'Step-by-step checklist for importers and exporters to ensure compliance with all regulatory requirements, documentation, and procedural obligations.',
        type: 'PDF',
      },
      {
        title: 'SADC Trade Guide',
        description:
          'Overview of trade opportunities within the SADC region including preferential trade agreements, rules of origin, and cross-border logistics considerations.',
        type: 'PDF',
      },
    ],
  },
  {
    id: 'templates-tools',
    title: 'Templates & Tools',
    icon: Wrench,
    items: [
      {
        title: 'HS Code Lookup Sheet',
        description:
          'A practical spreadsheet tool for looking up commonly used Harmonised System codes for goods traded in Southern Africa with SARS tariff references.',
        type: 'Excel',
      },
      {
        title: 'Duty Calculator Spreadsheet',
        description:
          'Pre-built calculator for estimating customs duties, VAT, and other import charges based on product value, HS code, and country of origin.',
        type: 'Excel',
      },
      {
        title: 'Shipping Documentation Checklist',
        description:
          'Comprehensive checklist covering all shipping documents required for different modes of transport, including bill of lading, commercial invoice, packing list, and certificates.',
        type: 'PDF',
      },
      {
        title: 'Incoterms Quick Reference',
        description:
          'Quick-reference guide to all 11 Incoterms 2020 rules with responsibilities, risk transfer points, and cost allocation between buyer and seller.',
        type: 'PDF',
      },
    ],
  },
  {
    id: 'regulatory-updates',
    title: 'Regulatory Updates',
    icon: AlertTriangle,
    items: [
      {
        title: 'SARS Customs Updates 2026',
        description:
          'Summary of the latest customs legislation changes, new tariff amendments, procedural updates, and compliance requirements from SARS for 2026.',
        type: 'PDF',
      },
      {
        title: 'SADC Trade Agreement Changes',
        description:
          'Update on recent modifications to SADC trade protocols, new tariff preferences, updated rules of origin, and their impact on regional trade.',
        type: 'PDF',
      },
      {
        title: 'Port Authority Notices',
        description:
          'Consolidated notices from major South African ports including Transnet, TNPA, and border post authorities affecting cargo operations and clearance timelines.',
        type: 'PDF',
      },
      {
        title: 'Dangerous Goods Regulation Summary',
        description:
          'Summary of recent changes to dangerous goods regulations for air, road, and sea transport, including new classification requirements and packing standards.',
        type: 'PDF',
      },
    ],
  },
  {
    id: 'webinar-recordings',
    title: 'Webinar Recordings',
    icon: Monitor,
    items: [
      {
        title: 'Introduction to Afri-Bridge Atlas',
        description:
          'Recorded webinar introducing the Afri-Bridge Atlas platform, its trade intelligence features, market data capabilities, and how to get started as a user.',
        type: 'Video',
      },
      {
        title: 'Mastering Tariff Classification',
        description:
          'Expert-led session on tariff classification principles, common pitfalls, SARS interpretation notes, and practical tips for accurate HS code determination.',
        type: 'Video',
      },
      {
        title: 'Cross-Border Trade in Africa',
        description:
          'Panel discussion featuring trade experts on the opportunities and challenges of cross-border trade across African trade corridors and SADC member states.',
        type: 'Video',
      },
      {
        title: 'Supply Chain Trends 2026',
        description:
          'Industry leaders discuss emerging supply chain trends including digitalisation, nearshoring, green logistics, and the evolving regulatory landscape in Africa.',
        type: 'Video',
      },
    ],
  },
];

function getTypeIcon(type: ResourceItem['type']) {
  switch (type) {
    case 'PDF':
      return FileText;
    case 'Excel':
      return FileSpreadsheet;
    case 'Video':
      return Video;
  }
}

function getTypeBadge(type: ResourceItem['type']) {
  switch (type) {
    case 'PDF':
      return 'bg-red-100 text-red-700';
    case 'Excel':
      return 'bg-green-100 text-green-700';
    case 'Video':
      return 'bg-purple-100 text-purple-700';
  }
}

function getTypeButton(type: ResourceItem['type']) {
  switch (type) {
    case 'PDF':
    case 'Excel':
      return 'Download';
    case 'Video':
      return 'Watch';
  }
}

export default function AcademyResourcesPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'industry-guides',
  ]);

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) =>
      prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id]
    );
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/35-academy-resources-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/academy" className="hover:text-white transition-colors">
              Academy
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Resources</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <Download className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Academy Resources
            </h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Free downloadable resources to support your professional development in African
            trade and logistics. Access industry guides, practical tools, regulatory updates, and
            recorded webinars — all at no cost.
          </p>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Free Downloads
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Browse by Category
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Select a category below to explore available resources. All materials are free to
              download and use for your professional development.
            </p>
          </div>

          <div className="space-y-6">
            {resourceCategories.map(({ id, title, icon: Icon, items }) => {
              const isExpanded = expandedCategories.includes(id);
              return (
                <div
                  key={id}
                  className="rounded-xl border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0B1F3A]">{title}</h3>
                        <p className="text-sm text-gray-400">
                          {items.length} {items.length === 1 ? 'resource' : 'resources'} available
                        </p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {/* Resource Items */}
                  {isExpanded && (
                    <div className="border-t border-gray-100">
                      <div className="divide-y divide-gray-50">
                        {items.map((item) => {
                          const TypeIcon = getTypeIcon(item.type);
                          return (
                            <div key={item.title} className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                                <TypeIcon className="h-5 w-5 text-gray-500" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-bold text-[#0B1F3A] text-sm">
                                    {item.title}
                                  </h4>
                                  <span
                                    className={`text-xs font-semibold px-2 py-0.5 rounded ${getTypeBadge(item.type)}`}
                                  >
                                    {item.type}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                className="border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold text-sm shrink-0"
                              >
                                {getTypeButton(item.type)}
                                {item.type === 'Video' ? (
                                  <Video className="ml-2 h-3.5 w-3.5" />
                                ) : (
                                  <Download className="ml-2 h-3.5 w-3.5" />
                                )}
                              </Button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '4', label: 'Industry Guides' },
              { value: '4', label: 'Templates & Tools' },
              { value: '4', label: 'Regulatory Updates' },
              { value: '4', label: 'Webinar Recordings' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-lg bg-emerald-50">
                <p className="text-2xl font-bold text-emerald-700">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Take the Next Step?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Explore our professional training courses and certification programmes to deepen your
            expertise and advance your career in African trade and logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy/courses">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">
                Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
