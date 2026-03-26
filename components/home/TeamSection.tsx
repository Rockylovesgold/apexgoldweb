"use client";

import Image from "next/image";
import { Twitter, Instagram, Facebook } from "lucide-react";
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
    name: "Dinny",
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
      "Nav is an emerging member of the trading community with a growing interest in financial markets and personal development. With a focus on learning and consistency, Nav is actively building knowledge within gold trading and developing the discipline required for long-term success.",
    socials: {},
  },
];

const socialIcons: Record<string, React.ElementType> = {
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
};

const socialLabels: Record<string, string> = {
  twitter: "Twitter / X",
  instagram: "Instagram",
  facebook: "Facebook",
};

export function TeamSection() {
  return (
    <section className="section-padding" style={{ background: "var(--color-bg-surface)" }}>
      <div className="container-max">
        <SectionHeading
          eyebrow="The Team"
          title="The people behind Apex Gold"
          subtitle="Traders, entrepreneurs, and affiliates — united by a focus on gold and consistent results"
        />

        <div
          className="reveal-group"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="card reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "24px",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="100px"
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
                <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "4px" }}>
                  {member.name}
                </h3>
                <p
                  style={{
                    color: "var(--color-accent-gold)",
                    fontSize: "var(--text-xs)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "12px",
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
                    flex: 1,
                  }}
                >
                  {member.description}
                </p>

                {/* Social Links */}
                {Object.keys(member.socials).length > 0 && (
                  <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
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
                            border: "1px solid rgba(255,255,255,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--color-text-tertiary)",
                            textDecoration: "none",
                            transition: "all 0.15s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent-gold)";
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.4)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-tertiary)";
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                          }}
                        >
                          <Icon size={13} />
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
  );
}
