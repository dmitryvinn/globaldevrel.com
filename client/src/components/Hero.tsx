/*
  EDITORIAL DESIGN — Hero Section
  Asymmetric split layout. Left: oversized serif headline + pitch.
  Right: editorial accent image. Bottom: marquee ticker with credentials.
  Warm cream background. No gradients. No centered layout.
*/

import { Link } from "wouter";

// Services we offer
const services = [
  "DevRel Strategy",
  "Content Production",
  "Community Building",
  "Podcast Production",
  "Conference Speaking",
];

// Where we've been seen
const credentials = [
  "100+ Talks",
  "Coursera Instructor",
  "DevRelCon",
  "OSCON",
  "Devoxx",
  "All Things Open",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden">
      {/* Main content */}
      <div className="container pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — oversized headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            <p
              className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-6"
            >
              Developer Advocacy Consulting
            </p>

            <h1
              className="font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-[#1A1A1A] mb-8"
            >
              We help companies{" "}
              <span className="italic text-[#E63B2E]">speak</span>{" "}
              to developers.
            </h1>

            <div
              className="max-w-xl"
            >
              <p className="font-body text-lg lg:text-xl text-[#8A8578] leading-relaxed mb-8">
                From DevRel strategy and team building to content production, 
                conference speaking, and community engagement — we provide the 
                full spectrum of developer advocacy services.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 font-body text-base font-semibold text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-1 hover:text-[#E63B2E] hover:border-[#E63B2E] transition-colors duration-200"
                >
                  Start a conversation
                  <span className="text-lg">→</span>
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 font-body text-base font-medium text-[#8A8578] hover:text-[#1A1A1A] transition-colors duration-200"
                >
                  View selected work
                </Link>
              </div>
            </div>
          </div>

          {/* Right — editorial accent */}
          <div
            className="lg:col-span-5 xl:col-span-4 hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407462879/KQxXc7ieBaEZNMPbGetNr6/editorial-pattern-red-Ycsyac5ymyr5fECXoxiAQZ.webp"
                alt="Editorial accent"
                className="w-full max-w-sm ml-auto"
                
              />
              {/* Pull quote overlay */}
              <div className="absolute bottom-8 left-0 right-8 bg-[#FAF7F2] p-6 border-l-[3px] border-[#E63B2E]">
                <p className="font-display text-lg italic text-[#1A1A1A] leading-snug">
                  "The best DevRel doesn't feel like marketing — it feels like a conversation between engineers."
                </p>
                <p className="font-body text-sm text-[#8A8578] mt-2">— Global DevRel</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credential ticker — two rows */}
      <div className="border-t border-b border-[#E8E3DB] py-4">
        <div className="flex flex-col items-center gap-2 px-6">
          {/* Row 1: Services */}
          <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
            {services.map((item, i) => (
              <span key={`s-${i}`} className="inline-flex items-center gap-2">
                <span className="font-body text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1A1A1A]">
                  {item}
                </span>
                {i < services.length - 1 && (
                  <span className="text-[#E63B2E] text-[7px]">◆</span>
                )}
              </span>
            ))}
          </div>

          {/* Row 2: Credentials */}
          <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
            {credentials.map((item, i) => (
              <span key={`c-${i}`} className="inline-flex items-center gap-2">
                <span className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-[#8A8578]">
                  {item}
                </span>
                {i < credentials.length - 1 && (
                  <span className="text-[#E63B2E] text-[7px]">◆</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
