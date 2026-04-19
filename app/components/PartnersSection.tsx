"use client";

import FadeUp from "./FadeUp";

const partners = [
  { name: "Gram Vikas", type: "Strategic Partner" },
  { name: "Tata Steel Foundation", type: "Strategic Partner" },
  { name: "Yuva Vikas Foundation", type: "Strategic Partner" },
  { name: "Mayfair Hotels", type: "Supply Chain Partner" },
  { name: "Dalma", type: "Supply Chain Partner" },
];

const doubled = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section
      className="py-20"
      style={{ background: "var(--surface-deep)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6 mb-10" style={{ maxWidth: "1280px" }}>
        <FadeUp>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12" style={{ background: "rgba(76,175,114,0.4)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Our Partners & Collaborators
            </span>
            <span className="h-px w-12" style={{ background: "rgba(76,175,114,0.4)" }} />
          </div>
        </FadeUp>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--surface-deep), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--surface-deep), transparent)" }}
        />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((partner, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-8 px-6 py-3 rounded-full shrink-0"
              style={{
                background: "var(--surface-mid)",
                border: "1px solid rgba(76,175,114,0.15)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: "var(--color-sprout)" }}
              />
              <span className="text-sm font-semibold text-white">{partner.name}</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(76,175,114,0.1)",
                  color: "var(--color-sprout)",
                }}
              >
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
