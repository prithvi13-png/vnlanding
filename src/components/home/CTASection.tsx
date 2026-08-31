import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-brand-primary py-section-sm sm:py-section">
      <div className="container-brand flex flex-col items-center gap-5 text-center">
        <h2 className="max-w-2xl text-3xl text-white sm:text-4xl">Ready for Your Next Journey?</h2>
        <span className="h-1 w-16 rounded-full bg-brand-gold" aria-hidden="true" />
        <p className="max-w-xl text-white/85">Book your bus tickets today — more ways to travel are on the way.</p>
        <Button href="/#bus-search" variant="outline" size="lg" className="mt-2">
          Book Now
        </Button>
      </div>
    </section>
  );
}
