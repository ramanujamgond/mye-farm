"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32"
      style={{ background: "var(--color-mist)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <FadeUp>
            <div className="flex flex-col gap-4">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/founder-team-field-visit.jpeg"
                  alt="Swosti Mishra on a field visit with farmers in Odisha"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,25,16,0.55) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-5 left-5">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{
                      background: "rgba(45,122,79,0.85)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    Field Visit · Odisha
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/hands-holding-paddy.jpeg"
                    alt="Hands holding freshly harvested paddy grains"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/founder-team-group.jpeg"
                    alt="Myefarm founding team"
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
                <span className="h-px w-12" style={{ background: "var(--color-leaf)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-leaf)" }}
                >
                  About Myefarm
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "var(--color-soil)",
                }}
              >
                Where technology meets the grassroots
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--color-bark)" }}>
                Myefarm is an agritech-driven platform committed to strengthening
                the connection between local producers and consumers. Rooted in
                the belief that agriculture thrives when farmers receive fair
                value and consumers access trustworthy food, Myefarm works at
                the intersection of technology, community, and sustainability.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--color-bark)" }}>
                Founded with a deep understanding of grassroots challenges in
                agriculture and rural livelihoods, Myefarm&apos;s vision stems
                from close engagement with farmers and self-help groups —
                recognizing the persistent gaps in market access, price
                realization, and value addition.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--color-cloud)",
                  border: "1px solid var(--color-fog)",
                }}
              >
                <p
                  className="text-base italic leading-relaxed"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--color-soil)",
                  }}
                >
                  &ldquo;Driven by a purpose to create inclusive growth, I
                  envisioned a platform that not only enables farmers to sell
                  but empowers them to build sustainable, scalable
                  enterprises.&rdquo;
                </p>
                <p
                  className="mt-4 text-sm font-semibold"
                  style={{ color: "var(--color-leaf)" }}
                >
                  — Swosti Mishra, Founder
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
