import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Breadcrumb from "../components/Breadcrumb";
import Interactions from "../components/Interactions";
import { OrganizationSchema, BreadcrumbSchema } from "../components/Schema";

export const metadata: Metadata = {
  title: "Servicios · Marketing, consultoría, formación y speaker",
  description:
    "Cuatro servicios para despachos medianos: marketing jurídico, consultoría estratégica, formación y speaker. Modelos claros, ejecución real, atribución al cliente firmado.",
  alternates: { canonical: "/servicios/" },
  openGraph: {
    title: "Servicios · TFB Legal",
    description:
      "Marketing jurídico, consultoría, formación y speaker. Cuatro servicios bajo una misma firma. ES · MX · AR.",
    url: "/servicios/",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
  },
};

const SERVICES = [
  {
    slug: "marketing-juridico",
    name: "Marketing jurídico",
    tag: "Retainer",
    for: "Para despachos que necesitan generar leads cualificados de forma predecible y dejar de depender del boca a boca.",
    includes: [
      "SEO técnico y de contenido (6 pillars + cluster)",
      "Google Ads con landings dedicadas por servicio",
      "LinkedIn Ads + outreach manual al ICP",
      "Email marketing segmentado + nurturing",
      "Web optimizada (Core Web Vitals + CRO)",
      "Atribución al CRM: cada lead con origen",
    ],
    specs: [
      ["Stack", "GA4 · HubSpot · Sanity · Vercel"],
      ["Modelo", "Setup + retainer mensual"],
      ["Inversión", "Desde 2.500 €/mes"],
      ["Primeros resultados", "90 días"],
    ],
  },
  {
    slug: "consultoria-estrategica",
    name: "Consultoría estratégica",
    tag: "Proyecto",
    for: "Para socios-directores saturados: diagnóstico de crecimiento, pricing, estructura comercial y palancas priorizadas.",
    includes: [
      "Análisis de rentabilidad por cliente y por servicio",
      "Revisión del pricing actual y propuesta nueva",
      "Diagnóstico del pipeline comercial",
      "Mapa de palancas priorizadas (impacto × esfuerzo)",
      "Plan trimestral con KPIs y responsables",
      "Opcional: 3 meses de acompañamiento quincenal",
    ],
    specs: [
      ["Entregable", "Documento + plan + KPIs"],
      ["Modelo", "Proyecto cerrado"],
      ["Inversión", "Desde 4.500 €"],
      ["Duración", "30 días"],
    ],
  },
  {
    slug: "formacion-para-despachos",
    name: "Formación",
    tag: "In-company · Abierto",
    for: "Para despachos que quieren profesionalizar al equipo en marketing, gestión del despacho e IA aplicada.",
    includes: [
      "Posicionamiento y marca personal del socio",
      "LinkedIn para abogados: contenido + outreach",
      "IA aplicada al despacho: redacción, análisis, CRM",
      "Pricing y negociación comercial",
      "Formato in-company cerrado (8–20 personas)",
      "O programa abierto con partner académico",
    ],
    specs: [
      ["Formato", "1 día intensivo · 4 sesiones de 2h"],
      ["Modelo", "Fee cerrado por programa"],
      ["Inversión", "Desde 3.500 €"],
      ["Material", "Propio + plantillas"],
    ],
  },
  {
    slug: "speaker-conferencias",
    name: "Speaker",
    tag: "Evento",
    for: "Keynotes y ponencias en congresos legaltech, programas académicos y eventos corporativos.",
    includes: [
      "Marketing jurídico (ES / MX / AR)",
      "IA aplicada al despacho y al ejercicio del derecho",
      "Gestión y escalado de despachos medianos",
      "Experiencia real de ejecución en el sector legal",
      "Keynote 20–60 min · workshop opcional",
      "Material y slides propios, nunca enlatado",
    ],
    specs: [
      ["Idiomas", "Español · Inglés"],
      ["Formato", "Presencial · Online · Híbrido"],
      ["Fee", "A consultar"],
      ["Agenda", "Con 30 días de anticipación"],
    ],
  },
];

export default function ServiciosHub() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios/" },
        ]}
      />
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb items={[{ href: "/", label: "Inicio" }, { label: "Servicios" }]} />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Servicios</div>
              <h1 className="hero-title">
                Cuatro frentes, un solo responsable.
              </h1>
              <p className="hero-sub">
                Marketing jurídico, consultoría estratégica, formación y speaker. Se contratan por
                separado o integrados. Mismo equipo detrás en los cuatro.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/" className="btn btn-primary btn-arrow">Agendar diagnóstico</Link>
                <Link href="/metodologia/" className="btn btn-ghost">Ver metodología</Link>
              </div>
            </div>
            <dl className="hero-aside">
              <dt>Operamos en</dt>
              <dd>España · México · Argentina</dd>
              <dt>Para</dt>
              <dd>Despachos de 5 a 30 abogados</dd>
              <dt>Diagnóstico inicial</dt>
              <dd>Gratuito · 30 minutos</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="services" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <article className="service" key={s.slug}>
              <div className="service-head">
                <h3 className="service-name">{s.name}</h3>
                <span className="service-tag">{s.tag}</span>
              </div>
              <p className="service-for">{s.for}</p>
              <ul className="service-includes">
                {s.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <dl className="service-specs">
                {s.specs.map(([k, v]) => (
                  <div className="spec-row" key={k}>
                    <dt className="spec-k">{k}</dt>
                    <dd className="spec-v">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link href={`/servicios/${s.slug}/`} className="service-cta">Ver servicio</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>¿Cuál encaja con tu despacho?</h3>
            <p>
              Si no estás seguro, agendá 30 minutos. Te decimos cuál empezar primero según el
              momento de tu despacho. Sin promesas infladas.
            </p>
            <div className="cta-actions">
              <Link href="/contacto/" className="btn btn-primary btn-arrow">Agendar 30 minutos</Link>
              <a href="mailto:gonzalo@thefunnelbox.com" className="btn btn-ghost">Escribir por email</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
