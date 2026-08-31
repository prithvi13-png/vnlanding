"use client";

import { useId } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import type { IconComponent } from "@/types/icon";

interface ComingSoonModalProps {
  serviceName: string;
  icon: IconComponent;
  description: string;
  onClose: () => void;
}

export function ComingSoonModal({ serviceName, icon: Icon, description, onClose }: ComingSoonModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <Modal onClose={onClose} labelledBy={titleId} describedBy={descriptionId}>
      <div className="flex flex-col items-center gap-4 pt-2 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-primary-light text-brand-primary">
          <Icon className="size-7" />
        </span>

        <span className="text-sm font-semibold uppercase tracking-wide text-brand-primary">{serviceName}</span>

        <h2 id={titleId} className="text-2xl">
          Launching Soon
        </h2>

        <p id={descriptionId} className="text-brand-muted">
          {description}
        </p>

        <Button variant="accent" onClick={onClose} fullWidth className="mt-2">
          Got It
        </Button>
      </div>
    </Modal>
  );
}
