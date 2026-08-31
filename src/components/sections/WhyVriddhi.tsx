import { CheckCircleIcon, CodeIcon, CompassIcon, NexusOrbIcon } from "@/components/icons";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { IconComponent } from "@/types/icon";

interface Strength {
  icon: IconComponent;
  title: string;
  description: string;
}

const STRENGTHS: Strength[] = [
  {
    icon: CodeIcon,
    title: "Technology First",
    description: "Modern solutions designed with scalability and usability in mind.",
  },
  {
    icon: NexusOrbIcon,
    title: "Connected Ecosystem",
    description: "Travel and technology services connected through one evolving platform.",
  },
  {
    icon: CheckCircleIcon,
    title: "Built for Convenience",
    description: "Digital experiences designed to be simple and intuitive.",
  },
  {
    icon: CompassIcon,
    title: "Future Ready",
    description: "Our platform is structured to expand as new services are introduced.",
  },
];

export function WhyVriddhi() {
  return (
    <section className="bg-brand-background py-section-sm sm:py-section">
      <div className="container-brand">
        <SectionHeading eyebrow="Why Vriddhi Nexus" title="Built to Grow With You" />

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {STRENGTHS.map((strength, index) => (
            <StaggerItem key={strength.title} index={index} className="flex flex-col items-center gap-3 text-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-primary-light text-brand-primary">
                <strength.icon className="size-7" />
              </span>
              <h3 className="text-lg font-bold">{strength.title}</h3>
              <p className="text-sm text-brand-muted">{strength.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
