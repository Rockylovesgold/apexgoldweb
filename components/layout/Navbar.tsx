"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Community", href: "/community" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`nav-load fixed inset-x-0 top-0 z-[1000] flex h-[68px] items-center transition-all duration-normal ease-out ${
          scrolled
            ? "border-b border-white/10 bg-bg-primary/95 shadow-[0_1px_0_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-max w-full">
          <div className="flex h-[68px] items-center justify-between">
            <Link href="/" className="group no-underline">
              <Image
                src="/apex-gold-logo.png"
                alt="Apex Gold Trading"
                width={120}
                height={120}
                priority
                className="h-[52px] w-auto shrink-0 transition-transform duration-fast ease-out group-hover:scale-[1.02]"
              />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link-underline pb-[2px] text-[0.8125rem] font-medium tracking-[0.01em] no-underline transition-colors duration-fast ${
                      isActive ? "active text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-8 lg:flex">
              <NavCTAButton href="https://t.me/+q1ArU5QujUJiZmVk" label="Join Now" />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/[0.02] p-0 lg:hidden"
            >
              <span
                className={`block h-[1.5px] w-5 bg-text-primary transition-all duration-fast ${
                  mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-text-primary transition-opacity duration-fast ${mobileOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-text-primary transition-all duration-fast ${
                  mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-bg-primary/95 backdrop-blur-2xl transition-transform duration-normal ease-out lg:hidden ${
          mobileOpen ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex w-full flex-col items-center">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block w-full border-b border-white/5 px-6 py-[18px] text-center text-[1.75rem] tracking-[-0.02em] no-underline transition-all duration-normal ease-out ${
                  isActive ? "font-bold text-text-primary" : "font-medium text-text-secondary"
                } ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
                style={{
                  transitionDelay: `${100 + index * 55}ms`,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div
          className={`mt-9 flex flex-col items-center gap-4 transition-all duration-normal ease-out ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
          style={{
            transitionDelay: `${100 + navItems.length * 55}ms`,
          }}
        >
          <NavCTAButton href="https://t.me/+q1ArU5QujUJiZmVk" label="Join the Community" fullWidth />
        </div>
      </div>
    </>
  );
}

function NavCTAButton({ href, label, fullWidth }: { href: string; label: string; fullWidth?: boolean }) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex h-[38px] items-center gap-0 whitespace-nowrap rounded-full bg-gold px-[18px] text-[0.8125rem] font-semibold tracking-[0.01em] text-text-inverse no-underline transition-all duration-fast ease-out hover:-translate-y-px hover:brightness-110 hover:shadow-[0_4px_20px_rgba(201,168,76,0.28)] ${
        fullWidth ? "w-[calc(100%-48px)] justify-center" : "justify-start"
      }`}
      style={fullWidth ? { width: "calc(100% - 48px)" } : undefined}
    >
      {label}
    </Link>
  );
}
