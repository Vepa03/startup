"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    tag: null,
    monthlyPrice: 29,
    annualPrice: 24,
    description: "Perfect for small businesses and sole traders.",
    features: [
      "500 transactions/month",
      "OCR document scanning",
      "VAT calculation",
      "Email support",
      "2 users",
      "Basic reporting",
    ],
    cta: "Start Free",
    highlight: false,
    accent: "#6B6B80",
  },
  {
    name: "Professional",
    tag: "Most Popular",
    monthlyPrice: 79,
    annualPrice: 65,
    description: "Powerful AI features for growing businesses.",
    features: [
      "Unlimited transactions",
      "Revenue & expense forecasting",
      "Tax risk analysis",
      "Cash flow projection",
      "10 users",
      "Priority support",
      "API access",
      "Accountant sharing",
    ],
    cta: "Try Free 14 Days",
    highlight: true,
    accent: "#F59E0B",
  },
  {
    name: "Enterprise",
    tag: null,
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Tailored solutions for large organizations.",
    features: [
      "Everything included",
      "Custom ERP integration",
      "Dedicated AI model",
      "SLA guarantee",
      "Unlimited users",
      "24/7 phone support",
      "On-site setup",
      "Custom reporting",
    ],
    cta: "Get a Quote",
    highlight: false,
    accent: "#2DD4BF",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-amber-400 tracking-widest uppercase mb-4">
            — Pricing
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Choose the plan that{" "}
            <span className="gradient-text-gold">fits your business</span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-[#1A1A28] rounded-full p-1 border border-white/5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !annual
                  ? "bg-amber-500 text-[#0A0A0F]"
                  : "text-[#6B6B80] hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? "bg-amber-500 text-[#0A0A0F]"
                  : "text-[#6B6B80] hover:text-white"
              }`}
            >
              Annual
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                  annual ? "bg-[#0A0A0F]/20 text-[#0A0A0F]" : "bg-teal-400/20 text-teal-400"
                }`}
              >
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "glow-amber border-2 border-amber-500/40 bg-gradient-to-b from-[#1A1A10] to-[#1A1A28]"
                  : "glass-card"
              }`}
            >
              {plan.tag && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0A0F] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
                    <Zap className="w-3 h-3" />
                    {plan.tag}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-[#6B6B80]">{plan.description}</p>
              </div>

              <div className="mb-8">
                {plan.monthlyPrice === 0 ? (
                  <div
                    className="text-4xl font-bold gradient-text-teal"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Custom
                  </div>
                ) : (
                  <div className="flex items-end gap-2">
                    <span
                      className="text-5xl font-bold text-white"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[#6B6B80] mb-2">/ay</span>
                  </div>
                )}
                {plan.monthlyPrice > 0 && annual && (
                  <p className="text-xs text-teal-400 mt-1">
                    Billed annually at ${(plan.annualPrice * 12).toLocaleString("en-US")}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[#C8C8D4]">
                    <Check
                      className="w-4 h-4 shrink-0"
                      style={{ color: plan.accent }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full text-center font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm ${
                  plan.highlight
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0A0F] hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
                    : "border border-white/10 text-[#C8C8D4] hover:border-amber-500/30 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6B6B80] mt-10">
          14-day free trial on all plans • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
