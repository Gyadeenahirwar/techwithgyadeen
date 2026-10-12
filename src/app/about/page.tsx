import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  BookOpen, 
  ArrowRight,
  Code2
} from "lucide-react";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "@/components/ui/social-icons";
import { GYADEEN } from "@/lib/data";

const SKILLS = [
  "Salesforce Architecture",
  "Apex & Trigger Frameworks",
  "Lightning Web Components (LWC)",
  "Agentforce & Atlas Engine",
  "Data Cloud / Data 360",
  "Google Cloud & BigQuery",
  "Next.js & TypeScript",
  "REST APIs & Webhooks",
  "OAuth 2.0 PKCE",
  "CI/CD with GitHub Actions & SFDX",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-10 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Profile Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden shadow-lg border-2 border-sky-500/20 shrink-0">
            <Image
              src={GYADEEN.avatar}
              alt={GYADEEN.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technology Educator & Architect</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              {GYADEEN.name}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400">
              {GYADEEN.headline}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {GYADEEN.bio}
            </p>

            {/* Contact & Social CTAs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={GYADEEN.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>

              <a
                href={`mailto:${GYADEEN.email || 'gyadeenahirwar563@gmail.com'}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-600/20 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{GYADEEN.email || 'gyadeenahirwar563@gmail.com'}</span>
              </a>

              <a
                href={GYADEEN.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mission & Learning Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              My Teaching Mission
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To bridge the massive divide between academic tutorials and high-stakes enterprise systems. I want every student to write governor-safe code, design autonomous Agentforce tooling, and architect scalable data integrations with absolute confidence.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Educational Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              True mastery comes from active architectural problem solving, not passive video consumption. Every course on TechWithGyadeen requires you to build, debug real exceptions, and deliver functional solutions.
            </p>
          </div>
        </div>

        {/* Core Technical Matrix */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-sky-500" />
            <span>Core Technical Competencies</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
