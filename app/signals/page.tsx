"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/GoldButton";
import { StatCounter } from "@/components/ui/StatCounter";
import SignalTable from "@/components/signals/SignalTable";
import MonthlyChart from "@/components/signals/MonthlyChart";
import { signals } from "@/lib/mockData";

const resultScreenshots = [
  // Actual trade results
  { src: "/results/mt5-results-3.jpg", caption: "Closed Trades — P&L", type: "result" },
  { src: "/results/telegram-signal-1.jpg", caption: "Live Signal — Take Profits Hit", type: "signal" },
  { src: "/results/telegram-signal-2.jpg", caption: "Signal Results Channel", type: "signal" },
  // Charts
  { src: "/results/xauusd-chart-1.jpg", caption: "XAUUSD Live Chart", type: "chart" },
  { src: "/results/xauusd-chart-2.jpg", caption: "XAUUSD Analysis", type: "chart" },
  { src: "/results/xauusd-chart-3.jpg", caption: "XAUUSD Entry Point", type: "chart" },
  { src: "/results/xauusd-chart-4.jpg", caption: "XAUUSD Price Action", type: "chart" },
  { src: "/results/mt5-desktop.jpg", caption: "Professional MT5 Setup", type: "chart" },
  // Brand / lifestyle
  { src: "/results/vault-1.jpg", caption: "Apex Gold — Results Speak", type: "lifestyle" },
  { src: "/results/trader-dubai.jpg", caption: "Trading from Anywhere", type: "lifestyle" },
  { src: "/results/vault-2.jpg", caption: "Building Wealth with Apex Gold", type: "lifestyle" },
  { src: "/results/dubai-rolls.jpg", caption: "The Apex Lifestyle — Dubai", type: "lifestyle" },
  { src: "/brand/apex-hoodie-dubai.jpg", caption: "Apex Gold Trading — Dubai", type: "lifestyle" },
  { src: "/brand/gold-analysis-monitor.jpg", caption: "Gold Analysis", type: "chart" },
  { src: "/brand/gold-bar-watch-chart.jpg", caption: "Gold Trading Setup", type: "lifestyle" },
  { src: "/brand/apex-vault-bag.jpg", caption: "Apex Gold — The Brand", type: "lifestyle" },
];

const pairFilters = [
  "All",
  ...Array.from(new Set(signals.map((s) => s.pair))).sort(),
];

export default function SignalsPage() {
  const [pairFilter, setPairFilter] = useState<string>("All");

  const filteredSignals = useMemo(
    () =>
      pairFilter === "All"
        ? signals
        : signals.filter((s) => s.pair === pairFilter),
    [pairFilter]
  );

  const stats = useMemo(() => {
    const total = filteredSignals.length;
    const wonCount = filteredSignals.filter((s) => s.status === "won").length;
    const closedCount = filteredSignals.filter(
      (s) => s.status === "won" || s.status === "lost"
    ).length;
    const winRate = closedCount > 0 ? Math.round((wonCount / closedCount) * 100) : 0;
    const allPips = filteredSignals.map((s) => s.pips);
    const avgPips = total > 0 ? Math.round(allPips.reduce((sum, v) => sum + v, 0) / total) : 0;
    const bestTrade = total > 0 ? Math.max(...allPips) : 0;
    return { total, winRate, avgPips, bestTrade };
  }, [filteredSignals]);

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-bg-base)" }}>
      {/* Hero */}
      <section className="section-padding" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="container-max">
          <SectionHeading
            eyebrow="Signals"
            title="Trade Ideas & History"
            subtitle="Example trade ideas with entry, stop loss, and take-profit levels. For information only—not financial advice."
          />
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              marginTop: "16px",
              maxWidth: "640px",
            }}
          >
            Historical trade ideas. Past performance is not indicative of future
            results. See Legal &amp; Risk for full disclosure.
          </p>
        </div>
      </section>

      {/* Performance Dashboard */}
      <section className="section-padding container-max">
        <div
          className="reveal-group"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
            gap: "var(--space-3)",
            marginBottom: "var(--space-10)",
          }}
        >
          <div className="card reveal" style={{ textAlign: "center" }}>
            <StatCounter target={stats.total} label="Total Signals This Month" />
          </div>
          <div className="card reveal" style={{ textAlign: "center" }}>
            <StatCounter target={stats.winRate} suffix="%" label="Win Rate" />
          </div>
          <div className="card reveal" style={{ textAlign: "center" }}>
            <StatCounter target={20} suffix="+" label="Years Experience Between Traders" />
          </div>
          <div className="card reveal" style={{ textAlign: "center" }}>
            <StatCounter target={20000} prefix="+" label="Avg Pips Per Month" />
          </div>
          <div className="card reveal" style={{ textAlign: "center" }}>
            <StatCounter target={stats.bestTrade} prefix="+" label="Best Trade This Month" />
          </div>
        </div>

        {/* Pair filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
          {pairFilters.map((pair) => (
            <button
              key={pair}
              onClick={() => setPairFilter(pair)}
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: "var(--radius-pill)",
                border: pairFilter === pair ? "1px solid transparent" : "1px solid var(--color-border-subtle)",
                background: pairFilter === pair ? "var(--color-accent-gold)" : "transparent",
                color: pairFilter === pair ? "var(--color-bg-base)" : "var(--color-text-secondary)",
                cursor: "pointer",
                transition: "all var(--transition-base)",
              }}
              onMouseEnter={(e) => {
                if (pairFilter !== pair) {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-default)";
                }
              }}
              onMouseLeave={(e) => {
                if (pairFilter !== pair) {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-subtle)";
                }
              }}
            >
              {pair}
            </button>
          ))}
        </div>

        {/* Signal Table */}
        <div className="reveal" style={{ marginBottom: "var(--space-10)" }}>
          <SignalTable signals={filteredSignals} />
        </div>

        {/* Monthly Chart */}
        <div className="card reveal" style={{ marginBottom: "var(--space-10)" }}>
          <MonthlyChart />
        </div>

        {/* Results Gallery */}
        <div className="reveal" style={{ marginBottom: "var(--space-10)" }}>
          <SectionHeading
            eyebrow="Proof of Results"
            title="Real Trades. Real Profits."
            subtitle="Screenshots directly from MT5 accounts and our Telegram signal channel — unedited and timestamped."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 160px), 1fr))",
              gap: "16px",
            }}
          >
            {resultScreenshots.map((shot) => (
              <div
                key={shot.src}
                className="card reveal"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "9/16", maxHeight: "340px" }}>
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color:
                        shot.type === "result"
                          ? "#4ade80"
                          : shot.type === "signal"
                          ? "#60a5fa"
                          : shot.type === "chart"
                          ? "#a78bfa"
                          : shot.type === "lifestyle"
                          ? "var(--color-accent-gold)"
                          : "rgba(255,255,255,0.5)",
                      marginBottom: "4px",
                    }}
                  >
                    {shot.type === "result"
                      ? "Trade Result"
                      : shot.type === "signal"
                      ? "Live Signal"
                      : shot.type === "chart"
                      ? "Chart Analysis"
                      : shot.type === "lifestyle"
                      ? "Apex Lifestyle"
                      : "Apex Gold"}
                  </span>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)", margin: 0 }}>
                    {shot.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            Past results are not indicative of future performance. Trading involves risk.
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "6rem",
          }}
        >
          <GoldButton variant="primary" href="/contact" showArrow>
            Get Access to Live Signals
          </GoldButton>
        </div>
      </section>
    </main>
  );
}
