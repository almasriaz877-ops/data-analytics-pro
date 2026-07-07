"use client";

import React, { useState } from "react";
import { 
  Award, 
  Map, 
  CheckCircle, 
  Circle, 
  Database, 
  Terminal, 
  TrendingUp, 
  Layers, 
  ChevronRight,
  BookOpen,
  ArrowRight,
  Target
} from "lucide-react";

interface RoadmapStage {
  level: string;
  title: string;
  salary: string;
  timeframe: string;
  description: string;
  skills: string[];
  projects: string[];
  tools: string[];
}

export default function CareerRoadmapPage() {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  const stages: RoadmapStage[] = [
    {
      level: "Level 1",
      title: "Foundational Analyst",
      salary: "$65,000 - $80,000 / yr",
      timeframe: "0 - 6 Months",
      description: "Learn how to collect, organize, and summarize data manually. Master spreadsheet modeling and database query architectures.",
      skills: [
        "Data Types and Normalization",
        "Writing Basic & Aggregated SQL Queries",
        "Pivot Tables and Conditional Logic in Excel",
        "Basic Exploratory Data Analysis (EDA)"
      ],
      projects: [
        "Sales ledger consolidation",
        "Employee survey feedback aggregation"
      ],
      tools: ["Microsoft Excel", "Google Sheets", "PostgreSQL / SQLite"]
    },
    {
      level: "Level 2",
      title: "Business Intelligence Specialist",
      salary: "$80,000 - $100,000 / yr",
      timeframe: "6 - 12 Months",
      description: "Convert spreadsheets into interactive dashboards. Connect direct database links and create scalable executive reports.",
      skills: [
        "Data Warehousing and Star Schema Modeling",
        "Writing Advanced DAX Formulas",
        "Interactive Dashboard Navigation Principles",
        "Designing Executive Reports (KPI charts)"
      ],
      projects: [
        "Regional sales tracking dashboard",
        "Executive supply chain SLA report"
      ],
      tools: ["Power BI", "Tableau", "SQL Server", "Figma (UI Design)"]
    },
    {
      level: "Level 3",
      title: "Analytical Programmer",
      salary: "$100,000 - $130,000 / yr",
      timeframe: "1 - 2 Years",
      description: "Automate manual dashboards and pipeline complex ETL jobs using Python. Write high-performance cleaning operations on larger datasets.",
      skills: [
        "Vectorized DataFrame Alignments",
        "Automated PDF & Email Reports generation",
        "Basic Web Scraping (BeautifulSoup/Selenium)",
        "Advanced Statistics & Hypothesis Testing"
      ],
      projects: [
        "Automated daily job Board Scraper & analyzer",
        "Customer retention cohort analysis heatmap"
      ],
      tools: ["Python", "Pandas", "Jupyter Notebooks", "Git & GitHub"]
    },
    {
      level: "Level 4",
      title: "Decision Science Architect",
      salary: "$130,000 - $170,000+ / yr",
      timeframe: "2+ Years",
      description: "Bridge the gap between raw analytical data and strategic decision planning. Conduct statistical testing and build predictive models.",
      skills: [
        "A/B Testing and Statistical Significance",
        "Supervised ML Basics (Linear / Logistic Regression)",
        "Feature Engineering and Dimensionality Reduction",
        "Advanced SQL Optimization & DBT configurations"
      ],
      projects: [
        "Subscription renewal predictive model",
        "Landing page conversion optimization (A/B Test)"
      ],
      tools: ["Scikit-Learn", "Statsmodels", "Snowflake / BigQuery", "DBT"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Data Analyst Career Roadmap
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          A definitive, step-by-step master plan designed to guide you from complete spreadsheet novice to a high-earning decision architect.
        </p>
      </div>

      {/* TIMELINE PROGRESS INDICATOR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Side: Interactive Timeline Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
              Career Timeline Levels
            </span>
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
              {stages.map((stage, idx) => {
                const isActive = activeStageIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStageIdx(idx)}
                    className="relative w-full text-left focus:outline-none cursor-pointer group"
                  >
                    {/* Tick Mark Dot Indicator */}
                    <div className={`absolute -left-[31px] top-1 p-1 rounded-full border-2 transition-all ${
                      isActive
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-transparent"
                    }`}>
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>

                    <div className="space-y-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                        isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400"
                      }`}>
                        {stage.level} • {stage.timeframe}
                      </span>
                      <h3 className={`font-bold text-lg tracking-tight group-hover:text-blue-600 transition-colors ${
                        isActive ? "text-slate-950 dark:text-white font-extrabold" : "text-slate-500 dark:text-slate-400"
                      }`}>
                        {stage.title}
                      </h3>
                      <span className="text-xs text-slate-400 block font-semibold">{stage.salary}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* AdSense ready block */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl">
            <span className="text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold px-2 py-0.5 rounded tracking-wider uppercase">
              AdSense Column
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
              Accelerate your learning curve with verified industry bootcamps. Sponsor space optimized for user experience.
            </p>
          </div>
        </div>

        {/* Right Side: Active Level Deep Dive Details (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-sm">
          {/* Header info */}
          <div className="border-b border-slate-50 dark:border-slate-850 pb-5 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-2 py-1 rounded">
                {stages[activeStageIdx]?.level} Milestone
              </span>
              <span className="text-slate-400 font-bold">Timeframe: {stages[activeStageIdx]?.timeframe}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white">
              {stages[activeStageIdx]?.title}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {stages[activeStageIdx]?.description}
            </p>
          </div>

          {/* Technical Tools to Master */}
          <div className="space-y-3">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest block">
              Primary Tools & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {stages[activeStageIdx]?.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-semibold px-3 py-1.5 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-300 rounded-lg border border-slate-100 dark:border-slate-850"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Skill Achievements */}
          <div className="space-y-3">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest block">
              Core Skills to Accomplish
            </span>
            <div className="space-y-2.5">
              {stages[activeStageIdx]?.skills.map((skill, idx) => (
                <div key={idx} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Portfolio Deliverable */}
          <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-2xl border border-blue-100/10 space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <strong className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Recommended Milestone Projects
              </strong>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {stages[activeStageIdx]?.projects.map((proj, idx) => (
                <li key={idx} className="font-medium">{proj}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
