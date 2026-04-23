/*
  EDITORIAL DESIGN — Navbar
  Minimal, typographic navigation. No rounded buttons, no gradients.
  Thin bottom border. Logo is text-only in Playfair Display.
  CTA is a simple underlined text link, not a button.
*/

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "/work", isRoute: true },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [, navigate] = useLocation();

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setMobileOpen(false);
    if (isRoute) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-[#FAF7F2] border-b border-[#E8E3DB]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo — text only, serif */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-xl lg:text-2xl font-bold text-[#1A1A1A] tracking-tight hover:text-[#E63B2E]"
        >
          Global DevRel
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href, link.isRoute);
              }}
              className="font-body text-sm font-medium tracking-wide uppercase text-[#8A8578] hover:text-[#1A1A1A]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="font-body text-sm font-semibold tracking-wide uppercase text-[#E63B2E] border-b-2 border-[#E63B2E] pb-0.5 hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#1A1A1A] p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8E3DB] overflow-hidden">
          <div className="container py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.isRoute);
                }}
                className="font-body text-base font-medium tracking-wide uppercase text-[#8A8578] hover:text-[#1A1A1A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="font-body text-base font-semibold tracking-wide uppercase text-[#E63B2E]"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
