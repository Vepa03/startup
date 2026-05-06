"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Does LedgerAI integrate with my existing accounting software?",
    a: "Yes. We offer native integrations with QuickBooks, Xero, NetSuite, SAP and more. We also support REST API and CSV/Excel import so any system can be connected. Setup typically takes less than 30 minutes.",
  },
  {
    q: "Is my data secure? Are you GDPR compliant?",
    a: "All data is encrypted with AES-256 and stored in SOC 2 Type II certified data centers. We are fully GDPR compliant and ISO 27001 certified. Your data is never shared with third parties or used for AI model training.",
  },
  {
    q: "Can I use it without accounting knowledge?",
    a: "Yes — LedgerAI is designed for both accountants and entrepreneurs with no accounting background. The platform automatically categorizes transactions and provides plain-language explanations. For complex situations, you can also connect a certified accountant through the platform.",
  },
  {
    q: "What happens if something gets miscategorized?",
    a: "You can correct any AI decision with a single click. Your corrections feed back into the system's learning process, so similar transactions will be classified correctly in the future. Most clients reach 99%+ accuracy within 2 weeks.",
  },
  {
    q: "How many users can use it simultaneously?",
    a: "The Starter plan includes 2 users, Professional includes 10, and Enterprise has unlimited users. Custom permission levels can be assigned per user: read-only, data entry, or full admin.",
  },
  {
    q: "Is it easy to cancel?",
    a: "Yes — cancel at any time with no fees or penalties. After cancellation, you can export all your data for 90 days. There are no lock-in contracts.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/5 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/2 transition-colors group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#C8C8D4] font-medium group-hover:text-white transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-sm text-[#6B6B80] leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-amber-400 tracking-widest uppercase mb-4">
            — FAQ
          </p>
          <h2
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Frequently asked{" "}
            <span className="gradient-text-gold">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <p className="text-center text-sm text-[#6B6B80] mt-10">
          Still have questions?{" "}
          <a href="mailto:support@ledgerai.com" className="text-amber-400 hover:underline">
            support@ledgerai.com
          </a>{" "}
          — we&apos;re happy to help.
        </p>
      </div>
    </section>
  );
}
