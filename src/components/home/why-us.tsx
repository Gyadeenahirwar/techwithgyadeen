import React from "react";
import Image from "next/image";
import { ShieldCheck, Cpu, Code2, Rocket, Award, Users2, Sparkles, Terminal } from "lucide-react";
import { GYADEEN } from "@/lib/data";

const VALUE_PILLARS = [
  {
    icon: Code2,
    title: "Zero Toy Examples",
    description: "Every snippet and project is modeled on real enterprise architecture, governor-safe bulkification, and high-concurrency design.",
    color: "text-sky-500 bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: Cpu,
    title: "Agentforce & Autonomous AI",
    description: "Stay ahead of the curve with deep coverage of the Atlas Reasoning Engine, Agent Studio, Data Cloud vector embeddings, and LLM guardrails.",
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Interview & Scenario-Tested",
    description: "Over 100+ scenario-based interview problems dissecting Order of Execution, asynchronous transaction finalizers, and architecture trade-offs.",
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Award,
    title: "Verified Credentials & Badges",
    description: "Earn verifiable, tamper-proof completion certificates to showcase your hands-on mastery on LinkedIn and technical resumes.",
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Gyadeen Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Why Engineers Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                TechWithGyadeen
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We refuse to teach outdated drag-and-drop patterns or superficial 5-minute tutorials. TechWithGyadeen is built by an active engineering practitioner committed to turning developers into strategic technical architects.
            </p>

            <div className="pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-sky-500" />
                  <span>Our Educational Philosophy</span>
                </div>
                <blockquote className="text-xs text-slate-600 dark:text-slate-300 italic">
                  &ldquo;A great engineer doesn&apos;t just memorize syntax. They understand how memory, limits, and autonomous agents interact under heavy load.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-sky-500/40 shadow-sm shrink-0">
                    <Image
                      src={GYADEEN.avatar}
                      alt={GYADEEN.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">
                      Gyadeen
                    </p>
                    <p className="text-[11px] text-sky-600 dark:text-sky-400 font-medium">
                      Founder & Lead Instructor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all space-y-3"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${pillar.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
