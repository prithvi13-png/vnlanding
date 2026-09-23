import { PolicyLayout, type PolicySection } from "@/components/policy/PolicyLayout";
import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "What personal information Vriddhi Nexus collects, why we collect it, and the choices you have.",
  path: "/privacy-policy",
});

const SECTIONS: PolicySection[] = [
  {
    heading: "Introduction",
    body: [
      `${siteConfig.legalName} respects your privacy. This policy explains what we collect when you use our website or bus booking platform, why we collect it, who we share it with, and what you can ask us to do with it.`,
    ],
  },
  {
    heading: "Information We Collect",
    body: [`We collect only what a booking and an account need:`],
    bullets: [
      `Identity and contact details — name, email address and mobile number.`,
      `Passenger details — the name, age and gender recorded against each seat, as operators are required to hold these.`,
      `Booking details — route, travel date, boarding point, seat numbers, fare and PNR.`,
      `Account details — your password, stored only as a cryptographic hash that we cannot reverse.`,
      `Technical details — IP address, browser type and pages visited, used to keep the platform secure and working.`,
    ],
  },
  {
    heading: "Payment Information",
    body: [
      `We do not store your card number, CVV, UPI PIN or net-banking credentials. Payments are handled by our payment gateway, which is certified to the applicable card-industry security standards. We retain only the transaction reference, the amount, and whether the payment succeeded.`,
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [`We use your information to:`],
    bullets: [
      `confirm bookings and send you tickets, cancellations and refund updates;`,
      `pass the passenger manifest to the bus operator running your service;`,
      `provide customer support when you contact us about a booking;`,
      `meet tax, accounting and other legal obligations;`,
      `detect and prevent fraud and misuse of the platform.`,
    ],
  },
  {
    heading: "Who We Share It With",
    body: [
      `We share your information only where it is needed to deliver the service: with the bus operator running your journey, with our payment gateway to take payment and make refunds, and with the email and infrastructure providers that run the platform on our behalf.`,
      `We also disclose information where the law requires it. We do not sell your personal information, and we do not share it for anyone else's marketing.`,
    ],
  },
  {
    heading: "How Long We Keep It",
    body: [
      `Booking and payment records are kept for as long as tax and accounting law requires. Account information is kept while your account is open. If you close your account, we delete or anonymise what we are not required to retain.`,
    ],
  },
  {
    heading: "Data Security",
    body: [
      `Traffic to the platform is encrypted in transit. Passwords are hashed, access to production data is restricted to staff who need it, and payment credentials never reach our servers.`,
      `No system is perfectly secure, so please use a strong password that you do not reuse elsewhere, and tell us promptly if you believe your account has been accessed by someone else.`,
    ],
  },
  {
    heading: "Cookies",
    body: [
      `We use cookies to keep you signed in, remember your preferences, and understand which pages are used so we can improve them. You can block cookies in your browser, but parts of the booking flow will not work without them.`,
    ],
  },
  {
    heading: "Your Rights and Choices",
    body: [`You can ask us to:`],
    bullets: [
      `give you a copy of the personal information we hold about you;`,
      `correct anything that is inaccurate;`,
      `delete information we are not legally required to keep;`,
      `stop sending you promotional messages — every one of them carries an unsubscribe link, and opting out does not affect transactional emails such as tickets and refund notices.`,
    ],
  },
  {
    heading: "Children",
    body: [
      `The platform is not intended for use by children under 18 on their own. Children may of course travel as named passengers on a booking made by an adult.`,
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      `We may update this policy from time to time and will change the "last updated" date above when we do. Where a change materially affects how we use your information, we will tell you directly.`,
    ],
  },
  {
    heading: "Contact Us",
    body: [
      `For any privacy question or to exercise any of the rights above, write to ${siteConfig.contactEmail} or call ${siteConfig.contactPhone}. Our registered office is in ${legalConfig.jurisdictionCity}, ${legalConfig.jurisdictionState}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      intro="What we collect, why we collect it, who we share it with, and the choices you have."
      sections={SECTIONS}
    />
  );
}
