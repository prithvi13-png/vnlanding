import type { TravelService } from "@/types/service";

export type ServiceAction = { kind: "link"; href: string } | { kind: "modal" };

/**
 * The single reusable click-handler decision for a travel service: a live
 * service with a configured URL is a real link; anything else (coming-soon,
 * or live with a missing env var) opens ComingSoonModal instead of ever
 * rendering a broken/undefined href.
 */
export function resolveServiceAction(service: TravelService): ServiceAction {
  if (service.status === "live" && service.url) {
    return { kind: "link", href: service.url };
  }
  return { kind: "modal" };
}
