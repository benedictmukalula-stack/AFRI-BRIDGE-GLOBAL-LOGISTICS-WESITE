'use client';

import Link from 'next/link';
import { ArrowRight, Truck, Map, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const pillars = [
  {
    icon: Truck,
    title: 'Move Goods Across Africa',
    description:
      'Enterprise-grade freight forwarding, customs clearing, and cross-border logistics services connecting you to every major African trade hub.',
    stats: '8 SERVICES | 25+ COUNTRIES | 24/7 OPERATIONS',
    cta: 'Explore Services',
    href: '/services',
    color: 'emerald',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-emerald-700',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderHover: 'hover:border-emerald-200',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: Map,
    title: 'Understand African Trade',
    description:
      'Access real-time corridor intelligence, a curated marketplace of 500+ suppliers, and expert publications covering African trade dynamics.',
    stats: '40+ CORRIDORS | 500+ SUPPLIERS | 150+ REPORTS',
    cta: 'Explore Atlas',
    href: '/atlas',
    color: 'blue',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-cyan-700',
    bgLight: 'bg-sky-50',
    textColor: 'text-sky-600',
    borderHover: 'hover:border-sky-200',
    iconBg: 'bg-sky-100',
  },
  {
    icon: GraduationCap,
    title: 'Build Professional Skills',
    description:
      'Professional training courses, corporate programmes, and industry certifications to advance your career in African trade and logistics.',
    stats: '10+ COURSES | 6 CATEGORIES | 8+ TRAINERS',
    cta: 'Browse Courses',
    href: '/academy',
    color: 'amber',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-700',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
    borderHover: 'hover:border-amber-200',
    iconBg: 'bg-amber-100',
  },
];

export function PlatformPillarsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden" aria-label="Platform Pillars">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation scale>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              One Platform, Three Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4">
              Everything You Need for African Trade
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Afri-Bridge combines logistics operations, trade intelligence, and professional development
              into a single integrated platform.
            </p>
          </div>
        </ScrollAnimation>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <ScrollAnimation key={pillar.title} delay={i * 120} scale>
                <div className={`group relative bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col card-gradient ${pillar.borderHover}`}>
                  {/* Color accent line at top */}
                  <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${pillar.gradientFrom} ${pillar.gradientTo} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${pillar.iconBg} ${pillar.textColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{pillar.title}</h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed mb-6 flex-1">{pillar.description}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pillar.stats.split(' | ').map((stat) => (
                      <span key={stat} className={`text-[11px] font-semibold uppercase tracking-wide ${pillar.bgLight} ${pillar.textColor} px-2.5 py-1 rounded-full`}>
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={pillar.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${pillar.textColor} hover:gap-2.5 transition-all duration-300`}
                  >
                    {pillar.cta}
                    <ArrowRight className="h-4 w-4" />
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
