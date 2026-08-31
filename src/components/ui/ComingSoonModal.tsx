"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/icons";
import { useDialogA11y } from "@/hooks/useDialogA11y";
import { cn } from "@/lib/utils";
import type { IconComponent } from "@/types/icon";
import { Button } from "./Button";

interface ComingSoonModalProps {
  serviceName: string;
  icon: IconComponent;
  description: string;
  onClose: () => void;
}

export function ComingSoonModal({ serviceName, icon: Icon, description, onClose }: ComingSoonModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  // Two-phase mount so the opacity/scale transition actually has a starting frame to animate from.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useDialogA11y(panelRef, true, onClose);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-brand-text/50 p-4 transition-opacity duration-200 ease-out",
        entered ? "opacity-100" : "opacity-0",
      )}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className={cn(
          "relative max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-2xl bg-brand-surface p-6 shadow-modal transition-all duration-200 ease-out sm:p-8",
          entered ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0",
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full text-brand-muted transition-colors duration-150 ease-out hover:bg-brand-primary-light hover:text-brand-primary"
        >
          <CloseIcon className="size-5" />
        </button>

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
            Stay Tuned
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
