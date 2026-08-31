import type { IconComponent } from "./icon";

/** A same-page scroll target, e.g. { id: "travel", label: "Travel", href: "#travel" }. */
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  /** Empty string when the real URL isn't known yet — renders disabled, never fabricated. */
  href: string;
  icon: IconComponent;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  /** Placeholder until a real support inbox is provided — shown in the contact modal and footer. */
  contactEmail: string;
  social: SocialLink[];
}
