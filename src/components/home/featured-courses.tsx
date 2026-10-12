"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Filter } from "lucide-react";
import { CourseCard } from "@/components/courses/course-card";
import { COURSES } from "@/lib/data";

export function FeaturedCourses() {
  const [filter, setFilter] = useState<"ALL" | "FREE" | "PAID" | "UPCOMING">("ALL");

  const filteredCourses = COURSES.filter((course) => {
    if (filter === "FREE") return course.isFree;
    if (filter === "PAID") return !course.isFree && course.status === "PUBLISHED";
    if (filter === "UPCOMING") return course.status === "UPCOMING";
    return true;
  });

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200/60 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Learning Programs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Featured Courses & Masterclasses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              High-impact, project-driven curriculums architected from real production patterns. Free fundamentals and advanced masterclasses.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/60 text-xs font-medium self-start md:self-auto">
            {(["ALL", "FREE", "PAID", "UPCOMING"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter === tab
                    ? "bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab === "ALL" && "All Courses"}
                {tab === "FREE" && "Free Courses"}
                {tab === "PAID" && "Paid Masterclasses"}
                {tab === "UPCOMING" && "Upcoming"}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 shadow-sm transition-all group"
          >
            <span>Browse Complete Catalog ({COURSES.length} Courses)</span>
            <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
