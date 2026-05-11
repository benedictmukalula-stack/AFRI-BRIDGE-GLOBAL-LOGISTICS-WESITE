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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const stats = [
  { icon: BookOpen, value: '10+', label: 'Courses' },
  { icon: Layers, value: '6', label: 'Categories' },
  { icon: Award, value: '500+', label: 'Graduates' },
];

const categories = [
  'Customs & Clearing',
  'Freight Forwarding',
  'Maritime & Shipping',
  'Oil & Gas Logistics',
  'Mining Logistics',
  'Trade Compliance',
  'Warehousing',
  'Transport & Fleet',
  'Digital Logistics & ATLAS',
  'Executive Programmes',
];

const courseSlugs = ['customs-clearance-fundamentals', 'freight-forwarding-professional', 'oil-gas-logistics-management'];

const courses = [
  {
    title: 'Customs Clearance Fundamentals',
    slug: 'customs-clearance-fundamentals',
    category: 'Customs & Clearing',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    description:
      'Master SARS customs procedures, tariff classification, and duty calculation for seamless border crossings.',
    duration: '3 Days',
    price: 'R 15,000 per learner',
  },
  {
    title: 'Freight Forwarding Professional',
    slug: 'freight-forwarding-professional',
    category: 'Freight Forwarding',
    categoryColor: 'bg-sky-100 text-sky-700',
    description:
      'Comprehensive freight forwarding covering air, ocean, and road transport documentation and operations.',
    duration: '5 Days',
    price: 'R 25,000 per learner',
  },
  {
    title: 'Oil & Gas Logistics Management',
    slug: 'oil-gas-logistics-management',
    category: 'Oil & Gas Logistics',
    categoryColor: 'bg-orange-100 text-orange-700',
    description:
      'Specialised logistics for the oil and gas sector including rig moves, pipe transport, and HAZMAT.',
    duration: '4 Days',
    price: 'R 20,000 per learner',
  },
];

export function AcademySection() {
  return (
    <section id="academy" className="py-20 lg:py-28 bg-gray-50" aria-label="Afri-Bridge Academy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <ScrollAnimation direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/photography/v2/09-academy-hero.png"
                  alt="Afri-Bridge Academy Platform"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-1">Afri-Bridge Academy</h3>
                  <p className="text-sm text-gray-300">Learn. Certify. Excel.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation direction="left">
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                Professional Training
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4 tracking-tight">
                Afri-Bridge Academy
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Build your expertise in African trade and logistics with our professional training programmes.
                From customs regulations to supply chain management, our courses are designed by industry
                experts for real-world application.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 sm:gap-8 mb-10">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label}>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="h-5 w-5 text-emerald-600" />
                        <span className="text-3xl font-bold text-[#0B1F3A]">{stat.value}</span>
                      </div>
                      <span className="text-sm text-gray-400">{stat.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/academy/courses">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                    Browse Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-emerald-600 text-emerald-700 bg-transparent hover:bg-emerald-50 font-semibold">
                    Corporate Training
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Course Categories */}
        <ScrollAnimation>
          <div className="mb-12">
            <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Course Categories</h3>
            <div className="flex flex-wrap gap-2 md:flex-nowrap md:overflow-x-auto md:pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="shrink-0 inline-flex items-center px-4 py-2 text-sm font-medium text-[#0B1F3A] bg-white border border-gray-200 rounded-full hover:border-emerald-600 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Featured Courses Grid */}
        <ScrollAnimation>
          <div className="mb-12">
            <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">Featured Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, i) => (
                <ScrollAnimation key={course.title} delay={i * 100}>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Category Badge */}
                    <span className={`inline-flex self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${course.categoryColor}`}>
                      {course.category}
                    </span>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-[#0B1F3A] mb-2">{course.title}</h4>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{course.description}</p>

                    {/* Duration & Price */}
                    <div className="flex items-center gap-4 mb-5 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        {course.duration}
                      </span>
                      <span className="font-semibold text-[#0B1F3A]">{course.price}</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-2">
                      <Link href={`/academy/courses/${course.slug}`}>
                        <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 text-sm font-semibold">
                          View Course Details
                        </Button>
                      </Link>
                      <Link href={`/academy/register/${course.slug}`}>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold">
                          Register Now
                        </Button>
                      </Link>
                      <Link href="/academy/courses">
                        <Button variant="ghost" className="w-full text-gray-600 hover:text-emerald-600 text-sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Brochure
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Corporate Training */}
        <ScrollAnimation>
          <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
            <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Corporate Training</h3>
            <p className="text-gray-500 leading-relaxed mb-4 max-w-xl mx-auto">
              Tailored training programmes for your team, delivered on-site or at our facilities.
              Customised content to address your organisation&apos;s specific logistics and trade challenges.
            </p>
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                Request Corporate Training
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-xs text-gray-400 mt-4">
              Base rate: R 5,000 per learner per training day
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
