import Link from "next/link";
import { ArrowRightIcon, CodeIcon, CompassIcon } from "@/components/icons";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CATEGORIES = [
  {
    id: "travel",
    href: "#travel",
    icon: CompassIcon,
    name: "Travel Booking",
    description: "Bus travel is live today, with flights, trains and cars joining the platform over time.",
  },
  {
    id: "technology",
    href: "#technology",
    icon: CodeIcon,
    name: "IT Services",
    description: "Web, mobile, software, CRM/ERP, AI and cloud solutions built around your business.",
  },
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-section-sm sm:py-section">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Services"
          title="Everything Connected Through Vriddhi Nexus"
          description="Travel and technology solutions designed around convenience, connectivity and modern digital experiences."
        />

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={category.id} index={index}>
                <Link href={category.href} className="group block h-full">
                  <Card
                    hoverable
                    padding="lg"
                    className="flex h-full flex-col gap-4 transition-transform duration-300 ease-out group-hover:-translate-y-1.5"
                  >
                    <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-primary-light text-brand-primary transition-transform duration-300 ease-out group-hover:scale-105">
                      <Icon className="size-7" />
                    </span>
                    <h3 className="text-2xl">{category.name}</h3>
                    <p className="flex-1 text-brand-muted">{category.description}</p>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-brand-primary">
                      Explore
                      <ArrowRightIcon className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
