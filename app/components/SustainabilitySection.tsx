"use client";

import FadeUp from "./FadeUp";

const commitments = [
  {
    icon: "🌱",
    title: "Eco-Friendly Farming",
    points: [
      "Reduced chemical dependency",
      "Crop diversity support",
      "Long-term soil health",
      "Local & seasonal produce",
    ],
  },
  {
    icon: "🌍",
    title: "Environmental Responsibility",
    points: [
      "Biodegradable packaging",
      "Reduced plastic use",
      "Biodiversity conservation",
      "Natural resource protection",
    ],
  },
  {
    icon: "♻️",
    title: "Pollution Reduction",
    points: [
      "Fewer middlemen = less emissions",
      "Direct farm transport",
      "Organic waste composting",
      "Chemical-free food chain",
    ],
  },
];

export default function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--surface-deep)" }}
      data-scroll-section
    >
      {/* Topo pattern */}
      <div className="absolute inset-0 topo-pattern opacity-30" />

      <div
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: "1280px" }}
      >
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="h-px w-12"
                  style={{ background: "var(--color-lime)" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-lime)" }}
                >
                  Sustainability
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "white",
                }}
              >
                Farming that respects the earth and future generations
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <p
              className="leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", marginTop: "2.5rem" }}
            >
              Through every step — farming, packaging, and distribution —
              Myefarm aligns its efforts with sustainability, environmental
              protection, and pollution reduction. We believe responsible food
              practices are not just about what we eat, but also about how it
              impacts the earth and future generations.
            </p>
          </FadeUp>
        </div>

        {/* Commitment cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {commitments.map((item, i) => (
            <FadeUp key={item.title} delay={0.1 + i * 0.1}>
              <div
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "var(--surface-mid)",
                  border: "1px solid rgba(76,175,114,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(76,175,114,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(76,175,114,0.15)";
                }}              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3
                  className="text-lg font-semibold text-white mb-5"
                >
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--color-sprout)" }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
