/**
 * Brand contract shared by every RETURN sub-brand.
 *
 * A new brand (RETURN 3x3, RETURN Street, RETURN Equine) is created by
 * exporting another object of this shape. Components never hard-code copy,
 * colors, or imagery — they read everything from the active Brand.
 */

export type BrandTheme = {
  /** Space-separated RGB channels, e.g. "5 5 5" — consumed by CSS variables. */
  colors: {
    bg: string;
    fg: string;
    muted: string;
    accent: string;
    accentHover: string;
    line: string;
    surface: string;
  };
  fonts: {
    display: string;
    body: string;
  };
};

export type NavItem = { label: string; href: string };

export type HeroImages = {
  /** Shown by default: the setback. */
  base: string;
  /** Revealed only inside the spotlight: the comeback. */
  reveal: string;
  baseAlt: string;
  revealAlt: string;
};

export type MethodStep = {
  index: string;
  title: string;
  lines: string[];
};

export type SupportCard = { title: string; note: string };

export type NetworkNode = { label: string; role: string };

export type PartnerCategory = { name: string; slots: number };

export type AthleteStory = {
  condition: string;
  before: string;
  after: string;
  tag: string;
};

export type Brand = {
  id: string;
  /** Wordmark, e.g. "RETURN". */
  mark: string;
  /** Sub-label that follows the mark, e.g. "Basketball". */
  submark: string;
  parentOrg: string;
  tagline: { line1: string; line2: string };

  theme: BrandTheme;
  nav: NavItem[];
  navCta: string;

  hero: {
    images: HeroImages;
    headline: { line1: string; line2: string };
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };

  method: {
    eyebrow: string;
    headline: string;
    steps: MethodStep[];
  };

  support: {
    eyebrow: string;
    headline: string;
    cards: SupportCard[];
  };

  network: {
    eyebrow: string;
    headline: string;
    note: string;
    nodes: NetworkNode[];
  };

  partners: {
    eyebrow: string;
    headline: string;
    categories: PartnerCategory[];
  };

  stories: {
    eyebrow: string;
    headline: string;
    disclaimer: string;
    items: AthleteStory[];
  };

  about: {
    eyebrow: string;
    headline: string;
    body: string[];
  };

  footer: {
    columns: { title: string; items: NavItem[] }[];
    legal: string;
  };
};
