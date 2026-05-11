'use client';

import Link from 'next/link';
import {
  ArrowRight,
  FileCheck,
  ShieldCheck,
  FileText,
  ClipboardList,
  BookOpen,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const resources = [
  {
    title: 'Certificates',
    description: 'SARS certificates, compliance documentation, and registration certificates.',
    icon: FileCheck,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Compliance Requirements',
    description: 'Regulatory requirements for imports, exports, and cross-border trade.',
    icon: ShieldCheck,
    color: 'bg-sky-100 text-sky-600',
  },
  {
    title: 'Trade Documents',
    description: 'Bills of lading, commercial invoices, packing lists, and certificates of origin.',
    icon: FileText,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Customs Forms',
    description: 'DA forms, customs declaration forms, and SARS documentation templates.',
    icon: ClipboardList,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Import/Export Guides',
    description: 'Step-by-step guides for importing and exporting goods across African borders.',
    icon: BookOpen,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Download Centre',
    description: 'Access all Afri-Bridge resources, brochures, forms, and guides in one place.',
    icon: Download,
    color: 'bg-cyan-100 text-cyan-600',
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 lg:py-28 bg-white" aria-label="Tools & Resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              TOOLS &amp; RESOURCES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Trade Resources &amp; Downloads
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Access essential trade documents, compliance guides, customs forms, and operational
              resources for African trade.
            </p>
          </div>
        </ScrollAnimation>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => {
            const Icon = resource.icon;
            return (
              <ScrollAnimation key={resource.title} delay={i * 80}>
                <div className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${resource.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2 group-hover:text-emerald-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{resource.description}</p>
                  <Link href="/resources">
                    <Button
                      variant="outline"
                      className="w-full border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 hover:border-emerald-700 font-semibold text-sm"
                    >
                      Access Resources
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
