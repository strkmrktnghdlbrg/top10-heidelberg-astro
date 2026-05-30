/**
 * Zentrales Daten-File für alle Top-10-Listen.
 * Quelle: WP-Scrape von top10-heidelberg.de (Mai 2026), via
 * scripts/parse-top10.py in src/data/_top10s.raw.json verarbeitet.
 *
 * Mapping zwischen Slug → Kategorie + Display-Title + Subtitle wird
 * hier kuratiert, weil die WP-Titel teils zu lang/SEO-überfrachtet sind.
 *
 * Item-Texte werden direkt aus _top10s.raw.json gelesen; sie sind das,
 * was die alte WP-Seite an Anbietern + Beschreibungen enthielt. Wer
 * Texte verbessern will, editiert _top10s.raw.json an der richtigen
 * Stelle (oder überschreibt programmatisch).
 */

import raw from "./_top10s.raw.json";
import { top10Overrides } from "./top10s-overrides";
import type { CategoryKey } from "./categories";

export type Top10Item = {
  rank: number;
  name: string;
  description: string;
  address?: string;
  websiteUrl?: string;
};

export type Top10ListPattern = "rank-list" | "named-sections" | "h2-items" | "partial" | "weak";

export type Top10List = {
  slug: string;
  category: CategoryKey;
  district?: string;       // gesetzt bei <stadtteil>-hotels
  title: string;           // Display-Title (kurz)
  longTitle?: string;      // Original-WP-Title für H1 falls ungewünscht kurz
  subtitle: string;        // 1-Satz-Lead für Card + Hero
  intro: string;           // ausführlicher Lead (1-3 Sätze)
  metaDescription: string; // <meta>
  pattern: Top10ListPattern;
  weak: boolean;           // true wenn Parser keine konkreten Anbieter fand
  items: Top10Item[];
  hue: 1 | 2 | 3 | 4 | 5;
  emoji?: string;
  affiliate?: {
    stay22?: boolean;       // Stay22-Karte rendern
    getYourGuide?: boolean; // GYG-Widget rendern
  };
};

type RawRecord = {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  pattern: Top10ListPattern;
  weak: boolean;
  items: Top10Item[];
  h2_themes: string[];
};

const rawList = raw as RawRecord[];

/**
 * Slugs, die als Bestandsschutz-Guest-Posts eigene Astro-Pages haben
 * (siehe src/pages/<slug>.astro) und damit NICHT vom Top10-Template
 * gerendert werden dürfen. Erscheinen auch nicht in Kategorie-Hubs
 * oder Sidebar-"Mehr aus X"-Listen.
 */
const STATIC_PAGE_SLUGS = new Set([
  "reise-tuerkei-historischer-charakter-heidelberg",
]);

/**
 * Kuratierter Meta-Layer pro Slug.
 * Jeder Slug bekommt: Kategorie, Display-Titel (Display-H1) und Subtitle.
 *
 * Stadtteile = "X-hotels" Slugs → category: stadtteile, district: X
 * Tourismus  = sehenswuerdigkeiten/hotels/restaurants/cafes/bars-und-kneipen/
 *              outdoor-aktivitaeten/wellness-spa/historische-staetten/
 *              architekturwunder/versteckte-juwelen/einkaufsmoeglichkeiten/
 *              veranstaltungen-festivals/kinderfreundliche-orte
 * Leben      = baeckereien/cafes (auch tourismus)/bio-laden/apotheken/tierarzt/
 *              tieraerzte/friseursalons/yogastudios/fitnessstudios/buchlaeden/
 *              weinladen/blumenladen/fahrradladen/vintage-second-hand-laden/
 *              tattoo-studios/musikschulen/sprachschulen/nachhilfe-und-sprachschulen
 * Leistungen = rechtsanwalte/steuerberater/immobilienmakler/handwerker/
 *              umzugsunternehmen/auto-service-wieblingen/autowerkstaetten/
 *              it-dienstleister-computerreparatur/gartengestaltung-heidelberg/
 *              hochzeitsplaner
 * Firmen     = online-werbeagenturen/coworking-spaces
 * Blog       = inspiration-traumhafte-hochzeitsfotografie-fuer-jeden-stil/
 *              reise-tuerkei-historischer-charakter-heidelberg
 */
type Curate = Partial<Pick<Top10List, "title" | "subtitle" | "category" | "district" | "hue" | "emoji" | "affiliate">>;

const curated: Record<string, Curate> = {
  // ── Tourismus ──────────────────────────────────────────────────────
  "sehenswuerdigkeiten":         { title: "Top 10 Sehenswürdigkeiten in Heidelberg", subtitle: "Schloss, Alte Brücke, Philosophenweg & weitere Must-sees am Neckar.", category: "tourismus", hue: 2, emoji: "🏰", affiliate: { getYourGuide: true } },
  "hotels":                      { title: "Die 10 besten Hotels in Heidelberg",       subtitle: "Vom 5-Sterne-Klassiker bis zur Boutique-Suite mit Schlossblick.",   category: "tourismus", hue: 2, emoji: "🛎️", affiliate: { stay22: true } },
  "restaurants":                 { title: "Top 10 Restaurants in Heidelberg",         subtitle: "Sterneküche, Brauhäuser, vegane Adressen & internationale Klassiker.", category: "tourismus", hue: 3, emoji: "🍽️" },
  "cafes":                       { title: "Top 10 Cafés in Heidelberg",               subtitle: "Spezialitätenkaffee, Frühstücks-Klassiker & gemütliche Lese-Cafés.", category: "tourismus", hue: 1, emoji: "☕" },
  "bars-und-kneipen":            { title: "Top 10 Bars & Kneipen in Heidelberg",      subtitle: "Studentenkneipen, Cocktail-Bars und urige Weinstuben.",            category: "tourismus", hue: 3, emoji: "🍺" },
  "wellness-spa":                { title: "Top 10 Wellness- & Spa-Adressen",          subtitle: "Hotel-Spas, Day-Spas & Thermen im Umkreis Heidelberg.",            category: "tourismus", hue: 4, emoji: "🧖" },
  "outdoor-aktivitaeten":        { title: "Top 10 Outdoor-Aktivitäten in Heidelberg", subtitle: "Wandern, Rad, Kanu & Klettern in der Region.",                     category: "tourismus", hue: 4, emoji: "🥾", affiliate: { getYourGuide: true } },
  "historische-staetten":        { title: "Top 10 historische Stätten in Heidelberg", subtitle: "Schloss, Universität, Brücken & Kirchen mit jahrhundertelanger Geschichte.", category: "tourismus", hue: 2, emoji: "📜" },
  "architekturwunder":           { title: "Top 10 Architekturwunder in Heidelberg",   subtitle: "Vom Schloss bis zum modernen Print Media Academy-Glaskubus.",      category: "tourismus", hue: 5, emoji: "🏛️" },
  "versteckte-juwelen":          { title: "Top 10 versteckte Juwelen in Heidelberg",  subtitle: "Geheimtipps abseits der Touristenpfade — Märchenparadies, Kurpfalzpark & mehr.", category: "tourismus", hue: 4, emoji: "💎" },
  "einkaufsmoeglichkeiten":      { title: "Top 10 Einkaufsmöglichkeiten in Heidelberg", subtitle: "Hauptstraße, Bismarckplatz, Wochenmärkte & Lieblings-Lädchen.", category: "tourismus", hue: 1, emoji: "🛍️" },
  "veranstaltungen-festivals":   { title: "Top 10 Veranstaltungen & Festivals",       subtitle: "Schlossbeleuchtung, Herbst, Frühling, Weihnachtsmarkt & Festivals.", category: "tourismus", hue: 3, emoji: "🎉" },
  "kinderfreundliche-orte":      { title: "Top 10 kinderfreundliche Orte in Heidelberg", subtitle: "Zoo, Märchenparadies, Spielplätze & Familien-Cafés.",          category: "tourismus", hue: 4, emoji: "👨‍👩‍👧" },

  // ── Stadtteile / Hotels nach Stadtteil ─────────────────────────────
  "altstadt-hotels":      { title: "Top 10 Hotels in der Altstadt",      subtitle: "Boutique, Luxus, Budget — direkt am Schloss und an der Hauptstraße.",      category: "stadtteile", district: "Altstadt",      hue: 2, emoji: "🛎️", affiliate: { stay22: true } },
  "bahnstadt-hotels":     { title: "Top 10 Hotels in der Bahnstadt",     subtitle: "Modern, nachhaltig, Tagungs-tauglich — neben dem Heidelberger Hauptbahnhof.", category: "stadtteile", district: "Bahnstadt",     hue: 5, emoji: "🛎️", affiliate: { stay22: true } },
  "bergheim-hotels":      { title: "Top 10 Hotels in Bergheim",          subtitle: "Zentral neben Bismarckplatz, Hauptbahnhof und Heuscheuer.",                category: "stadtteile", district: "Bergheim",      hue: 3, emoji: "🛎️", affiliate: { stay22: true } },
  "boxberg-hotels":       { title: "Top 10 Hotels im Boxberg",           subtitle: "Ruhig auf dem Hang — Aussicht, Tagungshäuser, Familien-Pensionen.",        category: "stadtteile", district: "Boxberg",       hue: 4, emoji: "🛎️", affiliate: { stay22: true } },
  "emmertsgrund-hotels":  { title: "Top 10 Hotels in Emmertsgrund",      subtitle: "Grüne Hanglage im Süden Heidelbergs mit Blick auf die Rheinebene.",        category: "stadtteile", district: "Emmertsgrund",  hue: 4, emoji: "🛎️", affiliate: { stay22: true } },
  "handschuhsheim-hotels":{ title: "Top 10 Hotels in Handschuhsheim",    subtitle: "Klassiker im Norden mit Wein, Bergstraße und kurzem Weg in die Altstadt.", category: "stadtteile", district: "Handschuhsheim", hue: 4, emoji: "🛎️", affiliate: { stay22: true } },
  "kirchheim-hotels":     { title: "Top 10 Hotels in Kirchheim",         subtitle: "Günstig & gut angebunden im Heidelberger Süden.",                          category: "stadtteile", district: "Kirchheim",     hue: 5, emoji: "🛎️", affiliate: { stay22: true } },
  "neuenheim-hotels":     { title: "Top 10 Hotels in Neuenheim",         subtitle: "Universitätsviertel mit Philosophenweg-Blick und Neckar-Nähe.",            category: "stadtteile", district: "Neuenheim",     hue: 4, emoji: "🛎️", affiliate: { stay22: true } },
  "pfaffengrund-hotels":  { title: "Top 10 Hotels im Pfaffengrund",      subtitle: "Familienfreundlich westlich der Stadt, gut für längere Aufenthalte.",      category: "stadtteile", district: "Pfaffengrund",  hue: 4, emoji: "🛎️", affiliate: { stay22: true } },
  "rohrbach-hotels":      { title: "Top 10 Hotels in Rohrbach",          subtitle: "Gemütliches Wohnen mit Blick auf den Königstuhl.",                         category: "stadtteile", district: "Rohrbach",      hue: 3, emoji: "🛎️", affiliate: { stay22: true } },
  "schlierbach-hotels":   { title: "Top 10 Hotels in Schlierbach",       subtitle: "Östlich am Neckar — naturnah und mit Blick auf das Schloss.",              category: "stadtteile", district: "Schlierbach",   hue: 4, emoji: "🛎️", affiliate: { stay22: true } },
  "suedstadt-hotels":     { title: "Top 10 Hotels in der Südstadt",      subtitle: "Patrick-Henry-Village in der Nachbarschaft, gut für längere Aufenthalte.", category: "stadtteile", district: "Südstadt",      hue: 3, emoji: "🛎️", affiliate: { stay22: true } },
  "weststadt-hotels":     { title: "Top 10 Hotels in der Weststadt",     subtitle: "Jugendstil-Charme zwischen Hauptbahnhof und Altstadt.",                    category: "stadtteile", district: "Weststadt",     hue: 2, emoji: "🛎️", affiliate: { stay22: true } },
  "wieblingen-hotels":    { title: "Top 10 Hotels in Wieblingen",        subtitle: "Im Westen am Neckar — günstig und ruhig.",                                 category: "stadtteile", district: "Wieblingen",    hue: 4, emoji: "🛎️", affiliate: { stay22: true } },
  "ziegelhausen-hotels":  { title: "Top 10 Hotels in Ziegelhausen",      subtitle: "Östliches Tal, Wald und Naturnähe direkt am Neckar.",                      category: "stadtteile", district: "Ziegelhausen",  hue: 4, emoji: "🛎️", affiliate: { stay22: true } },

  // ── Leben in HD ────────────────────────────────────────────────────
  "baeckereien":                  { title: "Top 10 Bäckereien in Heidelberg",                subtitle: "Handwerk, Sauerteig, süße Stücke — die besten Bäcker der Stadt.", category: "leben", hue: 1, emoji: "🥐" },
  "bio-laden":                    { title: "Top 10 Bio-Läden in Heidelberg",                 subtitle: "Regionale Bio-Märkte, Hofläden & Naturkost-Adressen.",            category: "leben", hue: 4, emoji: "🥬" },
  "apotheken":                    { title: "Top 10 Apotheken in Heidelberg",                 subtitle: "Beratung, Notdienst & spezialisierte Apotheken.",                 category: "leben", hue: 1, emoji: "💊" },
  "tierarzt":                     { title: "Top 10 Tierärzte in Heidelberg",                 subtitle: "Praxen für Hund, Katze & Co. — auch mit Notdienst.",              category: "leben", hue: 4, emoji: "🐾" },
  "tieraerzte":                   { title: "Top 10 Tierärzte in Heidelberg (Auswahl)",       subtitle: "Weitere empfehlenswerte Tierarzt-Praxen in der Region.",          category: "leben", hue: 4, emoji: "🐾" },
  "friseursalons":                { title: "Top 10 Friseursalons in Heidelberg",             subtitle: "Schnitt, Farbe, Styling — die besten Friseure für jeden Look.",   category: "leben", hue: 3, emoji: "✂️" },
  "yogastudios-entspannung-betaetigung": { title: "Top 10 Yoga-Studios in Heidelberg",       subtitle: "Hatha, Vinyasa, Yin & mehr — die besten Studios der Stadt.",      category: "leben", hue: 4, emoji: "🧘" },
  "fitnessstudios":               { title: "Top 10 Fitness-Studios in Heidelberg",           subtitle: "Klassische Gyms, Boutique-Studios & funktionelle Trainings.",      category: "leben", hue: 5, emoji: "💪" },
  "buchlaeden":                   { title: "Top 10 Buchhandlungen in Heidelberg",            subtitle: "Inhabergeführte Buchläden, Antiquariate & Spezialisten.",         category: "leben", hue: 2, emoji: "📚" },
  "weinladen":                    { title: "Top 10 Weinläden in Heidelberg",                 subtitle: "Regionale Pfälzer-Weine, internationale Tropfen & Beratung.",     category: "leben", hue: 3, emoji: "🍷" },
  "blumenladen":                  { title: "Top 10 Blumenläden in Heidelberg",               subtitle: "Floristen, Hochzeits-Spezialisten & Bio-Sträuße.",                category: "leben", hue: 4, emoji: "🌸" },
  "fahrradladen":                 { title: "Top 10 Fahrradläden in Heidelberg",              subtitle: "Verkauf, Werkstatt & Beratung für City-, MTB- und E-Bike.",        category: "leben", hue: 5, emoji: "🚲" },
  "vintage-second-hand-laden":    { title: "Top 10 Vintage- & Second-Hand-Läden",            subtitle: "Mode, Möbel & Kuriositäten aus zweiter Hand.",                    category: "leben", hue: 3, emoji: "👗" },
  "tattoo-studios":               { title: "Top 10 Tattoo-Studios in Heidelberg",            subtitle: "Hygienisch, geprüft und stilistisch breit aufgestellt.",          category: "leben", hue: 5, emoji: "🎨" },
  "musikschulen":                 { title: "Top 10 Musikschulen in Heidelberg",              subtitle: "Klavier, Gitarre, Schlagzeug & Gesangsunterricht.",               category: "leben", hue: 1, emoji: "🎵" },
  "sprachschulen":                { title: "Top 10 Sprachschulen in Heidelberg",             subtitle: "Deutsch, Englisch & Co. — Gruppen- und Einzelunterricht.",         category: "leben", hue: 5, emoji: "🌐" },
  "nachhilfe-und-sprachschulen":  { title: "Top 10 Nachhilfe & Sprachschulen",                subtitle: "Lernhilfe für Schule und Studium — Mathematik bis Englisch.",     category: "leben", hue: 5, emoji: "🎓" },
  "kunstgalerien":                { title: "Top 10 Kunstgalerien in Heidelberg",             subtitle: "Klassische Galerien, junge Räume & Ateliers.",                    category: "leben", hue: 3, emoji: "🖼️" },

  // ── Leistungen ─────────────────────────────────────────────────────
  "rechtsanwalte":                { title: "Top 10 Rechtsanwälte in Heidelberg",             subtitle: "Familien-, Arbeits-, Verkehrs- & Mietrecht — die Adressen der Stadt.", category: "leistungen", hue: 5, emoji: "⚖️" },
  "steuerberater":                { title: "Top 10 Steuerberater in Heidelberg",             subtitle: "Privat, Selbstständige, Mittelstand — kompetente Beratung.",          category: "leistungen", hue: 5, emoji: "📊" },
  "immobilienmakler":             { title: "Top 10 Immobilienmakler in Heidelberg",          subtitle: "Wohnen, Gewerbe, Verkauf & Vermietung — lokale Profis.",              category: "leistungen", hue: 5, emoji: "🔑" },
  "handwerker":                   { title: "Top 10 Handwerker in Heidelberg",                subtitle: "Maler, Schreiner, Elektriker, Sanitär — die handfesten Adressen.",     category: "leistungen", hue: 5, emoji: "🔧" },
  "umzugsunternehmen":            { title: "Top 10 Umzugsunternehmen in Heidelberg",         subtitle: "Privat, Büro, Senioren-Umzug — vom Studi-Umzug bis Komplettservice.",  category: "leistungen", hue: 5, emoji: "📦" },
  "auto-service-wieblingen":      { title: "Top 10 Auto-Services in Wieblingen",             subtitle: "Werkstätten, Wartung & Reparaturen im Heidelberger Westen.",            category: "leistungen", hue: 5, emoji: "🚗" },
  "autowerkstaetten":             { title: "Top 10 Autowerkstätten in Heidelberg",           subtitle: "Marken-Werkstätten und freie Betriebe für alle Fabrikate.",           category: "leistungen", hue: 5, emoji: "🔩" },
  "it-dienstleister-computerreparatur": { title: "Top 10 IT-Dienstleister & Computer-Reparatur", subtitle: "PC-/Mac-Reparatur, Netzwerk-Hilfe und Datenrettung in Heidelberg.", category: "leistungen", hue: 5, emoji: "💻" },
  "gartengestaltung-heidelberg":  { title: "Top 10 Gartenbau & Gartengestaltung",            subtitle: "Anlage, Pflege, Teich-, Terrassen- und Hangbau in Heidelberg.",        category: "leistungen", hue: 4, emoji: "🌳" },
  "hochzeitsplaner":              { title: "Top 10 Hochzeitsplaner in Heidelberg",           subtitle: "Schloss, Burg, Garten, modern — Wedding-Planner für jede Vision.",    category: "leistungen", hue: 3, emoji: "💍" },

  // ── Firmen ─────────────────────────────────────────────────────────
  "online-werbeagenturen":        { title: "Top 10 Online-Werbeagenturen in Heidelberg",     subtitle: "Performance-Marketing, SEO & Social für Unternehmen aus Heidelberg.", category: "firmen", hue: 3, emoji: "📣" },
  "coworking-spaces":             { title: "Top 10 Coworking-Spaces in Heidelberg",          subtitle: "Flexibel arbeiten, networken & Meetingräume mieten.",                 category: "firmen", hue: 3, emoji: "🪑" },

  // ── Blog ───────────────────────────────────────────────────────────
  "inspiration-traumhafte-hochzeitsfotografie-fuer-jeden-stil": {
    title: "Traumhafte Hochzeitsfotografie für jeden Stil",
    subtitle: "Inspiration & Stil-Guide für Brautpaare in Heidelberg.",
    category: "blog", hue: 3, emoji: "📸",
  },
  "reise-tuerkei-historischer-charakter-heidelberg": {
    title: "Reise Türkei: Historischer Charakter wie in Heidelberg",
    subtitle: "Reise-Inspiration — Türkische Städte, die Heidelberg-Fans lieben werden.",
    category: "blog", hue: 2, emoji: "✈️",
  },
};

// Default-Fallback (nie greifen, aber TS-sicher)
const FALLBACK_CURATE: Curate = { category: "leben", hue: 1 };

export const top10Lists: Top10List[] = rawList
  .filter((r) => !STATIC_PAGE_SLUGS.has(r.slug))
  .map<Top10List>((r) => {
  const c = curated[r.slug] ?? FALLBACK_CURATE;
  const ov = top10Overrides[r.slug];
  // Wenn ein Override existiert: ersetzt Items komplett, optional auch das Intro.
  const items = ov ? ov.items : r.items;
  const intro = ov?.intro ?? r.intro;
  const weak = ov ? false : r.weak;
  return {
    slug: r.slug,
    category: c.category ?? "leben",
    district: c.district,
    title: c.title ?? r.title,
    longTitle: r.title,
    subtitle: c.subtitle ?? "",
    intro,
    metaDescription: r.metaDescription || c.subtitle || "",
    pattern: r.pattern,
    weak,
    items,
    hue: c.hue ?? 1,
    emoji: c.emoji,
    affiliate: c.affiliate,
  };
});

export const getTop10 = (slug: string) => top10Lists.find((l) => l.slug === slug);

export const top10sByCategory = (cat: CategoryKey) =>
  top10Lists.filter((l) => l.category === cat).sort((a, b) => a.title.localeCompare(b.title, "de"));

export const stadtteilHotelLists = () =>
  top10Lists.filter((l) => l.category === "stadtteile").sort((a, b) => (a.district ?? "").localeCompare(b.district ?? "", "de"));
