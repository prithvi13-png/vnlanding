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

  /** Working days for a refund to reach the original payment method. */
  refundWorkingDays: "5 to 7",

  /**
   * Cancellation charge as a percentage of the ticket fare, by how long before
   * scheduled departure the cancellation is made. Ordered latest-first.
   */
  cancellationSlabs: [
    { window: "More than 24 hours before departure", charge: "10% of the ticket fare" },
    { window: "Between 12 and 24 hours before departure", charge: "25% of the ticket fare" },
    { window: "Between 6 and 12 hours before departure", charge: "50% of the ticket fare" },
    { window: "Less than 6 hours before departure, or no-show", charge: "100% — no refund" },
  ],
} as const;

/** Footer "Legal" column. These pages are also listed in sitemap.ts. */
export const legalNav: NavItem[] = [
  { id: "terms", label: "Terms & Conditions", href: "/terms" },
  { id: "privacy", label: "Privacy Policy", href: "/privacy-policy" },
  { id: "cancellation", label: "Cancellation Policy", href: "/cancellation-policy" },
  { id: "refund", label: "Refund Policy", href: "/refund-policy" },
];
