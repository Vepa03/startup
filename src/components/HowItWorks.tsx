"use client";

import { Upload, Cpu, LineChart, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: <Upload className="w-7 h-7" />,
    title: "Connect Your Data",
    description:
      "Integrate bank accounts, ERP systems or accounting software in one click. Supports CSV, PDF or API.",
    color: "#FBBF24",
  },
  {
    number: "02",
    icon: <Cpu className="w-7 h-7" />,
    title: "AI Analyzes Everything",
    description:
      "Our GPT-4o powered engine processes, categorizes and detects anomalies across all your financial data in seconds.",
    color: "#2DD4BF",
  },
  {
    number: "03",
    icon: <LineChart className="w-7 h-7" />,
    title: "Discover Insights",
    description:
      "Track your financial health through a real-time dashboard. Forecasts, risks, and opportunities — all in one place.",
    color: "#A78BFA",
  },
  {
    number: "04",
    icon: <CheckCircle2 className="w-7 h-7" />,
    title: "Automated Compliance",
    description:
      "VAT, corporate tax and statutory filings are prepared automatically. Share with your accountant in one click.",
    color: "#4ADE80",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-teal-400 tracking-widest uppercase mb-4">
            — Process
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="gradient-text-teal">Smart accounting</span>{" "}
            in 4 steps
          </h2>
          <p className="text-lg text-[#6B6B80] max-w-xl mx-auto">
            5 minutes to set up, benefits that last a lifetime. Integrating
            LedgerAI into your business has never been easier.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative text-center group">
                {/* Number bubble */}
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div
                    className="absolute inset-0 rounded-full opacity-20 blur-xl transition-opacity group-hover:opacity-40"
                    style={{ backgroundColor: step.color }}
                  />
                  <div
                    className="relative w-24 h-24 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
                    style={{
                      borderColor: `${step.color}40`,
                      backgroundColor: `${step.color}10`,
                    }}
                  >
                    <div style={{ color: step.color }}>{step.icon}</div>
                    <span
                      className="text-xs font-mono mt-1 opacity-60"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Pulse ring */}
                  <div
                    className="absolute inset-0 rounded-full pulse-ring opacity-20"
                    style={{ borderColor: step.color, border: `2px solid` }}
                  />
                </div>

                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6B80] leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow between steps (mobile hidden) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-[#3A3A50] text-2xl font-thin z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA box */}
        <div className="mt-20 glass-card rounded-3xl p-10 text-center glow-amber relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-amber-500/60 to-transparent" />
          <p className="text-sm text-amber-400 font-mono tracking-widest uppercase mb-4">
            Quick Setup
          </p>
          <h3
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            See your first analysis in{" "}
            <span className="gradient-text-gold">5 minutes</span>
          </h3>
          <p className="text-[#6B6B80] mb-8 max-w-lg mx-auto">
            No credit card required. Use all features free for 14 days.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0A0F] font-semibold px-8 py-4 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40"
          >
            Get Started — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
