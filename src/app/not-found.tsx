import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="container-brand flex flex-col items-center gap-6 py-24 text-center sm:py-32">
      <span className="text-sm font-semibold uppercase tracking-wide text-brand-primary">Error 404</span>
      <h1 className="text-4xl sm:text-5xl">Page Not Found</h1>
      <p className="max-w-md text-brand-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Button href="/" variant="primary" size="lg">
        Back to Home
      </Button>
    </div>
  );
}
