import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Caso Gestores Concursales · Migración + SEO técnico · TFB Legal",
  description:
    "Migración integral del WordPress original de Gestores Concursales a un stack moderno con SEO técnico, atribución end-to-end al CRM y workflow editorial Sanity → Vercel.",
  alternates: { canonical: "/casos/gce-gestores-concursales/" },
};

export default function CasoGCEPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { href: "/casos/", label: "Casos" },
            { label: "Gestores Concursales" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Caso · Concursal · España</div>
              <h1 className="hero-title">
                Gestores Concursales: migración integral y atribución real al CRM.
              </h1>
              <p className="hero-sub">
                Despacho especializado en concurso de acreedores. Llegaba con WordPress lento, sin
                atribución y con un pipeline que terminaba en un Excel. Salió con stack propio, SEO
                técnico al día y cada contacto llegando al CRM con su origen.
              </p>
            </div>
            <dl className="hero-aside">
              <dt>Sector</dt>
              <dd>Concurso de acreedores</dd>
              <dt>Mercado</dt>
              <dd>España · nacional</dd>
              <dt>Socios</dt>
              <dd>Mónica Usón · Leticia Montalvo</dd>
              <dt>Duración</dt>
              <dd>4 meses</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">El contexto.</h2>
          </div>
          <div className="prose">
            <p>
              Despacho español de referencia en concurso de acreedores, con oficinas en Madrid y
              Barcelona, dirigido por Mónica Usón y Leticia Montalvo. Operaban con una web
              WordPress que había crecido de forma orgánica durante años: lenta en mobile, con
              deuda técnica SEO, sin schema estructurado y con un flujo de leads que terminaba en
              un Excel sin atribución.
            </p>
            <p>
              El reto no era rediseñar por rediseñar. Era migrar a un stack moderno sin perder
              posicionamiento acumulado y, al mismo tiempo, resolver la caja negra de la
              atribución.
            </p>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Qué hicimos.</h2>
          </div>
          <ul className="feature-list two-col-list">
            <li><strong>Migración integral:</strong> WordPress → Vite + React + Sanity + Vercel.</li>
            <li><strong>Redirects 301 1:1:</strong> todas las URLs legacy mapeadas, 0 pérdida de posicionamiento.</li>
            <li><strong>SEO técnico 100%:</strong> title/meta/canonical únicos, schema.org dinámico (LegalService, Attorney, FAQPage), sitemap generado.</li>
            <li><strong>Core Web Vitals en verde:</strong> LCP &lt; 2,5s, CLS &lt; 0,1, INP &lt; 200 ms.</li>
            <li><strong>Atribución end-to-end:</strong> GTM + GA4 + HubSpot con cada lead etiquetado por origen (SEO, Ads, referido).</li>
            <li><strong>Formularios conectados:</strong> contacto, lead magnet y llamada, todos a HubSpot con propiedades custom.</li>
            <li><strong>Workflow editorial Sanity → Vercel:</strong> el equipo publica artículos sin tocar deploy.</li>
            <li><strong>Páginas de servicio por ciudad:</strong> SEO local para Madrid, Barcelona, Valencia y Sevilla.</li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Stack.</h2>
          </div>
          <ul className="chips">
            <li className="chip">Vite + React</li>
            <li className="chip">Sanity CMS</li>
            <li className="chip">Vercel</li>
            <li className="chip">HubSpot EU</li>
            <li className="chip">Google Tag Manager</li>
            <li className="chip">Google Analytics 4</li>
            <li className="chip">Schema.org / JSON-LD</li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Resultados.</h2>
            <span className="section-meta">Cifras finales pendientes</span>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">Posicionamiento post-cutover</div>
              <div className="kv-v">0 pérdida en keywords core. Verificado con GSC en las 4 semanas posteriores.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Core Web Vitals</div>
              <div className="kv-v">Los 3 en verde en mobile y desktop.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Atribución CRM</div>
              <div className="kv-v">De 0 % a 100 %: cada lead entra con origen, campaña y landing.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Workflow editorial</div>
              <div className="kv-v">De dependencia técnica a autonomía total del equipo editorial.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Cifras de leads e impacto en pipeline</div>
              <div className="kv-v">Pendientes de consolidar a 6 meses post-cutover.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Equipo del proyecto.</h2>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">Dirección técnica</div>
              <div className="kv-v">Gonzalo Castro (The Funnel Box)</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Ejecución frontend + CMS</div>
              <div className="kv-v">Equipo The Funnel Box</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">SEO técnico y atribución</div>
              <div className="kv-v">Equipo The Funnel Box</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Interlocución con socios</div>
              <div className="kv-v">Gonzalo Castro + Carla Fresch Pons</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>¿Tu despacho necesita algo parecido?</h3>
            <p>
              Si estás en una migración, un rediseño o querés resolver la atribución de leads al
              CRM, agendá 30 minutos. Te decimos si el modelo encaja antes de proponer presupuesto.
            </p>
            <div className="cta-actions">
              <Link href="/contacto/" className="btn btn-primary btn-arrow">Agendar diagnóstico</Link>
              <Link href="/servicios/marketing-juridico/" className="btn btn-ghost">Ver servicio completo</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
