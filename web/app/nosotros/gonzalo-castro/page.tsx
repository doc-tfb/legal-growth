import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Gonzalo Castro · Consultor de crecimiento para despachos · TFB Legal",
  description:
    "Director y fundador de The Funnel Box. Consultor especializado en marketing jurídico, IA aplicada y escalado comercial para despachos medianos.",
  alternates: { canonical: "/nosotros/gonzalo-castro/" },
};

export default function GonzaloBioPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { href: "/nosotros/", label: "Nosotros" },
            { label: "Gonzalo Castro" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Perfil · Co-fundador</div>
              <h1 className="hero-title">Gonzalo Castro.</h1>
              <p className="hero-sub">
                Consultor de crecimiento. Fundador de The Funnel Box. Ayudo a despachos medianos a
                construir un sistema de captación sin depender de referidos.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/?preferencia=gonzalo" className="btn btn-primary btn-arrow">
                  Agendar con Gonzalo
                </Link>
                <a href="mailto:gonzalo@thefunnelbox.com" className="btn btn-ghost">
                  gonzalo@thefunnelbox.com
                </a>
              </div>
            </div>
            <dl className="hero-aside">
              <dt>Rol</dt>
              <dd>Dirección · Ejecución · Speaker</dd>
              <dt>Base</dt>
              <dd>España · trabajo remoto</dd>
              <dt>Email</dt>
              <dd>gonzalo@thefunnelbox.com</dd>
              <dt>LinkedIn</dt>
              <dd>[COMPLETAR]</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Hoy.</h2>
          </div>
          <div className="prose">
            <p>
              Dirijo <strong>The Funnel Box</strong>, una agencia de marketing digital y consultoría
              de inteligencia artificial con sede en España. Trabajamos con despachos, clínicas,
              bufetes, estudios y empresas de servicios que quieren crecer sin perder la calidad de
              su oferta.
            </p>
            <p>
              Me especialicé en marketing para profesionales exigentes: gente que tiene algo serio
              que ofrecer y necesita que la captación esté a la altura. Despachos de abogados,
              clínicas privadas, consultoras. Perfiles donde el ticket es alto, la confianza
              importa y la publicidad genérica no funciona.
            </p>
            <p>
              En los últimos años añadí la capa de inteligencia artificial aplicada: cómo integrar
              automatización y modelos de lenguaje en flujos comerciales y operativos, sin que el
              equipo tenga que rehacer su manera de trabajar.
            </p>
            <p>
              Con Carla decidimos construir esta marca para hacer una cosa específica: acompañar a
              despachos de 5 a 30 abogados que quieren crecer con sistema, no con suerte.
            </p>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Trayectoria.</h2>
          </div>
          <div className="prose">
            <p>
              Fundé The Funnel Box después de años trabajando funnels, SEO, paid media y
              automatización para clientes internacionales. Pasé por cada capa del marketing
              digital antes de armar mi propio equipo: desde la ejecución mano a mano hasta la
              dirección estratégica.
            </p>
            <p>
              En el sector legal trabajo con despachos como <Link href="/casos/gce-gestores-concursales/">Gestores
              Concursales</Link> (concurso de acreedores, España) y <Link href="/casos/orj-orejas-abogados/">Orejas Abogados</Link> (Oviedo, reclamación de tarjetas revolving y
              Ley de Segunda Oportunidad). En ambos casos partimos del diagnóstico y llegamos a la
              ejecución operativa, sin delegar a un tercero.
            </p>
            <p>
              No creo en los consultores que entregan un informe y desaparecen. Lo que recomendamos
              lo ejecutamos — y si no podemos ejecutarlo, no lo recomendamos.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">En qué te puedo ayudar.</h2>
          </div>
          <ul className="feature-list two-col-list">
            <li>Marketing digital para despachos (SEO, Ads, LinkedIn, email, web).</li>
            <li>Consultoría estratégica (diagnóstico, plan, acompañamiento).</li>
            <li>IA aplicada al despacho (automatización, análisis documental, redacción asistida).</li>
            <li>Atribución y medición (CRM, GA4, HubSpot, Looker Studio).</li>
            <li>Funnels de captación para servicios profesionales.</li>
            <li>Formación práctica para socios-directores.</li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Stack con el que trabajo.</h2>
          </div>
          <ul className="chips">
            <li className="chip">Next.js</li>
            <li className="chip">Sanity CMS</li>
            <li className="chip">Vercel</li>
            <li className="chip">HubSpot</li>
            <li className="chip">GoHighLevel</li>
            <li className="chip">Google Ads</li>
            <li className="chip">Meta Ads</li>
            <li className="chip">GA4 · GTM</li>
            <li className="chip">Looker Studio</li>
            <li className="chip">Claude · OpenAI</li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Casos acompañados.</h2>
          </div>
          <table className="casos-table">
            <tbody>
              <tr>
                <td>
                  <div className="caso-cliente">Gestores Concursales</div>
                  <div className="caso-descr">Migración integral + SEO técnico + atribución CRM.</div>
                </td>
                <td className="hide-mobile"><span className="caso-chip">Concursal · ES</span></td>
                <td><Link href="/casos/gce-gestores-concursales/" className="caso-link">Caso</Link></td>
              </tr>
              <tr>
                <td>
                  <div className="caso-cliente">Orejas Abogados</div>
                  <div className="caso-descr">SEO local + Google Ads provincial + Meta Ads.</div>
                </td>
                <td className="hide-mobile"><span className="caso-chip">Civil · Oviedo</span></td>
                <td><Link href="/casos/orj-orejas-abogados/" className="caso-link">Caso</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>¿Trabajamos juntos?</h3>
            <p>
              Agendá 30 minutos conmigo. Te doy un diagnóstico inicial aunque no quieras avanzar
              con nosotros.
            </p>
            <div className="cta-actions">
              <Link href="/contacto/?preferencia=gonzalo" className="btn btn-primary btn-arrow">
                Agendar con Gonzalo
              </Link>
              <a href="mailto:gonzalo@thefunnelbox.com" className="btn btn-ghost">
                Email directo
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
