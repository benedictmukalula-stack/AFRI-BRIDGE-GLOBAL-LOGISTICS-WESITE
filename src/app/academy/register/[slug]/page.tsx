import Link from 'next/link';
import { SiteLayout } from '@/components/SiteLayout';
import { getCourseBySlug, allCourseSlugs } from '@/data/academyCourses';
import { RegistrationForm } from './RegistrationForm';

export function generateStaticParams() {
  return allCourseSlugs.map((slug) => ({ slug }));
}

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = 'then' in params ? await params : params;
  const course = getCourseBySlug(resolvedParams.slug);

  if (!course) {
    return (
      <SiteLayout>
        <div className="bg-[#0B1F3A] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Course Not Found</h1>
            <Link href="/academy/courses" className="text-emerald-400 hover:underline">
              Back to Courses
            </Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <RegistrationForm course={course} />
    </SiteLayout>
  );
}
