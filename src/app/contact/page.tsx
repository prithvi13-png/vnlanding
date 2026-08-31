import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Vriddhi Nexus.",
};

export default function ContactPage() {
  return (
    <div className="container-brand py-16 sm:py-24">
      <h1 className="text-4xl">Contact Us</h1>
      <p className="mt-4 max-w-xl text-brand-muted">The contact form is being built out in a later phase.</p>
    </div>
  );
}
