import { ArrowRightIcon, MapPinIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { popularRoutes } from "@/config/popularRoutes";
import { buildBusSearchUrl, todayDateString } from "@/lib/busBooking";

export function PopularRoutes() {
  return (
    <section className="container-brand py-section-sm sm:py-section">
      <SectionHeading
        eyebrow="Popular Routes"
        title="Popular Bus Routes"
        description="Frequently booked routes to get you started — pick one to see live buses for today."
      />

      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 sm:[scroll-snap-type:none] lg:grid-cols-3">
        {popularRoutes.map((route) => (
          <Card
            key={route.id}
            hoverable
            padding="md"
            className="flex w-[80%] shrink-0 snap-start flex-col gap-5 sm:w-auto"
          >
            <div className="flex flex-wrap items-center gap-2 text-lg font-semibold">
              <MapPinIcon className="size-5 shrink-0 text-brand-primary" aria-hidden="true" />
              <span>{route.from}</span>
              <ArrowRightIcon className="size-4 shrink-0 text-brand-muted" aria-hidden="true" />
              <span>{route.to}</span>
            </div>

            <Button
              href={buildBusSearchUrl({ from: route.from, to: route.to, date: todayDateString() })}
              variant="accent"
              size="sm"
              fullWidth
            >
              View Buses
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
