const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Impact", href: "#impact" },
  ],
  Products: [
    { label: "Desi Cow Ghee", href: "https://shop.mye.farm" },
    { label: "Whole Moong", href: "https://shop.mye.farm" },
    { label: "Roasted Moong Dal", href: "https://shop.mye.farm" },
    { label: "Kheer Rice", href: "https://shop.mye.farm" },
  ],
  Connect: [
    { label: "swosti@mye.farm", href: "mailto:swosti@mye.farm" },
    { label: "getmyefarm@gmail.com", href: "mailto:getmyefarm@gmail.com" },
    { label: "+91 99 3723 2555", href: "tel:+919937232555" },
    { label: "shop.mye.farm", href: "https://shop.mye.farm" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden topo-pattern"
      style={{ background: "var(--surface-deep)" }}
    >
      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Top row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "var(--color-leaf)" }}
              >
                m
              </span>
              <span
                className="text-white font-semibold text-lg"
              >
                mye<span style={{ color: "var(--color-sprout)" }}>.</span>farm
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)", maxWidth: "220px" }}
            >
              Centre of Excellence in Agritech. Bridging farmers and consumers
              through technology and trust.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(76,175,114,0.1)",
                border: "1px solid rgba(76,175,114,0.2)",
                color: "var(--color-sprout)",
              }}
            >
              🌱 Bhubaneswar, Odisha
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Wave divider */}
        <div
          className="h-px mb-8"
          style={{ background: "rgba(76,175,114,0.1)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            © {new Date().getFullYear()} mye.farm · All rights reserved
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Made with 🌱 for farmers & conscious consumers
          </p>
        </div>
      </div>
    </footer>
  );
}
