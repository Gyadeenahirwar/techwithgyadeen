import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/social-icons";

export function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transform Your Technical Trajectory</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Ready to Master Modern Salesforce, <br className="hidden sm:inline" />
          AI & Cloud Engineering?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join thousands of developers leveling up with practical masterclasses, real architectural projects, and scenario-based interview mastery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-xl shadow-sky-500/20 hover:shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Learning Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://www.linkedin.com/in/gyadeen-ahirwar-282b2b223/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-400" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
