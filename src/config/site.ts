import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Vriddhi Nexus",
  legalName: "Vriddhi Nexus Private Limited",
  tagline: "Your Journey. One Platform.",
  description:
    "Vriddhi Nexus is a multi-service travel booking platform bringing bus, flight, train and car travel together in one place.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vriddhinexus.com",
  // Placeholder inbox until a real support address is provided.
  contactEmail: "support@vriddhinexus.com",
  // Real profile URLs aren't known yet — left empty rather than fabricated.
  // The footer renders these as disabled placeholders.
  social: [
    { id: "facebook", label: "Facebook", href: "", icon: FacebookIcon },
    { id: "instagram", label: "Instagram", href: "", icon: InstagramIcon },
    { id: "twitter", label: "Twitter / X", href: "", icon: TwitterIcon },
    { id: "linkedin", label: "LinkedIn", href: "", icon: LinkedinIcon },
  ],
};
