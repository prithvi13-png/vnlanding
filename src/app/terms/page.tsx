import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Vriddhi Nexus terms and conditions.",
};

export default function TermsPage() {
  return (
    <div className="container-brand py-16 sm:py-24">
      <h1 className="text-4xl">Terms &amp; Conditions</h1>
      <p className="mt-4 max-w-xl text-brand-muted">Full policy content is being built out in a later phase.</p>
    </div>
  );
}
