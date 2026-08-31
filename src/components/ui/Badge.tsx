import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "live" | "coming-soon" | "neutral";

interface BadgeProps {
  variant: BadgeVariant;
  children: ReactNode;
  className?: string;
}

// coming-soon: muted-on-white passes ~4.66:1 (AA). Gold is deliberately not
// used here — gold text on any light fill fails contrast (see globals.css).
const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  live: "bg-brand-primary text-white",
  "coming-soon": "bg-brand-surface text-brand-muted border border-brand-border",
  neutral: "bg-brand-primary-light text-brand-primary",
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
