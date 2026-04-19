"use client";

import React from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";

function LinkedInIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const leaders = [
  {
    name: "Swosti Mishra",
    title: "Founder & Managing Director",
    background: "Professional background in the banking sector with a leadership history in regional innovation.",
    focus: "Leads the strategic vision and operations of Myefarm. Dedicated to creating sustainable business models that empower rural women and producer groups through structured financial and operational guidance.",
    tags: ["Strategic Leadership", "Banking Background", "Rural Empowerment"],
    email: "swosti@mye.farm",
    linkedin: "https://linkedin.com/in/swostimishra",
    image: "/images/founder-swosti-paddy-field.jpeg",
    imagePlaceholder: null,
  },
  {
    name: "Pritesh Kumar Jena",
    title: "Executive Director & Co-founder",
    background: "Tech-social entrepreneur and Director of Abeja Labs.",
    focus: "Focused on the digital transformation of agriculture. Integrates technology and risk-management strategies into the Myefarm ecosystem, ensuring rural producers have the technical infrastructure and market intelligence needed to thrive.",
    tags: ["Tech Entrepreneurship", "Digital Agriculture", "Abeja Labs"],
    email: "pritesh@mye.farm",
    linkedin: null,
    image: null,
    imagePlaceholder: "Professional headshot of Pritesh Kumar Jena",
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-32"
      style={{ background: "var(--color-mist)" }}
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
              Leadership
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mb-14"
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
            The team driving Myefarm&apos;s mission
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <FadeUp key={leader.name} delay={0.1 + i * 0.12}>
              <div
                className="rounded-3xl overflow-hidden h-full flex flex-col"
                style={{
                  background: "var(--color-cloud)",
                  border: "1px solid var(--color-fog)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Photo */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {leader.image ? (
                    <>
                      <Image
                        src={leader.image}
                        alt={`${leader.name}, ${leader.title}`}
                        fill
                        className="object-cover object-top"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(10,25,16,0.6) 0%, transparent 60%)",
                        }}
                      />
                    </>
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center gap-3"
                      style={{ background: "var(--color-fog)" }}
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                        style={{ background: "var(--color-leaf)" }}
                      >
                        {leader.name.charAt(0)}
                      </div>
                      <p
                        className="text-xs text-center px-6"
                        style={{ color: "var(--color-bark)" }}
                      >
                        📷 {leader.imagePlaceholder}
                      </p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-5">
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: "var(--color-soil)",
                      }}
                    >
                      {leader.name}
                    </h3>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-leaf)" }}
                    >
                      {leader.title}
                    </p>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "var(--color-bark)", fontStyle: "italic" }}
                  >
                    {leader.background}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: "var(--color-bark)" }}
                  >
                    {leader.focus}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {leader.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "var(--color-mist)",
                          color: "var(--color-leaf)",
                          border: "1px solid var(--color-fog)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid var(--color-fog)" }}>
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-xs font-medium hover:underline"
                      style={{ color: "var(--color-bark)" }}
                    >
                      {leader.email}
                    </a>
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                        style={{ background: "#0A66C2" }}
                      >
                        <LinkedInIcon size={13} />
                        LinkedIn
                      </a>
                    )}
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
