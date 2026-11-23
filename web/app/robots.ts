import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tfblegal.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/contacto/gracias/", "/recursos/*/gracias/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
