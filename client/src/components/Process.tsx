/*
  EDITORIAL DESIGN — Process Section
  Four steps with concrete deliverables at each stage.
  Large faded step numbers. Thin dividers between steps.
  Cream background with charcoal text.
*/

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "A free 30-minute conversation to understand your product, developer audience, and current challenges. We listen more than we talk.",
    output: "Fit Assessment",
  },
  {
    number: "02",
    title: "Diagnostic",
    description:
      "We audit your developer experience, documentation, community, content, and event presence. Then we deliver a scored assessment with clear priorities.",
    output: "DevRel Scorecard + Gap Analysis",
  },
  {
    number: "03",
    title: "Roadmap & Execution",
    description:
      "Based on the diagnostic, we build a phased plan with timelines, owners, and success metrics. Then we execute — whether that's building your content pipeline, coaching speakers, or hiring your team.",
    output: "90-Day Roadmap + Deliverables",
  },
  {
    number: "04",
    title: "Measure & Iterate",
    description:
      "We track developer engagement, community growth, content performance, and adoption metrics. Monthly check-ins ensure the strategy evolves with your product and market.",
    output: "Monthly Impact Report",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#FAF7F2]">
      <div className="container">
        {/* Section header — editorial asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
          <div className="lg:col-span-4">
            <div>
              <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-4">
                Process
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
                How we work
              </h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-body text-lg text-[#8A8578] leading-relaxed max-w-2xl">
              A structured yet flexible engagement model. Every phase produces 
              something tangible — no ambiguity about what you're getting.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E8E3DB] mb-16" />

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`py-8 lg:py-0 lg:px-8 ${
                i < steps.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-[#E8E3DB]"
                  : ""
              } ${i === 0 ? "lg:pl-0" : ""} ${i === steps.length - 1 ? "lg:pr-0" : ""}`}
            >
              {/* Large number */}
              <span className="font-display text-5xl lg:text-6xl font-bold text-[#E63B2E]/15 leading-none block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-[#1A1A1A] mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-[#8A8578] leading-relaxed mb-4">
                {step.description}
              </p>
              <p className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-[#E63B2E]">
                → {step.output}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
