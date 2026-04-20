const footerLinks = {
  Profile: [
    { label: "About Myefarm", href: "#about" },
    { label: "Vision & Mission", href: "#vision" },
    { label: "Services", href: "#services" },
    { label: "Impact", href: "#impact" },
    { label: "Leadership", href: "#leadership" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "linkedin.com/in/swostimishra", href: "https://linkedin.com/in/swostimishra" },
    { label: "mishra.swosti@gmail.com", href: "mailto:mishra.swosti@gmail.com" },
    { label: "swosti@mye.farm", href: "mailto:swosti@mye.farm" },
    { label: "+91 89 1758 3006", href: "tel:+918917583006" },
    { label: "mye.farm", href: "https://mye.farm" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden topo-pattern"
      style={{ background: "var(--surface-deep)" }}
    >
      <div className="relative z-10 mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "var(--color-leaf)" }}
              >
                m
              </span>
              <span className="text-white font-semibold text-lg">
                mye<span style={{ color: "var(--color-sprout)" }}>.</span>farm
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.5)", maxWidth: "240px" }}
            >
              Agritech social enterprise bridging rural producers and global markets through digital transformation and market access.
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
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
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

        <div className="h-px mb-8" style={{ background: "rgba(76,175,114,0.1)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Myefarm · All rights reserved
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Building sustainable agri-value chains through technology
          </p>
        </div>
      </div>
    </footer>
  );
}
