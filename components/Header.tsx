"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/ThemeContext";
import { Database, Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Monitor scroll height to make nav look translucent or elevated
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate reading progress for blog articles
      if (pathname.startsWith("/blog/")) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const progress = (window.scrollY / totalHeight) * 100;
          setReadingProgress(progress);
        }
      } else {
        setReadingProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Categories", path: "/categories" },
    { name: "Projects", path: "/projects" },
    { name: "Interviews", path: "/interview-questions" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      {/* Reading Progress Bar */}
      {pathname.startsWith("/blog/") && readingProgress > 0 && (
        <div
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-75"
          style={{ width: `${readingProgress}%` }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-sm shadow-blue-500/20">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="font-sans font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white uppercase underline decoration-blue-600 dark:decoration-blue-500 decoration-4 underline-offset-4 transition-all">
              DATA ANALYTICS PRO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 bg-blue-50/50 dark:bg-blue-950/30 dark:text-blue-400"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Newsletter Shortcut Button */}
            <a
              href="#newsletter-section"
              className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-all dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-sm"
            >
              Subscribe
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 px-4">
                <a
                  href="#newsletter-section"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm"
                >
                  Subscribe to Newsletter
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
