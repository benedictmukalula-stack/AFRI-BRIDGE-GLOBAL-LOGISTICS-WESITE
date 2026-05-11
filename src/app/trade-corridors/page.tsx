'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

const corridors = [
  {
    title: 'Durban Corridor',
    countries: ['South Africa', 'Botswana', 'Zimbabwe', 'Zambia', 'DRC', 'Malawi'],
    useCase: "Southern Africa's busiest trade route connecting the Indian Ocean port of Durban to landlocked SADC nations.",
    customs: 'Gauteng border processing, Beitbridge crossing facilitation.',
  },
  {
    title: 'Walvis Bay Corridor',
    countries: ['Namibia', 'Botswana', 'Zambia', 'Zimbabwe', 'DRC'],
    useCase: "Atlantic Ocean gateway for central southern African trade via Namibia's deep-water port.",
    customs: 'Trans-Kalahari corridor, simplified customs procedures.',
  },
  {
    title: 'Dar es Salaam Corridor',
    countries: ['Tanzania', 'Zambia', 'DRC', 'Burundi', 'Rwanda', 'Uganda'],
    useCase: 'East African Indian Ocean port serving the Great Lakes region and beyond.',
    customs: 'TANROADS coordination, TMEA facilitation.',
  },
  {
    title: 'Beira Corridor',
    countries: ['Mozambique', 'Zimbabwe', 'Zambia', 'Malawi'],
    useCase: 'Vital link through Mozambique to Zimbabwe and landlocked neighbours.',
    customs: 'Zimbabwe-Zambia border processing, Beira port authority liaison.',
  },
  {
    title: 'North-South Corridor',
    countries: ['South Africa', 'Zimbabwe', 'Zambia', 'DRC', 'Tanzania', 'Kenya'],
    useCase: 'Pan-African corridor linking southern and eastern Africa through multiple trade routes.',
    customs: 'Multi-country customs coordination, SADC TFA implementation.',
  },
  {
    title: 'Lobito Corridor',
    countries: ['Angola', 'DRC', 'Zambia'],
    useCase: "Strategic Atlantic route via Angola's Lobito port to the Copperbelt mining region.",
    customs: 'Angola customs modernisation, DRC transit facilitation.',
  },
  {
    title: 'Zambia–DRC Copperbelt Corridor',
    countries: ['Zambia', 'DRC'],
    useCase: "Mining logistics corridor serving Africa's richest copper and cobalt mining region.",
    customs: 'Cross-border mining permits, hazardous cargo compliance.',
  },
];

export default function TradeCorridorsPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/34-trade-corridors-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Trade Corridors</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Trade Corridors
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Explore Afri-Bridge&apos;s coverage of Africa&apos;s most critical trade corridors connecting
            landlocked nations to major ports and markets.
          </p>
        </div>
      </div>

      {/* Corridors Grid */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corridors.map((corridor) => (
              <div
                key={corridor.title}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">{corridor.title}</h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {corridor.countries.map((country) => (
                    <span
                      key={country}
                      className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full"
                    >
                      {country}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">
                  <span className="font-semibold text-gray-700">Use case: </span>
                  {corridor.useCase}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  <span className="font-semibold text-gray-700">Customs/border: </span>
                  {corridor.customs}
                </p>

                <Link href="/quote" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 hover:border-emerald-700 font-semibold text-sm"
                  >
                    Request Corridor Support
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Need Corridor-Specific Logistics Support?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Our corridor specialists can help you navigate customs, optimise routes, and ensure compliance
            across Africa&apos;s major trade routes.
          </p>
          <Link href="/quote">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
