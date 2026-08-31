import type { IconComponent } from "./icon";

export type TravelServiceId = "bus" | "flight" | "train" | "car";

export type ServiceStatus = "live" | "coming-soon" | "maintenance";

export interface TravelService {
  id: TravelServiceId;
  name: string;
  icon: IconComponent;
  status: ServiceStatus;
  /** Only present when status is "live" — UI must branch on `status`, not on `url`. */
  url?: string;
  description: string;
  /** Direction for the icon's hover micro-interaction (see TravelServiceCard). */
  hoverMotion: "slide-x" | "diagonal-up" | "forward";
}
