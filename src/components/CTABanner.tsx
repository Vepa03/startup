"use client";

import { ArrowRight, TrendingUp } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-amber-500/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 mb-8 shadow-2xl shadow-amber-500/30 mx-auto">
          <TrendingUp className="w-10 h-10 text-[#0A0A0F]" strokeWidth={2} />
        </div>

        <h2
          className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Ready to{" "}
          <span className="gradient-text-gold text-glow-amber">
            transform
          </span>
          <br />
          your accounting?
        </h2>

        <p className="text-xl text-[#6B6B80] mb-12 max-w-2xl mx-auto leading-relaxed">
          Try all Pro features free for 14 days. No credit card needed, instant setup, cancel whenever you want.
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <a
            href="#"
            className="group flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0A0F] font-bold px-10 py-5 rounded-2xl text-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02]"
          >
            Start Free for 14 Days
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="flex items-center gap-3 border border-white/10 text-[#C8C8D4] font-medium px-10 py-5 rounded-2xl text-lg hover:border-amber-500/30 hover:text-white transition-all duration-200"
          >
            Request a Demo
          </a>
        </div>

        {/* Trust line */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-sm text-[#6B6B80]">
          {[
            "✓ GDPR Compliant",
            "✓ ISO 27001",
            "✓ 99.9% Uptime SLA",
            "✓ 24/7 Support",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
