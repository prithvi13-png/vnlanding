import { CheckCircleIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const HIGHLIGHTS = [
  "Works on any device — phone, tablet or desktop",
  "No downloads or account sign-up required to search",
  "Same fast, secure booking experience every time",
];

export function AppExperience() {
  return (
    <section className="bg-brand-surface py-section-sm sm:py-section">
      <div className="container-brand grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Digital First"
            title="Travel Made Simpler"
            description="Everything you need for hassle-free travel booking, right from your browser — no app to install."
          />

          <ul className="flex flex-col gap-3">
            {HIGHLIGHTS.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-brand-muted">
                <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-brand-primary" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative illustration only — no mobile app exists. */}
        <svg viewBox="0 0 360 420" role="img" aria-label="" aria-hidden="true" className="mx-auto w-full max-w-sm">
          <rect x="10" y="10" width="340" height="400" rx="28" className="fill-brand-surface stroke-brand-border" strokeWidth={2} />
          <circle cx="40" cy="40" r="5" className="fill-brand-border" />
          <circle cx="58" cy="40" r="5" className="fill-brand-border" />
          <circle cx="76" cy="40" r="5" className="fill-brand-border" />

          <rect x="30" y="64" width="300" height="140" rx="20" className="fill-brand-primary-light" />
          <rect x="50" y="90" width="140" height="14" rx="7" className="fill-brand-primary" />
          <rect x="50" y="114" width="220" height="10" rx="5" className="fill-brand-primary opacity-40" />

          <rect x="30" y="224" width="300" height="166" rx="20" className="fill-brand-surface stroke-brand-border" strokeWidth={2} />
          <rect x="50" y="250" width="260" height="36" rx="10" className="fill-brand-background stroke-brand-border" strokeWidth={1.5} />
          <rect x="50" y="298" width="260" height="36" rx="10" className="fill-brand-background stroke-brand-border" strokeWidth={1.5} />
          <rect x="50" y="346" width="120" height="30" rx="15" className="fill-brand-primary" />
          <rect x="182" y="352" width="40" height="6" rx="3" className="fill-brand-gold" />
        </svg>
      </div>
    </section>
  );
}
