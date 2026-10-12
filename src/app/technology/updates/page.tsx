"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, Clock, Calendar, ArrowRight, ExternalLink, Filter, Sparkles, Tag } from "lucide-react";
import { TECHNOLOGY_UPDATES, TECHNOLOGIES } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function TechnologyUpdatesPage() {
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const filteredUpdates = selectedTech === "All"
    ? TECHNOLOGY_UPDATES
    : TECHNOLOGY_UPDATES.filter((u) => u.technology === selectedTech || u.technologySlug === selectedTech);

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>Developer News & Release Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Latest Technology Updates
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Stay ahead of major framework changes, Salesforce release windows, Agentforce innovations, and Google Cloud integrations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setSelectedTech("All")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              selectedTech === "All"
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
            }`}
          >
            All Updates
          </button>
          {TECHNOLOGIES.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTech(t.name)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedTech === t.name
                  ? "bg-sky-500 text-white shadow-sm"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Updates Feed */}
        <div className="space-y-8">
          {filteredUpdates.map((update) => (
            <article
              key={update.id}
              id={update.slug}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="px-2.5 py-1 rounded-md font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  {update.technology}
                </span>

                <div className="flex items-center gap-4 text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(update.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {update.readTime}
                  </span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {update.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {update.summary}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {update.content}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {update.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>
                    Reported by <strong className="text-slate-800 dark:text-slate-200">{update.author}</strong>
                  </span>
                  <a
                    href="https://developer.salesforce.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-500 hover:underline"
                  >
                    <span>Official Release Docs</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
