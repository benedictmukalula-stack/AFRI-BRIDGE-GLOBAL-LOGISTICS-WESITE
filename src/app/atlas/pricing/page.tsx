'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, X, Star, Zap, Building, HelpCircle } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function AtlasPricingPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/31-atlas-pricing-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/atlas" className="hover:text-white transition-colors">ATLAS</Link><span>/</span>
            <span className="text-white font-medium">Pricing</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center"><Zap className="h-7 w-7 text-emerald-400" /></div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">ATLAS Pricing</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Flexible plans designed for every business size. Start free, upgrade as you grow. All plans include access to the ATLAS platform with African trade intelligence, corridor analytics, and logistics tools.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">Simple, Transparent Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">Choose Your Plan</h2>
            <p className="text-gray-500 text-lg leading-relaxed">No hidden fees. No long-term contracts. Upgrade or downgrade at any time. All prices are in USD and exclude applicable VAT.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Starter */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Starter</h3>
              <p className="text-sm text-gray-500 mb-4">For individual users and small businesses getting started with trade intelligence.</p>
              <div className="mb-6"><span className="text-4xl font-bold text-[#0B1F3A]">Free</span></div>
              <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold mb-6">Start Free</Button>
              <ul className="space-y-3">
                {['Basic trade data &amp; news', '5 corridor reports per month', 'Email alerts for 3 routes', 'Community forum access', 'Basic rate estimator tool', 'Single user account'].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
            </div>

            {/* Professional */}
            <div className="p-8 rounded-2xl border-2 border-emerald-600 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Professional</h3>
              <p className="text-sm text-gray-500 mb-4">For growing businesses that need comprehensive trade intelligence and analytics.</p>
              <div className="mb-6"><span className="text-4xl font-bold text-emerald-600">$299</span><span className="text-sm text-gray-500">/month</span></div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold mb-6">Start 14-Day Free Trial</Button>
              <ul className="space-y-3">
                {['Everything in Starter', '50 corridor reports per month', 'Real-time border wait times', 'API access (1,000 calls/month)', 'Priority email support', 'Intelligence feeds &amp; analysis', 'Duty calculator &amp; HS validator', '5 user accounts', 'Export reports to PDF/Excel'].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow bg-[#0B1F3A] text-white">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-sm text-gray-400 mb-4">For large organisations requiring custom solutions, dedicated support, and unlimited access.</p>
              <div className="mb-6"><span className="text-4xl font-bold text-emerald-400">Custom</span></div>
              <Button variant="outline" className="w-full border-emerald-400 text-emerald-400 bg-transparent hover:bg-emerald-400/10 font-semibold mb-6">Contact Sales</Button>
              <ul className="space-y-3">
                {['Everything in Professional', 'Unlimited reports &amp; data', 'Dedicated account manager', 'Custom API integration', 'SLA guarantee (99.9%)', 'On-site training &amp; onboarding', 'Custom dashboard &amp; reports', 'Unlimited user accounts', 'White-label options'].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300"><CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                { q: 'Can I switch plans at any time?', a: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you will be charged the prorated difference. When downgrading, the credit will be applied to your next billing cycle.' },
                { q: 'Is there a free trial for the Professional plan?', a: 'Yes, the Professional plan includes a 14-day free trial with full access to all features. No credit card is required to start your trial. You will only be charged after the trial ends.' },
                { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), bank transfers (EFT), and PayPal. For Enterprise plans, we also support purchase orders and annual invoicing.' },
                { q: 'Do you offer discounts for annual billing?', a: 'Yes, annual billing comes with a 20% discount compared to monthly billing. Enterprise plans are custom-priced and include volume-based discounts for multiple users or locations.' },
              ].map(({ q, a }) => (
                <div key={q} className="p-5 rounded-lg bg-gray-50">
                  <h4 className="font-bold text-[#0B1F3A] text-sm mb-2">{q}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Ready to Get Started?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">Start with the free Starter plan or try Professional free for 14 days. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">Contact Sales</Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
