import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";
import { OrganizationSchema, BreadcrumbSchema, WebPageSchema } from "../../components/Schema";

export const metadata: Metadata = {
  title: "Cuánto cuesta el marketing para abogados · Benchmark 2026",
  description:
    "Rangos reales de presupuesto de marketing jurídico en España: SEO, Google Ads, LinkedIn y web. 22 páginas en PDF, gratuito. Datos de 40+ proyectos reales.",
  alternates: { canonical: "/recursos/benchmark-precios-marketing-juridico-2026/" },
  openGraph: {
    title: "Benchmark precios marketing jurídico 2026 · TFB Legal",
    description:
      "Qué paga un despacho mediano en España por SEO, Ads, LinkedIn y web. 22 páginas gratis.",
    url: "/recursos/benchmark-precios-marketing-juridico-2026/",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
  },
};

export default function LeadMagnetPage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Benchmark precios 2026", url: "/recursos/benchmark-precios-marketing-juridico-2026/" },
        ]}
      />
      <WebPageSchema
        title="Benchmark precios marketing jurídico 2026"
        description="Rangos reales de presupuesto de marketing para despachos medianos en España. 22 páginas en PDF, gratuito."
        url="/recursos/benchmark-precios-marketing-juridico-2026/"
      />
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { label: "Benchmark precios 2026" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Recurso gratuito · PDF 22 páginas</div>
              <h1 className="hero-title">Benchmark precios marketing jurídico 2026.</h1>
              <p className="hero-sub">
                Qué están pagando los despachos medianos en España por SEO, Google Ads, LinkedIn y
                web, ahora mismo. Rangos reales por tamaño de firma. Datos recogidos de 40+
                proyectos reales entre 2024 y 2026.
              </p>
            </div>
            <dl className="hero-aside">
              <dt>Formato</dt>
              <dd>PDF · 22 páginas</dd>
              <dt>Idioma</dt>
              <dd>Español</dd>
              <dt>Mercado</dt>
              <dd>España (datos MX y AR en apéndice)</dd>
              <dt>Coste</dt>
              <dd>Gratuito</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Qué vas a encontrar.</h2>
          </div>
          <ul className="feature-list two-col-list">
            <li><strong>SEO retainer:</strong> rangos por tamaño de despacho y scope.</li>
            <li><strong>Google Ads:</strong> fee de gestión + inversión directa esperable.</li>
            <li><strong>LinkedIn:</strong> gestión mensual + campañas de contenido.</li>
            <li><strong>Web:</strong> rediseño vs construcción desde cero, por tipo de stack.</li>
            <li><strong>Email marketing:</strong> fee setup + mensual + inversión en software.</li>
            <li><strong>Consultoría:</strong> por hora, por proyecto, por retainer.</li>
            <li><strong>Formación in-company:</strong> fee cerrado por programa.</li>
            <li><strong>Apéndice:</strong> comparativa rápida ES / MX / AR.</li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Descargar el benchmark.</h2>
          </div>
          <form
            className="form-grid"
            id="magnetFormFull"
            action="/recursos/benchmark-precios-marketing-juridico-2026/gracias/"
            method="post"
          >
            <div className="form-field">
              <label htmlFor="emailMagnet">Email</label>
              <input
                id="emailMagnet"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="email@despacho.com"
              />
            </div>
            <div className="form-field">
              <label htmlFor="despachoMagnet">Despacho (opcional)</label>
              <input
                id="despachoMagnet"
                name="despacho"
                type="text"
                autoComplete="organization"
                placeholder="Nombre del despacho"
              />
            </div>
            <label className="form-check">
              <input type="checkbox" required />
              <span>
                He leído y acepto la{" "}
                <Link href="/politicas/politica-de-privacidad/">política de privacidad</Link>.
              </span>
            </label>
            <div className="form-field">
              <button type="submit" className="btn btn-primary btn-arrow">
                Enviarme el benchmark
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Qué hacemos con tu email.</h2>
          </div>
          <ul className="feature-list">
            <li>Te mandamos el PDF directo a tu bandeja en menos de 5 minutos.</li>
            <li>Recibís como máximo 2 emails adicionales en los próximos 30 días (aviso de nueva pieza del journal + 1 recordatorio del benchmark).</li>
            <li>Nada de secuencias largas, nada de ofertas automatizadas, nada de llamadas en frío.</li>
            <li>Podés darte de baja en cualquier momento con 1 clic.</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
