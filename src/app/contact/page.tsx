"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/social-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit message. Please try again.");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Contact TechWithGyadeen
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Have questions about a course, enterprise corporate training, or architectural mentorship? Send a message directly to Gyadeen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Details Column */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-slate-900 text-white space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Direct Channels</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                I actively respond to technical queries, collaboration proposals, and student mentorship questions.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400">Email Address</p>
                    <a
                      href="mailto:gyadeenahirwar563@gmail.com"
                      className="font-semibold text-white hover:text-sky-400 transition-colors"
                    >
                      gyadeenahirwar563@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-sky-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400">LinkedIn Direct Message</p>
                    <a
                      href="https://www.linkedin.com/in/gyadeen-ahirwar-282b2b223/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sky-400 hover:underline break-all"
                    >
                      linkedin.com/in/gyadeen-ahirwar-282b2b223
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-sky-400">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400">Open Source Repositories</p>
                    <a
                      href="https://github.com/gyadeen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sky-400 hover:underline"
                    >
                      github.com/gyadeen
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-500">
              Average response time: Within 24-48 hours.
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            {status === "success" ? (
              <div className="p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Thank you for reaching out. Gyadeen will review your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-500 text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Course enrollment question / Architecture consultation"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how I can help..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-500">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{status === "loading" ? "Transmitting..." : "Send Message"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
