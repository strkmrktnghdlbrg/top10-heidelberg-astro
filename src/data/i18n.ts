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
  /** EN-Headline für den GetYourGuide-Block (falls die Liste einen gyg-Block hat). */
  gygHeadline?: string;
  /** EN-Lead für den GetYourGuide-Block. */
  gygLead?: string;
};

export const translations: Partial<Record<string, PageTranslation>> = {
  // ── Tourismus-Hauptlisten ─────────────────────────────────────
  "sehenswuerdigkeiten": {
    title: "Top 10 Sights & Attractions in Heidelberg",
    subtitle: "Castle, Old Bridge, Philosopher's Walk and other must-sees by the Neckar river.",
    intro:
      "Heidelberg is one of Germany's most-visited cities - and rightly so. Between the ruined hilltop castle, the cobbled Hauptstraße, the picture-perfect Old Bridge and the panoramic Philosopher's Walk on the opposite riverbank, the historic core fits a remarkable amount of beauty into a compact area. This list covers the ten attractions you should not miss on a first visit - plus a few that even returning travelers tend to overlook.",
    metaDescription:
      "The top 10 sights of Heidelberg at a glance - castle, old bridge, philosopher's walk, university and more. Travel guide for first-time visitors.",
    gygHeadline: "Experience Heidelberg with local guides",
    gygLead:
      "From castle tours and the Philosopher's Walk to Neckar river cruises, here are guided experiences covering all the main sights at a glance - with real reviews and flexible cancellation.",
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
    gygHeadline: "Get active in Heidelberg - guided outdoor tours",
    gygLead:
      "From the Philosopher's Walk to a cruise on the Neckar: guided tours with local experts, easy to book online and with free cancellation.",
  },
  "historische-staetten": {
    title: "Top 10 Historic Sites in Heidelberg",
    subtitle: "Castle, university, bridges and churches with centuries of history.",
    intro:
      "Heidelberg's history runs deep: the castle was begun in the 13th century, the university - Germany's oldest - was founded in 1386, and the Heiligenberg above the city carries traces of Roman and Celtic settlements that predate both by a thousand years. The ten sites below give you a guided tour through that timeline, from medieval fortifications to 19th-century romantic landmarks.",
    metaDescription:
      "Heidelberg's most important historic sites at a glance - castle, university, bridges and churches with up to 2,000 years of history.",
    gygHeadline: "Experience Heidelberg's history with a guide",
    gygLead:
      "The castle, the student prison and the Old Town gain real depth with a local guide. Here is a selection of guided tours focused on the historic sites.",
  },
  "architekturwunder": {
    title: "Top 10 Architectural Highlights in Heidelberg",
    subtitle: "From the castle ruin to the modern Print Media Academy glass cube.",
    intro:
      "Heidelberg's architecture spans almost a thousand years - from Romanesque foundations under the castle, through Renaissance courtyards and Baroque palaces, all the way to the contemporary glass-and-concrete experiments of the Bahnstadt district. This list highlights ten buildings that tell the story of how the city looked, and rebuilt itself, across the centuries.",
    metaDescription:
      "10 architectural highlights of Heidelberg - castle, Renaissance courtyards, Baroque palaces and contemporary buildings in Bahnstadt.",
    gygHeadline: "See Heidelberg's architecture up close",
    gygLead:
      "From the castle ruin to the Print Media Academy - guided tours bring the city's architectural highlights up close, with the background stories to match.",
  },
  "versteckte-juwelen": {
    title: "Top 10 Hidden Gems in Heidelberg",
    subtitle: "Insider spots away from the tourist trail - Märchenparadies, Kurpfalz Park and more.",
    intro:
      "Once you've ticked the castle, the bridge and the main street off your list, Heidelberg still has plenty to surprise you with. The ten places below are the spots locals send their visiting friends to: a fairy-tale park hidden above the castle, a 1950s open-air theater carved into the hillside, a tiny chapel halfway up the Heiligenberg and a few more secrets that don't appear on the standard postcards.",
    metaDescription:
      "10 hidden gems in Heidelberg - insider tips beyond the standard tourist trail, from secret viewpoints to forgotten chapels.",
    gygHeadline: "Hidden gems you can actually visit: guided tours",
    gygLead:
      "To really get to know Heidelberg's hidden corners, local guides take you to spots no guidebook reveals. Here are a few tours that lead you right there.",
  },
  "kinderfreundliche-orte": {
    title: "Top 10 Family-Friendly Places in Heidelberg",
    subtitle: "Zoo, Märchenparadies, playgrounds and family cafés.",
    intro:
      "Traveling with kids? Heidelberg makes it easy. The Funicular up to the castle is itself an attraction, the zoo is compact and walkable, and the Neckarwiese on the north bank is one of Germany's most laid-back family riverbanks. The ten spots below are picked specifically with younger travelers in mind - short walks, clear sight lines, ice cream or snack stops within reach.",
    metaDescription:
      "10 family-friendly places in Heidelberg - castle funicular, zoo, fairy-tale park, playgrounds and family cafés.",
    gygHeadline: "Family tours for easy days in Heidelberg",
    gygLead:
      "The funicular up to the castle, a gentle Neckar boat trip or a hop-on hop-off loop through town - activities the kids enjoy too, without stressing out the parents.",
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
    gygHeadline: "Tours around Heidelberg's festival highlights",
    gygLead:
      "Castle Illumination, wine festival or Christmas market - the right guided tours and boat trips turn an event visit into a complete experience.",
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

/* ══════════════════════════════════════════════════════════════════════
 * EN-Item-Übersetzungen (Phase 2)
 * ----------------------------------------------------------------------
 * Die Top10-Items (Name/Beschreibung/Adresse) haben in top10s.ts / den
 * Overrides KEINE Locale-Dimension. Auf EN-Seiten würden sonst die
 * deutschen Item-Texte rendern. Diese Map liefert pro In-Scope-Tourismus-
 * Liste eine EN-Variante je Item, gekeyt nach `rank` (stabil 1..n).
 *
 * Nur `description` ist Pflicht; `name`/`address` optional. Fehlt ein
 * Feld, bleibt der Original-Wert (z.B. deutsche Eigennamen/Adressen)
 * stehen. Fehlt eine ganze rank-Nummer, bleibt das Item unverändert.
 *
 * NICHT enthalten:
 *  - alle 33 DE-only Listen (Leben/Leistungen/Firmen/Blog): keine
 *    EN-Seite, daher keine Item-Übersetzung nötig.
 *
 * "hotels": Die DE-Seite nutzt jetzt die deutsche Fassung aus
 * top10s-overrides.ts. Die englischen Original-Beschreibungen leben daher
 * hier weiter, damit /en/hotels/ englisch bleibt.
 * ══════════════════════════════════════════════════════════════════════ */

export type ItemTranslation = {
  /** EN-Name (nur setzen, wenn der DE-Name kein sauberer Eigenname ist). */
  name?: string;
  description?: string;
  address?: string;
};

export const itemTranslations: Partial<Record<string, Record<number, ItemTranslation>>> = {
  "hotels": {
    1: { description: "This historic 5-star hotel is located in the heart of Heidelberg and offers luxurious rooms with elegant decor. The hotel features a spa, fitness center, and multiple dining options." },
    2: { description: "Situated on the banks of the Neckar River, this boutique hotel offers stunning views of Heidelberg Castle. The rooms are individually decorated and feature modern amenities." },
    3: { description: "This charming hotel is housed in a Renaissance building in the Old Town of Heidelberg. The rooms are elegantly furnished and the hotel has a traditional German restaurant." },
    4: { description: "This modern hotel is located near the city center and offers comfortable rooms with contemporary design. The hotel has a rooftop terrace with panoramic views of Heidelberg." },
    5: { description: "This historic hotel is located in a 12th-century building and offers luxurious rooms with antique furniture. The hotel has a Michelin-starred restaurant and a beautiful garden." },
    6: { description: "Situated on the Königstuhl mountain, this hotel offers breathtaking views of Heidelberg and the Neckar Valley. The rooms are spacious and the hotel has a restaurant serving regional cuisine." },
    7: { description: "This traditional hotel is located in the heart of Heidelberg's Old Town and offers cozy rooms with wooden furniture. The hotel has a rustic restaurant serving local dishes." },
    8: { description: "This family-run hotel is located in a quiet neighborhood near the city center. The rooms are comfortable and the hotel has a garden terrace." },
    9: { description: "This budget-friendly hotel is located in the Old Town of Heidelberg and offers simple yet comfortable rooms. The hotel has a traditional German restaurant." },
    10: { description: "This centrally located hotel offers modern rooms with stylish decor. The hotel has a rooftop terrace with panoramic views of Heidelberg." },
  },

  "sehenswuerdigkeiten": {
    1: { name: "Heidelberg Castle", description: "Heidelberg's most famous landmark, begun in the 13th century as the residence of the Prince-Electors of the Palatinate. The half-ruined Renaissance palace towers over the Old Town, and its terraced gardens offer some of the best views over the rooftops and the Neckar." },
    2: { name: "Old Bridge (Alte Brücke)", description: "The elegant 18th-century stone bridge linking the Old Town with Neuenheim. Its twin gate towers and the bronze bridge monkey are Heidelberg icons, and the view back toward the castle is the city's classic postcard shot." },
    3: { name: "Heidelberg Old Town", description: "One of Germany's best-preserved historic centers: narrow lanes, Baroque townhouses and the 1.6 km Hauptstraße lined with shops, restaurants and cafés. Easy to explore on foot and full of atmosphere." },
    4: { name: "Student Prison (Studentenkarzer)", description: "A one-of-a-kind museum showing how 19th-century students were locked up for minor offenses. The cells are covered in original graffiti and portraits left behind by generations of undergraduates." },
    5: { name: "Philosopher's Walk (Philosophenweg)", description: "A hillside path on the Neuenheim side of the river with a sweeping panorama of the castle, the Old Town and the Neckar. It's named for the scholars who once strolled here to think." },
    6: { name: "Kurpfälzisches Museum", description: "One of Germany's oldest museums, with a rich regional collection of paintings, sculpture and archaeology spanning the history and culture of the Electoral Palatinate." },
    7: { name: "Botanical Garden Heidelberg", description: "Founded in the 19th century and home to plants from around the world. A quiet, green retreat with greenhouses and shaded paths, ideal for a slow afternoon." },
    8: { name: "Heidelberg University", description: "Germany's oldest university, founded in 1386, with a long tradition of academic excellence. Its historic buildings, old assembly hall and library are woven right into the Old Town." },
    9: { name: "Heidelberg Zoo", description: "A compact, family-friendly zoo home to elephants, giraffes, big cats, primates and many more species, with regular feedings and keeper talks." },
    10: { name: "Neckarwiese Riverside Park", description: "A wide green meadow along the north bank of the Neckar, perfect for a picnic, a riverside stroll or a lazy afternoon in the sun. A local favorite in summer." },
  },

  "restaurants": {
    1: { name: "Le Gourmet (at Europäischer Hof)", description: "Refined dining in the grand hotel on the edge of the Old Town, with changing menus, a classic French sensibility and polished service." },
    2: { name: "Scharff's Schlossweinstube", description: "A historic wine restaurant inside Heidelberg Castle serving seasonal, regionally rooted gourmet cooking with castle views." },
    3: { name: "Wirtshaus zum Nepomuk", description: "Classic Baden and Palatinate cooking by the Old Bridge - Saumagen, Spätzle and Maultaschen in a warm, traditional setting." },
    4: { name: "Kulturbrauerei Heidelberg", description: "Brewery, tavern and beer garden in the heart of the Old Town, with regional classics, house-brewed beer and a big menu." },
    5: { name: "Schnitzelbank", description: "One of Heidelberg's best-known Old Town taverns - a small, cozy room on Bauamtsgasse serving Palatinate dishes and local wines." },
    6: { name: "Zum Roten Ochsen", description: "A student tavern on the Hauptstraße dating back to 1703, full of classic pub fare and walls covered in centuries of memorabilia." },
    7: { name: "Asia Heidelberg - Sichuan Cuisine", description: "Authentic Sichuan and Thai cooking with a view of the Neckar and the Old Bridge - a local favorite for fiery classics." },
    8: { name: "Casa Mia", description: "An Italian spot in the heart of the Old Town with house-made pasta, crisp pizza and a broad regional Italian menu." },
    9: { name: "Vetter's Alt Heidelberger Brauhaus", description: "A house brewery with its own beers, hearty classics and a long bar - a gathering spot for locals." },
    10: { name: "Restaurant oben (Kohlhof)", description: "A small Michelin-starred restaurant in the hills above Heidelberg, serving creative multi-course menus built on regional produce." },
  },

  "cafes": {
    1: { name: "Café Konditorei Schafheutle", description: "On the Hauptstraße since 1832: classic coffee-house culture, high-end patisserie and a patina-rich setting for breakfast or afternoon cake." },
    2: { name: "Café RADA", description: "An Old Town café with 15 coffees, beans mostly from Central and South America, house-made cakes and breakfasts with a South American accent." },
    3: { name: "Coffee Nerd Heidelberg", description: "A specialty-coffee café in the Old Town with rotating roasters, V60, espresso tonic and third-wave cakes, open since 2023." },
    4: { name: "Casa del Caffè", description: "A cozy Italian café in the Old Town serving hot coffee specialties, house-made cocoa drinks and Italian pastries." },
    5: { name: "Café Knösel", description: "Heidelberg's oldest confectionery and home of the famous 'Student's Kiss' chocolate - touristy, but deservedly so." },
    6: { name: "Café Frühling (Bergheim)", description: "A breakfast favorite in Bergheim with a big morning menu, long weekend brunches and vegan options." },
    7: { name: "Café Gundel", description: "A well-known confectionery with house-made cakes in a comfortable Old Town setting." },
    8: { name: "Café Botanik (Neuenheim)", description: "A small neighborhood café full of plants, bowls and specialty coffee, popular with students and remote workers." },
    9: { name: "Café Extrablatt Heidelberg", description: "A big-city café at Bismarckplatz serving breakfast until 5 p.m., weekend brunch and a large terrace." },
    10: { name: "Café Burkardt (Hauptstraße)", description: "A longtime favorite for coffee and cake overlooking the Hauptstraße, with a living-room feel." },
  },

  "outdoor-aktivitaeten": {
    1: { name: "Hiking around Heidelberg", description: "From the easy Philosopher's Walk to the longer Neckarsteig trail and the challenging Königstuhl climb, Heidelberg offers routes for every level, through vineyards, forest and river valleys." },
    2: { name: "Cycling & bike tours", description: "A bike-friendly city with routes like the Neckar Valley trail past villages and vineyards, plus mountain-bike trails in the nearby Odenwald. Rentals and guided tours are easy to arrange." },
    3: { name: "Via ferrata & climbing", description: "For a shot of adrenaline, the Königstuhl and the Felsenmeer via ferrata in the Odenwald offer exposed rock and big views. Proper gear and experience required." },
    4: { name: "Picnic spots", description: "Spread a blanket in the castle gardens below the ruin, on the wide Neckarwiese meadow, or at a quiet lookout along the Philosopher's Walk." },
    5: { name: "Canoeing & kayaking on the Neckar", description: "Rent a canoe or kayak from one of the riverside outfitters and paddle past the castle, or join a guided tour suitable for beginners and experienced paddlers alike." },
    6: { name: "Paragliding", description: "Take a tandem flight with an experienced pilot for a breathtaking view over the city and the surrounding hills. Book with a licensed operator." },
    7: { name: "Swimming & water sports", description: "Cool off in summer at the public pools and thermal bath, or head to the nearby lakes for swimming, stand-up paddling and windsurfing." },
    8: { name: "Exploring the Heidelberg forests", description: "The Odenwald to the south and the Heiligenberg behind the castle are laced with hiking and cycling trails through scenic woodland and hilltop viewpoints." },
    9: { name: "Paintball", description: "Several outdoor arenas near the city offer different fields and scenarios, with gear rental and guides on site - good team fun for groups." },
    10: { name: "Running Heidelberg's landmarks", description: "Jog along the Neckar past the castle, the Old Bridge and the student prison, or loop through the castle gardens and the Philosopher's Walk." },
  },

  "historische-staetten": {
    1: { name: "Historic landmarks of Heidelberg", description: "The city packs a remarkable amount of history into a small area - from the hilltop castle begun in the 13th century to Germany's oldest university, founded in 1386." },
    2: { name: "A walk through the past", description: "Wandering the narrow lanes of the Old Town or visiting the castle, you can feel the atmosphere of earlier centuries and trace the roots that shaped the city." },
    3: { name: "Renaissance Heidelberg", description: "Heidelberg was a center of art and culture in the Renaissance. The castle and the Marstall building - now part of the university - still show the style of that era." },
    4: { name: "Heidelberg Castle", description: "The city's defining monument, first built in the 13th century and rebuilt many times. It houses the German Pharmacy Museum and offers sweeping views over the town and the Neckar." },
    5: { name: "Heidelberg University (Ruprecht-Karls-Universität)", description: "Founded in 1386, Germany's oldest university counts Hegel and Max Planck among its scholars and remains a leader in research across the sciences and humanities." },
    6: { name: "The Old Town", description: "A dense cluster of historic buildings and squares, including the Baroque town hall, the Gothic Church of the Holy Spirit (Heiliggeistkirche) and the 18th-century Karlstor gate." },
    7: { name: "Kurpfälzisches Museum", description: "A trove of city history, with paintings, sculpture, furniture and archaeological finds that trace the cultural development of the region." },
    8: { name: "The Old Bridge", description: "One of Germany's older stone bridges, built in the 18th century to link the Old Town with Neuenheim - a beloved meeting point with a fine view over the Neckar." },
    9: { name: "Jesuit Church (Jesuitenkirche)", description: "A masterpiece of Baroque architecture from the 18th century, with an ornate façade and an interior of paintings, sculpture and frescoes." },
    10: { name: "Student Prison (Studentenkarzer)", description: "A unique museum in the former lock-up for misbehaving students, preserving graffiti, drawings and mementos of student life in the 19th and early 20th centuries." },
  },

  "architekturwunder": {
    1: { name: "Church of the Holy Spirit (Heiliggeistkirche)", description: "One of Heidelberg's best-known landmarks, a 14th-century Gothic church with an imposing façade, ornate high altar and stained-glass windows telling biblical stories." },
    2: { name: "Heidelberg Castle", description: "An architectural jewel begun in the 14th century and rebuilt over the centuries - a standout example of Renaissance design with grand interiors and views over the city and the Neckar." },
    3: { name: "The Old Bridge", description: "One of Germany's older stone bridges, built in the 18th century in an elegant classical style often compared to the Pont Neuf in Paris, with a lovely view of the Neckar." },
    4: { name: "Kurpfälzisches Museum", description: "Housed in an 18th-century mansion, this museum pairs elegant historic architecture with a rich collection of art and regional artifacts." },
    5: { name: "Jesuit Church (Jesuitenkirche)", description: "A striking 18th-century Baroque church known for its grand façade, ornate stucco work and gilded high altar - a calm retreat in the busy Old Town." },
    6: { name: "Karlstor Gate", description: "A monumental 18th-century city gate on the eastern edge of the Old Town, richly decorated and a popular starting point for a stroll through the historic center." },
    7: { name: "Contemporary art in historic spaces", description: "Heidelberg blends modern art with historic architecture; former industrial buildings now host changing exhibitions, performances and events in the city's cultural scene." },
    8: { name: "Botanical Garden", description: "Laid out in the 19th century with plant species from around the world, plus ponds and greenhouses that give the garden an idyllic, restful feel." },
    9: { name: "Old Eppelheim Tram Bridge", description: "A striking piece of 19th-century industrial architecture, once part of a tram line linking Heidelberg with neighboring towns, with an impressive steel structure and river views." },
    10: { name: "The Bahnstadt district", description: "One of the world's largest passive-house neighborhoods - an ambitious modern quarter combining contemporary design with sustainability, from homes and offices to shops and green space." },
  },

  "versteckte-juwelen": {
    1: { name: "Neuenheim", description: "One of Heidelberg's most charming quarters, with narrow lanes, historic buildings, cozy cafés and small shops - plus a lively weekend flea market." },
    2: { name: "Old Town corners", description: "Beyond the main sights, the Old Town rewards slow wandering: half-timbered houses, quiet squares and views up to the castle and along the Neckar." },
    3: { name: "Wolfsbrunnen", description: "A romantic 18th-century manor just outside town, set in beautiful parkland - great for a walk under old trees, a picnic, and the occasional concert." },
    4: { name: "Philosopher's Walk", description: "A hillside path above the city with a stunning panorama of the Old Town and the Neckar, dotted with benches for a quiet pause." },
    5: { name: "Kurpfalz Park", description: "A relaxed nature and adventure park just outside Heidelberg with trails, wildlife, a playground and family events - a fine break from the city." },
    6: { name: "Student Prison (Studentenkarzer)", description: "The former lock-up for Heidelberg students, now a museum offering a glimpse into the university's quirky traditions and 19th-century student life." },
    7: { name: "Heidelberg Main Station", description: "A handsome mid-century building worth a look for its architecture, with shops and restaurants inside if you need a bite or a souvenir." },
    8: { name: "Märchenparadies (Fairy-Tale Park)", description: "A hidden hillside park above the castle filled with whimsical fairy-tale sculptures and rides - a magical spot for children and playful adults." },
    9: { name: "Small specialty museums", description: "Heidelberg hides a number of niche museums; seek out the smaller collections for an offbeat, crowd-free afternoon of discovery." },
    10: { name: "Botanical Garden", description: "A lovely place to explore the diversity of the plant world, with themed gardens and greenhouses full of exotic species - peaceful and green." },
  },

  "kinderfreundliche-orte": {
    1: { name: "Exploring Heidelberg with your family", description: "Stroll the Old Bridge for a classic view of the castle, wander the Old Town's lanes, and walk or cycle a stretch of the Philosopher's Walk together." },
    2: { name: "Family-friendly city tours", description: "Kid-focused tours bring the city's history to life, from costumed guides telling tales of the past to special castle tours with interactive activities for children." },
    3: { name: "Heidelberg Zoo", description: "A family highlight where kids can meet animals from around the world, join feedings and keeper talks, and let off steam at playgrounds and picnic areas." },
    4: { name: "Heidelberg city forest", description: "Great for nature-loving families, with hiking and cycling trails and an adventure playground where children can climb and play." },
    5: { name: "A boat trip on the Neckar", description: "A relaxed way to see Heidelberg from the water - rent a boat or join a guided cruise and take in the scenery and riverside landmarks." },
    6: { name: "Interactive science museum", description: "A hands-on spot where kids can experiment and play, from programming robots to virtual reality and science experiments." },
    7: { name: "A treasure hunt at the castle", description: "Turn a castle visit into an adventure with a scavenger hunt or puzzle trail, so children discover its history while having fun." },
    8: { name: "Märchenparadies (Fairy-Tale Park)", description: "A hillside amusement park made for families with young children, with gentle rides, shows and attractions based on classic fairy tales." },
    9: { name: "Heidelberg high ropes course (Kletterwald)", description: "An adventure park with courses for different ages and skill levels - zip lines, obstacles and plenty of thrills for the whole family." },
    10: { name: "Family swimming pool", description: "Wind down after a busy day at the family pool, with pools, slides and play areas for kids, plus a sauna and spa for the grown-ups." },
  },

  "wellness-spa": {
    1: { name: "Spa am Schloss", description: "A luxury spa near Heidelberg Castle offering massages, facials and body scrubs, with a beautiful view over the city." },
    2: { name: "Kurpfalz Therme", description: "Thermal baths with a relaxing mix of saunas, steam rooms and whirlpools, plus wellness treatments such as massages and facials." },
    3: { name: "Palmenparadies", description: "An exotic spa with a tropical feel - palms, sandy loungers and several pools, along with a sauna landscape of steam rooms and saunas." },
    4: { name: "Villa Medici", description: "A luxury spa with a broad range of treatments, including massages, facials and body scrubs, plus an indoor pool and sauna area." },
    5: { name: "Heidelberger Sauna", description: "A sauna complex with a variety of saunas, steam rooms and quiet relaxation areas, plus a terrace overlooking the Neckar." },
    6: { name: "Wellness Oase", description: "A spa with a calming atmosphere and treatments such as massages, facials and body scrubs, plus an indoor pool and sauna area." },
    7: { name: "Beauty Lounge", description: "A cosmetics studio offering manicures, pedicures and facials, along with a dedicated massage area." },
    8: { name: "Yoga Zentrum", description: "A yoga and meditation center with classes for beginners and advanced practitioners, plus regular workshops and retreats." },
    9: { name: "Fitness Studio", description: "A gym offering classes such as yoga, Pilates and Zumba, with a wellness area featuring a sauna and steam room." },
    10: { name: "Wellness Hotel", description: "A wellness hotel with a relaxing atmosphere and treatments such as massages, facials and body scrubs, plus an indoor pool and sauna area." },
  },

  "veranstaltungen-festivals": {
    1: { name: "Heidelberger Frühling", description: "A renowned music festival held each spring, spanning classical to contemporary works and drawing international artists for concerts, workshops and masterclasses." },
    2: { name: "Enjoy Jazz", description: "A distinctive jazz festival each autumn, presenting innovative and experimental music at venues across Heidelberg and the region, from established names to rising talents." },
    3: { name: "Heidelberger Stückemarkt", description: "A spring theater festival showcasing new work from emerging playwrights and directors, with workshops, discussions and readings." },
    4: { name: "Heidelberger Herbst", description: "The region's biggest street fair, held every September with rides, live music and traditional German food and drink - a favorite for families." },
    5: { name: "Castle Illumination (Schlossbeleuchtung)", description: "A spectacular fireworks display over Heidelberg Castle on several nights in summer, best watched from the banks of the Neckar." },
    6: { name: "Christmas markets", description: "In Advent, Heidelberg turns into a winter wonderland with markets across several squares, offering handcrafted gifts, treats and mulled wine." },
    7: { name: "Heidelberg Literature Days", description: "An autumn festival for book lovers, with readings, discussions and workshops featuring acclaimed authors from around the world." },
  },

  "einkaufsmoeglichkeiten": {
    1: { name: "Old Town boutiques", description: "The Old Town is full of small independent shops selling handmade goods, vintage clothing and work by local designers - perfect for one-of-a-kind finds." },
    2: { name: "Shopping centers & high-street brands", description: "For familiar names under one roof, Heidelberg's malls and the station shopping area gather brands like H&M, Zara and Mango alongside local boutiques and cafés." },
    3: { name: "The flea market", description: "Hunt for vintage clothing, antiques and furniture at Heidelberg's regular flea market. Come early for the best finds and be ready to haggle." },
    4: { name: "Marktplatz weekly market", description: "Pick up fresh local produce - fruit, vegetables, cheese and bread - at the market on the Marktplatz, and soak up the Old Town atmosphere while you shop." },
    5: { name: "Farmers' markets", description: "Buy fresh regional produce straight from the growers, from seasonal fruit and vegetables to cheese and honey, and chat with the farmers about where it all comes from." },
    6: { name: "Vintage shops in the Weststadt", description: "The Weststadt is known for its trendy vintage stores, packed with second-hand clothing, retro furniture and accessories for building your own look." },
    7: { name: "Designer shops near the station", description: "The station quarter is home to upscale boutiques and designer stores, from fashion to shoes, for a spot of luxury shopping." },
    8: { name: "Craft & art shops in Neuenheim", description: "Neuenheim's streets hold creative little shops selling handmade goods, art and souvenirs by local artists and makers." },
    9: { name: "Gift shops", description: "For unique souvenirs and gifts, Heidelberg's gift shops carry everything from traditional German products to modern design pieces - T-shirts, mugs, magnets and keepsakes to remember the city by." },
    10: { name: "Heidelberg shopping galleries", description: "The city's largest downtown shopping center gathers a wide range of stores, restaurants and cafés under one roof - shop to your heart's content, then relax over a meal or a coffee." },
  },
};

/**
 * Wendet die EN-Item-Übersetzungen auf eine Item-Liste an. Fehlt eine
 * Übersetzung, bleibt das Original-Item unverändert. Für Locale "de"
 * (oder unbekannte Slugs) werden die Items unverändert zurückgegeben.
 */
export function translateItems<T extends { rank: number; name: string; description: string; address?: string }>(
  slug: string,
  items: T[],
  locale: Locale = "en",
): T[] {
  if (locale === "de") return items;
  const map = itemTranslations[slug];
  if (!map) return items;
  return items.map((it) => {
    const t = map[it.rank];
    if (!t) return it;
    return {
      ...it,
      name: t.name ?? it.name,
      description: t.description ?? it.description,
      address: t.address ?? it.address,
    };
  });
}
