"use client";

import { ComingSoonModal } from "@/components/modals/ComingSoonModal";
import { Button, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { busService } from "@/config/services";
import { useComingSoonModal } from "@/hooks/useComingSoonModal";

interface BookBusModalButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * "Book Bus Ticket" for when the bus platform has no URL configured: opens
 * ComingSoonModal instead. Kept as its own small client island so the
 * sections around it can stay server-rendered.
 */
export function BookBusModalButton({ variant, size }: BookBusModalButtonProps) {
  const modal = useComingSoonModal();

  return (
    <>
      <Button variant={variant} size={size} onClick={() => modal.open(busService)}>
        Book Bus Ticket
      </Button>

      {modal.activeService && (
        <ComingSoonModal
          serviceName={modal.activeService.name}
          icon={modal.activeService.icon}
          description={modal.activeService.description}
          onClose={modal.close}
        />
      )}
    </>
  );
}
