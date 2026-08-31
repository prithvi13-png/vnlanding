import { getServiceById } from "@/config/services";
import type { Service } from "@/types/service";
import type { NavItem } from "@/types/site";

export type NavAction = { kind: "link"; href: string } | { kind: "modal"; service: Service };

/**
 * Resolves a nav item against config/services.ts: a "live" service renders
 * as a link, anything else opens ComingSoonModal. Shared by Header and
 * MobileNav so both surfaces make identical decisions from one place.
 */
export function resolveNavAction(item: NavItem): NavAction {
  if (!item.serviceId) return { kind: "link", href: item.href };

  const service = getServiceById(item.serviceId);
  if (!service) return { kind: "link", href: item.href };

  if (service.status === "live") {
    return { kind: "link", href: service.url ?? item.href };
  }

  return { kind: "modal", service };
}
