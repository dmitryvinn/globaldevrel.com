/*
  EDITORIAL DESIGN — Who This Is For Section
  A short, punchy section that qualifies prospects.
  Three client profiles in an asymmetric editorial layout.
  Sits between Hero and Services to frame the offerings.
*/

const profiles = [
  {
    label: "Startups",
    headline: "Series A–C developer tools companies",
    description:
      "You've built a great product but developers don't know about it yet. You need a DevRel strategy, your first hire, or a content engine — fast.",
  },
  {
    label: "Scale-ups",
    headline: "Growing teams with existing DevRel",
    description:
      "You have a DevRel function but it's not scaling. You need an outside perspective to audit what's working, restructure the team, or level up your content.",
  },
  {
    label: "Enterprises",
    headline: "Large orgs entering the developer market",
    description:
      "You're launching a developer platform or API product and need to build credibility with a technical audience from scratch. We've done this before.",
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="py-20 lg:py-28 bg-[#1A1A1A]">
      <div className="container">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-4">
              Who this is for
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#FAF7F2] leading-tight">
              Is this you?
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="font-body text-lg text-[#8A8578] leading-relaxed max-w-2xl">
              We work best with companies that have a technical product and want 
              to build genuine relationships with their developer community — not 
              just run marketing campaigns at them.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#333] mb-16" />

        {/* Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {profiles.map((profile, i) => (
            <div
              key={profile.label}
              className={`py-8 md:py-0 md:px-8 ${
                i < profiles.length - 1
                  ? "border-b md:border-b-0 md:border-r border-[#333]"
                  : ""
              } ${i === 0 ? "md:pl-0" : ""} ${i === profiles.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-[#E63B2E] mb-3">
                {profile.label}
              </p>
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-[#FAF7F2] mb-4 leading-snug">
                {profile.headline}
              </h3>
              <p className="font-body text-sm text-[#8A8578] leading-relaxed">
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
