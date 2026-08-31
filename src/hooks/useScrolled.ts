import { useEffect, useState } from "react";

/** True once the page has scrolled past `threshold` — drives the navbar's glass/blur transition. */
export function useScrolled(threshold = 24): boolean {
  // Starts false to match SSR (no window server-side); a page that loads
  // already scrolled (e.g. restored scroll position) gets corrected in the
  // effect below, after hydration — see usePrefersReducedMotion for why
  // this can't be a lazy initializer instead.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > threshold);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
