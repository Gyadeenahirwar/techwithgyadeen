"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Play, 
  CheckCircle2, 
  Circle, 
  ChevronLeft,
  ChevronRight,
  Menu, 
  X,
  FileText,
  Download
} from "lucide-react";
import { Course } from "@/types";

export function LearnClient({ course }: { course: Course }) {
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const [activeLessonId, setActiveLessonId] = useState(allLessons[0]?.id || "l-1");
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([allLessons[0]?.id || "l-1"]);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [notes, setNotes] = useState(
    "Key takeaway: In multi-tenant architecture, governor limits enforce fair resource sharing across all orgs on the same pod."
  );

  const activeLesson = allLessons.find((l) => l.id === activeLessonId) || allLessons[0];
  const currentIndex = allLessons.findIndex((l) => l.id === activeLessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const toggleComplete = (id: string) => {
    if (completedLessonIds.includes(id)) {
      setCompletedLessonIds(completedLessonIds.filter((item) => item !== id));
    } else {
      setCompletedLessonIds([...completedLessonIds, id]);
    }
  };

  const progressPercent = allLessons.length > 0 
    ? Math.round((completedLessonIds.length / allLessons.length) * 100) 
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      {/* Top Learning Navigation Bar */}
      <header className="h-14 bg-slate-950 border-b border-slate-800 px-4 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href={`/courses/${course.slug}`}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Overview</span>
          </Link>
          <span className="text-slate-700">|</span>
          <h1 className="text-xs sm:text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
            {course.title}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Progress Bar */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-slate-400">{progressPercent}% complete</span>
            <div className="w-28 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Mobile Curriculum Toggle */}
          <button
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="lg:hidden p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main 3-Column Learning Layout */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* LEFT COLUMN: Curriculum Sidebar (Desktop & Mobile Drawer) */}
        <aside
          className={`w-80 shrink-0 bg-slate-950 border-r border-slate-800 flex flex-col transition-all duration-300 ${
            mobileDrawerOpen
              ? "absolute inset-y-0 left-0 z-40"
              : "hidden lg:flex"
          }`}
        >
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Course Content
            </span>
            <span className="text-xs text-sky-400 font-mono">
              {completedLessonIds.length}/{allLessons.length}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-850">
            {course.modules.map((mod) => (
              <div key={mod.id} className="py-2">
                <div className="px-4 py-2 text-xs font-semibold text-slate-400">
                  {mod.title}
                </div>
                <div className="space-y-0.5">
                  {mod.lessons.map((lesson) => {
                    const isActive = lesson.id === activeLesson?.id;
                    const isDone = completedLessonIds.includes(lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setActiveLessonId(lesson.id);
                          setMobileDrawerOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs flex items-center justify-between transition-colors ${
                          isActive
                            ? "bg-sky-500/15 text-sky-400 font-semibold border-l-2 border-sky-400"
                            : "text-slate-300 hover:bg-slate-900"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                          )}
                          <span className="truncate">{lesson.title}</span>
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono shrink-0 ml-2">
                          {lesson.durationMin}m
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* CENTER COLUMN: Video Player & Lesson Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-slate-900">
          {/* Video Player */}
          <div className="w-full bg-black aspect-video max-h-[500px] flex items-center justify-center relative">
            <iframe
              className="w-full h-full"
              src={activeLesson?.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
              title={activeLesson?.title || "Lesson Player"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Lesson Controls Bar */}
          <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                {activeLesson?.title}
              </h2>
              <p className="text-xs text-slate-400">
                Duration: {activeLesson?.durationMin} mins • Module Practice Included
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => activeLesson && toggleComplete(activeLesson.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  completedLessonIds.includes(activeLesson?.id || "")
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-slate-800 hover:bg-slate-700 text-white"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedLessonIds.includes(activeLesson?.id || "")
                    ? "Completed"
                    : "Mark Complete"}
                </span>
              </button>

              {prevLesson && (
                <button
                  onClick={() => setActiveLessonId(prevLesson.id)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs cursor-pointer"
                  title="Previous Lesson"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}

              {nextLesson && (
                <button
                  onClick={() => setActiveLessonId(nextLesson.id)}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold cursor-pointer"
                >
                  <span>Next Lesson</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Lesson Content / Notes */}
          <div className="p-6 sm:p-8 max-w-4xl space-y-6">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-200">
                Lesson Overview & Key Concepts
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                In this session, we examine how the multi-tenant architecture shares hardware resources while maintaining strict tenant isolation via Governor Limits. Remember that synchronous Apex transactions have a hard cap of 100 SOQL queries, 150 DML statements, and 10,000 DML rows.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-sky-300">
              <p className="text-slate-500">// Practice Exercise:</p>
              <p>Map&lt;Id, Account&gt; accMap = new Map&lt;Id, Account&gt;([SELECT Id, Name FROM Account LIMIT 10]);</p>
              <p>System.debug(&apos;Total SOQL Queries Used: &apos; + Limits.getQueries());</p>
            </div>
          </div>
        </main>

        {/* RIGHT COLUMN: Notes & Resources (Desktop) */}
        <aside className="w-72 shrink-0 bg-slate-950 border-l border-slate-800 p-4 hidden xl:flex flex-col space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Personal Notes
            </span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={8}
              className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-sky-500 resize-none font-sans"
              placeholder="Jot down notes while watching..."
            />
            <p className="text-[10px] text-slate-500">Auto-saved to your dashboard</p>
          </div>

          <div className="space-y-3 pt-3 border-t border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Lesson Attachments
            </span>
            <div className="space-y-2 text-xs">
              <a
                href="#download"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2 truncate">
                  <FileText className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">Apex_Trigger_Guide.pdf</span>
                </div>
                <Download className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
              <a
                href="#download"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2 truncate">
                  <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Exercise_Solutions.zip</span>
                </div>
                <Download className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
