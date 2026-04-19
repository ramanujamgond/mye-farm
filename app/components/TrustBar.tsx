"use client";

const items = [
  "🌱 15 FPOs Supported",
  "👩‍🌾 450+ SHG Women Empowered",
  "📈 85% Income Growth",
  "🎓 30 Trainings Conducted",
  "✅ 100% Chemical-Free",
  "🚜 Direct Farm to Consumer",
  "♻️ Eco-Friendly Packaging",
  "🌾 Indigenous Varieties",
];

export default function TrustBar() {
  const doubled = [...items, ...items];

  return (
    <section
      className="py-5 overflow-hidden"
      style={{ background: "var(--surface-deep)" }}
      aria-label="Key highlights"
    >
      <div className="relative flex">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--surface-deep), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--surface-deep), transparent)",
          }}
        />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-8 text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {item}
              <span
                className="w-1 h-1 rounded-full ml-4"
                style={{ background: "var(--color-sprout)", opacity: 0.5 }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
