import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Us",
  description: "About Vriddhi Nexus Private Limited's multi-service travel booking platform.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-brand py-16 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-14">
        <div>
          <h1 className="text-4xl sm:text-5xl">About Vriddhi Nexus</h1>
          <p className="mt-4 text-lg text-brand-muted">
            Vriddhi Nexus Private Limited is building one platform for every kind of journey — starting with bus
            travel, and expanding to flights, trains and cars over time.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <SectionHeading align="left" title="What We Do Today" />
          <p className="text-brand-muted">
            Bus booking is live today, powered by our dedicated Bus Booking platform. The services below are on
            our roadmap and will launch here as they become available.
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {services.map((service) => (
              <li
                key={service.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-brand-border bg-brand-surface px-4 py-3"
              >
                <span className="flex items-center gap-3 font-semibold">
                  <service.icon className="size-5 text-brand-primary" aria-hidden="true" />
                  {service.name}
                </span>
                <Badge variant={service.status === "live" ? "gold" : "coming-soon"}>
                  {service.status === "live" ? "Live" : "Coming Soon"}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <SectionHeading align="left" title="Our Approach" />
          <p className="text-brand-muted">
            We&apos;re building Vriddhi Nexus around three principles: keep booking simple, keep payments secure,
            and be transparent about what&apos;s available today versus what&apos;s still on the way.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand-border bg-brand-primary-light/40 p-8">
          <h2 className="text-2xl">Ready to book your journey?</h2>
          <p className="text-brand-muted">Search live bus routes now, or get in touch if you have a question.</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/#bus-search" variant="primary">
              Search Buses
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
