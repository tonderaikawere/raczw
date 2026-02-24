import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = [
    "",
    "/about",
    "/branches",
    "/sermons",
    "/events",
    "/contact",
    "/donate",
    "/beliefs",
    "/leadership",
    "/ministries",
    "/testimonials",
    "/prayer",
    "/gallery",
    "/blog",
    "/resources",
    "/more",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
