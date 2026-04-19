"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

const pillars = [
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "Promoting eco-friendly farming practices and reducing chemical dependency across all partner farms.",
  },
  {
    icon: "🌍",
    title: "Environmental Care",
    desc: "Protecting natural ecosystems through conscious sourcing and biodegradable packaging choices.",
  },
  {
    icon: "♻️",
    title: "Zero Waste",
    desc: "Reducing pollution through direct farm-to-consumer delivery, cutting unnecessary carbon emissions.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32"
      style={{ background: "var(--color-mist)" }}
      data-scroll-section
    >
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0 0 L0 30 Q360 60 720 30 Q1080 0 1440 30 L1440 0 Z"
            fill="var(--color-mist)"
          />
        </svg>
      </div>

      <div
        className="mx-auto px-6"
        style={{ maxWidth: "1280px" }}
      >
        {/* Overline */}
        <FadeUp>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="h-px w-12"
              style={{ background: "var(--color-leaf)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-leaf)" }}
            >
              Our Mission
            </span>
            <span
              className="h-px w-12"
              style={{ background: "var(--color-leaf)" }}
            />
          </div>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.1}>
          <h2
            className="text-center mx-auto mb-6"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--color-soil)",
              maxWidth: "700px",
            }}
          >
            Empowering farmers.
            <br />
            Nourishing communities.
            <br />
            <span style={{ color: "var(--color-leaf)" }}>
              Transforming agriculture.
            </span>
          </h2>
        </FadeUp>

        {/* Body — two columns */}
        <FadeUp delay={0.2}>
          <div
            className="grid md:grid-cols-2 gap-8 mx-auto mt-10 mb-16"
            style={{ maxWidth: "800px" }}
          >
            <p style={{ color: "var(--color-bark)", lineHeight: 1.8 }}>
              At Myefarm, we work closely with farmers and self-help groups to
              enable better market access, fair pricing, and value addition
              through branding, packaging, and direct-to-consumer models.
            </p>
            <p style={{ color: "var(--color-bark)", lineHeight: 1.8 }}>
              Through the Centre of Excellence in Agritech, we integrate
              innovation, skill development, and digital solutions — building
              scalable models in farm-to-market linkages and nurturing
              agri-entrepreneurship.
            </p>
          </div>
        </FadeUp>

        {/* Image strip */}
        <FadeUp delay={0.25}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { src: "/images/hands-holding-paddy.jpeg", alt: "Hands holding freshly harvested paddy grains from Odisha" },
              { src: "/images/founder-team-field-visit.jpeg", alt: "mye.farm founders on a field visit with farmers" },
              { src: "/images/founder-team-group.jpeg", alt: "mye.farm founding team together" },
              { src: "/images/myefarm-products-flatlay.jpeg", alt: "mye.farm product range — rice, ghee, honey and millets" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <FadeUp key={pillar.title} delay={0.1 + i * 0.1}>
              <div
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1.5 group"
                style={{
                  background: "var(--color-cloud)",
                  border: "1px solid var(--color-fog)",
                  boxShadow: "var(--shadow-sm)",
                }}

              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "var(--color-soil)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
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
        </div>
      </div>
    </section>
  );
}
