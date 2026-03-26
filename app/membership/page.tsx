"use client";

import { useState } from "react";
import { Check, X as XIcon, ChevronDown, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldButton } from "@/components/ui/GoldButton";
import { testimonials } from "@/lib/mockData";

/* ─── Tier data ─── */
const tiers = [
  {
    id: "starter",
    name: "Starter",
    badge: null,
    price: "Free",
    period: "",
    description: "Get a feel for the community and sample our analysis before committing.",
    cta: "Get Started — Free",
    ctaHref: "/contact",
    highlighted: false,
    features: [
      { text: "Weekly XAU/USD market wrap-up",       included: true  },
      { text: "Access to public educational content", included: true  },
      { text: "Community Discord (read-only)",        included: true  },
      { text: "Daily trade signals",                  included: false },
      { text: "Live signal alerts (Telegram/app)",    included: false },
      { text: "Full educational library",             included: false },
      { text: "Community Discord (full access)",      included: false },
      { text: "Monthly group analysis call",          included: false },
      { text: "1-on-1 mentorship sessions",           included: false },
      { text: "Priority signal notifications",        included: false },
      { text: "VIP Telegram channel",                 included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    badge: "Most popular",
    price: "£49",
    period: "/ month",
    description: "Everything you need — daily signals, community, and the full education library.",
    cta: "Join Premium",
    ctaHref: "/contact",
    highlighted: true,
    features: [
      { text: "Weekly XAU/USD market wrap-up",       included: true },
      { text: "Access to public educational content", included: true },
      { text: "Community Discord (read-only)",        included: true },
      { text: "Daily trade signals",                  included: true },
      { text: "Live signal alerts (Telegram/app)",    included: true },
      { text: "Full educational library",             included: true },
      { text: "Community Discord (full access)",      included: true },
      { text: "Monthly group analysis call",          included: true },
      { text: "1-on-1 mentorship sessions",           included: false },
      { text: "Priority signal notifications",        included: false },
      { text: "VIP Telegram channel",                 included: false },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    badge: "Best results",
    price: "£199",
    period: "/ month",
    description: "The complete package. Priority access, mentorship, and the exclusive VIP channel.",
    cta: "Apply for Elite",
    ctaHref: "/contact",
    highlighted: false,
    features: [
      { text: "Weekly XAU/USD market wrap-up",       included: true },
      { text: "Access to public educational content", included: true },
      { text: "Community Discord (read-only)",        included: true },
      { text: "Daily trade signals",                  included: true },
      { text: "Live signal alerts (Telegram/app)",    included: true },
      { text: "Full educational library",             included: true },
      { text: "Community Discord (full access)",      included: true },
      { text: "Monthly group analysis call",          included: true },
      { text: "1-on-1 mentorship sessions",           included: true },
      { text: "Priority signal notifications",        included: true },
      { text: "VIP Telegram channel",                 included: true },
    ],
  },
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "Who is this community for?",
    a: "Apex Gold Trading is built for retail traders at any stage who want to specialise in gold (XAU/USD). Whether you've never placed a trade or you're already active in the markets, we have content and signals calibrated to your level.",
  },
  {
    q: "How are the signals delivered?",
    a: "Premium and Elite members receive signals via a private Telegram channel and optionally via email. Signals include entry, stop-loss, and up to three take-profit levels. You can act immediately or wait for your own confirmation — we always explain the rationale.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. Both Premium and Elite plans are billed monthly with no long-term lock-in. Cancel before your next billing date and you won't be charged again. We don't believe in holding members hostage.",
  },
  {
    q: "What is the verified win rate based on?",
    a: "Our 90% success rate is calculated over closed trades (TP1 or higher hit before stop-loss). All results are logged with entry date, price, and outcome and are available for member review in the signal history library.",
  },
  {
    q: "Is this financial advice?",
    a: "No. All signals, analysis, and content published by Apex Gold Trading are for educational and informational purposes only. They do not constitute regulated financial advice. Please read our full Legal & Risk disclosure before trading.",
  },
  {
    q: "How do I upgrade from Starter to Premium or Elite?",
    a: "Simply contact us via the form on this page or directly on Telegram. Upgrades take effect within 24 hours. Downgrades are processed at the end of your current billing cycle.",
  },
];

/* ─── Reasons to join ─── */
const reasons = [
  { title: "Specialised, not scattered",   body: "We focus exclusively on gold. Our analysis is deeper because we aren't spreading attention across 50 pairs." },
  { title: "Transparent track record",     body: "Every signal is logged. Wins and losses. You can verify our results before spending a penny." },
  { title: "Education alongside signals",  body: "We explain every setup so you build real understanding — not just copy-trade dependency." },
  { title: "Community of serious traders", body: "Members share ideas and critique setups. The group raises everyone's game, not just the analyst's." },
  { title: "No lock-in commitment",        body: "Month-to-month billing. If we don't deliver value, you leave. That keeps us accountable." },
];

/* ─── Component ─── */
export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-bg-base)" }}>

      {/* ── Hero ── */}
      <section className="section-padding" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="container-max">
          <SectionHeading
            eyebrow="Membership"
            title="Choose your access level"
            subtitle="From free market updates to VIP mentorship — find the plan that matches where you are and where you're going."
          />

          {/* Trust bar */}
          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              justifyContent: "center",
              marginTop: "var(--space-5)",
            }}
          >
            {[
              { num: "5,000+", label: "Active members" },
              { num: "90%",    label: "Success rate" },
              { num: "8",      label: "Years experience" },
              { num: "£0",     label: "Lock-in cost" },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--color-accent-gold)", margin: 0 }}>
                  {num}
                </p>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", margin: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tier cards ── */}
      <section className="section-padding container-max" style={{ paddingTop: 0 }}>
        <div
          className="reveal-group"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-3)",
            alignItems: "start",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="reveal"
              style={{
                background: tier.highlighted ? "var(--color-bg-elevated)" : "var(--color-bg-surface)",
                border: tier.highlighted
                  ? "1px solid rgba(201,168,76,0.35)"
                  : "1px solid var(--color-border-subtle)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-4)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxShadow: tier.highlighted
                  ? "0 0 32px rgba(201,168,76,0.08)"
                  : "var(--shadow-card)",
              }}
            >
              {/* Gold top line on highlighted */}
              {tier.highlighted && (
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, var(--color-accent-gold), transparent)",
                    borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                  }}
                />
              )}

              {/* Badge */}
              {tier.badge && (
                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    padding: "4px 12px",
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    color: "var(--color-accent-gold)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  {tier.badge}
                </span>
              )}

              <h3 style={{ marginBottom: "4px" }}>{tier.name}</h3>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "12px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-4xl)",
                    fontWeight: 700,
                    color: tier.highlighted ? "var(--color-accent-gold)" : "var(--color-text-primary)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
                    {tier.period}
                  </span>
                )}
              </div>

              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-secondary)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {tier.description}
              </p>

              {/* Feature list */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 var(--space-4)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flex: 1,
                }}
              >
                {tier.features.map(({ text, included }) => (
                  <li
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      opacity: included ? 1 : 0.4,
                    }}
                  >
                    {included ? (
                      <Check
                        size={16}
                        style={{
                          color: "var(--color-accent-gold)",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                    ) : (
                      <XIcon
                        size={16}
                        style={{
                          color: "var(--color-text-muted)",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                    )}
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        color: included
                          ? "var(--color-text-secondary)"
                          : "var(--color-text-muted)",
                      }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <GoldButton
                variant={tier.highlighted ? "primary" : "secondary"}
                href={tier.ctaHref}
                showArrow
              >
                {tier.cta}
              </GoldButton>
            </div>
          ))}
        </div>

        <p
          className="reveal"
          style={{
            textAlign: "center",
            fontSize: "var(--text-xs)",
            color: "var(--color-text-muted)",
            marginTop: "var(--space-4)",
          }}
        >
          All plans billed monthly. Cancel anytime. Prices exclusive of VAT.{" "}
          <a href="/legal" style={{ color: "var(--color-accent-gold)", textDecoration: "none" }}>
            Risk disclaimer applies.
          </a>
        </p>
      </section>

      {/* ── 5 reasons to join ── */}
      <section className="section-padding" style={{ background: "var(--color-bg-surface)", borderTop: "1px solid var(--color-border-subtle)" }}>
        <div className="container-max">
          <SectionHeading
            eyebrow="Why join"
            title="5 reasons members stay"
          />

          <div className="reveal-group feature-grid">
            {reasons.map(({ title, body }, i) => (
              <div key={title} className="card reveal" style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--color-bg-overlay)",
                    border: "1px solid var(--color-border-emphasis)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "var(--space-3)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 700,
                    color: "var(--color-accent-gold)",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ marginBottom: "8px" }}>{title}</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", margin: 0, flex: 1 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Member testimonials ── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            eyebrow="From our members"
            title="What the community says"
          />

          <div
            className="reveal-group"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-3)",
            }}
          >
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="card reveal"
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      style={{
                        color: i < t.rating ? "var(--color-accent-gold)" : "rgba(168,162,158,0.2)",
                        fill:  i < t.rating ? "var(--color-accent-gold)" : "none",
                      }}
                    />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-secondary)",
                    lineHeight: "var(--leading-relaxed)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--color-bg-elevated)",
                      border: "1px solid var(--color-border-default)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "var(--text-sm)",
                      fontWeight: 700,
                      color: "var(--color-accent-gold)",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>
                      {t.name}
                    </p>
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", margin: 0 }}>
                      Member since {t.memberSince}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding" style={{ background: "var(--color-bg-surface)", borderTop: "1px solid var(--color-border-subtle)" }}>
        <div className="container-max">
          <SectionHeading eyebrow="FAQ" title="Common questions" />

          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="reveal"
                style={{ borderBottom: "1px solid var(--color-border-subtle)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontWeight: 500, color: "var(--color-text-primary)", fontSize: "var(--text-base)" }}>
                    {q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: "var(--color-accent-gold)",
                      flexShrink: 0,
                      transition: "transform var(--transition-base)",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  className="accordion-answer"
                  style={{ maxHeight: openFaq === i ? "400px" : "0" }}
                >
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", paddingBottom: "20px", margin: 0 }}>
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cta-banner reveal">
        <div className="container-max" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>
            <span className="label-eyebrow" style={{ display: "block", marginBottom: "16px" }}>
              Ready to start?
            </span>
            <h2 style={{ marginBottom: "16px" }}>Start with free, upgrade when ready</h2>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-5)", maxWidth: "400px", margin: "0 auto var(--space-5)" }}>
              Try the Starter plan at no cost, then upgrade to Premium or Elite once you see the value for yourself.
            </p>
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", justifyContent: "center" }}>
              <GoldButton variant="primary" size="lg" href="/contact" showArrow>
                Get Started Free
              </GoldButton>
              <GoldButton variant="secondary" size="lg" href="/about">
                Learn More
              </GoldButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
