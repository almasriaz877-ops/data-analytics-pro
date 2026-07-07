"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Database, Github, Twitter, Linkedin, Youtube, Send, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "All Tutorials", path: "/blog" },
    { name: "Project Guides", path: "/projects" },
    { name: "Interview Prep", path: "/interview-questions" },
    { name: "Career Roadmap", path: "/roadmap" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const featuredCategories = [
    { name: "Python", path: "/categories?cat=python" },
    { name: "SQL", path: "/categories?cat=sql" },
    { name: "Excel", path: "/categories?cat=excel" },
    { name: "Power BI", path: "/categories?cat=power-bi" },
    { name: "Tableau", path: "/categories?cat=tableau" },
    { name: "Pandas", path: "/categories?cat=pandas" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer id="newsletter-section" className="bg-slate-950 text-slate-400 border-t border-slate-900">
      {/* Upper Newsletter Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-slate-900">
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 md:p-12 lg:flex lg:items-center lg:justify-between gap-8 border border-slate-800">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Get the latest data analytics guides in your inbox
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
              We send deep-dive SQL optimization tutorials, Python cleaning recipes, and interview tips once a week. Absolutely no spam.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-shrink-0 w-full lg:w-auto">
            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl font-medium w-full lg:w-96 justify-center">
                <Check className="w-5 h-5" /> Subscribed successfully! Thank you.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="sm:flex max-w-md lg:max-w-none w-full lg:w-96 gap-2">
                <div className="w-full">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="Enter your professional email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-sm transition-all duration-150 hover:-translate-y-0.5"
                >
                  Join Free
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
            {/* Ad Placement Indicator */}
            <p className="text-[10px] text-slate-600 tracking-wider text-center lg:text-left mt-2">
              SPONSORED LINKS WILL NEVER COMPROMISE OUR CONTENT INTEGRITY
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Col 1: About */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Database className="w-5 h-5" />
            </div>
            <span className="font-sans font-bold text-lg tracking-tight text-white">
              Data Analytics <span className="text-blue-500">Pro</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed pt-2">
            An elite education ecosystem designed to guide aspiring and practicing analyst experts. Learn modern, real-world data stacks.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              aria-label="GitHub Link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              aria-label="Twitter Link"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              aria-label="Linkedin Link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              aria-label="Youtube Link"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
            Learning Resources
          </h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-white hover:underline transition-all duration-150"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Categories */}
        <div>
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
            Featured Categories
          </h4>
          <ul className="space-y-3 text-sm">
            {featuredCategories.map((cat) => (
              <li key={cat.name}>
                <Link
                  href={cat.path}
                  className="hover:text-white hover:underline transition-all duration-150"
                >
                  {cat.name} Tutorials
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Ad Block Placeholder */}
        <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-xl flex flex-col justify-between h-48">
          <div>
            <span className="text-[10px] text-slate-600 font-bold tracking-widest uppercase">
              Ad Placement Space
            </span>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Google AdSense container. Ad layouts are optimized for desktop & mobile viewports without obstructing readable elements.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-medium bg-slate-900/60 py-2 px-3 rounded-lg text-center border border-slate-800">
            AdSense Ready Column
          </div>
        </div>
      </div>

      {/* Lower Copyright & Legal Footer */}
      <div className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between text-xs text-slate-500">
          <p className="order-2 md:order-1 mt-4 md:mt-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Data Analytics Pro. All rights reserved. Made for aspiring data professionals worldwide.
          </p>
          <div className="order-1 md:order-2 flex justify-center space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-slate-300 transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
