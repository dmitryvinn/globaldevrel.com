/*
  EDITORIAL DESIGN — Footer
  Minimal, typographic. Thin top border.
  Logo text, social links as text (not icons), copyright.
  Depersonalized — no location, no personal site.
*/

import { useLocation } from "wouter";
import { scrollToSection } from "@/lib/navigation";

export default function Footer() {
  const [, navigate] = useLocation();

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId, navigate);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const [location] = window.location.pathname.split("?");
    if (location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const navItems = [
    { label: "Services", section: "#services" },
    { label: "Work", href: "/work", isRoute: true },
    { label: "About", section: "#about" },
    { label: "Process", section: "#process" },
    { label: "Contact", section: "#contact" },
  ];

  return (
    <footer className="bg-[#151515] border-t border-[#333]">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <a
              href="/"
              onClick={handleLogoClick}
              className="font-display text-xl font-bold text-[#FAF7F2] hover:text-[#E63B2E] transition-colors duration-200"
            >
              Global DevRel
            </a>
            <p className="font-body text-sm text-[#8A8578] mt-3 leading-relaxed max-w-xs">
              Developer advocacy consulting for companies that want to build 
              authentic relationships with their developer communities.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#8A8578] mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.isRoute ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.href!);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="font-body text-sm text-[#666] hover:text-[#FAF7F2] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={`/${item.section}`}
                    onClick={(e) => handleSectionClick(e, item.section!)}
                    className="font-body text-sm text-[#666] hover:text-[#FAF7F2] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#8A8578] mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/dmitry-vinnik/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[#666] hover:text-[#FAF7F2] transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:consulting@globaldevrel.com"
                className="font-body text-sm text-[#666] hover:text-[#FAF7F2] transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://devrelacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[#666] hover:text-[#FAF7F2] transition-colors duration-200"
              >
                DevRel Academy
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="md:col-span-2">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#8A8578] mb-4">
              Ready to talk?
            </p>
            <a
              href="/#contact"
              onClick={(e) => handleSectionClick(e, "#contact")}
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#E63B2E] hover:text-[#FAF7F2] transition-colors duration-200"
            >
              Start a conversation →
            </a>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="border-t border-[#333] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#555]">
            &copy; {new Date().getFullYear()} Global DevRel. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#555]">
            Available globally — remote &amp; on-site
          </p>
        </div>
      </div>
    </footer>
  );
}
