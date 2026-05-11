'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Shield, Clock, Globe } from 'lucide-react';

const companyLinks = [
  { label: 'About Us', href: '/company/about' },
  { label: 'Our Team', href: '/company/team' },
  { label: 'Careers', href: '/company/careers' },
  { label: 'News & Insights', href: '/company/news' },
  { label: 'FAQ', href: '/company/faq' },
];

const serviceLinks = [
  { label: 'Customs Clearing', href: '/services/customs-clearing' },
  { label: 'Air Freight', href: '/services/air-freight' },
  { label: 'Ocean Freight', href: '/services/ocean-freight' },
  { label: 'Road & Cross-Border', href: '/services/road-transport' },
  { label: 'Warehousing', href: '/services/warehousing' },
  { label: 'Project Cargo', href: '/services/project-cargo' },
  { label: 'Mining & Industrial', href: '/services/mining-industrial' },
  { label: 'Oil & Gas Logistics', href: '/services/oil-gas' },
];

const platformLinks = [
  { label: 'ATLAS Intelligence', href: '/atlas/intelligence' },
  { label: 'Publications', href: '/atlas/publications' },
  { label: 'Marketplace', href: '/atlas/marketplace' },
  { label: 'Academy Courses', href: '/academy/courses' },
  { label: 'Corporate Training', href: '/academy/corporate-training' },
  { label: 'Client Portal', href: '/portal' },
  { label: 'Track Shipment', href: '/tracking' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/27833910863',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative text-gray-300" aria-label="Footer">
      <div className="absolute inset-0">
        <Image src="/images/photography/v2/50-footer-bg.png" alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-[#071428]/70" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Brand + Links */}
        <div className="py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 xl:col-span-4">
            <Link href="/" className="inline-block mb-5" aria-label="Afri-Bridge Home">
              <Image
                src="/images/logo-white.png"
                alt="Afri-Bridge"
                width={64}
                height={64}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Enterprise-grade freight forwarding, customs clearing, and cross-border
              logistics connecting businesses across the African continent.
            </p>

            {/* Contact Details */}
            <div className="space-y-2.5 text-sm mb-6">
              <a href="tel:+27115686712" className="flex items-center gap-2.5 text-gray-400 hover:text-emerald-400 transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0 text-emerald-500/60" />
                +27 11 568 6712
              </a>
              <a href="https://wa.me/27833910863" className="flex items-center gap-2.5 text-gray-400 hover:text-emerald-400 transition-colors">
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-emerald-500/60" />
                +27 83 391 0863
              </a>
              <a href="mailto:info@afribridge.co.za" className="flex items-center gap-2.5 text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-3.5 w-3.5 shrink-0 text-emerald-500/60" />
                info@afribridge.co.za
              </a>
              <div className="flex items-start gap-2.5 text-gray-400">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-emerald-500/60" />
                <span className="text-xs leading-relaxed">
                  Afri-Bridge House, West Street, Sandton,<br />Johannesburg, 2196, South Africa
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <Shield className="h-3 w-3 text-emerald-500" />
                SARS Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <Clock className="h-3 w-3 text-emerald-500" />
                24/7 Operations
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <Globe className="h-3 w-3 text-emerald-500" />
                Pan-African Logistics Network
              </span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-6 lg:pl-8 lg:border-l lg:border-white/8">
            {/* Company */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Services</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Platform</h4>
              <ul className="space-y-2">
                {platformLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 relative">
          <p>&copy; {new Date().getFullYear()} Afri-Bridge Global Logistics. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
