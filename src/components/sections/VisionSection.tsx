"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function VisionSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-brand-emerald-deep py-section-sm sm:py-section">
      <svg
        aria-hidden="true"
        viewBox="0 0 800 400"
        className="absolute inset-0 h-full w-full opacity-20 motion-reduce:animate-none"
        style={{ animation: inView ? "gradient-pan 20s ease-in-out infinite" : undefined }}
      >
        <circle cx="120" cy="80" r="2" className="fill-brand-gold" />
        <circle cx="680" cy="120" r="2" className="fill-brand-gold" />
        <circle cx="400" cy="60" r="2" className="fill-brand-gold" />
        <circle cx="200" cy="320" r="2" className="fill-brand-gold" />
        <circle cx="620" cy="300" r="2" className="fill-brand-gold" />
        <line x1="120" y1="80" x2="400" y2="60" className="stroke-white/20" strokeWidth={1} />
        <line x1="400" y1="60" x2="680" y2="120" className="stroke-white/20" strokeWidth={1} />
        <line x1="200" y1="320" x2="400" y2="60" className="stroke-white/10" strokeWidth={1} />
        <line x1="620" y1="300" x2="680" y2="120" className="stroke-white/10" strokeWidth={1} />
      </svg>

      <div ref={ref} className="container-brand relative flex flex-col items-center gap-6 text-center">
        <span
          className="h-0.5 rounded-full bg-brand-gold transition-[width] duration-700 ease-out motion-reduce:transition-none"
          style={{ width: inView ? "4rem" : "0rem" }}
          aria-hidden="true"
        />

        <h2
          className={cn(
            "max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] text-white transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          Building a Connected Digital Ecosystem
        </h2>

        <p
          className={cn(
            "max-w-2xl text-lg text-white/70 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: "200ms" }}
        >
          From simplifying how people travel to helping businesses embrace modern technology, Vriddhi Nexus is
          creating solutions for a more connected future.
        </p>
      </div>
    </section>
  );
}
