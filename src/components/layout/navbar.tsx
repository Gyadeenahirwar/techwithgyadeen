"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  Terminal, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Cpu,
  FileCode2,
  Newspaper,
  User,
  ShieldCheck
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { SearchModal } from "@/components/search-modal";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

const NAV_LINKS = [
  { name: "Courses", href: "/courses" },
  { name: "Technology", href: "/technology" },
  { name: "Resources", href: "/resources" },
  { name: "Interview", href: "/interview" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "glass-panel shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0 bg-slate-950 border border-sky-500/30">
                <Image
                  src="/images/logo.png"
                  alt="TechWithGyadeen Logo"
                  width={44}
                  height={44}
                  priority
                  className="object-contain w-full h-full"
                />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                  TechWithGyadeen
                  <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 rounded-md">
                    PRO
                  </span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wider">
                  Learn. Build. Grow.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-sky-600 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-500/10"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions: Search, Theme Toggle, Auth CTA & Guaranteed Start Learning */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0">
              {/* Search Trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-lg transition-colors cursor-pointer shrink-0"
                title="Search (Ctrl + K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Search...</span>
                <kbd className="hidden xl:inline font-mono text-[10px] px-1 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded">
                  Ctrl K
                </kbd>
              </button>

              {/* Segmented Light / Dark Theme Switcher */}
              <ThemeSwitcher />

              {/* Dashboard / Admin Quick Link */}
              <Link
                href="/dashboard"
                className="hidden xl:flex p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors shrink-0"
                title="User Dashboard"
              >
                <User className="w-4 h-4" />
              </Link>

              {/* Login Button */}
              <Link
                href="/login"
                className="hidden xl:inline-block px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shrink-0 whitespace-nowrap"
              >
                Login
              </Link>

              {/* Primary CTA - Guaranteed shrink-0 and visible */}
              <Link
                href="/courses"
                className="relative shrink-0 inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-cyan-500 hover:from-sky-600 hover:to-indigo-700 rounded-xl shadow-md shadow-sky-500/25 hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile & Tablet Controls: Search, Theme, ALWAYS VISIBLE Start Learning & Hamburger */}
            <div className="flex lg:hidden items-center space-x-1.5 sm:space-x-2 shrink-0">
              {/* Start Learning CTA right on Mobile/Tablet Header */}
              <Link
                href="/courses"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 rounded-lg shadow-sm shrink-0 whitespace-nowrap"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-3 h-3 hidden sm:inline" />
              </Link>

              <button
                onClick={() => setSearchOpen(true)}
                className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg shrink-0"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg shrink-0"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg shrink-0"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-sky-600 dark:text-sky-400 bg-sky-500/10"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Appearance Theme:</span>
                <ThemeSwitcher />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                >
                  <User className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Admin
                </Link>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Login / Register
                </Link>
                <Link
                  href="/courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl shadow-md"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
