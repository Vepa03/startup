"use client";

import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "CFO, TechStart Inc.",
    avatar: "SM",
    rating: 5,
    text: "Thanks to LedgerAI, our monthly close process went from 3 weeks down to 2 days. Being able to see tax risks in advance is an invaluable advantage.",
    accent: "#FBBF24",
  },
  {
    name: "James Hartley",
    role: "Founder, Hartley Advisory",
    avatar: "JH",
    rating: 5,
    text: "As a freelance accountant, I manage over 40 clients from a single platform. AI anomaly detection has brought my audit findings down to zero.",
    accent: "#2DD4BF",
  },
  {
    name: "Emma Clarke",
    role: "Finance Director, Clarke Group",
    avatar: "EC",
    rating: 5,
    text: "Multi-currency transactions were creating huge complexity in our import-export business. LedgerAI handles all exchange rate calculations automatically — reports are flawless.",
    accent: "#A78BFA",
  },
  {
    name: "Daniel Brooks",
    role: "Managing Director, Brooks Construction",
    avatar: "DB",
    rating: 5,
    text: "Progress billing in construction is incredibly complex. LedgerAI automated project-based cost analysis and we can now see budget overruns before they happen.",
    accent: "#FB923C",
  },
  {
    name: "Olivia Chen",
    role: "Partner, Chen & Associates CPA",
    avatar: "OC",
    rating: 5,
    text: "Work that used to take 3 people in our accounting firm is now done by one. Client satisfaction is up 40% and errors are practically zero.",
    accent: "#4ADE80",
  },
  {
    name: "Ryan Foster",
    role: "E-commerce Entrepreneur",
    avatar: "RF",
    rating: 5,
    text: "It automatically pulls my sales from Amazon and Shopify, and prepares my VAT returns automatically. Accounting is no longer my problem.",
    accent: "#38BDF8",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0D0D1A] to-[#0A0A0F] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-amber-400 tracking-widest uppercase mb-4">
            — Testimonials
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Trusted by{" "}
            <span className="gradient-text-gold">businesses worldwide</span>
          </h2>
          <p className="text-lg text-[#6B6B80] max-w-xl mx-auto">
            Over 500 businesses have transformed their accounting processes with LedgerAI.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 opacity-30"
                style={{ color: t.accent }}
              />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-current text-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-[#C8C8D4] leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[#0A0A0F] shrink-0"
                  style={{ backgroundColor: t.accent }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#6B6B80]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-20 text-center">
          <p className="text-sm text-[#6B6B80] mb-8 uppercase tracking-widest font-mono">
            Platforms we integrate with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {["QuickBooks", "Xero", "SAP", "NetSuite", "Shopify", "Stripe", "Plaid"].map(
              (brand) => (
                <div
                  key={brand}
                  className="text-[#C8C8D4] font-semibold text-lg tracking-wide border border-white/10 px-5 py-2 rounded-lg"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
