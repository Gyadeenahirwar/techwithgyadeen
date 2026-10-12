import React from "react";
import Link from "next/link";
import { FileText, Download, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { RESOURCES } from "@/lib/data";

export function FreeResourcesSection() {
  const freeResources = RESOURCES.filter((r) => r.isFree).slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200/60 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
              <Download className="w-3.5 h-3.5" />
              <span>Instant Downloadable Assets</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Free Developer Resources & Cheat Sheets
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Equip yourself with battle-tested syntax cheat sheets, interview preparation guides, and architecture references.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 group self-start md:self-auto"
          >
            <span>View All Resources</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {freeResources.map((res) => (
            <div
              key={res.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {res.category}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    {res.format} • {res.size}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {res.description}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{res.downloadsCount.toLocaleString()} engineers downloaded</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  FREE ACCESS
                </span>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
