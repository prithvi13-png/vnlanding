import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const STATIC_ROUTES = ["", "/about", "/contact", "/privacy-policy", "/terms", "/refund-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return STATIC_ROUTES.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
  }));
}
