import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="py-section-sm sm:py-section">
      <div className="container-brand flex flex-col items-center gap-6 text-center">
        <SectionHeading
          eyebrow="About Us"
          title="Building One Platform for Every Journey"
          description="Vriddhi Nexus Private Limited is bringing bus, flight, train and car travel together in a single, trustworthy platform. We're starting with bus booking, with more travel options on the way."
        />
        <Button href="/about" variant="outline">
          Know More
        </Button>
      </div>
    </section>
  );
}
