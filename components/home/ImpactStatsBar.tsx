"use client";

import { StatCounter } from "@/components/ui/StatCounter";

const stats = [
  { value: 5000, suffix: "+", label: "Community Members" },
  { value: 90, suffix: "%", label: "Success Rate" },
  { value: 8, suffix: "", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Signals Per Month" },
  { value: 2400, suffix: "+", label: "Avg Pips / Month" },
];

export function ImpactStatsBar() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 border-y border-white/10 bg-bg-secondary/70">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="container-max relative">
        <div className="reveal-group grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className="reveal glass-card-static text-center relative"
            >
              {i < stats.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute -right-3 top-4 bottom-4 w-px bg-white/10"
                />
              )}
              <StatCounter target={value} suffix={suffix} label={label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
