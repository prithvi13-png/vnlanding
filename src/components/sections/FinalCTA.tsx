"use client";

import { ArrowRightIcon } from "@/components/icons";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { ComingSoonModal } from "@/components/modals/ComingSoonModal";
import { busService } from "@/config/services";
import { useComingSoonModal } from "@/hooks/useComingSoonModal";
import { buildMailtoLink } from "@/lib/mailto";
import { resolveServiceAction } from "@/lib/services";

export function FinalCTA() {
  const busModal = useComingSoonModal();
  const busAction = resolveServiceAction(busService);

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-brand-primary-light to-brand-background py-section-sm sm:py-section"
    >
      <div className="container-brand flex flex-col items-center gap-8 text-center">
        <FadeUp>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Where Would You Like to Begin?</h2>
        </FadeUp>

        <StaggerContainer className="flex flex-wrap justify-center gap-4">
          <StaggerItem index={0}>
            {busAction.kind === "link" ? (
              <a
                href={busAction.href}
                className="group inline-flex h-14 items-center gap-2 rounded-xl bg-brand-primary px-8 text-base font-semibold text-white shadow-card transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover active:scale-[0.98] active:translate-y-0"
              >
                Book Your Journey
                <ArrowRightIcon className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => busModal.open(busService)}
                className="group inline-flex h-14 items-center gap-2 rounded-xl bg-brand-primary px-8 text-base font-semibold text-white shadow-card transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover active:scale-[0.98] active:translate-y-0"
              >
                Book Your Journey
                <ArrowRightIcon className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </button>
            )}
          </StaggerItem>

          <StaggerItem index={1}>
            <a
              href={buildMailtoLink({ subject: "Project Enquiry" })}
              className="group inline-flex h-14 items-center gap-2 rounded-xl border-2 border-brand-primary bg-transparent px-8 text-base font-semibold text-brand-primary transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-brand-gold hover:shadow-card active:scale-[0.98] active:translate-y-0"
            >
              Build With Us
              <ArrowRightIcon className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {busModal.activeService && (
        <ComingSoonModal
          serviceName={busModal.activeService.name}
          icon={busModal.activeService.icon}
          description={busModal.activeService.description}
          onClose={busModal.close}
        />
      )}
    </section>
  );
}
