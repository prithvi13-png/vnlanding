import { todayDateString } from "./busBooking";

export function isBlank(value: string): boolean {
  return value.trim().length === 0;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Validates a 10-digit Indian mobile number, ignoring spaces/dashes. */
export function isValidIndianMobile(value: string): boolean {
  return /^[6-9]\d{9}$/.test(value.replace(/[\s-]/g, ""));
}

/** True when dateString (YYYY-MM-DD) is strictly before today — safe lexicographic compare. */
export function isPastDate(dateString: string): boolean {
  if (isBlank(dateString)) return false;
  return dateString < todayDateString();
}
