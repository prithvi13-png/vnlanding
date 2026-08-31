import { AlertCircleIcon } from "@/components/icons";

interface PolicySection {
  heading: string;
  body: string;
}

interface PolicyLayoutProps {
  title: string;
  intro: string;
  sections: PolicySection[];
}

/**
 * Shared shell for Privacy/Terms/Refund pages: a real heading + section
 * structure, but every body paragraph is explicitly labelled placeholder
 * copy (and a banner repeats that) so this can't ship as real legal text
 * by accident.
 */
export function PolicyLayout({ title, intro, sections }: PolicyLayoutProps) {
  return (
    <div className="container-brand py-16 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <div>
          <h1 className="text-4xl">{title}</h1>
          <p className="mt-3 text-brand-muted">{intro}</p>
        </div>

        <div
          role="note"
          className="flex items-start gap-3 rounded-xl border border-brand-danger/30 bg-brand-danger-bg p-4 text-brand-danger"
        >
          <AlertCircleIcon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold">Placeholder Content</p>
            <p className="mt-1">
              This page uses placeholder legal copy for layout and structure only. It must be replaced with
              content reviewed by Vriddhi Nexus Private Limited&apos;s legal counsel before this site goes live.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">{section.heading}</h2>
              <p className="text-brand-muted">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
