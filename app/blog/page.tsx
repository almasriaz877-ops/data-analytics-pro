"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Tag, 
  BookOpen, 
  Flame, 
  ChevronRight,
  TrendingUp,
  Mail,
  Send,
  X
} from "lucide-react";
import { blogArticles, categories } from "@/lib/data";

function BlogContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "";

  const [searchVal, setSearchVal] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTag, setSelectedTag] = useState("");

  // Sync state if query params change
  useEffect(() => {
    const q = searchParams.get("q") || "";
    const cat = searchParams.get("category") || "";
    const timer = setTimeout(() => {
      setSearchVal(q);
      setSelectedCategory(cat);
    }, 0);
    return () => clearTimeout(timer);
  }, [searchParams]);

  // Handle local filters
  const filteredArticles = blogArticles.filter((article) => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      article.metaDesc.toLowerCase().includes(searchVal.toLowerCase()) ||
      article.content.toLowerCase().includes(searchVal.toLowerCase());
    
    const matchesCategory = selectedCategory 
      ? article.category.toLowerCase() === selectedCategory.toLowerCase() 
      : true;

    const matchesTag = selectedTag
      ? article.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      : true;

    return matchesSearch && matchesCategory && matchesTag;
  });

  // Unique tags across all articles
  const allTags = Array.from(new Set(blogArticles.flatMap((a) => a.tags)));

  // Mock popular articles (just the same for this content engine)
  const popularArticles = [blogArticles[0], blogArticles[2]].filter(Boolean);

  const clearFilters = () => {
    setSearchVal("");
    setSelectedCategory("");
    setSelectedTag("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search Header */}
      <div className="mb-12 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Data Analytics tutorials & articles
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base">
          Deep-dives, production hacks, and comprehensive lessons built with structured logic and clean visual elements.
        </p>
      </div>

      {/* Main Grid: Articles + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: ARTICLES (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Active Filters Display */}
          {(searchVal || selectedCategory || selectedTag) && (
            <div className="flex items-center justify-between p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-blue-700 dark:text-blue-400 font-bold uppercase tracking-wider">
                  Active Filters:
                </span>
                {searchVal && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs rounded-full font-medium">
                    {`Search: "${searchVal}"`}
                    <button onClick={() => setSearchVal("")} className="hover:text-red-500">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs rounded-full font-medium">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory("")} className="hover:text-red-500">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedTag && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs rounded-full font-medium">
                    Tag: #{selectedTag}
                    <button onClick={() => setSelectedTag("")} className="hover:text-red-500">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Articles list */}
          {filteredArticles.length > 0 ? (
            <div className="space-y-10">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden grid grid-cols-1 md:grid-cols-12 group"
                >
                  {/* Featured image (4 cols) */}
                  <div className="md:col-span-5 relative min-h-[220px] bg-slate-100">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      loading="lazy"
                      className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 dark:bg-slate-950/90 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded shadow-sm">
                      {article.category}
                    </span>
                  </div>

                  {/* Content (7 cols) */}
                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {article.author.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.publishedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readingTime}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                      </h2>

                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                        {article.metaDesc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800/60">
                      <div className="flex gap-1.5">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-full inline-flex text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                No articles match your filters
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
                Try clearing your search query or selecting a different category to explore other analytical guides.
              </p>
              <button
                onClick={clearFilters}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* AD PLACEMENT INSIDE ARTICLE LIST */}
          <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-2xl text-center">
            <span className="text-[9px] bg-slate-200 dark:bg-slate-800 text-slate-500 font-bold px-2 py-0.5 rounded tracking-wider uppercase">
              Sponsored Ad Container
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-2">
              Looking for top-tier analytic visualization software? Integrate Power BI Cloud datasets with ease.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBAR (4 cols) */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Widget 1: Dynamic Search */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="font-bold text-slate-950 dark:text-white text-base border-b border-slate-50 dark:border-slate-800/50 pb-3">
              Search Database
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            </div>
          </div>

          {/* Widget 2: Popular Posts */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="font-bold text-slate-950 dark:text-white text-base flex items-center gap-2 border-b border-slate-50 dark:border-slate-800/50 pb-3">
              <Flame className="w-4 h-4 text-orange-500" />
              Popular Tutorials
            </h3>
            <div className="space-y-4">
              {popularArticles.map((article) => (
                <div key={article.slug} className="flex gap-3 group">
                  <div className="w-16 h-12 relative flex-shrink-0 bg-slate-100 rounded-md overflow-hidden">
                    <img
                      src={article.featuredImage}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">
                      {article.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 3: Categories List */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="font-bold text-slate-950 dark:text-white text-base flex items-center gap-2 border-b border-slate-50 dark:border-slate-800/50 pb-3">
              <BookOpen className="w-4 h-4 text-blue-500" />
              Main Categories
            </h3>
            <div className="space-y-2">
              {categories.slice(0, 8).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory.toLowerCase() === cat.name.toLowerCase()
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400"
                      : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-850"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    {cat.name}
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-500">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Widget 4: Tags Cloud */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="font-bold text-slate-950 dark:text-white text-base flex items-center gap-2 border-b border-slate-50 dark:border-slate-800/50 pb-3">
              <Tag className="w-4 h-4 text-blue-500" />
              Topic Tags
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                  className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-all ${
                    selectedTag.toLowerCase() === tag.toLowerCase()
                      ? "bg-blue-600 text-white border-transparent"
                      : "bg-slate-550 dark:bg-slate-850 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Widget 5: Newsletter Sidebar widget */}
          <div className="bg-blue-600 text-white p-6 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
            {/* Background absolute lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:10px_10px]" />

            <div className="relative space-y-2">
              <h3 className="text-lg font-bold">Never miss a deep-dive</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Join 18k+ data engineers, analysts, and architects who get our actionable cheat sheets.
              </p>
            </div>
            <div className="relative pt-2">
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-white text-blue-700 font-bold text-xs rounded-lg flex justify-center items-center gap-1.5 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Subscribe Free
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500">
        Loading analytics tutorials...
      </div>
    }>
      <BlogContent />
    </Suspense>
  );
}
