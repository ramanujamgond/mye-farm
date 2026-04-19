"use client";

import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
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
                <span
                  className="h-px w-12"
                  style={{ background: "var(--color-leaf)" }}
                />
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
                Whether you&apos;re a farmer looking to partner, a consumer
                with questions, or an organisation interested in collaboration —
                we&apos;d love to hear from you.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:swosti@mye.farm"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors"
                    style={{ background: "var(--color-fog)" }}
                  >
                    <Mail
                      size={18}
                      style={{ color: "var(--color-leaf)" }}
                    />
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
                      swosti@mye.farm
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:getmyefarm@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-fog)" }}
                  >
                    <Mail
                      size={18}
                      style={{ color: "var(--color-leaf)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-bark)" }}
                    >
                      General
                    </p>
                    <p
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-soil)" }}
                    >
                      getmyefarm@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919937232555"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-fog)" }}
                  >
                    <Phone
                      size={18}
                      style={{ color: "var(--color-leaf)" }}
                    />
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

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-fog)" }}
                  >
                    <MapPin
                      size={18}
                      style={{ color: "var(--color-leaf)" }}
                    />
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

          {/* Right — Quick links */}
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
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--color-soil)" }}
                >
                  Explore mye.farm
                </h3>
                <p
                  className="text-sm mb-8"
                  style={{ color: "var(--color-bark)" }}
                >
                  Visit our platforms to shop, learn more, or connect.
                </p>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      label: "Shop & explore",
                      url: "https://mye.farm",
                      desc: "Browse products and explore the full mye.farm experience",
                    },
                    {
                      label: "Company profile",
                      url: "https://profile.mye.farm",
                      desc: "Learn about our mission and impact",
                    },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                      style={{
                        background: "var(--color-mist)",
                        border: "1px solid var(--color-fog)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--color-sprout)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--color-fog)";
                      }}                    >
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--color-soil)" }}
                        >
                          {link.label}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--color-bark)" }}
                        >
                          {link.desc}
                        </p>
                      </div>
                      <ExternalLink
                        size={16}
                        style={{ color: "var(--color-leaf)" }}
                        className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="mt-8 pt-8"
                style={{ borderTop: "1px solid var(--color-fog)" }}
              >
                <p
                  className="text-xs"
                  style={{ color: "var(--color-bark)" }}
                >
                  🌱 Grow your own · Eat clean · Support farmers
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
