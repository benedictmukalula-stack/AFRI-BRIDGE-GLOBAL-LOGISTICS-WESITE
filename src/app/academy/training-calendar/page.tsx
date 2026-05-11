'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Clock, Users, Monitor, Star, Filter } from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';

const courses = [
  { title: 'Customs Compliance Bootcamp', date: '15–17 Jul 2026', location: 'Johannesburg', type: 'In-Person', duration: '3 Days', price: 'R 12,500', seats: 8, hot: true },
  { title: 'Freight Forwarding Fundamentals', date: '22–26 Jul 2026', location: 'Johannesburg', type: 'In-Person', duration: '5 Days', price: 'R 18,500', seats: 15, hot: false },
  { title: 'Cross-Border Trade Management', date: '5–8 Aug 2026', location: 'Virtual', type: 'Virtual', duration: '4 Days', price: 'R 9,900', seats: 25, hot: false },
  { title: 'Dangerous Goods Handling (Air)', date: '19–20 Aug 2026', location: 'Johannesburg', type: 'In-Person', duration: '2 Days', price: 'R 8,500', seats: 12, hot: false },
  { title: 'Supply Chain Management Essentials', date: '1–3 Sep 2026', location: 'Cape Town', type: 'In-Person', duration: '3 Days', price: 'R 11,000', seats: 20, hot: false },
  { title: 'Tariff Classification Masterclass', date: '15 Sep 2026', location: 'Virtual', type: 'Virtual', duration: '1 Day', price: 'R 3,500', seats: 40, hot: false },
  { title: 'Mining Logistics Operations', date: '22–24 Sep 2026', location: 'Johannesburg', type: 'In-Person', duration: '3 Days', price: 'R 14,500', seats: 10, hot: false },
  { title: 'Oil & Gas Logistics', date: '6–8 Oct 2026', location: 'Virtual', type: 'Virtual', duration: '3 Days', price: 'R 9,900', seats: 30, hot: false },
  { title: 'Export Documentation Workshop', date: '20 Oct 2026', location: 'Durban', type: 'In-Person', duration: '1 Day', price: 'R 4,500', seats: 18, hot: false },
  { title: 'Incoterms 2020 Intensive', date: '3 Nov 2026', location: 'Virtual', type: 'Virtual', duration: '1 Day', price: 'R 3,900', seats: 35, hot: false },
];

export default function TrainingCalendarPage() {
  return (
    <SiteLayout>
      <div className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/photography/v2/40-training-calendar-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/academy" className="hover:text-white transition-colors">Academy</Link><span>/</span>
            <span className="text-white font-medium">Training Calendar</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-600/20 flex items-center justify-center"><Calendar className="h-7 w-7 text-emerald-400" /></div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Training Calendar</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">Browse upcoming training sessions and register online. Choose from in-person workshops in Johannesburg, Cape Town, and Durban, or join our virtual sessions from anywhere in the world.</p>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured course */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 lg:p-8 mb-12 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-bold uppercase tracking-wider">Featured Upcoming Course</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">{courses[0].title}</h2>
                <p className="text-emerald-100 leading-relaxed mb-4">Comprehensive three-day customs compliance training covering SARS procedures, tariff classification, valuation methods, origin determination, and preferential trade agreements. Includes practical exercises using real customs entries and case studies from African border posts.</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-full"><Calendar className="h-3.5 w-3.5" />{courses[0].date}</span>
                  <span className="flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-full"><MapPin className="h-3.5 w-3.5" />{courses[0].location}</span>
                  <span className="flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-full"><Clock className="h-3.5 w-3.5" />{courses[0].duration}</span>
                </div>
              </div>
              <div className="text-center lg:text-right flex flex-col justify-between">
                <div>
                  <p className="text-3xl font-bold">{courses[0].price}</p>
                  <p className="text-sm text-emerald-200 mb-4">Only {courses[0].seats} seats remaining</p>
                </div>
                <Link href="/academy/register/customs-clearance-fundamentals"><Button className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-6 h-11">Register Now</Button></Link>
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 mb-8">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-500">Filter:</span>
            {['All Courses', 'In-Person', 'Virtual'].map((tab, i) => (
              <span key={tab} className={`text-xs px-3 py-1.5 rounded-full font-semibold cursor-pointer transition-colors ${i === 0 ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{tab}</span>
            ))}
          </div>

          {/* Course list */}
          <div className="space-y-4">
            {courses.slice(1).map((course) => (
              <div key={course.title} className="p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0B1F3A] mb-1">{course.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{course.date}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{course.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
                      <span className={`flex items-center gap-1 px-2 py-0.5 rounded ${course.type === 'Virtual' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                        {course.type === 'Virtual' ? <Monitor className="h-3 w-3" /> : <Users className="h-3 w-3" />}{course.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <p className="text-lg font-bold text-[#0B1F3A]">{course.price}</p>
                      <p className="text-xs text-gray-400">{course.seats} seats left</p>
                    </div>
                    <Link href="/academy/register/customs-clearance-fundamentals"><Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold text-sm whitespace-nowrap">Register</Button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* In-house */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">Need In-House Training?</h3>
            <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-6">We deliver any of our courses at your premises, customised to your team and operations. In-house training is cost-effective for groups of 6 or more and can be scheduled at your convenience.</p>
            <Link href="/contact"><Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12">Request In-House Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
