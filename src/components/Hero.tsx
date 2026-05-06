"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "98.7", suffix: "%", label: "Accuracy Rate" },
  { value: "2.4", suffix: "M+", label: "Transactions Processed" },
  { value: "500", suffix: "+", label: "Active Businesses" },
  { value: "62", suffix: "%", label: "Time Saved" },
];

const TERMINAL_LINES = [
  { delay: 0, text: "$ ledger-ai analyze --fiscal-year 2024", type: "command" },
  { delay: 800, text: "✓ 12,847 transactions loaded", type: "success" },
  { delay: 1400, text: "✓ Anomaly detection: 3 suspicious entries found", type: "warning" },
  { delay: 2100, text: "✓ Tax optimization in progress...", type: "info" },
  { delay: 2900, text: "✓ Estimated savings: $47,320", type: "highlight" },
  { delay: 3500, text: "✓ Report generated — Q4_2024_report.pdf", type: "success" },
];

function TerminalLine({
  text,
  type,
  visible,
}: {
  text: string;
  type: string;
  visible: boolean;
}) {
  const colors: Record<string, string> = {
    command: "#FBBF24",
    success: "#2DD4BF",
    warning: "#F97316",
    info: "#C8C8D4",
    highlight: "#A78BFA",
  };
  return (
    <div
      className={`text-sm font-mono transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      style={{ color: colors[type] || "#C8C8D4", fontFamily: "JetBrains Mono, monospace" }}
    >
      {text}
    </div>
  );
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay + 800);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400 font-medium">
              GPT-4o Powered Accounting Engine
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Let{" "}
            <span className="gradient-text-gold text-glow-amber">
              artificial intelligence
            </span>{" "}
            handle your accounting
          </h1>

          <p
            className={`text-lg text-[#6B6B80] leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Analyze your financial data in real time, detect tax risks before they happen, and fully automate compliance workflows. Eliminate human error for good.
          </p>

          {/* Pills */}
          <div
            className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { icon: <ShieldCheck className="w-4 h-4" />, text: "GDPR Compliant" },
              { icon: <Zap className="w-4 h-4" />, text: "Real-Time" },
              { icon: <Sparkles className="w-4 h-4" />, text: "AI Powered" },
            ].map((pill) => (
              <div
                key={pill.text}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A28] border border-white/5 text-sm text-[#C8C8D4]"
              >
                <span className="text-amber-400">{pill.icon}</span>
                {pill.text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="#"
              className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0A0F] font-semibold px-7 py-4 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02]"
            >
              Try Free for 14 Days
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="flex items-center gap-2 text-[#C8C8D4] border border-white/10 px-7 py-4 rounded-xl hover:border-amber-500/30 hover:text-white transition-all duration-200"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Right column — Terminal */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="glass-card rounded-2xl overflow-hidden glow-amber">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-amber-500/10 bg-[#111118]/80">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-teal-500/70" />
              <span
                className="ml-3 text-xs text-[#6B6B80]"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                ledger-ai — zsh
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 space-y-3 min-h-[260px] bg-[#0D0D16]/80">
              {TERMINAL_LINES.map((line, i) => (
                <TerminalLine
                  key={i}
                  text={line.text}
                  type={line.type}
                  visible={visibleLines.includes(i)}
                />
              ))}
              {visibleLines.length >= TERMINAL_LINES.length && (
                <div
                  className="text-sm cursor-blink"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    color: "#C8C8D4",
                  }}
                >
                  $
                </div>
              )}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 text-center"
              >
                <div
                  className="text-2xl font-bold gradient-text-gold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {stat.value}
                  <span className="text-lg">{stat.suffix}</span>
                </div>
                <div className="text-xs text-[#6B6B80] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
    </section>
  );
}
