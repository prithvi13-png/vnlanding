import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hoverable?: boolean;
}

const PADDING_CLASSES: Record<NonNullable<CardProps["padding"]>, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({ children, className, padding = "md", hoverable = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-brand-border bg-brand-surface shadow-card",
        PADDING_CLASSES[padding],
        hoverable && "transition-shadow duration-200 ease-out hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
