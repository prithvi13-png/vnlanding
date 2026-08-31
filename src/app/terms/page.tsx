import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions for using the Vriddhi Nexus website.",
};

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: "Placeholder text: State that using this website means the visitor agrees to these terms.",
  },
  {
    heading: "Use of the Platform",
    body: "Placeholder text: Describe acceptable use of this website, including search and enquiry features.",
  },
  {
    heading: "Bookings Made Through Vriddhi Nexus",
    body: "Placeholder text: Clarify that bus bookings are completed on the separate Bus Booking platform, which has its own applicable terms.",
  },
  {
    heading: "Third-Party Service Providers",
    body: "Placeholder text: Explain the relationship with third-party travel service providers once formalised.",
  },
  {
    heading: "Limitation of Liability",
    body: "Placeholder text: Set out the limits of Vriddhi Nexus Private Limited's liability, to be reviewed by legal counsel.",
  },
  {
    heading: "Governing Law",
    body: "Placeholder text: Specify the governing law and jurisdiction applicable to these terms.",
  },
  {
    heading: "Changes to These Terms",
    body: "Placeholder text: Explain how and when these terms may be updated.",
  },
  {
    heading: "Contact Us",
    body: "Placeholder text: Provide the correct contact channel for questions about these terms once finalised.",
  },
];

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      intro="These terms govern the use of the Vriddhi Nexus Private Limited website."
      sections={SECTIONS}
    />
  );
}
