/*
  EDITORIAL DESIGN — Services Section
  Three pillars with 2 services each, mapped to DevRel Academy's framework.
  Each service includes a concrete deliverable so prospects know exactly what they get.
  No cards, no shadows, no rounded corners. Pure typography + red accents.
*/

import { ArrowUpRight } from "lucide-react";

type Service = {
  title: string;
  description: string;
  deliverable: string;
};

type Pillar = {
  number: string;
  label: string;
  services: Service[];
};

const pillars: Pillar[] = [
  {
    number: "01",
    label: "Strategy & Leadership",
    services: [
      {
        title: "DevRel Program Audit",
        description:
          "A thorough review of your existing developer relations program — documentation quality, community health, content performance, event ROI, and developer experience. We identify gaps and rank opportunities.",
        deliverable: "Audit Report + Prioritized Roadmap",
      },
      {
        title: "DevRel Hiring & Team Building",
        description:
          "We help you define the right DevRel roles for your stage, write job descriptions, evaluate candidates, and sit in on interviews. From your first Developer Advocate to building a full team.",
        deliverable: "Hiring Rubric + Role Definitions + Interview Scorecards",
      },
    ],
  },
  {
    number: "02",
    label: "Content & Community",
    services: [
      {
        title: "Content Engine Setup",
        description:
          "We build your technical content pipeline from scratch — blog cadence, tutorial frameworks, video production workflows, and podcast launch strategy. Then we train your team to run it.",
        deliverable: "90-Day Content Calendar + Style Guide + Production Playbook",
      },
      {
        title: "Community Architecture",
        description:
          "Design and launch a developer community program — from choosing the right platforms and defining engagement loops to establishing governance and measuring community health metrics.",
        deliverable: "Community Blueprint + Engagement Playbook + KPI Dashboard",
      },
    ],
  },
  {
    number: "03",
    label: "Events & Visibility",
    services: [
      {
        title: "Conference & Event Strategy",
        description:
          "Build a sustainable conference presence — from identifying the right events and crafting winning CFP submissions to speaker coaching and post-event content repurposing.",
        deliverable: "Event Calendar + CFP Templates + Speaker Training",
      },
      {
        title: "DX & Documentation Review",
        description:
          "Evaluate your developer experience end-to-end — onboarding flow, API documentation, SDK quality, and AI-readiness (llms.txt, structured docs). Make your product easy to adopt and recommend.",
        deliverable: "DX Scorecard + Documentation Improvement Plan",
      },
    ],
  },
];

function ServiceItem({ service }: { service: Service }) {
  return (
    <div className="border-l-[3px] border-[#E63B2E] pl-6 py-2">
      <h3 className="font-display text-xl lg:text-2xl font-semibold text-[#1A1A1A] mb-3">
        {service.title}
      </h3>
      <p className="font-body text-base text-[#8A8578] leading-relaxed mb-4">
        {service.description}
      </p>
      <p className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-[#E63B2E]">
        You get: {service.deliverable}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAF7F2]">
      <div className="container">
        {/* Section header — editorial style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
          <div className="lg:col-span-4">
            <div>
              <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-4">
                Services
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
                What we deliver
              </h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-body text-lg text-[#8A8578] leading-relaxed max-w-2xl">
              Every engagement is different. Sometimes we take a planning role to help 
              teams identify where to direct their DevRel efforts. In other cases, it's 
              all about execution and content production. Every service ends with 
              concrete deliverables — not just advice.
            </p>
          </div>
        </div>

        {/* Pillars */}
        {pillars.map((pillar, pi) => (
          <div key={pillar.number}>
            {/* Divider */}
            <div className="w-full h-px bg-[#E8E3DB] mb-16" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
              <div className="lg:col-span-4">
                <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#8A8578] mb-2">
                  {pillar.number}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
                  {pillar.label}
                </h3>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-10">
                {pillar.services.map((service) => (
                  <ServiceItem key={service.title} service={service} />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Academy cross-link */}
        <div className="w-full h-px bg-[#E8E3DB] mb-12" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-base text-[#8A8578]">
            Want to learn DevRel fundamentals first? Visit our educational platform.
          </p>
          <a
            href="https://devrelacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wide uppercase text-[#E63B2E] hover:text-[#1A1A1A] transition-colors duration-200"
          >
            DevRel Academy
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
