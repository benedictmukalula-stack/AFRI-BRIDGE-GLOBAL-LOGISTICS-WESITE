'use client';

import Image from 'next/image';
import Link from 'next/link';
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
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Customs Clearing & Brokerage',
    description:
      'Expert SARS-licensed customs clearance services for seamless import/export processing, tariff classification, and duty optimization.',
    image: '/images/service-customs.jpg',
    icon: Shield,
    href: '/services/customs-clearing',
  },
  {
    title: 'Air Freight',
    description:
      'Time-critical air cargo services with IATA partnerships ensuring reliable, efficient global and domestic air freight transportation.',
    image: '/images/service-airfreight.jpg',
    icon: Plane,
    href: '/services/air-freight',
  },
  {
    title: 'Ocean Freight (FCL/LCL)',
    description:
      'Comprehensive sea freight solutions including full container loads and less-than-container options with competitive rates and reliable scheduling.',
    image: '/images/service-ocean.jpg',
    icon: Ship,
    href: '/services/ocean-freight',
  },
  {
    title: 'Road & Cross-Border Transport',
    description:
      'Extensive road freight network spanning SADC and beyond, with cross-border documentation and regulatory compliance handled end-to-end.',
    image: '/images/service-road.jpg',
    icon: Truck,
    href: '/services/road-transport',
  },
  {
    title: 'Warehousing & Distribution',
    description:
      'Strategic warehousing facilities with inventory management, pick-and-pack services, and distribution solutions across key trade hubs.',
    image: '/images/service-warehouse.jpg',
    icon: Warehouse,
    href: '/services/warehousing',
  },
  {
    title: 'Project Cargo',
    description:
      'Specialized logistics for oversized, heavy-lift, and complex project cargo with custom routing and handling solutions.',
    image: '/images/service-project.jpg',
    icon: HardHat,
    href: '/services/project-cargo',
  },
  {
    title: 'Vehicle Sourcing & Delivery',
    description:
      'End-to-end vehicle procurement and logistics, from sourcing at auction to customs clearance and final delivery across Africa.',
    image: '/images/service-vehicle.jpg',
    icon: Car,
    href: '/services/vehicle-sourcing',
  },
  {
    title: 'Registration & Compliance',
    description:
      'Complete business and import registration services including SARS registration, import/export permits, and regulatory compliance.',
    image: '/images/service-registration.jpg',
    icon: FileCheck,
    href: '/services/registration',
  },
  {
    title: 'Mining & Industrial Logistics',
    description:
      "Specialised logistics for the mining and industrial sectors, including heavy equipment transport, explosives handling, and mine-to-port supply chain solutions across Africa's resource-rich regions.",
    image: '/images/service-mining.jpg',
    icon: Mountain,
    href: '/services/mining-industrial',
  },
  {
    title: 'Oil & Gas Logistics',
    description:
      'Comprehensive logistics for upstream and downstream oil and gas operations, including rig move coordination, pipe transport, hazardous cargo, and refinery supply chain management.',
    image: '/images/service-oilgas.jpg',
    icon: Fuel,
    href: '/services/oil-gas',
  },
  {
    title: 'Maritime & Port Logistics',
    description:
      'End-to-end port agency services, vessel husbandry, bunkering coordination, and terminal operations support at major African seaports and inland waterways.',
    image: '/images/service-maritime.jpg',
    icon: Anchor,
    href: '/services/maritime-port',
  },
  {
    title: 'Trade Documentation',
    description:
      'Complete trade documentation services including customs entries, certificates of origin, permits, bills of lading, and compliance with SADC and COMESA trade protocols.',
    image: '/images/service-tradedocs.jpg',
    icon: ScrollText,
    href: '/services/trade-documentation',
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/03-services-hero.png"
          alt=""
          width={1672}
          height={941}
          priority
          className="w-full h-auto brightness-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0B1F3A]/55" />
        <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Services</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Comprehensive logistics and trade solutions designed for Africa&apos;s dynamic commercial landscape.
          </p>
        </div>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Complete Logistics Solutions for African Trade
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              From customs clearance to multi-modal freight, warehousing to compliance — we provide end-to-end
              logistics services designed for the African trade landscape. Our team of experts ensures your
              cargo moves efficiently across borders, through ports, and to its final destination.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  {/* Card Header with Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0B1F3A] to-[#122d52]">
                    <Image
                      src={service.image.replace('.jpg', '.png')}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-[#0B1F3A] mb-2 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Contact our team for a customised logistics solution tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
