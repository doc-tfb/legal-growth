import type { Metadata } from "next";
import Interactions from "./components/Interactions";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { OrganizationSchema, WebSiteSchema, FAQSchema } from "./components/Schema";

export const metadata: Metadata = {
  title: "Marketing para abogados · TFB Legal",
  description:
    "Marketing, consultoría estratégica, formación y speaker para despachos de abogados medianos. España, México y Argentina. Diagnóstico inicial sin coste.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marketing para abogados · TFB Legal",
    description:
      "Consultoría de crecimiento para despachos medianos: marketing jurídico, consultoría, formación y speaker. Ejecución real.",
    url: "/",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TFB Legal" }],
  },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <SiteHeader />

      {/* HERO compacto */}
      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Consultoría de crecimiento · 2026</div>
              <h1 className="hero-title">
                Marketing, consultoría y formación para despachos de abogados.
              </h1>
              <p className="hero-sub">
                Cuatro servicios bajo una misma firma. Modelos claros, alcance definido, atribución
                real al cliente firmado. Para despachos medianos en España, México y Argentina.
              </p>
              <div className="hero-actions">
                <a href="/servicios/" className="btn btn-primary btn-arrow">Ver servicios</a>
                <a href="/contacto/" className="btn btn-ghost">Agendar 30 minutos</a>
              </div>
              <ul className="chips" style={{ marginTop: "28px" }}>
                <li className="chip"><span className="chip-dot"></span>España</li>
                <li className="chip"><span className="chip-dot"></span>México</li>
                <li className="chip"><span className="chip-dot"></span>Argentina</li>
                <li className="chip">Despachos de 5–30 abogados</li>
              </ul>
            </div>
            <dl className="hero-aside">
              <dt>Dirigida por</dt>
              <dd>Gonzalo Castro &amp; Carla Fresch Pons</dd>
              <dt>Impulsada por</dt>
              <dd>The Funnel Box · Brandly</dd>
              <dt>Operativa desde</dt>
              <dd>2026</dd>
            </dl>
          </div>
        </div>
      </header>

      {/* SERVICIOS */}
      <section id="servicios" className="services">
        <div className="band-inner" style={{ paddingTop: "clamp(48px, 6vw, 72px)", paddingBottom: "0" }}>
          <div className="section-head">
            <h2 className="section-title">
              Servicios <em>— cuatro frentes, un solo responsable.</em>
            </h2>
            <span className="section-meta">4 servicios</span>
          </div>
        </div>

        <div className="services-grid">
          <article className="service reveal">
            <div className="service-head">
              <h3 className="service-name">Marketing jurídico</h3>
              <span className="service-tag">Retainer</span>
            </div>
            <p className="service-for">
              Para despachos que necesitan generar leads cualificados de forma predecible y dejar de
              depender del boca a boca.
            </p>
            <ul className="service-includes">
              <li>SEO técnico y de contenido (6 pillars + cluster)</li>
              <li>Google Ads con landings dedicadas por servicio</li>
              <li>LinkedIn Ads + outreach manual al ICP</li>
              <li>Email marketing segmentado + nurturing</li>
              <li>Web optimizada (Core Web Vitals + CRO)</li>
              <li>Atribución al CRM: cada lead con origen</li>
            </ul>
            <dl className="service-specs">
              <div className="spec-row">
                <dt className="spec-k">Stack</dt>
                <dd className="spec-v">GA4 · HubSpot · Sanity · Vercel</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Modelo</dt>
                <dd className="spec-v">Setup + retainer mensual</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Inversión</dt>
                <dd className="spec-v">Desde 2.500 €/mes</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Primeros resultados</dt>
                <dd className="spec-v">90 días</dd>
              </div>
            </dl>
            <a href="/servicios/marketing-juridico/" className="service-cta">Ver servicio</a>
          </article>

          <article className="service reveal">
            <div className="service-head">
              <h3 className="service-name">Consultoría estratégica</h3>
              <span className="service-tag">Proyecto</span>
            </div>
            <p className="service-for">
              Para socios-directores saturados: diagnóstico de crecimiento, pricing, estructura
              comercial y palancas priorizadas.
            </p>
            <ul className="service-includes">
              <li>Análisis de rentabilidad por cliente y por servicio</li>
              <li>Revisión del pricing actual y propuesta nueva</li>
              <li>Diagnóstico del pipeline comercial</li>
              <li>Mapa de palancas priorizadas (impacto × esfuerzo)</li>
              <li>Plan trimestral con KPIs y responsables</li>
              <li>Opcional: 3 meses de acompañamiento quincenal</li>
            </ul>
            <dl className="service-specs">
              <div className="spec-row">
                <dt className="spec-k">Entregable</dt>
                <dd className="spec-v">Documento + plan + KPIs</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Modelo</dt>
                <dd className="spec-v">Proyecto cerrado</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Inversión</dt>
                <dd className="spec-v">Desde 4.500 €</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Duración</dt>
                <dd className="spec-v">30 días</dd>
              </div>
            </dl>
            <a href="/servicios/consultoria-estrategica/" className="service-cta">Ver servicio</a>
          </article>

          <article className="service reveal">
            <div className="service-head">
              <h3 className="service-name">Formación</h3>
              <span className="service-tag">In-company · Abierto</span>
            </div>
            <p className="service-for">
              Para despachos que quieren profesionalizar al equipo en marketing, gestión del
              despacho e IA aplicada.
            </p>
            <ul className="service-includes">
              <li>Posicionamiento y marca personal del socio</li>
              <li>LinkedIn para abogados: contenido + outreach</li>
              <li>IA aplicada al despacho: redacción, análisis, CRM</li>
              <li>Pricing y negociación comercial</li>
              <li>Formato in-company cerrado (8–20 personas)</li>
              <li>O programa abierto con partner académico</li>
            </ul>
            <dl className="service-specs">
              <div className="spec-row">
                <dt className="spec-k">Formato</dt>
                <dd className="spec-v">1 día intensivo · 4 sesiones de 2h</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Modelo</dt>
                <dd className="spec-v">Fee cerrado por programa</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Inversión</dt>
                <dd className="spec-v">Desde 3.500 €</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Material</dt>
                <dd className="spec-v">Propio + plantillas</dd>
              </div>
            </dl>
            <a href="/servicios/formacion-para-despachos/" className="service-cta">Ver servicio</a>
          </article>

          <article className="service reveal">
            <div className="service-head">
              <h3 className="service-name">Speaker</h3>
              <span className="service-tag">Evento</span>
            </div>
            <p className="service-for">
              Keynotes y ponencias en congresos legaltech, programas académicos y eventos
              corporativos.
            </p>
            <ul className="service-includes">
              <li>Marketing jurídico (ES / MX / AR)</li>
              <li>IA aplicada al despacho y al ejercicio del derecho</li>
              <li>Gestión y escalado de despachos medianos</li>
              <li>Experiencia real de ejecución en el sector legal</li>
              <li>Keynote 20–60 min · workshop opcional</li>
              <li>Material y slides propios, nunca enlatado</li>
            </ul>
            <dl className="service-specs">
              <div className="spec-row">
                <dt className="spec-k">Idiomas</dt>
                <dd className="spec-v">Español · Inglés</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Formato</dt>
                <dd className="spec-v">Presencial · Online · Híbrido</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Fee</dt>
                <dd className="spec-v">A consultar</dd>
              </div>
              <div className="spec-row">
                <dt className="spec-k">Agenda</dt>
                <dd className="spec-v">Con 30 días de anticipación</dd>
              </div>
            </dl>
            <a href="/servicios/speaker-conferencias/" className="service-cta">Ver servicio</a>
          </article>
        </div>
      </section>

      {/* CASOS — bloque corto, nombres y detalle en /casos/ */}
      <section id="casos" className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">
              Experiencia <em>— en el sector legal.</em>
            </h2>
            <span className="section-meta">Referencias de The Funnel Box</span>
          </div>

          <p className="service-for" style={{ maxWidth: "60ch", marginBottom: "clamp(24px, 3vw, 36px)" }}>
            El equipo que forma TFB Legal viene ejecutando proyectos de marketing, SEO y
            atribución CRM en el sector legal desde The Funnel Box: migraciones web, SEO
            técnico, Google Ads provincial, Meta Ads, pilotos de IA aplicada al despacho.
          </p>

          <a href="/casos/" className="service-cta">Ver referencias en /casos</a>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section id="metodologia" className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">
              Cómo <em>entramos a un despacho.</em>
            </h2>
            <span className="section-meta">4 fases · 120 días</span>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step-num">01</span>
              <h3 className="step-name">Diagnóstico</h3>
              <p className="step-descr">
                Revisamos pipeline actual, cifras, canales, equipo y pricing. Entendemos qué
                frena el crecimiento antes de proponer nada.
              </p>
              <div className="step-time">30 días</div>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <h3 className="step-name">Plan</h3>
              <p className="step-descr">
                Un documento con 3 palancas priorizadas, plan trimestral, KPIs y responsables.
                Validado con el socio-director antes de ejecutar.
              </p>
              <div className="step-time">7 días</div>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <h3 className="step-name">Ejecución</h3>
              <p className="step-descr">
                The Funnel Box opera por detrás: SEO, Ads, LinkedIn, web, CRM. Reporting
                mensual con número de leads por canal y origen.
              </p>
              <div className="step-time">90 días</div>
            </div>
            <div className="step">
              <span className="step-num">04</span>
              <h3 className="step-name">Transferencia</h3>
              <p className="step-descr">
                Dejamos plantillas, playbooks y formación al equipo del despacho. Si queremos
                seguir, lo decidimos juntos con datos.
              </p>
              <div className="step-time">Continuo</div>
            </div>
          </div>
          <div style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
            <a href="/metodologia/" className="btn btn-ghost btn-arrow">Ver metodología completa</a>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="journal" className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">
              Journal <em>— lo que escribimos.</em>
            </h2>
            <span className="section-meta">Semanal</span>
          </div>

          <ul className="journal-list">
            <li>
              <a href="/blog/" className="journal-entry">
                <span className="journal-date">Nov 2026 · Marketing</span>
                <h3 className="journal-title-entry">
                  Cómo armar un plan de marketing anual para un despacho de 15 personas.
                </h3>
                <span className="journal-author">Gonzalo Castro</span>
              </a>
            </li>
            <li>
              <a href="/blog/" className="journal-entry">
                <span className="journal-date">Nov 2026 · Gestión</span>
                <h3 className="journal-title-entry">
                  El socio-director como cuello de botella: señales y qué hacer.
                </h3>
                <span className="journal-author">Carla Fresch Pons</span>
              </a>
            </li>
            <li>
              <a href="/blog/" className="journal-entry">
                <span className="journal-date">Oct 2026 · IA</span>
                <h3 className="journal-title-entry">
                  IA para despachos en 2026: qué hace realmente y qué no.
                </h3>
                <span className="journal-author">Gonzalo Castro</span>
              </a>
            </li>
            <li>
              <a href="/blog/" className="journal-entry">
                <span className="journal-date">Oct 2026 · SEO</span>
                <h3 className="journal-title-entry">
                  SEO local para despachos por ciudad: cómo rankear en provincia.
                </h3>
                <span className="journal-author">Gonzalo Castro</span>
              </a>
            </li>
          </ul>
          <div style={{ marginTop: "clamp(24px, 3vw, 36px)" }}>
            <a href="/blog/" className="btn btn-ghost btn-arrow">Ir al journal</a>
          </div>
        </div>
      </section>

      {/* CONTACTO breve */}
      <section id="contacto" className="band dark-band">
        <div className="band-inner">
          <div className="contact-grid">
            <div className="contact-main">
              <div className="eyebrow" style={{ color: "var(--invert-muted)" }}>Contacto</div>
              <h2>Treinta minutos. Diagnóstico inicial sin coste.</h2>
              <p>
                Nos contás dónde está el despacho. Miramos cifras reales. Salís con tres palancas
                accionables. Si hay encaje, armamos propuesta.
              </p>
              <div className="contact-actions">
                <a href="/contacto/" className="btn btn-invert-primary btn-arrow">Agendar 30 minutos</a>
                <a href="mailto:gonzalo@thefunnelbox.com" className="btn btn-invert-ghost">
                  gonzalo@thefunnelbox.com
                </a>
              </div>
            </div>
            <div className="contact-sig">
              <div className="sig-row">
                <div className="sig-name">Gonzalo Castro</div>
                <div className="sig-role">
                  Director y fundador de The Funnel Box. Marketing jurídico, IA y escalado.
                </div>
                <a href="/nosotros/gonzalo-castro/" className="sig-link">Perfil completo</a>
              </div>
              <div className="sig-row">
                <div className="sig-name">Carla Fresch Pons</div>
                <div className="sig-role">
                  Más de diez años en el Poder Judicial de Argentina. Consultoría y mercado AR.
                </div>
                <a href="/nosotros/carla-fresch-pons/" className="sig-link">Perfil completo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
