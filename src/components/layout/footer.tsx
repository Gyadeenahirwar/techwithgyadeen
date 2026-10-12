import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Terminal, Mail, Heart, Sparkles, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, GithubIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/social-icons";

export function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl overflow-hidden shadow-lg shadow-sky-500/20 bg-slate-950 border border-sky-500/30 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/images/logo.png"
                  alt="TechWithGyadeen Logo"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  TechWithGyadeen
                </span>
                <span className="text-xs font-medium text-sky-400">
                  Learn. Build. Grow.
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering developers, Salesforce professionals, and AI engineers with practical, enterprise-grade architectures, real projects, and deep-dive technical tutorials.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.linkedin.com/in/gyadeen-ahirwar-282b2b223/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Gyadeenahirwar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white transition-all duration-200"
                aria-label="X / Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:gyadeenahirwar563@gmail.com"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white transition-all duration-200"
                aria-label="Email Gyadeen"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* LinkedIn Connect Badge */}
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/gyadeen-ahirwar-282b2b223/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 hover:bg-sky-500/20 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>Connect with Gyadeen on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/courses/salesforce-developer-fundamentals" className="hover:text-white transition-colors">
                  Salesforce Developer Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/courses/apex-and-trigger-masterclass" className="hover:text-white transition-colors">
                  Apex & Trigger Masterclass
                </Link>
              </li>
              <li>
                <Link href="/courses/lightning-web-components-pro" className="hover:text-white transition-colors">
                  Lightning Web Components Pro
                </Link>
              </li>
              <li>
                <Link href="/courses/agentforce-fundamentals" className="hover:text-white transition-colors">
                  Agentforce Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/courses/salesforce-integration-and-rest-api" className="hover:text-white transition-colors">
                  Salesforce Integration & REST API
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Tech */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Platform & Tech
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Technology Radar
                </Link>
              </li>
              <li>
                <Link href="/technology/updates" className="hover:text-white transition-colors">
                  Latest Technology Updates
                </Link>
              </li>
              <li>
                <Link href="/interview" className="hover:text-white transition-colors">
                  Interview Questions & Answers
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Enterprise Real Projects
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Free Cheat Sheets & PDFs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Community & Gyadeen */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Gyadeen & Community
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Gyadeen
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Mentorship
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1.5">
            <span>© 2026 TechWithGyadeen. All rights reserved.</span>
            <span>•</span>
            <span className="text-slate-400">Built for builders & lifelong learners</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
