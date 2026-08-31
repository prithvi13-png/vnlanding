"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

const StaggerContext = createContext(false);

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

/** Observes once; every descendant StaggerItem reveals staggered off this single trigger. */
export function StaggerContainer({ children, className }: StaggerContainerProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <StaggerContext.Provider value={inView}>{children}</StaggerContext.Provider>
    </div>
  );
}

export function useStaggerInView(): boolean {
  return useContext(StaggerContext);
}
