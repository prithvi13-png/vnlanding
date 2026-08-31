import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Vriddhi Nexus Private Limited's multi-service travel booking platform.",
};

export default function AboutPage() {
  return (
    <div className="container-brand py-16 sm:py-24">
      <h1 className="text-4xl">About Us</h1>
      <p className="mt-4 max-w-xl text-brand-muted">Full page content is being built out in a later phase.</p>
    </div>
  );
}
