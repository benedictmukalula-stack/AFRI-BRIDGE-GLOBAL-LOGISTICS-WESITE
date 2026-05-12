'use client';

import { FileText, Truck, ShieldCheck } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Quote & Request',
    description:
      'Submit your shipment details through our platform and receive a competitive quote within 30 minutes from our logistics experts.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Ship & Track',
    description:
      'We handle all documentation, customs procedures, and carrier coordination while you monitor your cargo with real-time tracking.',
    icon: Truck,
  },
  {
    number: '03',
    title: 'Deliver & Compliance',
    description:
      'Your shipment is delivered on schedule with full regulatory compliance, complete documentation, and post-delivery support.',
    icon: ShieldCheck,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="How it works">
      {/* Subtle decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[600px] md:h-[600px] bg-emerald-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation scale>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Getting your goods moving across Africa is straightforward. Our streamlined process ensures
              efficiency at every step.
            </p>
          </div>
        </ScrollAnimation>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line (desktop) - enhanced with gradient */}
          <div className="hidden md:block absolute top-16 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollAnimation key={step.number} delay={i * 150} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'} scale>
                <div className="relative text-center group">
                  {/* Step Number Circle */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white mb-6 shadow-lg shadow-emerald-500/25 transition-shadow duration-300 group-hover:shadow-emerald-500/40">
                    <Icon className="h-8 w-8" />
                    <span className="absolute -top-1 -right-1 w-7 h-7 bg-[#0B1F3A] text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
