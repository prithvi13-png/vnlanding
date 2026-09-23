import { PolicyLayout, type PolicySection } from "@/components/policy/PolicyLayout";
import { legalConfig } from "@/config/legal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "What personal information Vriddhi Nexus collects, why we collect it, how it is shared and protected, and the choices available to users.",
  path: "/privacy-policy",
});

/**
 * Issued by Vriddhi Nexus Private Limited and reproduced verbatim. Treat the
 * wording as fixed: it is a legal document, not site copy. Amendments come
 * from the company, and the "Last Updated" date above must move with them.
 */
const SECTIONS: PolicySection[] = [
  {
    heading: "1. Information We May Collect",
    body: ["Depending on how you interact with our platform, we may collect the following information."],
    subsections: [
      {
        heading: "A. Personal and Contact Information",
        body: ["This may include:"],
        bullets: [
          "name;",
          "mobile number;",
          "email address;",
          "address, where required; and",
          "account or profile information.",
        ],
      },
      {
        heading: "B. Passenger and Booking Information",
        body: ["When you make a travel booking, we may collect information such as:"],
        bullets: [
          "passenger name;",
          "age;",
          "gender, where required;",
          "origin and destination;",
          "boarding and drop-off locations;",
          "journey date and time;",
          "seat information;",
          "booking history;",
          "booking ID or PNR; and",
          "special booking information required by the relevant travel service provider.",
        ],
      },
      {
        body: [
          "Where you make a booking for another passenger, you confirm that you are authorised to provide the information necessary for that booking.",
        ],
      },
      {
        heading: "C. Payment and Transaction Information",
        body: [
          "Payments may be processed through authorised third-party payment gateways, banks, UPI providers and financial institutions. Vriddhi Nexus may receive information such as:",
        ],
        bullets: [
          "payment status;",
          "transaction ID;",
          "payment method;",
          "refund status; and",
          "masked payment information.",
        ],
      },
      {
        body: [
          "Sensitive authentication details such as UPI PINs, CVVs and banking passwords should never be provided directly to Vriddhi Nexus. Payment credentials are generally processed through the relevant authorised payment service provider.",
        ],
      },
      {
        heading: "D. Device and Technical Information",
        body: ["When you access our services, we may automatically receive information such as:"],
        bullets: [
          "IP address;",
          "device type;",
          "browser type;",
          "operating system;",
          "device identifiers;",
          "date and time of access;",
          "pages visited;",
          "referring URLs;",
          "application or website interaction data;",
          "crash information; and",
          "security logs.",
        ],
      },
      {
        heading: "E. Communication Information",
        body: ["When you contact us, we may retain information contained in:"],
        bullets: [
          "emails;",
          "customer support requests;",
          "grievance submissions;",
          "telephone interactions, where recorded in accordance with applicable requirements;",
          "feedback; and",
          "other communications.",
        ],
      },
    ],
  },
  {
    heading: "2. How We Use Personal Information",
    body: ["We may process personal information for purposes including:"],
    bullets: [
      "creating and maintaining user accounts;",
      "searching and displaying travel options;",
      "processing bus and other travel bookings;",
      "issuing booking confirmations and tickets;",
      "communicating booking information;",
      "processing cancellations and refunds;",
      "providing customer support;",
      "resolving complaints and grievances;",
      "processing payments;",
      "detecting and preventing fraud;",
      "maintaining platform security;",
      "improving our services;",
      "maintaining transaction records;",
      "complying with tax, accounting and legal requirements;",
      "responding to lawful requests from authorities;",
      "preventing misuse of the platform; and",
      "sending service-related notifications.",
    ],
    subsections: [
      {
        body: [
          "Where permitted and where appropriate consent or another lawful basis exists, we may also use information for:",
        ],
        bullets: ["offers;", "promotional communications;", "service recommendations; and", "marketing campaigns."],
      },
      {
        body: [
          "Users may opt out of promotional communications through the mechanisms made available by Vriddhi Nexus. Essential transactional communications relating to active bookings, security or account administration may still be sent.",
        ],
      },
    ],
  },
  {
    heading: "3. Legal and Regulatory Framework",
    body: [
      "Vriddhi Nexus processes personal information in accordance with applicable Indian law. This may include, where applicable:",
    ],
    bullets: [
      "the Information Technology Act, 2000;",
      "applicable rules governing reasonable security practices and personal information;",
      "the Digital Personal Data Protection Act, 2023 and rules made under it, as and when the relevant provisions become applicable; and",
      "other applicable Indian laws and regulatory requirements.",
    ],
    subsections: [
      {
        body: [
          "As India's personal-data protection framework continues through its notified implementation schedule, Vriddhi Nexus may update this Privacy Policy and its data-handling practices accordingly.",
        ],
      },
    ],
  },
  {
    heading: "4. Sharing of Information",
    body: [
      "To provide our services, personal information may need to be shared with third parties. These may include:",
    ],
    subsections: [
      {
        heading: "Travel Service Providers",
        body: ["Information necessary for a booking may be shared with:"],
        bullets: [
          "bus operators;",
          "travel operators;",
          "booking aggregators;",
          "API providers; and",
          "other travel service partners.",
        ],
      },
      {
        body: [
          "For example, passenger names and travel details may need to be transmitted to the relevant operator to issue and service a ticket.",
        ],
      },
      {
        heading: "Payment Service Providers",
        body: ["Transaction information may be processed through:"],
        bullets: [
          "payment gateways;",
          "banks;",
          "UPI providers;",
          "card networks; and",
          "other authorised financial service providers.",
        ],
      },
      {
        heading: "Technology and Service Providers",
        body: ["We may use service providers for functions such as:"],
        bullets: [
          "cloud hosting;",
          "database management;",
          "SMS;",
          "email;",
          "WhatsApp or communication services;",
          "analytics;",
          "cybersecurity;",
          "customer support; and",
          "fraud prevention.",
        ],
      },
      {
        body: [
          "Such providers receive information only as reasonably necessary for the services they perform and are expected to handle information in accordance with applicable contractual and legal requirements.",
        ],
      },
    ],
  },
  {
    heading: "5. Disclosure Required by Law",
    body: ["Vriddhi Nexus may disclose information where reasonably necessary to:"],
    bullets: [
      "comply with applicable laws;",
      "comply with court orders;",
      "respond to lawful government requests;",
      "assist law enforcement authorities;",
      "investigate fraud or cybercrime;",
      "protect the safety of users;",
      "protect our legal rights; or",
      "enforce our Terms & Conditions.",
    ],
  },
  {
    heading: "6. Business Transfers",
    body: [
      "If Vriddhi Nexus undergoes a merger, acquisition, restructuring, investment, sale of business or transfer of assets, personal information may be transferred as part of that transaction, subject to applicable law and appropriate safeguards.",
    ],
  },
  {
    heading: "7. Cookies and Similar Technologies",
    body: ["Our website may use cookies and similar technologies to:"],
    bullets: [
      "maintain sessions;",
      "remember preferences;",
      "improve website performance;",
      "understand website usage;",
      "detect suspicious activity;",
      "support analytics; and",
      "improve user experience.",
    ],
    subsections: [
      {
        body: [
          "Some cookies may be necessary for the proper functioning of the website. Where required by applicable law, users will be provided with appropriate choices regarding non-essential cookies. Users may also manage cookies through their browser settings. Disabling certain cookies may affect website functionality.",
        ],
      },
    ],
  },
  {
    heading: "8. Analytics",
    body: [
      "Vriddhi Nexus may use analytics tools to understand how users interact with the website and services. Analytics may include information relating to:",
    ],
    bullets: [
      "page visits;",
      "navigation patterns;",
      "device information;",
      "session duration;",
      "general geographic information derived from technical data; and",
      "interaction with platform features.",
    ],
    subsections: [
      {
        body: ["Where possible and appropriate, analytics information may be aggregated or de-identified."],
      },
    ],
  },
  {
    heading: "9. Data Retention",
    body: [
      "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected or as required by applicable law. Retention periods may depend on factors such as:",
    ],
    bullets: [
      "booking and transaction requirements;",
      "tax and accounting obligations;",
      "fraud prevention;",
      "customer support;",
      "disputes;",
      "legal claims;",
      "statutory record-keeping requirements; and",
      "security requirements.",
    ],
    subsections: [
      {
        body: [
          "When information is no longer reasonably required, it may be securely deleted, anonymised or otherwise disposed of in accordance with applicable requirements.",
        ],
      },
    ],
  },
  {
    heading: "10. Data Security",
    body: [
      "Vriddhi Nexus implements reasonable technical and organisational safeguards designed to protect personal information against risks such as:",
    ],
    bullets: [
      "unauthorised access;",
      "unauthorised disclosure;",
      "alteration;",
      "misuse;",
      "accidental loss; and",
      "destruction.",
    ],
    subsections: [
      {
        body: ["Measures may include, where appropriate:"],
        bullets: [
          "encryption;",
          "restricted access;",
          "authentication controls;",
          "monitoring;",
          "backups;",
          "secure hosting;",
          "cybersecurity controls; and",
          "access management.",
        ],
      },
      {
        body: [
          "However, no internet transmission or electronic storage system can be guaranteed to be completely secure. Users are responsible for maintaining the confidentiality of their account credentials and should notify us promptly if they suspect unauthorised activity.",
        ],
      },
    ],
  },
  {
    heading: "11. Data Breach Management",
    body: [
      "If Vriddhi Nexus becomes aware of a personal-data breach affecting users, we will assess and respond to the incident in accordance with applicable law. Where legally required, affected individuals and/or relevant regulatory authorities will be notified in the prescribed manner.",
    ],
  },
  {
    heading: "12. Children's Privacy",
    body: [
      "Vriddhi Nexus's transactional services are intended to be used by persons legally capable of entering into contracts. A parent, guardian or authorised adult may make travel bookings for children or minors.",
      "Where information relating to a child is required for a booking, it should be provided by or with the authority of the child's parent or lawful guardian. We will implement additional consent and child-data safeguards where required under applicable data-protection law.",
    ],
  },
  {
    heading: "13. Your Privacy Choices and Rights",
    body: [
      "Depending on the law applicable at the relevant time, users may have rights relating to their personal information, including the ability to:",
    ],
    bullets: [
      "request information about personal data being processed;",
      "request correction of inaccurate information;",
      "request completion or updating of information;",
      "request erasure where legally permitted;",
      "withdraw consent where processing is based upon consent;",
      "raise grievances regarding personal-data processing; and",
      "exercise other rights provided by applicable law.",
    ],
    subsections: [
      {
        body: [
          "Withdrawal of consent will not affect processing already lawfully undertaken before withdrawal. Certain information may need to be retained where required for legal, tax, fraud-prevention, accounting, contractual or dispute-resolution purposes.",
          `Requests may be submitted to: Email: ${legalConfig.supportEmail}`,
          "We may need to verify the identity of the person making a request before acting on it.",
        ],
      },
    ],
  },
  {
    heading: "14. Cross-Border Processing",
    body: [
      "Some of our technology, cloud or service providers may process information using infrastructure located outside India. Where personal information is transferred or processed outside India, Vriddhi Nexus will take reasonable measures to ensure that such processing is conducted in accordance with applicable Indian law, including any restrictions notified by the Government of India.",
    ],
  },
  {
    heading: "15. Third-Party Websites and Services",
    body: [
      "Our website may contain links to websites or services operated independently by third parties. Those third parties may have their own privacy policies and data-handling practices.",
      "Vriddhi Nexus is not responsible for the independent privacy practices of external websites or services. Users should review the relevant privacy policies before providing information directly to third parties.",
    ],
  },
  {
    heading: "16. Marketing Communications",
    body: ["Where permitted, Vriddhi Nexus may send users information about:"],
    bullets: [
      "offers;",
      "discounts;",
      "new services;",
      "travel promotions; and",
      "other relevant updates.",
    ],
    subsections: [
      {
        body: [
          "Users may unsubscribe from promotional communications using the unsubscribe or preference mechanism provided or by contacting us. Opting out of marketing communications will not prevent us from sending essential transactional, booking, security or legal notifications.",
        ],
      },
    ],
  },
  {
    heading: "17. Changes to This Privacy Policy",
    body: ["We may update this Privacy Policy periodically to reflect:"],
    bullets: [
      "changes to our services;",
      "changes in technology;",
      "regulatory developments;",
      "legal requirements; or",
      "changes in our data-handling practices.",
    ],
    subsections: [
      {
        body: [
          "The revised Privacy Policy will be published on our website with an updated “Last Updated” date. Where required by law, additional notice or consent will be provided.",
        ],
      },
    ],
  },
  {
    heading: "18. Grievance Officer",
    body: [
      "For privacy-related complaints or other grievances, please contact:",
      `Grievance Officer: ${legalConfig.grievanceOfficer.name}`,
      "Company: Vriddhi Nexus Private Limited",
      `Email: ${legalConfig.grievanceOfficer.email}`,
      `Phone: ${legalConfig.grievanceOfficer.phone}`,
      `Address: ${legalConfig.registeredAddress}`,
      "We will address grievances within the timelines required by applicable law.",
    ],
  },
  {
    heading: "19. Contact Us",
    body: [
      "For privacy questions, requests or general assistance:",
      "Vriddhi Nexus Private Limited",
      "Website: www.vriddhinexus.com",
      `Support Email: ${legalConfig.supportEmail}`,
      `Address: ${legalConfig.registeredAddress}`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      intro={
        "Vriddhi Nexus Private Limited (“Vriddhi Nexus”, “Vriddhi”, “we”, “us” or “our”) respects your privacy and is committed to protecting personal information collected through our website, associated subdomains, applications and services. This Privacy Policy explains what information we collect, why we collect it, how it may be used or shared, how it is protected and the choices available to users. This Privacy Policy applies to www.vriddhinexus.com, associated Vriddhi Nexus travel booking services and other digital services operated by Vriddhi Nexus."
      }
      effectiveDate="22 September 2026"
      lastUpdated="22 September 2026"
      sections={SECTIONS}
      footer={
        // The policy designates support@ for privacy requests and names a
        // grievance officer, so this page must not fall back to the general
        // enquiries address in the default footer.
        <footer className="rounded-xl border border-brand-border bg-brand-surface p-5 text-sm text-brand-muted">
          <p className="font-semibold text-brand-text">Privacy requests and grievances</p>
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
