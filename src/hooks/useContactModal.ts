import { useCallback, useState } from "react";

/** Local open/close state for ContactModal, with an optional pre-selected "Service Interested In". */
export function useContactModal() {
  const [presetService, setPresetService] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((serviceName?: string) => {
    setPresetService(serviceName ?? null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, presetService, open, close };
}
