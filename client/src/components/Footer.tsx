/*
  EDITORIAL DESIGN — Footer
  Minimal, typographic. Thin top border.
  Logo text, social links as text (not icons), copyright.
  Depersonalized — no location, no personal site.
*/

export default function Footer() {
  return (
    <footer className="bg-[#151515] border-t border-[#333]">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo + tagline */}
          <div className="md:col-span-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
              {["Services", "Work", "About", "Process", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-body text-sm text-[#666] hover:text-[#FAF7F2] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
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
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
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
