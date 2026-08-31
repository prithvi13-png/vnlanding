import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Vriddhi Nexus team.",
};

export default function ContactPage() {
  return (
    <div className="container-brand py-16 sm:py-24">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl">Contact Us</h1>
        <p className="mt-3 text-brand-muted">
          Have a question or need help with a booking? Send us a message and we&apos;ll get back to you.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
