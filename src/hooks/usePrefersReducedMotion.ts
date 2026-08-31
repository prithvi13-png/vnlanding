import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export function usePrefersReducedMotion(): boolean {
  // Must start false to exactly match the server's output (which has no
  // window, so no way to know the real preference) — reading the real
  // value here on first render would cause a hydration mismatch for any
  // client that actually prefers reduced motion. Applying it after mount
  // instead is an intentional, necessary exception to "avoid setState in
  // an effect": this value is only knowable client-side, post-hydration.
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- see comment above
    setReduced(mql.matches);

    function handleChange(event: MediaQueryListEvent) {
      setReduced(event.matches);
    }

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}
