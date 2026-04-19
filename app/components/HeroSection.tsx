"use client";

import { motion } from "motion/react";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import Image from "next/image";

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
            "linear-gradient(135deg, rgba(13,31,22,0.97) 0%, rgba(26,60,43,0.92) 50%, rgba(45,122,79,0.7) 100%)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: "var(--color-sprout)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10"
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
                Founder · Myefarm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-white mb-3 leading-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Swosti Mishra
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mb-6 text-lg font-medium"
              style={{ color: "var(--color-sprout)" }}
            >
              Founder, Myefarm — Centre of Excellence in Agritech
            </motion.p>

            {/* Vision line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-lg"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "1.125rem",
                lineHeight: 1.75,
              }}
            >
              Building a transparent, technology-enabled agricultural ecosystem
              where producers and consumers are directly connected — ensuring
              fairness, sustainability, and long-term value for all stakeholders.
            </motion.p>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex flex-wrap gap-5 mb-10"
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} style={{ color: "var(--color-lime)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Bhubaneswar, Odisha, India
                </span>
              </div>
              <a
                href="mailto:swosti@mye.farm"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={14} style={{ color: "var(--color-lime)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  swosti@mye.farm
                </span>
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "var(--color-leaf)",
                  boxShadow: "0 4px 20px rgba(45, 122, 79, 0.4)",
                }}
              >
                Explore Profile
                <ArrowDown size={15} />
              </button>

              <a
                href="mailto:swosti@mye.farm"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  color: "white",
                }}
              >
                <Mail size={14} />
                Get in Touch
              </a>
            </motion.div>

            {/* Impact stats */}
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
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Founder photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-3 rounded-3xl opacity-30 blur-xl"
                style={{ background: "var(--color-sprout)" }}
              />

              {/* Photo card */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "420px",
                  border: "1px solid rgba(76,175,114,0.25)",
                }}
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/founder-swosti-paddy-field.jpeg"
                    alt="Swosti Mishra, Founder of Myefarm, in a paddy field in Odisha"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,25,16,0.85) 0%, rgba(10,25,16,0.1) 50%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Swosti Mishra
                  </p>
                  <p className="text-sm mt-1" style={{ color: "var(--color-lime)" }}>
                    Founder · Myefarm
                  </p>
                </div>

                {/* Badge */}
                <div
                  className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(232,160,32,0.9)",
                    color: "var(--color-soil)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  Agritech Founder
                </div>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to explore"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll to explore
        </span>
        <ArrowDown size={16} className="animate-bounce-slow" />
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
            fill="var(--color-mist)"
          />
        </svg>
      </div>
    </section>
  );
}
