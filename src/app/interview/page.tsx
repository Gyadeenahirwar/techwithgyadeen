"use client";

import React, { useState } from "react";
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Code2, 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  BookOpen, 
  Search 
} from "lucide-react";
import { INTERVIEW_QUESTIONS } from "@/lib/data";

const CATEGORIES = ["All", "Apex", "LWC", "Agentforce", "Scenario"];

export default function InterviewPrepPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>("iq-01");
  const [search, setSearch] = useState("");

  const filteredQuestions = INTERVIEW_QUESTIONS.filter((q) => {
    if (selectedCategory !== "All" && q.category !== selectedCategory) return false;
    if (search) {
      const query = search.toLowerCase();
      const matchQ = q.question.toLowerCase().includes(query);
      const matchA = q.answer.toLowerCase().includes(query);
      if (!matchQ && !matchA) return false;
    }
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Technical Interview Prep</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Salesforce, Apex & AI Interview Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Ace senior engineering interviews with real production scenario breakdowns, trigger architecture patterns, and Agentforce reasoning mechanics.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search interview questions..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Question Accordion List */}
        <div className="space-y-4">
          {filteredQuestions.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
              >
                {/* Question Trigger Bar */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-850/60 transition-colors cursor-pointer"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-md font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">
                        {item.difficulty} Level
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded Answer Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div className="prose dark:prose-invert max-w-none whitespace-pre-line">
                      {item.answer}
                    </div>

                    {/* Code Snippet if applicable */}
                    {item.codeSnippet && (
                      <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs">
                        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                          <Code2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Code Example</span>
                        </div>
                        <pre className="p-4 text-emerald-400 overflow-x-auto leading-relaxed">
                          <code>{item.codeSnippet}</code>
                        </pre>
                      </div>
                    )}

                    {/* Related Questions */}
                    {item.relatedQuestions && item.relatedQuestions.length > 0 && (
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          Follow-up Interview Questions:
                        </span>
                        <ul className="space-y-1 text-xs text-sky-600 dark:text-sky-400">
                          {item.relatedQuestions.map((rq, idx) => (
                            <li key={idx}>• {rq}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
