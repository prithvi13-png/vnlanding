import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Vriddhi Nexus privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-brand py-16 sm:py-24">
      <h1 className="text-4xl">Privacy Policy</h1>
      <p className="mt-4 max-w-xl text-brand-muted">Full policy content is being built out in a later phase.</p>
    </div>
  );
}
