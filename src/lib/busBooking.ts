/**
 * Every bus entry point in the app goes through this file — it is the only
 * place that knows about the bus booking subdomain's URL shape.
 */

/** Safe no-op href used when NEXT_PUBLIC_BUS_BOOKING_URL isn't configured. Never `undefined`. */
const FALLBACK_BASE_URL = "#";

export interface BusSearchParams {
  from: string;
  to: string;
  /** A Date, or a string already in YYYY-MM-DD form. */
  date: Date | string;
}

/** Base URL of the bus booking subdomain, trailing slash stripped. Falls back to "#" if unset. */
export function getBusBookingBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_BUS_BOOKING_URL;
  if (!configured) return FALLBACK_BASE_URL;
  return configured.replace(/\/+$/, "");
}

export function isBusBookingConfigured(): boolean {
  return getBusBookingBaseUrl() !== FALLBACK_BASE_URL;
}

/** Formats a Date as YYYY-MM-DD using local date parts (never UTC-shifted). */
export function formatSearchDate(date: Date | string): string {
  if (typeof date === "string") return date;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Today's date as YYYY-MM-DD, for min-date validation on the journey date input. */
export function todayDateString(): string {
  return formatSearchDate(new Date());
}

/**
 * Builds `${BASE}/search?from=...&to=...&date=YYYY-MM-DD` with encoded params.
 * If the base URL isn't configured, returns the safe fallback instead of a
 * broken deep link.
 */
export function buildBusSearchUrl({ from, to, date }: BusSearchParams): string {
  const base = getBusBookingBaseUrl();
  if (base === FALLBACK_BASE_URL) return base;

  const params = new URLSearchParams({
    from,
    to,
    date: formatSearchDate(date),
  });

  return `${base}/search?${params.toString()}`;
}

/** URL for the "Login / My Account" link — `${BASE}/login` on the bus platform. */
export function getBusLoginUrl(): string {
  const base = getBusBookingBaseUrl();
  if (base === FALLBACK_BASE_URL) return base;
  return `${base}/login`;
}
