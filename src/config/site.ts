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
  // Real profile URLs aren't known yet — left empty rather than fabricated.
  // The footer renders these as disabled placeholders.
  social: [
    { id: "linkedin", label: "LinkedIn", href: "", icon: LinkedinIcon },
    { id: "instagram", label: "Instagram", href: "", icon: InstagramIcon },
    { id: "facebook", label: "Facebook", href: "", icon: FacebookIcon },
  ],
};
