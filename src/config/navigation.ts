import type { NavItem } from "@/types/site";

/**
 * Single-page scroll targets shared by the navbar, mobile drawer, and the
 * footer's Navigation column.
 */
export const primaryNav: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "travel", label: "Travel", href: "#travel" },
  { id: "technology", label: "IT Services", href: "#technology" },
  { id: "about", label: "About", href: "#about" },
];

/** Section ids the navbar's scroll-spy watches, in document order. */
export const scrollSpySectionIds = primaryNav.map((item) => item.id);
