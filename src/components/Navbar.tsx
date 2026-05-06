"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, TrendingUp } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-amber-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow">
            <TrendingUp className="w-5 h-5 text-obsidian" strokeWidth={2.5} />
          </div>
          <span
            className="text-xl font-semibold tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            AI <span className="gradient-text-gold">accountant</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#6B6B80] hover:text-[#C8C8D4] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="text-sm text-[#C8C8D4] hover:text-white transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0A0F] px-5 py-2.5 rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#C8C8D4] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111118]/95 backdrop-blur-xl border-b border-amber-500/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#C8C8D4] hover:text-white transition-colors text-lg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-amber-500/10">
              <Link href="#" className="text-[#C8C8D4] text-center py-2">
                Sign In
              </Link>
              <Link
                href="#"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0A0F] text-center font-medium py-3 rounded-lg"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
