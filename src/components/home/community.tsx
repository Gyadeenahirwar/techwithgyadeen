import React from "react";
import Link from "next/link";
import { Users2, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/social-icons";

export function CommunitySection() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <Users2 className="w-3.5 h-3.5" />
                <span>Builder Network</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                Join 12,000+ Engineers in the TechWithGyadeen Ecosystem
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Network directly with Salesforce Developers, Technical Architects, and AI engineers. Get architectural guidance, code reviews on complex triggers or LWCs, and direct access to Gyadeen.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Weekly live technical Q&A & scenario breakdowns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Resume & LinkedIn profile optimization tips</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct architectural advice for enterprise projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Early alpha access to new courses & toolkits</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/gyadeen-ahirwar-282b2b223/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-sky-600 hover:bg-sky-500 text-white shadow-lg transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>Connect with Gyadeen</span>
              </a>

              <a
                href="https://github.com/Gyadeenahirwar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
