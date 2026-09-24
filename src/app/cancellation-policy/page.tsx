import { PolicyLayout, type PolicySection } from "@/components/policy/PolicyLayout";
import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cancellation Policy",
  description: "How to cancel a booking made through Vriddhi Nexus and what determines the charge.",
  path: "/cancellation-policy",
});

/**
 * Unlike the Privacy Policy and Terms, this was not issued as a standalone
 * document by the company — it restates what the Terms already commit to
 * (sections 9, 10 and 11) under the heading customers look for.
 *
 * It must therefore not add commitments the Terms do not make. In particular it
 * states no fixed cancellation percentages, because the Terms leave the charge
 * to the operator and the fare type. If the company later issues its own signed
 * document, replace this wholesale.
 *
 * The identical text is published on the booking platform; change both together.
 */
const SECTIONS: PolicySection[] = [
  {
    heading: "1. Scope of This Policy",
    body: [
      "This policy covers bookings made through the Vriddhi Nexus platform. It explains how a booking can be cancelled and what determines the amount deducted. How the remaining amount is returned to you is covered in our Refund Policy.",
      "Travel is provided by independent operators. The cancellation conditions applicable to your booking are set by the relevant operator or booking partner and are displayed during or before booking wherever provided.",
    ],
  },
  {
    heading: "2. How to Cancel a Booking",
    body: ["You can cancel from the booking platform, or by contacting us with your booking ID or PNR."],
    bullets: [
      "Sign in and open Bookings, select the booking, and choose to cancel it.",
      "Guests who booked without an account can use the booking ID or PNR from the confirmation email.",
      `Email ${legalConfig.supportEmail} quoting your booking ID or PNR.`,
      "A cancellation takes effect only once we confirm it. A request that has not been confirmed has not been cancelled.",
    ],
  },
  {
    heading: "3. Cancellation Charges",
    body: ["Cancellation eligibility and charges may vary depending upon:"],
    bullets: [
      "bus operator;",
      "route;",
      "fare type;",
      "time remaining before departure;",
      "promotional conditions; and",
      "other conditions applicable to the booking.",
    ],
    subsections: [
      {
        body: [
          "The applicable cancellation conditions should be displayed during or before booking wherever provided by the operator or booking partner. Please check them before confirming payment.",
          "Certain platform charges, payment charges, promotional amounts or convenience fees may be non-refundable where permitted by law and where disclosed to you.",
        ],
      },
    ],
  },
  {
    heading: "4. Cancellation or Modification by the Operator",
    body: [
      "Operators may cancel, postpone, reschedule or modify a service for operational, traffic, weather, regulatory, safety or other reasons beyond our reasonable control.",
      "Where an operator cancels a journey and confirms refund eligibility, Vriddhi Nexus will facilitate the applicable refund based on information and funds received or authorised by the relevant operator, aggregator or payment partner. Where available, alternative services may be offered, but availability cannot be guaranteed.",
    ],
  },
  {
    heading: "5. No-Show",
    body: [
      "Failure to arrive at the boarding point within the time prescribed by the operator may be treated as a no-show and may result in forfeiture of the booking amount in accordance with the operator's policy.",
      "Please reach the boarding point on time and carry your ticket together with valid identification where required.",
    ],
  },
  {
    heading: "6. Refunds Following Cancellation",
    body: [
      "Any refund following cancellation will be calculated in accordance with the applicable cancellation policy and processed as described in our Refund Policy.",
    ],
  },
  {
    heading: "7. Changes to This Policy",
    body: [
      "We may update this policy from time to time. The version published when you make a booking is the one that applies to that booking.",
    ],
  },
  {
    heading: "8. Contact Us",
    body: [
      "For cancellation queries:",
      siteConfig.legalName,
      `Email: ${legalConfig.supportEmail}`,
      "Website: www.vriddhinexus.com",
    ],
  },
];

export default function CancellationPolicyPage() {
  return (
    <PolicyLayout
      title="Cancellation Policy"
      intro="How to cancel a booking made through Vriddhi Nexus and what determines the charge. This policy restates the cancellation terms in our Terms & Conditions; where the two differ, the Terms & Conditions prevail."
      effectiveDate="22 September 2026"
      lastUpdated="22 September 2026"
      sections={SECTIONS}
    />
  );
}
