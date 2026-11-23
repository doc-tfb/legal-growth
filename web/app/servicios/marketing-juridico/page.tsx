import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Marketing jurídico para despachos · TFB Legal",
  description:
    "Marketing digital ejecutado para despachos medianos: SEO, Google Ads, LinkedIn, email y web. Con atribución real al cliente firmado, no a leads que nunca llaman.",
  alternates: { canonical: "/servicios/marketing-juridico/" },
};

export default function MarketingJuridicoPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { href: "/servicios/", label: "Servicios" },
            { label: "Marketing jurídico" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Servicio · Retainer</div>
              <h1 className="hero-title">Marketing jurídico para despachos medianos.</h1>
              <p className="hero-sub">
                No damos cursos de marketing. Ejecutamos. SEO, Google Ads, LinkedIn, web y email,
                con The Funnel Box detrás y Carla Fresch Pons aportando la mirada del abogado.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/" className="btn btn-primary btn-arrow">Agendar diagnóstico</Link>
                <Link href="/recursos/benchmark-precios-marketing-juridico-2026/" className="btn btn-ghost">
                  Benchmark de precios 2026
                </Link>
              </div>
            </div>
            <dl className="hero-aside">
              <dt>Modelo</dt>
              <dd>Setup + retainer mensual</dd>
              <dt>Inversión</dt>
              <dd>Desde 2.500 €/mes</dd>
              <dt>Primeros resultados</dt>
              <dd>90 días</dd>
              <dt>Stack base</dt>
              <dd>GA4 · HubSpot · Sanity · Vercel</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Qué significa realmente <em>marketing jurídico bien hecho.</em></h2>
          </div>
          <div className="prose">
            <p>
              La mayoría de las agencias que dicen hacer &quot;marketing para abogados&quot; venden
              plantillas genéricas con un barniz legal. Posts predecibles en LinkedIn, ads que no
              cierran leads y webs que podrían ser de cualquier sector.
            </p>
            <p>Marketing jurídico de verdad es otra cosa. Es un sistema integrado que entiende:</p>
          </div>
          <ul className="feature-list" style={{ marginTop: "20px", maxWidth: "70ch" }}>
            <li>Cómo compra un cliente un servicio legal y por qué no es como comprar otros servicios.</li>
            <li>Qué canales funcionan según el tipo de despacho (nacional vs provincial, consumidor vs empresa).</li>
            <li>Qué palabras usar y cuáles evitar (regulación del Colegio, RGPD, tono profesional sin burocracia).</li>
            <li>Cómo medir resultados reales: leads cualificados que cierran, no impresiones.</li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Qué hacemos <em>específicamente.</em></h2>
            <span className="section-meta">6 frentes</span>
          </div>
          <ul className="feature-list two-col-list">
            <li><strong>SEO técnico y editorial.</strong> Desde Core Web Vitals hasta pillars de contenido. Atacamos el techo técnico primero.</li>
            <li><strong>Google Ads jurídico.</strong> Campañas con segmentación quirúrgica, landings específicas, atribución end-to-end.</li>
            <li><strong>LinkedIn para profesionales.</strong> Perfil del socio-director + estrategia de contenido + outreach manual.</li>
            <li><strong>Web para despachos.</strong> Rediseño o construcción desde cero. Mobile-first, Core Web Vitals verdes, SEO on-page impecable.</li>
            <li><strong>Email marketing.</strong> Automatizaciones a partir de newsletter + lead magnets + reactivación de contactos dormidos.</li>
            <li><strong>Analítica y atribución.</strong> GA4 + HubSpot + GTM + Looker Studio. Medimos lo que importa, descartamos lo que no.</li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Lo que <em>no</em> vamos a hacer.</h2>
          </div>
          <ul className="feature-list" style={{ maxWidth: "70ch" }}>
            <li>Promesas específicas de leads por mes. No conocemos tu mercado todavía.</li>
            <li>Contratos de 12 meses obligatorios. Si no aportamos valor en 90 días, se cancela sin penalización.</li>
            <li>Informes bonitos sin acción. Cada reporte mensual lleva decisiones, no gráficos decorativos.</li>
            <li>Plantillas de posts genéricas. Todo contenido es específico del sector legal.</li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Modelo, inversión y tiempos.</h2>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">Modelo</div>
              <div className="kv-v">Setup inicial + retainer mensual. Sin permanencia obligatoria.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Inversión</div>
              <div className="kv-v">
                Desde 2.500 €/mes según scope. Ads aparte, como inversión directa del despacho.{" "}
                <Link href="/recursos/benchmark-precios-marketing-juridico-2026/">
                  Ver benchmark completo
                </Link>.
              </div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Setup</div>
              <div className="kv-v">30–45 días: auditoría + setup CRM + web base + plan de canales.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Primeros resultados</div>
              <div className="kv-v">90 días para empezar a medir leads por canal; SEO consistente entre mes 4 y 6.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Stack</div>
              <div className="kv-v">GA4, GTM, HubSpot (o GoHighLevel), Sanity CMS, Vercel, Looker Studio.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Equipo</div>
              <div className="kv-v">Gonzalo dirige; ejecuta el equipo de The Funnel Box. Carla aporta la lectura del sector.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">¿Es para tu despacho?</h2>
          </div>
          <div className="hero-row">
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", margin: "0 0 14px" }}>Sí, si…</h3>
              <ul className="feature-list">
                <li>Tenés entre 5 y 30 abogados.</li>
                <li>Captás por boca a boca y querés sistematizar.</li>
                <li>Facturás entre 500 K y 5 M € al año.</li>
                <li>El socio-director es el cuello de botella de la captación.</li>
                <li>Buscás un consultor que ejecute, no uno que entregue informes.</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", margin: "0 0 14px" }}>No, si…</h3>
              <ul className="feature-list">
                <li>Sos despacho unipersonal con menos de 2 años.</li>
                <li>Buscás ayuda técnica jurídica (no vendemos derecho).</li>
                <li>Querés &quot;triplicar leads en 90 días&quot;.</li>
                <li>Ya tenés un departamento de marketing propio consolidado.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Caso relacionado</h2>
            <span className="section-meta">1 de 3</span>
          </div>
          <table className="casos-table">
            <tbody>
              <tr>
                <td>
                  <div className="caso-cliente">Gestores Concursales</div>
                  <div className="caso-descr">
                    Migración WordPress → stack propio, SEO técnico y atribución end-to-end de leads al
                    CRM.
                  </div>
                </td>
                <td className="hide-mobile"><span className="caso-chip">Web + SEO + CRM</span></td>
                <td className="hide-mobile"><span className="caso-chip">Concursal · ES</span></td>
                <td>
                  <Link href="/casos/gce-gestores-concursales/" className="caso-link">Caso</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <ul className="faq-list">
            <li>
              <details>
                <summary>¿Cuánto cuesta el marketing para un despacho en España?</summary>
                <div className="faq-a">
                  Retainer medio entre 800 y 2.500 € al mes para un despacho mediano, según scope.
                  Google Ads aparte como inversión directa del despacho. El benchmark completo está
                  en el PDF gratuito más abajo.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Cuánto tarda el SEO en traer resultados?</summary>
                <div className="faq-a">
                  Entre 4 y 6 meses para empezar a rankear top 10 en keywords competitivas. Entre 9
                  y 12 meses para top 3 consistente. Si alguien promete 1 mes, desconfía.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Trabajan con despachos fuera de Madrid y Barcelona?</summary>
                <div className="faq-a">
                  Sí. Uno de nuestros casos más sólidos es Orejas Abogados en Oviedo, que posiciona
                  en toda Asturias y a nivel nacional para un servicio específico.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Trabajan en México o Argentina?</summary>
                <div className="faq-a">
                  Sí, con estructura distinta. En México el eje principal es IA aplicada al
                  despacho; en Argentina el canal es LinkedIn + eventos, no SEO. Agendá consulta
                  para evaluar.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Qué pasa si ya tengo agencia?</summary>
                <div className="faq-a">
                  Hacemos primero un diagnóstico sin tocar nada. Si la agencia actual funciona, te
                  lo decimos y no cobramos consultoría puente. Si hay espacio de mejora, recibís
                  recomendaciones concretas aunque sigas con ellos.
                </div>
              </details>
            </li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>Antes de agendar, lee el benchmark.</h3>
            <p>
              El <strong>Benchmark precios marketing jurídico 2026</strong> te dice qué paga el
              mercado español por cada servicio. 22 páginas en PDF, gratis.
            </p>
            <div className="cta-actions">
              <Link
                href="/recursos/benchmark-precios-marketing-juridico-2026/"
                className="btn btn-primary btn-arrow"
              >
                Descargar benchmark
              </Link>
              <Link href="/contacto/" className="btn btn-ghost">Agendar diagnóstico</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
