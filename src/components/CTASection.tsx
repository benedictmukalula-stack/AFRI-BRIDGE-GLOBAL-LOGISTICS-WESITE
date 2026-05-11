'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ScrollAnimation';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-label="Call to action">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#122d52] to-[#0B1F3A]" />
      <div className="absolute inset-0 opacity-[0.03] bg-dots" />
      
      {/* Decorative orbs */}
      <div className="absolute top-0 left-[20%] w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[20%] w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation scale blur>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">
              <span className="w-8 h-px bg-emerald-400" />
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Move Your Business Forward?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Whether you need to move goods, access trade intelligence, or train your team — Afri-Bridge
              has you covered. Start with a free quote or explore our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="btn-glow bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base px-8 h-12 rounded-lg shadow-lg shadow-emerald-500/25">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/atlas">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm font-semibold text-base px-8 h-12 rounded-lg"
                >
                  Explore the Platform
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#0891B2]/50 text-[#0891B2] bg-[#0891B2]/5 hover:bg-[#0891B2]/10 font-semibold text-base px-8 h-12 rounded-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
