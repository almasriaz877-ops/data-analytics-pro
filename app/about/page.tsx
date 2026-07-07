"use client";

import React from "react";
import { Award, Compass, BookOpen, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* 1. Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          About Data Analytics Pro
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {"Democratizing high-yield, production-ready technical education for the next generation of global data intelligence professionals."}
        </p>
      </div>

      {/* 2. Bento Grid of Mission, Vision, and Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Box A: Our Mission */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl inline-flex">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Our Mission
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {"To provide zero-fluff, actionable, and completely free technical learning assets. We aim to close the global skill gap in modern SQL scripting, Python automated scripting, and Business Intelligence engineering."}
          </p>
        </div>

        {/* Box B: Our Vision */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl inline-flex">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Our Vision
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {"We envision an active global community where aspiring and practicing analyst leaders learn together, sharing actual database benchmarks and portfolio scripts that generate business impact."}
          </p>
        </div>
      </div>

      {/* 3. Deep Dive: Why This Website Exists */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6 relative overflow-hidden">
        {/* Absolute lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="relative space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
            The Analytical Reality
          </span>
          <h2 className="text-3xl font-bold tracking-tight">
            Why We Founded This Platform
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {"Most data science materials are either too academic (loaded with heavy math proofs but lacking basic database query performance rules) or too simplistic (basic lists of functions with zero explanation of ties, nulls, or duplicates)."}
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {"Data Analytics Pro was created to serve as the missing technical middle-ground. We provide real SQL procedures, actual Pandas vectorized operations, star schema model hierarchies, and real public datasets so that you learn by executing actual analysis."}
          </p>
        </div>
      </div>

      {/* 4. Learning Philosophy */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white text-center">
          Our Core Learning Philosophy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
            <div className="mx-auto p-2.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-lg inline-flex">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-950 dark:text-white text-sm">Actionable Code First</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              {"We skip lengthy preambles. Every post begins with copyable script examples and immediate syntax breakdowns."}
            </p>
          </div>

          <div className="space-y-3 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
            <div className="mx-auto p-2.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-lg inline-flex">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-950 dark:text-white text-sm">Strict Quality Control</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              {"Every query and python method we share is tested on public cloud data engines to ensure absolute integrity."}
            </p>
          </div>

          <div className="space-y-3 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
            <div className="mx-auto p-2.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-lg inline-flex">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-950 dark:text-white text-sm">Career Focus</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              {"We build assets with recruiting targets in mind, providing high-yield checklists, portfolio guidelines, and interview questions."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
