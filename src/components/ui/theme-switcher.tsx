"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`h-8 w-28 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse ${className}`} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      role="group"
      aria-label="Theme Switcher"
      className={`relative inline-flex items-center p-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800/90 border border-slate-300/80 dark:border-slate-700/80 shadow-inner shrink-0 ${className}`}
    >
      {/* Light Option Button */}
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={!isDark}
        className={`flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer ${
          !isDark
            ? "bg-white text-slate-900 shadow-sm shadow-slate-400/20"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        <Sun className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${!isDark ? "text-amber-500 fill-amber-500" : ""}`} />
        <span>Light</span>
      </button>

      {/* Dark Option Button */}
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={isDark}
        className={`flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer ${
          isDark
            ? "bg-slate-950 text-white shadow-sm shadow-sky-500/20 border border-slate-700/60"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        <Moon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isDark ? "text-sky-400 fill-sky-400" : ""}`} />
        <span>Dark</span>
      </button>
    </div>
  );
}
