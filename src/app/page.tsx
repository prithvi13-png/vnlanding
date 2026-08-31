import dynamic from "next/dynamic";
import { AboutPreview } from "@/components/home/AboutPreview";
import { AppExperience } from "@/components/home/AppExperience";
import { BookingWidget } from "@/components/home/BookingWidget";
import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { PopularRoutes } from "@/components/home/PopularRoutes";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

// Below-the-fold and only interactive for its ComingSoonModal — deferred
// into its own chunk so it doesn't compete with the booking widget's JS.
const TravelEcosystem = dynamic(() =>
  import("@/components/home/TravelEcosystem").then((mod) => mod.TravelEcosystem),
);

export const metadata = buildMetadata({
  title: { absolute: "Vriddhi Nexus | Bus Booking & Travel Services" },
  description: siteConfig.description,
  path: "",
});

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
