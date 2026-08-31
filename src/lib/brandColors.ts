/**
 * Raw brand hex values for the few contexts that can't read CSS custom
 * properties — next/og's Satori renderer (icon.tsx, opengraph-image.tsx)
 * runs outside our stylesheet entirely. globals.css is still the design
 * system's source of truth; keep these in sync with it by hand.
 */
export const BRAND_HEX = {
  primary: "#0B6E4F",
  gold: "#D4AF37",
  surface: "#FFFFFF",
} as const;
