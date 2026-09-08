import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
