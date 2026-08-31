import type { NavItem } from "@/types/site";

/**
 * Header + mobile drawer navigation. Items with a `serviceId` are resolved
 * against config/services.ts at render time: "live" renders a link, anything
 * else opens ComingSoonModal — clicking "Bus" always lands on the same
 * homepage anchor, from any page.
 */
export const primaryNav: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "bus", label: "Bus", href: "/#bus-search", serviceId: "bus" },
  { id: "flights", label: "Flights", href: "#", serviceId: "flights" },
  { id: "trains", label: "Trains", href: "#", serviceId: "trains" },
  { id: "cars", label: "Cars", href: "#", serviceId: "cars" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "contact", label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "contact", label: "Contact Us", href: "/contact" },
];

export const footerSupportLinks: NavItem[] = [
  { id: "contact", label: "Contact", href: "/contact" },
  { id: "terms", label: "Terms & Conditions", href: "/terms" },
  { id: "privacy", label: "Privacy Policy", href: "/privacy-policy" },
  { id: "refund", label: "Refund Policy", href: "/refund-policy" },
];

/** Href is resolved at render time via lib/busBooking's getBusBookingBaseUrl(). */
export const accountLinkLabel = "Login / My Account";
