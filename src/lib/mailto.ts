import { siteConfig } from "@/config/site";

interface MailtoOptions {
  subject?: string;
  body?: string;
}

/**
 * Builds a mailto: link to the company inbox — the only "contact form" this
 * site has. Uses encodeURIComponent (not URLSearchParams) so spaces come
 * through as %20 per RFC 6068, not a literal "+" in the subject line.
 */
export function buildMailtoLink({ subject, body }: MailtoOptions = {}): string {
  const parts: string[] = [];
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
  if (body) parts.push(`body=${encodeURIComponent(body)}`);

  const query = parts.join("&");
  return `mailto:${siteConfig.contactEmail}${query ? `?${query}` : ""}`;
}
