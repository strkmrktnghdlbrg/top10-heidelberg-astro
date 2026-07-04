# Improvement-Plan: top10-heidelberg.de

> Automatisches Audit vom 2026-07-04. Abarbeitbar von jeder Claude-Session. Vor Deploy: Hosting laut ClickUp-Task prüfen.

## 1. Status (Live?, Hosting/Deploy, Build-Stand)

- **Live**: Ja. `https://www.top10-heidelberg.de/` antwortet 200, Apex 301 auf www (StackCDN/Apache, vermutlich Hostinger).
- **Hosting/Deploy**: GitHub Action `.github/workflows/deploy.yml` (Build & Deploy to cPanel) plus `.cpanel.yml`; zusätzlich `scheduled-rebuild.yml`. Push auf main = Deploy.
- **Build-Stand**: Astro 5 + Tailwind 4 + Pagefind, `output: static`, 73 Seiten (60 Top-10-Listen via `src/pages/[slug].astro`, 6 Themen-Hubs, 5 Events, EN-Varianten unter `/en/`). Letzter relevanter Commit: `96943d9 fix(stay22): /embed/widget -> /embed/gm` (Stay22-Map-Gotcha bereits behoben).
- **Datenmodell**: Listen in `src/data/_top10s.raw.json` (Parser-Output) + Kuration in `src/data/top10s.ts` / `top10s-overrides.ts`.

## 2. Kritische Findings (Sicherheit, kaputte Links, Canonical)

1. **Canonical-Mismatch (SEO-kritisch, Pflicht-Fix)**: Live ist www die 200-Variante (Apex 301 auf www), aber `astro.config.mjs` hat `site: "https://top10-heidelberg.de"` (Apex). Folge: JEDER `<link rel="canonical">` (verifiziert auf der Startseite: `href="https://top10-heidelberg.de/"`), alle Sitemap-URLs (`sitemap-index.xml` listet Apex-Locs) und die Sitemap-Zeile in `public/robots.txt` zeigen auf URLs, die per 301 weiterleiten. Google bekommt widersprüchliche Signale.
   - Fix Variante A (empfohlen, weniger Risiko): `site` in `astro.config.mjs` auf `https://www.top10-heidelberg.de` ändern + `public/robots.txt` Sitemap-Zeile anpassen, Rebuild + Deploy.
   - Fix Variante B: Hosting-Redirect auf www->Apex drehen (laut `DEPLOYMENT-PLAN.md` war Apex-kanonisch geplant, die `.htaccess` mit "www->non-www" greift live offenbar nicht). Nur wählen, wenn Search Console bereits Apex indexiert hat.
2. **`https://www.top10-heidelberg.de/sitemap.xml` liefert 404** - nur `sitemap-index.xml` existiert. Nach Fix 1 in Search Console die Index-Sitemap einreichen; optional Redirect/Alias `sitemap.xml -> sitemap-index.xml`.
3. **Sicherheit: kein Fund.** `.env` (STAY22_API_KEY) liegt lokal, ist NICHT git-getrackt (nur `.env.example`). Keine hartkodierten Secrets in `src/`/`public/`, keine Debug-Dateien, `http://`-Links nur als CC-Lizenz-URLs in `image-credits.ts` (unkritisch). Web3Forms-Key in `kontakt.astro` ist ein Public-Frontend-Key (erwartetes Pattern).

## 3. Vollendung (was zum Fertigstellen fehlt)

Offene Punkte aus `DEPLOYMENT-PLAN.md`, im Code verifiziert:

- **GTM fehlt komplett**: `src/data/analytics.ts` hat `gtmId: ""` - kein Tracking live. GTM-Container anlegen/erfragen und setzen.
- **AdSense-Slot-IDs leer**: `src/data/adsense.ts` hat Publisher `ca-pub-7432388986384363` gesetzt (Script lädt live, `ads.txt` live 200), aber `slots.sidebar/inContent/footer` sind `""`. Manuelle Ad-Units anlegen oder Auto-Ads bewusst dokumentieren.
- **OG-Image fehlt**: `public/og-default.png` (1200x630) noch nicht abgelegt.
- **Content-Qualität**: Doppel-Einträge in `baeckereien` & `cafes`; Item #1 "Schlüsselerkenntnisse" in einigen Stadtteil-Hotel-Listen durch echtes Hotel ersetzen; Genitiv-Reste in `h2-items`-Listen glätten (alles in `src/data/_top10s.raw.json` bzw. `top10s-overrides.ts`).
- **Cookie-Consent**: `CookieBanner.astro` existiert - prüfen, ob AdSense/GTM-Ladeverhalten zur gewünschten Consent-Strategie passt.

## 4. Monetarisierung (vorhanden / fehlend / kaputt)

**Vorhanden (verifiziert live auf Startseite):**
- Stay22: lmaID `6a18cda7a63bc123f3b6d2f0`, `enabled: true`, Allez-Script lädt live; Map nutzt korrekt `/embed/gm`; lmaID ist individuell (kein anderes Projekt im City-Portale-Ordner nutzt sie). Zusätzlich Direct Travel API (`src/lib/stay22.ts`) mit graceful degradation.
- GetYourGuide: Partner-ID `1UPZQQB`, `enabled: true`, Widget-Script lädt live.
- AdSense: Publisher-ID gesetzt, `public/ads.txt` live erreichbar (200).
- Web3Forms in `/kontakt/` (Standard-Key).

**Fehlend (Pflicht-Bausteine laut Playbook):**
- **Parken-und-Fliegen-Landingpage** (`/parken-flughafen-heidelberg/` bzw. FRA-orientiert): existiert nicht, kein `/r/parken-fliegen`-Redirect, kein awin1.com-Link im Code. Pattern siehe `reference_parken_und_fliegen_affiliate.md` (Awin mid 14793, live in 9 Portalen).
- **Apotheken-Affiliate-Seiten** (lokal + Online-Vergleich mit AWIN, Vorbild Frankfurt/Köln, siehe `project_apotheken_seiten_rollout.md`): Es gibt zwar die Top-10-Liste `/apotheken/`, aber keine der beiden monetarisierten Apotheken-Seiten.
- **GTM** (siehe §3) - ohne Tracking keine Monetarisierungs-Optimierung möglich.

**Kaputt:** nichts Gefundenes; Stay22/GYG-Skripte liefern live aus.

## 5. SEO & Traffic (Struktur, interne Links, GEO/AI-Search)

- **JSON-LD** solide: ItemList + ListItem (Listen), FAQPage/Question/Answer, Event, Article, BreadcrumbList, Organization, Place/GeoCoordinates, AboutPage. Gut für LLM-Extraktion.
- **Struktur**: 6 Themen-Hubs (`/thema/<cat>/`) + 60 Listen + Events = brauchbares Topical-Ecosystem. i18n DE/EN vorhanden (EN-Reichweite prüfen: lohnt Pflege oder noindex?).
- **Canonical/Sitemap-Problem aus §2 ist der größte SEO-Hebel** - vor allem anderen fixen.
- **GEO/AI-Search-Readiness**: FAQPage existiert, aber frage-basierte H2/H3-Struktur ("Wo übernachtet man in Heidelberg am besten?") auf den Listen-Seiten ausbauen; Kontext-Attribute (Preise, Öffnungszeiten, Adressen) sind über das Listen-Format teilweise da. Kuratierungs-Hinweis nach Regel "Keine Fake-Autoren-Claims" formulieren.
- **Interne Verlinkung**: Listen verlinken auf Hubs; Querverlinkung zwischen thematisch verwandten Listen (z.B. Stadtteil-Hotel-Listen untereinander + auf künftige Buyer-Intent-Seiten) ausbauen.
- **Event-Seiten** (Schlossbeleuchtung, Weihnachtsmarkt, Schlossfestspiele) sind gute saisonale Traffic-Magneten - jährlich aktualisieren (2026er-Slugs).

## 6. Neue Buyer-Intent-Seiten (Tabelle: URL | Keyword-Idee | Monetarisierung)

| URL | Keyword-Idee | Monetarisierung |
|---|---|---|
| `/schloss-heidelberg-tickets/` | schloss heidelberg tickets, führung, bergbahn | GYG-Widget (Schloss-Touren) |
| `/neckar-schifffahrt-heidelberg/` | neckar schifffahrt heidelberg preise, tickets | GYG + Stay22-NearbyHotels |
| `/weihnachtsmarkt-heidelberg-uebernachtung/` | weihnachtsmarkt heidelberg hotel, übernachtung | Stay22 (Map + TopHotels), interner Link auf Event-Seite |
| `/hotels-mit-schlossblick/` | hotel heidelberg schlossblick | Stay22 |
| `/stadtfuehrungen-heidelberg/` | stadtführung heidelberg buchen, altstadtführung | GYG |
| `/parken-flughafen-heidelberg/` | parken flughafen frankfurt ab heidelberg, park and fly | Awin mid 14793 via `/r/parken-fliegen` (Pattern-Referenz beachten) |
| `/apotheken-heidelberg/` (Ausbau) + `/online-apotheke-vergleich/` | apotheke heidelberg notdienst / online apotheke vergleich | AWIN Apotheken-Programme (Rollout-Memo, Vorbild Köln) |
| `/tagesausflug-heidelberg-ab-frankfurt/` | heidelberg day trip from frankfurt (auch EN) | GYG (Day-Tours) + Stay22 |
| `/wellnesshotels-heidelberg/` | wellnesshotel heidelberg umgebung | Stay22 |
| `/schlossbeleuchtung-tickets/` | schlossbeleuchtung heidelberg schifffahrt tickets | GYG, verlinkt von `/events/schlossbeleuchtung-2026/` |

## 7. Priorisierte Tasks (Checkliste für frische Session)

1. [x] **Canonical-Fix**: In `astro.config.mjs` `site` auf `https://www.top10-heidelberg.de` ändern; in `public/robots.txt` die Sitemap-Zeile auf `https://www.top10-heidelberg.de/sitemap-index.xml` umstellen. Build + Deploy (Push = Deploy via `.github/workflows/deploy.yml`). Danach live prüfen: Canonical-Tag und Sitemap-Locs müssen www zeigen.
2. [ ] **GTM einrichten**: GTM-ID beim Owner erfragen, in `src/data/analytics.ts` setzen.
3. [ ] **Parken-und-Fliegen-Landingpage** bauen: `reference_parken_und_fliegen_affiliate.md` lesen, Seite `/parken-flughafen-heidelberg/` als neue Datei unter `src/pages/` + `/r/parken-fliegen`-Redirect gemäß Hosting (Apache/.htaccess), interne Links von Startseite/relevanten Listen.
4. [ ] **Apotheken-Seiten-Paar** bauen: `project_apotheken_seiten_rollout.md` lesen (AWIN-IDs, `/r/`-Pattern), lokale Seite + Online-Vergleich anlegen, mit bestehender `/apotheken/`-Liste verlinken.
5. [ ] **AdSense-Slots**: Ad-Units im AdSense-Konto anlegen und Slot-IDs in `src/data/adsense.ts` eintragen (oder Auto-Ads-Entscheidung dokumentieren).
6. [ ] **Content-Fixes** in `src/data/_top10s.raw.json` / `src/data/top10s-overrides.ts`: Doppel-Einträge (`baeckereien`, `cafes`), "Schlüsselerkenntnisse"-Items in Stadtteil-Hotel-Listen, Genitiv-Reste.
7. [ ] **OG-Image** `public/og-default.png` (1200x630) erstellen und ablegen.
8. [ ] **2-3 Buyer-Intent-Seiten aus §6 bauen** (Start: Schloss-Tickets, Weihnachtsmarkt-Übernachtung, Neckar-Schifffahrt) als `.astro`-Seiten unter `src/pages/`, mit GYG-Widget (`src/components/GetYourGuideWidget.astro`) bzw. Stay22 (`Stay22Map.astro`, `/embed/gm`!), FAQ-Sektion + FAQPage-JSON-LD.
9. [ ] **Interne Verlinkung** ausbauen: verwandte Listen untereinander + neue Money-Pages von Hubs/Startseite verlinken.
10. [ ] **Search Console**: Nach Fix 1 www-Property prüfen, `sitemap-index.xml` einreichen; 404 von `/sitemap.xml` beobachten.
