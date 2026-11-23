import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Breadcrumb from "../components/Breadcrumb";
import Interactions from "../components/Interactions";
import { OrganizationSchema, BreadcrumbSchema } from "../components/Schema";

export const metadata: Metadata = {
  title: "Nosotros · Gonzalo Castro & Carla Fresch Pons",
  description:
    "Dos personas detrás de la firma: Gonzalo Castro (The Funnel Box · marketing e IA) y Carla Fresch Pons (ex-abogada del Poder Judicial de Argentina). Co-fundadores de TFB Legal.",
  alternates: { canonical: "/nosotros/" },
  openGraph: {
    title: "Nosotros · TFB Legal",
    description:
      "Gonzalo Castro y Carla Fresch Pons: dos trayectorias complementarias detrás de la firma.",
    url: "/nosotros/",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
  },
};

export default function NosotrosHub() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Nosotros", url: "/nosotros/" },
        ]}
      />
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb items={[{ href: "/", label: "Inicio" }, { label: "Nosotros" }]} />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Firma</div>
              <h1 className="hero-title">Dos personas, dos trayectorias que se complementan.</h1>
              <p className="hero-sub">
                Un consultor de marketing con 10+ años de agencia detrás. Una ex-abogada con más de
                una década en el Poder Judicial de Argentina. La firma la ponen las dos personas;
                The Funnel Box opera por detrás como brazo ejecutor.
              </p>
            </div>
            <dl className="hero-aside">
              <dt>Co-fundadores</dt>
              <dd>Gonzalo Castro &amp; Carla Fresch Pons</dd>
              <dt>Impulsada por</dt>
              <dd>The Funnel Box · Brandly</dd>
              <dt>Operativa desde</dt>
              <dd>2026</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="services" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="services-grid">
          <article className="service">
            <div className="service-head">
              <h3 className="service-name">Gonzalo Castro</h3>
              <span className="service-tag">Ejecución</span>
            </div>
            <p className="service-for">
              Director y fundador de The Funnel Box. Marketing digital, SEO, Google Ads, IA
              aplicada y escalado comercial.
            </p>
            <ul className="service-includes">
              <li>10+ años dirigiendo proyectos de marketing para profesionales exigentes</li>
              <li>Experiencia con despachos del sector legal vía The Funnel Box</li>
              <li>Experto en atribución end-to-end, CRM y automatización</li>
              <li>Speaker en marketing jurídico e IA</li>
              <li>Base en España · trabaja remoto con cliente internacional</li>
            </ul>
            <dl className="service-specs">
              <div className="spec-row">
                <dt className="spec-k">Rol</dt>
                <dd className="spec-v">Dirección + ejecución + speaker</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Email</dt>
                <dd className="spec-v">gonzalo@thefunnelbox.com</dd>
              </div>
            </dl>
            <Link href="/nosotros/gonzalo-castro/" className="service-cta">Ver perfil completo</Link>
          </article>

          <article className="service">
            <div className="service-head">
              <h3 className="service-name">Carla Fresch Pons</h3>
              <span className="service-tag">Consultoría</span>
            </div>
            <p className="service-for">
              Ex-abogada con más de 10 años en el Poder Judicial de Argentina. Hoy consultora de
              crecimiento con foco en gestión del despacho y mercado AR.
            </p>
            <ul className="service-includes">
              <li>10+ años dentro del sistema judicial argentino</li>
              <li>Consultora de gestión para estudios jurídicos y despachos</li>
              <li>Especialista en operaciones, equipo y rentabilidad por cliente</li>
              <li>Speaker sobre transición del abogado y perfiles emergentes</li>
              <li>Network propio en el circuito legal argentino</li>
            </ul>
            <dl className="service-specs">
              <div className="spec-row">
                <dt className="spec-k">Rol</dt>
                <dd className="spec-v">Consultoría + credibilidad gremial</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Email</dt>
                <dd className="spec-v">[COMPLETAR]</dd>
              </div>
            </dl>
            <Link href="/nosotros/carla-fresch-pons/" className="service-cta">Ver perfil completo</Link>
          </article>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">¿Por qué esta firma?</h2>
          </div>
          <div className="prose">
            <p>
              Hay consultores sueltos. Hay agencias sueltas. Hay escuelas sueltas. Nadie une las
              cuatro piezas — diagnóstico estratégico, ejecución operativa, formación y voz pública
              — con marca personal y track record real.
            </p>
            <p>
              Con Gonzalo decidimos ocupar ese hueco. La marca es la suma de dos trayectorias que
              se complementan y de un equipo detrás que ejecuta lo que decimos.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>¿Trabajamos juntos?</h3>
            <p>
              Agendá 30 minutos. Te damos un diagnóstico inicial aunque no quieras avanzar con
              nosotros. Sin follow-up insistente.
            </p>
            <div className="cta-actions">
              <Link href="/contacto/" className="btn btn-primary btn-arrow">Agendar consulta</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
