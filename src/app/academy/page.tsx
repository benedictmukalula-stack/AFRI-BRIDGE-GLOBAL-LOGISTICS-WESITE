'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  Layers,
  Award,
  Clock,
  Download,
  Building2,
  Users,
  GraduationCap,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { getAllCategories } from '@/data/academyCourses';

const stats = [
  { icon: BookOpen, value: '50', label: 'Courses' },
  { icon: Layers, value: '10', label: 'Categories' },
  { icon: Award, value: '5', label: 'Certifications' },
  { icon: Users, value: '500+', label: 'Graduates' },
];

const categories = getAllCategories();

const categoryIcons: Record<string, string> = {
  'Customs & Clearing': '🛃',
  'Freight Forwarding & Logistics': '🚢',
  'Maritime & Shipping': '⚓',
  'Oil & Gas Logistics': '🛢️',
  'Mining & Industrial Logistics': '⛏️',
  'Trade Compliance & Documentation': '📋',
  'Warehousing & Inventory': '🏭',
  'Transport & Fleet Management': '🚛',
  'Digital Logistics & ATLAS': '💻',
  'Executive & Corporate Programmes': '🎓',
};

export default function AcademyPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/photography/v2/09-academy-hero.png"
          alt=""
          width={1672}
          height={941}
          priority
          className="w-full h-auto brightness-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/55 via-[#0B1F3A]/45 to-emerald-900/45" />
        <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-gray-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Academy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Afri-Bridge Academy
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
            Build your expertise in African trade and logistics with our professional training programmes.
            From customs regulations to supply chain leadership, our 50 courses across 10 categories are designed by industry
            experts for real-world application in African markets.
          </p>
        </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-16">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon className="h-6 w-6 text-emerald-600" />
                    <span className="text-4xl font-bold text-[#0B1F3A]">{stat.value}</span>
                  </div>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              );
            })}
          </div>

          {/* Course Categories */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-3 text-center tracking-tight">
              10 Course Categories
            </h2>
            <p className="text-gray-500 text-center mb-8">Five courses per category. Short courses, certificates, and corporate programmes.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href="/academy/courses"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-emerald-600 hover:shadow-md transition-all group"
                >
                  <span className="text-xl">{categoryIcons[cat] || '📚'}</span>
                  <span className="text-sm font-medium text-[#0B1F3A] group-hover:text-emerald-600 transition-colors">{cat}</span>
                  <span className="ml-auto text-xs text-gray-400 font-medium">5 courses</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Programme Types */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mb-3 text-center tracking-tight">
              Programme Types
            </h2>
            <p className="text-gray-500 text-center mb-8">Choose the learning format that fits your career goals.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Short Courses', desc: '1 to 5-day intensive programmes for immediate skills development. In-person, virtual, or hybrid formats.', price: 'R 5,000/day' },
                { title: 'Certificates', desc: '4 to 12-week professional certification programmes with proctored examinations and industry-recognised credentials.', price: 'From R 35,000' },
                { title: 'Corporate', desc: 'Tailored organisational transformation programmes delivered on-site. Custom curriculum for your team and operations.', price: 'From R 350,000' },
              ].map(({ title, desc, price }) => (
                <div key={title} className="p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow text-center">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{desc}</p>
                  <p className="text-sm font-bold text-emerald-600">{price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Training */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/academy-platform.png"
                  alt="Afri-Bridge Academy Platform"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-1">Corporate Training</h3>
                  <p className="text-sm text-gray-300">Tailored programmes for your team</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-emerald-600" />
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600">
                  CORPORATE TRAINING
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
                Training for Your Team
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Tailored training programmes for your team, delivered on-site or at our facilities.
                Customised content to address your organisation&apos;s specific logistics and trade challenges.
                From one-day workshops to comprehensive 12-week transformation programmes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Award className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  Customised content aligned to your business needs
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Clock className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  Flexible scheduling: weekdays, weekends, or intensive blocks
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Download className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  Certificates of completion for all participants
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <GraduationCap className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  Professional certifications for advanced programmes
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/academy/corporate-training">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                    Corporate Training <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/academy/executive-programmes">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold">
                    Executive Programmes
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Base rate: R 5,000 per learner per training day
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="bg-gradient-to-r from-[#0B1F3A] to-[#059669] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Start Your Learning Journey
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Browse all 50 courses in our catalogue, explore certifications, or get in touch about customised corporate training for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy/courses">
              <Button className="bg-white text-[#0B1F3A] hover:bg-gray-100 font-semibold px-8 h-12">
                Browse Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/academy/certifications">
              <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">
                View Certifications
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12">
                Corporate Training
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
