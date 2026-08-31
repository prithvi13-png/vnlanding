"use client";

import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { ComingSoonModal } from "@/components/modals/ComingSoonModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { travelServices } from "@/config/services";
import { useComingSoonModal } from "@/hooks/useComingSoonModal";
import { resolveServiceAction } from "@/lib/services";
import { TravelServiceCard } from "./TravelServiceCard";

export function TravelServices() {
  const modal = useComingSoonModal();

  return (
    <section id="travel" className="bg-brand-primary-light/40 py-section-sm sm:py-section">
      <div className="container-brand">
        <SectionHeading eyebrow="Travel" title="Travel Smarter" description="One growing platform for everyday journeys." />

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {travelServices.map((service, index) => {
            const action = resolveServiceAction(service);
            return (
              <StaggerItem key={service.id} index={index}>
                <TravelServiceCard
                  service={service}
                  href={action.kind === "link" ? action.href : undefined}
                  onClick={action.kind === "modal" ? () => modal.open(service) : undefined}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
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
