"use client";

import FadeUp from "./FadeUp";

export default function FarmerSection() {
  return (
    <section
      className="py-32"
      style={{ background: "var(--color-cloud)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <FadeUp>
            <div
              className="rounded-3xl overflow-hidden relative aspect-[4/3]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-forest), var(--color-leaf))",
              }}
            >
              {/* Decorative */}
              <div
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20"
                style={{ background: "var(--color-lime)" }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-20"
                style={{ background: "var(--color-harvest)" }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10">
                <div className="text-7xl">👨‍🌾</div>
                <div className="text-center">
                  <p
                    className="text-2xl font-bold text-white"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    Pramod Jena
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Partner Farmer · Odisha
                  </p>
                </div>

                {/* Tag */}
                <div
                  className="px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  Traditional Wisdom · Sustainable Practices
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="h-px w-12"
                  style={{ background: "var(--color-leaf)" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-leaf)" }}
                >
                  Meet Our Farmers
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.875rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "var(--color-soil)",
                }}
              >
                Partners, not just suppliers
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                className="mb-6 leading-relaxed"
                style={{ color: "var(--color-bark)" }}
              >
                We work directly with dedicated farmers like Pramod Jena from
                Odisha, who brings traditional wisdom and sustainable practices
                to modern agriculture. Our farmers are not just suppliers —
                they&apos;re partners in our mission to deliver authentic,
                chemical-free food to your table.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p
                className="mb-10 leading-relaxed"
                style={{ color: "var(--color-bark)" }}
              >
                Every product carries a story — of the soil it grew in, the
                hands that tended it, and the community it supports. When you
                buy from mye.farm, you&apos;re investing directly in rural
                livelihoods.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-col gap-4">
                {[
                  "Direct farmer partnerships across Odisha",
                  "Fair pricing guaranteed at source",
                  "Traditional farming methods preserved",
                  "Technology-enabled traceability",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shrink-0"
                      style={{ background: "var(--color-leaf)" }}
                    >
                      ✓
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-soil)" }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
