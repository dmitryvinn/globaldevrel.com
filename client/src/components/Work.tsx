/*
  EDITORIAL DESIGN — Work/Portfolio Section
  Reframed as "consulting capabilities demonstrated through real work."
  Organized by capability area, not chronology.
  No employer names (Meta, Salesforce, Applitools, Fosdem).
  Items with case study pages link internally; others link externally or are static.
*/

import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

type WorkItem = {
  category: string;
  title: string;
  description: string;
  stat?: string;
  url?: string;
  caseStudySlug?: string; // internal case study route
};

const workItems: WorkItem[] = [
  // 1. Engineering Leadership Hub — newest product
  {
    category: "Product & Leadership",
    title: "Engineering Leadership Hub — Learning Platform for Engineering Leaders",
    description:
      "Built a comprehensive learning platform curating 1,000+ resources for engineering managers, directors, VPs, and CTOs. Features 12+ structured learning paths from IC-to-Manager through CTO, AI Skills sections, and team-shareable resources. Deployed on Cloudflare.",
    stat: "1,000+ resources · 12+ paths",
    url: "https://engleader.dev",
    caseStudySlug: "engineering-leadership-hub",
  },
  // 2. Product Building — DevRel Academy
  {
    category: "Product & Platform",
    title: "DevRel Academy — Learning Platform for Developer Advocates",
    description:
      "Built a comprehensive learning platform from the ground up — curating resources, designing learning paths, and shipping a CFP Tracker covering 780+ conferences across 6 regions. From concept to production on Cloudflare.",
    stat: "2,800+ resources",
    url: "https://devrelacademy.com",
    caseStudySlug: "devrel-academy",
  },
  // 2. Content at Scale — ELI5 Series
  {
    category: "Content Production",
    title: "Explain Like I'm 5 — Developer Education Video Series",
    description:
      "Created and hosted a multi-season video series that distilled complex open source projects into 5-minute explanations. 20+ episodes covering frameworks, dev tools, and AI/ML infrastructure — published on channels reaching hundreds of thousands of developers.",
    stat: "3 seasons · 20+ episodes",
    caseStudySlug: "eli5-series",
  },
  // 3. Developer Education — Coursera
  {
    category: "Developer Education",
    title: "Enterprise Developer Education Program on Coursera",
    description:
      "Designed and produced 6 comprehensive courses on Coursera covering platform APIs, testing strategies, and developer tools — from curriculum architecture to video production. Reached developers in 180+ countries.",
    stat: "6 courses · 180+ countries",
    url: "https://www.coursera.org/instructor/~121460436",
    caseStudySlug: "developer-education",
  },
  // 4. Strategic Framework — OSS Health
  {
    category: "DevRel Strategy",
    title: "Open Source Project Health Framework",
    description:
      "Developed a data-driven methodology for measuring the health of open source projects at scale. Used to prioritize DevRel focus across 600+ repositories.",
    stat: "600+ repos assessed",
  },
  // 5. Conference Speaking
  {
    category: "Conference Speaking",
    title: "Global Conference Speaking Program",
    description:
      "Built and sustained a speaking program spanning 100+ presentations at major international conferences — from keynotes to hands-on workshops. Topics range from open source strategy and testing to developer wellness and engineering leadership.",
    stat: "100+ talks · 6 continents",
    caseStudySlug: "conference-speaking",
  },
  // 6. Podcast Production
  {
    category: "Podcast & Media",
    title: "The Diff — Open Source Developer Podcast",
    description:
      "Hosted a long-form podcast spotlighting the engineers behind major open source projects. Each episode combines technical depth with personal storytelling, distributed across audio, video, and social formats.",
    stat: "Multi-format production",
    url: "https://thediffpodcast.com",
  },
  // 7. Testing & QA Advocacy
  {
    category: "Technical Advocacy",
    title: "Testing Infrastructure & Visual QA Advocacy",
    description:
      "Drove adoption of modern testing practices across enterprise organizations — from visual regression testing to AI-powered QA. Published definitive guides and spoke at 10+ QA-focused conferences including SeleniumConf and Nordic Testing Days.",
    stat: "10+ QA conferences",
  },
  // 8. Developer Wellness
  {
    category: "Engineering Culture",
    title: "Developer Wellness & Sustainable Engineering",
    description:
      "Pioneered wellness content in technical conference settings. The \"Stress Driven Development\" talk became one of the most-requested presentations, delivered at Devoxx, HackConf, AgentConf, and others — reaching thousands of developers.",
    stat: "8+ conferences",
    url: "https://www.youtube.com/watch?v=ShF8mEzlsEI",
  },
];

function WorkEntryInner({ item }: { item: WorkItem }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-start">
      {/* Category + Stat */}
      <div className="lg:col-span-3">
        <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-1">
          {item.category}
        </p>
        {item.stat && (
          <p className="font-display text-sm text-[#6B6560] italic">
            {item.stat}
          </p>
        )}
      </div>

      {/* Title + Description */}
      <div className="lg:col-span-8">
        <h3 className="font-display text-xl lg:text-2xl font-semibold text-[#FAF7F2] group-hover:text-[#E63B2E] mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="font-body text-sm text-[#8A8578] leading-relaxed">
          {item.description}
        </p>
        {item.caseStudySlug && (
          <span className="inline-flex items-center gap-1 font-body text-xs font-semibold text-[#E63B2E] mt-3 tracking-wide uppercase">
            Read case study
            <ArrowUpRight size={12} />
          </span>
        )}
      </div>

      {/* Arrow */}
      <div className="lg:col-span-1 flex justify-end">
        {(item.url || item.caseStudySlug) && (
          <ArrowUpRight
            size={18}
            className="shrink-0 text-[#8A8578] group-hover:text-[#E63B2E] mt-1"
          />
        )}
      </div>
    </div>
  );
}

function WorkEntry({ item }: { item: WorkItem }) {
  const cls = "group block py-7 border-b border-[#333] hover:border-[#E63B2E]";

  // Case study pages take priority — link internally
  if (item.caseStudySlug) {
    return (
      <Link href={`/work/${item.caseStudySlug}`} className={cls}>
        <WorkEntryInner item={item} />
      </Link>
    );
  }

  // External links
  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className={cls}>
        <WorkEntryInner item={item} />
      </a>
    );
  }

  // No link
  return (
    <div className={cls}>
      <WorkEntryInner item={item} />
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-[#1A1A1A]">
      <div className="container">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <div>
              <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-4">
                Selected Work
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#FAF7F2] leading-tight">
                A body of work
              </h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-body text-lg text-[#8A8578] leading-relaxed max-w-2xl">
              Over a decade of developer advocacy work — building platforms, producing content at scale, 
              speaking at 100+ conferences, and developing frameworks that shaped how organizations 
              approach developer relations.
            </p>
          </div>
        </div>

        {/* Work entries — editorial list with grid layout */}
        <div className="border-t border-[#333]">
          {workItems.map((item) => (
            <WorkEntry key={item.title} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wide uppercase text-[#FAF7F2] border-b border-[#FAF7F2] pb-0.5 hover:text-[#E63B2E] hover:border-[#E63B2E]"
          >
            View all case studies
            <ArrowUpRight size={16} />
          </Link>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wide uppercase text-[#8A8578] hover:text-[#E63B2E]"
          >
            Interested in similar work? Let's talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
