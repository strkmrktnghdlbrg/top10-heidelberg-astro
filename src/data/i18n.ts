/**
 * EN-Übersetzungen für die wichtigsten Tourismus-Pages.
 * Phase 1: Sehenswürdigkeiten, Hotels, Restaurants, Cafés, Outdoor,
 * historische Stätten, Architektur, versteckte Juwelen, Events-Hub.
 *
 * Pattern:
 *   - Slug bleibt identisch (z.B. /en/sehenswuerdigkeiten/) für saubere
 *     hreflang-Mappings 1:1
 *   - Item-Namen bleiben Deutsch (proper nouns: Heidelberger Schloss etc.)
 *   - Item-Beschreibungen werden EBENFALLS auf EN-Seiten übersetzt nur
 *     wenn sinnvoll; sonst bleibt DE
 *
 * Phase 2 (TODO): einzelne Item-Beschreibungen, Stadtteil-Hotel-Listen.
 */

export type Locale = "de" | "en";

export type PageTranslation = {
  title: string;
  subtitle: string;
  intro: string;
  metaDescription: string;
};

export const translations: Partial<Record<string, PageTranslation>> = {
  // ── Tourismus-Hauptlisten ─────────────────────────────────────
  "sehenswuerdigkeiten": {
    title: "Top 10 Sights & Attractions in Heidelberg",
    subtitle: "Castle, Old Bridge, Philosopher's Walk and other must-sees by the Neckar river.",
    intro:
      "Heidelberg is one of Germany's most-visited cities - and rightly so. Between the ruined hilltop castle, the cobbled Hauptstraße, the picture-perfect Old Bridge and the panoramic Philosopher's Walk on the opposite riverbank, the historic core fits a remarkable amount of beauty into a compact area. This list covers the ten attractions you should not miss on a first visit - plus a few that even returning travellers tend to overlook.",
    metaDescription:
      "The top 10 sights of Heidelberg at a glance - castle, old bridge, philosopher's walk, university and more. Travel guide for first-time visitors.",
  },
  "hotels": {
    title: "The 10 Best Hotels in Heidelberg",
    subtitle: "From 5-star classics to boutique suites with castle views.",
    intro:
      "Heidelberg has hotels for every style of trip - historic five-star houses with castle-view rooms, modern design hotels in the Bahnstadt district, romantic boutique stays in the Old Town and budget-friendly options near the main station. The list below focuses on hotels that consistently rank high in guest reviews and that offer something distinctive in either location, architecture, restaurant or service.",
    metaDescription:
      "The 10 best hotels in Heidelberg - luxury, boutique, mid-range and budget. With live prices and availability via Stay22.",
  },
  "restaurants": {
    title: "Top 10 Restaurants in Heidelberg",
    subtitle: "Michelin stars, brewhouses, vegan tables and international classics.",
    intro:
      "Heidelberg's restaurant scene is more diverse than the Old-Town-postcard stereotype suggests. Alongside the traditional brewhouses serving Schnitzel and Schweinshaxe, you'll find a Michelin-starred fine-dining house, dedicated vegan kitchens, lively student bistros and proper international options - from Levantine to Japanese to South Indian. The ten places below cover that full range and are reliable picks across budgets and occasions.",
    metaDescription:
      "The top 10 restaurants in Heidelberg - Michelin-star dining, brewhouses, vegan, international. Curated picks across all budgets.",
  },
  "cafes": {
    title: "Top 10 Cafés in Heidelberg",
    subtitle: "Specialty coffee, classic breakfasts and cosy reading spots.",
    intro:
      "Whether you need a serious flat white before climbing up to the castle, a slow weekend breakfast in the Old Town, or a quiet table for an afternoon of reading by the Neckar, Heidelberg's café scene has you covered. The selection below balances third-wave specialty roasters with classic patisseries and student-friendly bookshop-cafés.",
    metaDescription:
      "The top 10 cafés in Heidelberg - specialty coffee, breakfast classics and cosy reading spots. Curated picks across the Old Town and beyond.",
  },
  "outdoor-aktivitaeten": {
    title: "Top 10 Outdoor Activities in Heidelberg",
    subtitle: "Hiking, cycling, paddling and climbing in and around the city.",
    intro:
      "Heidelberg's setting between the Neckar river and the wooded hills of the Odenwald makes it one of Germany's best mid-sized cities for outdoor pursuits. You can hike the Philosopher's Walk in the morning, paddle a canoe past the castle in the afternoon and watch the sunset from the Heiligenberg - all without leaving the city limits. The list below picks the ten most rewarding outdoor activities, from short urban walks to half-day adventures.",
    metaDescription:
      "The top 10 outdoor activities in Heidelberg - hiking trails, cycling routes, river paddling and climbing. Including guided tours via GetYourGuide.",
  },
  "historische-staetten": {
    title: "Top 10 Historic Sites in Heidelberg",
    subtitle: "Castle, university, bridges and churches with centuries of history.",
    intro:
      "Heidelberg's history runs deep: the castle was begun in the 13th century, the university - Germany's oldest - was founded in 1386, and the Heiligenberg above the city carries traces of Roman and Celtic settlements that predate both by a thousand years. The ten sites below give you a guided tour through that timeline, from medieval fortifications to 19th-century romantic landmarks.",
    metaDescription:
      "Heidelberg's most important historic sites at a glance - castle, university, bridges and churches with up to 2,000 years of history.",
  },
  "architekturwunder": {
    title: "Top 10 Architectural Highlights in Heidelberg",
    subtitle: "From the castle ruin to the modern Print Media Academy glass cube.",
    intro:
      "Heidelberg's architecture spans almost a thousand years - from Romanesque foundations under the castle, through Renaissance courtyards and Baroque palaces, all the way to the contemporary glass-and-concrete experiments of the Bahnstadt district. This list highlights ten buildings that tell the story of how the city looked, and rebuilt itself, across the centuries.",
    metaDescription:
      "10 architectural highlights of Heidelberg - castle, Renaissance courtyards, Baroque palaces and contemporary buildings in Bahnstadt.",
  },
  "versteckte-juwelen": {
    title: "Top 10 Hidden Gems in Heidelberg",
    subtitle: "Insider spots away from the tourist trail - Märchenparadies, Kurpfalz Park and more.",
    intro:
      "Once you've ticked the castle, the bridge and the main street off your list, Heidelberg still has plenty to surprise you with. The ten places below are the spots locals send their visiting friends to: a fairy-tale park hidden above the castle, a 1950s open-air theatre carved into the hillside, a tiny chapel halfway up the Heiligenberg and a few more secrets that don't appear on the standard postcards.",
    metaDescription:
      "10 hidden gems in Heidelberg - insider tips beyond the standard tourist trail, from secret viewpoints to forgotten chapels.",
  },
  "kinderfreundliche-orte": {
    title: "Top 10 Family-Friendly Places in Heidelberg",
    subtitle: "Zoo, Märchenparadies, playgrounds and family cafés.",
    intro:
      "Travelling with kids? Heidelberg makes it easy. The Funicular up to the castle is itself an attraction, the zoo is compact and walkable, and the Neckarwiese on the north bank is one of Germany's most laid-back family riverbanks. The ten spots below are picked specifically with younger travellers in mind - short walks, clear sight lines, ice cream or snack stops within reach.",
    metaDescription:
      "10 family-friendly places in Heidelberg - castle funicular, zoo, fairy-tale park, playgrounds and family cafés.",
  },
  "wellness-spa": {
    title: "Top 10 Wellness & Spa Addresses in Heidelberg",
    subtitle: "Hotel spas, day spas and thermal baths around Heidelberg.",
    intro:
      "After a day of climbing castle steps and walking cobbled streets, Heidelberg and its surrounding region offer a surprising depth of wellness options. From hotel spas with castle views to dedicated day spas in the Old Town and the regional thermal baths at Bad Rappenau and Bad Schönborn, the ten addresses below cover everything from a quick massage to a full wellness weekend.",
    metaDescription:
      "10 wellness and spa addresses in and around Heidelberg - hotel spas, day spas and regional thermal baths.",
  },
  "veranstaltungen-festivals": {
    title: "Top 10 Events & Festivals in Heidelberg",
    subtitle: "Castle Illumination, Heidelberger Herbst, Christmas Market and more.",
    intro:
      "Heidelberg's calendar is anchored by a handful of recurring events that fill the city - three Castle Illumination nights with fireworks in summer, the open-air Castle Festival, the autumn old-town fair (Heidelberger Herbst) on the last Saturday of September, and the multi-square Christmas Market in December. The list below covers these annual highlights plus six more events worth planning a trip around.",
    metaDescription:
      "10 events and festivals in Heidelberg - Castle Illumination, Christmas Market, Heidelberger Herbst, Castle Festival and more.",
  },
  "einkaufsmoeglichkeiten": {
    title: "Top 10 Shopping Spots in Heidelberg",
    subtitle: "Hauptstraße, Bismarckplatz, weekly markets and independent boutiques.",
    intro:
      "Heidelberg's shopping spine is the Hauptstraße - at around 1.6 km, it's one of Europe's longest pedestrian shopping streets. But the more interesting finds are usually one street off the main drag: independent bookshops in the Plöck, design boutiques in the Weststadt, weekly farmers' markets at Wilhelmsplatz and Marktplatz. The list below mixes the obvious large-format options with the smaller addresses worth seeking out.",
    metaDescription:
      "10 shopping spots in Heidelberg - Hauptstraße, Bismarckplatz, weekly markets and independent boutiques across the city.",
  },
};

export function getTranslation(slug: string, locale: Locale): PageTranslation | undefined {
  if (locale === "de") return undefined; // DE uses original German content
  return translations[slug];
}

export function hasTranslation(slug: string, locale: Locale): boolean {
  if (locale === "de") return true;
  return slug in translations;
}

/**
 * Liste aller Slugs mit verfügbarer EN-Übersetzung — fürs hreflang +
 * den Language-Switcher.
 */
export const translatedSlugs = Object.keys(translations);
