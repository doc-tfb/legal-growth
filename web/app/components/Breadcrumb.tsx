import Link from "next/link";

type Crumb = { href?: string; label: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            {i < items.length - 1 ? <span className="breadcrumb-sep" aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
