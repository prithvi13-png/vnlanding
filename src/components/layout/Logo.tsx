import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Use "dark" on the deep-emerald footer/vision backgrounds. */
  variant?: "default" | "dark";
}

/**
 * Placeholder wordmark — the "VN" monogram is the single spot to swap for
 * a real logo (e.g. an <Image> tag) once brand assets are provided.
 */
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
      <span
        className={cn(
          "inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold",
          variant === "dark" ? "bg-brand-gold text-brand-text" : "bg-brand-primary text-white",
        )}
      >
        VN
      </span>
      <span className="text-lg leading-none tracking-tight sm:text-xl">{siteConfig.name}</span>
    </Link>
  );
}
