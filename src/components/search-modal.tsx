"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, BookOpen, Newspaper, FileText, HelpCircle, ArrowRight } from "lucide-react";
import { COURSES, BLOG_POSTS, RESOURCES, INTERVIEW_QUESTIONS } from "@/lib/data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled outside or through global trigger
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  const filteredCourses = normalized
    ? COURSES.filter(
        (c) =>
          c.title.toLowerCase().includes(normalized) ||
          c.category.toLowerCase().includes(normalized) ||
          c.technologies.some((t) => t.toLowerCase().includes(normalized))
      )
    : COURSES.slice(0, 3);

  const filteredBlogs = normalized
    ? BLOG_POSTS.filter(
        (b) =>
          b.title.toLowerCase().includes(normalized) ||
          b.excerpt.toLowerCase().includes(normalized) ||
          b.tags.some((t) => t.toLowerCase().includes(normalized))
      )
    : BLOG_POSTS.slice(0, 2);

  const filteredResources = normalized
    ? RESOURCES.filter(
        (r) =>
          r.title.toLowerCase().includes(normalized) ||
          r.category.toLowerCase().includes(normalized)
      )
    : RESOURCES.slice(0, 2);

  const filteredQuestions = normalized
    ? INTERVIEW_QUESTIONS.filter(
        (q) =>
          q.question.toLowerCase().includes(normalized) ||
          q.category.toLowerCase().includes(normalized)
      )
    : [];

  const totalResults =
    filteredCourses.length +
    filteredBlogs.length +
    filteredResources.length +
    filteredQuestions.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, tutorials, interview questions, resources..."
            className="flex-1 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-base"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block ml-3 px-2 py-0.5 text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {totalResults === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-sm">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for &ldquo;Apex&rdquo;, &ldquo;Agentforce&rdquo;, &ldquo;LWC&rdquo;, or &ldquo;Interview&rdquo;
              </p>
            </div>
          ) : (
            <>
              {/* Courses */}
              {filteredCourses.length > 0 && (
                <div>
                  <div className="flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    Courses ({filteredCourses.length})
                  </div>
                  <div className="space-y-1">
                    {filteredCourses.map((c) => (
                      <Link
                        key={c.id}
                        href={`/courses/${c.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-sky-500">
                            {c.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {c.category} • {c.level} • {c.isFree ? "Free" : `₹${c.price}`}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Posts */}
              {filteredBlogs.length > 0 && (
                <div>
                  <div className="flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    <Newspaper className="w-3.5 h-3.5 mr-1.5" />
                    Articles ({filteredBlogs.length})
                  </div>
                  <div className="space-y-1">
                    {filteredBlogs.map((b) => (
                      <Link
                        key={b.id}
                        href={`/blog/${b.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-500">
                            {b.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {b.category} • {b.readTimeMin} min read
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources */}
              {filteredResources.length > 0 && (
                <div>
                  <div className="flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                    <FileText className="w-3.5 h-3.5 mr-1.5" />
                    Resources ({filteredResources.length})
                  </div>
                  <div className="space-y-1">
                    {filteredResources.map((r) => (
                      <Link
                        key={r.id}
                        href="/resources"
                        onClick={onClose}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-emerald-500">
                            {r.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {r.category} • {r.format}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Interview Q&A */}
              {filteredQuestions.length > 0 && (
                <div>
                  <div className="flex items-center text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                    <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
                    Interview Q&A ({filteredQuestions.length})
                  </div>
                  <div className="space-y-1">
                    {filteredQuestions.map((q) => (
                      <Link
                        key={q.id}
                        href="/interview"
                        onClick={onClose}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-amber-500 line-clamp-1">
                            {q.question}
                          </div>
                          <div className="text-xs text-slate-500">
                            {q.category} • {q.difficulty}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Navigate with arrow keys or click</span>
          <span>TechWithGyadeen Global Index</span>
        </div>
      </div>
    </div>
  );
}
