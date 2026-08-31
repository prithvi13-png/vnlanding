import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Vriddhi Nexus | Bus Booking & Travel Services",
  },
};

export default function Home() {
  return (
    <div className="container-brand py-16 sm:py-24">
      <h1 className="text-4xl">Vriddhi Nexus</h1>
      <p className="mt-4 max-w-xl text-brand-muted">Homepage sections are being built out in the next phase.</p>
    </div>
  );
}
