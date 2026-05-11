'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export function GlobalFooterVisual() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop */}
      <div className="relative hidden md:block w-full" style={{ height: '340px' }}>
        <Image
          src="/images/footer/footer-global-logistics.png"
          alt="Afri-Bridge logistics corridor — powering African trade"
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
          quality={85}
        />

        {/* Gradient: page body fades into image, image fades into footer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #0B1F3A 0%, rgba(11,31,58,0.45) 25%, rgba(11,31,58,0.15) 55%, rgba(11,31,58,0.85) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Warm sunset glow */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: 'radial-gradient(ellipse at 70% 45%, rgba(251,191,36,0.35) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-8 w-full">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2 drop-shadow-md">
                Ready to Move Your Cargo Across Africa?
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-md drop-shadow-sm">
                From customs clearing to last-mile delivery — Afri-Bridge connects your business
                to every major trade corridor on the continent.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-900/30 transition-all duration-300 text-sm"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/27833910863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg border border-white/20 transition-all duration-300 text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative block md:hidden w-full" style={{ height: '240px' }}>
        <Image
          src="/images/footer/footer-mobile-logistics.png"
          alt="Afri-Bridge logistics corridor"
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
          quality={80}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #0B1F3A 0%, rgba(11,31,58,0.4) 30%, rgba(11,31,58,0.15) 55%, rgba(11,31,58,0.9) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-end">
          <div className="px-5 pb-6 w-full">
            <h2 className="text-lg font-bold text-white tracking-tight mb-1.5 drop-shadow-md">
              Ready to Move Your Cargo Across Africa?
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed mb-4 drop-shadow-sm">
              From customs clearing to last-mile delivery across every major trade corridor.
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="/quote"
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-xs transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://wa.me/27833910863"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border border-white/20 text-xs transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
