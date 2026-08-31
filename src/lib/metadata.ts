import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadataInput {
  /** Plain string gets the root layout's " | Vriddhi Nexus" template; `{ absolute }` bypasses it. */
  title: string | { absolute: string };
  description: string;
  /** Route path, e.g. "/about". Use "" for the homepage. */
  path: string;
}

function resolveFullTitle(title: PageMetadataInput["title"]): string {
  return typeof title === "string" ? `${title} | ${siteConfig.name}` : title.absolute;
}

/**
 * Builds consistent per-page metadata (canonical URL, OpenGraph, Twitter
 * card) from one small input. Next.js doesn't deep-merge nested metadata
 * objects across layouts/pages, so without this helper every page would
 * have to repeat the same openGraph/twitter boilerplate to avoid losing it.
 */
export function buildMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = resolveFullTitle(title);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
