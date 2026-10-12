"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  BookOpen, 
  Users, 
  DollarSign, 
  Newspaper, 
  Zap, 
  Mail, 
  Plus, 
  Edit2, 
  Trash2, 
  CheckCircle2, 
  Clock,
  Sparkles,
  TrendingUp,
  Search
} from "lucide-react";
import { COURSES, BLOG_POSTS, TECHNOLOGY_UPDATES } from "@/lib/data";

export default function AdminDashboardPage() {
  const [activeModule, setActiveModule] = useState<"courses" | "updates" | "blogs" | "orders">("courses");

  // Sample orders
  const sampleOrders = [
    { id: "ORD-9481", user: "Alex Johnson", course: "Apex & Trigger Masterclass", amount: "₹999", status: "SUCCESS", date: "2026-10-06" },
    { id: "ORD-9480", user: "Rohan Patel", course: "Lightning Web Components Pro", amount: "₹1,299", status: "SUCCESS", date: "2026-10-06" },
    { id: "ORD-9479", user: "Sneha Reddy", course: "Salesforce Integration Masterclass", amount: "₹1,199", status: "SUCCESS", date: "2026-10-05" },
    { id: "ORD-9478", user: "Karan Gupta", course: "LWC Pro Boilerplate Bundle", amount: "₹499", status: "PENDING", date: "2026-10-05" },
  ];

  return (
    <div className="min-h-screen py-10 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-400 border border-rose-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Control Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              TechWithGyadeen Management
            </h1>
            <p className="text-xs text-slate-400">
              Publish content, monitor student enrollments, inspect orders, and manage courses without editing code.
            </p>
          </div>

          <button
            onClick={() => alert("Open CMS Create Modal")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md cursor-pointer self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Content</span>
          </button>
        </div>

        {/* High Level Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Total Revenue</span>
              <DollarSign className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              ₹8,42,500
            </div>
            <div className="text-[11px] text-emerald-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>+18.4% this month</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Total Learners</span>
              <Users className="w-4 h-4 text-sky-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              12,450
            </div>
            <div className="text-[11px] text-sky-500">
              Across 42 countries
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Active Programs</span>
              <BookOpen className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              {COURSES.length}
            </div>
            <div className="text-[11px] text-slate-400">
              4 Paid • 2 Free
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Newsletter Subs</span>
              <Mail className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              6,820
            </div>
            <div className="text-[11px] text-emerald-500">
              98.2% deliverability
            </div>
          </div>
        </div>

        {/* Module Selector */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <button
            onClick={() => setActiveModule("courses")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeModule === "courses"
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Course Catalog ({COURSES.length})
          </button>
          <button
            onClick={() => setActiveModule("updates")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeModule === "updates"
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Tech Updates ({TECHNOLOGY_UPDATES.length})
          </button>
          <button
            onClick={() => setActiveModule("blogs")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeModule === "blogs"
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Blog Posts ({BLOG_POSTS.length})
          </button>
          <button
            onClick={() => setActiveModule("orders")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeModule === "orders"
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Recent Orders ({sampleOrders.length})
          </button>
        </div>

        {/* Content Table / Management Panel */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          {activeModule === "courses" && (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-850 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>Course Program</span>
                <span>Type / Price</span>
                <span>Students</span>
                <span>Status</span>
                <span>Actions</span>
              </div>
              {COURSES.map((c) => (
                <div
                  key={c.id}
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs hover:bg-slate-50/50 dark:hover:bg-slate-800/40"
                >
                  <div className="space-y-1 sm:w-1/3">
                    <p className="font-bold text-slate-900 dark:text-white line-clamp-1">
                      {c.title}
                    </p>
                    <p className="text-[11px] text-slate-400">{c.category} • {c.durationHours} hrs</p>
                  </div>

                  <div>
                    {c.isFree ? (
                      <span className="font-bold text-emerald-500">FREE</span>
                    ) : (
                      <span className="font-bold text-slate-900 dark:text-white">
                        ₹{c.discountPrice || c.price}
                      </span>
                    )}
                  </div>

                  <div className="text-slate-500">
                    {c.studentsCount.toLocaleString()} enrolled
                  </div>

                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      {c.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Edit course: ${c.title}`)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500"
                      title="Edit Course"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => alert(`Delete course: ${c.title}`)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-500"
                      title="Delete Course"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeModule === "orders" && (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-850 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>Order ID</span>
                <span>User</span>
                <span>Program</span>
                <span>Amount</span>
                <span>Payment</span>
              </div>
              {sampleOrders.map((ord) => (
                <div
                  key={ord.id}
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs hover:bg-slate-50/50 dark:hover:bg-slate-800/40"
                >
                  <span className="font-mono text-slate-500">{ord.id}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{ord.user}</span>
                  <span className="text-slate-600 dark:text-slate-300">{ord.course}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{ord.amount}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    ord.status === "SUCCESS"
                      ? "bg-emerald-500/10 text-emerald-500"
                      : "bg-amber-500/10 text-amber-500"
                  }`}>
                    {ord.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeModule === "updates" && (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {TECHNOLOGY_UPDATES.map((u) => (
                <div
                  key={u.id}
                  className="px-6 py-4 flex items-center justify-between text-xs"
                >
                  <div className="space-y-1">
                    <span className="font-semibold text-slate-900 dark:text-white">{u.title}</span>
                    <p className="text-[11px] text-slate-400">{u.technology} • {u.publishedAt}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Edit update: ${u.title}`)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeModule === "blogs" && (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {BLOG_POSTS.map((b) => (
                <div
                  key={b.id}
                  className="px-6 py-4 flex items-center justify-between text-xs"
                >
                  <div className="space-y-1">
                    <span className="font-semibold text-slate-900 dark:text-white">{b.title}</span>
                    <p className="text-[11px] text-slate-400">{b.category} • {b.viewsCount} views</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Edit article: ${b.title}`)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
