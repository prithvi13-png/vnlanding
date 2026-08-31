import { ArrowRightIcon } from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { TravelService } from "@/types/service";

const HOVER_MOTION: Record<TravelService["hoverMotion"], string> = {
  "slide-x": "group-hover:translate-x-1",
  "diagonal-up": "group-hover:-translate-y-1 group-hover:translate-x-1",
  forward: "group-hover:translate-x-1.5 group-hover:scale-105",
};

interface TravelServiceCardProps {
  service: TravelService;
  /** Present when the service is live and has a real URL — renders as a link. */
  href?: string;
  /** Present otherwise — opens ComingSoonModal. */
  onClick?: () => void;
}

export function TravelServiceCard({ service, href, onClick }: TravelServiceCardProps) {
  const Icon = service.icon;
  const isLive = Boolean(href);

  const content = (
    <Card
      padding="lg"
      className="flex h-full flex-col gap-4 transition-[transform,box-shadow,border-color] duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-brand-gold/60 group-hover:shadow-card-hover"
    >
      <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-primary-light text-brand-primary">
        <Icon
          className={cn("size-7 transition-transform duration-300 ease-out", HOVER_MOTION[service.hoverMotion])}
        />
      </span>

      <h3 className="text-xl">{service.name}</h3>

      {isLive ? (
        <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-primary">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-primary/60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-brand-primary" />
          </span>
          Available Now
        </span>
      ) : (
        <Badge variant="coming-soon" className="w-fit">
          Launching Soon
        </Badge>
      )}

      <p className="flex-1 text-sm text-brand-muted">{service.description}</p>

      <span className="inline-flex items-center gap-1.5 font-semibold text-brand-primary">
        {isLive ? "Book Bus" : "Notify Me"}
        <ArrowRightIcon className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      </span>
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="group block h-full" aria-label={`${service.name} — currently available`}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      aria-label={`${service.name} — coming soon`}
      className="group block h-full w-full text-left"
    >
      {content}
    </button>
  );
}
