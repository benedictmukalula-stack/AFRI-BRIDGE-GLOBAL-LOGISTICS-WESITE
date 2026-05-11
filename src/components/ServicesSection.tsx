'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Shield,
  Plane,
  Ship,
  Truck,
  Warehouse,
  HardHat,
  Car,
  FileCheck,
  Mountain,
  Fuel,
  Anchor,
  ScrollText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const services = [
  {
    title: 'Customs Clearing & Brokerage',
    description:
      'Expert SARS-licensed customs clearance services for seamless import/export processing, tariff classification, and duty optimization.',
    image: '/images/photography/v2/04-customs-clearing-hero.png',
    icon: Shield,
    hasImage: true,
    href: '/services/customs-clearing',
  },
  {
    title: 'Air Freight',
    description:
      'Time-critical air cargo services with IATA partnerships ensuring reliable, efficient global and domestic air freight transportation.',
    image: '/images/photography/v2/17-air-freight-hero.png',
    icon: Plane,
    hasImage: true,
    href: '/services/air-freight',
  },
  {
    title: 'Ocean Freight (FCL/LCL)',
    description:
      'Comprehensive sea freight solutions including full container loads and less-than-container options with competitive rates and reliable scheduling.',
    image: '/images/photography/v2/20-ocean-freight-hero.png',
    icon: Ship,
    hasImage: true,
    href: '/services/ocean-freight',
  },
  {
    title: 'Road & Cross-Border Transport',
    description:
      'Extensive road freight network spanning SADC and beyond, with cross-border documentation and regulatory compliance handled end-to-end.',
    image: '/images/photography/v2/16-road-transport-hero.png',
    icon: Truck,
    hasImage: true,
    href: '/services/road-transport',
  },
  {
    title: 'Warehousing & Distribution',
    description:
      'Strategic warehousing facilities with inventory management, pick-and-pack services, and distribution solutions across key trade hubs.',
    image: '/images/photography/v2/14-warehousing-hero.png',
    icon: Warehouse,
    hasImage: true,
    href: '/services/warehousing',
  },
  {
    title: 'Project Cargo',
    description:
      'Specialized logistics for oversized, heavy-lift, and complex project cargo with custom routing and handling solutions.',
    image: '/images/photography/v2/24-project-cargo-hero.png',
    icon: HardHat,
    hasImage: true,
    href: '/services/project-cargo',
  },
  {
    title: 'Vehicle Sourcing & Delivery',
    description:
      'End-to-end vehicle procurement and logistics, from sourcing at auction to customs clearance and final delivery across Africa.',
    image: '/images/photography/v2/22-vehicle-sourcing-hero.png',
    icon: Car,
    hasImage: true,
    href: '/services/vehicle-sourcing',
  },
  {
    title: 'Registration & Compliance',
    description:
      'Complete business and import registration services including SARS registration, import/export permits, and regulatory compliance.',
    image: '/images/photography/v2/23-registration-hero.png',
    icon: FileCheck,
    hasImage: true,
    href: '/services/registration',
  },
  {
    title: 'Mining & Industrial Logistics',
    description:
      'Specialised logistics for the mining and industrial sectors, including heavy equipment transport, explosives handling, and mine-to-port supply chain solutions across Africa\'s resource-rich regions.',
    image: '/images/photography/v2/07-mining-hero.png',
    icon: Mountain,
    hasImage: true,
    href: '/services/mining-industrial',
  },
  {
    title: 'Oil & Gas Logistics',
    description:
      'Comprehensive logistics for upstream and downstream oil and gas operations, including rig move coordination, pipe transport, hazardous cargo, and refinery supply chain management.',
    image: '/images/photography/v2/06-oil-gas-hero.png',
    icon: Fuel,
    hasImage: true,
    href: '/services/oil-gas',
  },
  {
    title: 'Maritime & Port Logistics',
    description:
      'End-to-end port agency services, vessel husbandry, bunkering coordination, and terminal operations support at major African seaports and inland waterways.',
    image: '/images/photography/v2/05-maritime-port-hero.png',
    icon: Anchor,
    hasImage: true,
    href: '/services/maritime-port',
  },
  {
    title: 'Trade Documentation',
    description:
      'Complete trade documentation services including customs entries, certificates of origin, permits, bills of lading, and compliance with SADC and COMESA trade protocols.',
    image: '/images/photography/v2/21-trade-doc-hero.png',
    icon: ScrollText,
    hasImage: true,
    href: '/services/trade-documentation',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Complete Logistics Solutions
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              From customs clearance to multi-modal freight, warehousing to compliance — we provide end-to-end
              logistics services designed for the African trade landscape.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation key={service.title} delay={i * 60}>
                <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Card Header */}
                  {service.hasImage ? (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  ) : (
                    <div className={`relative h-40 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <Icon className="h-16 w-16 text-white/80" />
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-[#0B1F3A] mb-2 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{service.description}</p>
                    <Link href={service.href}>
                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        View Service
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={100}>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold px-8"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
