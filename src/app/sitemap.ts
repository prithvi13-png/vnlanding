import type { MetadataRoute } from "next";
import { legalNav } from "@/config/legal";
import { siteConfig } from "@/config/site";

// Derived from the footer's Legal column so a new policy page is listed automatically.
const STATIC_ROUTES = ["", ...legalNav.map((item) => item.href)];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return STATIC_ROUTES.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
  }));
}
