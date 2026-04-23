import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  slug: "eli5-series",
  category: "Content Production",
  title: "Explain Like I'm 5 — Developer Education Video Series",
  subtitle:
    "We created a multi-season video series that distilled complex open source projects into 5-minute explanations — making advanced developer tools accessible to hundreds of thousands of developers.",
  stat: "3 seasons · 20+ episodes",
  challenge: {
    heading: "Open source projects that nobody understood",
    paragraphs: [
      "A large technology organization maintained hundreds of open source projects, but most had low external awareness. Developers outside the organization didn't understand what these tools did, why they mattered, or how to get started.",
      "Traditional documentation and blog posts weren't cutting through the noise. The projects needed a content format that was engaging, shareable, and could explain complex infrastructure in minutes — not hours. The goal was to make the unfamiliar feel approachable.",
    ],
  },
  approach: {
    heading: "Simplicity as a creative constraint",
    steps: [
      {
        title: "Format Innovation",
        description:
          "Designed a signature format: explain any open source project in under 5 minutes, as if explaining to a 5-year-old. This constraint forced clarity and made every episode immediately accessible regardless of the viewer's background.",
      },
      {
        title: "Visual Storytelling",
        description:
          "Each episode combined live narration with custom diagrams, animations, and code snippets. The visual language was consistent across seasons, building brand recognition and making the series instantly identifiable.",
      },
      {
        title: "Strategic Project Selection",
        description:
          "Curated which projects to feature based on strategic priorities: adoption potential, community interest, and alignment with broader developer trends like AI/ML, mobile development, and build tooling.",
      },
      {
        title: "Multi-Channel Distribution",
        description:
          "Published across YouTube, social media, and developer community platforms. Each episode was repurposed into blog posts, social clips, and conference lightning talks to maximize reach per unit of production effort.",
      },
    ],
  },
  outcomes: {
    heading: "Complex made simple, at scale",
    summary:
      "The ELI5 series became one of the most recognizable developer education formats in the open source community. It proved that technical content doesn't have to be dry — and that simplicity drives adoption faster than comprehensive documentation.",
    metrics: [
      { value: "20+", label: "Episodes produced" },
      { value: "3", label: "Seasons completed" },
      { value: "100K+", label: "Developer reach" },
      { value: "5 min", label: "Average episode length" },
    ],
  },
  relatedWork: [
    { title: "Enterprise Developer Education on Coursera", slug: "developer-education" },
    { title: "Global Conference Speaking Program", slug: "conference-speaking" },
  ],
};

export default function CaseStudyEli5() {
  return <CaseStudyLayout data={data} />;
}
