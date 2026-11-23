import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Breadcrumb from "../../components/Breadcrumb";
import Interactions from "../../components/Interactions";

export const metadata: Metadata = {
  title: "Speaker · Ponencias en marketing jurídico e IA · TFB Legal",
  description:
    "Keynotes, workshops y mesas redondas para congresos legaltech, programas académicos y eventos corporativos. Marketing jurídico, IA aplicada al despacho y gestión. ES, MX, AR.",
  alternates: { canonical: "/servicios/speaker-conferencias/" },
};

export default function SpeakerPage() {
  return (
    <>
      <SiteHeader />

      <div className="band-inner">
        <Breadcrumb
          items={[
            { href: "/", label: "Inicio" },
            { href: "/servicios/", label: "Servicios" },
            { label: "Speaker" },
          ]}
        />
      </div>

      <header className="hero">
        <div className="band-inner">
          <div className="hero-row">
            <div>
              <div className="eyebrow">Servicio · Evento</div>
              <h1 className="hero-title">Speaker · Ponencias en marketing jurídico e IA aplicada.</h1>
              <p className="hero-sub">
                Keynotes, workshops y mesas redondas para congresos legaltech, universidades,
                programas académicos y eventos corporativos del sector legal. España, México y
                Argentina.
              </p>
              <div className="hero-actions">
                <Link href="/contacto/" className="btn btn-primary btn-arrow">Solicitar propuesta</Link>
                <a href="mailto:gonzalo@thefunnelbox.com" className="btn btn-ghost">Email directo</a>
              </div>
            </div>
            <dl className="hero-aside">
              <dt>Idiomas</dt>
              <dd>Español · Inglés</dd>
              <dt>Formatos</dt>
              <dd>Keynote · Workshop · Mesa redonda · Fireside chat</dd>
              <dt>Fee</dt>
              <dd>A consultar según formato y contexto</dd>
              <dt>Agenda</dt>
              <dd>Con 30 días de anticipación mínimo</dd>
            </dl>
          </div>
        </div>
      </header>

      <section className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Cuatro ejes de ponencias.</h2>
          </div>
          <div className="cards-grid cols-2">
            <div className="card-cell">
              <h3>01 · Marketing jurídico que funciona</h3>
              <p>
                Keynote (45–60 min): cómo construir un sistema de captación para despachos
                medianos. Workshop (medio día): aplicar el framework de 4 fases. Mesa redonda:
                evolución del marketing legal en ES/MX/AR. Habla principalmente Gonzalo.
              </p>
            </div>
            <div className="card-cell">
              <h3>02 · IA para despachos</h3>
              <p>
                Keynote: qué hace la IA realmente, qué no, qué riesgos. Workshop: evaluar
                herramientas legaltech sin que te vendan humo. Mesa redonda: regulación. Gonzalo;
                co-presentación con Carla en mesa redonda.
              </p>
            </div>
            <div className="card-cell">
              <h3>03 · Gestión del despacho medio</h3>
              <p>
                Keynote: el socio-director como cuello de botella (y cómo salir). Workshop:
                diagnóstico operativo exprés. Mesa redonda: estructuras de equipo. Habla
                principalmente Carla.
              </p>
            </div>
            <div className="card-cell">
              <h3>04 · Transición del abogado</h3>
              <p>
                Keynote: de la práctica profesional a la gestión. 10 años en el Poder Judicial de
                Argentina. Workshop: skills no-jurídicos. Mesa redonda: perfiles emergentes.
                Habla Carla.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Formatos y duración.</h2>
          </div>
          <div className="kv-table">
            <div className="kv-row">
              <div className="kv-k">Keynote</div>
              <div className="kv-v">45–60 min · congresos, eventos corporativos, lanzamientos.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Workshop interactivo</div>
              <div className="kv-v">Medio día (3–4 h) · formaciones específicas, reuniones directivas.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Mesa redonda / panel</div>
              <div className="kv-v">60–90 min · debate sectorial, co-dictado con otros expertos.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Fireside chat / entrevista</div>
              <div className="kv-v">30–45 min · podcast, lives, formatos conversacionales.</div>
            </div>
            <div className="kv-row">
              <div className="kv-k">Modalidad</div>
              <div className="kv-v">Presencial · Remoto · Híbrido.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Lo que te damos si nos invitás.</h2>
          </div>
          <ul className="feature-list two-col-list">
            <li>Bio corta (100 palabras) y bio larga (250 palabras).</li>
            <li>3 títulos alternativos por conferencia.</li>
            <li>Abstract de 150–200 palabras por charla.</li>
            <li>Backdrop / slide de presentación con tu logo (si aplica).</li>
            <li>Keynote base en Keynote / PowerPoint adaptable al evento.</li>
            <li>Materiales para la audiencia (si el formato lo requiere).</li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Fee.</h2>
          </div>
          <div className="prose">
            <p>
              <strong>No publicamos fee cerrado.</strong> Depende de:
            </p>
          </div>
          <ul className="feature-list" style={{ marginTop: "16px", maxWidth: "60ch" }}>
            <li>Formato (keynote vs workshop vs mesa redonda).</li>
            <li>Presencial vs remoto.</li>
            <li>Mercado (ES / MX / AR).</li>
            <li>Volumen de audiencia y relevancia del evento.</li>
            <li>Si es evento comercial, académico o pro bono.</li>
          </ul>
          <div className="prose" style={{ marginTop: "20px" }}>
            <p>
              <strong>Rango de referencia del mercado español:</strong> 1.500–6.000 € por ponencia
              de 45–60 minutos (presencial). Para eventos académicos o pro bono valoramos el
              intercambio (visibilidad, publicación, acceso a audiencia específica).
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <h2 className="section-title">Dónde pisamos escenario.</h2>
          </div>
          <ul className="feature-list two-col-list">
            <li>Congresos legaltech: Legal Tech Expo Madrid, Legaltech ICAB Barcelona, Legal Innovation Days WK, Legaltech CDMX, Legaltech AR CABA.</li>
            <li>Programas académicos: ESADE Law, IE Law, Anáhuac Derecho, ESEADE, UBA, UCA.</li>
            <li>Proveedores legaltech: Aranzadi, Lefebvre, Wolters Kluwer, Thomson Reuters, Lemontech.</li>
            <li>Encuentros de colegios profesionales.</li>
            <li>Eventos internos de despachos grandes (formación, kick-off anual).</li>
          </ul>
        </div>
      </section>

      <section className="band soft-band">
        <div className="band-inner">
          <div className="cta-block">
            <h3>¿Querés invitarnos a tu evento?</h3>
            <p>
              Contanos: fecha, formato, audiencia, qué tema te interesa. Respondemos en menos de 48
              horas con fee y propuesta de contenido.
            </p>
            <div className="cta-actions">
              <Link href="/contacto/" className="btn btn-primary btn-arrow">Solicitar propuesta</Link>
              <a href="mailto:gonzalo@thefunnelbox.com" className="btn btn-ghost">gonzalo@thefunnelbox.com</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <Interactions />
    </>
  );
}
