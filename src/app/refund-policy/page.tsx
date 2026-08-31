import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Vriddhi Nexus refund policy.",
};

export default function RefundPolicyPage() {
  return (
    <div className="container-brand py-16 sm:py-24">
      <h1 className="text-4xl">Refund Policy</h1>
      <p className="mt-4 max-w-xl text-brand-muted">Full policy content is being built out in a later phase.</p>
    </div>
  );
}
