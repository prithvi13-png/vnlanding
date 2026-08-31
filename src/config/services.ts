import { BusIcon, CarIcon, PlaneIcon, TrainIcon } from "@/components/icons";
import type { TravelService } from "@/types/service";

/**
 * Single source of truth for the travel vertical. Every surface (hero CTA,
 * travel cards, footer) branches on `status` — flipping a service to "live"
 * and setting its env var is the only change needed to activate it.
 */
export const travelServices: TravelService[] = [
  {
    id: "bus",
    name: "Bus Booking",
    icon: BusIcon,
    status: "live",
    url: process.env.NEXT_PUBLIC_BUS_URL,
    description: "Find and book bus journeys through the Vriddhi Nexus Bus Booking platform.",
    hoverMotion: "slide-x",
  },
  {
    id: "flight",
    name: "Flight Booking",
    icon: PlaneIcon,
    status: "coming-soon",
    url: process.env.NEXT_PUBLIC_FLIGHT_URL,
    description: "Flight booking is coming soon to the Vriddhi Nexus travel ecosystem.",
    hoverMotion: "diagonal-up",
  },
  {
    id: "train",
    name: "Train Booking",
    icon: TrainIcon,
    status: "coming-soon",
    url: process.env.NEXT_PUBLIC_TRAIN_URL,
    description: "Train booking will soon be available through Vriddhi Nexus.",
    hoverMotion: "forward",
  },
  {
    id: "car",
    name: "Car Booking",
    icon: CarIcon,
    status: "coming-soon",
    url: process.env.NEXT_PUBLIC_CAR_URL,
    description: "Convenient car and cab booking services are coming soon.",
    hoverMotion: "slide-x",
  },
];

export function getTravelServiceById(id: TravelService["id"]): TravelService | undefined {
  return travelServices.find((service) => service.id === id);
}

export const busService = travelServices[0];
