import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://higherlevelacct.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Add individual insight pages as they're created
    {
      url: `${baseUrl}/insight/1`,
      lastModified: new Date("2021-01-30"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/insight/2`,
      lastModified: new Date("2021-01-30"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
