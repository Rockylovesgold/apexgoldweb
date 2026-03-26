"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Join the community",
    description: "Get access to the Apex Gold Trading community and receive trade ideas, market updates, and educational content.",
  },
  {
    number: "02",
    title: "Review setups and updates",
    description: "Review daily trade setups, entry zones, stop loss and take-profit levels, and market commentary.",
  },
  {
    number: "03",
    title: "Execute with discipline",
    description: "Apply your own risk management. Use your preferred platform to execute; we focus on structure and clarity.",
  },
  {
    number: "04",
    title: "Keep learning",
    description: "Use the community and resources to improve your analysis and execution over time.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding" style={{ background: "var(--color-bg-surface)" }}>
      <div className="container-max">
        <SectionHeading
          eyebrow="The Process"
          title="How it works"
          subtitle="From joining to execution—a simple, transparent process"
        />

        <div
          className="reveal-group"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--space-3)",
          }}
        >
          {steps.map((step) => (
            <div key={step.title} className="card reveal" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="process-step-number">{step.number}</div>
              <h3 style={{ marginBottom: "6px" }}>{step.title}</h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-secondary)",
                  lineHeight: "var(--leading-relaxed)",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
