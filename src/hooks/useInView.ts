import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Backs every scroll-reveal (FadeIn/FadeUp/StaggerItem): true once the
 * element has entered the viewport, permanently. When the user prefers
 * reduced motion, it returns true immediately without waiting on the
 * observer, so content never depends on scroll position for visibility.
 */
export function useInView<T extends HTMLElement>({ threshold = 0.2, rootMargin = "0px 0px -10% 0px" }: UseInViewOptions = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold, rootMargin]);

  return { ref, inView: prefersReducedMotion || inView };
}
