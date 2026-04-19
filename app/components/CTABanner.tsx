"use client";

import { Mail, ArrowRight } from "lucide-react";
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
            Let&apos;s build the future of agriculture together
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mb-10 text-lg"
            style={{ color: "rgba(15,31,23,0.75)", lineHeight: 1.7 }}
          >
            Whether you&apos;re a farmer, an investor, a policy maker, or an
            organisation aligned with sustainable agritech — reach out to
            explore how we can collaborate.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:mishra.swosti@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "var(--color-soil)",
                boxShadow: "0 4px 20px rgba(15,31,23,0.3)",
              }}
            >
              <Mail size={15} />
              mishra.swosti@gmail.com
            </a>

            <a
              href="https://mye.farm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 hover:bg-black/10"
              style={{
                border: "1.5px solid rgba(15,31,23,0.3)",
                color: "var(--color-soil)",
              }}
            >
              Visit mye.farm
              <ArrowRight size={14} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
