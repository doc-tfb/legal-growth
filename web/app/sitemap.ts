import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tfblegal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/servicios/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/marketing-juridico/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/consultoria-estrategica/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/formacion-para-despachos/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/servicios/speaker-conferencias/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/casos/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/casos/gce-gestores-concursales/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/casos/orj-orejas-abogados/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nosotros/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nosotros/gonzalo-castro/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nosotros/carla-fresch-pons/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/metodologia/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contacto/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/recursos/benchmark-precios-marketing-juridico-2026/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/politicas/aviso-legal/", priority: 0.2, changeFrequency: "yearly" },
    { path: "/politicas/politica-de-privacidad/", priority: 0.2, changeFrequency: "yearly" },
    { path: "/politicas/politica-de-cookies/", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
