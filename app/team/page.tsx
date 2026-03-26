"use client";

import Image from "next/image";
import { Twitter, Facebook, Send } from "lucide-react";

function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}
import { SectionHeading } from "@/components/ui/SectionHeading";

const team = [
  {
    name: "Shabbaranks",
    role: "Founder & Lead Trader",
    image: "/team/shabbaranks_2.png",
    description:
      "A qualified Gas Safe and plumbing engineer with a diverse entrepreneurial background spanning multiple industries. His career began in the heating sector, building strong technical expertise in domestic plumbing, gas systems, and energy-efficient solutions. He went on to establish and scale an ECO4 company — helping UK homeowners access government-backed grants for heating upgrades — before successfully building and exiting a solar panel business. Today, he owns and operates a tyre garage, car wash, and a property investment company with his brothers. He brings that same discipline and commercial vision to Apex Gold: strategic, consistent, and results-focused.",
    socials: {
      twitter: "https://x.com/shabbaranks333?s=21",
    },
  },
  {
    name: "Andrew Shim",
    role: "Senior Trader & Mentor",
    image: "/team/andrew_shim_2.png",
    description:
      "A multi-disciplined professional with a diverse background across performance, elite sport, and financial markets. He began his career in the entertainment industry at 14 as a professional actor, developing strong communication skills, discipline, and adaptability. He went on to compete professionally in MMA from 27 to 31, alongside amateur boxing from 29 to 32, and raced motorbikes professionally from 25 to 33 — environments that forged the mental resilience he now applies to trading. In 2016, he transitioned into financial markets, specialising in cryptocurrency before expanding into forex in 2020 and focusing on gold (XAU) from 2022 to the present.",
    socials: {},
  },
  {
    name: "Jade Comery",
    role: "Affiliate & Gold Trader",
    image: "/team/jade_comery_2.png",
    description:
      "With a strong foundation in the aesthetics industry, Jade has built her career around precision, trust, and delivering results that genuinely improve confidence and wellbeing. As a specialist injector, body contouring practitioner, and founder of The 3D Clinic, she has spent years refining her expertise and training others within the field. Over time, her professional journey evolved beyond aesthetics — the discipline, risk management, and strategic thinking required in a results-driven clinical environment proved highly transferable to gold trading. She approaches the markets with the same structure and consistency that defined her clinical career, and is a dedicated mother of three.",
    socials: {},
  },
  {
    name: "Kristopher Collins",
    role: "Affiliate",
    image: "/team/kristopher_collins_2.png",
    description:
      "Known to many as Collo, Kristopher is a self-employed professional specialising in fencing and decking, and a proud father of four. Introduced to gold trading through a trusted contact, he quickly recognised its potential as a scalable secondary income stream that fits around an already full working and family life. Alongside his partner Jade, he has successfully integrated trading into their daily routine — proving that building an additional income does not require overhauling everything you already do. Now an affiliate, Kristopher is committed to opening that same door for others looking to grow alongside their existing career.",
    socials: {},
  },
  {
    name: "Hannah Harvey",
    role: "Affiliate & Gold Trader",
    image: "/team/hannah_harvey_2.png",
    description:
      "A dedicated wife, mother of three, and gold trader with a background in dog breeding and accounting administration. In November 2025, Hannah and her husband began trading gold while running their own businesses — and the results have made a genuine, lasting difference to their household income. Motivated by her own experience and a drive to help others achieve the same, becoming an affiliate was an easy decision. Her approach is straightforward: if it has helped her family, it can help others — and she is committed to supporting as many people as possible to access this opportunity.",
    socials: {},
  },
  {
    name: "Kyle",
    role: "Community Builder & Entrepreneur",
    image: "/team/dinny_2.png",
    description:
      "A 27-year-old entrepreneur with a strong focus on building and scaling modern businesses in the digital space. With a background in marketing and web development, he specialises in creating systems that drive growth, increase visibility, and generate consistent results. He has successfully developed and managed multiple businesses across online and service-based industries, combining practical execution with a deep understanding of digital platforms. Alongside this, he has been actively developing his trading strategy over the past two years — further sharpening his analytical thinking, discipline, and risk management skills as part of his long-term business direction.",
    socials: {},
  },
  {
    name: "Rob",
    role: "Community Member & Educator",
    image: "/team/rob_2.png",
    description:
      "Rob Clark is a member of Apex Gold Trading who began his journey in gold and commodity markets in 2025. With a focus on education, discipline, and the practical application of trading skills, he plays an active role within the community — helping members build confidence and approach the markets with the right foundations. His approach is grounded in the belief that consistency and a supportive learning environment are the cornerstones of long-term success, whether members are looking to generate supplementary income or develop a more substantial trading strategy over time.",
    socials: {},
  },
  {
    name: "Nav",
    role: "Community Member",
    image: "/team/nav_2.png",
    description:
      "A qualified Gas Safe and plumbing engineer with a diverse entrepreneurial background across multiple industries. His career started in the heating sector, developing strong technical expertise in domestic plumbing, gas systems, and energy-efficient solutions. He went on to establish and run an ECO4 company, helping UK homeowners access government-backed grants for heating upgrades — supporting vulnerable households while improving energy efficiency in homes. He also successfully built and exited a solar panel company, gaining experience in renewable energy and scaling operations. Today, he owns and operates a tyre garage and car wash, while co-running a property company with his brothers — focused on property investment, development, and long-term growth. He combines technical skill with business vision, consistently building ventures that are both profitable and purposeful.",
    socials: {},
  },
];

const socialIcons: Record<string, React.ElementType> = {
  twitter: Twitter,
  tiktok: TikTokIcon,
  facebook: Facebook,
  telegram: Send,
};

const socialLabels: Record<string, string> = {
  twitter: "Twitter / X",
  tiktok: "TikTok",
  facebook: "Facebook",
  telegram: "Telegram",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="container-max">
          <SectionHeading
            eyebrow="The Team"
            title="The People Behind Apex Gold"
            subtitle="Traders, entrepreneurs, and affiliates — united by a focus on gold and consistent results"
          />
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container-max">
          <div
            className="reveal-group"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {team.map((member) => (
              <div
                key={member.name}
                className="card reveal"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  padding: "clamp(16px, 4vw, 32px) clamp(14px, 4vw, 24px)",
                  textAlign: "center",
                }}
              >
                {/* Gold-framed Avatar */}
                <div
                  style={{
                    width: "clamp(120px, 35vw, 160px)",
                    height: "clamp(120px, 35vw, 160px)",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="160px"
                  />
                </div>

                {/* Info */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                  <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "4px" }}>
                    {member.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-accent-gold)",
                      fontSize: "var(--text-xs)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: "16px",
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-secondary)",
                      lineHeight: "var(--leading-relaxed)",
                      margin: 0,
                      textAlign: "left",
                    }}
                  >
                    {member.description}
                  </p>

                  {/* Social Links */}
                  {Object.keys(member.socials).length > 0 && (
                    <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
                      {Object.entries(member.socials).map(([platform, url]) => {
                        const Icon = socialIcons[platform];
                        if (!Icon || !url) return null;
                        return (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={socialLabels[platform]}
                            style={{
                              width: "44px",
                              height: "44px",
                              borderRadius: "50%",
                              border: "1px solid rgba(201,168,76,0.3)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "var(--color-accent-gold)",
                              textDecoration: "none",
                              transition: "all 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.1)";
                              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.6)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.3)";
                            }}
                          >
                            <Icon size={14} />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Follow Banner */}
      <section className="section-padding" style={{ background: "var(--color-bg-surface)" }}>
        <div className="container-max">
          <div
            className="card reveal"
            style={{ textAlign: "center", padding: "clamp(24px, 5vw, 48px) clamp(16px, 4vw, 32px)" }}
          >
            <p
              style={{
                color: "var(--color-accent-gold)",
                fontSize: "var(--text-xs)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "12px",
              }}
            >
              Follow Apex Gold
            </p>
            <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", marginBottom: "8px" }}>
              Stay Connected
            </h2>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-text-secondary)",
                maxWidth: "480px",
                margin: "0 auto 28px",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              Follow us on social media for live trade ideas, market updates, and community highlights.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              {[
                { icon: Twitter, href: "https://x.com/shabbaranks333?s=21", label: "Twitter / X" },
                { icon: TikTokIcon, href: "https://www.tiktok.com/@apexgoldtrading?_r=1&_t=ZN-94PTgXN5x4B", label: "TikTok" },
                { icon: Facebook, href: "https://www.facebook.com/share/1KgV7EDWJB/?mibextid=wwXIfr", label: "Facebook" },
                { icon: Send, href: "https://t.me/+q1ArU5QujUJiZmVk", label: "Telegram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    height: "44px",
                    padding: "0 20px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "var(--color-text-secondary)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.6)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent-gold)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding reveal"
        style={{ textAlign: "center" }}
      >
        <div className="container-max">
          <p
            style={{
              color: "var(--color-accent-gold)",
              fontSize: "var(--text-xs)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            Join the Community
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", marginBottom: "16px" }}>
            Trade Alongside the Team
          </h2>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-text-secondary)",
              maxWidth: "520px",
              margin: "0 auto 32px",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Get real-time signals, live analysis, and direct access to the traders behind Apex Gold.
          </p>
          <a
            href="https://t.me/+q1ArU5QujUJiZmVk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "48px",
              padding: "0 28px",
              borderRadius: "9999px",
              background: "var(--color-accent-gold)",
              color: "var(--color-text-inverse)",
              fontWeight: 600,
              fontSize: "var(--text-sm)",
              letterSpacing: "0.01em",
              textDecoration: "none",
            }}
          >
            Join Free Telegram Group
          </a>
        </div>
      </section>
    </>
  );
}
