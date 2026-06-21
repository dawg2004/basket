import type { Brand } from "./types";

/**
 * RETURN Basketball — the flagship public brand.
 *
 * Legal positioning is encoded in the copy itself: support / education /
 * network language only, no treatment claims, no guaranteed outcomes.
 * Medical services are always referenced through partner providers.
 */
export const returnBasketball: Brand = {
  id: "return-basketball",
  mark: "RETURN",
  submark: "Basketball",
  parentOrg: "General Incorporated Association — Regenerative Medicine Network",
  tagline: { line1: "More Than Recovery.", line2: "Return To Play." },

  theme: {
    colors: {
      bg: "5 5 5", // #050505
      fg: "255 255 255", // #FFFFFF
      muted: "163 163 163", // #A3A3A3
      accent: "255 106 0", // #FF6A00
      accentHover: "230 92 0", // #E65C00
      line: "38 38 38",
      surface: "12 12 12",
    },
    fonts: {
      display: "Playfair Display",
      body: "Inter",
    },
  },

  nav: [
    { label: "Programs", href: "#method" },
    { label: "Athletes", href: "#stories" },
    { label: "Recovery", href: "#network" },
    { label: "Network", href: "#partners" },
    { label: "Partners", href: "#partners" },
  ],
  navCta: "Book Assessment",

  hero: {
    images: {
      base: "/hero-base.jpg",
      reveal: "/hero-reveal.jpg",
      baseAlt: "Basketball athlete resting courtside during recovery",
      revealAlt: "The same athlete back in explosive competition",
    },
    headline: { line1: "Recovery reveals", line2: "your next game" },
    subheadline:
      "Elite recovery programs designed for basketball athletes seeking a safe and confident return to competition.",
    primaryCta: "Start Recovery",
    secondaryCta: "Become A Partner",
  },

  method: {
    eyebrow: "The Return Method",
    headline: "A structured path back to competition.",
    steps: [
      {
        index: "01",
        title: "Assessment",
        lines: ["Movement analysis.", "Ultrasound evaluation.", "Injury history review."],
      },
      {
        index: "02",
        title: "PRP Recovery",
        lines: ["Evidence-based PRP protocols.", "Individualized planning."],
      },
      {
        index: "03",
        title: "Return To Play",
        lines: ["Performance testing.", "Reconditioning.", "Competition readiness."],
      },
    ],
  },

  support: {
    eyebrow: "Who We Support",
    headline: "Built for every level of the game.",
    cards: [
      { title: "Professional Players", note: "Top-flight competition" },
      { title: "B.League", note: "Domestic professional" },
      { title: "3x3 Athletes", note: "Half-court specialists" },
      { title: "Student Athletes", note: "Collegiate & high school" },
      { title: "International Prospects", note: "Cross-border careers" },
      { title: "Street Basketball Athletes", note: "Outdoor & culture" },
    ],
  },

  network: {
    eyebrow: "Recovery Is A Team Sport",
    headline: "No single step returns an athlete to play.",
    note: "PRP is one coordinated stage inside a longer pathway — not a shortcut, and not a cure. Every return is the result of specialists working in sequence.",
    nodes: [
      { label: "Athlete", role: "The center of the plan" },
      { label: "Sports Doctor", role: "Diagnosis & medical oversight" },
      { label: "PRP Protocol", role: "Evidence-based recovery support" },
      { label: "Physical Therapist", role: "Movement restoration" },
      { label: "Strength Coach", role: "Reconditioning & load" },
      { label: "Return To Play", role: "Competition readiness" },
    ],
  },

  partners: {
    eyebrow: "Partner Network",
    headline: "An ecosystem, not a clinic.",
    categories: [
      { name: "Sports Medicine", slots: 4 },
      { name: "Physical Therapy", slots: 4 },
      { name: "Strength & Conditioning", slots: 4 },
      { name: "Basketball Academies", slots: 4 },
      { name: "3x3 Teams", slots: 4 },
      { name: "University Programs", slots: 4 },
    ],
  },

  stories: {
    eyebrow: "Athlete Stories",
    headline: "Setbacks, and the return that followed.",
    disclaimer:
      "Illustrative placeholders. Recovery timelines and outcomes differ for every athlete and are determined by partner medical providers.",
    items: [
      {
        condition: "Patellar Tendinopathy",
        before: "Pain on every landing.",
        after: "Back to full training load.",
        tag: "Knee",
      },
      {
        condition: "Ankle Sprain",
        before: "Lost lateral confidence.",
        after: "Cutting without hesitation.",
        tag: "Ankle",
      },
      {
        condition: "Achilles Tendon Injury",
        before: "A long road back.",
        after: "Explosive off both feet.",
        tag: "Achilles",
      },
    ],
  },

  about: {
    eyebrow: "About",
    headline: "Built Around Recovery.",
    body: [
      "RETURN Basketball is supported by a professional network dedicated to PRP education, quality standards, and athlete recovery support.",
      "The focus is helping athletes return to competition through structured recovery pathways — coordinated with the specialists who deliver each stage of care.",
    ],
  },

  footer: {
    columns: [
      {
        title: "Navigation",
        items: [
          { label: "Programs", href: "#method" },
          { label: "Athletes", href: "#stories" },
          { label: "Network", href: "#network" },
          { label: "Partners", href: "#partners" },
        ],
      },
      {
        title: "Connect",
        items: [
          { label: "Contact", href: "#contact" },
          { label: "Instagram", href: "#instagram" },
          { label: "Partner Inquiry", href: "#partners" },
        ],
      },
      {
        title: "Legal",
        items: [
          { label: "Privacy Policy", href: "#privacy" },
          { label: "Terms", href: "#terms" },
        ],
      },
    ],
    legal:
      "RETURN Basketball is a recovery education and partner network. It does not provide medical services. All medical care is delivered by independent partner providers.",
  },
};
