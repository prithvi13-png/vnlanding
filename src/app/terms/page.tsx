import { PolicyLayout, type PolicySection } from "@/components/policy/PolicyLayout";
import { legalConfig } from "@/config/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms governing access to and use of the Vriddhi Nexus website, booking interfaces and services.",
  path: "/terms",
});

/**
 * Issued by Vriddhi Nexus Private Limited and reproduced verbatim. Treat the
 * wording as fixed: it is a legal document, not site copy. Amendments come
 * from the company, and the "Last Updated" date above must move with them.
 */
const SECTIONS: PolicySection[] = [
  {
    heading: "1. About Vriddhi Nexus",
    body: [
      "Vriddhi Nexus Private Limited is a company incorporated under the Companies Act, 2013.",
      "Website: www.vriddhinexus.com",
      `CIN: ${legalConfig.cin}`,
      `Registered/Business Address: ${legalConfig.registeredAddress}`,
      "Vriddhi Nexus provides technology-enabled services including online travel booking and related digital services. At present, bus booking services may be available through our platform. Additional services such as flight, train, car and other travel-related bookings may be introduced in the future.",
      "Certain IT and technology services displayed on the website may be governed by separate proposals, quotations, service agreements or commercial contracts.",
    ],
  },
  {
    heading: "2. Nature of Our Travel Booking Platform",
    body: [
      "Vriddhi Nexus operates as a technology platform that enables users to search, compare and book travel services made available by bus operators, travel service providers, aggregators, API providers and other third-party partners.",
      "Unless specifically stated otherwise, Vriddhi Nexus:",
    ],
    bullets: [
      "does not own or operate buses;",
      "does not employ drivers or other personnel of transport operators;",
      "does not control the actual operation of a bus service;",
      "does not determine vehicle condition, driver behaviour or operational decisions of transport operators; and",
      "acts primarily as a facilitator of travel reservations between the user and the relevant travel service provider.",
    ],
    subsections: [
      {
        body: ["The actual transportation service is provided by the respective operator or service provider."],
      },
    ],
  },
  {
    heading: "3. Eligibility",
    body: [
      "You must be legally capable of entering into a binding contract under applicable Indian law to independently transact through the platform.",
      "Users below 18 years of age should use the platform only through or under the supervision of a parent or legal guardian. A parent, guardian or other authorised adult may make bookings for minors or other passengers.",
    ],
  },
  {
    heading: "4. User Information",
    body: [
      "You agree to provide accurate and complete information when making a booking, including information such as:",
    ],
    bullets: [
      "passenger name;",
      "age;",
      "gender, where required;",
      "mobile number;",
      "email address;",
      "boarding point;",
      "destination or drop-off point; and",
      "any identification information required by the applicable operator or law.",
    ],
    subsections: [
      {
        body: [
          "Vriddhi Nexus will not be responsible for booking issues arising from incorrect information provided by the user. You are responsible for verifying all passenger and journey information before confirming payment.",
        ],
      },
    ],
  },
  {
    heading: "5. Search Results and Availability",
    body: [
      "Bus routes, schedules, seat availability, fares, boarding locations, amenities and other information displayed on the platform may be obtained from bus operators, aggregators, API providers or other third parties. Availability may change in real time.",
      "Information displayed during a search does not constitute a confirmed reservation. A booking is considered confirmed only after successful completion of the booking process and generation of an appropriate booking confirmation, ticket, booking reference or PNR.",
    ],
  },
  {
    heading: "6. Prices, Taxes and Charges",
    body: ["The total amount payable for a booking may include:"],
    bullets: [
      "base fare;",
      "applicable taxes;",
      "operator charges;",
      "platform or convenience fees;",
      "payment processing charges, where applicable;",
      "insurance or optional services selected by the user; and",
      "other charges clearly disclosed before payment.",
    ],
    subsections: [
      {
        body: [
          "Where applicable, the fare and charges displayed before final payment will constitute the price applicable to that transaction.",
          "Travel fares may be dynamic and may change depending upon availability, demand, operator pricing and other factors. A fare displayed during an earlier search is not guaranteed until the booking is successfully confirmed.",
        ],
      },
    ],
  },
  {
    heading: "7. Payments",
    body: [
      "Payments may be processed through authorised banks, payment gateways, UPI providers or other third-party payment service providers. Users must use valid and legally authorised payment methods.",
      "Vriddhi Nexus is not responsible for failures caused by:",
    ],
    bullets: [
      "banks;",
      "UPI service providers;",
      "card networks;",
      "payment gateways;",
      "telecommunications networks; or",
      "other third-party payment infrastructure.",
    ],
    subsections: [
      {
        body: [
          "If payment is debited but a booking is not confirmed, Vriddhi Nexus will verify the transaction with the relevant payment and booking partners. Where a refund is applicable, it will be initiated in accordance with the applicable payment, banking and refund procedures.",
          "The time required for the refunded amount to appear in a user's account may depend upon the bank, card issuer, UPI provider or payment gateway.",
        ],
      },
    ],
  },
  {
    heading: "8. Booking Confirmation",
    body: [
      "Users should not consider a reservation confirmed merely because payment has been debited.",
      "A reservation is confirmed when a valid booking confirmation, ticket, booking ID or PNR is generated and communicated through the website, email, SMS, WhatsApp or another available communication channel.",
      "Users are responsible for checking the booking details immediately after confirmation. Any discrepancy should be reported to Vriddhi Nexus as soon as reasonably possible.",
    ],
  },
  {
    heading: "9. Boarding and Travel",
    body: ["Passengers are responsible for:"],
    bullets: [
      "reaching the boarding point on time;",
      "carrying the booking confirmation or ticket;",
      "carrying valid identification where required;",
      "complying with operator rules;",
      "complying with baggage restrictions;",
      "maintaining appropriate conduct during the journey; and",
      "following applicable laws and safety instructions.",
    ],
    subsections: [
      {
        body: [
          "Failure to arrive at the boarding point within the time prescribed by the operator may be treated as a no-show and may result in forfeiture of the booking amount in accordance with the operator's policy.",
        ],
      },
    ],
  },
  {
    heading: "10. Cancellation by the User",
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
          "The applicable cancellation conditions should be displayed during or before booking wherever provided by the operator or booking partner.",
          "Any refund following cancellation will be calculated in accordance with the applicable cancellation policy. Certain platform charges, payment charges, promotional amounts or convenience fees may be non-refundable where permitted by law and where disclosed to the user.",
        ],
      },
    ],
  },
  {
    heading: "11. Cancellation or Modification by the Operator",
    body: [
      "Bus operators may cancel, postpone, reschedule or modify a service because of circumstances including:",
    ],
    bullets: [
      "operational requirements;",
      "vehicle breakdown;",
      "traffic;",
      "road conditions;",
      "government restrictions;",
      "strikes;",
      "weather;",
      "safety concerns;",
      "force majeure events; or",
      "other circumstances beyond Vriddhi Nexus's reasonable control.",
    ],
    subsections: [
      {
        body: [
          "Where an operator cancels a journey and confirms refund eligibility, Vriddhi Nexus will facilitate the applicable refund based on information and funds received or authorised by the relevant operator, aggregator or payment partner.",
          "Where available, alternative services may be offered, but availability cannot be guaranteed.",
        ],
      },
    ],
  },
  {
    heading: "12. Changes in Vehicle, Seat or Boarding Point",
    body: ["Operators may occasionally change:"],
    bullets: [
      "vehicle type;",
      "seat allocation;",
      "boarding point;",
      "departure time;",
      "arrival time;",
      "amenities; or",
      "other operational details.",
    ],
    subsections: [
      {
        body: [
          "Vriddhi Nexus will endeavour to communicate material changes when such information is received from the relevant service provider. Operational decisions remain the responsibility of the relevant transport operator.",
        ],
      },
    ],
  },
  {
    heading: "13. Refunds",
    body: [
      "Refund eligibility is determined based on the circumstances of the booking and the applicable operator, cancellation or payment policy.",
      "Once approved and initiated, refunds will generally be processed back to the original payment method unless another method is required or permitted.",
      "Actual credit timelines depend on banks, payment gateways, card networks and UPI service providers and may therefore vary. Users should contact our support team if an approved refund has not been received within the expected banking or payment-provider timeline.",
    ],
  },
  {
    heading: "14. Offers, Coupons and Promotional Codes",
    body: [
      "Vriddhi Nexus may periodically offer discounts, coupons, cashback or promotional offers. Each promotion may have separate eligibility criteria and terms.",
      "Promotional benefits may:",
    ],
    bullets: [
      "be limited to specified users;",
      "have minimum transaction requirements;",
      "be available for limited periods;",
      "be restricted to specified routes or operators; and",
      "not be transferable or exchangeable for cash.",
    ],
    subsections: [
      {
        body: [
          "Vriddhi Nexus reserves the right to withdraw or modify promotional offers where permitted by law. Fraudulent or abusive use of promotional offers may result in cancellation of the benefit or suspension of the relevant account.",
        ],
      },
    ],
  },
  {
    heading: "15. Third-Party Services",
    body: ["Our platform may rely upon or contain links to third-party services including:"],
    bullets: [
      "bus operators;",
      "travel aggregators;",
      "payment gateways;",
      "banks;",
      "maps;",
      "authentication services;",
      "communication providers;",
      "analytics providers; and",
      "other technology platforms.",
    ],
    subsections: [
      {
        body: [
          "Third-party products and services may be governed by their own terms and privacy policies. Vriddhi Nexus does not control third-party websites or systems and is not responsible for their independent practices.",
        ],
      },
    ],
  },
  {
    heading: "16. User Conduct",
    body: ["Users must not:"],
    bullets: [
      "provide false information;",
      "make fraudulent bookings;",
      "use stolen or unauthorised payment methods;",
      "attempt to gain unauthorised access to the platform;",
      "interfere with platform security;",
      "scrape or extract platform data without authorisation;",
      "reverse engineer the platform;",
      "misuse promotional offers;",
      "transmit malicious software;",
      "impersonate another person; or",
      "use the platform for unlawful activities.",
    ],
    subsections: [
      {
        body: [
          "We may restrict or suspend access where we reasonably believe misuse, fraud or unlawful activity has occurred.",
        ],
      },
    ],
  },
  {
    heading: "17. Intellectual Property",
    body: ["All rights relating to the Vriddhi Nexus platform, including its:"],
    bullets: [
      "brand name;",
      "logo;",
      "website design;",
      "software;",
      "interfaces;",
      "graphics;",
      "databases;",
      "proprietary content; and",
      "technology,",
    ],
    subsections: [
      {
        body: [
          "belong to Vriddhi Nexus or its respective licensors unless otherwise indicated.",
          "Users may not reproduce, distribute, modify or commercially exploit such material without prior written permission. Third-party trademarks and brand names remain the property of their respective owners.",
        ],
      },
    ],
  },
  {
    heading: "18. Disclaimer",
    body: [
      "Vriddhi Nexus endeavours to provide accurate and reliable information. However, certain information is supplied by third-party travel service providers.",
      "To the extent permitted by applicable law, Vriddhi Nexus does not independently guarantee:",
    ],
    bullets: [
      "punctuality of buses;",
      "vehicle condition;",
      "behaviour of operator personnel;",
      "availability of specific amenities;",
      "route changes;",
      "uninterrupted travel;",
      "actual arrival time; or",
      "performance of services controlled by third-party operators.",
    ],
    subsections: [
      {
        body: [
          "Nothing in these Terms excludes any right or remedy available to a consumer that cannot legally be excluded under applicable law.",
        ],
      },
    ],
  },
  {
    heading: "19. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, Vriddhi Nexus will not be responsible for indirect, incidental or consequential loss arising solely from circumstances outside its reasonable control or from the independent acts or omissions of third-party service providers.",
      "Where liability cannot legally be excluded, Vriddhi Nexus's liability will be determined in accordance with applicable law and the circumstances of the relevant transaction.",
      "Nothing in these Terms limits liability or consumer rights where such limitation is prohibited by law.",
    ],
  },
  {
    heading: "20. Force Majeure",
    body: [
      "Vriddhi Nexus will not be liable for a failure or delay caused by events beyond its reasonable control, including:",
    ],
    bullets: [
      "natural disasters;",
      "floods;",
      "earthquakes;",
      "epidemics or pandemics;",
      "war;",
      "civil unrest;",
      "government restrictions;",
      "strikes;",
      "telecommunications failures;",
      "internet outages;",
      "power failures; or",
      "other comparable circumstances.",
    ],
  },
  {
    heading: "21. Account Suspension and Termination",
    body: ["Vriddhi Nexus may suspend or terminate an account where there is reasonable evidence of:"],
    bullets: [
      "fraud;",
      "misuse;",
      "violation of these Terms;",
      "unlawful activity;",
      "payment abuse;",
      "cybersecurity risk; or",
      "conduct that threatens the platform or other users.",
    ],
    subsections: [
      {
        body: ["Where appropriate and legally required, users will be informed of relevant action."],
      },
    ],
  },
  {
    heading: "22. Privacy",
    body: [
      "Personal information collected through the platform will be handled in accordance with our Privacy Policy and applicable Indian law.",
      "By using our platform, you acknowledge that certain personal information must be shared with the relevant bus operator, booking partner, payment provider or service provider for the purpose of completing and servicing your booking.",
    ],
  },
  {
    heading: "23. Grievance Redressal",
    body: [
      "For complaints or grievances relating to services provided through the platform, users may contact:",
      `Grievance Officer: ${legalConfig.grievanceOfficer.name}`,
      "Company: Vriddhi Nexus Private Limited",
      `Email: ${legalConfig.grievanceOfficer.email}`,
      `Phone: ${legalConfig.grievanceOfficer.phone}`,
      "Website: www.vriddhinexus.com",
      "We will endeavour to acknowledge consumer grievances within 48 hours and resolve them within the period prescribed under applicable law.",
      `General support queries may be addressed to: Email: ${legalConfig.supportEmail}`,
    ],
  },
  {
    heading: "24. Governing Law and Jurisdiction",
    body: [
      "These Terms are governed by the laws of India.",
      `Subject to mandatory consumer protection and other statutory jurisdiction requirements, disputes relating to these Terms or the platform will be subject to the jurisdiction of the competent courts in ${legalConfig.jurisdictionCity}, ${legalConfig.jurisdictionState}.`,
      "Nothing in this provision restricts any statutory right available to a consumer under applicable law.",
    ],
  },
  {
    heading: "25. Changes to These Terms",
    body: ["Vriddhi Nexus may modify these Terms from time to time to reflect:"],
    bullets: [
      "changes in services;",
      "changes in business practices;",
      "legal or regulatory requirements; or",
      "security and operational requirements.",
    ],
    subsections: [
      {
        body: [
          "The revised Terms will be published on the website along with the updated effective or revision date. Continued use of the platform after the revised Terms become effective constitutes acceptance to the extent permitted by applicable law.",
        ],
      },
    ],
  },
  {
    heading: "26. Contact Us",
    body: [
      "For questions regarding these Terms:",
      "Vriddhi Nexus Private Limited",
      legalConfig.registeredAddress,
      "Website: www.vriddhinexus.com",
      `Email: ${legalConfig.supportEmail}`,
    ],
  },
];

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      intro={
        "Welcome to Vriddhi Nexus Private Limited. These Terms & Conditions (“Terms”) govern your access to and use of www.vriddhinexus.com, its associated subdomains, applications, booking interfaces and services operated by Vriddhi Nexus Private Limited (“Vriddhi Nexus”, “Vriddhi”, “we”, “us” or “our”). By accessing our website, creating an account, making a booking or using any of our services, you acknowledge that you have read, understood and agreed to these Terms. If you do not agree with these Terms, you should not use our services."
      }
      effectiveDate="22 September 2026"
      lastUpdated="22 September 2026"
      sections={SECTIONS}
      footer={
        // The Terms route grievances to the officer named in section 23 and
        // general queries to support@, not the general enquiries address.
        <footer className="rounded-xl border border-brand-border bg-brand-surface p-5 text-sm text-brand-muted">
          <p className="font-semibold text-brand-text">Questions about these Terms</p>
          <p className="mt-1">
            Support:{" "}
            <a
              href={`mailto:${legalConfig.supportEmail}`}
              className="font-medium text-brand-primary hover:underline"
            >
              {legalConfig.supportEmail}
            </a>
          </p>
          <p className="mt-1">
            Grievance Officer: {legalConfig.grievanceOfficer.name} —{" "}
            <a
              href={`mailto:${legalConfig.grievanceOfficer.email}`}
              className="font-medium text-brand-primary hover:underline"
            >
              {legalConfig.grievanceOfficer.email}
            </a>
            ,{" "}
            <a
              href={`tel:${legalConfig.grievanceOfficer.phone.replace(/\s+/g, "")}`}
              className="font-medium text-brand-primary hover:underline"
            >
              {legalConfig.grievanceOfficer.phone}
            </a>
          </p>
        </footer>
      }
    />
  );
}
