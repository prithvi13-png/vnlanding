import { BusIcon, CarIcon, PlaneIcon, TrainIcon } from "@/components/icons";
import type { Service } from "@/types/service";

/**
 * Single source of truth for what's live. Every service surface (nav,
 * tabs, ecosystem cards, footer) branches on `status` — flipping a service
 * to "live" and adding a `url` here is the only change needed to activate it.
 */
export const services: Service[] = [
  {
    id: "bus",
    name: "Bus",
    icon: BusIcon,
    status: "live",
    url: "/#bus-search",
    description:
      "Book intercity bus tickets across India with real-time seat selection and instant confirmation.",
  },
  {
    id: "flights",
    name: "Flights",
    icon: PlaneIcon,
    status: "coming-soon",
    description:
      "Flight booking is on our roadmap — search and book domestic and international flights, all in one platform.",
  },
  {
    id: "trains",
    name: "Trains",
    icon: TrainIcon,
    status: "coming-soon",
    description:
      "Train booking is on our roadmap — plan and book rail journeys alongside your other travel.",
  },
  {
    id: "cars",
    name: "Cars",
    icon: CarIcon,
    status: "coming-soon",
    description:
      "Self-drive and chauffeur-driven car rentals are on our roadmap, coming soon to Vriddhi Nexus.",
  },
];

export function getServiceById(id: Service["id"]): Service | undefined {
  return services.find((service) => service.id === id);
}
