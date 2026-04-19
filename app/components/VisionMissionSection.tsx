"use client";

import FadeUp from "./FadeUp";

export default function VisionMissionSection() {
  return (
    <section
      id="vision"
      className="py-32"
      style={{ background: "var(--color-mist)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <FadeUp>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12" style={{ background: "var(--color-leaf)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-leaf)" }}
            >
              Our Purpose
            </span>
            <span className="h-px w-12" style={{ background: "var(--color-leaf)" }} />
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--color-soil)",
            }}
          >
            What drives every decision we make
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <FadeUp delay={0.1}>
            <div
              className="rounded-3xl p-10 h-full"
              style={{
                background: "var(--color-forest)",
                border: "1px solid rgba(76,175,114,0.2)",
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: "rgba(168,217,108,0.15)",
                  color: "var(--color-lime)",
                  border: "1px solid rgba(168,217,108,0.2)",
                }}
              >
                🔭 Vision — Future-Focused
              </div>
              <h3
                className="text-2xl font-bold text-white mb-5"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", lineHeight: 1.3 }}
              >
                Every rural producer, a digital-ready entrepreneur
              </h3>
              <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                To build a future where every rural producer is a digital-ready
                entrepreneur and every consumer has access to the authentic,
                indigenous soul of Indian agriculture.
              </p>
              <div
                className="mt-8 h-0.5 w-12 rounded-full"
                style={{ background: "var(--color-lime)" }}
              />
            </div>
          </FadeUp>

          {/* Mission */}
          <FadeUp delay={0.15}>
            <div
              className="rounded-3xl p-10 h-full"
              style={{
                background: "var(--color-cloud)",
                border: "1px solid var(--color-fog)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: "rgba(232,160,32,0.1)",
                  color: "var(--color-harvest)",
                  border: "1px solid rgba(232,160,32,0.2)",
                }}
              >
                🎯 Mission — Action-Oriented
              </div>
              <h3
                className="text-2xl font-bold mb-5"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--color-soil)",
                  lineHeight: 1.3,
                }}
              >
                Bridging rural production and urban consumption
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: "var(--color-bark)" }}>
                We are committed to bridging the gap between rural production
                and urban consumption. By empowering FPOs and SHGs with digital
                tools, business acumen, and market access, we ensure price
                stability for farmers and high-quality, natural food for the world.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Empower FPOs & SHGs with digital tools",
                  "Ensure fair price realization for farmers",
                  "Connect consumers to authentic, indigenous produce",
                  "Build sustainable rural enterprises at scale",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-soil)" }}>
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5"
                      style={{ background: "var(--color-leaf)" }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
