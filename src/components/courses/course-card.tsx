"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Clock, Users, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { Course } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const isUpcoming = course.status === "UPCOMING";

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-500/50 dark:hover:border-sky-500/50 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
            {course.category}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          {isUpcoming ? (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-amber-500/90 backdrop-blur-md text-white shadow-md">
              COMING SOON
            </span>
          ) : course.isFree ? (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/90 backdrop-blur-md text-white shadow-md">
              FREE
            </span>
          ) : (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-sky-500/90 backdrop-blur-md text-white shadow-md">
              PRO
            </span>
          )}
        </div>

        {/* Level indicator */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[11px] font-medium text-slate-200 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
            {course.level}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-1.5">
          {course.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-sky-500 transition-colors">
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>

        {/* Subtitle / Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed flex-1">
          {course.subtitle}
        </p>

        {/* Metadata: Duration, Students, Rating */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>{course.durationHours} hrs</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>{course.studentsCount > 0 ? course.studentsCount.toLocaleString() : "New"}</span>
          </div>
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-500" />
            <span>{course.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Price & CTA Row */}
        <div className="pt-2 flex items-center justify-between">
          <div>
            {isUpcoming ? (
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                Notify for Early Bird
              </span>
            ) : course.isFree ? (
              <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                Free Lifetime Access
              </span>
            ) : (
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {formatCurrency(course.discountPrice || course.price, course.currency)}
                </span>
                {course.discountPrice && (
                  <span className="text-xs line-through text-slate-400">
                    {formatCurrency(course.price, course.currency)}
                  </span>
                )}
              </div>
            )}
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all"
          >
            <span>{isUpcoming ? "Details" : "Explore"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
