import Link from "next/link";

import { legalConfig } from "@/config/legal";
import { siteConfig } from "@/config/site";

/** A block of prose: paragraphs, then bullets, then an optional table. */
export interface PolicyBlock {
  body?: string[];
  bullets?: string[];
  table?: {
    columns: [string, string];
    rows: readonly { readonly window: string; readonly charge: string }[];
  };
}

export interface PolicySubsection extends PolicyBlock {
  /** Omitted for a continuation block that carries on from the text above it. */
  heading?: string;
}

export interface PolicySection extends PolicyBlock {
  heading: string;
  /** Lettered or named sub-parts, e.g. "A. Personal and Contact Information". */
  subsections?: PolicySubsection[];
}

interface PolicyLayoutProps {
  title: string;
  intro: string;
  sections: PolicySection[];
  /** Overrides the shared date when a document carries its own. */
  lastUpdated?: string;
  effectiveDate?: string;
  /** Replaces the default "questions about this policy" footer. */
  footer?: React.ReactNode;
}

function Blocks({ block }: { block: PolicyBlock }) {
  return (
    <>
      {block.body?.map((paragraph) => (
        <p key={paragraph} className="text-brand-muted">
          {paragraph}
        </p>
      ))}

      {block.bullets && (
        <ul className="flex list-disc flex-col gap-2 pl-5 text-brand-muted marker:text-brand-gold">
          {block.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {block.table && (
        <div className="overflow-x-auto">
          <table className="mt-1 w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-brand-border">
                {block.table.columns.map((column) => (
                  <th key={column} className="py-3 pr-4 font-semibold text-brand-text">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row) => (
                <tr key={row.window} className="border-b border-brand-border/60">
                  <td className="py-3 pr-4 text-brand-muted">{row.window}</td>
                  <td className="py-3 pr-4 font-medium text-brand-text">{row.charge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

/**
 * Shared shell for the Terms/Privacy/Cancellation/Refund pages. Bodies are
 * arrays so a section can run to several paragraphs, and sections may carry
 * lettered subsections, without each page reinventing the markup.
 */
export function PolicyLayout({
  title,
  intro,
  sections,
  lastUpdated,
  effectiveDate,
  footer,
}: PolicyLayoutProps) {
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
          <p className="text-sm text-brand-muted">
            {effectiveDate && <>Effective date: {effectiveDate} &middot; </>}
            Last updated: {lastUpdated ?? legalConfig.lastUpdated}
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">{section.heading}</h2>
              <Blocks block={section} />

              {section.subsections?.map((subsection, index) => (
                <div
                  key={subsection.heading ?? `continuation-${index}`}
                  className="mt-2 flex flex-col gap-2"
                >
                  {subsection.heading && (
                    <h3 className="font-semibold text-brand-text">{subsection.heading}</h3>
                  )}
                  <Blocks block={subsection} />
                </div>
              ))}
            </section>
          ))}
        </div>

        {footer ?? (
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
        )}
      </div>
    </div>
  );
}
