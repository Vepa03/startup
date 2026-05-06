"use client";

import {
  Brain,
  BarChart3,
  Shield,
  FileSearch,
  Workflow,
  Bell,
  ArrowUpRight,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Smart Revenue Analysis",
    description:
      "AI automatically categorizes all your revenue streams and predicts seasonal trends before they happen.",
    accent: "#FBBF24",
    tag: "Core",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Tax Risk Engine",
    description:
      "Detects potential tax risks before filing, bringing penalizing errors down to zero.",
    accent: "#2DD4BF",
    tag: "Pro",
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: "Smart Document OCR",
    description:
      "Scans invoices, receipts and bank statements in seconds, automatically converting them into accounting entries.",
    accent: "#A78BFA",
    tag: "Core",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Cash Flow Forecasting",
    description:
      "Stay ahead with 3-month cash flow projections, prevent liquidity crises before they occur.",
    accent: "#FB923C",
    tag: "Pro",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Automation Engines",
    description:
      "Fully automate repetitive accounting tasks with customizable business rules.",
    accent: "#4ADE80",
    tag: "Enterprise",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Compliance Alerts",
    description:
      "Never miss VAT, payroll or corporate tax deadlines. Smart reminders always keep you on track.",
    accent: "#38BDF8",
    tag: "Core",
  },
];

const TAG_COLORS: Record<string, string> = {
  Core: "text-teal-400 bg-teal-400/10 border-teal-400/20",
  Pro: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Enterprise: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0D0D1A] to-[#0A0A0F] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-amber-400 tracking-widest uppercase mb-4">
            — Features
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            The{" "}
            <span className="gradient-text-gold">next generation</span>{" "}
            of accounting
          </h2>
          <p className="text-lg text-[#6B6B80] max-w-2xl mx-auto">
            Leave traditional accounting in the past. LedgerAI transforms your
            financial operations into a system that saves time, never makes
            mistakes, and keeps getting smarter.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{
                  backgroundColor: `${feature.accent}15`,
                  color: feature.accent,
                  border: `1px solid ${feature.accent}25`,
                }}
              >
                {feature.icon}
              </div>

              {/* Tag + Title */}
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-semibold text-white group-hover:text-amber-200 transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {feature.title}
                </h3>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ml-3 mt-0.5 shrink-0 ${TAG_COLORS[feature.tag]}`}
                >
                  {feature.tag}
                </span>
              </div>

              <p className="text-sm text-[#6B6B80] leading-relaxed mb-5">
                {feature.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: feature.accent }}>
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Shimmer on hover */}
              <div className="absolute inset-0 rounded-2xl shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
