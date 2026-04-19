"use client";

import { motion } from "motion/react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden topo-pattern"
      style={{ background: "var(--color-forest)" }}
      aria-label="Hero"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,60,43,0.97) 0%, rgba(45,122,79,0.85) 60%, rgba(76,175,114,0.6) 100%)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--color-sprout)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
        style={{ background: "var(--color-lime)" }}
      />

      <div
        className="relative z-10 mx-auto w-full px-6 py-32 pt-40"
        style={{ maxWidth: "1280px" }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Accent label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--color-lime)" }}
              />
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "var(--color-lime)" }}
              >
                Centre of Excellence in Agritech
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              From Odisha&apos;s Soil
              <br />
              <span style={{ color: "var(--color-lime)" }}>To Your Table</span>
            </motion.h1>

            {/* Lead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-lg"
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.125rem",
                lineHeight: 1.7,
              }}
            >
              We bridge farmers and consumers through technology, traceability,
              and trust — building a food system that&apos;s fair, sustainable,
              and rooted in tradition.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://shop.mye.farm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "var(--color-leaf)",
                  boxShadow: "0 4px 20px rgba(45, 122, 79, 0.4)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-sprout)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-leaf)";
                }}
              >
                Shop Now
                <ArrowRight size={16} />
              </a>

              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "white",
                }}
              >
                <Play size={14} />
                Our Story
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-14 flex flex-wrap gap-8"
            >
              {[
                { value: "15", label: "FPOs Supported" },
                { value: "450+", label: "Women Empowered" },
                { value: "85%", label: "Income Growth" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "var(--color-lime)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium uppercase tracking-wider mt-0.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div
              className="relative rounded-3xl overflow-hidden p-8"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(76,175,114,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Decorative farm illustration */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative"
                style={{ background: "var(--surface-mid)" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div
                    className="text-8xl opacity-30"
                    style={{ filter: "grayscale(0.3)" }}
                  >
                    🌾
                  </div>
                  <div className="text-center">
                    <p
                      className="text-lg font-semibold"
                      style={{
                        color: "var(--color-lime)",
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      Farm to Table
                    </p>
                    <p
                      className="text-sm mt-1"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      Odisha, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "var(--color-harvest)",
                  color: "var(--color-soil)",
                }}
              >
                100% Natural
              </div>

              {/* Bottom info */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Latest Product
                  </p>
                  <p
                    className="text-base font-semibold text-white mt-0.5"
                  >
                    Premium Desi Cow Ghee
                  </p>
                </div>
                <a
                  href="https://shop.mye.farm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{ background: "var(--color-leaf)" }}
                  aria-label="Shop ghee"
                >
                  <ArrowRight size={16} className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll to explore"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll to explore
        </span>
        <ChevronDown size={18} className="animate-bounce-slow" />
      </motion.button>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z"
            fill="var(--surface-deep)"
          />
        </svg>
      </div>
    </section>
  );
}
