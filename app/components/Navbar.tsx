"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Leadership", href: "#leadership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10, 25, 16, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(76, 175, 114, 0.1)" : "none",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between px-6 py-4"
          style={{ maxWidth: "1280px" }}
        >
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-2 group"
            aria-label="mye.farm home"
          >
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform group-hover:scale-110"
              style={{ background: "var(--color-leaf)" }}
            >
              m
            </span>
            <span className="text-white font-semibold text-lg tracking-tight">
              mye<span style={{ color: "var(--color-sprout)" }}>.</span>farm
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--color-sprout)" }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:mishra.swosti@gmail.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--color-leaf)",
                boxShadow: "0 4px 16px rgba(45, 122, 79, 0.3)",
              }}
            >
              Get in Touch
            </motion.a>

            <button
              className="lg:hidden text-white p-2 rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "var(--surface-deep)" }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-white font-semibold text-lg">
                mye<span style={{ color: "var(--color-sprout)" }}>.</span>farm
              </span>
              <button onClick={() => setMenuOpen(false)} className="text-white p-2" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                href="mailto:mishra.swosti@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.4 }}
                className="mt-4 px-8 py-3 text-base font-semibold text-white rounded-full"
                style={{ background: "var(--color-leaf)" }}
              >
                Get in Touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
