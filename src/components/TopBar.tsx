'use client';

import { Phone, Mail, Shield, Clock, MessageCircle } from 'lucide-react';

export function TopBar() {
  return (
    <div className="hidden lg:block text-white text-xs relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#122d52] to-[#0B1F3A]" />
      <div className="absolute inset-0 opacity-[0.04] bg-dots" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <a
            href="tel:+27115686712"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Phone className="h-3 w-3" />
            <span>+27 11 568 6712</span>
          </a>
          <a
            href="https://wa.me/27833910863"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="h-3 w-3" />
            <span>+27 83 391 0863 (WhatsApp)</span>
          </a>
          <a
            href="mailto:info@afribridge.co.za"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Mail className="h-3 w-3" />
            <span>info@afribridge.co.za</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 glass px-2.5 py-1 rounded-full text-[11px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            24/7 Operations Center
          </span>
          <span className="flex items-center gap-1.5 glass px-2.5 py-1 rounded-full text-[11px]">
            <Shield className="h-3 w-3 text-emerald-400" />
            SARS Certified
          </span>
        </div>
      </div>
    </div>
  );
}
