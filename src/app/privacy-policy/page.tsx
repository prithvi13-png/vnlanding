import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policy/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vriddhi Nexus collects, uses and protects your information.",
};

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: "Placeholder text: List the categories of personal information collected (e.g. name, contact details, journey details entered while searching or booking).",
  },
  {
    heading: "How We Use Your Information",
    body: "Placeholder text: Describe the purposes information is used for, such as processing enquiries, improving the platform, and communicating updates.",
  },
  {
    heading: "Sharing With Third Parties",
    body: "Placeholder text: Explain that bus bookings are completed on the Bus Booking platform, and describe any other third parties information may be shared with.",
  },
  {
    heading: "Data Security",
    body: "Placeholder text: Summarise the safeguards used to protect personal information from unauthorised access, loss or misuse.",
  },
  {
    heading: "Your Rights & Choices",
    body: "Placeholder text: Describe how users can access, correct or request deletion of their personal information.",
  },
  {
    heading: "Changes to This Policy",
    body: "Placeholder text: Explain how and when this policy may be updated, and how changes will be communicated.",
  },
  {
    heading: "Contact Us",
    body: "Placeholder text: Provide the correct contact channel for privacy-related questions once finalised.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      intro="This policy explains how Vriddhi Nexus Private Limited handles personal information across this website."
      sections={SECTIONS}
    />
  );
}
