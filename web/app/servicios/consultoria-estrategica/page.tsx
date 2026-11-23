import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Consultoría estratégica para despachos de abogados · TFB Legal",
  description:
    "Diagnóstico de crecimiento, gestión del despacho y estrategia comercial para socios-directores. Diagnosticamos y ejecutamos: no entregamos informes para guardar.",
  alternates: { canonical: "/servicios/consultoria-estrategica/" },
};

export default function ConsultoriaPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { href: "/servicios/", label: "Servicios" },
            { label: "Consultoría estratégica" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Servicio · Proyecto</div>
              <h1 className="hero-title">Consultoría estratégica para despachos medianos.</h1>
              <p className="hero-sub">
                Diagnosticamos el negocio, no sólo el marketing. Operaciones, pricing, equipo y
                canales. Un consultor que sabe cómo funciona un despacho desde adentro — porque
                Carla fue abogada 10+ años — y que ejecuta lo que recomienda.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/" className="btn btn-primary btn-arrow">Solicitar diagnóstico</Link>
                <Link href="/metodologia/" className="btn btn-ghost">Ver metodología</Link>
              </div>
            </div>
            <dl className="hero-aside">
              <dt>Modelo</dt>
              <dd>Proyecto cerrado</dd>
              <dt>Entregable</dt>
              <dd>Informe + plan 90 días + KPIs</dd>
              <dt>Inversión</dt>
              <dd>Desde 4.500 €</dd>
              <dt>Duración</dt>
              <dd>30 días</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">
              No es un curso. No es una charla. <em>Es un plan de negocio.</em>
            </h2>
          </div>
          <div className="prose">
            <p>
              La mayoría de los consultores que trabajan con despachos entregan un informe bonito y
              desaparecen. El socio-director lo lee, lo guarda en un cajón y vuelve a su rutina.
            </p>
            <p>
              Nosotros trabajamos distinto. Diagnosticamos con rigor — operaciones, pricing,
              cartera de clientes, canales de captación, cuellos de botella — y después acompañamos
              la ejecución, con nuestro equipo o entrenando al tuyo. Objetivo: el socio-director
              deja de ser el cuello de botella en 90 días.
            </p>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Tres áreas de trabajo.</h2>
          </div>
          <div className="cards-grid cols-3">
            <div className="card-cell">
              <h3>Diagnóstico de crecimiento</h3>
              <p>
                Auditoría completa del despacho en 2 semanas. Informe con 3 palancas priorizadas.
                Precio puntual, sin compromiso de retainer posterior.
              </p>
            </div>
            <div className="card-cell">
              <h3>Gestión del despacho</h3>
              <p>
                Operaciones y flujos, rentabilidad por cliente y área, estructura del equipo,
                pricing (hora vs fijo vs mixto), delegación. Cómo subir precios sin perder clientes.
              </p>
            </div>
            <div className="card-cell">
              <h3>Estrategia comercial</h3>
              <p>
                Pipeline y proceso de ventas, perfil de cliente ideal, estructura comercial
                (interno vs externo), retención y cross-sell sin ser comercial molesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Quiénes trabajan contigo.</h2>
          </div>
          <div className="prose">
            <p>Ambos en cada sesión. Nada se delega a un junior sin contexto.</p>
          </div>
          <div className="kv-table" style={{ marginTop: "24px" }}>
            <div className="kv-row">
              <div className="kv-k">Gonzalo Castro</div>
              <div className="kv-v">
                Marketing, canales, atribución, IA aplicada. Director de The Funnel Box.{" "}
                <Link href="/nosotros/gonzalo-castro/">Perfil completo</Link>.
              </div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Carla Fresch Pons</div>
              <div className="kv-v">
                Operaciones, equipo, gestión del despacho, comprensión del oficio. Ex-abogada con
                10+ años en el Poder Judicial de Argentina.{" "}
                <Link href="/nosotros/carla-fresch-pons/">Perfil completo</Link>.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Modelo, inversión y duración.</h2>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">Modelo</div>
              <div className="kv-v">Proyecto cerrado · diagnóstico + plan. Acompañamiento mensual opcional después.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Inversión diagnóstico</div>
              <div className="kv-v">Desde 4.500 €, según scope (nº de socios, complejidad operativa).</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Acompañamiento mensual</div>
              <div className="kv-v">Opcional · desde 2.500 €/mes · sesiones quincenales + soporte asincrónico.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Duración mínima recomendada</div>
              <div className="kv-v">6 meses para ver cambio real en captación y operación.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Formato</div>
              <div className="kv-v">Remoto por videollamada · presencial opcional para fase diagnóstico (coste de viaje aparte).</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">¿Te suena esto?</h2>
          </div>
          <ul className="feature-list two-col-list">
            <li>Tu despacho factura decente pero sentís que podría más, y no sabés por qué no escala.</li>
            <li>Captás por boca a boca y querés dejar de depender de eso.</li>
            <li>Tu pricing lleva 5 años igual y no te animás a subirlo.</li>
            <li>Tus abogados son técnicamente excelentes pero el margen operativo no refleja eso.</li>
            <li>Pensaste en contratar un director comercial y no sabés si justificaría el coste.</li>
            <li>Querés separar operaciones de dirección y no sabés cómo.</li>
          </ul>
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
                <summary>¿Cuánto cuesta?</summary>
                <div className="faq-a">
                  Diagnóstico inicial: desde 4.500 €, según alcance. Acompañamiento mensual
                  posterior: desde 2.500 €/mes. Precios cerrados, sin sorpresas.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Cuánto dura un engagement típico?</summary>
                <div className="faq-a">
                  Mínimo 6 meses para ver cambio real. Después el despacho decide si continúa con
                  un retainer más ligero o entra en modalidad &quot;revisión trimestral&quot;.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Tengo que contratar también el marketing?</summary>
                <div className="faq-a">
                  No. Consultoría y marketing se contratan por separado o juntos. Muchos clientes
                  empiezan sólo por consultoría y suman marketing después.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Trabajan con despachos de un solo socio?</summary>
                <div className="faq-a">
                  Sí, si el socio factura más de 150 K € al año. Con cifras menores, mejor empezar
                  por el curso de formación o una consultoría puntual.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Tenés que viajar al despacho?</summary>
                <div className="faq-a">
                  No. Trabajamos remoto por videollamada. Si el despacho está en Madrid, Barcelona
                  o Valencia, se puede ir presencial para el diagnóstico (coste de viaje aparte).
                </div>
              </details>
            </li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>Empezá por el diagnóstico.</h3>
            <p>
              Si después no querés avanzar, te quedás con el informe y no hay compromiso. Agendá 30
              minutos para evaluar si tiene sentido.
            </p>
            <div className="cta-actions">
              <Link href="/contacto/" className="btn btn-primary btn-arrow">Solicitar diagnóstico</Link>
              <a href="mailto:gonzalo@thefunnelbox.com" className="btn btn-ghost">Escribir por email</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
