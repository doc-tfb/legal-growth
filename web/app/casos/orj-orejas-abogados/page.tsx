import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Caso Orejas Abogados · SEO local y Google Ads provincial · TFB Legal",
  description:
    "Caso de un despacho mediano en Oviedo: cómo posicionar en SEO local, Google Ads provincial y Meta Ads fuera del eje Madrid–Barcelona.",
  alternates: { canonical: "/casos/orj-orejas-abogados/" },
};

export default function CasoORJPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { href: "/casos/", label: "Casos" },
            { label: "Orejas Abogados" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Caso · Civil · España</div>
              <h1 className="hero-title">
                Orejas Abogados: cómo posicionar un despacho fuera del eje Madrid–Barcelona.
              </h1>
              <p className="hero-sub">
                Despacho con base en Oviedo. Dos verticales con distinto scope: reclamación de
                tarjetas revolving (toda España) y Ley de Segunda Oportunidad (Asturias). SEO
                local, Google Ads provincial y Meta Ads trabajando distinto por vertical.
              </p>
            </div>
            <dl className="hero-aside">
              <dt>Sector</dt>
              <dd>Civil · Consumo</dd>
              <dt>Mercado</dt>
              <dd>Asturias · nacional</dd>
              <dt>Verticales</dt>
              <dd>Revolving · Segunda Oportunidad</dd>
              <dt>Duración</dt>
              <dd>Ongoing</dd>
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
              Orejas Abogados es un despacho mediano con sede en Oviedo. Muchos despachos regionales
              asumen que no pueden competir en SEO ni Ads con los grandes nombres de Madrid y
              Barcelona. Orejas quería demostrar lo contrario para dos verticales muy distintos.
            </p>
            <p>
              <strong>Revolving:</strong> reclamación de tarjetas con intereses abusivos. Mercado
              nacional, muy competido, con operadores grandes copando resultados. Ticket medio y
              volumen alto.
            </p>
            <p>
              <strong>Ley de Segunda Oportunidad:</strong> mecanismo para personas físicas
              insolventes. Scope limitado a Asturias por decisión del despacho. Ticket más alto,
              volumen moderado, SEO local crítico.
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
            <li><strong>SEO local:</strong> Google Business Profile optimizado + páginas de servicio por ciudad en Asturias.</li>
            <li><strong>Google Ads provincial:</strong> segmentación por geografía y vertical, con landings dedicadas.</li>
            <li><strong>Meta Ads:</strong> captación de consumidor final para revolving, segmentada por perfil demográfico.</li>
            <li><strong>Diferenciación por vertical:</strong> funnels distintos para revolving (volumen) y Segunda Oportunidad (consultivo).</li>
            <li><strong>Schema.org LegalService:</strong> por servicio y por ciudad, con areaServed correcto.</li>
            <li><strong>Atribución al CRM:</strong> origen y campaña por cada lead que entra.</li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Stack.</h2>
          </div>
          <ul className="chips">
            <li className="chip">Google Ads</li>
            <li className="chip">Meta Ads</li>
            <li className="chip">Google Business Profile</li>
            <li className="chip">GoHighLevel CRM</li>
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
              <div className="kv-k">SEO local Asturias</div>
              <div className="kv-v">Posiciones top en keywords core para Oviedo, Gijón y Avilés.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Google Ads</div>
              <div className="kv-v">CPL bajo por vertical revolving, mayor en Segunda Oportunidad por complejidad del servicio.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Atribución CRM</div>
              <div className="kv-v">De 0 % a 100 %: cada lead con origen y campaña.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Cifras agregadas</div>
              <div className="kv-v">Pendientes de consolidar antes de publicar.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>Despacho fuera de capital.</h3>
            <p>
              Si tu despacho está en una capital de provincia y querés jugar fuerte en SEO local o
              expandir a nacional por un servicio específico, podemos hablarlo.
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
