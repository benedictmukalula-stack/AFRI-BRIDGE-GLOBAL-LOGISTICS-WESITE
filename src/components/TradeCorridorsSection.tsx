'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const corridors = [
  {
    title: 'Durban Corridor',
    countries: ['South Africa', 'Botswana', 'Zimbabwe', 'Zambia', 'DRC', 'Malawi'],
    useCase: "Southern Africa's busiest trade route connecting the Indian Ocean port of Durban to landlocked SADC nations.",
    customs: 'Gauteng border processing, Beitbridge crossing facilitation.',
    color: 'emerald',
  },
  {
    title: 'Walvis Bay Corridor',
    countries: ['Namibia', 'Botswana', 'Zambia', 'Zimbabwe', 'DRC'],
    useCase: 'Atlantic Ocean gateway for central southern African trade via Namibia\'s deep-water port.',
    customs: 'Trans-Kalahari corridor, simplified customs procedures.',
    color: 'sky',
  },
  {
    title: 'Dar es Salaam Corridor',
    countries: ['Tanzania', 'Zambia', 'DRC', 'Burundi', 'Rwanda', 'Uganda'],
    useCase: 'East African Indian Ocean port serving the Great Lakes region and beyond.',
    customs: 'TANROADS coordination, TMEA facilitation.',
    color: 'amber',
  },
  {
    title: 'Beira Corridor',
    countries: ['Mozambique', 'Zimbabwe', 'Zambia', 'Malawi'],
    useCase: 'Vital link through Mozambique to Zimbabwe and landlocked neighbours.',
    customs: 'Zimbabwe-Zambia border processing, Beira port authority liaison.',
    color: 'rose',
  },
  {
    title: 'North-South Corridor',
    countries: ['South Africa', 'Zimbabwe', 'Zambia', 'DRC', 'Tanzania', 'Kenya'],
    useCase: 'Pan-African corridor linking southern and eastern Africa through multiple trade routes.',
    customs: 'Multi-country customs coordination, SADC TFA implementation.',
    color: 'violet',
  },
  {
    title: 'Lobito Corridor',
    countries: ['Angola', 'DRC', 'Zambia'],
    useCase: "Strategic Atlantic route via Angola's Lobito port to the Copperbelt mining region.",
    customs: 'Angola customs modernisation, DRC transit facilitation.',
    color: 'teal',
  },
  {
    title: 'Zambia-DRC Copperbelt Corridor',
    countries: ['Zambia', 'DRC'],
    useCase: "Mining logistics corridor serving Africa's richest copper and cobalt mining region.",
    customs: 'Cross-border mining permits, hazardous cargo compliance.',
    color: 'orange',
  },
];

const colorMap: Record<string, { badge: string; accent: string; iconBg: string }> = {
  emerald: { badge: 'bg-emerald-50 text-emerald-700', accent: 'border-emerald-500/20 hover:border-emerald-300', iconBg: 'bg-emerald-100 text-emerald-600' },
  sky: { badge: 'bg-sky-50 text-sky-700', accent: 'border-sky-500/20 hover:border-sky-300', iconBg: 'bg-sky-100 text-sky-600' },
  amber: { badge: 'bg-amber-50 text-amber-700', accent: 'border-amber-500/20 hover:border-amber-300', iconBg: 'bg-amber-100 text-amber-600' },
  rose: { badge: 'bg-rose-50 text-rose-700', accent: 'border-rose-500/20 hover:border-rose-300', iconBg: 'bg-rose-100 text-rose-600' },
  violet: { badge: 'bg-violet-50 text-violet-700', accent: 'border-violet-500/20 hover:border-violet-300', iconBg: 'bg-violet-100 text-violet-600' },
  teal: { badge: 'bg-teal-50 text-teal-700', accent: 'border-teal-500/20 hover:border-teal-300', iconBg: 'bg-teal-100 text-teal-600' },
  orange: { badge: 'bg-orange-50 text-orange-700', accent: 'border-orange-500/20 hover:border-orange-300', iconBg: 'bg-orange-100 text-orange-600' },
};

export function TradeCorridorsSection() {
  return (
    <section id="trade-corridors" className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="Trade Corridors">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation scale>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              TRADE CORRIDORS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              African Trade Corridor Intelligence
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Explore Afri-Bridge&apos;s coverage of Africa&apos;s most critical trade corridors connecting
              landlocked nations to major ports and markets.
            </p>
          </div>
        </ScrollAnimation>

        {/* Corridor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corridors.map((corridor, i) => {
            const colors = colorMap[corridor.color];
            return (
              <ScrollAnimation key={corridor.title} delay={i * 80} scale>
                <div className={`bg-white rounded-xl border ${colors.accent} p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl h-full flex flex-col card-gradient`}>
                  {/* Title with icon */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${colors.iconBg}`}>
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1F3A]">{corridor.title}</h3>
                  </div>

                  {/* Countries Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {corridor.countries.map((country) => (
                      <span
                        key={country}
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${colors.badge}`}
                      >
                        {country}
                      </span>
                    ))}
                  </div>

                  {/* Use Case */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">
                    <span className="font-semibold text-gray-700">Use case: </span>
                    {corridor.useCase}
                  </p>

                  {/* Customs */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    <span className="font-semibold text-gray-700">Customs/border: </span>
                    {corridor.customs}
                  </p>

                  {/* CTA */}
                  <Link href="/quote">
                    <Button
                      variant="outline"
                      className="w-full border-emerald-600/30 text-emerald-600 bg-emerald-50/30 hover:bg-emerald-50 hover:border-emerald-600 font-semibold text-sm rounded-lg transition-all"
                    >
                      Request Corridor Support
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
