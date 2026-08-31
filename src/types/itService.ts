import type { IconComponent } from "./icon";

export type ITServiceId =
  | "web-development"
  | "mobile-apps"
  | "custom-software"
  | "crm-erp"
  | "ai-solutions"
  | "cloud-digital";

export interface ITService {
  id: ITServiceId;
  name: string;
  icon: IconComponent;
  description: string;
  /** Class name driving this card's icon hover micro-interaction. */
  hoverMotion: "shift-x" | "tilt" | "blocks" | "pulse" | "float" | "shift-modules";
}
