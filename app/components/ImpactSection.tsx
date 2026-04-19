"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";
import FadeUp from "./FadeUp";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    value: 15,
    suffix: "",
    label: "FPOs Supported",
    sublabel: "Farmer Producer Organizations strengthened",
  },
  {
    value: 30,
    suffix: "",
    label: "Trainings Conducted",
    sublabel: "Comprehensive skill development programs",
  },
  {
    value: 450,
    suffix: "+",
    label: "SHG Women Reached",
    sublabel: "Self-Help Group women empowered",
  },
  {
    value: 85,
    suffix: "%",
    label: "Income Growth",
    sublabel: "Average increase in farmer income post-training",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--color-forest)" }}
      data-scroll-section
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-sprout) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-px w-12"
              style={{ background: "var(--color-lime)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-lime)" }}
            >
              Our Impact
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mb-16"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "white",
              maxWidth: "520px",
            }}
          >
            Numbers that tell a story of real change
          </h2>
        </FadeUp>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={0.1 + i * 0.1}>
              <div
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--surface-mid)",
                  border: "1px solid rgba(76,175,114,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(76,175,114,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(76,175,114,0.15)";
                }}              >
                {/* Number */}
                <div
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                    fontWeight: 700,
                    color: "var(--color-sprout)",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Accent line */}
                <div
                  className="w-10 h-0.5 rounded-full mb-4"
                  style={{ background: "var(--color-harvest)" }}
                />

                {/* Label */}
                <p
                  className="text-sm font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "white" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {stat.sublabel}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Additional metrics row */}
        <FadeUp delay={0.5}>
          <div
            className="mt-10 rounded-2xl p-8 grid sm:grid-cols-3 gap-8"
            style={{
              background: "var(--surface-mid)",
              border: "1px solid rgba(76,175,114,0.1)",
            }}
          >
            {[
              { value: "95%", label: "Technique Adoption", desc: "Trained farmers implementing new post-harvest techniques" },
              { value: "80%", label: "Market Access", desc: "Increase in direct market connections for participating FPOs" },
              { value: "100%", label: "Program Continuity", desc: "Supported groups continuing programs independently" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="text-2xl font-bold shrink-0"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--color-lime)",
                  }}
                >
                  {item.value}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-white mb-1"
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
