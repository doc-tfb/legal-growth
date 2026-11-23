import Link from "next/link";

export default function SiteHeader() {
  return (
    <>
      <div className="status-bar">
        <strong>Borrador operativo</strong>
        <span>Copy y rangos sujetos a cambios</span>
      </div>

      <nav className="nav" id="nav">
        <div className="nav-row">
          <Link href="/" className="brand">
            TFB <em>·</em> Legal
          </Link>
          <div className="nav-links">
            <Link href="/servicios/">Servicios</Link>
            <Link href="/casos/">Casos</Link>
            <Link href="/metodologia/">Metodología</Link>
            <Link href="/blog/">Journal</Link>
            <Link href="/contacto/">Contacto</Link>
          </div>
          <Link href="/contacto/" className="nav-cta">Agendar 30′</Link>
        </div>
      </nav>
    </>
  );
}
