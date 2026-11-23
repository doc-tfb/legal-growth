import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Breadcrumb from "../components/Breadcrumb";
import Interactions from "../components/Interactions";
import { OrganizationSchema, BreadcrumbSchema } from "../components/Schema";

export const metadata: Metadata = {
  title: "Casos · Despachos acompañados por TFB Legal",
  description:
    "Casos reales de despachos de abogados: migración WordPress → stack propio, SEO técnico, atribución de leads, SEO local, Google Ads provincial, IA aplicada al despacho.",
  alternates: { canonical: "/casos/" },
  openGraph: {
    title: "Casos · TFB Legal",
    description:
      "Dos casos vivos en España (Gestores Concursales, Orejas Abogados) y un piloto mexicano por arrancar.",
    url: "/casos/",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
  },
};

export default function CasosHub() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Casos", url: "/casos/" },
        ]}
      />
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb items={[{ href: "/", label: "Inicio" }, { label: "Casos" }]} />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Casos</div>
              <h1 className="hero-title">Lo que ya hicimos con despachos reales.</h1>
              <p className="hero-sub">
                Dos casos vivos en España, un piloto en México por arrancar. Cada caso muestra el
                contexto, el problema y lo que ejecutamos con cifras honestas — no narrativas
                infladas.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/" className="btn btn-primary btn-arrow">Agendar diagnóstico</Link>
              </div>
            </div>
            <dl className="hero-aside">
              <dt>Casos activos</dt>
              <dd>2 live · 1 próximo</dd>
              <dt>Mercados</dt>
              <dd>España · México (próximo)</dd>
              <dt>Verticales</dt>
              <dd>Concursal · Civil · Fiscal</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <table className="casos-table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th className="hide-mobile">Qué hicimos</th>
                <th className="hide-mobile">Sector</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="caso-cliente">Gestores Concursales</div>
                  <div className="caso-descr">
                    Migración WordPress → stack propio (Vite + React + Sanity), SEO técnico y
                    atribución de leads al CRM. 0 pérdida de posicionamiento en el cutover.
                  </div>
                </td>
                <td className="hide-mobile"><span className="caso-chip">Web + SEO + CRM</span></td>
                <td className="hide-mobile"><span className="caso-chip">Concursal · ES</span></td>
                <td>
                  <Link href="/casos/gce-gestores-concursales/" className="caso-link">Leer caso</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="caso-cliente">Orejas Abogados</div>
                  <div className="caso-descr">
                    SEO local + Google Ads provincial + Meta Ads para un despacho fuera del eje
                    Madrid–Barcelona. Posiciona en Asturias y nacional.
                  </div>
                </td>
                <td className="hide-mobile"><span className="caso-chip">SEO + Ads</span></td>
                <td className="hide-mobile"><span className="caso-chip">Civil · Oviedo</span></td>
                <td>
                  <Link href="/casos/orj-orejas-abogados/" className="caso-link">Leer caso</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="caso-cliente">Piloto MX</div>
                  <div className="caso-descr">
                    IA aplicada al despacho fiscal en CDMX: redacción asistida, automatización
                    documental, CRM. Lanzamiento previsto para mes 13.
                  </div>
                </td>
                <td className="hide-mobile"><span className="caso-chip">IA + CRM</span></td>
                <td className="hide-mobile"><span className="caso-chip">Fiscal · CDMX</span></td>
                <td>
                  <span className="caso-link" style={{ color: "var(--muted-soft)" }}>Próximo</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>¿Tu despacho podría ser el próximo caso?</h3>
            <p>
              Trabajamos con despachos de 5 a 30 abogados que quieren crecer sin perder la calidad
              del oficio. Agendá 30 minutos y lo evaluamos.
            </p>
            <div className="cta-actions">
              <Link href="/contacto/" className="btn btn-primary btn-arrow">Agendar consulta</Link>
              <Link href="/metodologia/" className="btn btn-ghost">Ver metodología</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
