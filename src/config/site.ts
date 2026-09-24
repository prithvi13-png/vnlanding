import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Vriddhi Nexus",
  legalName: "Vriddhi Nexus Private Limited",
  tagline: "One Nexus. Multiple Possibilities.",
  description:
    "Vriddhi Nexus connects modern travel booking and technology solutions through one growing digital ecosystem.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vriddhinexus.com",
  contactEmail: "info@vriddhinexus.com",
  contactPhone: "+91 63640 96792",
  // Real profile URLs. The env vars still win, so any of these can be changed
  // from the Vercel dashboard without a code change; an empty one renders as a
  // disabled placeholder rather than a dead link.
  social: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href:
        process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/company/vriddhi-nexus/",
      icon: LinkedinIcon,
    },
    {
      id: "instagram",
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/vriddhinexus/",
      icon: InstagramIcon,
    },
    {
      id: "facebook",
      label: "Facebook",
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/vriddhinexus",
      icon: FacebookIcon,
    },
  ],
};
