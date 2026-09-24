import type { NavItem } from "@/types/site";

/**
 * Every business-specific value the policy pages depend on lives here, so the
 * commercial terms can be reviewed and changed in one file rather than hunted
 * through prose. The policy pages read these — they never hard-code a number.
 *
 * The company-supplied facts below (GSTIN, registered address, grievance
 * officer, support address) come from the Privacy Policy issued by Vriddhi
 * Nexus. The cancellation slabs and refund window are still drafted values
 * awaiting the company's confirmation.
 */
export const legalConfig = {
  /** Fallback "Last updated" for pages that do not carry their own date. */
  lastUpdated: "23 September 2026",

  gstin: "36AAMCV5800E1ZC",

  /** Companies Act, 2013 incorporation number, stated in the Terms. */
  cin: "U79110TS2026PTC221081",

  /** Courts with exclusive jurisdiction; matches the registered office below. */
  jurisdictionCity: "Hyderabad",
  jurisdictionState: "Telangana",

  registeredAddress:
    "Lorven Smart Spaces, 2nd Floor, Vaishanavi's Cynosure, Cyber Hills, Gachibowli, R.R. District, Telangana – 500032, India.",

  /** Privacy requests and grievances go here; general enquiries use siteConfig.contactEmail. */
  supportEmail: "support@vriddhinexus.com",

  grievanceOfficer: {
    name: "Mettu Sai Prasad",
    email: "saiprasad@vriddhinexus.com",
    phone: "+91 6364096792",
  },


} as const;

/** Footer "Legal" column. These pages are also listed in sitemap.ts. */
export const legalNav: NavItem[] = [
  { id: "terms", label: "Terms & Conditions", href: "/terms" },
  { id: "privacy", label: "Privacy Policy", href: "/privacy-policy" },
  { id: "cancellation", label: "Cancellation Policy", href: "/cancellation-policy" },
  { id: "refund", label: "Refund Policy", href: "/refund-policy" },
];
