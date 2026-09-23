import { PolicyLayout, type PolicySection } from "@/components/policy/PolicyLayout";
import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description:
    "How refunds are calculated and processed for bus bookings made through Vriddhi Nexus.",
  path: "/refund-policy",
});

const SECTIONS: PolicySection[] = [
  {
    heading: "Scope of This Policy",
    body: [
      `This policy explains how money is returned to you after a booking made through the Vriddhi Nexus bus booking platform is cancelled. What it costs to cancel, and how to do it, is covered in our Cancellation Policy.`,
    ],
  },
  {
    heading: "How a Refund Is Calculated",
    body: [
      `The refund is the ticket fare less the applicable cancellation charge. Taxes collected on the cancelled portion are refunded along with it.`,
      `Any convenience or payment-gateway fee shown separately at checkout is not refundable, because it covers a service already performed at the time of booking.`,
    ],
  },
  {
    heading: "Refund Processing",
    body: [
      `Refunds are issued to the original payment method — we cannot redirect a refund to a different card, account or wallet.`,
      `Once a cancellation is confirmed, we initiate the refund immediately. It typically reaches your account within ${legalConfig.refundWorkingDays} working days, depending on your bank or card issuer. The time taken after we initiate it is controlled by them, not by us.`,
    ],
  },
  {
    heading: "Full Refunds",
    body: [`A full refund of the ticket fare, with no cancellation charge, is made where:`],
    bullets: [
      `the operator cancels the service or the bus does not run;`,
      `a confirmed seat is not made available to you at the boarding point;`,
      `you were charged more than once for the same booking, in which case the duplicate charge is returned in full;`,
      `a payment was debited but no booking was confirmed.`,
    ],
  },
  {
    heading: "Failed and Pending Payments",
    body: [
      `If money is debited but the booking is not confirmed, the amount is normally released by your bank within ${legalConfig.refundWorkingDays} working days without any action from you. If it has not appeared after that, contact us with the transaction reference and we will trace it.`,
    ],
  },
  {
    heading: "Non-Refundable Cases",
    body: [`No refund is due where:`],
    bullets: [
      `the passenger did not board at the selected boarding point (no-show);`,
      `the cancellation falls in a window carrying a 100% charge;`,
      `boarding was refused for want of a valid photo ID matching the ticket;`,
      `travel was denied or curtailed because of conduct that breached the operator's conditions of carriage.`,
    ],
  },
  {
    heading: "How to Raise a Refund Query",
    body: [
      `Write to ${siteConfig.contactEmail} or call ${siteConfig.contactPhone} with your PNR and the date of cancellation. We acknowledge refund queries within two working days and will tell you the status, the amount and the reference under which it was processed.`,
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      `We may update this policy from time to time. The version shown here on the date you book is the one that applies to that booking.`,
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Refund Policy"
      intro="How refunds are calculated, when they are due, and how long they take to reach you."
      sections={SECTIONS}
    />
  );
}
