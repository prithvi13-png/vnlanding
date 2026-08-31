"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useStaggerInView } from "./StaggerContainer";

interface StaggerItemProps {
  children: ReactNode;
  index?: number;
  className?: string;
  /** Milliseconds between items. */
  step?: number;
}

export function StaggerItem({ children, index = 0, className, step = 90 }: StaggerItemProps) {
  const inView = useStaggerInView();

  return (
    <div
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${index * step}ms` }}
    >
      {children}
    </div>
  );
}
