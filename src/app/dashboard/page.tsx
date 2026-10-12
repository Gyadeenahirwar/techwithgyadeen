"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, 
  Award, 
  Bookmark, 
  Clock, 
  Play, 
  CheckCircle2, 
  FileText, 
  Download, 
  Bell, 
  Settings, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { COURSES, GYADEEN } from "@/lib/data";

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState<"courses" | "certificates" | "saved">("courses");

  // Sample enrolled courses state
  const enrolledCourses = [
    {
      course: COURSES[0],
      progress: 68,
      lastLesson: "Writing Production Test Classes with TestDataFactory",
      completedAt: null,
    },
    {
      course: COURSES[1],
      progress: 42,
      lastLesson: "Building a Production Trigger Handler Framework",
      completedAt: null,
    },
    {
      course: COURSES[3],
      progress: 100,
      lastLesson: "Agent Studio Walkthrough & Architecture",
      completedAt: "2026-10-01",
    },
  ];

  return (
    <div className="min-h-screen py-10 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Welcome Header */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center text-sky-500 font-bold text-xl">
              AJ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Welcome back, Alex!
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 text-sky-500 border border-sky-500/20">
                  STUDENT PRO
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                You have maintained a 7-day learning streak. Keep building!
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-850 pt-4 md:pt-0 md:pl-8 text-center sm:text-left">
            <div>
              <div className="text-xl font-black text-slate-900 dark:text-white">3</div>
              <div className="text-[11px] text-slate-400">Enrolled Courses</div>
            </div>
            <div>
              <div className="text-xl font-black text-emerald-500">1</div>
              <div className="text-[11px] text-slate-400">Completed</div>
            </div>
            <div>
              <div className="text-xl font-black text-amber-500">1</div>
              <div className="text-[11px] text-slate-400">Certificates</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeTab === "courses"
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            My Learning ({enrolledCourses.length})
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeTab === "certificates"
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Certificates (1)
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeTab === "saved"
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Saved Resources (2)
          </button>
        </div>

        {/* Tab Content: Courses */}
        {activeTab === "courses" && (
          <div className="space-y-4">
            {enrolledCourses.map(({ course, progress, lastLesson }) => (
              <div
                key={course.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-500/10 text-sky-500">
                      {course.category}
                    </span>
                    {progress === 100 && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-500">
                        <CheckCircle2 className="w-3 h-3" />
                        Completed
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-500">
                    Up next: <span className="text-slate-700 dark:text-slate-300 font-medium">{lastLesson}</span>
                  </p>

                  {/* Progress bar */}
                  <div className="pt-2 max-w-md space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Course Progress</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          progress === 100
                            ? "bg-emerald-500"
                            : "bg-gradient-to-r from-sky-500 to-indigo-500"
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/learn/${course.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{progress === 100 ? "Review Lessons" : "Continue Learning"}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Certificates */}
        {activeTab === "certificates" && (
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Agentforce Fundamentals Mastery
                </h3>
                <p className="text-xs text-slate-400">Issued Oct 1, 2026 • ID: TWG-AF-2026-9481</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Verified completion of all Agentforce Atlas Reasoning Engine modules and Topic design exercises.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => alert("Downloading PDF Certificate...")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-sky-500 hover:underline"
              >
                Add to LinkedIn Profile →
              </a>
            </div>
          </div>
        )}

        {/* Tab Content: Saved Resources */}
        {activeTab === "saved" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-500">PDF Cheat Sheet</span>
                <span className="text-slate-400 font-mono">2.4 MB</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Apex & Trigger Architecture Cheat Sheet
              </h4>
              <p className="text-xs text-slate-500">
                Bookmarked for offline governor limit reference.
              </p>
              <Link
                href="/resources"
                className="inline-block text-xs font-semibold text-sky-500 hover:underline pt-2"
              >
                Download File →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
