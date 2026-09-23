import type { NavItem } from "@/types/site";

/**
 * Every business-specific value the policy pages depend on lives here, so the
 * commercial terms can be reviewed and changed in one file rather than hunted
 * through prose. The policy pages read these — they never hard-code a number.
 *
 * CONFIRM BEFORE LAUNCH: the cancellation slabs, refund window, jurisdiction
 * and GSTIN below are the values the business is held to. They are drafted
 * against common Indian bus-operator practice, not supplied by the company.
 */
export const legalConfig = {
  /** Shown as "Last updated" on every policy page. */
  lastUpdated: "23 September 2026",

  /** City whose courts have exclusive jurisdiction; also the registered office. */
  jurisdictionCity: "Hyderabad",
  jurisdictionState: "Telangana",

  /** Empty until the company's GST registration is issued — rendered only when set. */
  gstin: "",

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
