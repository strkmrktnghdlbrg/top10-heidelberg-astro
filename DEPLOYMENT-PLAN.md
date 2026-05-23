# top10-heidelberg.de — Deployment & Content-Plan

Listicle-Portal nach Astro 5 / Tailwind 4, aufgebaut aus dem WP-Scrape vom Mai 2026.
Eigenständige Marke (Top10-Gold + Fraunces Display-Schrift), keine Canonical-Verbindung zu heidelberg-interaktiv.de.

## Stand nach Setup

- **73 statische Seiten** gebaut (`npm run build`)
- **60 Top-10-Listen** automatisch aus WP-HTML extrahiert via `scripts/parse-top10.py`
- **6 Themen-Hubs** unter `/thema/<slug>/`
- **Sitemap, robots.txt, .htaccess** generiert
- **Stay22 / GetYourGuide / GTM / AdSense** verkabelt, aber per Feature-Flag deaktiviert bis IDs gesetzt sind

## Content-Status

Pro Liste hat der Parser ein `pattern` und `weak`-Flag gesetzt — sichtbar als orange "Entwurf"-Badge im UI:

| Pattern | Bedeutung | Anzahl |
|---|---|---|
| `rank-list` | "1. Name – Beschreibung" Format, sauber extrahiert | ~25 |
| `named-sections` | H3 = Name + folgende `<p>` = Beschreibung (Hotel-Stadtteile, Bäckerei-Stil) | ~18 |
| `h2-items` | H2 = Item-Heading (Sights, Outdoor, Historisches) — Item-Namen wurden aus Imperativ-Floskeln freigeschält | ~16 |
| `weak` | Parser fand keine echten Anbieter — nur generische Floskel-H2 | 1 (`online-werbeagenturen`) |

**Datenquelle:** `src/data/_top10s.raw.json` (vom Parser geschrieben).
Wer die Anbieter-Texte direkt editieren möchte: dort. Wer Title/Subtitle/Kategorie
ändern möchte: in `src/data/top10s.ts` im `curated`-Mapping.

## TODO vor Go-Live

### Pflicht

- [ ] `src/data/legal.ts` mit echten Impressum-Daten füllen
- [ ] `src/data/analytics.ts` GTM-ID setzen
- [ ] `src/data/adsense.ts` Publisher-ID + Slot-IDs setzen
- [ ] `public/ads.txt` mit `google.com, pub-XXX, DIRECT, f08c47fec0942fa0`
- [ ] `src/data/affiliate.ts` Stay22 `lmaId` + GYG `partnerId` setzen, `enabled: true`
- [ ] Google Search Console — meta-verification in BaseLayout falls nötig

### Empfehlenswert

- [ ] Item-Namen mit Genitiv-Resten ("Heidelberger Schlosses" → "Heidelberger Schloss")
      in `_top10s.raw.json` glätten (ca. 10-15 Stellen, siehe pattern: `h2-items`)
- [ ] Liste `online-werbeagenturen` redaktionell befüllen (10 echte Heidelberger Agenturen)
- [ ] Doppel-Einträge in `baeckereien` & `cafes` (z.B. "Bäckerei Müller" 2x, "Café Gundel" 2x) korrigieren
- [ ] Item #1 in einigen Stadtteil-Hotel-Listen ist "Schlüsselerkenntnisse" — durch echtes Hotel ersetzen
- [ ] OG-Image 1200×630 nach `public/og-default.png` legen

### Optional

- [ ] Eigene Fotos pro Top-10-Liste (`public/images/lists/<slug>.jpg`) und im Template einbinden
- [ ] Cookie-Consent-Banner einbauen (Borlabs, Klaro o.ä.) wenn GTM/AdSense live geht
- [ ] Reiseplaner-Feature aktivieren (`features.reiseplaner.enabled = true`) wenn Guide-Content da
- [ ] Newsletter-Integration (Web3Forms-Pattern bereits in /kontakt/ vorhanden)

## Deploy-Optionen

### Option A: Hostinger (Apache Shared Hosting)

```bash
npm run build
cd dist && zip -rq ../releases/top10-heidelberg-build-$(date +%Y%m%d-%H%M).zip . .htaccess
# Upload via Hostinger File Manager nach /home/.../public_html/
```

`.htaccess` MUSS mit hochgeladen werden (HTTPS-Force, www→non-www, 410 für /feed, /wp-json).

### Option B: Cloudflare Pages

- Repo → Cloudflare Pages anbinden
- Build-Command: `npm run build`
- Output: `dist`
- DNS via Cloudflare-Nameserver
- `.htaccess` wird ignoriert — Redirects über `public/_redirects` (TODO bei Bedarf)

## Monatlicher Rebuild (optional)

GitHub Action mit Cron `0 3 1 * *` → 1. jedes Monats Rebuild & Auto-Deploy.
Aktuell **nicht** eingerichtet, da Inhalte statisch und Datums-frei sind.

## Affiliate-Wirtschaftlichkeit

- **Stay22** rendert auf 15 Stadtteil-Hotel-Listen + auf `/hotels/` = 16 Maps mit Booking-Affiliate
- **GetYourGuide** rendert auf 2 Touristen-Listen (`sehenswuerdigkeiten`, `outdoor-aktivitaeten`)
- **AdSense** in jeder Liste (Sidebar + In-Content) sobald `publisherId` gesetzt

## Lokaler Dev-Server

```bash
npm run dev   # http://localhost:4329
```
