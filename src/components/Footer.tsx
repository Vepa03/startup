import Link from "next/link";
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#" },
    { label: "What's New", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Community", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "GDPR", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <TrendingUp className="w-5 h-5 text-[#0A0A0F]" strokeWidth={2.5} />
              </div>
              <span
                className="text-xl font-semibold"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Ledger<span className="gradient-text-gold">AI</span>
              </span>
            </Link>
            <p className="text-sm text-[#6B6B80] leading-relaxed mb-6">
              The most advanced AI-powered accounting platform for modern businesses.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm text-[#6B6B80]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>support@ledgerai.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B6B80] hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#6B6B80]">
          <p>© {new Date().getFullYear()} LedgerAI Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
