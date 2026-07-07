"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  User, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Share2, 
  ArrowLeft, 
  ArrowRight,
  BookOpen, 
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  MessageSquare,
  ThumbsUp,
  UserCheck,
  Award,
  Database
} from "lucide-react";
import { blogArticles } from "@/lib/data";

interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  likes: number;
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const article = blogArticles.find((a) => a.slug === slug);

  // Comments state with localStorage backup
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [hasLikedComment, setHasLikedComment] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  // Load comments
  useEffect(() => {
    if (article) {
      const saved = localStorage.getItem(`comments-${article.slug}`);
      const timer = setTimeout(() => {
        if (saved) {
          setComments(JSON.parse(saved));
        } else {
          // Seed default comments
          const defaultComments: Comment[] = [
            {
              id: "c1",
              author: "Marcus Aurelius",
              text: `This is an absolute masterclass. The explanation of ROW_NUMBER vs DENSE_RANK with the visual comparison table completely clicked for me. Thanks, ${article.author.name}!`,
              date: "2026-06-29 09:12 AM",
              likes: 12
            },
            {
              id: "c2",
              author: "Emily Watson",
              text: "Very clean explanation. Do you have performance tests comparing CTEs vs Subqueries for MySQL databases? I've heard CTE performance can vary heavily depending on the engine version.",
              date: "2026-06-30 02:44 PM",
              likes: 4
            }
          ];
          setComments(defaultComments);
          localStorage.setItem(`comments-${article.slug}`, JSON.stringify(defaultComments));
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Article Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400">The tutorial you are trying to access does not exist or has been relocated.</p>
        <Link href="/blog" className="inline-flex items-center gap-1 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  // Find Related Articles
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug && (a.category === article.category || a.tags.some(t => article.tags.includes(t))))
    .slice(0, 2);

  // Find Previous and Next Articles
  const currentIndex = blogArticles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

  // Handle adding a new comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      id: `c-${Date.now()}`,
      author: commentName.trim(),
      text: commentText.trim(),
      date: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      likes: 0,
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`comments-${article.slug}`, JSON.stringify(updated));
    setCommentName("");
    setCommentText("");
  };

  // Like a comment
  const handleLikeComment = (id: string) => {
    if (hasLikedComment[id]) return; // prevent multiple likes

    const updated = comments.map((c) => {
      if (c.id === id) {
        return { ...c, likes: c.likes + 1 };
      }
      return c;
    });

    setComments(updated);
    localStorage.setItem(`comments-${article.slug}`, JSON.stringify(updated));
    setHasLikedComment((prev) => ({ ...prev, [id]: true }));
  };

  // Copy article link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // Render markdown custom elements beautifully without libraries
  const renderCustomMarkdown = (contentString: string) => {
    const lines = contentString.split("\n");
    let isCodeBlock = false;
    let codeLanguage = "";
    let codeLines: string[] = [];

    return lines.map((line, idx) => {
      // Toggle Code Blocks
      if (line.trim().startsWith("```")) {
        if (!isCodeBlock) {
          isCodeBlock = true;
          codeLanguage = line.replace("```", "").trim();
          codeLines = [];
          return null;
        } else {
          isCodeBlock = false;
          const fullCode = codeLines.join("\n");
          return (
            <div key={idx} className="my-6 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 font-mono text-xs sm:text-sm text-slate-200">
              <div className="bg-slate-950 px-4 py-2 text-slate-500 flex justify-between items-center border-b border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {codeLanguage || "code"}
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(fullCode);
                    alert("Code copied!");
                  }}
                  className="text-[10px] hover:text-white transition-colors"
                >
                  Copy Code
                </button>
              </div>
              <pre className="p-4 overflow-x-auto leading-relaxed">
                <code>{fullCode}</code>
              </pre>
            </div>
          );
        }
      }

      if (isCodeBlock) {
        codeLines.push(line);
        return null;
      }

      const trimmed = line.trim();

      // Heading 3
      if (trimmed.startsWith("###")) {
        const text = trimmed.replace("###", "").trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <h3 key={idx} id={id} className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 scroll-mt-20">
            {text}
          </h3>
        );
      }

      // Heading 4
      if (trimmed.startsWith("####")) {
        const text = trimmed.replace("####", "").trim();
        return (
          <h4 key={idx} className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-3">
            {text}
          </h4>
        );
      }

      // Blockquotes (Callouts/Warnings/Tips)
      if (trimmed.startsWith(">")) {
        let text = trimmed.replace(">", "").trim();
        let type: "note" | "tip" | "warning" = "note";
        let title = "Note";
        let icon = <CheckCircle className="w-5 h-5 text-blue-500" />;

        if (text.startsWith("**Tip:**")) {
          type = "tip";
          title = "Tip";
          text = text.replace("**Tip:**", "").trim();
          icon = <Lightbulb className="w-5 h-5 text-amber-500" />;
        } else if (text.startsWith("**Warning:**")) {
          type = "warning";
          title = "Warning";
          text = text.replace("**Warning:**", "").trim();
          icon = <AlertTriangle className="w-5 h-5 text-rose-500" />;
        }

        const bgClass = {
          note: "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/40 text-slate-800 dark:text-slate-300",
          tip: "bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40 text-slate-800 dark:text-slate-300",
          warning: "bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40 text-slate-800 dark:text-slate-300"
        }[type];

        return (
          <div key={idx} className={`p-5 my-6 border-l-4 rounded-r-xl ${bgClass} flex gap-3`}>
            <div className="flex-shrink-0 mt-0.5">{icon}</div>
            <div>
              <strong className="block text-sm font-bold uppercase tracking-wider mb-1">{title}</strong>
              <p className="text-sm leading-relaxed">{text}</p>
            </div>
          </div>
        );
      }

      // List Items
      if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
        const text = trimmed.substring(1).trim();
        // Simple inline bold replacement
        const formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return (
          <ul key={idx} className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 text-base my-2">
            <li dangerouslySetInnerHTML={{ __html: formatted }} />
          </ul>
        );
      }

      // Numbered List Items
      if (/^\d+\./.test(trimmed)) {
        const text = trimmed.replace(/^\d+\./, "").trim();
        const formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return (
          <ol key={idx} className="list-decimal pl-6 space-y-2 text-slate-700 dark:text-slate-300 text-base my-2">
            <li dangerouslySetInnerHTML={{ __html: formatted }} />
          </ol>
        );
      }

      // Empty Lines
      if (!trimmed) {
        return <div key={idx} className="h-4" />;
      }

      // Tables
      if (trimmed.startsWith("|")) {
        // Skip table separator line | :--- | :--- |
        if (trimmed.includes("---")) return null;

        const cells = trimmed.split("|").map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
        const isHeader = idx < 20 && lines[idx + 1]?.includes("---"); // Simple heuristic for header

        return (
          <div key={idx} className="overflow-x-auto my-6 border border-slate-100 dark:border-slate-800 rounded-lg">
            <table className="w-full text-sm text-left border-collapse">
              <tbody>
                <tr className={isHeader ? "bg-slate-100 dark:bg-slate-900 font-bold text-slate-900 dark:text-white" : "border-b border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50/50"}>
                  {cells.map((cell, cidx) => (
                    <td key={cidx} className="p-3.5 border-r border-slate-100 dark:border-slate-800 last:border-0 font-medium">
                      {cell.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/`(.*?)`/g, "<code class='font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs'>$1</code>")}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      // Default Paragraph
      // Handle inline bold and code snippets like `OVER`
      const formattedLine = line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/`(.*?)`/g, "<code class='font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs text-blue-600 dark:text-blue-400'>$1</code>");

      return (
        <p
          key={idx}
          className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });
  };

  return (
    <div className="pb-24">
      {/* 1. HERO HEADER AREA */}
      <section className="bg-slate-900 text-white pt-12 pb-16 border-b border-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300 truncate max-w-[200px]">{article.title}</span>
          </div>

          <span className="inline-flex px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {article.metaDesc}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400 border-t border-slate-800">
            {/* Author */}
            <div className="flex items-center gap-2.5">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-700"
              />
              <div>
                <span className="block font-bold text-white text-sm">{article.author.name}</span>
                <span className="block text-[11px] text-slate-500">{article.author.role}</span>
              </div>
            </div>

            {/* Meta info */}
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>{article.publishedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>{article.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AD PLACEMENT 1 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 py-3 px-4 rounded-xl flex items-center justify-between text-xs text-slate-500">
          <span className="font-bold text-[10px] text-slate-400">SPONSORED LINK</span>
          <span>Deploy SQL databases near-instantly with modern scaling. Learn Postgres configurations.</span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        </div>
      </div>

      {/* 2. BODY CONTENT + SIDE TOC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: TABLE OF CONTENTS (3 cols) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-6">
            <div className="p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-500" />
                Table of Contents
              </h3>
              <ul className="space-y-3 text-xs font-semibold">
                {article.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white block hover:translate-x-0.5 transition-all leading-relaxed"
                    >
                      {toc.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share Socials */}
            <div className="p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl space-y-4 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                Share This Guide
              </span>
              <div className="flex justify-center gap-3">
                <button className="p-2 bg-slate-50 hover:bg-blue-600 hover:text-white rounded-lg text-slate-500 transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-2 bg-slate-50 hover:bg-blue-450 hover:text-white rounded-lg text-slate-500 transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-2 bg-slate-50 hover:bg-blue-700 hover:text-white rounded-lg text-slate-500 transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopyLink}
                  className="p-2 bg-slate-50 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-500 transition-colors relative cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  {copiedLink && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[9px] px-2 py-1 rounded shadow">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER COLUMN: MAIN CONTENT (9 cols) */}
        <div className="lg:col-span-9 space-y-12">
          {/* Main Featured Image */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Rendered Text Content */}
          <article className="prose max-w-none dark:prose-invert">
            {renderCustomMarkdown(article.content)}
          </article>

          {/* Social Share (Mobile and Tablet display) */}
          <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Share Guide</span>
            <div className="flex gap-2">
              <button className="p-2 bg-slate-50 rounded-lg text-slate-500"><Facebook className="w-4 h-4" /></button>
              <button className="p-2 bg-slate-50 rounded-lg text-slate-500"><Twitter className="w-4 h-4" /></button>
              <button className="p-2 bg-slate-50 rounded-lg text-slate-500"><Linkedin className="w-4 h-4" /></button>
            </div>
          </div>

          {/* FAQs Widget inside post */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white border-b border-slate-50 dark:border-slate-800 pb-3">
                Frequently Asked Questions about this Topic
              </h3>
              <div className="space-y-4">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AD PLACEMENT 2 */}
          <div className="h-24 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-800">
            <p className="text-xs text-slate-500 font-medium italic">
              Google AdSense space placeholder. Optimized spacing avoids interfering with reading layout.
            </p>
          </div>

          {/* AUTHOR CARD */}
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-blue-500 shadow-sm"
            />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-950 dark:text-white text-lg">
                  About {article.author.name}
                </h3>
                <span className="inline-flex px-2 py-0.5 bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-[10px] font-bold rounded-full">
                  Verified Instructor
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {article.author.role}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {article.author.bio}
              </p>
            </div>
          </div>

          {/* PREVIOUS / NEXT ARTICLE PREVIEWS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-150 dark:border-slate-800">
            {prevArticle ? (
              <Link
                href={`/blog/${prevArticle.slug}`}
                className="group p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center gap-4 hover:border-blue-100 dark:hover:border-blue-900/30 transition-all text-left"
              >
                <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Previous Guide
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-tight">
                    {prevArticle.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {nextArticle ? (
              <Link
                href={`/blog/${nextArticle.slug}`}
                className="group p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-between gap-4 hover:border-blue-100 dark:hover:border-blue-900/30 transition-all text-right"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Next Guide
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 leading-tight">
                    {nextArticle.title}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>

          {/* INTERACTIVE COMMENT SECTION */}
          <section className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2 pb-4 border-b border-slate-50 dark:border-slate-800">
              <MessageSquare className="w-5 h-5 text-blue-500" />
              Community Discussion ({comments.length})
            </h3>

            {/* Comment Submission Form */}
            <form onSubmit={handleAddComment} className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-350">
                Join the conversation!
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="sm:col-span-1 px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <input
                  type="text"
                  required
                  placeholder="Share your analytical question or feedback..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="sm:col-span-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Submit Comment
                </button>
              </div>
            </form>

            {/* Comment Thread List */}
            <div className="space-y-6 pt-4">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-slate-550/50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-850/60 rounded-xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {comment.author}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {comment.text}
                  </p>
                  <div className="flex items-center gap-4 text-xs pt-1">
                    <button
                      onClick={() => handleLikeComment(comment.id)}
                      disabled={hasLikedComment[comment.id]}
                      className={`flex items-center gap-1.5 transition-colors ${
                        hasLikedComment[comment.id]
                          ? "text-blue-600 font-bold"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{comment.likes} Likes</span>
                    </button>
                    <span className="text-slate-300 dark:text-slate-800">|</span>
                    <button className="text-slate-400 hover:text-slate-600">Reply</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
