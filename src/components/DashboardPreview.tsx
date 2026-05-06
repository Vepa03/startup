"use client";

import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

const METRICS = [
  {
    label: "Monthly Revenue",
    value: "$284,320",
    change: "+12.4%",
    up: true,
    color: "#4ADE80",
  },
  {
    label: "Expenses",
    value: "$91,750",
    change: "-3.2%",
    up: false,
    color: "#2DD4BF",
  },
  {
    label: "Net Profit",
    value: "$192,570",
    change: "+18.7%",
    up: true,
    color: "#FBBF24",
  },
];

const ALERTS = [
  {
    type: "warning",
    icon: <AlertTriangle className="w-4 h-4" />,
    text: "VAT return due in 3 days",
    color: "#FB923C",
  },
  {
    type: "success",
    icon: <CheckCircle className="w-4 h-4" />,
    text: "Payroll filing completed",
    color: "#4ADE80",
  },
  {
    type: "warning",
    icon: <AlertTriangle className="w-4 h-4" />,
    text: "Anomaly detected in 3 transactions",
    color: "#FBBF24",
  },
];

const BARS = [65, 82, 55, 91, 73, 88, 79, 95, 68, 87, 76, 92];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function DashboardPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0D0D18] to-[#0A0A0F] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-teal-400 tracking-widest uppercase mb-4">
            — Dashboard
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Everything in{" "}
            <span className="gradient-text-teal">one screen</span>
          </h2>
          <p className="text-lg text-[#6B6B80] max-w-xl mx-auto">
            Track your financial health in real time. Clear insights instead of complex reports.
          </p>
        </div>

        {/* Fake dashboard */}
        <div className="glass-card rounded-3xl overflow-hidden glow-amber max-w-5xl mx-auto">
          {/* Window chrome */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#111118]/80 border-b border-amber-500/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-teal-500/60" />
            </div>
            <div
              className="text-xs text-[#6B6B80] bg-[#0A0A0F]/60 px-4 py-1.5 rounded-full border border-white/5"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              app.ledgerai.com/dashboard
            </div>
            <div className="w-20" />
          </div>

          <div className="p-6 bg-[#0D0D18]/60">
            {/* Top metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="bg-[#111120]/80 rounded-xl p-4 border border-white/5"
                >
                  <p className="text-xs text-[#6B6B80] mb-2">{m.label}</p>
                  <p
                    className="text-xl font-bold text-white mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {m.value}
                  </p>
                  <div
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{ color: m.color }}
                  >
                    {m.up ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {m.change} this month
                  </div>
                </div>
              ))}
            </div>

            {/* Chart + Alerts */}
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Bar chart */}
              <div className="lg:col-span-2 bg-[#111120]/80 rounded-xl p-5 border border-white/5">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-sm font-semibold text-white">Annual Revenue Analysis</p>
                  <span className="text-xs text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    2024
                  </span>
                </div>
                <div className="flex items-end gap-2 h-32">
                  {BARS.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-sm transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i === 11
                            ? "linear-gradient(to top, #F59E0B, #FBBF24)"
                            : "linear-gradient(to top, rgba(245,158,11,0.25), rgba(245,158,11,0.4))",
                        }}
                      />
                      <span className="text-[8px] text-[#6B6B80]">{MONTHS[i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-[#111120]/80 rounded-xl p-5 border border-white/5">
                <p className="text-sm font-semibold text-white mb-4">AI Alerts</p>
                <div className="space-y-3">
                  {ALERTS.map((alert, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg"
                      style={{ backgroundColor: `${alert.color}10`, border: `1px solid ${alert.color}20` }}
                    >
                      <span style={{ color: alert.color }} className="mt-0.5 shrink-0">
                        {alert.icon}
                      </span>
                      <p className="text-xs text-[#C8C8D4] leading-snug">{alert.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#6B6B80]">Compliance Score</span>
                    <span className="text-teal-400 font-semibold">94/100</span>
                  </div>
                  <div className="w-full h-2 bg-[#0A0A0F] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-400"
                      style={{ width: "94%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
