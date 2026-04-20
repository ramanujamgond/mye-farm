"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

const contributions = [
  {
    icon: "📡",
    title: "Scalable Market Linkage Models",
    desc: "Demonstrating tech-enabled, replicable models for connecting rural producers to organized markets at scale.",
  },
  {
    icon: "💡",
    title: "Innovation in Digital Agriculture",
    desc: "Supporting innovation in digital agriculture and rural commerce through practical, field-tested solutions.",
  },
  {
    icon: "🧪",
    title: "Pilot Projects",
    desc: "Collaborating on pilot projects for farmer-centric technologies that can be validated and scaled nationally.",
  },
  {
    icon: "🎓",
    title: "Capacity Building",
    desc: "Enabling capacity building for farmers and agri-entrepreneurs through structured digital training programs.",
  },
  {
    icon: "🌱",
    title: "Grassroots Impact Models",
    desc: "Showcasing successful models of integrating technology with grassroots impact for policy and replication.",
  },
];

export default function AgritechImpactSection() {
  return (
    <section
      id="agritech-impact"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--surface-deep)" }}
      data-scroll-section
    >
      <div className="absolute inset-0 topo-pattern opacity-30" />

      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12" style={{ background: "var(--color-lime)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-lime)" }}
                >
                  Agritech Impact
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  color: "white",
                }}
              >
                Myefarm&apos;s role in shaping the future of agritech
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Myefarm demonstrates what is possible when technology,
                community, and purpose align — creating models that can be
                studied, replicated, and scaled across India&apos;s
                agricultural landscape.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/7]">
                <Image
                  src="/images/a_rice_feild.jpeg"
                  alt="Rice field — Myefarm's commitment to sustainable agriculture"
                  fill
                  className="object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(10,25,16,0.75) 0%, rgba(10,25,16,0.2) 70%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center px-8">
                  <p
                    className="text-lg font-bold text-white max-w-xs"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      lineHeight: 1.4,
                    }}
                  >
                    &ldquo;Technology with grassroots impact — that is the Myefarm model.&rdquo;
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Contributions */}
          <div className="flex flex-col gap-5">
            {contributions.map((item, i) => (
              <FadeUp key={item.title} delay={0.1 + i * 0.08}>
                <div
                  className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--surface-mid)",
                    border: "1px solid rgba(76,175,114,0.12)",
                  }}
                >
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
