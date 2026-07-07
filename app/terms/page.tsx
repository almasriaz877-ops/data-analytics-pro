"use client";

import React from "react";
import Link from "next/link";
import { FileText, Calendar, ArrowLeft } from "lucide-react";

export default function TermsAndConditionsPage() {
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
          <FileText className="w-6 h-6" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Terms & Conditions
        </h1>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Calendar className="w-4 h-4" />
          <span>Last Updated: July 5, 2026</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed space-y-6">
        <p>
          Welcome to <strong>Data Analytics Pro</strong>! These terms and conditions outline the rules and regulations for the use of Data Analytics Pro&apos;s Website.
        </p>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Data Analytics Pro if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Terminology</h3>
        <p>
          {"The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person log on this website and compliant to the Company's terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves."}
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Cookies</h3>
        <p>
          {"We employ the use of cookies. By accessing Data Analytics Pro, you agreed to use cookies in agreement with the Data Analytics Pro's Privacy Policy."}
        </p>
        <p>
          {"Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies."}
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">License</h3>
        <p>
          {"Unless otherwise stated, Data Analytics Pro and/or its licensors own the intellectual property rights for all material on Data Analytics Pro. All intellectual property rights are reserved. You may access this from Data Analytics Pro for your own personal use subjected to restrictions set in these terms and conditions."}
        </p>
        <p>
          You must not:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Republish material from Data Analytics Pro</li>
          <li>Sell, rent or sub-license material from Data Analytics Pro</li>
          <li>Reproduce, duplicate or copy material from Data Analytics Pro</li>
          <li>Redistribute content from Data Analytics Pro</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Hyperlinking to our Content</h3>
        <p>
          The following organizations may link to our Website without prior written approval:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Reservation of Rights</h3>
        <p>
          We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
        </p>
      </div>
    </div>
  );
}
