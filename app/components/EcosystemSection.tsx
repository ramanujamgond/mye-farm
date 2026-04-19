"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

const producerBenefits = [
  "Better price realization",
  "Direct market access",
  "Support in branding and value addition",
  "Digital tools for enterprise growth",
];

const consumerBenefits = [
  "Access to authentic, traceable produce",
  "Trust in sourcing and production practices",
  "High-quality, chemical-free food",
  "Direct connection to the farm",
];

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="py-32"
      style={{ background: "var(--color-mist)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12" style={{ background: "var(--color-leaf)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-leaf)" }}
            >
              Win-Win Ecosystem
            </span>
          </div>
        </FadeUp>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "var(--color-soil)",
                maxWidth: "520px",
              }}
            >
              Designed to create mutual benefit at every level
            </h2>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Producers */}
          <FadeUp delay={0.1}>
            <div
              className="rounded-3xl p-8 h-full"
              style={{
                background: "var(--color-forest)",
                border: "1px solid rgba(76,175,114,0.2)",
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: "rgba(76,175,114,0.15)",
                  color: "var(--color-sprout)",
                  border: "1px solid rgba(76,175,114,0.2)",
                }}
              >
                🌾 For Producers
              </div>
              <h3
                className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Farmers & FPOs
              </h3>
              <ul className="flex flex-col gap-4">
                {producerBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5"
                      style={{ background: "var(--color-leaf)" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Centre image */}
          <FadeUp delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[320px]">
              <Image
                src="/images/myefarm-products-flatlay.jpeg"
                alt="Myefarm product range — connecting farms to consumers"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(10,25,16,0.3) 0%, rgba(10,25,16,0.7) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                >
                  <span className="text-2xl">🤝</span>
                </div>
                <p
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Myefarm
                </p>
                <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                  The bridge between farm and table
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Consumers */}
          <FadeUp delay={0.3}>
            <div
              className="rounded-3xl p-8 h-full"
              style={{
                background: "var(--color-cloud)",
                border: "1px solid var(--color-fog)",
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
                🛒 For Consumers
              </div>
              <h3
                className="text-xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--color-soil)",
                }}
              >
                Conscious Buyers
              </h3>
              <ul className="flex flex-col gap-4">
                {consumerBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0 mt-0.5"
                      style={{ background: "var(--color-harvest)" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--color-bark)" }}>
                      {b}
                    </span>
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
