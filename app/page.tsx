"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Search, 
  BookOpen, 
  Terminal, 
  Database, 
  BarChart3, 
  ArrowRight, 
  FileText,
  User, 
  Calendar, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  Layers
} from "lucide-react";
import { blogArticles, projects, categories, faqs, interviewQuestions } from "@/lib/data";
import { motion } from "motion/react";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Top posts
  const featuredArticles = blogArticles.slice(0, 3);
  // Top categories for quick display
  const quickCategories = categories.slice(0, 6);
  // Get interview question preview
  const previewQuestions = interviewQuestions.slice(0, 3);

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* 12-Column High Density Layout Grid */}
      <div className="lg:grid lg:grid-cols-12 gap-0 border-t border-slate-100 dark:border-slate-800">
        
        {/* Left Column: Core Educational Rails (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col border-r border-slate-100 dark:border-slate-800 overflow-hidden">
          
          {/* Hero Section */}
          <section className="relative overflow-hidden p-6 sm:p-10 md:p-12 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/30 dark:to-slate-950 border-b border-slate-100 dark:border-slate-800/80">
            {/* Subtle grid decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
            
            <div className="relative space-y-6 max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block px-2.5 py-1 bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded"
              >
                Career Accelerator
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight"
              >
                Master Data Analytics with <br />
                <span className="text-blue-600 dark:text-blue-400">Real-World Projects.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl"
              >
                Industry-vetted guides on SQL, Python, Power BI, and Tableau. From foundational statistics to advanced machine learning deployment. Learn modern, real-world data stacks.
              </motion.p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href="/roadmap" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md shadow-blue-500/20 transition-all">
                  Browse Pathmaps
                </Link>
                <Link href="/projects" className="px-5 py-2.5 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                  View Project Library
                </Link>
              </div>

              {/* Integrated Global Search Bar */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="max-w-xl pt-4"
              >
                <form onSubmit={handleSearchSubmit} className="flex gap-2 p-1 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-100 dark:border-slate-800">
                  <div className="flex-grow flex items-center pl-3">
                    <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search 100+ SQL, Python, or Power BI guides..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-2 py-2 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none text-sm"
                    />
                  </div>
                  <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-all">
                    Search
                  </button>
                </form>
                {/* Popular Searches */}
                <div className="flex flex-wrap gap-2.5 mt-3 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-400 dark:text-slate-600">Popular:</span>
                  <button type="button" onClick={() => { setSearchQuery("Window Functions"); router.push("/blog?q=Window%20Functions"); }} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{"\"Window Functions\""}</button>
                  <span className="text-slate-300 dark:text-slate-800">•</span>
                  <button type="button" onClick={() => { setSearchQuery("Pandas cleaning"); router.push("/blog?q=Pandas%20cleaning"); }} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{"\"Pandas cleaning\""}</button>
                  <span className="text-slate-300 dark:text-slate-800">•</span>
                  <button type="button" onClick={() => { setSearchQuery("Cohort Analysis"); router.push("/projects"); }} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{"\"Cohort Analysis\""}</button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Sponsored/AdSense Banner */}
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10">
            <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 py-3 px-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[9px] bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                Sponsored
              </span>
              <p className="text-xs text-slate-500 text-center flex-grow italic">
                Looking for dedicated Cloud Databases? Explore GCP Cloud SQL setups for enterprise workflows.
              </p>
              <div className="w-12 h-1 bg-slate-200 dark:bg-slate-800 rounded hidden sm:block" />
            </div>
          </div>

          {/* Latest Research & Guides */}
          <section className="p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                Latest Research & Guides
              </h2>
              <Link href="/blog" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                Read All Articles
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <div key={article.slug} className="group cursor-pointer block border border-slate-100 dark:border-slate-850 rounded-2xl p-4 bg-white dark:bg-slate-900/40 hover:shadow-md transition-all">
                  <Link href={`/blog/${article.slug}`}>
                    <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl mb-3 overflow-hidden relative border border-slate-100/50 dark:border-slate-800">
                      <img
                        src={article.featuredImage}
                        alt={article.title}
                        loading="lazy"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-550"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-white/95 dark:bg-slate-950/95 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase rounded shadow-sm">
                        {article.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-[10px] text-slate-400">
                      <span className="font-bold text-blue-600 dark:text-blue-400 uppercase">{article.category}</span>
                      <span>•</span>
                      <span>{article.readingTime}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-1.5 line-clamp-1">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-550 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {article.metaDesc}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio Projects Section */}
          <section className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                Portfolio Projects with Complete Code
              </h2>
              <Link href="/projects" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                View All Projects
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-950 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between h-full hover:border-slate-700 transition-all group"
                >
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 font-bold border border-blue-900/40 rounded">
                        {project.difficulty}
                      </span>
                      <span className="text-slate-500 font-medium">{project.timeToComplete}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="text-[9px] font-mono px-1.5 py-0.5 bg-slate-900 text-slate-405 border border-slate-800 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-900">
                    <Link
                      href={`/projects?id=${project.id}`}
                      className="w-full inline-flex justify-center items-center gap-1 px-3 py-2 bg-slate-900 hover:bg-slate-850 text-slate-300 text-xs font-semibold rounded-lg transition-colors border border-slate-800"
                    >
                      <span>Analyze Project Steps</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Career Roadmap & Interview Prep bento boxes */}
          <section className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 space-y-6">
            <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              Career & Interview Preparation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box A: Interview Prep */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-blue-500/10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                <div className="relative space-y-4">
                  <span className="inline-block px-2 py-0.5 bg-white/20 text-white text-[10px] font-bold rounded tracking-wider uppercase">
                    Technical Questions
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">
                    Ace Your Next Technical Screening
                  </h3>
                  <p className="text-blue-100 text-xs leading-relaxed">
                    Curated technical questions covering SQL window operations, Python dataframes, dashboard designs, and predictive modeling hypotheses.
                  </p>

                  <div className="space-y-2 bg-white/5 p-3 rounded-xl border border-white/10 text-[11px]">
                    {previewQuestions.map((q) => (
                      <div key={q.id} className="flex gap-1.5 items-start">
                        <span className="text-blue-200 font-bold">Q:</span>
                        <span className="text-blue-50 line-clamp-1">{q.question}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative pt-6 mt-6 border-t border-white/10">
                  <Link
                    href="/interview-questions"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-white hover:bg-slate-100 text-blue-700 text-xs font-bold rounded-lg transition-all"
                  >
                    <span>Practice Questions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Box B: Career Roadmap */}
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <span className="inline-block px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded tracking-wider uppercase border border-emerald-100 dark:border-emerald-900/50">
                    Interactive Path
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-slate-950 dark:text-white">
                    Career Map: Analyst to Architect
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    A step-by-step career chart detailing exact milestones, necessary tech frameworks, salary ranges, and essential projects.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px] pt-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-slate-700 dark:text-slate-300">L1: Excel & SQL</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-slate-700 dark:text-slate-300">L2: Visualization</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span className="text-slate-700 dark:text-slate-300">L3: Python Pandas</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-600" />
                      <span className="text-slate-700 dark:text-slate-300">L4: Stats & ML</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href="/roadmap"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-all"
                  >
                    <span>Explore Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* AdSense Ready Container */}
          <div className="p-6 border-t border-slate-100 dark:border-slate-800">
            <div className="bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl py-4 px-6 flex flex-col items-center justify-center gap-1.5 relative overflow-hidden">
              <span className="text-[9px] text-slate-400 dark:text-slate-650 font-bold tracking-widest uppercase">
                ADVERTISEMENT READY SPACE
              </span>
              <p className="text-[11px] text-slate-500 text-center max-w-lg italic">
                {"Horizontal banner space designed for future Google AdSense integrations. Integrates cleanly with the site's layout without compromising cognitive readability."}
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 space-y-6">
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-450 mt-1">
                Have questions about learning data analytics? We have straightforward, zero-fluff answers.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-850 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-4 text-left font-bold text-slate-900 dark:text-white text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800/10 transition-all"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-50 dark:border-slate-850/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* Right Column: High Density Sidebar (4 Cols) */}
        <aside className="lg:col-span-4 bg-slate-50/50 dark:bg-slate-900/10 p-6 sm:p-8 flex flex-col gap-8 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800">
          
          {/* Advertisement Placeholder */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center h-28 relative overflow-hidden shadow-sm">
            <span className="absolute top-1.5 right-2.5 text-[8px] font-bold text-slate-300 dark:text-slate-700 uppercase tracking-widest">Sponsored</span>
            <div className="text-[11px] text-slate-550 dark:text-slate-400 font-medium text-center italic leading-relaxed">
              Unlock Premium SQL Templates<br/>
              <span className="text-blue-600 dark:text-blue-400 not-italic font-bold">Learn More &rarr;</span>
            </div>
          </div>

          {/* Skill Categories */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
              Skill Categories
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories?cat=${cat.id}`}
                  className="flex items-center gap-2 p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-150 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-blue-500 transition-all text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm"
                >
                  <span className={`w-2 h-2 rounded-full ${
                    cat.id === "sql" ? "bg-blue-500" :
                    cat.id === "python" ? "bg-yellow-400" :
                    cat.id === "excel" ? "bg-green-500" :
                    cat.id === "power-bi" ? "bg-orange-400" :
                    cat.id === "tableau" ? "bg-sky-400" : "bg-purple-500"
                  }`}></span>
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Trending Tutorials */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
              Trending Tutorials
            </h3>
            <div className="space-y-4">
              {blogArticles.slice(0, 3).map((article, idx) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="flex gap-3 items-start cursor-pointer group"
                >
                  <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500">
                      {(24.5 - idx * 5.3).toFixed(1)}k views this week
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-5 text-white border border-slate-800/80 shadow-md">
            <h4 className="text-sm font-bold mb-2">Join 10k+ Analysts</h4>
            <p className="text-[10px] text-slate-400 mb-4 leading-relaxed">
              Get our weekly technical briefing, career roadmaps, and curated project templates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-slate-800 border-none rounded-lg px-3 py-2 text-[10px] focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 focus:outline-none"
              />
              <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-[10px] font-bold transition-colors">
                Submit
              </button>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}
