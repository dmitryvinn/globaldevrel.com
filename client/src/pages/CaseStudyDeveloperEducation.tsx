import CaseStudyLayout, { type CaseStudyData } from "@/components/CaseStudyLayout";

const data: CaseStudyData = {
  slug: "developer-education",
  category: "Developer Education",
  title: "Enterprise Developer Education Program on Coursera",
  subtitle:
    "We designed and produced 6 comprehensive courses on a major learning platform — from curriculum architecture to video production — reaching developers in 180+ countries.",
  stat: "6 courses · 180+ countries",
  challenge: {
    heading: "Complex platform APIs with no structured learning path",
    paragraphs: [
      "A major technology platform had powerful APIs and developer tools, but adoption was lagging. Developers found the documentation dense and fragmented. There was no structured, progressive learning experience that took someone from zero to building production applications.",
      "The existing documentation covered reference material well, but lacked the narrative arc and hands-on exercises that drive real adoption. The platform needed a scalable education program that could reach developers globally, in their own time, at their own pace.",
    ],
  },
  approach: {
    heading: "Curriculum-first, production-grade",
    steps: [
      {
        title: "Curriculum Architecture",
        description:
          "Mapped the entire developer journey from first API call to production deployment. Identified 6 distinct learning modules, each building on the previous, with clear learning objectives and hands-on projects.",
      },
      {
        title: "Video Production Pipeline",
        description:
          "Developed a repeatable production workflow: scripting, screen recording, code walkthroughs, and post-production. Each course includes hours of instructor-led content with live coding demonstrations.",
      },
      {
        title: "Assessment Design",
        description:
          "Created quizzes, coding exercises, and peer-reviewed assignments that test practical application — not just recall. Designed to give learners confidence they can build real applications.",
      },
      {
        title: "Global Distribution",
        description:
          "Published on Coursera to leverage their global reach and localization infrastructure. Courses became accessible to developers in 180+ countries with auto-generated subtitles in dozens of languages.",
      },
    ],
  },
  outcomes: {
    heading: "Scalable education that drives adoption",
    summary:
      "The course series became one of the most comprehensive developer education programs on the platform, providing a structured path from beginner to advanced. It continues to onboard new developers years after initial publication.",
    metrics: [
      { value: "6", label: "Courses published" },
      { value: "180+", label: "Countries reached" },
      { value: "4.5+", label: "Average rating" },
      { value: "Ongoing", label: "Enrollment growth" },
    ],
  },
  links: [
    { label: "View courses on Coursera", url: "https://www.coursera.org/instructor/~121460436" },
  ],
  relatedWork: [
    { title: "DevRel Academy Learning Platform", slug: "devrel-academy" },
    { title: "ELI5 Developer Education Series", slug: "eli5-series" },
  ],
};

export default function CaseStudyDeveloperEducation() {
  return <CaseStudyLayout data={data} />;
}
