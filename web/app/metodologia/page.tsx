import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Breadcrumb from "../components/Breadcrumb";
import Interactions from "../components/Interactions";

export const metadata: Metadata = {
  title: "Metodología · Cómo entramos a un despacho | TFB Legal",
  description:
    "Nuestra metodología de crecimiento para despachos: diagnóstico, plan, ejecución y transferencia. 4 fases, 120 días hasta el primer resultado medible, 6 meses hasta autonomía.",
  alternates: { canonical: "/metodologia/" },
};

export default function MetodologiaPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb items={[{ href: "/", label: "Inicio" }, { label: "Metodología" }]} />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Metodología</div>
              <h1 className="hero-title">Cómo entramos a un despacho.</h1>
              <p className="hero-sub">
                Cuatro fases. 120 días hasta el primer resultado medible. 6 meses hasta autonomía.
                Diagnosticamos con rigor, ejecutamos con equipo propio y formamos para que dejes de
                depender de nosotros.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/" className="btn btn-primary btn-arrow">Agendar diagnóstico</Link>
              </div>
            </div>
            <dl className="hero-aside">
              <dt>Fases</dt>
              <dd>4</dd>
              <dt>Primer resultado</dt>
              <dd>120 días</dd>
              <dt>Autonomía</dt>
              <dd>6 meses</dd>
              <dt>Formato</dt>
              <dd>Remoto · sesiones quincenales</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Qué hace distinto este proceso.</h2>
          </div>
          <div className="prose">
            <p>Hay dos extremos que no funcionan en consultoría para despachos:</p>
            <p>
              <strong>Uno:</strong> la consultoría académica. Diagnóstico profundo + informe + fin.
              El socio-director lo lee, lo guarda y vuelve a su rutina.
            </p>
            <p>
              <strong>Dos:</strong> la agencia que ejecuta sin diagnóstico. Lanza ads y optimiza
              SEO sin entender el modelo de negocio. El despacho gasta en captación sin cerrar los
              leads que llegan.
            </p>
            <p>
              Nuestra metodología es el punto medio. Diagnosticamos con rigor, ejecutamos con
              equipo propio y formamos al socio-director para que deje de depender de nosotros.
            </p>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Las cuatro fases.</h2>
            <span className="section-meta">4 fases · 120 días</span>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step-num">01</span>
              <h3 className="step-name">Diagnóstico</h3>
              <p className="step-descr">
                Entrevistas con socios, revisión de números reales, auditoría de canales y mapeo
                del embudo. Entregamos informe con 3 palancas priorizadas y plan de 90 días.
              </p>
              <div className="step-time">30 días</div>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <h3 className="step-name">Plan</h3>
              <p className="step-descr">
                Convertimos diagnóstico en plan accionable. Canales, inversión, responsables, KPIs
                semanales. El socio-director firma antes de ejecutar.
              </p>
              <div className="step-time">7 días</div>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <h3 className="step-name">Ejecución</h3>
              <p className="step-descr">
                The Funnel Box opera por detrás: SEO, Ads, LinkedIn, web, CRM. Sesiones
                quincenales. Reporte mensual con decisiones, no gráficos decorativos.
              </p>
              <div className="step-time">90 días</div>
            </div>
            <div className="step">
              <span className="step-num">04</span>
              <h3 className="step-name">Transferencia</h3>
              <p className="step-descr">
                Formación al equipo + manual operativo del despacho. Autonomía al mes 6. Si seguimos
                después de 12 meses, hicimos algo mal.
              </p>
              <div className="step-time">Continuo</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Fase 1 · Diagnóstico — en detalle.</h2>
            <span className="section-meta">Semanas 1–4</span>
          </div>
          <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.1rem", margin: "0 0 12px" }}>
            Qué hacemos
          </h3>
          <ul className="feature-list" style={{ marginBottom: "24px" }}>
            <li>Entrevistas 1:1 con todos los socios (1 hora cada uno).</li>
            <li>Revisión de datos reales: facturación, cartera, cierres mensuales, tiempo por caso.</li>
            <li>Auditoría de web, SEO, Ads, CRM, LinkedIn y canales.</li>
            <li>Mapeo del embudo comercial real: cómo entra un lead, cómo se cierra, dónde se pierde.</li>
            <li>Conversación con 1–2 clientes recientes del despacho (con permiso) para entender el recorrido real.</li>
          </ul>
          <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.1rem", margin: "0 0 12px" }}>
            Qué te entregamos
          </h3>
          <ul className="feature-list">
            <li>Informe de 10–15 páginas con 3 palancas priorizadas.</li>
            <li>Métricas base para medir el impacto de cualquier cambio.</li>
            <li>Plan de 90 días con objetivos concretos.</li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Principios que no se negocian.</h2>
          </div>
          <ul className="feature-list">
            <li><strong>Diagnosticamos antes de proponer.</strong> No vendemos retainer sin diagnóstico. No cobramos consultoría puente sin entender el problema.</li>
            <li><strong>Ejecutamos lo que recomendamos.</strong> Si no podemos ejecutarlo, no lo recomendamos. Punto.</li>
            <li><strong>No prometemos resultados específicos.</strong> Vendemos capacidad y proceso, no tráfico garantizado.</li>
            <li><strong>Medimos leads cualificados, no impresiones.</strong> Lo que importa es quién llama, no quién mira.</li>
            <li><strong>Formamos para que no nos necesites.</strong> Si seguís necesitándonos después de 12 meses, hicimos algo mal.</li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Después del mes 6.</h2>
          </div>
          <div className="cards-grid cols-3">
            <div className="card-cell">
              <h3>Autonomía total</h3>
              <p>
                El despacho opera sin nosotros. Ocasionalmente contratan un diagnóstico de
                seguimiento o una formación puntual. Preferimos esta opción: valida que la
                metodología funciona.
              </p>
            </div>
            <div className="card-cell">
              <h3>Retainer ligero</h3>
              <p>
                1 sesión mensual de revisión + soporte on-demand. Para despachos que quieren seguir
                contando con mentoría sin la ejecución.
              </p>
            </div>
            <div className="card-cell">
              <h3>Retainer de ejecución</h3>
              <p>
                Siguen con nuestro equipo ejecutando canales. Habitual en despachos que crecieron
                2–3× y no quieren sumar plantilla interna.
              </p>
            </div>
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
                <summary>¿Qué pasa si el diagnóstico sugiere algo que no está en vuestros servicios?</summary>
                <div className="faq-a">
                  Te lo decimos directamente. Si necesitás un contador especializado, un abogado
                  laboralista para tu propia estructura o una agencia de BPO, te recomendamos a
                  quien corresponda.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Cuánto cuesta cada fase?</summary>
                <div className="faq-a">
                  Diagnóstico aparte del retainer (coste puntual). Estrategia y ejecución
                  integradas en el retainer mensual. Formación incluida.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Funciona en despachos muy chicos?</summary>
                <div className="faq-a">
                  Para despachos de 1–3 abogados recomendamos empezar por el curso online o una
                  consultoría puntual. El retainer completo tiene sentido a partir de 5 abogados y
                  500 K € de facturación anual.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Funciona en despachos muy grandes?</summary>
                <div className="faq-a">
                  Despachos de 30+ abogados con departamento de marketing propio ya tienen
                  estructura. Para ellos ofrecemos consultoría puntual o formación in-company, no
                  retainer completo.
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
              30 minutos de conversación inicial sin compromiso. Si vemos que la metodología
              encaja, te proponemos el diagnóstico profundo como siguiente paso.
            </p>
            <div className="cta-actions">
              <Link href="/contacto/" className="btn btn-primary btn-arrow">Agendar consulta</Link>
              <Link href="/servicios/" className="btn btn-ghost">Ver servicios</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
