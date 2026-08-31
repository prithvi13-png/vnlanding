import type { SVGProps } from "react";

/**
 * Hand-drawn inline icon set (stroke-based, currentColor) — keeps the
 * dependency list free of an icon library. Every icon accepts standard
 * SVG props so callers can set className, aria-hidden, etc.
 */
function base(props: SVGProps<SVGSVGElement>) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function BusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="12" rx="2.5" />
      <path d="M3 13h18" />
      <path d="M7 17v2M17 17v2" />
      <path d="M7 9h3M14 9h3" />
    </svg>
  );
}

export function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M11.5 3 4 12.5l3.2.6L11 17l1-4 5.7-6.5c1-1.1 1.6-2.4 1.3-3-.5-.8-1.9-.4-3 .5L10.5 9 4.9 7.8" />
      <path d="M9 15.5 7 21l2.5-1 1-3" />
    </svg>
  );
}

export function TrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="3" width="14" height="13" rx="3" />
      <path d="M5 11h14" />
      <path d="M9 7h6" />
      <circle cx="9" cy="14" r="0.5" fill="currentColor" />
      <circle cx="15" cy="14" r="0.5" fill="currentColor" />
      <path d="M8 16 6 20M16 16l2 4" />
    </svg>
  );
}

export function CarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 16v-3.5L6 8h12l2 4.5V16" />
      <path d="M4 16h16" />
      <path d="M6 8l1.5-3.5h9L18 8" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="16.5" cy="16.5" r="1.5" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M14 8.5h2V5.5h-2c-1.9 0-3.5 1.6-3.5 3.5v2H8.5v3H10.5V21h3v-7h2l0.5-3h-2.5V9c0-.3.2-.5.5-.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="17" cy="7" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 4l7 8.7L4.3 20H6.6l5.6-6.1 4.4 6.1H20l-7.3-9.2L19.4 4h-2.3l-5.2 5.6L8 4Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V16M8 7.75v.01" />
      <path d="M11.5 16v-3.2c0-1.3 1-2.3 2.25-2.3S16 11.5 16 12.8V16" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5.5" />
    </svg>
  );
}

export function AlertCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v5" />
      <circle cx="12" cy="16.2" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function SpinnerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function SwapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M7 4v13M7 17l-3.5-3.5M7 17l3.5-3.5" />
      <path d="M17 20V7M17 7l3.5 3.5M17 7l-3.5 3.5" />
    </svg>
  );
}

export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 5 6v5.5c0 4.7 3 8 7 9 4-1 7-4.3 7-9V6Z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="6.5" width="17" height="12" rx="2.5" />
      <path d="M3.5 10.5h17" />
      <circle cx="16.5" cy="14.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.8 9.2 13 13l-3.8 1.8L11 11Z" />
    </svg>
  );
}

export function HeadsetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3.5" y="13" width="4" height="5.5" rx="1.5" />
      <rect x="16.5" y="13" width="4" height="5.5" rx="1.5" />
      <path d="M18.5 18.5v.5a3 3 0 0 1-3 3H13" />
    </svg>
  );
}

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M9 8 4.5 12 9 16" />
      <path d="M15 8l4.5 4-4.5 4" />
      <path d="M13 5l-2 14" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 3.5 8 12 12.5 20.5 8Z" />
      <path d="M3.5 12 12 16.5 20.5 12" />
      <path d="M3.5 16 12 20.5 20.5 16" />
    </svg>
  );
}

export function WorkflowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="4" width="6" height="6" rx="1.5" />
      <rect x="14.5" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M6.5 10v2a2 2 0 0 0 2 2H9M17.5 10v2a2 2 0 0 1-2 2h-.5" />
    </svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5c.6 3 1.9 4.3 4.9 4.9-3 .6-4.3 1.9-4.9 4.9-.6-3-1.9-4.3-4.9-4.9 3-.6 4.3-1.9 4.9-4.9Z" />
      <path d="M18.5 15c.3 1.5 1 2.2 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.3 2.2-1 2.5-2.5Z" />
    </svg>
  );
}

export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M7.5 17.5a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17.8 11 4 4 0 0 1 17 17.5Z" />
    </svg>
  );
}

export function NexusOrbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="3.25" />
      <circle cx="12" cy="12" r="8.25" strokeDasharray="2 3" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function CallIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 4h2.3l1.4 4-2 1.6a11.5 11.5 0 0 0 5.2 5.2l1.6-2 4 1.4v2.3c0 1.1-.9 2-2 2C9.8 18.5 5.5 14.2 4.5 7c0-1.1.9-2 2-2Z" />
    </svg>
  );
}
