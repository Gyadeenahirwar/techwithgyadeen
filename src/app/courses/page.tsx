"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, BookOpen, Sparkles, X } from "lucide-react";
import { CourseCard } from "@/components/courses/course-card";
import { COURSES } from "@/lib/data";

const CATEGORIES = ["All", "Salesforce", "Apex", "LWC", "Agentforce", "Integration"];
const LEVELS = ["All", "BEGINNER", "INTERMEDIATE", "ADVANCED"];
const PRICE_TYPES = ["All", "Free", "Paid"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Search
      if (search) {
        const query = search.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = course.description.toLowerCase().includes(query);
        const matchesTech = course.technologies.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesTech) return false;
      }

      // Category
      if (selectedCategory !== "All" && course.category !== selectedCategory) {
        return false;
      }

      // Level
      if (selectedLevel !== "All" && course.level !== selectedLevel) {
        return false;
      }

      // Price
      if (selectedPrice === "Free" && !course.isFree) return false;
      if (selectedPrice === "Paid" && course.isFree) return false;

      return true;
    });
  }, [search, selectedCategory, selectedLevel, selectedPrice]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSelectedPrice("All");
  };

  const hasActiveFilters =
    search || selectedCategory !== "All" || selectedLevel !== "All" || selectedPrice !== "All";

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Explore All Courses & Masterclasses
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Accelerate your engineering depth with comprehensive, production-tested courses across Salesforce, Apex, LWC, Agentforce, and Cloud Integrations.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses by keyword, technology, or topic..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-sky-500"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 cursor-pointer"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  Category: {cat}
                </option>
              ))}
            </select>

            {/* Level Dropdown */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 cursor-pointer"
            >
              {LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>
                  Level: {lvl}
                </option>
              ))}
            </select>

            {/* Price Dropdown */}
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500 cursor-pointer"
            >
              {PRICE_TYPES.map((p) => (
                <option key={p} value={p}>
                  Price: {p}
                </option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="px-3.5 py-2.5 text-xs font-semibold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-6">
          <span>
            Showing <strong className="text-slate-900 dark:text-white">{filteredCourses.length}</strong>{" "}
            courses
          </span>
          <span>Updated weekly with fresh lessons</span>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <p className="text-base font-semibold text-slate-900 dark:text-white">
              No matching courses found
            </p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search criteria or resetting filters to browse all available programs.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-500 text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
