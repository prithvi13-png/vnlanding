"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Heading level — keep section headings at h2/h3 so each page keeps exactly one h1. */
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div
      ref={ref}
      className={cn(
        "flex max-w-2xl flex-col gap-3 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        alignClasses,
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-primary">
          <span
            className="h-0.5 rounded-full bg-brand-gold transition-[width] duration-700 ease-out motion-reduce:transition-none"
            style={{ width: inView ? "1.5rem" : "0rem" }}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      )}
      <Heading className="text-balance text-3xl sm:text-4xl">{title}</Heading>
      {description && <p className="text-balance text-base text-brand-muted sm:text-lg">{description}</p>}
    </div>
  );
}
