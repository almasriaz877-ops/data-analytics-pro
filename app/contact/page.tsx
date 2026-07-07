"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Check, AlertCircle, Share2, Sparkles, Database } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("Please fill in all the fields in the contact form.");
      return;
    }

    // Success simulation
    setSubmitted(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    // Automatically reset submit message after 8 seconds
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Get in Touch
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Have an inquiry, feedback on an article, or interested in corporate analytics bootcamps? We would love to hear from you.
        </p>
      </div>

      {/* 2. Main content block: Form on Left, Contacts & Map on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN: Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              Send an Inquiry Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Your inquiry will be routed directly to our editorial or support engineers.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-start gap-3 animate-fadeIn">
              <Check className="w-6 h-6 flex-shrink-0" />
              <div>
                <strong className="block font-bold text-base text-white mb-1">
                  Inquiry sent successfully!
                </strong>
                <span className="text-xs leading-relaxed text-slate-400">
                  Thank you for contacting Data Analytics Pro. Our staff typically responds to valid technical or business queries within 24 to 48 hours.
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl flex items-center gap-2 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-sm text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="name@organization.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-sm text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Inquiry Subject
                  </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Corporate Analytics Bootcamp Partnership"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-sm text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Detailed Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Type your question or query here in detail..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl text-sm text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: Contact details and Map (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card A: Contact Details */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              Studio Headquarters
            </h3>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white font-semibold">Location</strong>
                  <span>100 Broadway St, New York, NY 10005, United States</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white font-semibold">Support Email</strong>
                  <span className="font-mono">hello@dataanalyticspro.edu</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-900 dark:text-white font-semibold">Phone</strong>
                  <span className="font-mono">+1 (555) 246-8101</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card B: Google Maps Styled Placeholder */}
          <div className="bg-slate-950 text-white rounded-3xl p-6 h-64 relative overflow-hidden border border-slate-900 flex flex-col justify-between shadow-sm">
            {/* Visual map coordinate lines overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:15px_15px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative flex justify-between items-start">
              <div className="space-y-0.5">
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                  Interactive Coordinates Pin
                </span>
                <h4 className="text-sm font-bold text-white">New York HQ Platform</h4>
              </div>
              <div className="p-2 bg-blue-600 text-white rounded-full">
                <MapPin className="w-4 h-4 animate-bounce" />
              </div>
            </div>

            {/* Custom map graphics indicator */}
            <div className="relative border border-slate-800 bg-slate-900/60 p-3 rounded-xl flex items-center gap-3 text-xs text-slate-400">
              <Database className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>Map Coordinates: 40.7128° N, 74.0060° W. Live GPS active link simulated.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
