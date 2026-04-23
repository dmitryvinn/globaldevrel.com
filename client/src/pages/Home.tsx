import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead, { organizationJsonLd, websiteJsonLd, serviceJsonLd } from "@/components/SEOHead";

// Combine all JSON-LD schemas into a graph
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    websiteJsonLd,
    organizationJsonLd,
    serviceJsonLd,
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <SEOHead
        description="Expert developer advocacy consulting — from DevRel strategy and program audits to content production, community building, and conference speaking."
        canonical="https://globaldevrel.com"
        jsonLd={jsonLd}
      />
      <Navbar />
      <Hero />
      <WhoIsThisFor />
      <Services />
      <Work />
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
