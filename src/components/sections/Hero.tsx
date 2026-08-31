"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { FadeUp } from "@/components/animations/FadeUp";
import { ComingSoonModal } from "@/components/modals/ComingSoonModal";
import { Button } from "@/components/ui/Button";
import { busService } from "@/config/services";
import { siteConfig } from "@/config/site";
import { useComingSoonModal } from "@/hooks/useComingSoonModal";
import { resolveServiceAction } from "@/lib/services";
import { NexusVisual } from "./NexusVisual";

export function Hero() {
  const modal = useComingSoonModal();
  const busAction = resolveServiceAction(busService);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-background pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 motion-reduce:animate-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--brand-primary-light) 80%, transparent) 0%, transparent 45%), radial-gradient(circle at 80% 70%, color-mix(in srgb, var(--brand-primary-light) 70%, transparent) 0%, transparent 50%)",
          backgroundSize: "160% 160%",
          animation: "gradient-pan 18s ease-in-out infinite",
        }}
      />

      <div className="container-brand grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6 text-left">
          <FadeUp>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.05]">{siteConfig.tagline}</h1>
          </FadeUp>

          <FadeUp delayMs={150}>
            <p className="max-w-xl text-lg text-brand-muted">{siteConfig.description}</p>
          </FadeUp>

          <FadeUp delayMs={300}>
            <div className="flex flex-wrap gap-3">
              <Button href="#services" size="lg">
                Explore Our Services
              </Button>

              {busAction.kind === "link" ? (
                <Button href={busAction.href} variant="outline" size="lg">
                  Book a Bus
                </Button>
              ) : (
                <Button variant="outline" size="lg" onClick={() => modal.open(busService)}>
                  Book a Bus
                </Button>
              )}
            </div>
          </FadeUp>
        </div>

        <FadeIn delayMs={200}>
          <NexusVisual />
        </FadeIn>
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
