import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { SpinnerIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "accent" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  external?: boolean;
  type?: undefined;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

interface NativeButtonProps extends CommonProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-dark shadow-card hover:shadow-card-hover",
  // Emerald surface with a gold underline — "emerald and gold" without gold text-on-white.
  accent:
    "bg-brand-primary text-white border-b-2 border-brand-gold hover:bg-brand-primary-dark shadow-card hover:shadow-card-hover",
  outline:
    "bg-brand-surface text-brand-primary border border-brand-border hover:border-brand-primary hover:bg-brand-primary-light",
  ghost: "bg-transparent text-brand-primary hover:bg-brand-primary-light",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-11 px-4 text-sm gap-1.5",
  md: "h-12 px-6 text-base gap-2",
  lg: "h-14 px-8 text-base sm:text-lg gap-2",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center rounded-xl font-semibold transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    isLoading = false,
    className,
    children,
    disabled,
  } = props;

  const classes = cn(
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {isLoading && <SpinnerIcon className="size-4 animate-spin" aria-hidden="true" />}
      {children}
    </>
  );

  if (props.href !== undefined) {
    const { href, external, onClick } = props;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
          aria-label={props["aria-label"]}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={props["aria-label"]}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", onClick } = props;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-label={props["aria-label"]}
    >
      {content}
    </button>
  );
}
