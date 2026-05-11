'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Calculator,
  BarChart3,
  FileCheck,
  ShieldCheck as ShieldIcon,
  FileText,
  ClipboardList,
  BookOpen,
  Download,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { HSCodeValidator } from '@/components/tools/HSCodeValidator';
import { DutyCalculator } from '@/components/tools/DutyCalculator';
import { RateEstimator } from '@/components/tools/RateEstimator';

type ToolId = 'hs-code' | 'duty-calc' | 'rate-estimator';

const tools = [
  {
    id: 'hs-code' as ToolId,
    title: 'HS Code Validator',
    category: 'Customs',
    description: 'Search and validate Harmonized System (HS) tariff codes for customs classification across African jurisdictions. Ensure compliance and avoid costly delays at the border.',
    icon: ShieldCheck,
    color: 'bg-emerald-100 text-emerald-600',
    accentColor: 'from-emerald-600 to-emerald-700',
  },
  {
    id: 'duty-calc' as ToolId,
    title: 'Duty Calculator',
    category: 'Finance',
    description: 'Calculate estimated import duties, VAT, ad valorem customs, and total landed costs for goods entering South Africa and SADC member states.',
    icon: Calculator,
    color: 'bg-blue-100 text-blue-600',
    accentColor: 'from-blue-600 to-blue-700',
  },
  {
    id: 'rate-estimator' as ToolId,
    title: 'Rate Estimator',
    category: 'Logistics',
    description: 'Compare freight rates across air, ocean, and road transport modes. Get instant estimates with transit times for all major African trade corridors.',
    icon: BarChart3,
    color: 'bg-amber-100 text-amber-600',
    accentColor: 'from-amber-500 to-amber-600',
  },
];

const resources = [
  {
    title: 'Certificates',
    description: 'SARS certificates, compliance documentation, and registration certificates.',
    icon: FileCheck,
    color: 'bg-emerald-100 text-emerald-600',
    buttonLabel: 'Access',
  },
  {
    title: 'Compliance Requirements',
    description: 'Regulatory requirements for imports, exports, and cross-border trade.',
    icon: ShieldIcon,
    color: 'bg-sky-100 text-sky-600',
    buttonLabel: 'Access',
  },
  {
    title: 'Trade Documents',
    description: 'Bills of lading, commercial invoices, packing lists, and certificates of origin.',
    icon: FileText,
    color: 'bg-orange-100 text-orange-600',
    buttonLabel: 'Access',
  },
  {
    title: 'Customs Forms',
    description: 'DA forms, customs declaration forms, and SARS documentation templates.',
    icon: ClipboardList,
    color: 'bg-amber-100 text-amber-600',
    buttonLabel: 'Download',
  },
  {
    title: 'Import/Export Guides',
    description: 'Step-by-step guides for importing and exporting goods across African borders.',
    icon: BookOpen,
    color: 'bg-purple-100 text-purple-600',
    buttonLabel: 'Download',
  },
  {
    title: 'Download Centre',
    description: 'Access all Afri-Bridge resources, brochures, forms, and guides in one place.',
    icon: Download,
    color: 'bg-cyan-100 text-cyan-600',
    buttonLabel: 'Download',
  },
];

export default function ResourcesPage() {
  const [activeTool, setActiveTool] = useState<ToolId | null>(null);

  const toggleTool = (toolId: ToolId) => {
    setActiveTool(prev => prev === toolId ? null : toolId);
  };

  return (
    <SiteLayout>
      {/* Page Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/18-resources-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Resources</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Tools &amp; Resources
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Afri-Bridge logistics tools and digital resources. Free logistics tools to help you plan, estimate, and optimize your African trade operations.
          </p>
        </div>
      </div>

      {/* Interactive Tools Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Premium Tools &amp; Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Free Logistics Tools
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Real working calculators and tools designed to help you plan, estimate, and optimize your supply chain operations across Africa.
            </p>
          </div>

          {/* Tool cards with embedded tools */}
          <div className="space-y-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeTool === tool.id;
              return (
                <div
                  key={tool.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Tool header - always visible */}
                  <button
                    onClick={() => toggleTool(tool.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${tool.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                            {tool.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#0B1F3A]">{tool.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mt-1 max-w-xl">{tool.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-4">
                      {isActive ? (
                        <span className="hidden sm:inline-flex text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">Close Tool</span>
                      ) : (
                        <span className="hidden sm:inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-emerald-600 text-white font-semibold">
                          Open Tool
                          <ExternalLink className="h-3 w-3" />
                        </span>
                      )}
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {/* Tool content - expandable */}
                  {isActive && (
                    <div className="border-t border-gray-200 bg-white">
                      <div className="max-w-3xl mx-auto p-5 sm:p-6">
                        {tool.id === 'hs-code' && <HSCodeValidator />}
                        {tool.id === 'duty-calc' && <DutyCalculator />}
                        {tool.id === 'rate-estimator' && <RateEstimator />}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Explore Each Tool Section */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Explore Each Tool
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Dive Deeper Into Our Logistics Tools
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Learn how each tool works, what features it offers, and which regions and countries it supports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${tool.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2 group-hover:text-emerald-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{tool.category}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{tool.description}</p>
                  <Button
                    onClick={() => { setActiveTool(tool.id); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 hover:border-emerald-700 font-semibold text-sm"
                  >
                    Open Tool
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Trade Documents &amp; Guides
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Access essential trade documents, compliance guides, customs forms, and operational resources for African trade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.title}
                  className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${resource.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2 group-hover:text-emerald-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{resource.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 hover:border-emerald-700 font-semibold text-sm"
                  >
                    {resource.buttonLabel}
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Need Help with Trade Documentation?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Our compliance team can assist with all your trade documentation and regulatory requirements.
          </p>
          <Link href="/contact">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
