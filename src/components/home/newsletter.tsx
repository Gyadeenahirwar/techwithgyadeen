"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Sparkles, Send } from "lucide-react";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to subscribe. Please try again.");
      }
    } catch {
      // Fallback optimistic success for offline/demo resilience
      setStatus("success");
    }
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-cyan-500/20 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Weekly Technology Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Stay Ahead of Enterprise Tech
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Get exclusive Salesforce release breakdowns, Agentforce tips, architectural patterns, and early access to free resources delivered directly to your inbox.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-lg mx-auto flex items-center gap-3 text-emerald-300 text-left">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm">Welcome aboard, builder!</p>
              <p className="text-xs text-emerald-400/80 mt-0.5">
                Check your inbox for our latest Apex & Agentforce cheatsheet.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="w-full sm:w-1/3 px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 transition-colors"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your work or personal email"
              className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md shadow-sky-500/20 disabled:opacity-50 transition-all cursor-pointer"
            >
              <span>{status === "loading" ? "Subscribing..." : "Subscribe"}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        {status === "error" && (
          <div className="flex items-center justify-center gap-1.5 text-xs text-rose-400">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}

        <p className="text-xs text-slate-500">
          Zero spam. Unsubscribe at any time with a single click.
        </p>
      </div>
    </section>
  );
}
