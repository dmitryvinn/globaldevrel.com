import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  slug: "devrel-academy",
  category: "Product & Platform",
  title: "DevRel Academy — Building the Learning Platform for Developer Advocates",
  subtitle:
    "We designed and built a comprehensive learning platform from scratch — curating thousands of resources, designing structured learning paths, and shipping a CFP Tracker covering 780+ conferences across 6 regions.",
  stat: "2,800+ resources curated",
  challenge: {
    heading: "A scattered landscape with no central hub",
    paragraphs: [
      "Developer Relations is one of the fastest-growing disciplines in tech, yet there was no single, structured place for practitioners to learn the craft. Resources were scattered across personal blogs, conference recordings, and tribal knowledge passed down in Slack channels.",
      "New developer advocates entering the field had no clear learning path. Experienced practitioners had no way to discover conferences accepting CFPs, track deadlines, or find curated resources by topic. The community needed infrastructure.",
    ],
  },
  approach: {
    heading: "Platform thinking, not just content",
    steps: [
      {
        title: "Resource Curation at Scale",
        description:
          "Systematically identified, categorized, and curated 2,800+ resources across developer advocacy, technical writing, community management, public speaking, and engineering leadership. Each resource was tagged by topic, format, and skill level.",
      },
      {
        title: "Structured Learning Paths",
        description:
          "Designed guided learning paths that take practitioners from fundamentals to advanced topics — covering everything from writing your first CFP abstract to measuring DevRel program ROI.",
      },
      {
        title: "CFP Tracker Infrastructure",
        description:
          "Built an automated pipeline that tracks Call for Papers deadlines across 780+ conferences in 6 global regions. Powered by GitHub Actions for daily updates and Cloudflare for zero-cost hosting.",
      },
      {
        title: "Open Source Foundation",
        description:
          "Released the entire resource collection as an open source 'awesome list' on GitHub, enabling community contributions while maintaining quality through structured review processes.",
      },
    ],
  },
  outcomes: {
    heading: "From idea to production",
    summary:
      "DevRel Academy became a go-to resource for developer advocacy professionals worldwide. The CFP Tracker alone helps hundreds of speakers discover and submit to conferences they would have otherwise missed.",
    metrics: [
      { value: "2,800+", label: "Curated resources" },
      { value: "780+", label: "Conferences tracked" },
      { value: "6", label: "Global regions covered" },
      { value: "$0", label: "Infrastructure cost" },
    ],
  },
  links: [
    { label: "Visit DevRel Academy", url: "https://devrelacademy.com" },
  ],
  relatedWork: [
    { title: "Engineering Leadership Hub", slug: "engineering-leadership-hub" },
    { title: "Enterprise Developer Education on Coursera", slug: "developer-education" },
    { title: "Global Conference Speaking Program", slug: "conference-speaking" },
  ],
};

export default function CaseStudyDevRelAcademy() {
  return <CaseStudyLayout data={data} />;
}
