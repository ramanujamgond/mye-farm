"use client";

import Image from "next/image";
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
            <div className="flex flex-col gap-4">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/founder-team-field-visit.jpeg"
                  alt="mye.farm co-founders on a field visit with partner farmers in Odisha"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,25,16,0.65) 0%, transparent 55%)",
                  }}
                />
                <div className="absolute bottom-5 left-5">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{ background: "rgba(45,122,79,0.85)", backdropFilter: "blur(4px)" }}
                  >
                    Field Visit · Odisha
                  </span>
                </div>
              </div>

              {/* Two smaller images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/hands-holding-paddy.jpeg"
                    alt="Hands holding freshly harvested paddy — the foundation of mye.farm"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/founder-team-group.jpeg"
                    alt="mye.farm founding team"
                    fill
                    className="object-cover"
                  />
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
