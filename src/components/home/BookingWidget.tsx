import { Card } from "@/components/ui/Card";
import { BusSearchForm } from "./BusSearchForm";
import { TravelServiceTabs } from "./TravelServiceTabs";

export function BookingWidget() {
  return (
    <section id="bus-search" className="relative z-10 -mt-16 px-4 sm:-mt-20 sm:px-6 lg:px-8">
      <Card padding="lg" className="mx-auto max-w-3xl rounded-2xl shadow-modal">
        <h2 className="mb-6 text-xl font-bold sm:text-2xl">Book Your Bus Tickets</h2>
        <TravelServiceTabs />
        <div className="mt-6 border-t border-brand-border pt-6">
          <BusSearchForm />
        </div>
      </Card>
    </section>
  );
}
