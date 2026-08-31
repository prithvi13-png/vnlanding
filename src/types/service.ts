import type { IconComponent } from "./icon";

export type ServiceId = "bus" | "flights" | "trains" | "cars";

export type ServiceStatus = "live" | "coming-soon" | "maintenance";

export interface Service {
  id: ServiceId;
  name: string;
  icon: IconComponent;
  status: ServiceStatus;
  /** Only present when status is "live" — UI must branch on `status`, not on `url`. */
  url?: string;
  description: string;
}
