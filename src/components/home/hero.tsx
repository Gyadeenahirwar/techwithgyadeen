"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Bot, 
  Cloud, 
  Cpu, 
  Code2, 
  Star,
  Play,
  Activity,
  Radio
} from "lucide-react";
import { AnimatedBackground } from "./animated-background";

const LIVE_EVENTS = [
  { text: "Agentforce Atlas formulating multi-step reasoning plan...", tag: "REASONING", color: "text-indigo-400" },
  { text: "Data Cloud: Unified Customer 360 profile resolved (12ms)", tag: "DATA CLOUD", color: "text-cyan-400" },
  { text: "Apex Trigger: Governor limits verified (SOQL: 1/100, DML: 1/150)", tag: "GOVERNOR SAFE", color: "text-emerald-400" },
  { text: "Autonomous Agent action dispatched to enterprise ERP webhook", tag: "ACTION DISPATCH", color: "text-sky-400" },
  { text: "LWC Reactive DOM updated via SLDS design token pipeline", tag: "LWC ENGINE", color: "text-amber-400" },
];

export function Hero() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % LIVE_EVENTS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const activeEvent = LIVE_EVENTS[currentEventIndex];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-32 bg-grid-pattern isolate">
      {/* Animated dynamic tech background with floating constellation particles */}
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Subtitle, CTAs, Highlights */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Agentforce 2.0 & Salesforce 2026 Masterclasses Live
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.12]">
              Learn Technology. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400">
                Build Real Projects.
              </span> <br />
              Grow Your Career.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Practical, production-grade technology learning for developers, Salesforce professionals, AI enthusiasts, and the next generation of builders. Taught with deep engineering rigor, not slides.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-cyan-500 hover:from-sky-600 hover:to-indigo-700 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/technology/updates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 shadow-sm transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 text-sky-500" />
                <span>Read Latest Tech</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  12,000+
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                  Active Learners
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white flex items-center gap-1">
                  <span>4.95</span>
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                  Average Rating
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  100%
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                  Real Projects
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Tech Cards & Interactive Code/Workspace Terminal */}
          <div className="lg:col-span-5 relative">
            {/* Floating Tech Pill 1: Agentforce (Top Left) */}
            <div className="absolute -top-4 -left-4 sm:-left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg animate-float-slow">
              <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-500">
                <Bot className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 dark:text-white">Agentforce</p>
                <p className="text-[10px] text-slate-500">Autonomous Atlas</p>
              </div>
            </div>

            {/* Floating Tech Pill 2: Salesforce & Apex (Bottom Right) */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg animate-float-delayed">
              <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-500">
                <Cloud className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 dark:text-white">Salesforce & Apex</p>
                <p className="text-[10px] text-emerald-500 font-medium">Governor Safe</p>
              </div>
            </div>

            {/* Central Terminal Card */}
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>AgentforceTriggerService.cls</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  v2026.4
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-1">
                <div>
                  <span className="text-indigo-400">@InvocableMethod</span>(
                </div>
                <div className="pl-4 text-slate-400">
                  label=<span className="text-emerald-400">&apos;Resolve Customer Query&apos;</span>,
                </div>
                <div className="pl-4 text-slate-400">
                  description=<span className="text-emerald-400">&apos;Autonomous Atlas reasoning tool&apos;</span>
                </div>
                <div>)</div>
                <div>
                  <span className="text-sky-400">public static</span>{" "}
                  <span className="text-amber-400">List&lt;AgentResult&gt;</span>{" "}
                  <span className="text-cyan-300">executeAgent</span>(
                  <span className="text-slate-400">List&lt;AgentContext&gt; ctx</span>) &#123;
                </div>
                <div className="pl-4 text-slate-400">
                  <span className="text-slate-500">// Ground with Data Cloud Unified Profile</span>
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">DataCloudGraph</span> customerGraph ={" "}
                  <span className="text-indigo-300">DataCloud.resolveIdentity</span>(ctx[0].userId);
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">AtlasPlan</span> plan ={" "}
                  <span className="text-indigo-300">AtlasReasoning.formulatePlan</span>(customerGraph);
                </div>
                <div className="pl-4 text-emerald-400">
                  return plan.executeAutonomousActions();
                </div>
                <div>&#125;</div>
              </div>

              {/* Live Streaming Motion Event Bar */}
              <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono transition-all duration-300">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-sky-400 shrink-0">
                    {activeEvent.tag}
                  </span>
                  <span className={`text-[11px] truncate ${activeEvent.color} transition-all duration-300 animate-in fade-in`}>
                    {activeEvent.text}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-slate-400 text-[10px] shrink-0 pl-2">
                  <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>LIVE STREAM</span>
                </div>
              </div>

              {/* Live Status Bar */}
              <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-slate-300">Atlas Engine 2026.4: Active</span>
                </div>
                <div className="text-slate-400 text-[11px] font-mono">
                  Test Coverage: <strong className="text-emerald-400">96.8%</strong>
                </div>
              </div>
            </div>

            {/* Mobile simplified tech pills */}
            <div className="flex sm:hidden justify-center gap-2 mt-4 flex-wrap">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Salesforce
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Agentforce
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Data Cloud
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
