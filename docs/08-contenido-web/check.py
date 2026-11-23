#!/usr/bin/env python3
"""Revisión de copy en docs/08-contenido-web/: voseo, firmas-como-despacho, cohorte, cifras retiradas, «Práxis»/«Praxis», M20 / Miralles / Pedro García y frases prohibidas. El +800 % de Gestores Concursales ya no se marca como cifra retirada: está en la ficha publicada de thefunnelbox.com."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent

VOSEO = re.compile(
    r"""\b(
        vendés|tenés|querés|hacés|podés|conocé|agendá|operés|facturás|
        captás|retenés|dejás|escribís|sumate|empezá|mirá|decidís|
        entendés|podés|sos\b|estás\b
    )""",
    re.IGNORECASE | re.VERBOSE,
)

# «firma(s)» as law firm, not digital signature / signing a plan
FIRMA = re.compile(r"\bfirmas?\b", re.IGNORECASE)
FIRMA_OK = re.compile(
    r"firma digital|firmar|firmado|firmante|quien lo firma|lo firma|se firma|irán firmados|firmamos",
    re.IGNORECASE,
)

COHORTE = re.compile(r"\bcohorte", re.IGNORECASE)
EMDASH = re.compile(r"—")

FORBIDDEN = [
    (re.compile(r"en un mundo donde", re.I), "frase prohibida: «en un mundo donde»"),
    (re.compile(r"no es [^,\n]{0,80}, es ", re.I), "giro «no es X, es Y»"),
    (re.compile(r"\bpotenci[áa]r?\b", re.I), "potenciar / potenciá"),
    (re.compile(r"\btransform[áa]r?\b", re.I), "transformar / transformá (salvo si es cita; revisar)"),
    (re.compile(r"\brevolucion[áa]r?\b", re.I), "revolucioná / revolucionar"),
    (re.compile(r"\bimpulsar\b", re.I), "impulsar"),
    (re.compile(r"siguiente nivel", re.I), "siguiente nivel"),
    (re.compile(r"partner estratégico", re.I), "partner estratégico"),
    (re.compile(r"transformación digital", re.I), "transformación digital"),
    (re.compile(r"miembro de Forbes", re.I), "«miembro de Forbes» (usar perfil preaprobado)"),
    (re.compile(r"5 empresas fundadas", re.I), "cifra retirada: 5 empresas fundadas"),
    (re.compile(r"\+100\s+proyectos", re.I), "cifra retirada: +100 proyectos"),
    (re.compile(r"\+80\s+con IA", re.I), "cifra retirada: +80 con IA"),
    (re.compile(r"\+340\s*%", re.I), "cifra de versión descartada (+340 %)"),
    (re.compile(r"pr[áa]xis", re.I), "nombre provisorio «Práxis»/«Praxis» (la marca es TFB Legal)"),
]

# Nombres de un caso que no se publica en esta web.
# Se buscan en el copy público y en INDICE.md / FUENTES.md (no en LEEME, CHECK ni INDICE-FOTOS).
EXCLUDED_CASE = [
    (re.compile(r"\bM20\b", re.I), "caso excluido: M20"),
    (re.compile(r"Miralles", re.I), "caso excluido: Miralles"),
    (re.compile(r"Pedro\s+Garc[íi]a", re.I), "caso excluido: Pedro García"),
]
# En INDICE.md se permite registrar la exclusión, sin otros nombres.
EXCLUDED_CASE_ALLOWED = re.compile(r"M20 queda fuera", re.I)

# Draft-only mentions of discarded figures in notes are tagged separately
NOTE_RE = re.compile(r"^\s*>")  # markdown blockquote (Notas para Iris)


def is_note(line: str) -> bool:
    return bool(NOTE_RE.match(line))


def scan(path: Path) -> list[tuple[str, int, str, str]]:
    hits = []
    text = path.read_text(encoding="utf-8")
    for i, line in enumerate(text.splitlines(), 1):
        zone = "nota" if is_note(line) else "copy"
        if VOSEO.search(line):
            hits.append((zone, i, "voseo", line.strip()))
        for m in FIRMA.finditer(line):
            window = line[max(0, m.start() - 24) : m.end() + 24]
            if FIRMA_OK.search(line):
                continue
            # allow the word inside a warning about not using it
            if "nunca «firmas»" in line or "nunca «firmas»" in line or "«firmas»" in line:
                continue
            if "firmas» como" in line or "«firma(s)»" in line or "firma(s)" in line:
                continue
            hits.append((zone, i, "firma(s) como posible despacho", line.strip()))
        if COHORTE.search(line):
            hits.append((zone, i, "cohorte", line.strip()))
        if EMDASH.search(line):
            hits.append((zone, i, "raya larga (—)", line.strip()))
        for pat, label in FORBIDDEN:
            if pat.search(line):
                hits.append((zone, i, label, line.strip()))
        for pat, label in EXCLUDED_CASE:
            if pat.search(line):
                if path.name == "INDICE.md" and EXCLUDED_CASE_ALLOWED.search(line) and not re.search(r"Miralles|Pedro\s+Garc[íi]a", line, re.I):
                    continue
                hits.append((zone, i, label, line.strip()))
    return hits


META_NAMES = {
    "INDICE.md", "FUENTES.md", "LEEME-IRIS.md", "CHECK.md", "check.py"
}

def zone_for(path: Path, line_zone: str) -> str:
    if path.name in META_NAMES or path.name == "INDICE-FOTOS.md":
        return "meta"
    return line_zone

def main() -> int:
    files = sorted(p for p in ROOT.rglob("*.md") if p.name != "CHECK.md")
    report = []
    copy_hits = 0
    note_hits = 0
    meta_hits = 0
    for f in files:
        rel = f.relative_to(ROOT)
        hits = scan(f)
        for zone, i, kind, line in hits:
            zone = zone_for(f, zone)
            if kind.startswith("caso excluido:"):
                # Solo copy público e INDICE/FUENTES. No se evalúa en LEEME, CHECK, INDICE-FOTOS ni en notas.
                if zone == "nota":
                    continue
                if zone == "meta" and f.name not in {"INDICE.md", "FUENTES.md"}:
                    continue
            if zone == "copy":
                copy_hits += 1
            elif zone == "nota":
                note_hits += 1
            else:
                meta_hits += 1
            report.append(f"- `{rel}:{i}` [{zone}] {kind}: {line[:200]}")
    print(f"Archivos revisados: {len(files)}")
    print(f"Hallazgos en copy público (páginas 01-16, fuera de blockquotes): {copy_hits}")
    print(f"Hallazgos en notas para Iris (blockquote): {note_hits}")
    excluded_hits = sum(1 for row in report if "caso excluido:" in row)
    print(f"Hallazgos en documentos meta (INDICE, FUENTES, LEEME-IRIS, INDICE-FOTOS): {meta_hits}")
    print(f"Hallazgos de caso excluido (copy público, INDICE o FUENTES): {excluded_hits}")
    print()
    print("Criterio de aprobación: cero hallazgos en copy público y cero menciones del caso excluido en copy, INDICE o FUENTES (salvo la frase de cierre «M20 queda fuera» en INDICE.md). Las notas y los demás docs meta pueden citar las formas prohibidas para advertir que no se usen.")
    if report:
        print()
        print("Detalle:")
        print("\n".join(report))
    return 0 if copy_hits == 0 and excluded_hits == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
