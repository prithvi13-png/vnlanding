import { ArrowRightIcon } from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { ITService } from "@/types/itService";

const HOVER_MOTION: Record<ITService["hoverMotion"], string> = {
  "shift-x": "group-hover:translate-x-1",
  tilt: "group-hover:-rotate-6",
  blocks: "group-hover:scale-110",
  pulse: "group-hover:scale-110",
  float: "group-hover:-translate-y-1",
  "shift-modules": "group-hover:translate-x-1 group-hover:rotate-3",
};

interface ITServiceCardProps {
  service: ITService;
  onClick: () => void;
}

export function ITServiceCard({ service, onClick }: ITServiceCardProps) {
  const Icon = service.icon;

  return (
    <button type="button" onClick={onClick} className="group block h-full w-full text-left">
      <Card
        padding="lg"
        className="flex h-full flex-col gap-4 transition-[transform,box-shadow,border-color] duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-brand-gold/60 group-hover:shadow-card-hover"
      >
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-primary-light text-brand-primary">
          <Icon
            className={cn("size-7 transition-transform duration-300 ease-out", HOVER_MOTION[service.hoverMotion])}
          />
        </span>

        <h3 className="text-lg">{service.name}</h3>
        <p className="flex-1 text-sm text-brand-muted">{service.description}</p>

        <ArrowRightIcon className="size-4 text-brand-primary transition-transform duration-300 ease-out group-hover:translate-x-1" />
      </Card>
    </button>
  );
}
