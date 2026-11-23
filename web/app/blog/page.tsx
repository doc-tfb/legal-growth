import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Breadcrumb from "../components/Breadcrumb";
import Interactions from "../components/Interactions";

export const metadata: Metadata = {
  title: "Journal · Marketing jurídico, gestión del despacho e IA | TFB Legal",
  description:
    "Artículos propios sobre marketing jurídico, gestión del despacho, SEO, Google Ads e IA aplicada al sector legal. Semanal. Firmado por Gonzalo o Carla.",
  alternates: { canonical: "/blog/" },
};

const PLANNED = [
  { date: "Nov 2026 · Marketing", title: "Cómo armar un plan de marketing anual para un despacho de 15 personas.", author: "Gonzalo Castro" },
  { date: "Nov 2026 · Gestión", title: "El socio-director como cuello de botella: señales y qué hacer.", author: "Carla Fresch Pons" },
  { date: "Oct 2026 · IA", title: "IA para despachos en 2026: qué hace realmente y qué no.", author: "Gonzalo Castro" },
  { date: "Oct 2026 · SEO", title: "SEO local para despachos por ciudad: cómo rankear en provincia.", author: "Gonzalo Castro" },
  { date: "Sep 2026 · Pricing", title: "Pricing para despachos: hora vs fijo vs mixto.", author: "Carla Fresch Pons" },
  { date: "Sep 2026 · Google Ads", title: "Cómo armar la primera campaña de Google Ads para un despacho.", author: "Gonzalo Castro" },
];

export default function BlogShellPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb items={[{ href: "/", label: "Inicio" }, { label: "Journal" }]} />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Journal</div>
              <h1 className="hero-title">Lo que escribimos, lo escribimos.</h1>
              <p className="hero-sub">
                Artículos sobre marketing jurídico, gestión del despacho, SEO, Google Ads e IA
                aplicada al sector legal. Sin ghostwriters. Sin notas de 400 palabras hechas con un
                prompt.
              </p>
            </div>
            <dl className="hero-aside">
              <dt>Cadencia</dt>
              <dd>Semanal · 1–2 piezas</dd>
              <dt>Firmas</dt>
              <dd>Gonzalo Castro · Carla Fresch Pons</dd>
              <dt>Mercados</dt>
              <dd>ES · MX · AR</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="coming-soon">
            <h3>Journal en arranque.</h3>
            <p>
              Publicamos la primera pieza el 1 de diciembre de 2026. Mientras tanto, acá va el
              calendario editorial de las próximas semanas. Los títulos pueden ajustarse.
            </p>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Próximas publicaciones.</h2>
            <span className="section-meta">Calendario editorial</span>
          </div>
          <ul className="journal-list">
            {PLANNED.map((p, i) => (
              <li key={i}>
                <div className="journal-entry">
                  <span className="journal-date">{p.date}</span>
                  <h3 className="journal-title-entry">{p.title}</h3>
                  <span className="journal-author">{p.author}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>¿Querés que te avisemos cuando publiquemos?</h3>
            <p>
              Mientras arrancamos el journal, podés descargar el benchmark 2026 o agendar
              directamente consulta inicial.
            </p>
            <div className="cta-actions">
              <Link
                href="/recursos/benchmark-precios-marketing-juridico-2026/"
                className="btn btn-primary btn-arrow"
              >
                Benchmark 2026
              </Link>
              <Link href="/contacto/" className="btn btn-ghost">Agendar consulta</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
