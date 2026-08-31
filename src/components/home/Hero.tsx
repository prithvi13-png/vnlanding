export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-primary-light to-brand-background pb-24 pt-16 sm:pb-32 sm:pt-24">
      <div className="container-brand flex flex-col items-center gap-4 text-center">
        <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl">Your Journey. One Platform.</h1>
        <p className="max-w-xl text-base text-brand-muted sm:text-lg">
          Book bus tickets in minutes today — flights, trains and cars are on the way, all from one place.
        </p>
      </div>
    </section>
  );
}
