import type { MetadataRoute } from "next";
import { devotionals, categories } from "@/data/devotionals";

const siteUrl = "https://www.revivalgrace.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/devotionals",
    "/topics",
    "/contact",
    "/donate",
    "/statement-of-belief",
    "/privacy-policy",
    "/terms-conditions",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${siteUrl}/devotionals/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const devotionalPages = devotionals.map((d) => ({
    url: `${siteUrl}/devotionals/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...devotionalPages];
}
