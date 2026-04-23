/*
  EDITORIAL DESIGN — Work Index Page
  Browsable grid of all case studies.
  Matches the editorial aesthetic: Playfair Display, warm cream, vermillion accents.
  No employer names.
*/

import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface CaseStudyCard {
  slug: string;
  category: string;
  title: string;
  description: string;
  stat: string;
}

const caseStudies: CaseStudyCard[] = [
  {
    slug: "engineering-leadership-hub",
    category: "Product & Engineering Leadership",
    title: "Engineering Leadership Hub",
    description:
      "A curated learning platform with 1,000+ resources for engineering managers, directors, VPs, and CTOs — organized into structured learning paths covering the full leadership journey.",
    stat: "1,000+ resources · 12+ paths",
  },
  {
    slug: "devrel-academy",
    category: "Product & Platform",
    title: "DevRel Academy — Learning Platform for Developer Advocates",
    description:
      "Designed and built a comprehensive learning platform from scratch — curating thousands of resources, designing structured learning paths, and shipping a CFP Tracker covering 780+ conferences across 6 regions.",
    stat: "2,800+ resources curated",
  },
  {
    slug: "eli5-series",
    category: "Content Production",
    title: "Explain Like I'm 5 — Developer Education Video Series",
    description:
      "A multi-season video series that distilled complex open source projects into 5-minute explanations — making advanced developer tools accessible to hundreds of thousands of developers.",
    stat: "3 seasons · 20+ episodes",
  },
  {
    slug: "developer-education",
    category: "Developer Education",
    title: "Enterprise Developer Education Program on Coursera",
    description:
      "Designed and produced 6 comprehensive courses on a major learning platform — from curriculum architecture to video production — reaching developers in 180+ countries.",
    stat: "6 courses · 180+ countries",
  },
  {
    slug: "conference-speaking",
    category: "Conference Speaking",
    title: "Global Conference Speaking Program",
    description:
      "Built and sustained a high-volume speaking program spanning keynotes, technical deep-dives, and workshops at major international conferences — from developer tooling to engineering culture.",
    stat: "100+ talks · 6 continents",
  },
];

export default function WorkIndex() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <SEOHead
        title="Work"
        description="Case studies from over a decade of developer advocacy — building platforms, producing content at scale, speaking at 100+ conferences, and developing frameworks for developer relations."
        canonical="https://globaldevrel.com/work"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-[#1A1A1A]">
        <div className="container">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-[#8A8578] hover:text-[#E63B2E] mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-4">
            Selected Work
          </p>
          <h1 className="font-display text-3xl lg:text-5xl xl:text-6xl font-bold text-[#FAF7F2] leading-tight max-w-3xl mb-6">
            Case Studies
          </h1>
          <p className="font-body text-lg lg:text-xl text-[#8A8578] leading-relaxed max-w-2xl">
            Over a decade of developer advocacy work — building platforms, producing content at scale,
            speaking at 100+ conferences, and developing frameworks that shaped how organizations
            approach developer relations.
          </p>
        </div>
      </section>

      {/* Case study grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block"
              >
                <div className="border-t-2 border-[#E8E3DB] group-hover:border-[#E63B2E] pt-6 transition-colors duration-200">
                  {/* Category + stat */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#E63B2E]">
                      {study.category}
                    </span>
                    <span className="w-1 h-1 bg-[#C8C3BA] rounded-full" />
                    <span className="font-body text-xs tracking-wide text-[#8A8578]">
                      {study.stat}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl lg:text-2xl font-semibold text-[#1A1A1A] group-hover:text-[#E63B2E] leading-snug mb-3 transition-colors duration-200">
                    {study.title}
                  </h2>

                  {/* Description */}
                  <p className="font-body text-sm text-[#6B6560] leading-relaxed mb-4">
                    {study.description}
                  </p>

                  {/* Read link */}
                  <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold tracking-wide uppercase text-[#E63B2E] group-hover:gap-2.5 transition-all duration-200">
                    Read case study
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 border-t border-[#E8E3DB] pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#8A8578] mb-3">
                  Beyond case studies
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#1A1A1A] leading-tight">
                  Have a project in mind?
                </h3>
              </div>
              <div className="lg:text-right">
                <Link
                  href="/"
                  onClick={() => {
                    setTimeout(() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#E63B2E] border-b-2 border-[#E63B2E] pb-0.5 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors duration-200"
                >
                  Start a conversation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
