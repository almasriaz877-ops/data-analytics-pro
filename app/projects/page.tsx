"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  FolderGit, 
  Layers, 
  Clock, 
  Terminal, 
  Database, 
  Award, 
  CheckCircle2, 
  Copy, 
  Download,
  ArrowRight,
  BookOpen,
  Eye
} from "lucide-react";
import { projects } from "@/lib/data";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const selectedProjectId = searchParams.get("id") || projects[0]?.id || "";
  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const [activeStep, setActiveStep] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  const handleProjectSelect = (id: string) => {
    router.push(`/projects?id=${id}`);
    setActiveStep(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Data Portfolio Projects
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Build industry-grade portfolios that prove your expertise. Every project includes structured instruction guidelines, real open-source dataset sources, and copyable Python/SQL script code.
        </p>
      </div>

      {/* Main Grid: Selector List on Left, Active Interactive Project on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Project Selector Cards (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
            Select Portfolio Project
          </span>
          <div className="space-y-3">
            {projects.map((project) => {
              const isSelected = project.id === selectedProject.id;
              return (
                <button
                  key={project.id}
                  onClick={() => handleProjectSelect(project.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-950 text-white border-transparent ring-1 ring-blue-500 shadow-md"
                      : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800/80 hover:border-blue-150 dark:hover:border-blue-900/40 hover:shadow-sm"
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px] mb-2.5">
                    <span className={`px-2 py-0.5 font-bold rounded ${
                      isSelected ? "bg-blue-600 text-white" : "bg-slate-50 dark:bg-slate-800 text-slate-500"
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className={isSelected ? "text-slate-400" : "text-slate-400"}>
                      {project.timeToComplete}
                    </span>
                  </div>

                  <h3 className={`font-bold text-base leading-snug mb-1 ${
                    isSelected ? "text-white" : "text-slate-950 dark:text-white"
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs leading-relaxed line-clamp-2 ${
                    isSelected ? "text-slate-400" : "text-slate-500 dark:text-slate-400"
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className={`text-[9px] font-mono px-2 py-0.5 rounded ${
                          isSelected ? "bg-slate-900 text-slate-400 border border-slate-800" : "bg-slate-50 dark:bg-slate-800 text-slate-400"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Advertisement placeholder */}
          <div className="bg-slate-550/40 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800 p-5 rounded-xl space-y-3">
            <span className="text-[9px] bg-slate-200 dark:bg-slate-800 text-slate-500 font-bold px-2 py-0.5 rounded tracking-wider uppercase block w-max">
              AdSense Ready
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Unlock cloud computing vouchers to host your dynamic dashboard projects on managed systems.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive step-by-step layout (8 cols) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-sm">
          {/* Metadata banner */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-50 dark:border-slate-850">
            <div>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
                {selectedProject.category}
              </span>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white mt-1">
                {selectedProject.title}
              </h2>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 font-bold text-xs rounded-full">
                Difficulty: {selectedProject.difficulty}
              </span>
            </div>
          </div>

          {/* Block 1: Project Overview & Datasets */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50 dark:bg-slate-950/40 p-5 rounded-xl border border-slate-50 dark:border-slate-850/60">
            <div className="md:col-span-8 space-y-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Project Goal & Scope
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {selectedProject.overview}
              </p>
            </div>
            <div className="md:col-span-4 space-y-2 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 pt-4 md:pt-0 md:pl-6 text-xs flex flex-col justify-between">
              <div>
                <strong className="block text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Source Dataset
                </strong>
                <span className="text-slate-500 dark:text-slate-400 leading-relaxed font-mono">
                  {selectedProject.datasetSource}
                </span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => alert("Synthetic dataset package triggered for download!")}
                  className="w-full inline-flex justify-center items-center gap-1 px-3 py-2 bg-slate-950 text-white dark:bg-slate-800 dark:hover:bg-slate-750 font-bold text-[10px] rounded hover:bg-slate-900 transition-colors cursor-pointer"
                >
                  <Download className="w-3 h-3" />
                  <span>Download Practice Files</span>
                </button>
              </div>
            </div>
          </div>

          {/* Block 2: Interactive Steps Tabs */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Step-By-Step Walkthrough
            </h4>

            {/* Steps tabs header */}
            <div className="flex border-b border-slate-100 dark:border-slate-800 overflow-x-auto">
              {selectedProject.steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`py-3 px-4 font-bold text-xs whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                    activeStep === idx
                      ? "border-blue-600 text-blue-600 dark:text-blue-400"
                      : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  Step {idx + 1}: {step.title.split(":")[1]?.trim() || step.title}
                </button>
              ))}
            </div>

            {/* Active Step Content */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-blue-50/20 p-4 rounded-xl border border-blue-100/10">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block text-slate-900 dark:text-white mb-1">
                    {selectedProject.steps[activeStep]?.title}
                  </strong>
                  <span>{selectedProject.steps[activeStep]?.instruction}</span>
                </div>
              </div>

              {/* Code Snippet for active step */}
              {selectedProject.steps[activeStep]?.code && (
                <div className="rounded-xl overflow-hidden bg-slate-950 text-slate-200 border border-slate-800 font-mono text-xs sm:text-sm">
                  <div className="bg-slate-900 px-4 py-2 text-slate-400 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider border-b border-slate-850">
                    <span>Active Workspace Script</span>
                    <button
                      onClick={() => handleCopyCode(selectedProject.steps[activeStep]!.code!)}
                      className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto leading-relaxed">
                    <code>{selectedProject.steps[activeStep]!.code!}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Block 3: Expected Outcome */}
          <div className="pt-6 border-t border-slate-50 dark:border-slate-850 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500" />
              Final Portfolio Deliverable & Outcomes
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {selectedProject.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500">
        Loading portfolio projects...
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}
