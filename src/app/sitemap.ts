import type { MetadataRoute } from "next";
import { nav, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...nav.map((n) => n.href), ...services.map((s) => `/services/${s.slug}`), "/privacy"];
  return paths.map((p) => ({
    url: `${site.url}${p === "/" ? "" : p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
