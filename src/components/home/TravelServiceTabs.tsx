"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ComingSoonModal } from "@/components/ui/ComingSoonModal";
import { services } from "@/config/services";
import { useComingSoonModal } from "@/hooks/useComingSoonModal";
import { cn } from "@/lib/utils";

/**
 * A status-driven service switcher, not a real tab panel: Bus is the only
 * service with content underneath, so its tile is a link back to the
 * search form and the other three open ComingSoonModal instead of ever
 * swapping in fake search UI.
 */
export function TravelServiceTabs() {
  const modal = useComingSoonModal();

  return (
    <div role="group" aria-label="Travel services">
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {services.map((service) => {
          const Icon = service.icon;
          const isLive = service.status === "live";

          const tileClasses = cn(
            "flex min-h-[4.5rem] flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-center transition-colors duration-200 ease-out sm:min-h-20",
            isLive
              ? "border-b-4 border-brand-primary border-b-brand-gold bg-brand-primary text-white shadow-card"
              : "border-brand-border bg-brand-surface text-brand-muted hover:border-brand-primary/40 hover:text-brand-primary",
          );

          if (isLive) {
            return (
              <Link
                key={service.id}
                href={service.url ?? "#bus-search"}
                className={tileClasses}
                aria-label={`${service.name} — currently available`}
              >
                <Icon className="size-5 sm:size-6" />
                <span className="text-xs font-semibold sm:text-sm">{service.name}</span>
                <Badge variant="gold">Live</Badge>
              </Link>
            );
          }

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => modal.open(service)}
              className={tileClasses}
              aria-haspopup="dialog"
              aria-label={`${service.name} — coming soon`}
            >
              <Icon className="size-5 sm:size-6" />
              <span className="text-xs font-semibold sm:text-sm">{service.name}</span>
              <Badge variant="coming-soon">Soon</Badge>
            </button>
          );
        })}
      </div>

      {modal.activeService && (
        <ComingSoonModal
          serviceName={modal.activeService.name}
          icon={modal.activeService.icon}
          description={modal.activeService.description}
          onClose={modal.close}
        />
      )}
    </div>
  );
}
