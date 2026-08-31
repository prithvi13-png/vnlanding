import type { Metadata } from "next";
import { BookingWidget } from "@/components/home/BookingWidget";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = {
  title: {
    absolute: "Vriddhi Nexus | Bus Booking & Travel Services",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BookingWidget />
      <div className="container-brand py-16 sm:py-24">
        <p className="text-brand-muted">Remaining homepage sections are being built out in the next phase.</p>
      </div>
    </>
  );
}
