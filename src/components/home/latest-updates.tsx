import React from "react";
import Link from "next/link";
import { Zap, ArrowRight, Rss } from "lucide-react";
import { UpdateCard } from "@/components/technology/update-card";
import { TECHNOLOGY_UPDATES } from "@/lib/data";

export function LatestUpdates() {
  const latestUpdates = TECHNOLOGY_UPDATES.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Real-Time Technology Radar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Latest Technology Updates
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Curated breakdowns of major enterprise releases across Salesforce, Agentforce, Google Cloud, and AI architectures.
            </p>
          </div>

          <Link
            href="/technology/updates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 group self-start md:self-auto"
          >
            <span>View All Tech Updates</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestUpdates.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      </div>
    </section>
  );
}
