/*
  EDITORIAL DESIGN — About Section
  Depersonalized: focuses on the practice/brand, not an individual.
  Full-width conference image with overlay text.
  Then editorial two-column layout with brand story and philosophy.
  Pull quote without personal attribution.
*/

export default function About() {
  return (
    <section id="about" className="bg-[#FAF7F2]">
      {/* Full-width image band */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407462879/KQxXc7ieBaEZNMPbGetNr6/editorial-about-bg-3XVXCk3hNpp8ETP5VcoSBm.webp"
          alt="Developer conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-3">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Built on a decade<br />of developer trust
            </h2>
          </div>
        </div>
      </div>

      {/* Brand story content */}
      <div className="container py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — pull quote + philosophy */}
          <div className="lg:col-span-5">
            <div className="relative pl-8 border-l-[3px] border-[#E63B2E]">
              <span className="absolute -left-3 -top-4 font-display text-6xl text-[#E63B2E]/20 leading-none">
                &ldquo;
              </span>
              <p className="font-display text-2xl lg:text-3xl italic text-[#1A1A1A] leading-snug mb-6">
                Developer advocacy isn't about selling to developers. It's about genuinely helping them succeed — and the business results follow naturally.
              </p>
            </div>

            {/* LinkedIn CTA */}
            <div className="mt-12">
              <a
                href="https://www.linkedin.com/in/dmitry-vinnik/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-body text-base font-semibold text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-1 hover:text-[#E63B2E] hover:border-[#E63B2E] transition-colors duration-200"
              >
                Connect with us on LinkedIn
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Right — brand story */}
          <div className="lg:col-span-7">
            <div className="max-w-xl space-y-6">
              <p className="font-body text-lg text-[#1A1A1A] leading-relaxed">
                <strong>Global DevRel</strong> was founded on a simple observation: most companies 
                know they need to reach developers, but very few know how to do it authentically.
              </p>
              <p className="font-body text-base text-[#8A8578] leading-relaxed">
                Our practice draws on over a decade of hands-on experience building and scaling 
                developer relations programs at major technology companies. 
                We've managed developer advocacy for 600+ open source projects, 
                building communities, producing content, and speaking at 
                conferences worldwide.
              </p>
              <p className="font-body text-base text-[#8A8578] leading-relaxed">
                With over 100 conference talks delivered at events like Devoxx, OSCON, All 
                Things Open, and Craft Conference, we bring a rare combination of strategic 
                thinking and hands-on execution. We've created courses for Coursera, hosted 
                podcasts, written extensively for technical publications, and built developer 
                communities from the ground up.
              </p>
              <p className="font-body text-base text-[#8A8578] leading-relaxed">
                Today, Global DevRel helps small and medium-sized businesses build authentic 
                developer relationships — whether that means crafting a DevRel strategy from 
                scratch, hiring the right team, or producing the technical content that 
                resonates with developers.
              </p>
              <p className="font-body text-base text-[#8A8578] leading-relaxed">
                We also run{" "}
                <a
                  href="https://devrelacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E63B2E] font-semibold hover:text-[#1A1A1A] transition-colors duration-200 border-b border-[#E63B2E]/30 hover:border-[#1A1A1A]"
                >
                  DevRel Academy
                </a>
                — a curated collection of books, talks, blogs, podcasts, and tools 
                for the developer advocacy community. It's our way of giving back to 
                the field that shaped us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
