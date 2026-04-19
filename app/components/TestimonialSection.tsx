"use client";

import FadeUp from "./FadeUp";

export default function TestimonialSection() {
  return (
    <section
      className="py-32"
      style={{ background: "var(--color-mist)" }}
      data-scroll-section
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "900px" }}
      >
        <FadeUp>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span
              className="h-px w-12"
              style={{ background: "var(--color-leaf)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-leaf)" }}
            >
              Transformation Story
            </span>
            <span
              className="h-px w-12"
              style={{ background: "var(--color-leaf)" }}
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "var(--color-cloud)",
              border: "1px solid var(--color-fog)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {/* Large quote mark */}
            <div
              className="absolute top-6 left-8 text-8xl leading-none select-none"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--color-sprout)",
                opacity: 0.15,
              }}
            >
              &ldquo;
            </div>

            {/* Quote */}
            <blockquote className="relative z-10">
              <p
                className="text-xl md:text-2xl leading-relaxed mb-8"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                  color: "var(--color-soil)",
                  lineHeight: 1.7,
                }}
              >
                Before Abeja Foundation&apos;s training, we could only sell our
                raw turmeric for ₹20 per kg. Now, with proper packaging and
                branding, we&apos;re selling our processed turmeric powder for
                ₹180 per kg. This training has transformed our entire
                women&apos;s group.
              </p>

              <footer className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: "var(--color-leaf)" }}
                >
                  S
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-soil)" }}
                  >
                    SHG Women&apos;s Group Member
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-bark)" }}
                  >
                    Odisha, India
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </FadeUp>

        {/* Value jump callout */}
        <FadeUp delay={0.2}>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              {
                before: "₹20/kg",
                after: "₹180/kg",
                label: "Turmeric value jump",
                highlight: "9× increase",
              },
              {
                before: "Raw commodity",
                after: "Branded product",
                label: "Product transformation",
                highlight: "Premium positioning",
              },
              {
                before: "Local market only",
                after: "Direct consumers",
                label: "Market reach",
                highlight: "Wider access",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "var(--color-cloud)",
                  border: "1px solid var(--color-fog)",
                }}
              >
                <p
                  className="text-xs font-medium uppercase tracking-wider mb-3"
                  style={{ color: "var(--color-bark)" }}
                >
                  {item.label}
                </p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span
                    className="text-sm line-through"
                    style={{ color: "var(--color-bark)" }}
                  >
                    {item.before}
                  </span>
                  <span style={{ color: "var(--color-sprout)" }}>→</span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-soil)" }}
                  >
                    {item.after}
                  </span>
                </div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: "var(--color-leaf)" }}
                >
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
