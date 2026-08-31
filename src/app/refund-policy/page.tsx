import { PolicyLayout } from "@/components/policy/PolicyLayout";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description: "How refunds and cancellations are handled for bookings made through Vriddhi Nexus.",
  path: "/refund-policy",
});

const SECTIONS = [
  {
    heading: "Scope of This Policy",
    body: "Placeholder text: Clarify that bus tickets are booked and cancelled on the Bus Booking platform, and that its refund rules apply to those bookings.",
  },
  {
    heading: "Eligibility for Refunds",
    body: "Placeholder text: Describe the conditions under which a booking qualifies for a refund.",
  },
  {
    heading: "Cancellation Timelines",
    body: "Placeholder text: Specify how far in advance a cancellation must be made to be eligible for a refund.",
  },
  {
    heading: "Refund Processing",
    body: "Placeholder text: Describe how refunds are processed and the typical timeframe once finalised.",
  },
  {
    heading: "Non-Refundable Cases",
    body: "Placeholder text: List situations where a booking is not eligible for a refund.",
  },
  {
    heading: "How to Request a Refund",
    body: "Placeholder text: Explain the steps a customer should follow to request a refund once the process is finalised.",
  },
  {
    heading: "Contact Us",
    body: "Placeholder text: Provide the correct contact channel for refund queries once finalised.",
  },
];

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Refund Policy"
      intro="This policy explains how cancellations and refunds are handled for bookings made through Vriddhi Nexus."
      sections={SECTIONS}
    />
  );
}
