'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Ship, GraduationCap } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const stats = [
  { value: '98.5%', label: 'On-Time Delivery' },
  { value: '25+', label: 'Countries Covered' },
  { value: '40+', label: 'Trade Routes' },
  { value: '24/7', label: 'Operations Center' },
];

const trustBadges = [
  'SARS Licensed',
  'IATA Accredited',
  'ISO 9001:2015',
  'SADC Partners',
  'Port Authorities',
  'Global Carriers',
  'Customs Authority',
  'Trade Compliant',
];

const features = [
  'Customs Clearing & Compliance',
  'Multi-Modal Freight Solutions',
  'Cross-Border Trade Expertise',
  'Real-Time Shipment Tracking',
];

export function HeroSection() {
  return (
    <section className="relative" aria-label="Hero">
      {/* Background Image - full width, natural height, no gaps */}
      <div className="relative w-full">
        <Image
          src="/images/photography/v2/01-homepage-hero-v3.png"
          alt=""
          width={1672}
          height={941}
          priority
          className="w-full h-auto brightness-110"
          unoptimized
        />
        {/* Overlay on top of image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/60 via-[#0B1F3A]/45 to-[#0B1F3A]/20" />
        <div className="absolute inset-0 opacity-[0.03] bg-dots" />
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-[15%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        {/* Content overlaid on image */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <ScrollAnimation>
          <div className="max-w-2xl">
            {/* Tag */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">
              <span className="w-8 h-px bg-emerald-400" />
              Pan-African Logistics Network
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-2">
              Afri-Bridge Global Logistics
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400 leading-tight mb-6">
              Trade Infrastructure for Africa
            </p>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Enterprise-grade freight forwarding, customs clearing, trade intelligence, and cross-border logistics solutions connecting businesses across Africa.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span className="text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
              <Link
                href="/quote"
                className="btn-glow inline-flex items-center justify-center bg-[#059669] hover:bg-[#047857] text-white font-semibold text-base px-6 h-12 rounded-lg transition-colors"
              >
                Get Freight Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/tracking"
                className="inline-flex items-center justify-center border border-white/25 text-white hover:bg-white/10 font-semibold text-base px-6 h-12 rounded-lg transition-all backdrop-blur-sm"
              >
                Track Shipment
              </Link>
              <Link
                href="/atlas"
                className="btn-glow inline-flex items-center justify-center bg-[#0891B2] hover:bg-[#0e7490] text-white font-semibold text-base px-6 h-12 rounded-lg transition-colors"
              >
                <Ship className="mr-2 h-4 w-4" />
                Explore ATLAS
              </Link>
              <Link
                href="/academy"
                className="btn-glow inline-flex items-center justify-center bg-[#D4A017] hover:bg-[#b8860b] text-white font-semibold text-base px-6 h-12 rounded-lg transition-colors"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                View Academy
              </Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Stats Bar - Glassmorphism */}
        <ScrollAnimation delay={200} blur>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl px-4 py-5 text-center hover:bg-white/12 transition-colors"
              >
                <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-300 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Trust Badges */}
        <ScrollAnimation delay={350} direction="none">
          <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-3 py-1.5 text-[11px] font-medium text-gray-300 glass rounded-full hover:bg-white/15 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </ScrollAnimation>
      </div>
        </div>
      </div>
    </section>
  );
}
