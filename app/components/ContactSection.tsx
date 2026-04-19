"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function LinkedInIcon({ size = 18, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import FadeUp from "./FadeUp";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32"
      style={{ background: "var(--color-mist)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12" style={{ background: "var(--color-leaf)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-leaf)" }}
                >
                  Get In Touch
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "var(--color-soil)",
                }}
              >
                Let&apos;s grow together
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                className="mb-10 leading-relaxed"
                style={{ color: "var(--color-bark)", maxWidth: "440px" }}
              >
                Whether you&apos;re a farmer looking to partner, an investor,
                a policy maker, or an organisation aligned with sustainable
                agritech — reach out directly to Swosti.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-col gap-5">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/swostimishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-fog)" }}
                  >
                    <LinkedInIcon size={18} style={{ color: "var(--color-leaf)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-bark)" }}
                    >
                      LinkedIn
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-soil)" }}
                    >
                      linkedin.com/in/swostimishra
                    </p>
                  </div>
                </a>

                {/* Email — personal */}
                <a
                  href="mailto:mishra.swosti@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-fog)" }}
                  >
                    <Mail size={18} style={{ color: "var(--color-leaf)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-bark)" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-soil)" }}
                    >
                      mishra.swosti@gmail.com
                    </p>
                  </div>
                </a>

                {/* Email — org */}
                <a
                  href="mailto:swosti@mye.farm"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-fog)" }}
                  >
                    <Mail size={18} style={{ color: "var(--color-leaf)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-bark)" }}
                    >
                      Work Email
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-soil)" }}
                    >
                      swosti@mye.farm
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919937232555"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-fog)" }}
                  >
                    <Phone size={18} style={{ color: "var(--color-leaf)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-bark)" }}
                    >
                      Phone
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-soil)" }}
                    >
                      +91 99 3723 2555
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-fog)" }}
                  >
                    <MapPin size={18} style={{ color: "var(--color-leaf)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-bark)" }}
                    >
                      Address
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-soil)", lineHeight: 1.6 }}
                    >
                      N2/24, N2 Block, IRC Village,
                      <br />
                      Nayapalli, Bhubaneswar,
                      <br />
                      Odisha 751015, India
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — founder card */}
          <FadeUp delay={0.2}>
            <div
              className="rounded-3xl p-10 h-full flex flex-col justify-between"
              style={{
                background: "var(--color-cloud)",
                border: "1px solid var(--color-fog)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6"
                  style={{ background: "var(--color-leaf)" }}
                >
                  S
                </div>
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--color-soil)",
                  }}
                >
                  Swosti Mishra
                </h3>
                <p
                  className="text-sm font-medium mb-6"
                  style={{ color: "var(--color-leaf)" }}
                >
                  Founder, Myefarm
                </p>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "var(--color-bark)" }}
                >
                  Building a transparent, technology-enabled agricultural
                  ecosystem where producers and consumers are directly
                  connected — ensuring fairness, sustainability, and long-term
                  value for all stakeholders.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://linkedin.com/in/swostimishra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "#0A66C2",
                      color: "white",
                    }}
                  >
                    <LinkedInIcon size={16} />
                    Connect on LinkedIn
                  </a>
                  <a
                    href="mailto:mishra.swosti@gmail.com"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "var(--color-mist)",
                      color: "var(--color-soil)",
                      border: "1px solid var(--color-fog)",
                    }}
                  >
                    <Mail size={16} style={{ color: "var(--color-leaf)" }} />
                    Send an Email
                  </a>
                </div>
              </div>

              <div
                className="mt-8 pt-8"
                style={{ borderTop: "1px solid var(--color-fog)" }}
              >
                <p className="text-xs" style={{ color: "var(--color-bark)" }}>
                  🌱 Centre of Excellence in Agritech · Bhubaneswar, Odisha
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
