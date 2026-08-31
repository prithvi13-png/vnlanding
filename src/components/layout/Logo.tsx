import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Use "dark" on the deep-emerald footer/vision backgrounds. */
  variant?: "default" | "dark";
}

const LOGO_ASPECT_RATIO = 880 / 758;
const LOGO_HEIGHT = 40;

/** The mark is transparent and keeps its own true colors, so it works unchanged on light or dark backgrounds. */
export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="#home"
      className={cn(
        "inline-flex items-center gap-2.5 font-bold",
        variant === "dark" ? "text-white" : "text-brand-text",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={Math.round(LOGO_HEIGHT * LOGO_ASPECT_RATIO)}
        height={LOGO_HEIGHT}
        priority
        className="shrink-0"
      />
      <span className="text-lg leading-none tracking-tight sm:text-xl">{siteConfig.name}</span>
    </Link>
  );
}
