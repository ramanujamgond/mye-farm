"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

const images = [
  {
    src: "/images/founder-team-field-visit.jpeg",
    alt: "Myefarm team on a field visit with farmers in Odisha",
    caption: "Field Visit · Odisha",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/hands-holding-paddy.jpeg",
    alt: "Hands holding freshly harvested paddy grains",
    caption: "Harvest · Indigenous Paddy",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/founder-team-group.jpeg",
    alt: "Myefarm founding team together",
    caption: "The Team · Myefarm",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/myefarm-products-flatlay.jpeg",
    alt: "Myefarm product range — rice, ghee, honey and millets",
    caption: "Products · Farm Fresh",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/founder-swosti-paddy-field.jpeg",
    alt: "Swosti Mishra in a paddy field in Odisha",
    caption: "Founder · Odisha Fields",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/a_rice_feild.jpeg",
    alt: "Rice field — Myefarm partner farm",
    caption: "Rice Fields · Odisha",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/profile-1.jpeg",
    alt: "Myefarm field documentation — page 1",
    caption: "Field Documentation",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/profile-2.jpeg",
    alt: "Myefarm field documentation — page 2",
    caption: "Field Documentation",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/profile-3.jpeg",
    alt: "Myefarm field documentation — page 3",
    caption: "Field Documentation",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/profile-4.jpeg",
    alt: "Myefarm field documentation — page 4",
    caption: "Field Documentation",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/profile-5.jpeg",
    alt: "Myefarm field documentation — page 5",
    caption: "Field Documentation",
    span: "",
    aspect: "aspect-square",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-32"
      style={{ background: "var(--color-cloud)" }}
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
              Our Journey
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mb-12"
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
            From the fields to the future
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <FadeUp key={img.src} delay={0.05 + i * 0.04} className={img.span}>
              <div
                className={`relative ${img.aspect} rounded-2xl overflow-hidden group`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,25,16,0.75) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="text-xs font-medium text-white"
                  >
                    {img.caption}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
