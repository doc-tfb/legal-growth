/**
 * JSON-LD helpers para SEO estructurado (schema.org).
 * Server components, se renderizan como <script type="application/ld+json">.
 */

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tfblegal.com";

/** Base Organization — aparece en TODAS las páginas */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "TFB Legal",
    alternateName: "TFB · Legal",
    legalName: "The Funnel Box OÜ",
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/og.png`,
    },
    description:
      "Consultoría de crecimiento para despachos de abogados medianos en España, México y Argentina.",
    areaServed: ["ES", "MX", "AR"],
    foundingDate: "2026",
    founder: [
      {
        "@type": "Person",
        name: "Gonzalo Castro",
        url: `${SITE}/nosotros/gonzalo-castro/`,
        jobTitle: "Co-fundador y director",
      },
      {
        "@type": "Person",
        name: "Carla Fresch Pons",
        url: `${SITE}/nosotros/carla-fresch-pons/`,
        jobTitle: "Co-fundadora",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "gonzalo@thefunnelbox.com",
      contactType: "customer support",
      areaServed: ["ES", "MX", "AR"],
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      // [COMPLETAR · LinkedIn de la marca]
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** WebSite — solo en Home */
export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "TFB Legal",
    inLanguage: "es-ES",
    publisher: { "@id": `${SITE}/#organization` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Breadcrumb list — para páginas no-home */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Person schema para bios */
export function PersonSchema({
  name,
  slug,
  jobTitle,
  description,
  sameAs = [],
}: {
  name: string;
  slug: string;
  jobTitle: string;
  description: string;
  sameAs?: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: `${SITE}/nosotros/${slug}/`,
    jobTitle,
    description,
    worksFor: { "@id": `${SITE}/#organization` },
    sameAs,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Service schema para páginas de servicio */
export function ServiceSchema({
  name,
  slug,
  description,
  serviceType,
}: {
  name: string;
  slug: string;
  description: string;
  serviceType: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url: `${SITE}/servicios/${slug}/`,
    serviceType,
    description,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: [
      { "@type": "Country", name: "España" },
      { "@type": "Country", name: "México" },
      { "@type": "Country", name: "Argentina" },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Despachos de abogados medianos (5-30 abogados)",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** WebPage schema para páginas genéricas (blog shell, lead magnet) */
export function WebPageSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE}${url}`,
    isPartOf: { "@id": `${SITE}/#website` },
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: "es-ES",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** FAQ schema */
export function FAQSchema({
  questions,
}: {
  questions: { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
