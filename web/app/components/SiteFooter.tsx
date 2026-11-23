import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="promoters">
        <div className="band-inner">
          <div className="promoters-row">
            <span className="promoters-label">Impulsada por</span>
            <span className="promoter">the funnel <em>box</em></span>
            <span className="promoter">Brandly</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <h3 className="footer-brand-name">TFB Legal</h3>
              <p className="footer-brand-p">
                Marketing, consultoría, formación y speaker para despachos de abogados medianos en
                España, México y Argentina.
              </p>
            </div>
            <div className="footer-col">
              <h4>Servicios</h4>
              <ul>
                <li><Link href="/servicios/marketing-juridico/">Marketing jurídico</Link></li>
                <li><Link href="/servicios/consultoria-estrategica/">Consultoría</Link></li>
                <li><Link href="/servicios/formacion-para-despachos/">Formación</Link></li>
                <li><Link href="/servicios/speaker-conferencias/">Speaker</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Marca</h4>
              <ul>
                <li><Link href="/nosotros/">Nosotros</Link></li>
                <li><Link href="/metodologia/">Metodología</Link></li>
                <li><Link href="/casos/">Casos</Link></li>
                <li><Link href="/blog/">Journal</Link></li>
                <li><Link href="/contacto/">Contacto</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Recursos y legales</h4>
              <ul>
                <li><Link href="/recursos/benchmark-precios-marketing-juridico-2026/">Benchmark 2026</Link></li>
                <li><Link href="/politicas/aviso-legal/">Aviso legal</Link></li>
                <li><Link href="/politicas/politica-de-privacidad/">Privacidad</Link></li>
                <li><Link href="/politicas/politica-de-cookies/">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>
              &copy; {year} TFB Legal · tfblegal.com
              <span style={{ opacity: 0.6, marginLeft: "8px" }}>
                · Marca de The Funnel Box OÜ · Estonia
              </span>
            </div>
            <div className="footer-bottom-right">
              <a href="https://thefunnelbox.com" target="_blank" rel="noopener noreferrer">The Funnel Box</a>
              <a href="#">Brandly</a>
              <button type="button" className="theme-toggle" id="themeToggle">Tema</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
