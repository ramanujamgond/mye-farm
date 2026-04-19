"use client";

import { ArrowRight } from "lucide-react";
import FadeUp from "./FadeUp";

export default function CTABanner() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #e8a020 0%, #f5c842 100%)",
      }}
      data-scroll-section
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20"
        style={{ background: "white" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-20"
        style={{ background: "white" }}
      />

      <div
        className="relative z-10 mx-auto px-6 text-center"
        style={{ maxWidth: "800px" }}
      >
        <FadeUp>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--color-soil)",
            }}
          >
            Ready to taste the difference?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mb-10 text-lg"
            style={{ color: "rgba(15,31,23,0.75)", lineHeight: 1.7 }}
          >
            Shop our range of chemical-free, farm-fresh products — or partner
            with us to bring your produce to conscious consumers across India.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://mye.farm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "var(--color-soil)",
                boxShadow: "0 4px 20px rgba(15,31,23,0.3)",
              }}
            >
              Shop Now
              <ArrowRight size={16} />
            </a>

            <a
              href="mailto:swosti@mye.farm"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 hover:bg-black/10"
              style={{
                border: "1.5px solid rgba(15,31,23,0.3)",
                color: "var(--color-soil)",
              }}
            >
              Partner With Us
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
