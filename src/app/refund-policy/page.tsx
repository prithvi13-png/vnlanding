import { PolicyLayout, type PolicySection } from "@/components/policy/PolicyLayout";
import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description: "How refunds are determined and processed for bookings made through Vriddhi Nexus.",
  path: "/refund-policy",
});

/**
 * Restates the refund terms the Terms already commit to (sections 7 and 13)
 * under the heading customers look for. It must not add commitments the Terms
 * do not make: no guaranteed refund window appears here, because the Terms
 * leave credit timelines to banks and payment providers.
 *
 * The identical text is published on the booking platform; change both together.
 */
const SECTIONS: PolicySection[] = [
  {
    heading: "1. Scope of This Policy",
    body: [
      "This policy explains how money is returned to you after a booking made through the Vriddhi Nexus platform is cancelled, or where a payment did not result in a confirmed booking. What it costs to cancel is covered in our Cancellation Policy.",
    ],
  },
  {
    heading: "2. How a Refund Is Determined",
    body: [
      "Refund eligibility is determined based on the circumstances of the booking and the applicable operator, cancellation or payment policy.",
      "Certain platform charges, payment charges, promotional amounts or convenience fees may be non-refundable where permitted by law and where disclosed to you.",
    ],
  },
  {
    heading: "3. Refund Processing",
    body: [
      "Once approved and initiated, refunds will generally be processed back to the original payment method unless another method is required or permitted.",
    ],
  },
  {
    heading: "4. Refund Timelines",
    body: [
      "Actual credit timelines depend on banks, payment gateways, card networks and UPI service providers and may therefore vary. Once we have initiated a refund, the time taken for it to appear in your account is controlled by those providers rather than by us.",
      "Please contact our support team if an approved refund has not been received within the expected banking or payment-provider timeline.",
    ],
  },
  {
    heading: "5. Payment Debited but Booking Not Confirmed",
    body: [
      "You should not consider a reservation confirmed merely because payment has been debited. A reservation is confirmed when a valid booking confirmation, ticket, booking ID or PNR is generated and communicated to you.",
      "If payment is debited but a booking is not confirmed, Vriddhi Nexus will verify the transaction with the relevant payment and booking partners. Where a refund is applicable, it will be initiated in accordance with the applicable payment, banking and refund procedures.",
    ],
  },
  {
    heading: "6. Where the Operator Cancels",
    body: [
      "Where an operator cancels a journey and confirms refund eligibility, Vriddhi Nexus will facilitate the applicable refund based on information and funds received or authorised by the relevant operator, aggregator or payment partner.",
    ],
  },
  {
    heading: "7. How to Raise a Refund Query",
    body: [
      `Write to ${legalConfig.supportEmail} with your booking ID or PNR and the date of cancellation. We will tell you the status of the refund and the reference under which it was processed.`,
      `Consumer grievances may also be raised with our Grievance Officer, ${legalConfig.grievanceOfficer.name}, at ${legalConfig.grievanceOfficer.email} or ${legalConfig.grievanceOfficer.phone}.`,
    ],
  },
  {
    heading: "8. Changes to This Policy",
    body: [
      "We may update this policy from time to time. The version published when you make a booking is the one that applies to that booking.",
    ],
  },
  {
    heading: "9. Contact Us",
    body: [
      "For refund queries:",
      siteConfig.legalName,
      `Email: ${legalConfig.supportEmail}`,
      "Website: www.vriddhinexus.com",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Refund Policy"
      intro="How refunds are determined and processed for bookings made through Vriddhi Nexus. This policy restates the refund terms in our Terms & Conditions; where the two differ, the Terms & Conditions prevail."
      effectiveDate="22 September 2026"
      lastUpdated="22 September 2026"
      sections={SECTIONS}
    />
  );
}
