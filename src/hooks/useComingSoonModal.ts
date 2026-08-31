import { useCallback, useState } from "react";
import type { Service } from "@/types/service";

/**
 * Local open/close state for ComingSoonModal. Each section that can trigger
 * the modal (tabs, ecosystem cards, ...) owns one of these — the modal
 * component itself stays a single, stateless-about-visibility definition.
 */
export function useComingSoonModal() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const open = useCallback((service: Service) => setActiveService(service), []);
  const close = useCallback(() => setActiveService(null), []);

  return { activeService, open, close };
}
