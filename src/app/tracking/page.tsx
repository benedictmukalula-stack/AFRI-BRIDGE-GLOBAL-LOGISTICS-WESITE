'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Circle, Loader2 } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const trackingSteps = [
  { label: 'Booking Confirmed', status: 'completed' as const },
  { label: 'Cargo Collected', status: 'completed' as const },
  { label: 'In Transit', status: 'current' as const },
  { label: 'Customs Clearance', status: 'pending' as const },
  { label: 'Out for Delivery', status: 'pending' as const },
  { label: 'Delivered', status: 'pending' as const },
];

export default function TrackingPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/12-tracking-hero.png"
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
            <span className="text-white font-medium">Track Shipment</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Track Your Shipment</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Enter your shipment reference or container number to get real-time tracking information across all African trade corridors.</p>
        </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">

            {/* Tracking Form */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm mb-10">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="shipment-ref" className="text-sm font-medium text-gray-700 mb-2 block">
                    Shipment Reference
                  </Label>
                  <Input
                    id="shipment-ref"
                    type="text"
                    placeholder="e.g., AFB-2026-00123"
                    className="h-11"
                  />
                </div>
                <div>
                  <Label htmlFor="container-num" className="text-sm font-medium text-gray-700 mb-2 block">
                    Container Number
                  </Label>
                  <Input
                    id="container-num"
                    type="text"
                    placeholder="e.g., MSKU1234567"
                    className="h-11"
                  />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12">
                  Track Shipment
                </Button>
              </div>
            </div>

            {/* Mock Status Timeline */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-[#0B1F3A] mb-6">Shipment Status</h2>
              <div className="space-y-0">
                {trackingSteps.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4 relative">
                    {/* Connector line */}
                    {i < trackingSteps.length - 1 && (
                      <div
                        className={`absolute left-[17px] top-[34px] w-0.5 h-8 ${
                          step.status === 'completed' ? 'bg-emerald-500' : 'bg-gray-200'
                        }`}
                      />
                    )}
                    {/* Icon */}
                    <div className="relative z-10 mt-0.5">
                      {step.status === 'completed' && (
                        <CheckCircle className="h-9 w-9 text-emerald-500" />
                      )}
                      {step.status === 'current' && (
                        <div className="relative">
                          <Loader2 className="h-9 w-9 text-blue-500 animate-pulse" />
                          <span className="absolute inset-0 flex items-center justify-center">
                            <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                          </span>
                        </div>
                      )}
                      {step.status === 'pending' && (
                        <Circle className="h-9 w-9 text-gray-300" />
                      )}
                    </div>
                    {/* Label */}
                    <div className="pb-8">
                      <p className={`text-sm font-semibold ${
                        step.status === 'completed'
                          ? 'text-emerald-600'
                          : step.status === 'current'
                          ? 'text-blue-600'
                          : 'text-gray-400'
                      }`}>
                        {step.label}
                      </p>
                      {step.status === 'current' && (
                        <p className="text-xs text-gray-500 mt-1">Estimated arrival: 3-5 business days</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help CTA */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-2">Need help? Contact our Operations Center</p>
              <a
                href="tel:+27115686712"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +27 11 568 6712
              </a>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
