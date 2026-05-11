'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  GraduationCap,
  Clock,
  Users,
  Globe,
  Star,
  ClipboardCheck,
  PenTool,
  Truck,
  Search,
  Building2,
  BarChart3,
  Target,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

export default function ExecutiveProgrammesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/37-executive-programmes-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/academy" className="hover:text-white transition-colors">
              Academy
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Executive Programmes</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Executive &amp; Corporate Programmes
            </h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            High-impact programmes designed for senior leaders, C-suite executives, and
            decision-makers shaping the future of African logistics and trade. Develop strategic
            capabilities and drive transformation across your organisation.
          </p>
        </div>
      </div>

      {/* Featured Programmes */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Featured Executive Programmes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
              Intensive Programmes for Senior Leaders
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our executive programmes are intensive, cohort-based experiences that bring together
              senior leaders from across Africa. Each programme blends cutting-edge theory with
              practical application, case studies from African markets, and peer learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Supply Chain Leadership Intensive',
                duration: '5 Days',
                price: 'R 25,000',
                audience: 'For senior supply chain leaders',
                description:
                  'An immersive five-day programme covering supply chain strategy, digital transformation, resilience planning, and leadership in volatile markets. Designed for senior supply chain professionals leading teams and driving operational excellence across African trade corridors.',
                badge: 'Flagship',
              },
              {
                title: 'Strategic Logistics Management',
                duration: '3 Days',
                price: 'R 15,000',
                audience: 'For logistics directors',
                description:
                  'A focused three-day programme on strategic logistics management, network optimisation, cost-to-serve analysis, and logistics technology adoption. Ideal for logistics directors and senior managers responsible for overarching logistics strategy.',
                badge: 'Popular',
              },
              {
                title: 'Executive Trade Strategy Simulation',
                duration: '3 Days',
                price: 'R 15,000',
                audience: 'For C-suite and trade policy leaders',
                description:
                  'A unique simulation-based programme where executives navigate complex trade scenarios, negotiate trade agreements, and develop strategies for maximising value from African trade corridors and preferential trade agreements.',
                badge: 'Simulation',
              },
            ].map(({ title, duration, price, audience, description, badge }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                    {badge}
                  </span>
                  <GraduationCap className="h-5 w-5 text-emerald-600 shrink-0" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-emerald-600" />
                    {duration}
                  </span>
                  <span className="font-semibold text-emerald-700">{price}</span>
                </div>
                <p className="text-xs text-gray-400 italic">{audience}</p>
              </div>
            ))}
          </div>

          {/* Corporate Transformation Programmes */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2 text-center">
              Corporate Transformation Programmes
            </h3>
            <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
              End-to-end organisational transformation programmes designed to build sustainable
              capability within your company. These are large-scale, multi-week engagements
              tailored to your specific operational context.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Corporate Customs Transformation',
                  duration: '12 Weeks',
                  price: 'R 650,000 per programme',
                  description:
                    'Full organisational customs capability build. This comprehensive programme transforms your customs operations from reactive compliance to strategic trade management. Includes team assessment, custom curriculum design, on-site and virtual delivery, and post-programme support.',
                },
                {
                  title: 'Logistics Excellence Programme',
                  duration: '6 Weeks',
                  price: 'R 350,000 per programme',
                  description:
                    'Operational excellence across logistics functions. A targeted programme that drives measurable improvement in logistics operations including warehousing, transportation, inventory management, and customer service. Built around your KPIs and operational targets.',
                },
              ].map(({ title, duration, price, description }) => (
                <div
                  key={title}
                  className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-[#0B1F3A]">{title}</h4>
                    <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-1 rounded-full shrink-0 ml-3">
                      Enterprise
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      {duration}
                    </span>
                    <span className="font-semibold text-emerald-700">{price}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 text-center">
              How It Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  icon: ClipboardCheck,
                  title: 'Assessment',
                  desc: 'We assess your leadership team\'s current capabilities, strategic challenges, and development objectives through confidential interviews and diagnostic tools.',
                },
                {
                  step: '02',
                  icon: PenTool,
                  title: 'Design',
                  desc: 'Our faculty designs a bespoke programme tailored to your industry context, competitive landscape, and the specific strategic outcomes you want to achieve.',
                },
                {
                  step: '03',
                  icon: Truck,
                  title: 'Delivery',
                  desc: 'Programme is delivered through a mix of intensive in-person sessions, simulation exercises, peer learning groups, and executive coaching.',
                },
                {
                  step: '04',
                  icon: Search,
                  title: 'Review',
                  desc: 'Post-programme evaluation measures impact on leadership effectiveness, strategic decision-making, and organisational performance against defined KPIs.',
                },
              ].map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {step}
                  </div>
                  <Icon className="h-6 w-6 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-bold text-[#0B1F3A] mb-2">{title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '50+', label: 'Executive Cohorts', icon: Users },
              { value: '15+', label: 'Countries Represented', icon: Globe },
              { value: '95%', label: 'Satisfaction Rate', icon: Star },
              { value: '200+', label: 'C-Suite Alumni', icon: Building2 },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center p-6 rounded-xl bg-emerald-50">
                <Icon className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-emerald-700">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#122d52] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Elevate Your Leadership?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Explore our full course catalogue or contact our executive programmes team to design a
            custom programme for your leadership team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy/courses">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">
                View Full Catalogue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12"
              >
                Request Custom Programme
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
