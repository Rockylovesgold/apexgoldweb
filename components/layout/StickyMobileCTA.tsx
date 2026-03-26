"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

/**
 * Sticky bottom bar — visible on mobile only (lg:hidden via inline media query).
 * Appears after the user scrolls past 300px. Has a dismiss button.
 * Hidden on /contact and /membership pages (natural conversion pages).
 */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  // Don't show on pages that are already conversion-focused
  const hidden = ["/contact", "/membership"].includes(pathname);

  useEffect(() => {
    if (hidden || dismissed) return;

    function onScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden, dismissed]);

  if (hidden || dismissed) return null;

  return (
    <div
      aria-label="Join Apex Gold Trading"
      role="complementary"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[900] transition-transform duration-300 ease-out"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="w-full relative bg-bg-primary/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.35)] flex items-center gap-2">
        <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider">
            Gold-focused trading community
          </p>
          <p className="text-sm font-semibold text-text-primary truncate">
            Join 5,000+ traders
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 h-10 px-4 bg-gold text-bg-primary rounded-full text-sm font-semibold whitespace-nowrap"
        >
          Join Today
          <ArrowRight size={14} />
        </Link>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="w-8 h-8 rounded-full bg-bg-tertiary border border-white/10 text-text-tertiary flex items-center justify-center shrink-0"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
