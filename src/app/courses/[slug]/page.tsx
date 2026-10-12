import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Play, 
  HelpCircle, 
  ArrowRight,
  Sparkles,
  Lock,
  Globe,
  Share2
} from "lucide-react";
import { COURSES, GYADEEN } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { CourseCard } from "@/components/courses/course-card";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const isUpcoming = course.status === "UPCOMING";
  const relatedCourses = COURSES.filter((c) => c.id !== course.id).slice(0, 2);

  return (
    <div className="min-h-screen py-10 sm:py-14 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-slate-900 dark:hover:text-white">
            Courses
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-medium truncate">
            {course.title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column (Left) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Header / Overview */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  {course.category}
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {course.level}
                </span>
                {course.isFree ? (
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    100% Free
                  </span>
                ) : (
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    Pro Masterclass
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {course.subtitle}
              </p>

              {/* Meta metrics */}
              <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span>{course.rating.toFixed(2)}</span>
                  <span className="text-slate-400 font-normal">
                    ({course.reviewsCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span>
                    {course.studentsCount > 0
                      ? `${course.studentsCount.toLocaleString()} enrolled`
                      : "Coming soon"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{course.durationHours} hours on-demand</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span>English (with subtitles & code)</span>
                </div>
              </div>
            </div>

            {/* Video Preview / Hero Image */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl group">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <Link
                href={`/learn/${course.slug}`}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sky-500/90 hover:bg-sky-400 text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                </div>
              </Link>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md">
                  Preview Free Lessons
                </span>
                <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md font-mono">
                  1080p Full HD
                </span>
              </div>
            </div>

            {/* What you will learn */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>What You Will Master</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Description */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Course Description
              </h2>
              <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{course.description}</p>
              </div>
            </div>

            {/* Curriculum Accordion */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-sky-500" />
                  <span>Curriculum & Lessons</span>
                </h2>
                <span className="text-xs text-slate-500">
                  {course.modules.length} modules • {course.lessonsCount} lessons
                </span>
              </div>

              <div className="space-y-3">
                {course.modules.length === 0 ? (
                  <div className="p-6 rounded-xl bg-slate-100 dark:bg-slate-900 text-center text-xs text-slate-500">
                    Curriculum outline is finalizing for launch. Enroll now for instant early notifications.
                  </div>
                ) : (
                  course.modules.map((mod) => (
                    <div
                      key={mod.id}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                    >
                      <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {mod.title}
                        </span>
                        <span className="text-xs text-slate-400">
                          {mod.lessons.length} lessons
                        </span>
                      </div>
                      <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {mod.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="px-5 py-3 flex items-center justify-between text-xs hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              {lesson.isFreePreview ? (
                                <Play className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                              ) : (
                                <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              )}
                              <span className="font-medium text-slate-800 dark:text-slate-200">
                                {lesson.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              {lesson.isFreePreview && (
                                <Link
                                  href={`/learn/${course.slug}?lesson=${lesson.slug}`}
                                  className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                                >
                                  Preview
                                </Link>
                              )}
                              <span className="text-slate-400 font-mono">
                                {lesson.durationMin}m
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Prerequisites & Requirements */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Requirements & Prerequisites
              </h2>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {course.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                <span>Frequently Asked Questions</span>
              </h2>
              <div className="space-y-3">
                {course.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Bio */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                <Image
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {course.instructor.name}
                    </h3>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                      {course.instructor.headline}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {course.instructor.bio}
                </p>
                <div className="pt-1">
                  <a
                    href={course.instructor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-sky-500 hover:underline"
                  >
                    Connect with Gyadeen on LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Right Column (Enrollment / Pricing Card) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              {/* Pricing Box */}
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Access & Enrollment
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  {isUpcoming ? (
                    <span className="text-2xl font-black text-amber-500">
                      COMING SOON
                    </span>
                  ) : course.isFree ? (
                    <span className="text-3xl font-black text-emerald-500">
                      100% FREE
                    </span>
                  ) : (
                    <>
                      <span className="text-3xl font-black text-slate-900 dark:text-white">
                        {formatCurrency(course.discountPrice || course.price, course.currency)}
                      </span>
                      {course.discountPrice && (
                        <span className="text-sm line-through text-slate-400">
                          {formatCurrency(course.price, course.currency)}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {!course.isFree && !isUpcoming && (
                  <p className="text-[11px] text-emerald-500 font-medium mt-1">
                    Special promotional launch rate applied (40% OFF)
                  </p>
                )}
              </div>

              {/* Primary Action Button */}
              <div className="space-y-3">
                {isUpcoming ? (
                  <button className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-500/20 transition-all cursor-pointer">
                    Notify Me on Launch
                  </button>
                ) : course.isFree ? (
                  <Link
                    href={`/learn/${course.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <span>Start Learning (Free)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    href={`/learn/${course.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-cyan-500 hover:from-sky-600 hover:to-indigo-700 shadow-lg shadow-sky-500/20 transition-all"
                  >
                    <span>Enroll Now (Instant Access)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                <p className="text-center text-[11px] text-slate-400">
                  30-day money-back guarantee • Lifetime updates
                </p>
              </div>

              {/* Highlights included */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 text-sky-500" />
                  <span>{course.durationHours} hours HD video content</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                  <span>{course.lessonsCount} practical code lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verifiable certificate of completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Full source code repository access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Related Courses You May Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
