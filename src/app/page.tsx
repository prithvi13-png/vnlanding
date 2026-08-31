import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TravelServices } from "@/components/sections/TravelServices";
import { WhyVriddhi } from "@/components/sections/WhyVriddhi";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

// Below-the-fold and client-only for their modals — deferred into their own
// chunks so they don't compete with the hero/nav's JS on first load.
const ITServices = dynamic(() => import("@/components/sections/ITServices").then((mod) => mod.ITServices));
const VisionSection = dynamic(() => import("@/components/sections/VisionSection").then((mod) => mod.VisionSection));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then((mod) => mod.FinalCTA));

export const metadata = buildMetadata({
  title: { absolute: "Vriddhi Nexus | Travel & Technology Solutions" },
  description: siteConfig.description,
  path: "",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <TravelServices />
      <ITServices />
      <WhyVriddhi />
      <VisionSection />
      <FinalCTA />
    </>
  );
}
