"use client";

import FadeUp from "./FadeUp";

const missions = [
  {
    icon: "🌾",
    text: "Empower farmers, FPOs, and rural enterprises with market access and digital tools",
  },
  {
    icon: "🔍",
    text: "Promote transparency in food systems by connecting consumers directly to the source",
  },
  {
    icon: "📦",
    text: "Enable value addition through branding, packaging, and compliance support",
  },
  {
    icon: "🚀",
    text: "Build sustainable livelihoods through technology-driven agricultural solutions",
  },
];

export default function VisionMissionSection() {
  return (
    <section
      id="vision"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--color-forest)" }}
      data-scroll-section
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-sprout) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: "1280px" }}
      >
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Vision */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12" style={{ background: "var(--color-lime)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-lime)" }}
                >
                  Vision
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.875rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                  color: "white",
                }}
              >
                A transparent, technology-enabled agricultural ecosystem
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                To create a world where producers and consumers are directly
                connected — ensuring fairness, sustainability, and long-term
                value for all stakeholders across the agricultural value chain.
              </p>
            </FadeUp>

            {/* Vision pillars */}
            <FadeUp delay={0.2}>
              <div className="mt-10 flex flex-col gap-4">
                {[
                  { label: "Fairness", desc: "Fair value for every farmer, every harvest" },
                  { label: "Transparency", desc: "Full traceability from farm to consumer" },
                  { label: "Sustainability", desc: "Long-term ecological and economic health" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{
                      background: "var(--surface-mid)",
                      border: "1px solid rgba(76,175,114,0.12)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ background: "var(--color-sprout)" }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Mission */}
          <div>
            <FadeUp delay={0.05}>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12" style={{ background: "var(--color-harvest)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-harvest)" }}
                >
                  Mission
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.875rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                  color: "white",
                }}
              >
                Four pillars driving every decision
              </h2>
            </FadeUp>

            <div className="flex flex-col gap-5">
              {missions.map((item, i) => (
                <FadeUp key={item.text} delay={0.15 + i * 0.08}>
                  <div
                    className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "var(--surface-mid)",
                      border: "1px solid rgba(76,175,114,0.12)",
                    }}
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
