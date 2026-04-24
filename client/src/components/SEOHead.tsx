/*
  SEOHead — Per-page meta tag management
  Handles Open Graph, Twitter Card, canonical URL, and JSON-LD structured data.
  Pattern from dvinnik.dev / DevRel Academy.
*/

import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "Global DevRel";
const DEFAULT_DESCRIPTION =
  "Expert developer advocacy consulting — from DevRel strategy and program audits to content production, community building, and conference speaking.";
const DEFAULT_URL = "https://globaldevrel.com";
const DEFAULT_OG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407462879/KQxXc7ieBaEZNMPbGetNr6/og-globaldevrel_00217430.png";

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = DEFAULT_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Developer Advocacy Consulting`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Helper to set or create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");

    // Twitter Card
    setMeta("name", "twitter:card", twitterCard);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonical);

    // JSON-LD structured data
    const existingJsonLd = document.querySelector('script[data-seo-jsonld]');
    if (existingJsonLd) existingJsonLd.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      const jsonLdScript = document.querySelector('script[data-seo-jsonld]');
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [fullTitle, description, canonical, ogImage, ogType, twitterCard, jsonLd]);

  return null;
}

// Pre-built JSON-LD schemas for the site
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Global DevRel",
  url: "https://globaldevrel.com",
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    "https://www.linkedin.com/in/dmitry-vinnik/",
    "https://devrelacademy.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "consulting@globaldevrel.com",
    contactType: "sales",
    availableLanguage: ["English", "Russian"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Global DevRel",
  url: "https://globaldevrel.com",
  description: DEFAULT_DESCRIPTION,
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Global DevRel",
  url: "https://globaldevrel.com",
  description: DEFAULT_DESCRIPTION,
  priceRange: "$$",
  areaServed: "Worldwide",
  serviceType: [
    "Developer Relations Consulting",
    "Developer Advocacy",
    "DevRel Strategy",
    "Technical Content Production",
    "Community Building",
    "Conference Speaking",
  ],
};
