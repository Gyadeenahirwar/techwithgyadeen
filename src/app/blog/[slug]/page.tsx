import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  BookOpen
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { ShareActions, CopyCodeButton } from "@/components/blog/blog-actions";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

function renderArticleContent(content: string) {
  // Split into chunks based on markdown code blocks (``` ... ```)
  const parts = content.split(/(```[\s\S]*?```)/g);

  return parts.map((part, index) => {
    if (part.startsWith("```")) {
      const match = part.match(/^```(\w+)?\r?\n([\s\S]*?)\r?\n```$/);
      const language = match ? match[1] || "apex" : "apex";
      const code = match ? match[2] : part.slice(3, -3);

      return (
        <div key={index} className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden my-6 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono">
            <span className="text-sky-400 font-bold uppercase tracking-wider">{language} Snippet</span>
            <CopyCodeButton code={code} />
          </div>
          <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-emerald-400 overflow-x-auto leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      );
    }

    // Split text by double linebreaks for paragraphs and headers
    const paragraphs = part.split(/\r?\n\r?\n/);
    return (
      <div key={index} className="space-y-4">
        {paragraphs.map((p, pIdx) => {
          const trimmed = p.trim();
          if (!trimmed) return null;

          if (trimmed.startsWith("### ")) {
            return (
              <h3 key={pIdx} className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white pt-4">
                {trimmed.replace(/^###\s+/, "")}
              </h3>
            );
          }
          if (trimmed.startsWith("## ")) {
            return (
              <h2 key={pIdx} className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white pt-6 border-t border-slate-200/60 dark:border-slate-800/60 mt-6">
                {trimmed.replace(/^##\s+/, "")}
              </h2>
            );
          }

          return (
            <p key={pIdx} className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </div>
    );
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id);

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-20 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Articles</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs text-slate-500 flex-wrap">
            <span className="px-2.5 py-1 rounded-md font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTimeMin} min read
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Strip & Social Sharing */}
          <div className="pt-4 border-t border-b border-slate-200 dark:border-slate-800 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-sky-500/30">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  {post.author.name}
                </p>
                <p className="text-[11px] text-slate-500">
                  {post.author.headline}
                </p>
              </div>
            </div>

            {/* Social Share Buttons */}
            <ShareActions title={post.title} />
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-10 shadow-xl border border-slate-200/80 dark:border-slate-800 bg-slate-900">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Excerpt Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-sky-500/5 dark:bg-sky-500/10 border-l-4 border-sky-500 mb-8">
          <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
            &ldquo;{post.excerpt}&rdquo;
          </p>
        </div>

        {/* Dynamic Article Body */}
        <div className="space-y-6 text-slate-800 dark:text-slate-200 text-base leading-relaxed">
          {renderArticleContent(post.content)}
        </div>

        {/* Author Bio Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-sky-500/30">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1.5 flex-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Written by {post.author.name}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {post.author.headline}
            </p>
            <div className="pt-1">
              <a
                href={post.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-sky-500 hover:underline"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Related Technical Reads
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((r) => (
                <div
                  key={r.id}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-sky-500/40 transition-colors"
                >
                  <span className="text-xs font-semibold text-indigo-500">{r.category}</span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors">
                    <Link href={`/blog/${r.slug}`}>{r.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{r.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
