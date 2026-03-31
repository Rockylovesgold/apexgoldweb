"use client";

const marqueeText =
  "Gold & Macro Focus \u2014 Professional Analysis \u2014 Community & Trade Ideas \u2014 XAU/USD \u2014 Education & Execution \u2014 Join the Community";

export function AnnouncementBar() {
  return (
    <div className="bg-bg-tertiary border-b border-border-default">
      {/* Main marquee */}
      <div className="h-8 flex items-center overflow-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-0 group-hover:[animation-play-state:paused]">
          <span className="text-gold text-sm font-body px-8">
            {marqueeText}
          </span>
          <span className="text-gold text-sm font-body px-8">
            {marqueeText}
          </span>
          <span className="text-gold text-sm font-body px-8">
            {marqueeText}
          </span>
          <span className="text-gold text-sm font-body px-8">
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Subtle new app banner */}
      <a
        href="https://apextradingxau.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "5px 16px",
          borderTop: "1px solid rgba(200,150,12,0.08)",
          background: "rgba(200,150,12,0.04)",
          textDecoration: "none",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,150,12,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,150,12,0.04)";
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#C8960C",
            boxShadow: "0 0 6px rgba(200,150,12,0.6)",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: "0.6875rem",
            color: "rgba(200,150,12,0.75)",
            letterSpacing: "0.06em",
            fontWeight: 500,
          }}
        >
          Try out the new app now
        </span>
        <span
          style={{
            fontSize: "0.6875rem",
            color: "rgba(200,150,12,0.5)",
          }}
        >
          &rarr;
        </span>
      </a>
    </div>
  );
}
