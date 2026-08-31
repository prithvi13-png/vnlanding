import { CheckCircleIcon, CompassIcon, HeadsetIcon, ShieldCheckIcon } from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { IconComponent } from "@/types/icon";

interface Benefit {
  icon: IconComponent;
  title: string;
  description: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: CheckCircleIcon,
    title: "Easy Booking",
    description: "Search, compare and book your bus tickets in just a few taps.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure Payments",
    description: "Your transactions are protected with secure, encrypted payment processing.",
  },
  {
    icon: CompassIcon,
    title: "Multiple Travel Options",
    description: "One platform for bus travel today, with flights, trains and cars on the way.",
  },
  {
    icon: HeadsetIcon,
    title: "Customer Support",
    description: "Our support team is here to help before, during and after your journey.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-brand-surface py-section-sm sm:py-section">
      <div className="container-brand">
        <SectionHeading eyebrow="Why Vriddhi Nexus" title="Why Choose Vriddhi Nexus" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <Card key={benefit.title} padding="lg" className="flex flex-col items-center gap-3 text-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-primary-light text-brand-primary">
                <benefit.icon className="size-7" />
              </span>
              <h3 className="text-lg font-bold">{benefit.title}</h3>
              <p className="text-sm text-brand-muted">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
