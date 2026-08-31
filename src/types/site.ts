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
  /** Shown in the contact modal's error states and the footer. */
  contactEmail: string;
  /** Display form, e.g. "+91 63640 96792" — footer derives the tel: link by stripping spaces. */
  contactPhone: string;
  social: SocialLink[];
}
