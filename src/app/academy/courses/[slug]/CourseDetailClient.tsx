'use client';

import Link from 'next/link';
import { Clock, Download, ArrowRight, CheckCircle, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { AcademyCourse } from '@/data/academyCourses';
import { AcademyPricingProvider } from '@/components/academy/AcademyPricingProvider';
import { CurrencySelector } from '@/components/academy/CurrencySelector';
import { PriceDisplay, PriceDisplayHighlight } from '@/components/academy/PriceDisplay';

function pricingSuffix(course: AcademyCourse): string {
  return course.pricingBasis === 'per programme' ? ' per programme' : ' per learner';
}

export function CourseDetailClient({ course, relatedCourses }: { course: AcademyCourse; relatedCourses: AcademyCourse[] }) {
  return (
    <AcademyPricingProvider>
      {/* Page Hero */}
      <div className="bg-[#0B1F3A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/academy" className="hover:text-white transition-colors">Academy</Link>
            <span>/</span>
            <Link href="/academy/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white font-medium">{course.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full ${course.categoryColor}`}>
              {course.category}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/10 text-gray-300">
              {course.programmeType}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/10 text-gray-300">
              {course.level}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                {course.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  {course.durationLabel}
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-emerald-400" />
                  {course.format}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3">
              <PriceDisplay amountZar={course.basePriceZar} suffix={pricingSuffix(course)} className="text-2xl font-bold text-white" />
              <CurrencySelector />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6 tracking-tight">Course Overview</h2>
                <div className="space-y-4">
                  {course.overview.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Who Should Attend */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6 tracking-tight">Who Should Attend</h2>
                <ul className="space-y-3">
                  {course.whoShouldAttend.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Learning Outcomes */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6 tracking-tight">Learning Outcomes</h2>
                <ul className="space-y-3">
                  {course.learningOutcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Course Modules */}
              <section>
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6 tracking-tight">Course Modules</h2>
                <div className="space-y-4">
                  {course.modules.map((module, i) => (
                    <div key={module.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#0B1F3A] mb-1">{module.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{module.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-5">Course Details</h3>

                  <div className="space-y-0 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Duration</span>
                      <span className="text-sm font-semibold text-[#0B1F3A]">{course.durationLabel}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Category</span>
                      <span className="text-sm font-semibold text-[#0B1F3A]">{course.category}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Level</span>
                      <span className="text-sm font-semibold text-[#0B1F3A]">{course.level}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Type</span>
                      <span className="text-sm font-semibold text-[#0B1F3A]">{course.programmeType}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Format</span>
                      <span className="text-sm font-semibold text-[#0B1F3A]">{course.format}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Price</span>
                      <PriceDisplayHighlight amountZar={course.basePriceZar} size="sm" />
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm text-gray-500">Certification</span>
                      <span className="text-xs font-semibold text-[#0B1F3A] text-right max-w-[180px]">{course.certification}</span>
                    </div>
                  </div>

                  {/* Upcoming Intakes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#0B1F3A] mb-3">Upcoming Intakes</h4>
                    <div className="space-y-2">
                      {course.intakeDates.map((date) => (
                        <div key={date} className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-3.5 w-3.5 text-emerald-600" />
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href={`/academy/register/${course.slug}`} className="block">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-12">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 font-semibold text-sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                    <Link href="/contact" className="block">
                      <Button variant="outline" className="w-full border-gray-300 text-gray-600 bg-transparent hover:bg-gray-50 font-semibold text-sm">
                        Contact Us
                      </Button>
                    </Link>
                  </div>

                  <p className="text-xs text-gray-400 mt-4">
                    Prices are displayed for convenience. Final billing may be processed in South African Rand unless otherwise agreed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Courses */}
          {relatedCourses.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8 tracking-tight">Related Courses in {course.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedCourses.map((related) => (
                  <Link key={related.slug} href={`/academy/courses/${related.slug}`} className="group">
                    <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-all">
                      <span className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${related.categoryColor}`}>
                        {related.programmeType}
                      </span>
                      <h3 className="text-base font-bold text-[#0B1F3A] mb-2 group-hover:text-emerald-600 transition-colors">{related.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{related.durationLabel}</span>
                        <PriceDisplayHighlight amountZar={related.basePriceZar} size="sm" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AcademyPricingProvider>
  );
}
