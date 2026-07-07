"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, Calendar, ArrowLeft } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      {/* Back to Home link */}
      <div>
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl inline-flex">
          <AlertTriangle className="w-6 h-6 animate-pulse" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Legal Disclaimer
        </h1>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Calendar className="w-4 h-4" />
          <span>Last Updated: July 5, 2026</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed space-y-6">
        <p>
          {"The information contained on Data Analytics Pro website (the \"Service\") is for general educational and informational purposes only."}
        </p>
        <p>
          Data Analytics Pro assumes no responsibility for errors or omissions in the contents on the Service.
        </p>
        <p>
          In no event shall Data Analytics Pro be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Data Analytics Pro reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice.
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">External Links Disclaimer</h3>
        <p>
          Data Analytics Pro website may contain links to external websites that are not provided or maintained by or in any way affiliated with Data Analytics Pro. Please note that Data Analytics Pro does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Professional Disclaimer</h3>
        <p>
          The site cannot and does not contain professional data warehousing or software engineering advice. The technical information is provided for general educational and informational purposes only and is not a substitute for professional consultations.
        </p>
        <p>
          Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. The use or reliance of any information contained on this site is solely at your own risk.
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">AdSense & Affiliate Advertising</h3>
        <p>
          This Service displays Google AdSense advertisements. Ad layouts are optimized strictly to preserve readable layout spacing and avoid obstructions. Clicking on sponsored links is entirely voluntary and is subject to third-party vendor terms.
        </p>
      </div>
    </div>
  );
}
