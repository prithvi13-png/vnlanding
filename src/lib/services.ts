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

export type AuthLinks = { login: string; register: string };

/**
 * Accounts live in the booking platform, not on this marketing site. Same rule
 * as resolveServiceAction: only offer Login/Register once that platform has a
 * real URL, so they never render against an undefined origin.
 */
export function resolveAuthLinks(service: TravelService): AuthLinks | null {
  const action = resolveServiceAction(service);
  if (action.kind !== "link") {
    return null;
  }

  const base = action.href.replace(/\/+$/, "");
  return { login: `${base}/login`, register: `${base}/register` };
}
