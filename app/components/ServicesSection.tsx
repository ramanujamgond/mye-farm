"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

const services = [
  {
    icon: "🛒",
    title: "Market Access & E-commerce",
    desc: "End-to-end onboarding on global and domestic marketplaces. We manage the operational complexities so producers can focus on their harvest.",
    span: "lg:col-span-2",
    dark: true,
  },
  {
    icon: "🎓",
    title: "Capacity Building & Coaching",
    desc: "Educating FPOs and SHGs in business management and product development — transitioning from subsistence mindset to visionary business leadership.",
    span: "",
    dark: false,
  },
  {
    icon: "📸",
    title: "Branding & Creative Services",
    desc: "High-quality agency services at rural doorsteps — professional product shoots, content generation, and compliant packaging design.",
    span: "",
    dark: false,
  },
  {
    icon: "📋",
    title: "Compliance & Technical Support",
    desc: "Regulatory compliance, digital marketing training, and sales optimization strategies — services often missing in rural areas.",
    span: "",
    dark: false,
  },
  {
    icon: "🔍",
    title: "Gap Analysis",
    desc: "Working closely with grassroots groups to identify star products and streamline supply chain inefficiencies for maximum market impact.",
    span: "lg:col-span-2",
    dark: true,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-32"
      style={{ background: "var(--color-cloud)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12" style={{ background: "var(--color-leaf)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-leaf)" }}
            >
              What We Do
            </span>
          </div>
        </FadeUp>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
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
              A strategic bridge for rural producer groups
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--color-bark)" }}
            >
              We act where incredible products meet geographical and technical barriers.
            </p>
          </FadeUp>
        </div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Row 1: wide card + image */}
          <FadeUp delay={0.1} className="lg:col-span-2">
            <div
              className="rounded-3xl p-8 h-full min-h-[200px] flex flex-col justify-between"
              style={{
                background: "var(--color-forest)",
                border: "1px solid rgba(76,175,114,0.2)",
              }}
            >
              <div>
                <span className="text-4xl mb-4 block">🛒</span>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Market Access & E-commerce
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  End-to-end onboarding on global and domestic marketplaces. We manage the
                  operational complexities so producers can focus on their harvest.
                </p>
              </div>
              <div className="mt-6 h-0.5 w-10 rounded-full" style={{ background: "var(--color-lime)" }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden min-h-[200px]">
              <Image
                src="/images/cabbage_farm.jpeg"
                alt="Fresh cabbage farm — Myefarm partner produce"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(10,25,16,0.35)" }}
              />
              <div className="absolute bottom-5 left-5">
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                  style={{ background: "rgba(45,122,79,0.85)", backdropFilter: "blur(4px)" }}
                >
                  13+ Product Lines
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Row 2: three equal cards */}
          {[
            {
              icon: "🎓",
              title: "Capacity Building & Coaching",
              desc: "Educating FPOs and SHGs in business management — transitioning from subsistence mindset to visionary business leadership.",
            },
            {
              icon: "📸",
              title: "Branding & Creative Services",
              desc: "Professional product shoots, content generation, and compliant packaging design brought to rural doorsteps.",
            },
            {
              icon: "📋",
              title: "Compliance & Technical Support",
              desc: "Regulatory compliance, digital marketing training, and sales optimization — services often missing in rural areas.",
            },
          ].map((s, i) => (
            <FadeUp key={s.title} delay={0.2 + i * 0.08}>
              <div
                className="rounded-3xl p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: "var(--color-mist)",
                  border: "1px solid var(--color-fog)",
                }}
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "var(--color-soil)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-bark)" }}>
                  {s.desc}
                </p>
                <div
                  className="mt-5 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-14"
                  style={{ background: "var(--color-leaf)" }}
                />
              </div>
            </FadeUp>
          ))}

          {/* Row 3: image + wide card */}
          <FadeUp delay={0.45}>
            <div className="relative rounded-3xl overflow-hidden min-h-[200px]">
              <Image
                src="/images/farmer_in_feilds.jpeg"
                alt="Farmer working in the fields — Myefarm partner"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(10,25,16,0.3)" }}
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.5} className="lg:col-span-2">
            <div
              className="rounded-3xl p-8 h-full min-h-[200px] flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, var(--color-leaf), var(--color-sprout))",
              }}
            >
              <div>
                <span className="text-4xl mb-4 block">🔍</span>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Gap Analysis
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Working closely with grassroots groups to identify &ldquo;star products&rdquo; and
                  streamline supply chain inefficiencies for maximum market impact.
                </p>
              </div>
              <div className="mt-6 h-0.5 w-10 rounded-full" style={{ background: "rgba(255,255,255,0.5)" }} />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
