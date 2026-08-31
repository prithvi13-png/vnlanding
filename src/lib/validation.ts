export function isBlank(value: string): boolean {
  return value.trim().length === 0;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Validates a 10-digit Indian mobile number, ignoring spaces/dashes. */
export function isValidPhone(value: string): boolean {
  return /^[6-9]\d{9}$/.test(value.replace(/[\s-]/g, ""));
}
