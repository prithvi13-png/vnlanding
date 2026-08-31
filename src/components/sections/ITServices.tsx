import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itServices } from "@/config/itServices";
import { buildMailtoLink } from "@/lib/mailto";
import { ITServiceCard } from "./ITServiceCard";

export function ITServices() {
  return (
    <section id="technology" className="py-section-sm sm:py-section">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Technology"
          title="Technology Built Around Your Business"
          description="From digital products to business automation, we build technology designed to solve real operational challenges."
        />

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {itServices.map((service, index) => (
            <StaggerItem key={service.id} index={index}>
              <ITServiceCard
                service={service}
                href={buildMailtoLink({ subject: `Enquiry: ${service.name}` })}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Button size="lg" href={buildMailtoLink({ subject: "Project Enquiry" })}>
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
