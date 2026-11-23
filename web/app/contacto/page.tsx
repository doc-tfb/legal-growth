import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Breadcrumb from "../components/Breadcrumb";
import Interactions from "../components/Interactions";
import { OrganizationSchema, BreadcrumbSchema, FAQSchema } from "../components/Schema";

export const metadata: Metadata = {
  title: "Contacto · Agendá 30 minutos con TFB Legal",
  description:
    "Agendá consulta de 30 minutos por videollamada. Diagnóstico inicial gratuito con 2–3 palancas accionables. Respondemos en menos de 24 h hábiles.",
  alternates: { canonical: "/contacto/" },
  openGraph: {
    title: "Contacto · TFB Legal",
    description:
      "30 minutos sin compromiso. Diagnóstico inicial gratuito para tu despacho.",
    url: "/contacto/",
    type: "website",
    locale: "es_ES",
    siteName: "TFB Legal",
  },
};

export default function ContactoPage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Contacto", url: "/contacto/" },
        ]}
      />
      <FAQSchema
        questions={[
          { q: "¿La primera reunión es realmente gratuita?", a: "Sí. Sin letras chicas, sin pedir tarjeta, sin nada después." },
          { q: "¿Me van a vender a mitad de la reunión?", a: "No. En los primeros 25 minutos no hablamos de servicios ni precios. En los últimos 5, sólo si vos preguntás." },
          { q: "¿Puedo traer a otro socio?", a: "Sí, hasta 2 personas de tu despacho sin pedir permiso." },
          { q: "¿Qué pasa si después no quiero avanzar?", a: "Nada. Te quedás con las palancas que te dimos. No hay follow-up insistente." },
          { q: "¿Trabajan fuera de España, México y Argentina?", a: "Prioridad son esos tres mercados. Si estás en otro país hispanohablante y el proyecto encaja, lo evaluamos." },
        ]}
      />
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb items={[{ href: "/", label: "Inicio" }, { label: "Contacto" }]} />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Contacto</div>
              <h1 className="hero-title">Hablemos.</h1>
              <p className="hero-sub">
                30 minutos por videollamada, sin compromiso. Diagnóstico inicial gratuito. Salís
                con 2–3 palancas accionables aunque no quieras avanzar con nosotros.
              </p>
            </div>
            <dl className="hero-aside">
              <dt>Duración</dt>
              <dd>30 minutos</dd>
              <dt>Formato</dt>
              <dd>Videollamada</dd>
              <dt>Coste</dt>
              <dd>Gratuito</dd>
              <dt>Respuesta</dt>
              <dd>Menos de 24 h hábiles</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Elegí cómo preferís conectar.</h2>
          </div>

          <div className="cards-grid cols-2">
            <div className="card-cell">
              <h3>Agenda directa</h3>
              <p>
                Elegí fecha y hora directamente. Reunión por videollamada. Primera reunión gratuita.
              </p>
              <ul className="feature-list" style={{ marginTop: "8px" }}>
                <li><strong>Con Gonzalo</strong> — marketing, SEO, Ads, IA, ejecución y atribución.</li>
                <li><strong>Con Carla</strong> — gestión, operaciones, equipo, proyectos en Argentina.</li>
                <li>Si querés conocernos a los dos, agendá con Gonzalo y nos sumamos los dos.</li>
              </ul>
              <a href="#agenda" className="card-link">Agendar ahora</a>
            </div>
            <div className="card-cell">
              <h3>Mensaje escrito</h3>
              <p>
                Si preferís explicarnos primero por escrito, usá el formulario. Te respondemos en
                menos de 24 h hábiles.
              </p>
              <a href="#formulario" className="card-link">Ir al formulario</a>
            </div>
          </div>
        </div>
      </section>

      <section id="agenda" className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Agenda directa.</h2>
          </div>
          <div className="coming-soon">
            <h3>Calendly embebido aquí.</h3>
            <p>
              Integración pendiente de configuración del dominio. Mientras tanto, contacto directo:{" "}
              <a href="mailto:gonzalo@thefunnelbox.com" style={{ color: "var(--ink)" }}>
                gonzalo@thefunnelbox.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      <section id="formulario" className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Enviar un mensaje.</h2>
          </div>
          <form
            className="form-grid two-cols"
            id="contactForm"
            action="/contacto/gracias/"
            method="post"
          >
            <div className="form-field">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" type="text" required autoComplete="given-name" />
            </div>
            <div className="form-field">
              <label htmlFor="apellido">Apellido</label>
              <input id="apellido" name="apellido" type="text" required autoComplete="family-name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="form-field">
              <label htmlFor="despacho">Despacho / Empresa</label>
              <input id="despacho" name="despacho" type="text" required autoComplete="organization" />
            </div>
            <div className="form-field">
              <label htmlFor="rol">Rol</label>
              <select id="rol" name="rol" required>
                <option value="">Elige…</option>
                <option>Socio-director</option>
                <option>Abogado sénior / júnior</option>
                <option>Marketing interno</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="pais">País</label>
              <select id="pais" name="pais" required>
                <option value="">Elige…</option>
                <option>España</option>
                <option>México</option>
                <option>Argentina</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="telefono">Teléfono (opcional)</label>
              <input id="telefono" name="telefono" type="tel" autoComplete="tel" />
            </div>
            <div className="form-field">
              <label htmlFor="preferencia">Preferencia</label>
              <select id="preferencia" name="preferencia">
                <option value="">Sin preferencia</option>
                <option value="gonzalo">Gonzalo</option>
                <option value="carla">Carla</option>
              </select>
            </div>
            <div className="form-field full">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" required minLength={50} />
            </div>
            <label className="form-check full">
              <input type="checkbox" required />
              <span>
                He leído y acepto la{" "}
                <Link href="/politicas/politica-de-privacidad/">política de privacidad</Link>.
              </span>
            </label>
            <div className="form-field full">
              <button type="submit" className="btn btn-primary btn-arrow">Enviar mensaje</button>
            </div>
          </form>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Qué esperar de la primera reunión.</h2>
            <span className="section-meta">30 minutos · 4 tramos</span>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">5 min</div>
              <div className="kv-v">Te escuchamos. Cómo está tu despacho hoy, qué te trajo acá.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">10 min</div>
              <div className="kv-v">Preguntamos lo justo para diagnosticar el reto principal.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">10 min</div>
              <div className="kv-v">Te damos 2–3 palancas accionables específicas para tu caso.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">5 min</div>
              <div className="kv-v">
                Si te hace sentido, te explicamos cómo trabajaríamos juntos. Si no, te quedás con
                las palancas.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Otras formas de llegar.</h2>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">Email Gonzalo</div>
              <div className="kv-v"><a href="mailto:gonzalo@thefunnelbox.com">gonzalo@thefunnelbox.com</a></div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Email Carla</div>
              <div className="kv-v">[COMPLETAR · email de Carla]</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">LinkedIn Gonzalo</div>
              <div className="kv-v">[COMPLETAR · URL LinkedIn de Gonzalo Castro]</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">LinkedIn Carla</div>
              <div className="kv-v">[COMPLETAR · URL LinkedIn de Carla Fresch Pons]</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Ciudades base</div>
              <div className="kv-v">España (Gonzalo) · [COMPLETAR · ciudad de Carla]</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Responsable legal</div>
              <div className="kv-v">
                The Funnel Box OÜ · Estonia · ver{" "}
                <Link href="/politicas/aviso-legal/">aviso legal</Link>.
              </div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Presencial</div>
              <div className="kv-v">
                Trabajamos remoto. Si el despacho está en Madrid, Barcelona, Buenos Aires o Ciudad
                de México y preferís reunión presencial, se puede coordinar.
              </div>
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
                <summary>¿La primera reunión es realmente gratuita?</summary>
                <div className="faq-a">Sí. Sin letras chicas, sin pedir tarjeta, sin nada después.</div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Me van a vender a mitad de la reunión?</summary>
                <div className="faq-a">
                  No. En los primeros 25 minutos no hablamos de servicios ni precios. En los últimos
                  5, sólo si vos preguntás.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Puedo traer a otro socio?</summary>
                <div className="faq-a">
                  Sí, hasta 2 personas de tu despacho sin pedir permiso. Si queréis venir más,
                  avisanos antes para adaptar la dinámica.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Qué pasa si después no quiero avanzar?</summary>
                <div className="faq-a">
                  Nada. Te quedás con las palancas que te dimos. No hay follow-up insistente ni
                  emails semanales.
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>¿Trabajan fuera de España, México y Argentina?</summary>
                <div className="faq-a">
                  Prioridad son esos tres mercados. Si estás en otro país hispanohablante y el
                  proyecto encaja, lo evaluamos.
                </div>
              </details>
            </li>
          </ul>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
