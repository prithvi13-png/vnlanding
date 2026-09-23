import Link from "next/link";
import { CallIcon, MailIcon } from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { legalConfig, legalNav } from "@/config/legal";
import { primaryNav } from "@/config/navigation";
import { itServices } from "@/config/itServices";
import { travelServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const telHref = `tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`;

  return (
    <footer className="bg-brand-text text-white/70">
      <div className="container-brand grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo variant="dark" />
          <p className="max-w-xs text-sm text-white/60">{siteConfig.description}</p>

          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href={telHref}
                className="inline-flex items-center gap-2 text-white/70 transition-colors duration-150 ease-out hover:text-brand-gold"
              >
                <CallIcon className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.contactPhone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 text-white/70 transition-colors duration-150 ease-out hover:text-brand-gold"
              >
                <MailIcon className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.contactEmail}
              </a>
            </li>
          </ul>

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
                      className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-150 ease-out hover:border-brand-gold hover:text-brand-gold"
                    >
                      <Icon className="size-5" />
                    </a>
                  ) : (
                    <span
                      aria-label={`${social.label} — link not yet available`}
                      title={`${social.label} — link not yet available`}
                      className="inline-flex size-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 text-white/25"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Travel">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Travel</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {travelServices.map((service) => (
              <li key={service.id} className="flex items-center gap-2 text-sm text-white/60">
                {service.status === "live" && service.url ? (
                  <a href={service.url} className="transition-colors duration-150 ease-out hover:text-brand-gold">
                    {service.name}
                  </a>
                ) : (
                  <span>{service.name}</span>
                )}
                {service.status !== "live" && <Badge variant="coming-soon">Coming Soon</Badge>}
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Technology">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Technology</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {itServices.map((service) => (
              <li key={service.id} className="text-sm text-white/60">
                {service.name}
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Navigation">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Navigation</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {primaryNav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm text-white/60 transition-colors duration-150 ease-out hover:text-brand-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-white">Legal</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {legalNav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm text-white/60 transition-colors duration-150 ease-out hover:text-brand-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-brand flex flex-col gap-2 text-center text-xs text-white/40">
          <p>{legalConfig.registeredAddress}</p>
          <p>
            CIN: {legalConfig.cin} &middot; GSTIN: {legalConfig.gstin}
          </p>
          <p>
            © {year} {siteConfig.legalName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
