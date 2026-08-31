import { BusIcon, CarIcon, CodeIcon, PlaneIcon, TrainIcon } from "@/components/icons";
import type { IconComponent } from "@/types/icon";

interface NexusNode {
  id: string;
  label: string;
  icon: IconComponent;
  /** Position as a percentage of the visual's bounding box. */
  left: number;
  top: number;
  floatDelayMs: number;
}

const NODES: NexusNode[] = [
  { id: "technology", label: "Technology", icon: CodeIcon, left: 50, top: 14, floatDelayMs: 0 },
  { id: "flight", label: "Flight", icon: PlaneIcon, left: 84.2, top: 38.9, floatDelayMs: 900 },
  { id: "car", label: "Car", icon: CarIcon, left: 71.2, top: 79.1, floatDelayMs: 1800 },
  { id: "train", label: "Train", icon: TrainIcon, left: 28.8, top: 79.1, floatDelayMs: 2700 },
  { id: "bus", label: "Bus", icon: BusIcon, left: 15.8, top: 38.9, floatDelayMs: 3600 },
];

/**
 * The signature "Nexus" visual: a central hub connected to the four travel
 * modes and Technology by thin lines with a slow travelling glow. Purely
 * decorative — aria-hidden, with every animated piece gated by
 * motion-reduce:animate-none.
 */
export function NexusVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full overflow-visible">
        {NODES.map((node) => (
          <line
            key={node.id}
            x1="250"
            y1="250"
            x2={(node.left / 100) * 500}
            y2={(node.top / 100) * 500}
            className="stroke-brand-border"
            strokeWidth={1.5}
          />
        ))}
        {NODES.map((node) => (
          <line
            key={`${node.id}-glow`}
            x1="250"
            y1="250"
            x2={(node.left / 100) * 500}
            y2={(node.top / 100) * 500}
            className="stroke-brand-gold motion-reduce:hidden"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="6 220"
            style={{ animation: `travel-glow 3.5s linear infinite`, animationDelay: `${node.floatDelayMs / 2}ms` }}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          className="absolute inset-[-30%] rounded-full bg-brand-primary/25 blur-xl motion-reduce:animate-none"
          style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
        />
        <span className="relative inline-flex size-20 items-center justify-center rounded-full bg-brand-primary text-lg font-extrabold text-white shadow-card sm:size-24">
          VN
        </span>
      </div>

      {NODES.map((node) => {
        const Icon = node.icon;
        return (
          <div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 motion-reduce:animate-none"
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${node.floatDelayMs}ms`,
            }}
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full border-2 border-brand-gold/70 bg-brand-surface text-brand-primary shadow-card sm:size-14">
              <Icon className="size-5 sm:size-6" />
              <span className="sr-only">{node.label}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
