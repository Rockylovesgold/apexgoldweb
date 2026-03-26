"use client";

const marqueeText =
  "Gold & Macro Focus \u2014 Professional Analysis \u2014 Community & Trade Ideas \u2014 XAU/USD \u2014 Education & Execution \u2014 Join the Community";

export function AnnouncementBar() {
  return (
    <div className="h-9 bg-bg-tertiary flex items-center overflow-hidden border-b border-border-default group">
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
  );
}
