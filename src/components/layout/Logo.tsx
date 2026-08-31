import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Placeholder wordmark — the "VN" monogram is the single spot to swap for
 * a real logo (e.g. an <Image> tag) once brand assets are provided.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 font-bold text-brand-text", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-sm font-extrabold text-white">
        VN
      </span>
      <span className="text-lg leading-none tracking-tight sm:text-xl">{siteConfig.name}</span>
    </Link>
  );
}
