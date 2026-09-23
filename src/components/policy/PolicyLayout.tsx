import Link from "next/link";

import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";

export interface PolicySection {
  heading: string;
  /** Paragraphs, rendered in order. */
  body: string[];
  /** Optional bullets shown after the paragraphs. */
  bullets?: string[];
  /** Optional two-column table, e.g. the cancellation slabs. */
  table?: {
    columns: [string, string];
    rows: readonly { readonly window: string; readonly charge: string }[];
  };
}

interface PolicyLayoutProps {
  title: string;
  intro: string;
  sections: PolicySection[];
}

/**
 * Shared shell for the Terms/Privacy/Cancellation/Refund pages. Bodies are
 * arrays so a section can run to several paragraphs without each page
 * reinventing the markup.
 */
export function PolicyLayout({ title, intro, sections }: PolicyLayoutProps) {
  return (
    <div className="container-brand py-16 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <header className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-sm font-medium text-brand-primary transition-colors duration-150 ease-out hover:text-brand-emerald-deep"
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl">{title}</h1>
          <p className="text-brand-muted">{intro}</p>
          <p className="text-sm text-brand-muted">Last updated: {legalConfig.lastUpdated}</p>
        </header>

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">{section.heading}</h2>

              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-brand-muted">
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="flex list-disc flex-col gap-2 pl-5 text-brand-muted marker:text-brand-gold">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="overflow-x-auto">
                  <table className="mt-1 w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-brand-border">
                        {section.table.columns.map((column) => (
                          <th key={column} className="py-3 pr-4 font-semibold text-brand-text">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.window} className="border-b border-brand-border/60">
                          <td className="py-3 pr-4 text-brand-muted">{row.window}</td>
                          <td className="py-3 pr-4 font-medium text-brand-text">{row.charge}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        <footer className="rounded-xl border border-brand-border bg-brand-surface p-5 text-sm text-brand-muted">
          <p className="font-semibold text-brand-text">Questions about this policy?</p>
          <p className="mt-1">
            Write to{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-medium text-brand-primary hover:underline"
            >
              {siteConfig.contactEmail}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
              className="font-medium text-brand-primary hover:underline"
            >
              {siteConfig.contactPhone}
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
