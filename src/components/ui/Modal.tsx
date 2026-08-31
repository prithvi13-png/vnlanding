"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/icons";
import { useDialogA11y } from "@/hooks/useDialogA11y";
import { cn } from "@/lib/utils";

interface ModalProps {
  onClose: () => void;
  labelledBy: string;
  describedBy?: string;
  children: ReactNode;
  /** Width override, e.g. "max-w-lg" for the larger contact form. Defaults to "max-w-md". */
  panelClassName?: string;
}

/**
 * Shared modal shell: overlay, centering, the two-phase-mount entrance
 * animation, focus trap/restore via useDialogA11y, Escape/overlay-click
 * close, and the close button. Content is passed as children so a modal
 * only needs to own its own body markup — currently used by ComingSoonModal.
 */
export function Modal({ onClose, labelledBy, describedBy, children, panelClassName }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

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
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className={cn(
          "relative max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-2xl bg-brand-surface p-6 shadow-modal transition-[opacity,transform] duration-300 ease-out sm:p-8",
          entered ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.96] opacity-0",
          panelClassName,
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

        {children}
      </div>
    </div>,
    document.body,
  );
}
