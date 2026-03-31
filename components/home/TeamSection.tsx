"use client";

import Image from "next/image";
import { Twitter, Instagram, Facebook } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const team = [
  {
    name: "Anthony",
    role: "Founder & Lead Trader",
    image: "/team/shabbaranks_2.png",
    description:
      "Anthony is the founder and lead analyst of Apex Gold Trading. With over eight years of experience across cryptocurrency and gold (XAU/USD) markets, he has developed a deep, systematic understanding of price action, market structure, and risk-managed trade execution. Beginning in crypto in 2016, he expanded into forex in 2020 before identifying gold as the most consistent and tradeable market — a conviction that became the foundation of everything Apex Gold stands for. Operating between the UK and Dubai, Anthony built the community from the ground up — starting as a private Telegram group and growing it into a global operation of 5,000+ members. He personally oversees the daily signal desk, delivering 8–10 structured trade ideas every day with a reported 91% win rate. His mission is straightforward: remove the barriers to financial markets and give everyday people access to the same opportunities as professionals.",
    socials: {
      twitter: "https://x.com/shabbaranks333?s=21",
    },
  },
  {
    name: "Naveed",
    role: "Founding Member",
    image: "/team/nav_2.png",
    description:
      "A qualified Gas Safe and plumbing engineer with a diverse entrepreneurial background across multiple industries. His career started in the heating sector, developing strong technical expertise in domestic plumbing, gas systems, and energy-efficient solutions. He went on to establish and run an ECO4 company, helping UK homeowners access government-backed grants for heating upgrades — supporting vulnerable households while improving energy efficiency in homes. He also successfully built and exited a solar panel company, gaining experience in renewable energy and scaling operations. Today, he owns and operates a tyre garage and car wash, while co-running a property company with his brothers — focused on property investment, development, and long-term growth. He combines technical skill with business vision, consistently building ventures that are both profitable and purposeful.",
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
    name: "Kelsey",
    role: "Lead Affiliate & Gold Trader",
    image: "/team/kelsey_2.png",
    description:
      "A 36-year-old dedicated mum of two and active gold trader with a strong focus on building multiple, sustainable income streams. Passionate about developing financial independence while maintaining a balanced family life, she leads by example through consistency, discipline, and a strong work ethic. Through gold trading she has developed a deep understanding of the markets — applying strategy, patience, and continuous learning to navigate a fast-paced environment. As a lead affiliate within the Apex community, she works closely with individuals looking to learn new skills, improve their mindset, and generate additional income, offering guidance and real, practical insight at every stage of the journey.",
    socials: {},
  },
  {
    name: "Jono",
    role: "Affiliate & Gold Trader",
    image: "/team/jono_2.png",
    description:
      "Jono runs a successful Fire and Security business that continues to go from strength to strength. Introduced to gold trading by a close friend, it quickly became a game changer — generating consistent daily profits through structured signals, a solid understanding of market movement, and disciplined risk management. Gold has become a serious second income stream that he has fully committed to. Now he passes that knowledge on to family and friends, helping them understand the process, stay disciplined, and take advantage of the same opportunities.",
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
