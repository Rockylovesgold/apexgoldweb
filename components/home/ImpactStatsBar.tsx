"use client";

import { StatCounter } from "@/components/ui/StatCounter";

const stats = [
  { value: 5000,  suffix: "+",  prefix: "",  label: "Community Members" },
  { value: 86,    suffix: "%",  prefix: "",  label: "Avg Win Rate" },
  { value: 20,    suffix: "+",  prefix: "",  label: "Years Experience" },
  { value: 20000, suffix: "+",  prefix: "",  label: "Avg Pips / Month" },
  { value: 150,   suffix: "+",  prefix: "",  label: "Signals / Month" },
  { value: 8,     suffix: "–10", prefix: "", label: "Daily Signals" },
];

export function ImpactStatsBar() {
  return (
    <section className="relative overflow-hidden border-y" style={{ borderColor: "rgba(200,150,12,0.15)", background: "linear-gradient(180deg, #0d0e10 0%, #0f1114 100%)" }}>
      {/* Top gold line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(200,150,12,0.5) 30%, rgba(240,208,96,0.8) 50%, rgba(200,150,12,0.5) 70%, transparent 100%)" }} />

      {/* Ambient glow */}
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 120% at 50% 50%, rgba(200,150,12,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container-max relative" style={{ paddingTop: "clamp(28px, 5vw, 52px)", paddingBottom: "clamp(28px, 5vw, 52px)" }}>
        <div
          className="reveal-group impact-stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(200,150,12,0.08)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(200,150,12,0.12)",
          }}
        >
          {stats.map(({ value, suffix, prefix, label }, i) => (
            <div
              key={label}
              className="reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "clamp(16px, 3vw, 28px) clamp(12px, 2vw, 20px)",
                background: "linear-gradient(160deg, #0f1114 0%, #0c0d0f 100%)",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Number with gold gradient */}
              <div
                className="stat-number"
                data-target={value}
                data-prefix={prefix}
                data-suffix={suffix}
                suppressHydrationWarning
                style={{
                  background: "linear-gradient(160deg, #F0D060 0%, #D4A820 40%, #C8960C 70%, #9A7510 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "clamp(1.35rem, 4vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {prefix}{value.toLocaleString()}{suffix}
              </div>

              {/* Label */}
              <p style={{
                fontSize: "clamp(9px, 1.8vw, 11px)",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(168,162,158,0.85)",
                margin: 0,
                lineHeight: 1.3,
              }}>
                {label}
              </p>

              {/* Bottom accent line on hover — pure CSS */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: "20%",
                right: "20%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(200,150,12,0.4), transparent)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }} className="stat-accent-line" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(200,150,12,0.5) 30%, rgba(240,208,96,0.8) 50%, rgba(200,150,12,0.5) 70%, transparent 100%)" }} />
    </section>
  );
}
