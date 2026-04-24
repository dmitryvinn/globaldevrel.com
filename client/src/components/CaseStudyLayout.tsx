/*
  EDITORIAL DESIGN — Case Study Layout
  Reusable template for individual case study pages.
  Structure: Hero band → Challenge → Approach → Outcomes → CTA
  Matches the editorial aesthetic: Playfair Display, warm cream, vermillion accents.
  No employer names. Depersonalized "we" voice.
*/

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "./SEOHead";

export interface CaseStudyData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  stat: string;
  challenge: {
    heading: string;
    paragraphs: string[];
  };
  approach: {
    heading: string;
    steps: { title: string; description: string }[];
  };
  outcomes: {
    heading: string;
    metrics: { value: string; label: string }[];
    summary: string;
  };
  links?: { label: string; url: string }[];
  relatedWork?: { title: string; slug: string }[];
}

export default function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <SEOHead
        title={`${data.title} — Case Study`}
        description={data.subtitle}
        canonical={`https://globaldevrel.com/work/${data.slug}`}
        ogType="article"
      />
      <Navbar />

      {/* Hero band */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-[#1A1A1A]">
        <div className="container">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-body text-sm text-[#8A8578] hover:text-[#E63B2E] mb-8"
          >
            <ArrowLeft size={16} />
            Back to all work
          </Link>

          {/* Category + stat */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#E63B2E]">
              {data.category}
            </span>
            <span className="w-1 h-1 bg-[#555] rounded-full" />
            <span className="font-body text-xs tracking-wide text-[#8A8578]">
              {data.stat}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl lg:text-5xl xl:text-6xl font-bold text-[#FAF7F2] leading-tight max-w-4xl mb-6">
            {data.title}
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg lg:text-xl text-[#8A8578] leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>

          {/* External links */}
          {data.links && data.links.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-8">
              {data.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-[#E63B2E] hover:text-[#FAF7F2] border-b border-[#E63B2E] hover:border-[#FAF7F2] pb-0.5"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 lg:py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-3">
                The Challenge
              </p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#1A1A1A] leading-tight">
                {data.challenge.heading}
              </h2>
            </div>
            <div className="lg:col-span-8">
              {data.challenge.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-base lg:text-lg text-[#4A4540] leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="border-t border-[#E8E3DB]" />
      </div>

      {/* Approach */}
      <section className="py-16 lg:py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
            <div className="lg:col-span-4">
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-3">
                Our Approach
              </p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#1A1A1A] leading-tight">
                {data.approach.heading}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {data.approach.steps.map((step, i) => (
              <div key={i} className="border-l-2 border-[#E63B2E] pl-6">
                <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#8A8578] mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-lg lg:text-xl font-semibold text-[#1A1A1A] mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#6B6560] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 lg:py-24 bg-[#1A1A1A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
            <div className="lg:col-span-4">
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-3">
                Outcomes
              </p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#FAF7F2] leading-tight">
                {data.outcomes.heading}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-body text-base lg:text-lg text-[#8A8578] leading-relaxed">
                {data.outcomes.summary}
              </p>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#333] pt-10">
            {data.outcomes.metrics.map((metric, i) => (
              <div key={i}>
                <p className="font-display text-3xl lg:text-4xl font-bold text-[#E63B2E] mb-1">
                  {metric.value}
                </p>
                <p className="font-body text-sm text-[#8A8578]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related work + CTA */}
      <section className="py-16 lg:py-20 bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Related case studies */}
            {data.relatedWork && data.relatedWork.length > 0 && (
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#8A8578] mb-6">
                  More Case Studies
                </p>
                <div className="flex flex-col gap-3">
                  {data.relatedWork.map((rw) => (
                    <Link
                      key={rw.slug}
                      href={`/work/${rw.slug}`}
                      className="group inline-flex items-center gap-2 font-display text-lg font-semibold text-[#1A1A1A] hover:text-[#E63B2E]"
                    >
                      {rw.title}
                      <ArrowUpRight
                        size={16}
                        className="text-[#8A8578] group-hover:text-[#E63B2E]"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className={data.relatedWork && data.relatedWork.length > 0 ? "" : "lg:col-span-2"}>
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#8A8578] mb-6">
                Interested in similar work?
              </p>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4">
                Let's build something together.
              </h3>
              <a
                href="mailto:consulting@globaldevrel.com"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#E63B2E] border-b-2 border-[#E63B2E] pb-0.5 hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
              >
                Start a conversation →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
