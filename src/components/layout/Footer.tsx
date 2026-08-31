import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { footerQuickLinks, footerSupportLinks } from "@/config/navigation";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-surface">
      <div className="container-brand grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="max-w-xs text-sm text-brand-muted">{siteConfig.description}</p>
          <ul className="flex items-center gap-2">
            {siteConfig.social.map((social) => {
              const Icon = social.icon;
              const isConfigured = social.href.length > 0;

              return (
                <li key={social.id}>
                  {isConfigured ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-brand-border text-brand-muted transition-colors duration-150 ease-out hover:border-brand-primary hover:text-brand-primary"
                    >
                      <Icon className="size-5" />
                    </a>
                  ) : (
                    <span
                      aria-label={`${social.label} — link not yet available`}
                      title={`${social.label} — link not yet available`}
                      className="inline-flex size-11 cursor-not-allowed items-center justify-center rounded-full border border-brand-border text-brand-border"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-text">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {footerQuickLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm text-brand-muted transition-colors duration-150 ease-out hover:text-brand-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-text">Services</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.id} className="flex items-center gap-2 text-sm text-brand-muted">
                {service.status === "live" ? (
                  <Link
                    href={service.url ?? "#"}
                    className="transition-colors duration-150 ease-out hover:text-brand-primary"
                  >
                    {service.name}
                  </Link>
                ) : (
                  <span>{service.name}</span>
                )}
                {service.status !== "live" && <Badge variant="coming-soon">Coming Soon</Badge>}
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Support">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-text">Support</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {footerSupportLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm text-brand-muted transition-colors duration-150 ease-out hover:text-brand-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-brand-border py-6">
        <p className="container-brand text-center text-xs text-brand-muted">
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
