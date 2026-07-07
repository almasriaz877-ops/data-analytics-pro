"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  HelpCircle, 
  ChevronDown, 
  Eye, 
  EyeOff, 
  BookOpen, 
  Database, 
  Terminal, 
  BarChart, 
  Percent, 
  Trash2,
  ListFilter,
  CheckCircle,
  Copy
} from "lucide-react";
import { interviewQuestions } from "@/lib/data";

function InterviewQuestionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeDifficulty, setActiveDifficulty] = useState<string>("All");
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Filter logic
  const filteredQuestions = interviewQuestions.filter((q) => {
    const matchesCategory = activeCategory === "All" || q.category.toLowerCase().includes(activeCategory.toLowerCase().split(" ")[0]);
    const matchesDifficulty = activeDifficulty === "All" || q.difficulty === activeDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const toggleReveal = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 3000);
  };

  const categoriesList = ["All", "SQL", "Python", "Power BI / Tableau", "Statistics", "Data Cleaning & EDA"];
  const difficultiesList = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Data Analytics Interview Prep
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Crack high-paying technical interviews at elite tech companies. Filter through tested SQL, Python, modeling, and BI dashboard questions.
        </p>
      </div>

      {/* FILTER BAR CONTROLS */}
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-200">
          <ListFilter className="w-4 h-4 text-blue-500" />
          <span>Filter Questions Database</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {/* Category Filter */}
          <div className="space-y-1.5 flex-grow">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Category</span>
            <div className="flex flex-wrap gap-1.5">
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="space-y-1.5 flex-shrink-0 min-w-[200px]">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Difficulty</span>
            <div className="flex gap-1.5">
              {difficultiesList.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setActiveDifficulty(diff)}
                  className={`flex-grow py-1.5 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeDifficulty === diff
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* QUESTIONS RENDERING LIST */}
      <div className="space-y-6">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q, idx) => {
            const isRevealed = !!revealedAnswers[q.id];
            
            // Map category colors
            const diffColor = {
              Easy: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/40",
              Medium: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/40",
              Hard: "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/40"
            }[q.difficulty];

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 space-y-4"
              >
                {/* Upper tags row */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-50 dark:border-slate-850 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded">
                      {q.category}
                    </span>
                    <span className={`px-2 py-0.5 font-bold rounded border ${diffColor}`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <span className="text-slate-400 text-[10px] font-bold">
                    QUESTION {idx + 1} OF {filteredQuestions.length}
                  </span>
                </div>

                {/* Question */}
                <div className="flex gap-3 items-start">
                  <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {q.question}
                  </h3>
                </div>

                {/* Show/Hide Toggle Button */}
                <button
                  onClick={() => toggleReveal(q.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  {isRevealed ? (
                    <>
                      <EyeOff className="w-4 h-4" />
                      <span>Hide Solution</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" />
                      <span>Reveal Verified Solution</span>
                    </>
                  )}
                </button>

                {/* REVEALED CONTENT PANEL */}
                {isRevealed && (
                  <div className="pt-4 border-t border-slate-50 dark:border-slate-850 space-y-4 animate-fadeIn">
                    {/* Direct Short Answer */}
                    <div className="p-4 bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-100/30 text-emerald-800 dark:text-emerald-400 text-sm rounded-xl font-medium leading-relaxed">
                      <strong className="block text-[11px] text-emerald-600 dark:text-emerald-500 font-bold uppercase tracking-wider mb-1">
                        Executive Answer Summary:
                      </strong>
                      {q.answer}
                    </div>

                    {/* Full Explanation */}
                    <div className="space-y-2">
                      <strong className="block text-xs text-slate-400 uppercase tracking-wider">
                        Technical Deep-Dive Explanation:
                      </strong>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>

                    {/* Code Snippet */}
                    {q.codeSnippet && (
                      <div className="rounded-xl overflow-hidden bg-slate-950 text-slate-200 border border-slate-850 font-mono text-xs sm:text-sm">
                        <div className="bg-slate-900 px-4 py-2 text-slate-400 flex justify-between items-center text-[10px] font-bold tracking-wider border-b border-slate-850">
                          <span>Interactive SQL / Python Statement</span>
                          <button
                            onClick={() => handleCopyCode(q.id, q.codeSnippet!)}
                            className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                          >
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>{copiedCodeId === q.id ? "Copied!" : "Copy Snippet"}</span>
                          </button>
                        </div>
                        <pre className="p-4 overflow-x-auto leading-relaxed">
                          <code>{q.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
            <p className="text-slate-500">No questions match the active filters. Change filters to see more.</p>
          </div>
        )}
      </div>

      {/* AD PLACEMENT INSIDE INTERVIEW LIST */}
      <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850/50 py-4 px-6 rounded-xl text-center">
        <span className="text-[9px] bg-slate-200 dark:bg-slate-800 text-slate-500 font-bold px-2 py-0.5 rounded tracking-wider uppercase">
          Sponsored Link
        </span>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-2">
          Want mock interview loops? Prepare using GCP Data Engineer and Analytics certificates.
        </p>
      </div>
    </div>
  );
}

export default function InterviewQuestionsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500">
        Loading interview questions...
      </div>
    }>
      <InterviewQuestionsContent />
    </Suspense>
  );
}
