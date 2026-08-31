"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "@/components/icons";
import { ComingSoonModal } from "@/components/ui/ComingSoonModal";
import { accountLinkLabel, primaryNav } from "@/config/navigation";
import { useComingSoonModal } from "@/hooks/useComingSoonModal";
import { getBusBookingBaseUrl } from "@/lib/busBooking";
import { resolveNavAction } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const modal = useComingSoonModal();
  const accountHref = getBusBookingBaseUrl();

  return (
    <header className="sticky top-0 z-30 border-b border-brand-border bg-brand-surface/95 shadow-header backdrop-blur">
      <div className="container-brand flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const action = resolveNavAction(item);

              if (action.kind === "link") {
                const isActive = !action.href.includes("#") && pathname === action.href;
                return (
                  <li key={item.id}>
                    <Link
                      href={action.href}
                      className={cn(
                        "inline-flex h-11 items-center rounded-lg px-3 text-sm font-semibold transition-colors duration-150 ease-out hover:bg-brand-primary-light hover:text-brand-primary",
                        isActive ? "text-brand-primary" : "text-brand-text",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => modal.open(action.service)}
                    className="inline-flex h-11 items-center rounded-lg px-3 text-sm font-semibold text-brand-muted transition-colors duration-150 ease-out hover:bg-brand-primary-light hover:text-brand-primary"
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={accountHref}
            className="hidden h-11 items-center rounded-lg px-4 text-sm font-semibold text-brand-primary transition-colors duration-150 ease-out hover:bg-brand-primary-light md:inline-flex"
          >
            {accountLinkLabel}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="inline-flex size-11 items-center justify-center rounded-lg text-brand-text transition-colors duration-150 ease-out hover:bg-brand-primary-light hover:text-brand-primary md:hidden"
          >
            <MenuIcon className="size-6" />
          </button>
        </div>
      </div>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={primaryNav}
        accountHref={accountHref}
        accountLabel={accountLinkLabel}
        onOpenServiceModal={modal.open}
      />

      {modal.activeService && (
        <ComingSoonModal
          serviceName={modal.activeService.name}
          icon={modal.activeService.icon}
          description={modal.activeService.description}
          onClose={modal.close}
        />
      )}
    </header>
  );
}
