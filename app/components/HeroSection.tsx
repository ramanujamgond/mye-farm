"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden topo-pattern"
      style={{ background: "var(--color-forest)" }}
      aria-label="Hero"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,31,22,0.97) 0%, rgba(26,60,43,0.9) 55%, rgba(45,122,79,0.65) 100%)",
        }}
      />
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
          {/* Left */}
          <div>
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
                Myefarm · Social Enterprise · Agritech
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-white mb-6"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Bridging the Gap Between{" "}
              <span style={{ color: "var(--color-lime)" }}>
                Rural Roots
              </span>{" "}
              and Global Markets
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-lg"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "1.125rem",
                lineHeight: 1.75,
              }}
            >
              Myefarm empowers Farmer Producer Organizations and Self-Help
              Groups through digital transformation and market access —
              ensuring fair value for producers and authentic food for the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#services")}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "var(--color-leaf)",
                  boxShadow: "0 4px 20px rgba(45, 122, 79, 0.4)",
                }}
              >
                What We Do
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  color: "white",
                }}
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { value: "3,500+", label: "Farmers Impacted" },
                { value: "15+", label: "FPOs Supported" },
                { value: "100+", label: "SHGs Empowered" },
                { value: "13+", label: "Product Lines" },
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

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl opacity-25 blur-xl"
                style={{ background: "var(--color-sprout)" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "440px",
                  border: "1px solid rgba(76,175,114,0.25)",
                }}
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/founder-team-field-visit.jpeg"
                    alt="Myefarm team on a field visit with farmers in Odisha"
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
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Myefarm
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "var(--color-lime)" }}>
                    Empowering rural producers since day one
                  </p>
                </div>
                <div
                  className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(232,160,32,0.9)",
                    color: "var(--color-soil)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  Social Enterprise
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        onClick={() => scrollTo("#vision")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to explore"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
        <ArrowDown size={16} className="animate-bounce-slow" />
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="var(--color-mist)" />
        </svg>
      </div>
    </section>
  );
}
