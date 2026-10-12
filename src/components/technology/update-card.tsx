import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { TechnologyUpdate } from "@/types";
import { formatDate } from "@/lib/utils";

interface UpdateCardProps {
  update: TechnologyUpdate;
}

export function UpdateCard({ update }: UpdateCardProps) {
  return (
    <article className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-500/50 dark:hover:border-sky-500/50 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
      <div className="space-y-3">
        {/* Header: Tech Badge + Meta */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            {update.technology}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {update.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(update.publishedAt)}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors line-clamp-2">
          <Link href={`/technology/updates#${update.slug}`}>{update.title}</Link>
        </h3>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
          {update.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {update.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          By <strong className="text-slate-700 dark:text-slate-200">{update.author}</strong>
        </span>
        <Link
          href={`/technology/updates#${update.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform"
        >
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
