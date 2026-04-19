"use client";

import FadeUp from "./FadeUp";

const pillars = [
  {
    icon: "🛒",
    title: "Digital Marketplace",
    desc: "A platform that connects farmers and producer groups directly with consumers, reducing intermediaries and ensuring fair pricing at every step.",
  },
  {
    icon: "🔗",
    title: "Traceability & Transparency",
    desc: "Ensuring consumers know the origin and complete journey of their food — from the field to their doorstep.",
  },
  {
    icon: "📊",
    title: "Data-Driven Insights",
    desc: "Supporting farmers with better demand understanding and pricing decisions through real-time market intelligence.",
  },
  {
    icon: "🚚",
    title: "E-commerce & Logistics",
    desc: "Streamlining ordering, fulfillment, and delivery processes to make farm-fresh produce accessible across geographies.",
  },
  {
    icon: "🎓",
    title: "Capacity Building",
    desc: "Using digital tools to train and onboard rural producers into organized markets, building long-term enterprise capability.",
  },
];

export default function TechApproachSection() {
  return (
    <section
      id="technology"
      className="py-32"
      style={{ background: "var(--color-cloud)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12" style={{ background: "var(--color-leaf)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-leaf)" }}
                >
                  Technology-Led Approach
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
                  color: "var(--color-soil)",
                }}
              >
                Technology as the core enabler of rural transformation
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <p className="leading-relaxed" style={{ color: "var(--color-bark)" }}>
              Myefarm leverages technology to bridge the gap between rural
              producers and urban consumers — creating a seamless, transparent,
              and efficient agricultural value chain.
            </p>
          </FadeUp>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <FadeUp key={pillar.title} delay={0.05 + i * 0.08}>
              <div
                className="rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 group"
                style={{
                  background: "var(--color-mist)",
                  border: "1px solid var(--color-fog)",
                }}
              >
                <div className="text-4xl mb-5">{pillar.icon}</div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "var(--color-soil)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--color-bark)" }}
                >
                  {pillar.desc}
                </p>
                <div
                  className="mt-6 h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ background: "var(--color-leaf)" }}
                />
              </div>
            </FadeUp>
          ))}

          {/* Highlight card — spans remaining space */}
          <FadeUp delay={0.45}>
            <div
              className="rounded-2xl p-7 h-full flex flex-col justify-between sm:col-span-2 lg:col-span-1"
              style={{
                background: "linear-gradient(135deg, var(--color-forest), var(--color-leaf))",
              }}
            >
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--color-lime)" }}
                >
                  The Myefarm Difference
                </p>
                <p
                  className="text-xl font-bold text-white leading-snug"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Technology with a human touch — rooted in community, scaled by innovation.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  S
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Swosti Mishra</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Founder, Myefarm
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
