"use client";

import { GoldButton } from "@/components/ui/GoldButton";

export function FinalCTA() {
  return (
    <section
      id="join"
      className="cta-banner reveal"
    >
      <div className="container-max" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <span className="label-eyebrow" style={{ display: "block", marginBottom: "16px" }}>
            Get started
          </span>
          <h2 style={{ marginBottom: "16px" }}>Get access</h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "480px",
              margin: "0 auto 40px",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Join the Apex Gold Trading community. Gold-focused analysis, trade ideas, and education in one high-trust environment.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", justifyContent: "center" }}>
            <GoldButton variant="primary" size="lg" href="https://t.me/+Ew81mZwq2x8yNTQ8" showArrow>
              Join the Community
            </GoldButton>
            <GoldButton variant="secondary" size="lg" href="/about">
              Learn more
            </GoldButton>
          </div>
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              marginTop: "24px",
            }}
          >
            No lock-in. Risk disclaimer applies. See{" "}
            <a
              href="/legal"
              style={{ color: "var(--color-accent-gold)", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = "none"; }}
            >
              Legal &amp; Risk
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
