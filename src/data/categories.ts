/**
 * Top-Level-Kategorien (entsprechen den WP-"Themen"):
 *  - tourismus   — Sehenswürdigkeiten, Hotels, Restaurants, Cafés, …
 *  - stadtteile  — 14× <stadtteil>-hotels Listen
 *  - leben       — Apotheken, Friseure, Yoga, Kinder, Buchläden …
 *  - leistungen  — Steuerberater, Anwälte, IT, Immobilien, …
 *  - firmen      — Werbeagenturen, Coworking, …
 */

export type CategoryKey = "tourismus" | "stadtteile" | "leben" | "leistungen" | "firmen" | "blog";

export type Category = {
  slug: CategoryKey;
  name: string;
  short: string;
  hue: 1 | 2 | 3 | 4 | 5;
  icon: string;
};

export const categories: Category[] = [
  { slug: "tourismus",  name: "Tourismus",        short: "Sehenswürdigkeiten, Hotels, Restaurants, Cafés & Bars — was Besucher in Heidelberg gesehen haben müssen.", hue: 2, icon: "🏰" },
  { slug: "stadtteile", name: "Stadtteile",       short: "Hotels & Übernachten in jedem der 15 Heidelberger Stadtteile — Altstadt, Bahnstadt, Neuenheim & Co.", hue: 4, icon: "🗺️" },
  { slug: "leben",      name: "Leben in HD",      short: "Bäckereien, Apotheken, Friseure, Yoga, Buchläden — die besten Anlaufstellen für den Heidelberger Alltag.", hue: 1, icon: "🌿" },
  { slug: "leistungen", name: "Dienstleister",    short: "Anwälte, Steuerberater, IT, Immobilien, Handwerk — die Top 10 Adressen aus jeder Branche.", hue: 5, icon: "💼" },
  { slug: "firmen",     name: "Firmen",           short: "Werbeagenturen, Coworking-Spaces & B2B-Adressen in Heidelberg.", hue: 3, icon: "🏢" },
  { slug: "blog",       name: "Blog",             short: "Inspiration, Ratgeber & Themen rund um Heidelberg und Reisen.", hue: 1, icon: "✍️" },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
