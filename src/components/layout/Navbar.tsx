"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "@/components/icons";
import { ComingSoonModal } from "@/components/modals/ComingSoonModal";
import { Button } from "@/components/ui/Button";
import { primaryNav, scrollSpySectionIds } from "@/config/navigation";
import { busService } from "@/config/services";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useComingSoonModal } from "@/hooks/useComingSoonModal";
import { useScrolled } from "@/hooks/useScrolled";
import { resolveServiceAction } from "@/lib/services";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const scrolled = useScrolled();
  const activeId = useActiveSection(scrollSpySectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);
  const modal = useComingSoonModal();
  const busAction = resolveServiceAction(busService);

  function handleBookBus() {
    modal.open(busService);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out",
        scrolled
          ? "border-b border-brand-border bg-brand-surface/80 shadow-header backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-brand flex items-center justify-between transition-[height] duration-300 ease-out",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex h-11 items-center rounded-lg px-3 text-sm font-semibold transition-colors duration-150 ease-out hover:bg-brand-primary-light hover:text-brand-primary",
                    activeId === item.id ? "text-brand-primary" : "text-brand-text",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <Button href="#services" variant="outline" size="sm">
              Explore Services
            </Button>

            {busAction.kind === "link" ? (
              <Button href={busAction.href} size="sm">
                Book Bus
              </Button>
            ) : (
              <Button size="sm" onClick={handleBookBus}>
                Book Bus
              </Button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="inline-flex size-11 items-center justify-center rounded-lg text-brand-text transition-colors duration-150 ease-out hover:bg-brand-primary-light hover:text-brand-primary lg:hidden"
          >
            <MenuIcon className="size-6" />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} items={primaryNav} onBookBus={handleBookBus} />

      {busAction.kind === "modal" && modal.activeService && (
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
