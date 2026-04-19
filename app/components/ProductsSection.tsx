"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FadeUp from "./FadeUp";

const products = [
  {
    emoji: "🫙",
    name: "Premium Desi Cow Ghee",
    tagline: "Firewood Churned · No Preservatives",
    desc: "Pure desi cow milk fat, slow-prepared on firewood for rich aroma and nutrition. Rich in vitamins A, B, D & K.",
    badge: "Bestseller",
    badgeColor: "var(--color-harvest)",
  },
  {
    emoji: "🌿",
    name: "Whole Moong",
    tagline: "Naturally Protein-Rich",
    desc: "Power-packed lentil sourced directly from partner farms. Chemical-free, indigenous variety.",
    badge: null,
    badgeColor: null,
  },
  {
    emoji: "🫘",
    name: "Desi Roasted Moong Dal",
    tagline: "Aromatic · Wholesome",
    desc: "Slow-roasted for deep flavour and nutrition. A wholesome staple from Odisha's farmlands.",
    badge: null,
    badgeColor: null,
  },
  {
    emoji: "🍚",
    name: "Pimpudibasa Kheer Rice",
    tagline: "Indigenous · Super Aromatic",
    desc: "A rare, indigenous aromatic rice variety — grown with traditional wisdom and zero chemicals.",
    badge: "Rare Variety",
    badgeColor: "var(--color-leaf)",
  },
  {
    emoji: "🌾",
    name: "Telangana Sona Rice",
    tagline: "Low GI · Protein-Rich",
    desc: "Naturally low glycaemic index rice, farm-fresh from partner fields. Ideal for health-conscious families.",
    badge: null,
    badgeColor: null,
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-32"
      style={{ background: "var(--color-cloud)" }}
      data-scroll-section
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
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
              Our Products
            </span>
          </div>
        </FadeUp>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "var(--color-soil)",
                maxWidth: "480px",
              }}
            >
              Pure food, straight from the farm
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <a
              href="https://mye.farm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:gap-3"
              style={{ color: "var(--color-leaf)" }}
            >
              View all products
              <ArrowRight size={16} />
            </a>
          </FadeUp>
        </div>

        {/* Product flatlay banner */}
        <FadeUp delay={0.15}>
          <div className="relative rounded-3xl overflow-hidden mb-14 aspect-[21/7]">
            <Image
              src="/images/myefarm-products-flatlay.jpeg"
              alt="mye.farm product range — premium desi cow ghee, rice, moong dal and more"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(10,25,16,0.75) 0%, rgba(10,25,16,0.2) 60%, transparent 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--color-lime)" }}
                >
                  Farm Fresh
                </p>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Pure. Natural. Traceable.
                </h3>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <FadeUp key={product.name} delay={0.05 + i * 0.08}>
              <article
                className="relative rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer"
                style={{
                  background: "var(--color-cloud)",
                  border: "1px solid var(--color-fog)",
                  boxShadow: "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 20px 60px rgba(45,122,79,0.12)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--color-fog)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "var(--shadow-sm)";
                }}              >
                {/* Badge */}
                {product.badge && (
                  <span
                    className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: product.badgeColor ?? "var(--color-leaf)" }}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Emoji */}
                <div className="text-5xl mb-5">{product.emoji}</div>

                {/* Content */}
                <div className="flex-1">
                  <p
                    className="text-xs font-medium uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-sprout)" }}
                  >
                    {product.tagline}
                  </p>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: "var(--color-soil)" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-bark)" }}
                  >
                    {product.desc}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2">
                  <a
                    href="https://mye.farm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 hover:gap-2.5"
                    style={{ color: "var(--color-leaf)" }}
                    aria-label={`Shop ${product.name}`}
                  >
                    Shop now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
