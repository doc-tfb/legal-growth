import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";
import { OrganizationSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "../../components/Schema";

export const metadata: Metadata = {
  title: "Cursos para abogados · Formación para despachos",
  description:
    "Cursos y formación práctica para socios-directores y equipos legales. In-company o abierto. Marketing jurídico, gestión del despacho e IA aplicada. Desde 3.500 €.",
  alternates: { canonical: "/servicios/formacion-para-despachos/" },
  openGraph: {
    title: "Formación para despachos de abogados · TFB Legal",
    description:
      "Programas prácticos para socios y equipos. Marketing, gestión del despacho e IA. In-company o abierto con partner académico.",
    url: "/servicios/formacion-para-despachos/",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
  },
};

export default function FormacionPage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios/" },
          { name: "Formación", url: "/servicios/formacion-para-despachos/" },
        ]}
      />
      <ServiceSchema
        name="Formación para despachos de abogados"
        slug="formacion-para-despachos"
        serviceType="Formación profesional para despachos de abogados"
        description="Programas prácticos in-company y abiertos para socios y equipos. Marketing jurídico, gestión del despacho e IA aplicada."
      />
      <FAQSchema
        questions={[
          { q: "¿La formación da certificado?", a: "In-company y online abierto: certificado propio de la marca. Diploma con partner: certificación del partner académico (ESADE / Anáhuac / ESEADE según mercado)." },
          { q: "¿Es bonificable por FUNDAE?", a: "In-company sí, casi siempre. Online abierto en tramitación." },
          { q: "¿Cómo sé si estoy listo para el curso?", a: "Si facturás al menos 300 K € anuales, tenés al menos 5 abogados y sentís que el crecimiento se estancó, estás listo." },
          { q: "¿Hay materiales descargables?", a: "Sí. Plantillas, checklists y framework operativo. Todo descargable y usable después del curso." },
        ]}
      />
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { href: "/servicios/", label: "Servicios" },
            { label: "Formación" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Servicio · In-company · Abierto</div>
              <h1 className="hero-title">Formación para despachos de abogados.</h1>
              <p className="hero-sub">
                Programas prácticos, cohortes pequeñas, enfoque en resultados aplicables el lunes
                por la mañana. Diseñados para socios-directores y equipos legales que quieren
                aprender gestión y marketing sin pisar una escuela de negocio tradicional.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/" className="btn btn-primary btn-arrow">Solicitar información</Link>
                <Link href="/metodologia/" className="btn btn-ghost">Ver metodología</Link>
              </div>
            </div>
            <dl className="hero-aside">
              <dt>Modalidades</dt>
              <dd>In-company · Online abierto · Diploma (Fase 2)</dd>
              <dt>Formato</dt>
              <dd>1 día intensivo · 4 sesiones de 2h</dd>
              <dt>Inversión</dt>
              <dd>Desde 3.500 €</dd>
              <dt>Material</dt>
              <dd>Propio + plantillas descargables</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Tres modalidades.</h2>
          </div>
          <div className="cards-grid cols-3">
            <div className="card-cell">
              <h3>In-company</h3>
              <p>
                Programa cerrado para un despacho. 15–40 horas en 4–8 semanas. Contenido adaptado a
                retos reales del despacho. Participan socios + equipo.
              </p>
            </div>
            <div className="card-cell">
              <h3>Curso online abierto</h3>
              <p>
                Cohortes de 10–20 alumnos. 6–8 semanas, 2–3 h sincrónicas/semana + material
                asincrónico. Perfil ideal: socio-director o abogado con 10+ años.
              </p>
            </div>
            <div className="card-cell">
              <h3>Diploma con partner (Fase 2)</h3>
              <p>
                Programa de 40–80 horas con certificación de institución reconocida (ESADE Law,
                Anáhuac Derecho, ESEADE). Co-dictado. Lanzamiento segundo semestre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Qué se aprende.</h2>
            <span className="section-meta">4 módulos</span>
          </div>
          <div className="cards-grid cols-2">
            <div className="card-cell">
              <h3>01 · Posicionamiento del despacho</h3>
              <p>
                Mercado, competidores, propuesta de valor. Cliente ideal con rigor. Comunicar
                especialización sin sonar marketero.
              </p>
            </div>
            <div className="card-cell">
              <h3>02 · Canales de captación</h3>
              <p>
                SEO, Google Ads, LinkedIn, referidos. Qué canal según despacho. Primer sistema sin
                agencia. Métricas que importan vs vanidad.
              </p>
            </div>
            <div className="card-cell">
              <h3>03 · Gestión del despacho</h3>
              <p>
                Pricing (hora/fijo/mixto). Subir precios sin perder clientes. Rentabilidad por área.
                Estructura de equipo y delegación.
              </p>
            </div>
            <div className="card-cell">
              <h3>04 · El futuro del despacho</h3>
              <p>
                IA aplicada: automatización, redacción asistida, análisis documental. Transformación
                digital sin perder el oficio. Preparación 5 años.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Quién facilita.</h2>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">Gonzalo Castro</div>
              <div className="kv-v">
                Canales, marketing, IA, atribución. Trae casos reales de ejecución (GCE, ORJ y
                otros clientes de TFB).
              </div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Carla Fresch Pons</div>
              <div className="kv-v">
                Gestión, operaciones, equipo, perspectiva del abogado. Casos reales del Poder
                Judicial AR y consultoría a estudios jurídicos.
              </div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Invitados (Fase 2+)</div>
              <div className="kv-v">
                Socios de despachos trabajados, expertos legaltech, profesores de ESADE / Anáhuac /
                ESEADE.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Inversión.</h2>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">In-company</div>
              <div className="kv-v">Desde 6.000 € según alcance y duración.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Online abierto</div>
              <div className="kv-v">Desde 1.800 € con descuento para cohortes tempranas.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Diploma con partner (Fase 2)</div>
              <div className="kv-v">Co-definido con la institución · rango esperable 3.000–6.000 €.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">FUNDAE (España)</div>
              <div className="kv-v">
                In-company casi siempre es bonificable; depende del alcance. Online abierto en
                tramitación.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Próximos programas.</h2>
          </div>
          <div className="coming-soon">
            <h3>Calendario en construcción.</h3>
            <p>
              Cohorte 1 online y próxima formación in-company abierta a inscripción: fechas en
              definición. Agendá consulta para avisarte cuando abramos cupos.
            </p>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <ul className="faq-list">
            <li>
              <details>
                <summary>¿La formación da certificado?</summary>
                <div className="faq-a">
                  In-company y online abierto: certificado propio de la marca. Diploma con partner:
                  certificación del partner académico (ESADE / Anáhuac / ESEADE según mercado).
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Es bonificable por FUNDAE?</summary>
                <div className="faq-a">
                  In-company sí, casi siempre. Online abierto en tramitación.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Cómo sé si estoy listo para el curso?</summary>
                <div className="faq-a">
                  Si facturás al menos 300 K € anuales, tenés al menos 5 abogados y sentís que el
                  crecimiento se estancó, estás listo. Si dudás, agendá consulta antes de
                  inscribirte.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Hay materiales descargables?</summary>
                <div className="faq-a">
                  Sí. Plantillas, checklists y framework operativo. Todo descargable y usable
                  después del curso.
                </div>
              </details>
            </li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>¿Querés hablarlo primero?</h3>
            <p>
              Antes de inscribirte, agendá 30 minutos. Te decimos si la formación encaja con tu
              momento o si conviene empezar por otra cosa (consultoría puntual, benchmark,
              acompañamiento).
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
