/*
  EDITORIAL DESIGN — Case Study: Engineering Leadership Hub
  Demonstrates product building, community curation, and leadership development.
  No employer names. Depersonalized "we" voice.
*/

import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  slug: "engineering-leadership-hub",
  category: "Product & Engineering Leadership",
  title: "Engineering Leadership Hub",
  subtitle:
    "A curated learning platform with 1,000+ resources for engineering managers, directors, VPs, and CTOs — organized into structured learning paths covering the full leadership journey.",
  stat: "1,000+ curated resources · 12+ learning paths",
  challenge: {
    heading: "Leadership resources were everywhere — and nowhere.",
    paragraphs: [
      "Engineering leadership is one of the fastest-growing career paths in tech, yet the learning resources for it are fragmented across hundreds of blogs, books, podcasts, and conference talks. New engineering managers have no single place to find structured, curated materials that cover the full spectrum — from first-time manager fundamentals to VP-level organizational design and CTO-level technical strategy.",
      "Unlike software engineering, where platforms like freeCodeCamp or LeetCode provide structured learning paths, engineering leadership had no equivalent. Managers were left to piece together their own curriculum from scattered recommendations, often missing critical topics until they encountered them the hard way.",
      "The problem was compounded by the rise of AI: engineering leaders now need to understand AI-native workflows, AI-augmented teams, and how to evaluate AI tools — but these topics are too new for most traditional leadership books to cover.",
    ],
  },
  approach: {
    heading: "Five pillars, twelve paths, one platform.",
    steps: [
      {
        title: "Taxonomy-First Architecture",
        description:
          "Organized 1,000+ resources around five pillars of engineering leadership excellence: The Leadership Path, People & Culture, Engineering Operations, Strategy & Architecture, and Business & Communication. Each pillar maps to a distinct competency area that engineering leaders must master.",
      },
      {
        title: "Career-Stage Learning Paths",
        description:
          "Designed 12+ structured learning paths for specific career transitions: IC to Manager, Staff+ Engineer, Director & VP Track, CTO Track, and specialized paths like AI-Native Engineering Leadership and Platform Engineering Leadership. Each path provides a curated sequence of resources with clear progression.",
      },
      {
        title: "AI Skills Integration",
        description:
          "Created a dedicated AI Skills section covering AI-native engineering leadership, AI-augmented development workflows, managing AI engineers, evaluating AI tools, and building AI-native engineering culture — topics that no existing leadership resource adequately addresses.",
      },
      {
        title: "For Your Engineers Section",
        description:
          "Built a unique 'share with your team' feature — curated learning paths that engineering leaders can distribute to their teams covering user stories, technical communication, and agile delivery discipline. Because a leader is only as good as their team.",
      },
    ],
  },
  outcomes: {
    heading: "A complete leadership curriculum — from IC to CTO.",
    metrics: [
      { value: "1,000+", label: "Curated resources" },
      { value: "12+", label: "Learning paths" },
      { value: "5", label: "Leadership pillars" },
      { value: "6", label: "Career tracks covered" },
    ],
    summary:
      "The Engineering Leadership Hub launched as a comprehensive, free learning platform covering the full engineering leadership journey. From first-time managers navigating the IC-to-manager transition to CTOs shaping technology strategy, the platform provides structured paths with hand-picked resources. The AI Skills section addresses the most pressing gap in leadership education today, and the 'For Your Engineers' feature turns the platform into a team development tool — not just a personal learning resource.",
  },
  links: [
    { label: "Engineering Leadership Hub", url: "https://engleader.dev" },
    { label: "Learning Paths", url: "https://engleader.dev/learn" },
    { label: "AI Skills", url: "https://engleader.dev/ai-skills" },
  ],
  relatedWork: [
    { title: "DevRel Academy — Learning Platform", slug: "devrel-academy" },
    { title: "Developer Education on Coursera", slug: "developer-education" },
  ],
};

export default function CaseStudyEngLeader() {
  return <CaseStudyLayout data={data} />;
}
