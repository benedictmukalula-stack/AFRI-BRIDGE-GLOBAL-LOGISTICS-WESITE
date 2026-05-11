'use client';

import { Clock, Package, Globe, Headphones } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const stats = [
  {
    icon: Clock,
    value: '98%',
    label: 'On-Time Delivery',
    description: 'Industry-leading reliability rate',
  },
  {
    icon: Package,
    value: '12,000+',
    label: 'Shipments Delivered',
    description: 'Successfully completed shipments',
  },
  {
    icon: Globe,
    value: '25+',
    label: 'Countries Covered',
    description: 'Across the African continent',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Support Center',
    description: 'Always available for your needs',
  },
];

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1F3A] relative overflow-hidden" aria-label="Statistics">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-[10%] w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-[10%] w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation scale>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
              By the Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Proven Track Record
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our numbers speak for themselves. Years of dedicated service have built a reputation
              for reliability, coverage, and commitment.
            </p>
          </div>
        </ScrollAnimation>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollAnimation key={stat.label} delay={i * 100} scale>
                <div className="text-center p-8 rounded-2xl glass hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/15 text-emerald-400 mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-base font-semibold text-gray-200 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
