"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Terminal, 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  PieChart, 
  Table2, 
  Binary, 
  Percent, 
  Eraser, 
  SearchCode, 
  LineChart, 
  Globe, 
  Cpu, 
  LayoutDashboard, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  CheckSquare, 
  ChevronRight,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { categories, blogArticles } from "@/lib/data";

const iconMap: Record<string, any> = {
  Terminal: Terminal,
  Database: Database,
  FileSpreadsheet: FileSpreadsheet,
  BarChart3: BarChart3,
  PieChart: PieChart,
  Table2: Table2,
  Binary: Binary,
  Percent: Percent,
  Eraser: Eraser,
  SearchCode: SearchCode,
  LineChart: LineChart,
  Globe: Globe,
  Cpu: Cpu,
  LayoutDashboard: LayoutDashboard,
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  FileText: FileText,
  CheckSquare: CheckSquare,
};

function CategoriesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeParam = searchParams.get("cat") || "";

  const [activeCategory, setActiveCategory] = useState<string>(activeParam);

  // Filter blog posts by active category selection
  const relevantArticles = activeCategory
    ? blogArticles.filter((article) => {
        const catObj = categories.find((c) => c.id === activeCategory);
        return catObj ? article.category.toLowerCase() === catObj.name.toLowerCase() : false;
      })
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Learning Paths & Categories
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          We have categorized our guides into 18 targeted skill domains. Select an individual module below to view active guides or browse deep dives.
        </p>
      </div>

      {/* Main categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const IconComp = iconMap[cat.icon] || BookOpen;
          const isSelected = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? "" : cat.id)}
              className={`p-6 text-left rounded-2xl border transition-all duration-200 shadow-sm relative group flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "bg-blue-600 text-white border-transparent ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-950"
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800/80 hover:border-blue-150 dark:hover:border-blue-900/40 hover:shadow-md"
              }`}
            >
              <div>
                <div className={`p-3 rounded-xl inline-flex mb-4 transition-transform group-hover:scale-105 ${
                  isSelected ? "bg-white/20 text-white" : "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                }`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                  isSelected ? "text-white" : "text-slate-950 dark:text-white"
                }`}>
                  {cat.name}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isSelected ? "text-blue-100" : "text-slate-500 dark:text-slate-400"
                }`}>
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100/10 w-full flex justify-between items-center text-xs">
                <span className={isSelected ? "text-blue-200" : "text-slate-400"}>
                  {cat.count} curated articles
                </span>
                <span className={`font-semibold flex items-center gap-1 ${
                  isSelected ? "text-white" : "text-blue-600 dark:text-blue-400"
                }`}>
                  <span>{isSelected ? "Collapse" : "Explore"}</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* FILTERED RESULTS SECTION */}
      {activeCategory && (
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-50 dark:border-slate-850 pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Active Tutorials for: {categories.find((c) => c.id === activeCategory)?.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Displaying high-quality technical posts in this category.
              </p>
            </div>
            <Link
              href={`/blog?category=${categories.find((c) => c.id === activeCategory)?.name}`}
              className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-sm"
            >
              <span>View in Blog Feed</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {relevantArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relevantArticles.map((art) => (
                <div
                  key={art.slug}
                  className="p-5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-xl hover:border-blue-100 dark:hover:border-blue-900/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
                      {art.category} • {art.readingTime}
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug line-clamp-2">
                      {art.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                      {art.metaDesc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100/10 text-right">
                    <Link
                      href={`/blog/${art.slug}`}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                    >
                      <span>Read Guide</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching live articles in database for this specific category yet. More tutorials are released weekly!
            </div>
          )}
        </div>
      )}

      {/* AD PLACEMENT BOTTOM OF CATEGORIES */}
      <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-2xl text-center">
        <span className="text-[9px] bg-slate-200 dark:bg-slate-800 text-slate-500 font-bold px-2 py-0.5 rounded tracking-wider uppercase">
          Sponsored Link Ad
        </span>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-2">
          Seeking advanced statistical computations? Connect your analytical data to Google BigQuery ML.
        </p>
      </div>
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500">
        Loading learning categories...
      </div>
    }>
      <CategoriesContent />
    </Suspense>
  );
}
