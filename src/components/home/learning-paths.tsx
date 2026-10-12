import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, CheckCircle2, Bot, Cloud, Cpu, Layers } from "lucide-react";

const PATHS = [
  {
    id: "path-sf",
    title: "Salesforce Developer Path",
    description: "From Admin basics to Senior Apex, LWC, and Enterprise Architecture.",
    icon: Cloud,
    gradient: "from-sky-500 to-cyan-500",
    milestones: [
      "Multi-Tenant Architecture & SOQL",
      "Object-Oriented Apex & Test Factories",
      "Scalable Trigger Handler Frameworks",
      "Modern Lightning Web Components (LWC)",
      "REST & Event-Driven Enterprise Integrations",
    ],
    duration: "6 Months Roadmap",
    badge: "Most Popular",
    href: "/courses?category=Salesforce",
  },
  {
    id: "path-agentforce",
    title: "Autonomous Agentforce Architect",
    description: "Build, configure, and scale reasoning AI agents on Salesforce.",
    icon: Bot,
    gradient: "from-indigo-500 to-violet-500",
    milestones: [
      "Atlas Reasoning Engine Mechanics",
      "Agent Studio & Topic Guardrail Design",
      "Data Cloud Zero-Copy & Vector Search",
      "Custom Invocable Apex Actions & Tools",
      "Multi-Agent Orchestration & Security Audits",
    ],
    duration: "3 Months Roadmap",
    badge: "Trending 2026",
    href: "/courses?category=Agentforce",
  },
  {
    id: "path-cloud-ai",
    title: "Cloud & AI Fullstack Engineer",
    description: "Bridge enterprise CRM with Google Cloud, Next.js, and Modern APIs.",
    icon: Cpu,
    gradient: "from-emerald-500 to-teal-500",
    milestones: [
      "Modern Next.js 16 & TypeScript Systems",
      "PostgreSQL on Google Cloud SQL",
      "BigQuery Zero-Copy Integration",
      "Vertex AI & Gemini Enterprise Grounding",
      "Microservice & Webhook Event Streaming",
    ],
    duration: "4 Months Roadmap",
    badge: "Advanced",
    href: "/technology",
  },
];

export function LearningPaths() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200/60 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Career Progression</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Popular Learning Paths
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Stop wandering across disconnected tutorials. Follow clear, battle-tested step-by-step roadmaps designed for real-world promotion and job readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATHS.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-400/40 dark:hover:border-slate-600/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${path.gradient} flex items-center justify-center text-white shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {path.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {path.description}
                    </p>
                  </div>

                  {/* Milestones list */}
                  <div className="pt-2 space-y-2.5">
                    {path.milestones.map((m) => (
                      <div key={m} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">{path.duration}</span>
                  <Link
                    href={path.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Follow Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
