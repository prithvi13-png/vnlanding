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
  // Set these to the real profile URLs — either here, or via the env vars so
  // they can be changed from the Vercel dashboard without a code change.
  // Any left empty render as disabled placeholders rather than dead links.
  social: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
      icon: LinkedinIcon,
    },
    {
      id: "instagram",
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
      icon: InstagramIcon,
    },
    {
      id: "facebook",
      label: "Facebook",
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
      icon: FacebookIcon,
    },
  ],
};
