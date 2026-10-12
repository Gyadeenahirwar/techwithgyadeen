import React from "react";
import Link from "next/link";
import { 
  Cpu, 
  Cloud, 
  Bot, 
  Database, 
  Server, 
  Code2, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Rss
} from "lucide-react";
import { TECHNOLOGIES, TECHNOLOGY_UPDATES } from "@/lib/data";

const TECH_ICON_MAP: Record<string, React.ElementType> = {
  Cloud: Cloud,
  Bot: Bot,
  Sparkles: Sparkles,
  Database: Database,
  Server: Server,
  Code2: Code2,
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen py-10 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technology Radar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Explore Enterprise Technologies
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Deep architectural coverage across modern cloud ecosystems. Learn how CRM, Autonomous AI, Data Cloud, and Fullstack systems converge.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGIES.map((tech) => {
            const Icon = TECH_ICON_MAP[tech.iconName] || Cpu;
            return (
              <div
                key={tech.id}
                className="group flex flex-col justify-between p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: tech.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {tech.category}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                      {tech.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                      <span>{tech.coursesCount} Programs</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Rss className="w-3.5 h-3.5 text-amber-500" />
                      <span>{tech.updatesCount} Updates</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/courses?category=${tech.name}`}
                    className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-500"
                  >
                    View Courses
                  </Link>
                  <Link
                    href={`/technology/updates?tech=${tech.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Latest Updates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
