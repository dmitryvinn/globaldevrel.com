import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  slug: "conference-speaking",
  category: "Conference Speaking",
  title: "Global Conference Speaking Program — 100+ Talks Across 6 Continents",
  subtitle:
    "We built and sustained a high-volume speaking program spanning keynotes, technical deep-dives, and workshops at major international conferences — from developer tooling to engineering culture.",
  stat: "100+ talks · 6 continents",
  challenge: {
    heading: "Visibility in a crowded developer landscape",
    paragraphs: [
      "For developer-focused organizations, conference speaking is one of the highest-leverage activities — but most companies treat it as ad hoc. Individual engineers submit talks sporadically, with no strategic alignment, no CFP pipeline, and no way to measure impact.",
      "The challenge was to build a systematic, repeatable speaking program that could sustain 20+ conference appearances per year, cover multiple technical domains, and maintain consistently high talk quality across different formats and audiences.",
    ],
  },
  approach: {
    heading: "A pipeline, not a one-off",
    steps: [
      {
        title: "CFP Pipeline Management",
        description:
          "Built a structured system for tracking Call for Papers deadlines across hundreds of conferences globally. Maintained a rolling inventory of talk abstracts, each tailored to different conference formats (keynote, breakout, workshop, lightning talk).",
      },
      {
        title: "Talk Portfolio Strategy",
        description:
          "Developed a portfolio of 15+ distinct talks spanning open source strategy, testing infrastructure, developer wellness, and engineering leadership. Each talk was designed to be modular — adaptable to 20-minute slots or 90-minute workshops.",
      },
      {
        title: "Feedback Loop & Iteration",
        description:
          "After every talk, collected audience feedback, analyzed engagement patterns, and iterated on content. Talks that resonated were expanded; underperforming topics were retired. This data-driven approach improved acceptance rates year over year.",
      },
      {
        title: "Content Multiplication",
        description:
          "Every conference talk was repurposed into blog posts, video recordings, social threads, and podcast episodes. A single 30-minute talk could generate 5-8 pieces of derivative content, maximizing ROI on travel and preparation time.",
      },
    ],
  },
  outcomes: {
    heading: "Sustained global presence",
    summary:
      "The speaking program became a reliable engine for developer engagement, brand visibility, and community trust. Talks like 'Stress Driven Development' became audience favorites, requested repeatedly across conferences worldwide.",
    metrics: [
      { value: "100+", label: "Talks delivered" },
      { value: "6", label: "Continents covered" },
      { value: "15+", label: "Distinct talk topics" },
      { value: "50+", label: "Unique conferences" },
    ],
  },
  links: [
    { label: "Watch: Stress Driven Development", url: "https://www.youtube.com/watch?v=ShF8mEzlsEI" },
  ],
  relatedWork: [
    { title: "DevRel Academy Learning Platform", slug: "devrel-academy" },
    { title: "ELI5 Developer Education Series", slug: "eli5-series" },
  ],
};

export default function CaseStudyConferenceSpeaking() {
  return <CaseStudyLayout data={data} />;
}
