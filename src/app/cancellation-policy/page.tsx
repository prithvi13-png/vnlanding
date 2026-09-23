import { PolicyLayout, type PolicySection } from "@/components/policy/PolicyLayout";
import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cancellation Policy",
  description:
    "How to cancel a bus booking made through Vriddhi Nexus, and the cancellation charges that apply.",
  path: "/cancellation-policy",
});

const SECTIONS: PolicySection[] = [
  {
    heading: "Scope of This Policy",
    body: [
      `This policy covers bookings made through the Vriddhi Nexus bus booking platform. It explains how a booking can be cancelled and what is deducted when it is. How the resulting amount is returned to you is covered separately in our Refund Policy.`,
      `Travel is operated by independent bus operators. Where an operator's own cancellation terms are stricter than ours, those terms are shown to you before payment and take precedence for that booking.`,
    ],
  },
  {
    heading: "How to Cancel a Booking",
    body: [
      `You can cancel from the booking platform, or by contacting us with your PNR and the registered mobile number.`,
    ],
    bullets: [
      `Sign in and open My Bookings, select the booking, and choose Cancel Booking.`,
      `Guests who booked without an account can use the PNR and mobile number from the confirmation email.`,
      `Email ${siteConfig.contactEmail} or call ${siteConfig.contactPhone} and quote your PNR.`,
      `A cancellation is only effective once you receive a cancellation confirmation from us — a request that has not been confirmed has not been cancelled.`,
    ],
  },
  {
    heading: "Cancellation Charges",
    body: [
      `The charge depends on how long before scheduled departure the cancellation is confirmed. It is calculated on the ticket fare.`,
    ],
    table: {
      columns: ["When you cancel", "Cancellation charge"],
      rows: legalConfig.cancellationSlabs,
    },
  },
  {
    heading: "Partial Cancellation",
    body: [
      `Where a booking covers more than one passenger, individual seats can be cancelled while the rest of the booking stands. Charges are applied per cancelled seat using the table above, and a revised ticket is issued for the remaining passengers.`,
    ],
  },
  {
    heading: "Cancellation by the Operator",
    body: [
      `If the operator cancels the service, or the bus does not run, you are entitled to a full refund of the ticket fare with no cancellation charge. We will notify you on the contact details recorded against the booking and begin the refund without you having to ask.`,
      `A delayed departure is not treated as a cancellation. Where a delay is substantial, contact us and we will take it up with the operator.`,
    ],
  },
  {
    heading: "No-Show",
    body: [
      `A passenger who does not board at the selected boarding point at the scheduled time is treated as a no-show. No-show bookings are not refundable, and cannot be cancelled after departure.`,
      `Please reach the boarding point at least 15 minutes before the scheduled departure time, and carry the ticket along with a valid photo ID.`,
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      `We may update this policy from time to time. The version shown here on the date you book is the one that applies to that booking.`,
    ],
  },
];

export default function CancellationPolicyPage() {
  return (
    <PolicyLayout
      title="Cancellation Policy"
      intro="How to cancel a bus booking made through Vriddhi Nexus, and the charges that apply when you do."
      sections={SECTIONS}
    />
  );
}
