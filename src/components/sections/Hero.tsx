import { Button } from "@/components/ui/Button";
import { busService } from "@/config/services";
import { siteConfig } from "@/config/site";
import { resolveServiceAction } from "@/lib/services";
import { BookBusModalButton } from "./BookBusModalButton";
import { NexusVisual } from "./NexusVisual";

/**
 * Server-rendered so the headline (the page's LCP element) is in the HTML
 * and starts its entrance on first paint, not after hydration. The
 * animate-hero-* classes are pure CSS; see globals.css.
 */
export function Hero() {
  const busAction = resolveServiceAction(busService);

  return (
    <section id="home" className="relative overflow-hidden bg-brand-background pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="container-brand grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="animate-hero-slide text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.05] motion-reduce:animate-none">
            {siteConfig.tagline}
          </h1>

          <p
            className="max-w-xl animate-hero-rise text-lg text-brand-muted motion-reduce:animate-none"
            style={{ animationDelay: "150ms" }}
          >
            {siteConfig.description}
          </p>

          <div
            className="flex animate-hero-rise flex-wrap gap-3 motion-reduce:animate-none"
            style={{ animationDelay: "300ms" }}
          >
            <Button href="#services" size="lg">
              Explore Our Services
            </Button>

            {busAction.kind === "link" ? (
              <Button href={busAction.href} variant="outline" size="lg">
                Book Bus Ticket
              </Button>
            ) : (
              <BookBusModalButton variant="outline" size="lg" />
            )}
          </div>
        </div>

        <div className="animate-hero-fade motion-reduce:animate-none" style={{ animationDelay: "200ms" }}>
          <NexusVisual />
        </div>
      </div>
    </section>
  );
}
