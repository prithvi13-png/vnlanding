import { PolicyLayout, type PolicySection } from "@/components/policy/PolicyLayout";
import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms governing use of the Vriddhi Nexus website, bus booking platform and technology services.",
  path: "/terms",
});

const SECTIONS: PolicySection[] = [
  {
    heading: "Acceptance of These Terms",
    body: [
      `These terms govern your use of the ${siteConfig.url.replace(/^https?:\/\//, "")} website, the Vriddhi Nexus bus booking platform, and any technology service you engage ${siteConfig.legalName} to provide. By using any of them you accept these terms.`,
      `If you do not accept them, please do not use the platform.`,
    ],
  },
  {
    heading: "Who We Are",
    body: [
      `${siteConfig.legalName} is a company incorporated in India with its registered office in ${legalConfig.jurisdictionCity}, ${legalConfig.jurisdictionState}. In these terms "we", "us" and "our" refer to that company.`,
    ],
  },
  {
    heading: "Our Role in a Booking",
    body: [
      `We operate a booking platform. We do not own or run buses. Travel is provided by independent operators, and your journey is subject to their conditions of carriage as well as these terms.`,
      `We are responsible for the booking service — taking your payment, confirming the seat, issuing the ticket and handling cancellations and refunds under our published policies. We are not responsible for the conduct of the journey itself, including departure times, vehicle condition, route or crew.`,
    ],
  },
  {
    heading: "Using the Platform",
    body: [`When you use the platform you agree that:`],
    bullets: [
      `the information you give us — name, age, gender, mobile number and email — is accurate, because the ticket and the operator's records depend on it;`,
      `you are booking for yourself or for passengers who have authorised you to do so;`,
      `you will not resell tickets, book seats you do not intend to use, or make bookings by automated means;`,
      `you will not attempt to interfere with the platform, its security, or other users' bookings;`,
      `you are responsible for activity under your account, including keeping your password to yourself.`,
    ],
  },
  {
    heading: "Tickets, ID and Boarding",
    body: [
      `Carry your ticket, in print or on your phone, together with a valid government photo ID in the lead passenger's name. Operators may refuse boarding where the ID does not match the ticket, and a refusal on that ground is not refundable.`,
      `Reach the boarding point at least 15 minutes before the scheduled departure time. Boarding points and timings are as shown on the ticket.`,
    ],
  },
  {
    heading: "Pricing and Payment",
    body: [
      `Fares are shown in Indian Rupees and include applicable taxes, which are itemised before you pay. Any convenience or payment-gateway fee is shown separately at checkout.`,
      `Fares can change until a booking is confirmed. Once confirmed, the fare on your ticket is the fare that applies.`,
      legalConfig.gstin
        ? `Our GSTIN is ${legalConfig.gstin}, and a GST invoice is available against every confirmed booking.`
        : `A tax invoice is available against every confirmed booking.`,
    ],
  },
  {
    heading: "Cancellations and Refunds",
    body: [
      `Cancellations are governed by our Cancellation Policy and refunds by our Refund Policy. Both are linked in the footer of every page and form part of these terms.`,
    ],
  },
  {
    heading: "Technology Services",
    body: [
      `Where we provide web, mobile, software, CRM, cloud or AI services, the scope, fees, timelines, intellectual-property ownership and support arrangements are set out in a separate written agreement or statement of work with you. That agreement prevails over these terms to the extent of any inconsistency.`,
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      `The Vriddhi Nexus name, logo, site design, content and software are ours or are licensed to us. You may use the platform to make and manage bookings; you may not copy, reproduce or adapt any part of it for other purposes without our written permission.`,
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      `To the extent permitted by law, our liability arising out of a booking is limited to the amount you paid for that booking.`,
      `We are not liable for losses arising from the operator's performance of the journey, from events outside our reasonable control, or for indirect or consequential losses such as missed connections, lost earnings or lost opportunity.`,
      `Nothing in these terms limits liability that cannot be limited under Indian law.`,
    ],
  },
  {
    heading: "Governing Law and Jurisdiction",
    body: [
      `These terms are governed by the laws of India. The courts at ${legalConfig.jurisdictionCity}, ${legalConfig.jurisdictionState} have exclusive jurisdiction over any dispute arising from them.`,
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      `We may update these terms from time to time, and will change the "last updated" date above when we do. The version in force when you make a booking is the version that governs it.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      intro={`The terms on which ${siteConfig.legalName} provides its website, bus booking platform and technology services.`}
      sections={SECTIONS}
    />
  );
}
