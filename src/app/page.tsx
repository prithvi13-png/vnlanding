import type { Metadata } from "next";
import { AboutPreview } from "@/components/home/AboutPreview";
import { AppExperience } from "@/components/home/AppExperience";
import { BookingWidget } from "@/components/home/BookingWidget";
import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { PopularRoutes } from "@/components/home/PopularRoutes";
import { TravelEcosystem } from "@/components/home/TravelEcosystem";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

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
      <PopularRoutes />
      <WhyChooseUs />
      <TravelEcosystem />
      <AppExperience />
      <AboutPreview />
      <CTASection />
    </>
  );
}
