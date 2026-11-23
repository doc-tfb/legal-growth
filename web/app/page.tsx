import Interactions from "./components/Interactions";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="status-bar">
        <strong>Borrador visual</strong>
        <span>Copy provisorio y placeholders. Fotos, logos y testimonios los pasa Neo.</span>
      </div>

      <nav className="nav" id="nav">
        <div className="nav-row">
          <a href="#" className="brand">
            TFB Legal
          </a>
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#casos">Casos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#journal">Journal</a>
          </div>
          <a href="#contacto" className="nav-cta">
            Hablemos
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero band">
        <div className="band-inner">
          <h1 className="hero-title">
            Crecimiento <em>ejecutado</em>, no sugerido.
          </h1>
          <p className="hero-sub">
            Consultoría para despachos de abogados medianos en España, México y Argentina.
            Diagnosticamos, ejecutamos el marketing, formamos al equipo. Nada flota en estrategia.
          </p>

          <dl className="hero-meta">
            <div>
              <dt>Dirigido por</dt>
              <dd>Gonzalo Castro &amp; Carla Fresch Pons</dd>
            </div>
            <div>
              <dt>Para</dt>
              <dd>Despachos de 5 a 30 abogados</dd>
            </div>
            <div>
              <dt>Mercados</dt>
              <dd>España · México · Argentina</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* FIRMA */}
      <section className="firma">
        <div className="band-inner">
          <p className="firma-quote">
            La mayoría de las consultoras legales <em>diagnostican</em>. La mayoría de las agencias{" "}
            <em>ejecutan</em>. Nosotros hacemos ambas.
          </p>
          <div className="firma-attr">— Una firma impulsada por The Funnel Box y Brandly</div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="diff band">
        <div className="band-inner">
          <div className="diff-item reveal">
            <h2>
              Ejecución, <em>no solo planes</em>.
            </h2>
            <p>
              The Funnel Box opera por detrás. Si el diagnóstico dice que hay que posicionar en
              Google, posicionamos. Si dice que hay que armar un CRM con atribución, lo armamos.
            </p>
          </div>
          <div className="diff-item reveal">
            <h2>
              Carla <em>estuvo</em> del otro lado.
            </h2>
            <p>
              Más de diez años en el Poder Judicial de Argentina. Entra a una reunión con un
              socio-director como par, no como vendedora. Esa diferencia no se compra.
            </p>
          </div>
          <div className="diff-item reveal">
            <h2>
              Tres mercados, <em>tres playbooks</em>.
            </h2>
            <p>
              España empieza por marketing jurídico. México por IA aplicada al despacho. Argentina
              por LinkedIn y eventos. Cada país con su propio eje de entrada.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <h2 className="index-title reveal">Lo que hacemos cuando entramos a un despacho.</h2>

          <ul className="services-list">
            <li>
              <a href="#" className="service-row reveal">
                <h3 className="service-name">Marketing jurídico</h3>
                <p className="service-desc">
                  SEO, Google Ads, LinkedIn, email, web. Ejecución real, atribución al cliente
                  firmado — no a leads que nunca llaman.
                </p>
                <span className="service-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="service-row reveal">
                <h3 className="service-name">Consultoría estratégica</h3>
                <p className="service-desc">
                  Diagnóstico de crecimiento, palancas, pricing, rentabilidad por cliente,
                  estructura comercial. Para socios-directores saturados.
                </p>
                <span className="service-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="service-row reveal">
                <h3 className="service-name">Formación</h3>
                <p className="service-desc">
                  In-company o programa abierto con partner académico. Contenido práctico que la
                  plantilla usa el lunes por la mañana.
                </p>
                <span className="service-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="service-row reveal">
                <h3 className="service-name">Speaker</h3>
                <p className="service-desc">
                  Keynotes y ponencias en congresos legaltech, programas académicos y eventos
                  corporativos. Material propio, nunca enlatado.
                </p>
                <span className="service-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CASO destacado */}
      <section id="casos" className="caso dark-band band">
        <div className="band-inner">
          <div>
            <div className="caso-label reveal">Un caso</div>
            <h2 className="caso-headline reveal">
              De WordPress <em>legacy</em> a un stack con atribución real.
            </h2>
          </div>
          <div className="caso-body reveal">
            <p>
              Gestores Concursales, despacho español especializado en concurso de acreedores.
              Llegaba con un WordPress lento, sin atribución de leads y con un pipeline que
              terminaba en un Excel.
            </p>
            <p>
              Salió con un stack propio, SEO técnico al día y cada contacto llegando al CRM con
              origen. Cifras finales pendientes de consolidar a seis meses post-cutover.
            </p>
            <a href="#" className="caso-link">
              Leer el caso completo →
            </a>
          </div>
        </div>
      </section>

      {/* Casos secundarios */}
      <section className="casos-sec band">
        <div className="band-inner">
          <article className="reveal">
            <div className="caso-sec-label">Orejas Abogados · Oviedo</div>
            <h3 className="caso-sec-name">
              Posicionar a un despacho fuera del eje Madrid–Barcelona.
            </h3>
            <p className="caso-sec-desc">
              SEO local, Google Ads provincial y Meta Ads. Prueba de que el modelo funciona también
              cuando el despacho no está en capital.
            </p>
          </article>
          <article className="reveal">
            <div className="caso-sec-label">Próximamente · México</div>
            <h3 className="caso-sec-name">
              Piloto de IA aplicada al despacho fiscal en CDMX.
            </h3>
            <p className="caso-sec-desc">
              IA para redacción asistida, automatización documental y CRM. Lanzamiento previsto para
              mes 13 del plan.
            </p>
          </article>
        </div>
      </section>

      {/* VALORACIONES */}
      <section className="valoraciones band">
        <div className="band-inner">
          <h2 className="index-title reveal">
            Lo que dicen los <em>despachos</em> con los que trabajamos.
          </h2>

          <div className="valoraciones-grid">
            <article className="valoracion reveal">
              <p className="valoracion-pending">
                Testimonio pendiente de aprobación con Mónica Usón y Leticia Montalvo. Se publica en
                cuanto confirmen la cita final.
              </p>
              <div className="valoracion-attr">
                <div className="valoracion-mark">GC</div>
                <div className="valoracion-attr-info">
                  <div className="valoracion-attr-name">Gestores Concursales</div>
                  <div className="valoracion-attr-role">Despacho concursal · España</div>
                </div>
              </div>
            </article>

            <article className="valoracion reveal">
              <p className="valoracion-pending">
                Testimonio pendiente de aprobación con Orejas Abogados. Se publica en cuanto
                confirmen la cita final.
              </p>
              <div className="valoracion-attr">
                <div className="valoracion-mark">OA</div>
                <div className="valoracion-attr-info">
                  <div className="valoracion-attr-name">Orejas Abogados</div>
                  <div className="valoracion-attr-role">Despacho mediano · Oviedo</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FUNDADORES */}
      <section
        id="nosotros"
        className="fundadores band"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div className="band-inner">
          <h2 className="index-title reveal">
            La firma la ponen <em>dos personas</em>.
          </h2>

          <article className="fundador reveal">
            <div
              className="fundador-img"
              aria-label="Retrato de Gonzalo Castro — pendiente de sesión fotográfica"
            >
              <div className="fundador-img-mono">
                <span>GC</span>
              </div>
              <div className="fundador-img-top">Retrato · pendiente</div>
              <div className="fundador-img-bottom">
                <span>Gonzalo Castro</span>
                <span>2027</span>
              </div>
            </div>
            <div className="fundador-info">
              <h3 className="fundador-name">Gonzalo Castro</h3>
              <p className="fundador-role">Dirección · Ejecución · Speaker</p>
              <div className="fundador-bio">
                <p>
                  Director y fundador de The Funnel Box, consultora de marketing digital e IA con
                  base en España. Trabaja con clientes internacionales en captación, automatización
                  y optimización.
                </p>
                <p>
                  Casos relevantes con despachos: Gestores Concursales (España) y Orejas Abogados
                  (Oviedo). Experiencia transversal con Google Ads, Meta Ads, HubSpot, Sanity,
                  Vercel.
                </p>
              </div>
              <div className="fundador-links">
                <a href="#">LinkedIn</a>
                <a href="mailto:gonzalo@thefunnelbox.com">Email</a>
              </div>
            </div>
          </article>

          <article className="fundador flip reveal">
            <div
              className="fundador-img"
              aria-label="Retrato de Carla Fresch Pons — pendiente de sesión fotográfica"
            >
              <div className="fundador-img-mono">
                <span>CF</span>
              </div>
              <div className="fundador-img-top">Retrato · pendiente</div>
              <div className="fundador-img-bottom">
                <span>Carla Fresch Pons</span>
                <span>2027</span>
              </div>
            </div>
            <div className="fundador-info">
              <h3 className="fundador-name">Carla Fresch Pons</h3>
              <p className="fundador-role">Consultoría · Credibilidad gremial · AR</p>
              <div className="fundador-bio">
                <p>
                  Más de diez años en el Poder Judicial de Argentina. Hoy ayuda a estudios y
                  despachos a crecer desde adentro.
                </p>
                <p>
                  Cuando entra a una reunión con un socio-director, la conversación ocurre entre
                  pares. Esa diferencia estructural es lo que permite entrar a despachos premium que
                  normalmente rechazan a agencias externas.
                </p>
              </div>
              <div className="fundador-links">
                <a href="#">LinkedIn</a>
                <a href="#">Perfil completo</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="magnet soft-band band">
        <div className="band-inner">
          <div className="reveal">
            <h2 className="magnet-title">
              Benchmark de precios <em>2026</em>.
            </h2>
            <p className="magnet-desc">
              Qué están pagando los despachos medianos en España por SEO, Google Ads, LinkedIn y
              web, ahora mismo. Rangos reales, por tamaño de firma. 22 páginas en PDF.
            </p>
          </div>
          <form className="magnet-form reveal" id="magnetForm">
            <input
              id="magnetEmail"
              type="email"
              required
              placeholder="Email del despacho"
              autoComplete="email"
            />
            <input
              id="magnetFirm"
              type="text"
              placeholder="Nombre del despacho (opcional)"
              autoComplete="organization"
            />
            <button type="submit">Enviarme el benchmark</button>
            <div className="magnet-fine">
              Un email, el PDF directo a tu bandeja. Puedes darte de baja cuando quieras.
            </div>
          </form>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="journal" className="band" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="band-inner">
          <h2 className="journal-title reveal">
            Lo que escribimos, <em>lo escribimos.</em>
          </h2>

          <ul className="journal-list">
            <li>
              <a href="#" className="journal-entry reveal">
                <span className="journal-date">Noviembre 2026</span>
                <h3 className="journal-title-entry">
                  Cómo armar un plan de marketing anual para un despacho de 15 personas.
                </h3>
                <span className="journal-author">Gonzalo Castro</span>
              </a>
            </li>
            <li>
              <a href="#" className="journal-entry reveal">
                <span className="journal-date">Noviembre 2026</span>
                <h3 className="journal-title-entry">
                  El socio-director como cuello de botella: señales y qué hacer.
                </h3>
                <span className="journal-author">Carla Fresch Pons</span>
              </a>
            </li>
            <li>
              <a href="#" className="journal-entry reveal">
                <span className="journal-date">Octubre 2026</span>
                <h3 className="journal-title-entry">
                  IA para despachos en 2026: qué hace realmente y qué no.
                </h3>
                <span className="journal-author">Gonzalo Castro</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* IMPULSADA POR */}
      <section className="promoters">
        <div className="band-inner">
          <div className="promoters-label">Impulsada por</div>
          <div className="promoters-row">
            <div className="promoter">
              <div className="promoter-logo">
                the funnel <em>box</em>
              </div>
              <div className="promoter-role">Brazo ejecutor · Marketing e IA</div>
            </div>
            <div className="promoter-sep" aria-hidden="true"></div>
            <div className="promoter">
              <div className="promoter-logo">Brandly</div>
              <div className="promoter-role">Co-promotor · Partner estratégico</div>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section id="contacto" className="dark-band band">
        <div className="band-inner">
          <h2 className="closing-h">
            Treinta minutos.
            <br />
            Sin proposal plantilla.
          </h2>
          <p className="closing-p">
            Contás dónde está el despacho. Miramos cifras reales. Salís con tres palancas
            accionables. Si hay encaje, armamos propuesta. Si no, se queda con el diagnóstico.
          </p>
          <a href="#" className="closing-cta">
            Agendar la consulta
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <h3 className="footer-brand-name">TFB Legal</h3>
              <p className="footer-brand-p">
                Consultoría de crecimiento para despachos de abogados medianos. Dirigida por Gonzalo
                Castro y Carla Fresch Pons. Impulsada por The Funnel Box y Brandly.
              </p>
            </div>
            <div className="footer-col">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#">Marketing jurídico</a></li>
                <li><a href="#">Consultoría</a></li>
                <li><a href="#">Formación</a></li>
                <li><a href="#">Speaker</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Firma</h4>
              <ul>
                <li><a href="#">Gonzalo Castro</a></li>
                <li><a href="#">Carla Fresch Pons</a></li>
                <li><a href="#">Metodología</a></li>
                <li><a href="#">Casos</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Más</h4>
              <ul>
                <li><a href="#">Journal</a></li>
                <li><a href="#">Benchmark 2026</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>
              &copy; {year} TFB Legal · Impulsada por The Funnel Box y Brandly
            </div>
            <div className="footer-bottom-right">
              <a href="#">Aviso legal</a>
              <a href="#">Privacidad</a>
              <a href="#">Cookies</a>
              <button type="button" className="theme-toggle" id="themeToggle">
                Tema
              </button>
            </div>
          </div>
        </div>
      </footer>

      <Interactions />
    </>
  );
}
