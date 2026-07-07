"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Calendar, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Privacy Policy
        </h1>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Calendar className="w-4 h-4" />
          <span>Last Updated: July 5, 2026</span>
        </div>
      </div>

      {/* Legal Text Content */}
      <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed space-y-6">
        <p>
          At <strong>Data Analytics Pro</strong>, accessible from our standard URL platforms, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Data Analytics Pro and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <code>hello@dataanalyticspro.edu</code>.
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Log Files</h3>
        <p>
          {"Data Analytics Pro follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."}
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Cookies and Web Beacons</h3>
        <p>
          {"Like any other website, Data Analytics Pro uses \"cookies\". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."}
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Google DoubleClick DART Cookie</h3>
        <p>
          {"Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our platform and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy."}
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Privacy Policies</h3>
        <p>
          You may consult this list to find the Privacy Policy for each of the advertising partners of Data Analytics Pro.
        </p>
        <p>
          {"Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Data Analytics Pro, which are sent directly to the user's browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."}
        </p>
        <p>
          Note that Data Analytics Pro has no access to or control over these cookies that are used by third-party advertisers.
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Third Party Privacy Policies</h3>
        <p>
          {"Data Analytics Pro's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options."}
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-white pt-4">Consent</h3>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
