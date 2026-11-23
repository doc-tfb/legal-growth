import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Carla Fresch Pons · Ex-abogada del Poder Judicial AR · TFB Legal",
  description:
    "Más de 10 años en el Poder Judicial de Argentina. Hoy ayuda a estudios y despachos a crecer desde adentro. Consultoría estratégica y gestión del despacho.",
  alternates: { canonical: "/nosotros/carla-fresch-pons/" },
};

export default function CarlaBioPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { href: "/nosotros/", label: "Nosotros" },
            { label: "Carla Fresch Pons" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Perfil · Co-fundadora</div>
              <h1 className="hero-title">Carla Fresch Pons.</h1>
              <p className="hero-sub">
                Ex-abogada del Poder Judicial de Argentina. Más de 10 años dentro del sistema
                judicial. Hoy ayudo a despachos y estudios a crecer desde adentro, porque entiendo
                cómo piensan.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/?preferencia=carla" className="btn btn-primary btn-arrow">
                  Agendar con Carla
                </Link>
              </div>
            </div>
            <dl className="hero-aside">
              <dt>Rol</dt>
              <dd>Consultoría · Credibilidad gremial · Argentina</dd>
              <dt>Base</dt>
              <dd>[COMPLETAR]</dd>
              <dt>Email</dt>
              <dd>[COMPLETAR]</dd>
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
              Trabajo con despachos y estudios jurídicos que quieren crecer sin perder lo que los
              hace únicos. Hago diagnóstico de negocio, consultoría estratégica, formación a
              socios-directores y acompañamiento en transformación operativa.
            </p>
            <p>
              Mi diferencia es simple: antes de ser consultora, fui abogada activa durante más de
              10 años en el Poder Judicial de Argentina. Sé cómo se piensa dentro de un despacho
              porque fui, durante una década, quien tenía los expedientes en el escritorio.
            </p>
            <p>
              Cuando entro a una reunión con un socio-director, la conversación es entre pares. No
              vendo marketing ni prometo tráfico. Pregunto por el día a día del despacho, por las
              fricciones reales, por lo que al socio le quita el sueño. Y después, con Gonzalo y su
              equipo, armamos un plan concreto.
            </p>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Mi recorrido en el Poder Judicial.</h2>
          </div>
          <div className="prose">
            <p>
              Estuve más de 10 años trabajando dentro del Poder Judicial de Argentina, en el fuero{" "}
              <strong>[COMPLETAR: fuero específico]</strong>, en{" "}
              <strong>[COMPLETAR: ciudad]</strong>. Mi rol fue{" "}
              <strong>[COMPLETAR: cargo específico]</strong>.
            </p>
            <p>
              En esa década vi pasar todo: expedientes complejos, equipos pequeños que resolvían lo
              que agencias enteras no podían, estudios grandes con problemas operativos que ni ellos
              mismos veían. Trabajé con abogados brillantes técnicamente que no sabían captar un
              cliente nuevo. Y con despachos que captaban muchísimos pero perdían la mitad por
              cuello de botella operativo.
            </p>
            <p>
              En <strong>[COMPLETAR: año]</strong> decidí que quería ayudar desde otro ángulo. Dejé
              el Poder Judicial y empecé a trabajar en consultoría para estudios jurídicos
              privados. Vi que las agencias de marketing &quot;para abogados&quot; hablaban como si
              nunca hubieran pisado un despacho. Y que los consultores de gestión hablaban como si
              el derecho fuera una industria genérica.
            </p>
            <p>
              Por eso me asocié con Gonzalo: él trae la capa de ejecución que a mí me faltaba. Yo
              aporto la capa de comprensión del oficio que a él le costaba tener sin haber vivido
              el sector desde adentro.
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
            <li>Gestión del despacho (operaciones, rentabilidad, equipo).</li>
            <li>Diagnóstico estratégico para socios-directores.</li>
            <li>Comunicación cliente–profesional.</li>
            <li>Formación a socios y equipos legales.</li>
            <li>Transición digital en despachos tradicionales.</li>
            <li>Comprensión del marco regulatorio (RGPD, CPACF AR, LFPDPPP MX).</li>
            <li>Negocio legal en Argentina: network propio en el sector.</li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Hitos.</h2>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">[COMPLETAR: año]</div>
              <div className="kv-v">Ingreso al Poder Judicial de Argentina, fuero [COMPLETAR].</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">[COMPLETAR: año]</div>
              <div className="kv-v">[COMPLETAR: cargo específico].</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">[COMPLETAR: año]</div>
              <div className="kv-v">Transición fuera del Poder Judicial a consultoría.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">[COMPLETAR: año]</div>
              <div className="kv-v">Colaboración con Gonzalo y The Funnel Box.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">2026</div>
              <div className="kv-v">Co-fundadora de TFB Legal.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>¿Trabajamos juntos?</h3>
            <p>
              Agendá 30 minutos conmigo. Si tu despacho está en Argentina, o si te interesa trabajar
              la parte de gestión y operación, es mejor empezar por mí.
            </p>
            <div className="cta-actions">
              <Link href="/contacto/?preferencia=carla" className="btn btn-primary btn-arrow">
                Agendar con Carla
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
