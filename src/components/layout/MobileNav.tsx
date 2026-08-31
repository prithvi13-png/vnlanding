"use client";

import Link from "next/link";
import { useRef } from "react";
import { CloseIcon } from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { useDialogA11y } from "@/hooks/useDialogA11y";
import { resolveNavAction } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import type { Service } from "@/types/service";
import type { NavItem } from "@/types/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  accountHref: string;
  accountLabel: string;
  onOpenServiceModal: (service: Service) => void;
}

export function MobileNav({ open, onClose, items, accountHref, accountLabel, onOpenServiceModal }: MobileNavProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useDialogA11y(drawerRef, open, onClose);

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 overflow-hidden md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-brand-text/50 transition-opacity duration-200 ease-out",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-xs flex-col overflow-y-auto bg-brand-surface p-6 shadow-modal transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-bold">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-11 items-center justify-center rounded-full text-brand-muted transition-colors duration-150 ease-out hover:bg-brand-primary-light hover:text-brand-primary"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              const action = resolveNavAction(item);
              return (
                <li key={item.id}>
                  {action.kind === "link" ? (
                    <Link
                      href={action.href}
                      onClick={onClose}
                      className="flex min-h-11 items-center rounded-lg px-3 py-3 text-base font-medium text-brand-text transition-colors duration-150 ease-out hover:bg-brand-primary-light hover:text-brand-primary"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenServiceModal(action.service);
                      }}
                      className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-base font-medium text-brand-muted transition-colors duration-150 ease-out hover:bg-brand-primary-light hover:text-brand-primary"
                    >
                      {item.label}
                      <Badge variant="coming-soon">Soon</Badge>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto border-t border-brand-border pt-4">
          <a
            href={accountHref}
            className="flex min-h-11 items-center rounded-lg px-3 py-3 text-base font-semibold text-brand-primary transition-colors duration-150 ease-out hover:bg-brand-primary-light"
          >
            {accountLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
