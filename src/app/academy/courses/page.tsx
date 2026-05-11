'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import {
  ArrowRight,
  Clock,
  Download,
  Filter,
  Search,
} from 'lucide-react';
import { SiteLayout } from '@/components/SiteLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { courses, getAllCategories, getCoursesByCategory } from '@/data/academyCourses';
import type { AcademyCourse } from '@/data/academyCourses';
import { AcademyPricingProvider } from '@/components/academy/AcademyPricingProvider';
import { CurrencySelector } from '@/components/academy/CurrencySelector';
import { PriceDisplay } from '@/components/academy/PriceDisplay';

function pricingSuffix(course: AcademyCourse): string {
  return course.pricingBasis === 'per programme' ? ' per programme' : ' per learner';
}

export default function CoursesPage() {
  const categories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = useMemo(() => {
    let result = courses;
    if (selectedCategory !== 'All') {
      result = result.filter(c => c.category === selectedCategory);
    }
    if (selectedLevel !== 'All') {
      result = result.filter(c => c.level === selectedLevel);
    }
    if (selectedType !== 'All') {
      result = result.filter(c => c.programmeType === selectedType);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedCategory, selectedLevel, selectedType, searchQuery]);

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const types = ['All', 'Short Course', 'Certificate', 'Corporate Programme'];

  return (
    <SiteLayout>
      <AcademyPricingProvider>
        {/* Page Hero */}
        <div className="relative py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0">
          <Image src="/images/photography/v2/39-courses-hero.png" alt="" fill className="object-cover brightness-110" unoptimized />
        </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/40 to-slate-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/academy" className="hover:text-white transition-colors">Academy</Link>
              <span>/</span>
              <span className="text-white font-medium">Courses</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Course Catalogue
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              50 professional training programmes across 10 categories. Short courses, professional certifications, and corporate programmes designed for African trade and logistics professionals.
            </p>
            <div className="mt-6">
              <CurrencySelector />
            </div>
          </div>
        </div>

        {/* Filters & Course Cards */}
        <div className="bg-gray-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <div className="mb-8">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search courses by title, category, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11 bg-white border-gray-200"
                />
              </div>
            </div>

            {/* Filter pills */}
            <div className="space-y-4 mb-10">
              {/* Category filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="h-4 w-4 text-gray-400 shrink-0" />
                <span className="text-sm font-medium text-gray-500 shrink-0">Category:</span>
                {['All', ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3 py-1.5 rounded-full font-semibold cursor-pointer transition-colors ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {/* Level & Type filters */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Level:</span>
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`text-xs px-3 py-1.5 rounded-full font-semibold cursor-pointer transition-colors ${
                        selectedLevel === level
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Type:</span>
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`text-xs px-3 py-1.5 rounded-full font-semibold cursor-pointer transition-colors ${
                        selectedType === type
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-6">
              Showing <strong>{filteredCourses.length}</strong> of {courses.length} courses
            </p>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.slug}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  {/* Category & Type badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full ${course.categoryColor}`}>
                      {course.category}
                    </span>
                    <span className={`inline-flex text-xs font-semibold px-2 py-0.5 rounded ${
                      course.programmeType === 'Certificate'
                        ? 'bg-amber-100 text-amber-700'
                        : course.programmeType === 'Corporate Programme'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-100 text-gray-600'
                    }`}>
                      {course.programmeType}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-[#0B1F3A] mb-2">{course.title}</h2>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{course.shortDescription}</p>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      {course.durationLabel}
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{course.level}</span>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{course.format}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-5">
                    <PriceDisplay amountZar={course.basePriceZar} suffix={pricingSuffix(course)} />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2">
                    <Link href={`/academy/courses/${course.slug}`} className="block">
                      <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 text-sm font-semibold">
                        View Course Details
                      </Button>
                    </Link>
                    <Link href={`/academy/register/${course.slug}`} className="block">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold">
                        Register Now
                      </Button>
                    </Link>
                    <Button variant="ghost" className="w-full text-gray-600 hover:text-emerald-600 text-sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No courses match your filters. Try adjusting your search criteria.</p>
              </div>
            )}

            {/* Base Rate Note */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-white rounded-xl border border-gray-100 px-6 py-4 shadow-sm">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-[#0B1F3A]">Base rate:</span> R 5,000 per learner per training day &middot; All prices in ZAR &middot; No hidden fees
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Prices are displayed for convenience. Final billing may be processed in South African Rand unless otherwise agreed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AcademyPricingProvider>
    </SiteLayout>
  );
}
