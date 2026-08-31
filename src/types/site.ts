import type { IconComponent } from "./icon";
import type { ServiceId } from "./service";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  /**
   * When set, the header/footer looks up this service in config/services.ts
   * to decide whether to render a link (status "live") or a button that
   * opens ComingSoonModal (any other status) — nav items never hardcode this.
   */
  serviceId?: ServiceId;
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
  /** Placeholder until a real support inbox is provided — shown on /contact and in the footer. */
  contactEmail: string;
  social: SocialLink[];
}
