"use client";

import FadeUp from "./FadeUp";

const steps = [
  {
    number: "01",
    title: "Source",
    heading: "Direct from partner farms",
    desc: "We partner directly with farmers and FPOs across Odisha, ensuring chemical-free, indigenous produce is grown with care and traditional wisdom.",
    features: [
      "Verified chemical-free farming",
      "Indigenous seed varieties",
      "Fair pricing at source",
      "Traceability from field to pack",
    ],
    emoji: "🌱",
  },
  {
    number: "02",
    title: "Process & Brand",
    heading: "Value addition at the farm",
    desc: "Through training and value-addition programs, farmers process, package, and brand their produce — turning raw commodities into premium products.",
    features: [
      "Post-harvest skill training",
      "Hygienic processing units",
      "Professional branding & packaging",
      "Quality certification support",
    ],
    emoji: "📦",
  },
  {
    number: "03",
    title: "Deliver",
    heading: "Straight to your doorstep",
    desc: "Products reach consumers directly, cutting middlemen, reducing emissions, and ensuring fair prices for both farmers and buyers.",
    features: [
      "No unnecessary middlemen",
      "Reduced carbon footprint",
      "10-day easy returns",
      "Fresh, small-batch delivery",
    ],
    emoji: "🚚",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-32"
      style={{ background: "var(--color-mist)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
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
              How It Works
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mb-20"
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
            Three steps from field to your family
          </h2>
        </FadeUp>

        {/* Steps */}
        <div className="flex flex-col gap-20">
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text side */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  {/* Step number */}
                  <div
                    className="text-8xl font-bold mb-4 leading-none select-none"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "var(--color-sprout)",
                      opacity: 0.15,
                    }}
                  >
                    {step.number}
                  </div>

                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "var(--color-leaf)" }}
                  >
                    Step {step.number} — {step.title}
                  </p>

                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      fontWeight: 700,
                      color: "var(--color-soil)",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.heading}
                  </h3>

                  <p
                    className="mb-8 leading-relaxed"
                    style={{ color: "var(--color-bark)", maxWidth: "480px" }}
                  >
                    {step.desc}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {step.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: "var(--color-soil)" }}
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs"
                          style={{ background: "var(--color-leaf)" }}
                        >
                          ✓
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual side */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div
                    className="rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, var(--color-forest), var(--color-leaf))"
                          : i === 1
                          ? "linear-gradient(135deg, var(--surface-mid), var(--color-forest))"
                          : "linear-gradient(135deg, var(--color-leaf), var(--color-sprout))",
                    }}
                  >
                    {/* Decorative circles */}
                    <div
                      className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20"
                      style={{ background: "var(--color-lime)" }}
                    />
                    <div
                      className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-20"
                      style={{ background: "var(--color-harvest)" }}
                    />

                    <div className="relative z-10 text-center">
                      <div className="text-8xl mb-4">{step.emoji}</div>
                      <p
                        className="text-lg font-semibold text-white"
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                        }}
                      >
                        {step.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
