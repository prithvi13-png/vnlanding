"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ComingSoonModal } from "@/components/ui/ComingSoonModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/config/services";
import { useComingSoonModal } from "@/hooks/useComingSoonModal";
import { cn } from "@/lib/utils";

/**
 * Four service cards straight from config/services.ts. Flipping a service's
 * `status` to "live" and adding a `url` is the only change needed for its
 * card to switch from "Notify Me" to a real "Book Now" link — no JSX here
 * branches on anything but `status`.
 */
export function TravelEcosystem() {
  const modal = useComingSoonModal();

  return (
    <section className="py-section-sm sm:py-section">
      <div className="container-brand">
        <SectionHeading eyebrow="Our Ecosystem" title="One Platform. Every Journey." />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const isLive = service.status === "live";
            const Icon = service.icon;

            return (
              <Card
                key={service.id}
                hoverable
                padding="lg"
                className={cn(
                  "flex flex-col gap-4",
                  isLive && "border-brand-primary bg-brand-primary-light/40",
                )}
              >
                <span
                  className={cn(
                    "inline-flex size-12 items-center justify-center rounded-xl",
                    isLive ? "bg-brand-primary text-white" : "bg-brand-background text-brand-muted",
                  )}
                >
                  <Icon className="size-6" />
                </span>

                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  {isLive ? <Badge variant="gold">Live</Badge> : <Badge variant="coming-soon">Coming Soon</Badge>}
                </div>

                <p className="flex-1 text-sm text-brand-muted">{service.description}</p>

                {isLive ? (
                  <Button href={service.url ?? "#bus-search"} variant="primary" size="sm">
                    Book Now
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => modal.open(service)}>
                    Notify Me
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {modal.activeService && (
        <ComingSoonModal
          serviceName={modal.activeService.name}
          icon={modal.activeService.icon}
          description={modal.activeService.description}
          onClose={modal.close}
        />
      )}
    </section>
  );
}
