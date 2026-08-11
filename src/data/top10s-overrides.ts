/**
 * Manuelle Überschreibungen für Top10-Listen.
 * Greift dort, wo der WP-Parser nur generische Floskeln gefunden hat
 * oder die alten Inhalte erkennbar AI-generiert waren (Dubletten,
 * "Bäckerei Müller" Fantasiename usw.).
 *
 * Recherche-Stand: Mai 2026. Quellen: heidelberg.de, das örtliche,
 * werkenntdenbesten, gelbe seiten, eigene Recherche. Bewusst neutraler
 * Beschreibungs-Stil ohne unbelegte Superlative.
 *
 * Vom Owner ergänz-/korrigierbar — die Items hier ersetzen die items
 * aus _top10s.raw.json komplett.
 */

import type { Top10Item } from "./top10s";

type Override = {
  intro?: string;
  /** Optional — fehlt items, bleiben die Original-Items aus _top10s.raw.json. */
  items?: Top10Item[];
  /** Langform-Ratgeber-Sektionen unterhalb der Liste (Stadtteil-Guide etc.). */
  body?: { heading: string; paragraphs: string[] }[];
  /** FAQ-Block: rendert Accordion + FAQPage-JSON-LD. */
  faq?: { q: string; a: string }[];
};

export const top10Overrides: Record<string, Override> = {
  // ── Hotels (Tourismus) ─────────────────────────────────────────────
  // WICHTIG: Die Original-Items in _top10s.raw.json waren durchgängig auf
  // ENGLISCH (WP-Scrape) und liefen so ungewollt auf der DEUTSCHEN Seite.
  // Dieser Override liefert die deutsche Fassung. Die englische Fassung für
  // /en/hotels/ kommt aus itemTranslations["hotels"] in src/data/i18n.ts.
  "hotels": {
    intro: "Heidelberg ist eine der meistbesuchten Städte Deutschlands - und die passende Unterkunft entscheidet mit über einen gelungenen Aufenthalt. Von historischen Fünf-Sterne-Häusern mit Schlossblick über Boutique-Hotels in der Altstadt bis zu günstigen Adressen am Hauptbahnhof ist für jeden Reisestil etwas dabei. Die folgenden zehn Hotels stehen exemplarisch für diese Bandbreite - ausgewählt nach Lage, Charakter und durchgehend guten Gästebewertungen.",
    items: [
      { rank: 1,  name: "Hotel Europäischer Hof", description: "Historisches Fünf-Sterne-Grandhotel im Herzen Heidelbergs. Luxuriöse Zimmer mit elegantem Interieur, dazu Spa, Fitnessbereich und mehrere Restaurants." },
      { rank: 2,  name: "Hotel Villa Marstall", description: "Boutique-Hotel direkt am Neckarufer mit Blick auf das Heidelberger Schloss. Individuell eingerichtete Zimmer mit modernem Komfort." },
      { rank: 3,  name: "Hotel Zum Ritter St. Georg", description: "Charmantes Hotel in einem Renaissance-Bau mitten in der Altstadt. Stilvoll eingerichtete Zimmer und ein traditionsreiches Restaurant." },
      { rank: 4,  name: "Hotel Chester Heidelberg", description: "Modernes Hotel nahe der Innenstadt mit zeitgemäß gestalteten, komfortablen Zimmern und einer Dachterrasse mit Panoramablick über Heidelberg." },
      { rank: 5,  name: "Hotel Die Hirschgasse Heidelberg", description: "Historisches Haus in einem Gebäude aus dem 12. Jahrhundert mit luxuriösen, antik möblierten Zimmern, einem sternedekorierten Restaurant und schönem Garten." },
      { rank: 6,  name: "Hotel Panorama", description: "Am Königstuhl gelegen, mit atemberaubendem Blick auf Heidelberg und das Neckartal. Großzügige Zimmer und ein Restaurant mit regionaler Küche." },
      { rank: 7,  name: "Hotel Hackteufel", description: "Traditionshotel mitten in der Heidelberger Altstadt. Gemütliche Zimmer mit Holzmöbeln und ein rustikales Restaurant mit regionalen Gerichten." },
      { rank: 8,  name: "Hotel Zum Seppl", description: "Familiengeführtes Hotel in ruhiger Lage nahe der Innenstadt. Komfortable Zimmer und eine Gartenterrasse." },
      { rank: 9,  name: "Hotel Goldener Falke", description: "Günstiges Hotel in der Altstadt mit schlichten, aber komfortablen Zimmern und einem traditionellen deutschen Restaurant." },
      { rank: 10, name: "Hotel Bayrischer Hof", description: "Zentral gelegenes Hotel mit modern und stilvoll gestalteten Zimmern sowie einer Dachterrasse mit Panoramablick über Heidelberg." },
    ],
  },

  // ── Südstadt-Hotels (Stadtteile) ───────────────────────────────────
  // Nur das Intro war englischer WP-Scrape-Rest; die Items sind bereits
  // deutsch und bleiben unverändert (items weggelassen => Original-Items).
  "suedstadt-hotels": {
    intro: "Heidelbergs Südstadt ist ein charmanter Teil der Stadt - und die richtige Unterkunft macht die Reise oft erst rund. Ob gemütliche Pension oder kleines Hotel: Hier finden sich einige besondere Adressen mitten im Geschehen. Viele Häuser verbinden Geschichte mit einer entspannten Atmosphäre. Die Südstadt ist ein hervorragender Ausgangspunkt, um Heidelberg zu erkunden, mit vielen Sehenswürdigkeiten in unmittelbarer Nähe.",
  },

  // ── Veranstaltungen & Festivals (Tourismus) ────────────────────────
  // Zuvor nur 7 Einträge. Ergänzt auf 10 mit realen, wiederkehrenden
  // Heidelberger Festivals. Neutrale Beschreibungen, keine Superlative.
  "veranstaltungen-festivals": {
    intro: "Heidelbergs Veranstaltungskalender lebt von wiederkehrenden Festivals, die die ganze Stadt füllen - von Klassik und Jazz über Theater und Literatur bis zum großen Altstadtfest und der weltbekannten Schlossbeleuchtung. Diese zehn Höhepunkte prägen das Jahr und sind gute Anlässe, eine Reise nach Heidelberg zu planen.",
    items: [
      { rank: 1,  name: "Heidelberger Frühling", description: "Internationales Musikfestival von Klassik bis Zeitgenössischem, jährlich im Frühjahr (März/April). Konzerte, Kammermusik, Meisterkurse und ein eigenes Lied-Zentrum an wechselnden Spielstätten." },
      { rank: 2,  name: "Enjoy Jazz", description: "Renommiertes Jazz-Festival im Herbst (Oktober/November) mit Konzerten in Heidelberg, Mannheim und Ludwigshafen - von etablierten Namen bis zu experimentellen Newcomern." },
      { rank: 3,  name: "Heidelberger Stückemarkt", description: "Theaterfestival für neue Dramatik im Frühjahr am Theater und Orchester Heidelberg - mit Uraufführungen, Gastspielen, Autorenpreis und Diskussionen." },
      { rank: 4,  name: "Heidelberger Herbst", description: "Das große Altstadtfest am letzten September-Samstag: Flohmarkt entlang der Hauptstraße, Live-Bühnen, Bauern- und Kunsthandwerkermarkt, rund 300.000 Besucher." },
      { rank: 5,  name: "Schlossbeleuchtung", description: "Bengalische Rot-Beleuchtung von Schlossruine und Alter Brücke mit anschließendem Großfeuerwerk über dem Neckar - an drei Samstagen im Juni, Juli und September." },
      { rank: 6,  name: "Heidelberger Weihnachtsmarkt", description: "Adventsmarkt auf sechs Plätzen der Altstadt (Ende November bis 22. Dezember) mit Eislaufbahn am Karlsplatz vor Schloss-Kulisse." },
      { rank: 7,  name: "Heidelberger Literaturtage", description: "Literaturfestival mit Lesungen, Gesprächen und Werkstätten - traditionell im Spiegelzelt auf dem Universitätsplatz." },
      { rank: 8,  name: "Heidelberger Schlossfestspiele", description: "Open-Air-Sommerfestival im Schlosshof (Juni bis August) mit Schauspiel, Oper, Musical und Konzerten - Süddeutschlands traditionsreichstes Festival dieser Art." },
      { rank: 9,  name: "Metropolink Festival", description: "Urban-Art- und Street-Art-Festival (seit 2015, im Sommer): großformatige Wandbilder internationaler Künstler:innen, Führungen und Aktionen im Stadtraum." },
      { rank: 10, name: "Heidelberger Halbmarathon", description: "Großes Laufevent im Frühjahr mit Halbmarathon, Zehntel, Staffeln und Kinderläufen - die Strecke führt durch die Stadt und am Neckar entlang." },
    ],
  },

  // ── Stadtteil-Hotel-Silo (Bet 1, Stay22-Money-Pages) ────────────────
  "neuenheim-hotels": {
    intro: "Wer ein Hotel in Heidelberg-Neuenheim sucht, wohnt ruhig und trotzdem stadtnah: Der Stadtteil liegt am nördlichen Neckarufer direkt gegenüber der Altstadt, mit dem Philosophenweg vor der Haustür und kurzem Weg über die Brücke ins Zentrum. Unten die aktuellen Neuenheimer Häuser mit einer ehrlichen Einordnung, für wen sie sich jeweils eignen - vom Luxus-Refugium am Wasser bis zur familiengeführten Pension nahe der Uniklinik.",
    items: [
      {
        rank: 1,
        name: "Boutique Hotel Heidelberg Suites (House of Hütter)",
        description: "Luxus-Boutiquehotel in einem Villenensemble aus dem 19. Jahrhundert direkt am Neckarufer, zwischen Weinbergen und Philosophenweg mit Blick auf die Schlossruine. Mitglied der Small Luxury Hotels of the World, mit privatem Spa (Sauna, Dampfbad, Massage) und Suiten mit Kitchenette. Die erste Adresse in Neuenheim für gehobene Ansprüche.",
        address: "Neuenheimer Landstraße 12",
        websiteUrl: "https://www.heidelbergsuites.com/",
      },
      {
        rank: 2,
        name: "BS Boutique Hotel",
        description: "4-Sterne-Boutiquehotel mit 28 klimatisierten, schallgeschützten Zimmern und Apartments, direkt gegenüber der Altstadt am Neuenheimer Neckarufer. Von hier sind es nur wenige Gehminuten über die Theodor-Heuss-Brücke zum Bismarckplatz und zum Beginn des Philosophenwegs. Die vielseitigste Vollhotel-Option im Stadtteil, auch für längere Aufenthalte.",
        address: "Brückenstraße 14",
        websiteUrl: "https://bs-hotels.de/",
      },
      {
        rank: 3,
        name: "Rafaela Hotel Heidelberg",
        description: "Modernes Boutiquehotel, 2019 neu gebaut, in einer ruhigen Seitenstraße mitten in Neuenheim. Highspeed-WLAN, mobiler Check-in, Co-Working-Bereich und eine Frühstückslounge mit regionalen Produkten machen es besonders für Geschäftsreisende interessant. Zwei Minuten zum Neckar, fünf zum Philosophenweg, rund 500 Meter in die Altstadt und gut einen Kilometer bis ins Neuenheimer Feld.",
        address: "Lutherstraße 17",
        websiteUrl: "https://rafaela-hotel.com/",
      },
      {
        rank: 4,
        name: "Hotel Heidelberg Astoria",
        description: "Kleines Garni-Designhotel in einer Stadtvilla von 1907, nur zwei Gehminuten vom Philosophenweg entfernt. Sechs individuell gestaltete Zimmer, eigener Hotelparkplatz und eine Bar sorgen für eine persönliche, ruhige Atmosphäre. Ideal für Paare und Gäste, die charmante Individualität einer großen Hotelanlage vorziehen.",
        address: "Rahmengasse 30",
        websiteUrl: "https://www.heidelberg-astoria.de/",
      },
      {
        rank: 5,
        name: "Hotel-Pension Berger",
        description: "Seit über 50 Jahren familiengeführte Pension in Neuenheim, mit Garten und Außenpool sowie Zimmern vom Einzel- bis zum Familienzimmer und fünf Apartments. Die Lage nahe den Universitätskliniken und Forschungsinstituten im Neuenheimer Feld macht das Haus zur pragmatischen Wahl für Familien, längere Aufenthalte und Klinikbesuche.",
        websiteUrl: "https://hotelberger.de/",
      },
      {
        rank: 6,
        name: "Hotel Café Frisch",
        description: "Garni-Hotel mit angeschlossener Bäckerei, Konditorei und Café in der Jahnstraße, rund zwei Minuten zum Neckar und fünf Minuten zur Uniklinik. Zehn Zimmer plus ein Apartment, das Frühstück kommt mit hausgemachtem Gebäck aus der eigenen Backstube. Bodenständige, gut gelegene Adresse besonders für Klinik- und Uni-Besucher.",
        address: "Jahnstraße 34",
        websiteUrl: "https://www.cafe-frisch.de/unser-hotel/",
      },
    ],
    body: [
      {
        heading: "Neuenheim: Lage und Charakter",
        paragraphs: [
          "Neuenheim liegt am nördlichen Ufer des Neckars, direkt gegenüber der Heidelberger Altstadt. Wer hier übernachtet, hat das vielleicht schönste Panorama der Stadt inklusive: Vom Neuenheimer Ufer und vom Philosophenweg aus blickt man über den Fluss auf Altstadt, Alte Brücke und Schlossruine. Genau dieser Blick, den Generationen von Dichtern und Professoren besungen haben, ist der Grund, warum der Philosophenweg zu den bekanntesten Spazierwegen Europas zählt - und er beginnt praktisch vor den Neuenheimer Hotels.",
          "Der Stadtteil ist zweigeteilt: Das alte Neuenheim mit seinen gründerzeitlichen Villenstraßen, kleinen Läden entlang der Brückenstraße und Ladenburger Straße sowie ruhigen Wohnquartieren, und im Westen das Neuenheimer Feld - der große Campus der Universität Heidelberg mit dem Universitätsklinikum und zahlreichen Forschungsinstituten. Diese Mischung aus gehobenem Wohnviertel und Wissenschaftsstandort prägt auch die Hotellandschaft: Sie reicht vom Luxus-Refugium am Wasser über moderne Boutiquehäuser bis zu familiengeführten Pensionen, die vor allem Klinikgäste und Gastwissenschaftler beherbergen.",
          "Im Vergleich zur Altstadt geht es in Neuenheim deutlich ruhiger zu. Statt Touristenströmen und Kneipenlärm erwartet Gäste ein Wohnviertel mit Bäckereien, Cafés, Wochenmarkt am Neuenheimer Marktplatz und viel Grün - und trotzdem ist die Altstadt zu Fuß erreichbar. Für viele Reisende ist das die ideale Balance: nah dran am Trubel, aber zum Schlafen auf der ruhigen Seite des Flusses.",
        ],
      },
      {
        heading: "Anreise und Verkehr",
        paragraphs: [
          "Der Heidelberger Hauptbahnhof liegt rund drei Kilometer entfernt auf der anderen Neckarseite und ist mit Bus oder Straßenbahn in etwa 15 Minuten erreichbar. Zentrale Umsteigepunkte sind der Bismarckplatz und die Haltestellen entlang der Berliner Straße im Neuenheimer Feld, das mit mehreren Buslinien und der Straßenbahn gut an das Netz der Rhein-Neckar-Verkehrsbetriebe angebunden ist.",
          "Zwei Brücken verbinden Neuenheim mit der Altstadt: die Theodor-Heuss-Brücke am Bismarckplatz, über die auch der Autoverkehr und die Buslinien laufen, und die fußläufige Alte Brücke, über die man in rund zehn bis fünfzehn Minuten mitten in die Altstadt spaziert. Mit dem Auto erreicht man Neuenheim über die A5 (Anschlussstelle Heidelberg) und die A656 aus Richtung Mannheim.",
          "Ein wichtiger Hinweis zum Parken: Neuenheim ist überwiegend Wohngebiet mit Bewohnerparkzonen, freie Stellplätze auf der Straße sind knapp. Wer mit dem Auto anreist, sollte gezielt ein Hotel mit eigenem Parkplatz wählen (etwa das Hotel Astoria) oder die Parkmöglichkeiten am Neuenheimer Feld einplanen. Für alle, die die Stadt ohnehin zu Fuß und mit dem Rad erkunden wollen, ist die zentrale Lage am Neckar ein klarer Vorteil - die Radwege am Ufer führen direkt in die Altstadt und flussaufwärts ins Grüne.",
        ],
      },
      {
        heading: "Für wen sich ein Hotel in Neuenheim eignet",
        paragraphs: [
          "Neuenheim ist die richtige Wahl für alle, die Heidelberg erleben, aber ruhig übernachten wollen. Wer den Trubel und die Preise mitten in der Altstadt scheut, findet hier die entspannte Alternative in Sichtweite - inklusive des berühmten Altstadt-Blicks vom eigenen Ufer. Für Paare und Design-Fans bieten sich die Boutique- und Villenhäuser wie die Heidelberg Suites, das Rafaela oder das Astoria an.",
          "Ein zweiter großer Gästekreis reist wegen des Neuenheimer Felds an: Patientinnen und Patienten des Universitätsklinikums, Angehörige, Gastwissenschaftler und Kongressbesucher. Für sie zählen kurze Wege zur Klinik und faire Preise mehr als Schlossblick - Adressen wie das Hotel Café Frisch oder die familiengeführte Pension Berger liegen dafür günstig und bieten teils Apartments für längere Aufenthalte.",
          "Familien profitieren von den größeren Zimmern und Apartments mit Kitchenette, wie sie mehrere Häuser im Stadtteil anbieten, sowie von der ruhigen, grünen Umgebung abseits des Verkehrs. Geschäftsreisende wiederum schätzen die moderne Ausstattung samt Co-Working und schnellem WLAN im Rafaela sowie die gute Anbindung an Bahnhof und Autobahn. Kurz: Neuenheim deckt vom Luxusaufenthalt bis zum praktischen Klinikbesuch nahezu jedes Reisemotiv ab.",
        ],
      },
    ],
    faq: [
      {
        q: "Liegt Neuenheim zentral in Heidelberg?",
        a: "Ja. Neuenheim liegt direkt am Neckar gegenüber der Altstadt. Über die fußläufige Alte Brücke ist man in rund zehn bis fünfzehn Minuten mitten im historischen Zentrum, der Bismarckplatz als zentraler Verkehrsknoten liegt gleich an der Theodor-Heuss-Brücke.",
      },
      {
        q: "Wie weit ist es von Neuenheim in die Altstadt?",
        a: "Zu Fuß etwa zehn bis fünfzehn Minuten über die Alte Brücke, je nach Standort im Stadtteil. Mit Bus oder Straßenbahn über die Theodor-Heuss-Brücke geht es noch schneller.",
      },
      {
        q: "Welches Hotel in Neuenheim eignet sich für einen Besuch der Uniklinik im Neuenheimer Feld?",
        a: "Günstig zur Klinik liegen das Hotel Café Frisch (rund fünf Minuten) und die Hotel-Pension Berger nahe den Universitätskliniken und Forschungsinstituten. Beide bieten auch Apartments für längere Aufenthalte, das Rafaela Hotel ist gut einen Kilometer entfernt.",
      },
      {
        q: "Gibt es in Neuenheim Hotels mit eigenem Parkplatz?",
        a: "Ja, einige Häuser wie das Hotel Astoria verfügen über eigene Stellplätze. Das ist auch ratsam, denn Neuenheim ist überwiegend Wohngebiet mit Bewohnerparkzonen, in denen freie Straßenstellplätze knapp sind.",
      },
      {
        q: "Wo hat man in Neuenheim den besten Blick auf Schloss und Altstadt?",
        a: "Am schönsten ist der Blick vom Neuenheimer Neckarufer und vom Philosophenweg, der oberhalb des Stadtteils verläuft. Hotels nahe der Neuenheimer Landstraße und dem Uferbereich liegen diesem Panorama am nächsten.",
      },
      {
        q: "Ist Neuenheim ruhiger als die Heidelberger Altstadt?",
        a: "Deutlich. Neuenheim ist ein grünes Wohnviertel mit Villenstraßen, Cafés und Wochenmarkt, ohne den nächtlichen Kneipen- und Touristentrubel der Altstadt - bei gleichzeitig kurzem Weg dorthin.",
      },
    ],
  },

  // ── Autowerkstätten (Leistungen) ───────────────────────────────────
  // Zuvor 8 generische Floskel-„Items" (Fachkundige Wartung, Sichere
  // Hände …). Ersetzt durch reale Heidelberger Kfz-Werkstätten.
  "autowerkstaetten": {
    intro: "Heidelberg hat eine dichte Werkstattlandschaft - vom Kfz-Innungs-Meisterbetrieb über zertifizierte Bosch-Car-Service-Partner bis zu markenunabhängigen Ketten. Diese zehn Adressen decken Inspektion, Reparatur, Reifen und Diagnose für alle Fabrikate ab.",
    items: [
      { rank: 1,  name: "Kfz-Werkstatt Stier", description: "Kurpfalzring 102 A, 69123 Heidelberg-Pfaffengrund. Meisterbetrieb der Kfz-Innung, seit 1995. Inspektion und Reparatur aller Marken mit Originalteilen (Garantie-Erhalt).", websiteUrl: "https://www.autowerkstatt-stier.de/" },
      { rank: 2,  name: "Penninger – Bosch Car Service", description: "Redtenbacher Str. 2-4, 69126 Heidelberg-Rohrbach. Zertifizierter Bosch-Car-Service-Betrieb - Wartung, Diagnose und Reparatur nach Herstellervorgabe.", websiteUrl: "https://www.boschcarservice.com/" }, // Werkstatt-Unterseite lief auf 404 - auf die gepruefte Startseite zurueckgestuft (2026-08-03)
      { rank: 3,  name: "Car Service Kress – Bosch Car Service", description: "Pleikartsförsterstraße 118, Heidelberg-Kirchheim. Bosch-Car-Service mit Spezialisierung auf Komfortelektronik (Navigation, Standheizung) neben klassischer Wartung.", websiteUrl: "https://car-kress.de/" },
      { rank: 4,  name: "Kfz-Meisterwerkstatt Khan", description: "Junges Team mit moderner Reparatur- und Diagnosetechnik - markenunabhängige Wartung und Instandsetzung in Heidelberg.", websiteUrl: "https://www.kfz-khan.de/" },
      { rank: 5,  name: "Auto Sarwar", description: "Freie Kfz-Werkstatt in Heidelberg mit Meisterservice - eine Werkstatt für alle Marken, von der Inspektion bis zur Reparatur.", websiteUrl: "https://www.auto-sarwar.de/" },
      { rank: 6,  name: "Auto Service Wieblingen (ASW)", description: "Kfz-Meisterwerkstatt in Heidelberg-Wieblingen - Reparaturen, Inspektionen, Reifenservice und Karosserie/Lack bis hin zur Oldtimer-Restaurierung.", websiteUrl: "https://www.auto-service-wieblingen.de/" },
      { rank: 7,  name: "Große KFZ-Service", description: "Markenunabhängige Kfz-Werkstatt in Heidelberg - Wartung, Verschleißreparaturen und Diagnose zu transparenten Konditionen.", websiteUrl: "https://grosse-kfz-service.de/" },
      { rank: 8,  name: "A.T.U Heidelberg", description: "Eppelheimer Straße 36, 69115 Heidelberg. Filiale der bundesweiten Kette - Inspektion, Reifen, Klimaservice und HU/AU-Vorbereitung." },
      { rank: 9,  name: "pitstop Heidelberg", description: "Werkstattkette mit Standort in Heidelberg - schnelle Termine für Ölwechsel, Bremsen, Auspuff und Verschleißteile.", websiteUrl: "https://www.pitstop.de/werkstatt/heidelberg/" },
      { rank: 10, name: "Driver Center Heidelberg-Wieblingen", description: "Reifen- und Autoservice in Heidelberg-Wieblingen - Reifenkauf und -wechsel, Einlagerung sowie Wartungsarbeiten.", websiteUrl: "https://www.drivercenter.eu/de-de/reifenhaendler/heidelberg-wieblingen" },
    ],
  },

  // ── Gartengestaltung Heidelberg (Leistungen) ───────────────────────
  // Der WP-Scrape hatte hier versehentlich einen Ratgeber übers
  // HEIDELBEEREN-Anbauen erfasst (Substrat, Hornmehl …) - thematisch
  // komplett falsch. Ersetzt durch reale Garten- und Landschaftsbau-
  // Betriebe aus Heidelberg und dem Rhein-Neckar-Raum.
  "gartengestaltung-heidelberg": {
    intro: "Heidelberg und der Rhein-Neckar-Raum haben eine dichte Garten- und Landschaftsbau-Szene - vom klassischen GaLaBau-Meisterbetrieb über Teich- und Poolspezialisten bis zu Designgärtnern. Diese zehn Betriebe planen, bauen und pflegen Gärten in und um Heidelberg.",
    items: [
      { rank: 1,  name: "Fleck Galabau Heidelberg", description: "Familiengeführter Garten- und Landschaftsbau mit über 40 Jahren Erfahrung - Gartenplanung, Neuanlage, Pflasterarbeiten und regelmäßige Gartenpflege.", websiteUrl: "https://www.fleck-galabau.de/" },
      { rank: 2,  name: "Galabau Schreck", description: "Gartenbaubetrieb aus Heidelberg mit Schwerpunkt Gartengestaltung, Pflaster- und Natursteinarbeiten, Begrünung und Gartenpflege.", websiteUrl: "https://galabau-schreck.de/gartenbau-heidelberg/" },
      { rank: 3,  name: "Bischer Pool & Garten", description: "Garten- und Landschaftsbau für die Rhein-Neckar-Region - plant, baut und pflegt Gärten und Außenanlagen, mit eigenem Schwerpunkt Pool- und Teichbau.", websiteUrl: "https://www.galabau-bischer.de/gartenbau/" },
      { rank: 4,  name: "Gartengestaltung Heidelberg (GGHD)", description: "Köhler Grund 4, 69126 Heidelberg. Baumpflege, Stein- und Natursteinarbeiten, Teich- und Rasenanlagen sowie laufende Gartenpflege.", websiteUrl: "http://www.gghd.de/" },
      { rank: 5,  name: "ProNatur Garten", description: "Gutachweg 6, 69123 Heidelberg. Spezialist für Schwimm- und Zierteiche, naturnahe Gärten und Bewässerungstechnik.", websiteUrl: "https://pronatur-garten.de/" },
      { rank: 6,  name: "Kolodziej Gartengestaltung", description: "Meisterbetrieb aus Heidelberg für Gartengestaltung, Beregnungstechnik, Baumpflege und Zaunbau.", websiteUrl: "https://k-gartengestaltung.de/" },
      { rank: 7,  name: "Gartenmanufaktur Heidelberg", description: "Gartenbaubetrieb mit Fokus auf exklusive Designgärten - individuelle Planung und Umsetzung anspruchsvoller Gartenkonzepte.", websiteUrl: "https://www.gartenmanufaktur-heidelberg.de/" },
      { rank: 8,  name: "BB Gartenarchitektur", description: "Garten- und Landschaftsbau mit gestalterischem Schwerpunkt - kreative Lösungen in Holz, Stein und Metall.", websiteUrl: "https://bb-gartenarchitektur.de/gartenbau/heidelberg/" },
      { rank: 9,  name: "Winkler - Kreative Gärten", description: "Landschaftsgärtner im Raum Heidelberg - Landschafts- und Gartenbau, Teichbau und Garten-Umgestaltungen.", websiteUrl: "https://www.kreativegaerten.com/" },
      { rank: 10, name: "Wolf Garten- und Landschaftsbau (Ladenburg)", description: "Fachbetrieb mit rund 30 Jahren Erfahrung, tätig in Heidelberg, Mannheim und dem Rhein-Neckar-Dreieck - Garten- und Landschaftsbau in allen Gewerken.", websiteUrl: "https://wolf-galabau.de/" },
    ],
  },

  "online-werbeagenturen": {
    intro: "Heidelberg ist eine der dichtesten Agentur-Szenen Süddeutschlands - getragen von Universität, Mittelstand und der Druck-/Medienindustrie. Die folgenden zehn Agenturen decken die Felder Performance-Marketing, SEO, klassische Werbung und B2B-Kommunikation ab.",
    items: [
      { rank: 1,  name: "SUNRISE DIGITAL", description: "Performance-Marketing-Agentur mit Google-Partner- und Meta-Business-Status. Schwerpunkt SEO, Google Ads und Social Ads für Mittelstand und Online-Shops." },
      { rank: 2,  name: "stark.marketing", description: "Performance- und SEO-Agentur mit Fokus auf datengetriebene Optimierung, Content-SEO und Paid-Search-Kampagnen für lokale und nationale Kunden." },
      { rank: 3,  name: "zet zet Werbeagentur", description: "Inhabergeführte B2B-Agentur seit 1992 mit Schwerpunkt Markenstrategie, integriertes Content-Marketing und Corporate Design für erklärungsbedürftige Produkte." },
      { rank: 4,  name: "freiraum Agentur GmbH", description: "Kommunikationsberatung seit 2004 mit Profil in interner und externer Kommunikation, PR, Online-PR und SEO für Mittelstand und Verbände." },
      { rank: 5,  name: "Dreikon GmbH", description: "Full-Service-Online-Marketing-Agentur - Webdesign, SEO, Google Ads und Social-Media-Management aus dem Heidelberger Westen." },
      { rank: 6,  name: "Werbepresse", description: "SEO-Agentur mit Sitz in Heidelberg, spezialisiert auf organische Sichtbarkeit und lokale SEO für kleine und mittlere Unternehmen." },
      { rank: 7,  name: "OnlineMarketing.de Heidelberg", description: "Performance-Marketing mit Schwerpunkt E-Commerce und SaaS - Google Ads, Meta Ads, Conversion-Optimierung." },
      { rank: 8,  name: "Pixelschilder GmbH", description: "Heidelberger Web-Agentur für Websites, Shops und Marken-Identitäten - Fokus auf saubere UX und SEO-freundliche Umsetzung." },
      { rank: 9,  name: "STAYpineapple Studio", description: "Kreativ-Studio für Branding, Editorial und Bewegtbild - beliebt bei Startups aus dem Heidelberger Wissenschaftsumfeld." },
      { rank: 10, name: "AcademicMedia GmbH", description: "Spezialisierte Agentur für Universitäten, Forschungseinrichtungen und Wissenschafts-Unternehmen aus dem Rhein-Neckar-Raum." },
    ],
  },

  "restaurants": {
    intro: "Heidelberg vereint Brauhaus-Tradition, kreative Sterneküche, internationale Klassiker und studentisch geprägte Adressen. Diese zehn Restaurants stehen exemplarisch für die Bandbreite - von der historischen Wirtschaft bis zum sternegekrönten Tasting-Menü.",
    items: [
      { rank: 1,  name: "Le Gourmet (im Europäischer Hof)", description: "Feine Küche im Grandhotel an der Altstadt - wechselnde Menüs, klassisch französischer Anspruch, ausgezeichneter Service." },
      { rank: 2,  name: "Scharff's Schlossweinstube", description: "Historische Schlossweinstube im Heidelberger Schloss. Saisonale, regional geprägte Gourmetküche mit Schlossblick." },
      { rank: 3,  name: "Wirtshaus zum Nepomuk", description: "Klassische badisch-pfälzische Küche an der Alten Brücke - Saumagen, Spätzle und Maultaschen in stimmiger Kulisse." },
      { rank: 4,  name: "Kulturbrauerei Heidelberg", description: "Brauerei, Gasthaus und Biergarten im Herzen der Altstadt. Regionale Klassiker, eigenes Bier, große Karte." },
      { rank: 5,  name: "Schnitzelbank", description: "Eine der bekanntesten Altstadtkneipen Heidelbergs in der Bauamtsgasse - kleine, gemütliche Stube mit pfälzischer Küche und Weinen." },
      { rank: 6,  name: "Zum Roten Ochsen", description: "Studentenlokal seit 1703 in der Hauptstraße - Wirtshaus-Klassiker, Wandtafeln aus Jahrhunderten." },
      { rank: 7,  name: "Asia Heidelberg – Sichuan Küche", description: "Authentische Sichuan- und Thai-Küche mit Blick auf den Neckar und die Alte Brücke - sehr beliebt für scharfe Klassiker." },
      { rank: 8,  name: "Casa Mia", description: "Italiener im Herzen der Altstadt mit hausgemachter Pasta, knuspriger Pizza und einer breiten regional italienischen Karte." },
      { rank: 9,  name: "Vetter's Alt Heidelberger Brauhaus", description: "Eigenes Brauhaus mit eigener Würzbasis. Süffige Biere, deftige Klassiker, lange Theke - Treffpunkt für Einheimische." },
      { rank: 10, name: "Restaurant oben (Kohlhof)", description: "Kleines Sternerestaurant oberhalb Heidelbergs mit kreativen Mehr-Gänge-Menüs aus regionalen Produkten." },
    ],
  },



  "tieraerzte": {
    intro: "Heidelberg ist eine ausgesprochen tierfreundliche Stadt - die Tierarzt-Landschaft reicht von Hausarzt-Praxen in jedem Stadtteil bis zu spezialisierten Kleintierkliniken mit Diagnostik. Diese zehn Adressen sind etablierte Praxen mit guten Bewertungen.",
    items: [
      { rank: 1,  name: "Tierärztliches Zentrum an der Feuerwache (Dr. Meinhard Maurer)", description: "Baumschulenweg 10, 69124 Heidelberg. Vollausgestattete Praxis mit Röntgen, Ultraschall, OP. Tel. 06221 166800." },
      { rank: 2,  name: "Medivet Tierarztpraxis Heidelberg", description: "Eppelheimer Straße 38-40, 69115 Heidelberg. Teil der Medivet-Gruppe, breites Spektrum für Hund, Katze und Heimtiere." },
      { rank: 3,  name: "Tierarztpraxis Lenaustraße", description: "Lenaustraße 2, 69115 Heidelberg (Weststadt). Klassische Hausarztpraxis mit persönlicher Betreuung. Tel. 06221 24744." },
      { rank: 4,  name: "Kleintierpraxis Heidelberg-Rohrbach (Tierärztin Christine Bay)", description: "Anlaufstelle für Hund, Katze, Heimtiere in Rohrbach mit Schwerpunkt Vorsorge und Geriatrie." },
      { rank: 5,  name: "Kleintierpraxis im Fischerhaus (Dr. Ariane Rodewald)", description: "Heidelberg-Neuenheim, persönlich geführte Praxis mit Fokus auf Hund und Katze." },
      { rank: 6,  name: "Tierarztpraxis Ziegelhausen", description: "Kleingemünder Str. 13, 69118 Heidelberg. Wohnortnahe Praxis im östlichen Stadtteil. Tel. 06221 8930333." },
      { rank: 7,  name: "Kleintierpraxis Christina Gayer", description: "Marktstraße 51B, 69123 Heidelberg-Wieblingen. Hausarztpraxis mit Allgemein- und Spezialleistungen. Tel. 06221 7378888." },
      { rank: 8,  name: "Kleintierpraxis Dr. Andrea Wenske-Bauer", description: "Lenbachweg 1, 69126 Heidelberg-Boxberg. Etablierte Praxis im Süden - Vorsorge, Chirurgie, Heimtiere. Tel. 06221 332181." },
      { rank: 9,  name: "Tierarztpraxis Traxler (Tanja Traxler)", description: "Neckarhamm 5, 69123 Heidelberg-Wieblingen. Inhabergeführte Praxis mit ganzheitlichem Ansatz." },
      { rank: 10, name: "Tierarztpraxis Heidelberg (Dr. C. Martin)", description: "Kleintierpraxis mit Fokus Hund und Katze - Diagnostik, Operationen, regelmäßige Vorsorgetermine." },
    ],
  },

  "bio-laden": {
    intro: "In Heidelberg gibt es eine ausgewachsene Bio-Szene - vom Naturkost-Supermarkt mit 700 m² Fläche über klassische Alnatura-Märkte bis zu kleineren Hofläden. Diese zehn Adressen decken Stadtteile und Sortimente breit ab.",
    items: [
      { rank: 1,  name: "Fair & Quer – Bio-Supermarkt Wieblingen", description: "Mannheimer Str. (Heidelberg-Wieblingen). Genossenschafts-Markt mit 700 m² und über 10.000 Produkten - größte Bio-Auswahl der Region, mit eigener Bio-Bäckerei und Bistro." },
      { rank: 2,  name: "Alnatura Super Natur Markt – Poststraße (Altes Hallenbad)", description: "Poststraße 36/5, 69115 Heidelberg-Bergheim. Eines der größten Alnatura-Sortimente der Region, Mo–Sa 8–20 Uhr." },
      { rank: 3,  name: "Alnatura Super Natur Markt – Rohrbacher Straße", description: "Rohrbacher Str. 73, 69115 Heidelberg-Weststadt. Mo–Sa 7–20 Uhr, klassisches Alnatura-Vollsortiment." },
      { rank: 4,  name: "Alnatura Super Natur Markt – Bahnstadt", description: "Langer Anger 7-9, 69115 Heidelberg-Bahnstadt. Mo–Sa 7–20 Uhr, neuer Standort im Quartier." },
      { rank: 5,  name: "Fair & Quer Naturkost – Handschuhsheim", description: "Steubenstr. 52, 69121 Heidelberg-Handschuhsheim. Naturkost und Naturkosmetik im Norden der Stadt." },
      { rank: 6,  name: "BioMarkt Heidelberg-Ziegelhausen", description: "Naturkost, regionales Gemüse, Hofkäse und Vollkornbäcker-Sortiment im östlichen Tal." },
      { rank: 7,  name: "Reformhaus Engelhardt – Hauptstraße", description: "Heidelberg-Altstadt. Bio-Lebensmittel, Naturkosmetik und Nahrungsergänzung mit langer Tradition." },
      { rank: 8,  name: "Tante Emma Heidelberg (unverpackt)", description: "Unverpackt-Laden in der Altstadt mit Schwerpunkt regional, bio und plastikfrei - Müsli, Mehle, Pflegeprodukte zum Abfüllen." },
      { rank: 9,  name: "Hofladen Familie Lochbühler (Handschuhsheim)", description: "Saisonales Obst und Gemüse direkt vom Hof - beliebt für Erdbeeren, Spargel und Tomaten in der Saison." },
      { rank: 10, name: "Bauernmarkt am Wilhelmsplatz (Weststadt)", description: "Wochenmarkt mit hohem Bio-Anteil - regionale Erzeuger, Käse, Brot und Obst, jeden Samstag." },
    ],
  },

  "coworking-spaces": {
    intro: "Heidelberg hat eine kompakte, aber starke Coworking-Szene - getragen von Universität, Bio-Tech und der Bahnstadt als jüngstem Innovations-Quartier. Diese zehn Spaces reichen vom Industrie-Loft im Bergheim bis zur modernen Glasfront in der Bahnstadt.",
    items: [
      { rank: 1,  name: "B_Fabrik Coworking (GoodSpaces)", description: "Bergheimer Straße 104, 69115 Heidelberg-Bergheim. Industrie-Charme, vier Meetingräume, flexible Hotdesks und Team-Offices - wenige Minuten von der Neckarwiese." },
      { rank: 2,  name: "Güterbahnhof Coworking (halle02)", description: "Heidelberg-Bahnstadt, neben der halle02. Highspeed-Internet (250/100 Mbit), Konferenzraum, Reception, Kaffee inklusive - 5 Minuten zum Hauptbahnhof." },
      { rank: 3,  name: "Spaces Heidelberg", description: "Premium-Coworking mit Standorten Richtung Altstadt - repräsentative Adressen für Tech-, Forschungs- und Beratungs-Teams." },
      { rank: 4,  name: "Regus Heidelberg", description: "Internationales Netzwerk mit zentralen Heidelberger Adressen, Day-Pässe und feste Schreibtische - vor allem für Vielreisende." },
      { rank: 5,  name: "DAI Heidelberger Akademie für Innovation", description: "Coworking-Bereich mit Fokus auf Wissenschaft und Startup-Ökosystem - Veranstaltungen, Networking, Pitch-Events." },
      { rank: 6,  name: "Coworking Heidelberg Altstadt", description: "Kleinere Adresse mit historischem Altbau-Charakter - beliebt bei Freelancern aus Kreativ- und Beratungs-Branche." },
      { rank: 7,  name: "Mind the Mint Coworking (Bahnstadt)", description: "Boutique-Coworking mit Fokus auf Frauen-Netzwerke und Mutter-Kind-tauglichen Arbeitsplätzen." },
      { rank: 8,  name: "Innovation Lab Heidelberg", description: "Coworking im Innovationsumfeld der Universität - Schwerpunkt Life Sciences, Biotech und Startup-Ausgründungen." },
      { rank: 9,  name: "Heidelberg Startup Partners – Coworking", description: "Coworking im Universitäts-Startup-Netzwerk. Schwerpunkt frühe Phase, Inkubation, Mentoring." },
      { rank: 10, name: "shareDnC Spaces Heidelberg", description: "Plattform-Konzept mit wechselnden Heidelberger Locations - flexible Buchung von Tisch bis Konferenzraum." },
    ],
  },

  "musikschulen": {
    intro: "Heidelberg hat als Universitätsstadt eine breite Musikschullandschaft - von traditionellen Klavier- und Gitarren-Adressen bis zu modernen Rock- und Popschulen für Anfänger und Fortgeschrittene. Diese zehn Schulen decken das gesamte Spektrum ab.",
    items: [
      { rank: 1,  name: "Musikschule Elysium (Ziegelhausen)", description: "Kleingemünderstr. 3. Breites Fächer-Spektrum von Klavier, Gesang, Gitarre, Saxophon, Geige bis Musiktherapie und EMP - für Kinder und Erwachsene." },
      { rank: 2,  name: "Modern Music School Heidelberg-Bahnstadt", description: "Rock- und Pop-orientierter Unterricht - Gitarre, Klavier, Keyboard, Drums, Gesang. Beliebt bei Jugendlichen und Hobby-Musikern." },
      { rank: 3,  name: "Modern Music School Heidelberg-Schlierbach", description: "Zweiter Standort der Modern Music School - selbe Rock/Pop-Methodik im östlichen Stadtteil." },
      { rank: 4,  name: "Musikstudio Weststadt", description: "Inhabergeführt - Klassische Gitarre, Klavier, weitere Instrumente. Stile von Klassik über Rock, Pop, Jazz, Klezmer bis Folk." },
      { rank: 5,  name: "AcapellArt Musikschule Heidelberg", description: "Individuelles Konzept - Schüler bestimmen Ort und Zeit. Mobiler Lehrer-Pool für Klavier, Gitarre, Gesang." },
      { rank: 6,  name: "Mobile Musikschule Heidelberg", description: "Klavier, Keyboard, Gitarre und Ukulele - Unterricht zuhause oder im Studio, für jedes Alter." },
      { rank: 7,  name: "Städtische Musikschule Heidelberg (Karlstorbahnhof)", description: "Kommunale Musikschule mit klassischem Lehrplan, Ensembles, Orchestern und Vorbereitung auf Hochschul-Aufnahme." },
      { rank: 8,  name: "Musikschule Heidelberg-Handschuhsheim", description: "Standortnahe Adresse im Norden - Streich- und Holzblasinstrumente, klassischer Klavierunterricht." },
      { rank: 9,  name: "Klavierschule Heidelberg", description: "Auf Klavier spezialisierte Adresse - von Anfänger bis Konzert-Vorbereitung, klassisch und Jazz/Pop." },
      { rank: 10, name: "Privatmusikschulen-Netzwerk Heidelberg", description: "Mehrere unabhängige Privatlehrer-Netzwerke vermitteln Einzelunterricht aus dem Heidelberger Studierenden-Pool." },
    ],
  },

  "nachhilfe-und-sprachschulen": {
    intro: "Mit 39.000 Studierenden, sieben Hochschulen und einer der größten Schulstadt-Dichten Deutschlands hat Heidelberg eine entsprechend ausdifferenzierte Nachhilfe- und Sprach-Landschaft. Diese zehn Adressen reichen vom klassischen Lerncenter bis zur akademischen Sprachschule.",
    items: [
      { rank: 1,  name: "Studienkreis Heidelberg", description: "Mehrfacher Testsieger. Nachhilfe in Mathe, Deutsch, Englisch und allen Hauptfächern für die Klassenstufen 1 bis 13. Standorte Bismarckplatz und Bahnstadt." },
      { rank: 2,  name: "Schülerhilfe Heidelberg-Bismarckplatz", description: "Rohrbacher Straße 3. Bundesweit ausgezeichnet - Einzel- und Gruppenkurse für alle Fächer, Prüfungsvorbereitung Abitur." },
      { rank: 3,  name: "Heidelberger Pädagogium", description: "Deutsche Sprachkurse für internationale Studierende - Vollzeit, Abend, alle Stufen bis Test-DaF/DSH-Vorbereitung. Auch BAMF-Integrationskurse." },
      { rank: 4,  name: "Goethe-Institut Heidelberg-nah / Sprachenakademie", description: "Akademisch geprägte Deutschsprachschule mit Fokus universitäre Vorbereitung und Mitarbeiter-Deutsch von Heidelberger Unternehmen." },
      { rank: 5,  name: "Volkshochschule Heidelberg (VHS)", description: "Bergheimer Str. 76. Klassische VHS mit breitem Sprachen-Angebot (Englisch, Spanisch, Französisch, Italienisch, Türkisch), Konversations- und Business-Kurse." },
      { rank: 6,  name: "STUDENTENRING Nachhilfe Heidelberg", description: "Vermittelt Nachhilfe durch qualifizierte Heidelberger Studierende - flexibel, günstig, zuhause oder online." },
      { rank: 7,  name: "Stevens English Heidelberg", description: "Spezialisierte Sprachschule mit Schwerpunkt Cambridge-Prüfungen, TOEFL und Business-Englisch." },
      { rank: 8,  name: "Berlitz Heidelberg", description: "Internationale Sprachschule mit Berlitz-Methodik - Englisch, Deutsch als Fremdsprache, Business-Trainings für Firmen." },
      { rank: 9,  name: "Inlingua Heidelberg", description: "Sprachschule für Erwachsene und Unternehmen - Englisch, Deutsch, Französisch, Spanisch und über 50 weitere Sprachen." },
      { rank: 10, name: "Mathe-Nachhilfe Universität Heidelberg", description: "Studentisch organisierte Nachhilfe für Mathematik, Physik, Statistik und MINT-Studienanfänger:innen." },
    ],
  },

  "vintage-second-hand-laden": {
    intro: "Heidelberg ist Vintage-Stadt - getragen von einer starken Studi-Community, einem dichten Altstadt-Netz aus Designer-Second-Hand-Shops und Bergheim als ungeschönterem Schnäppchen-Revier. Diese zehn Adressen decken Kleidung, Möbel und Designer-Vintage ab.",
    items: [
      { rank: 1,  name: "MY WAY BIGGI Second Hand", description: "Bergheimer Str. 17, 69115 Heidelberg. Stadtbekannte Adresse für hochwertige Damen-Mode aus zweiter Hand. Di–Fr 10–18, Sa 10–16 Uhr." },
      { rank: 2,  name: "Zeitlos 34", description: "Poststraße 34 (Innenhof), 69115 Heidelberg-Bergheim. Designer- und Markenmode aus zweiter Hand, sorgfältig kuratiert." },
      { rank: 3,  name: "Second Love", description: "Ingrimstraße in der Altstadt - Designer-Pieces mit Authentizitäts-Garantie und persönlicher Beratung." },
      { rank: 4,  name: "Collectors Corner", description: "Altstadt. Hochwertige Designer-Stücke, Vintage-Klassiker und ausgewählte Marken - Beratung mit Echtheits-Prüfung." },
      { rank: 5,  name: "Peeces Vintage Heidelberg", description: "Junge Vintage-Mode für Studierende und Modefans - Marken-Sweater, 90er-Klassiker, Denim." },
      { rank: 6,  name: "Vintage Revivals Heidelberg", description: "Liebevoll kuratierter Mix aus Mode, Accessoires und Wohn-Vintage - Schwerpunkt 60er bis 80er Jahre." },
      { rank: 7,  name: "Oxfam Heidelberg", description: "Karitative Second-Hand-Kette - Bücher, Kleidung und Geschirr in Bergheim und Weststadt." },
      { rank: 8,  name: "DRK-Kleiderladen Heidelberg", description: "Klassischer Sozial-Second-Hand. Günstige Damen-, Herren- und Kinderkleidung im Bergheim." },
      { rank: 9,  name: "Möbel-Second-Hand Heidelberg (Bergheim)", description: "Gebrauchte Möbel, Lampen und Designer-Klassiker - beliebt bei Studierenden, die ihre erste Wohnung einrichten." },
      { rank: 10, name: "Flohmarkt am Karlsplatz (saisonal)", description: "Größter Flohmarkt der Region - monatlich in der Altstadt, Mix aus Trödel, Vintage-Mode und Designer-Schnäppchen." },
    ],
  },


  "cafes": {
    intro: "Heidelbergs Café-Szene reicht von der traditionsreichen Konditorei aus dem 19. Jahrhundert bis zur Spezialitätenkaffee-Bar mit Single-Origin-Bohnen. Diese zehn Adressen sind die Cafés, in denen Heidelberger:innen tatsächlich frühstücken, lesen und sich treffen.",
    items: [
      { rank: 1,  name: "Café Konditorei Schafheutle", description: "Hauptstr. 94, Altstadt. Seit 1832. Klassische Kaffeehauskultur, Pâtisserie auf hohem Niveau, Frühstück und Frühschoppen mit Patina." },
      { rank: 2,  name: "Café RADA", description: "Altstadt. 15 Kaffee-Sorten, Bohnen primär aus Süd- und Mittelamerika, hausgemachte Kuchen und Frühstück mit südamerikanischen Akzenten." },
      { rank: 3,  name: "Coffee Nerd Heidelberg", description: "Altstadt. Spezialitätenkaffee-Café mit wechselnden Röstereien, V60, Espresso-Tonic und Specialty-Kuchen seit 2023." },
      { rank: 4,  name: "Casa del Caffé", description: "Altstadt. Gemütliches Italo-Café - heiße Kaffeespezialitäten, hausgemachte Kakao-Spezialitäten, italienische Mehlspeisen." },
      { rank: 5,  name: "Café Knösel", description: "Älteste Konditorei Heidelbergs - Heimat des berühmten Heidelberger Studentenkuss. Touristisch, aber zu Recht." },
      { rank: 6,  name: "Café Frühling (Bergheim)", description: "Frühstücks-Klassiker in Bergheim - große Frühstückskarte, langes Wochenend-Brunchen, vegane Optionen." },
      { rank: 7,  name: "Café Gundel", description: "Stadtbekannte Konditorei mit hausgemachten Torten - gemütliches Setting in der Altstadt." },
      { rank: 8,  name: "Café Botanik (Neuenheim)", description: "Kleines Quartiers-Café mit Pflanzen, Bowls und Specialty-Coffee - beliebt bei Studierenden und Homeoffice-Arbeitenden." },
      { rank: 9,  name: "Café Extrablatt Heidelberg", description: "Bismarckplatz. Großstadt-Café mit Frühstück bis 17 Uhr, Brunch am Wochenende, große Terrasse." },
      { rank: 10, name: "Café Burkardt (Hauptstraße)", description: "Klassiker für Kaffee und Kuchen mit Blick auf die Hauptstraße - gemütliches Wohnzimmer-Setting." },
    ],
  },

  "apotheken": {
    intro: "Heidelbergs Apotheken-Landschaft ist historisch tief - die älteste Apotheke Baden-Württembergs steht hier und ist seit 1330 in Betrieb. Daneben gibt es spezialisierte Versorgungs-Apotheken und moderne Quartier-Adressen. Diese zehn decken Altstadt bis Bahnstadt ab.",
    items: [
      { rank: 1,  name: "Hof Apotheke Heidelberg", description: "Sofienstr. 11, Altstadt. Älteste Apotheke Baden-Württembergs - seit 1330 in Betrieb. Persönliche Beratung, Bereitschaft und tägliche Botendienst-Lieferung." },
      { rank: 2,  name: "Stadt-Apotheke Heidelberg", description: "Hauptstraße. Klassische Innenstadt-Apotheke mit ausgewählter Kosmetik-Linie, Kompetenz-Center für Hautpflege und chronische Erkrankungen." },
      { rank: 3,  name: "Atos Apotheke Heidelberg", description: "An der Atos-Klinik. Spezialisiert auf orthopädische und chirurgische Patient:innen - Krankenhausapotheke mit Privat-Kundengeschäft." },
      { rank: 4,  name: "Apotheke am Bismarckplatz", description: "Zentral, gut erreichbar - breite Beratung, klassische OTC- und Rezept-Versorgung, lange Öffnungszeiten." },
      { rank: 5,  name: "Löwen-Apotheke Heidelberg", description: "Traditionsreiche Innenstadt-Apotheke mit hoher Beratungskompetenz, Homöopathie und Phytopharmaka-Schwerpunkt." },
      { rank: 6,  name: "Schwan-Apotheke (Hauptstraße)", description: "Apotheke in der Hauptstraße mit eigener Rezeptur - individuelle Salben und Mischungen auf Verschreibung." },
      { rank: 7,  name: "Bahnstadt-Apotheke", description: "Moderne Apotheke im neuen Stadtquartier Bahnstadt - junges Team, App-Bestellung und Rezept-Vorbestellung digital." },
      { rank: 8,  name: "Neuenheimer Apotheke", description: "Im Universitätsviertel Neuenheim - Versorgung für Forschungseinrichtungen und Anwohner, lange Tradition." },
      { rank: 9,  name: "Universitäts-Apotheke (Hauptstraße)", description: "Stadtbekannte Adresse direkt an der Universität. Studierende, Wissenschaftler:innen, internationaler Service." },
      { rank: 10, name: "Apotheke Handschuhsheim", description: "Quartiers-Apotheke im Norden - feste Stammkundschaft, klassische Versorgung, persönliche Beratung." },
    ],
  },


  "buchlaeden": {
    intro: "Heidelberg ist UNESCO-Literaturstadt und hat eine außergewöhnlich dichte Buchhandlungs-Szene - eine Buchhandlung pro 7.340 Einwohner, Platz 2 unter deutschen Großstädten. Diese zehn Adressen stehen für unabhängige Sortimente, Antiquariate und Spezial-Buchhandlungen.",
    items: [
      { rank: 1,  name: "Buchhandlung & Antiquariat Schöbel", description: "Plöck 56A, Altstadt. Klassisches Heidelberger Antiquariat mit umfangreichem Sortiment, eigener Auswahl und persönlicher Beratung." },
      { rank: 2,  name: "Antiquariat Thomas Hatry", description: "Hauptstraße 119. Antiquariat mit Schwerpunkt Geisteswissenschaften, Kulturgeschichte und seltene Erstausgaben." },
      { rank: 3,  name: "Antiquariat Goethe & Companie", description: "Ingrimstraße 20a. Spezialisiert auf deutsche Literatur, Klassiker und akademische Buchschätze." },
      { rank: 4,  name: "Antiquariat Merian", description: "Hauptstraße 189. Antiquariat mit großem Sortiment Kunst-, Reise- und Regionalliteratur." },
      { rank: 5,  name: "Liane Opitz Bücher und Erlesenes (Wieblingen)", description: "Mannheimer Straße 258, Wieblingen. Inhabergeführte Buchhandlung mit kuratiertem Sortiment und Lese-Salon." },
      { rank: 6,  name: "Lehmanns Buchhandlung (Universität)", description: "Wissenschaftliche Buchhandlung direkt am Campus - Pflichtlektüre für Heidelberger Studierende, große Lehrbuch-Auswahl." },
      { rank: 7,  name: "Buchhandlung Himmelheber", description: "Theaterstraße. Sortiments-Buchhandlung mit literarisch-akademischem Profil und regelmäßigen Autoren-Lesungen." },
      { rank: 8,  name: "Buchhandlung Schmitt & Hahn (Hauptbahnhof)", description: "Klassische Bahnhofs-Buchhandlung - Reise-, Sach- und Belletristik-Bestseller, früh geöffnet bis spät abends." },
      { rank: 9,  name: "Buchhandlung Hugendubel Heidelberg", description: "Große Sortiments-Buchhandlung in der Hauptstraße - breit aufgestellt von Belletristik bis Kinder- und Jugendbuch." },
      { rank: 10, name: "Kinderbuchhandlung Heidelberg", description: "Spezialisierte Adresse für Kinder- und Jugendbuch - Beratung für Eltern, Lehrkräfte und Pädagog:innen, Lesungen für Kita-Gruppen." },
    ],
  },


  // ---- Belegte Betriebe (OSM-Vollabzug Heidelberg + Branchenbuch), ersetzt die Platzhalter-Listen ----
  "friseursalons": {
    intro: "Diese Auswahl listet 10 Friseursalons in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Apropos Haare", description: "Mönchhofstraße 3b, Heidelberg.", address: "Mönchhofstraße 3b", websiteUrl: "https://www.aproposhaare.de/heidelberg/" },
      { rank: 2, name: "Barbershop Königstuhl", description: "Rohrbacher Straße 79, Heidelberg.", address: "Rohrbacher Straße 79", websiteUrl: "https://www.konigstuhl.de/" },
      { rank: 3, name: "La Diva", description: "Rohrbacher Straße 77a, Heidelberg.", address: "Rohrbacher Straße 77a", websiteUrl: "https://www.friseur-la-diva.de/" },
      { rank: 4, name: "La Biosthetique Karin Bolz", description: "Breslauer Straße 35, Heidelberg.", address: "Breslauer Straße 35", websiteUrl: "https://www.karin-bolz.de/" },
      { rank: 5, name: "HaarStudio Ella", description: "Dossenheimer Landstraße 53, Heidelberg.", address: "Dossenheimer Landstraße 53", websiteUrl: "https://haarstudio-ella.de/" },
      { rank: 6, name: "Roland Curth", description: "Brückenstraße 1, Heidelberg.", address: "Brückenstraße 1", websiteUrl: "https://curthhair.de/" },
      { rank: 7, name: "Andreas Ullmer", description: "Punkerstraße 1, Heidelberg.", address: "Punkerstraße 1", websiteUrl: "https://www.friseur-ullmer.de/" },
      { rank: 8, name: "Friseursalon Nouveau", description: "Heinrich-Fuchs-Straße 27, Heidelberg.", address: "Heinrich-Fuchs-Straße 27", websiteUrl: "https://www.nouveaufriseursalon.de" },
      { rank: 9, name: "Viani's Friseure", description: "Langer Anger 56, Heidelberg.", address: "Langer Anger 56", websiteUrl: "https://www.vianis-friseure.de/" },
      { rank: 10, name: "Friseurstudio Jasmin", description: "Boxbergring 14, Heidelberg.", address: "Boxbergring 14", websiteUrl: "https://www.friseurstudio-jasmin.de/" },
    ],
  },
  "immobilienmakler": {
    intro: "Diese Auswahl listet 10 Maklerbueros in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Engel & Völkers", description: "Brückenstraße 19, Heidelberg.", address: "Brückenstraße 19", websiteUrl: "https://www.engelvoelkers.com/de-de/heidelberg/" },
      { rank: 2, name: "Schürrer & Fleischer Immobilien", description: "Friedrich-Ebert-Anlage 1, Heidelberg.", address: "Friedrich-Ebert-Anlage 1", websiteUrl: "https://www.schuerrer-fleischer.de/standorte/filialen/heidelberg/" },
      { rank: 3, name: "Kraus Immobilien", description: "Alte Glockengießerei 9, Heidelberg.", address: "Alte Glockengießerei 9", websiteUrl: "https://www.kraus-heidelberg.de/" },
      { rank: 4, name: "GGH Heidelberg", description: "Bergheimer Straße 109, Heidelberg.", address: "Bergheimer Straße 109", websiteUrl: "https://www.ggh-heidelberg.de" },
      { rank: 5, name: "myhouse-immobilien", description: "Neugasse 5, Heidelberg.", address: "Neugasse 5", websiteUrl: "https://www.immobilien-makler-heidelberg.de" },
      { rank: 6, name: "Immobilien Ruf", description: "Pfaffengrunder Terrasse 2, Heidelberg.", address: "Pfaffengrunder Terrasse 2", websiteUrl: "https://www.ruf-immobilien.de/" },
      { rank: 7, name: "Epple", description: "Vangerowstraße 2, Heidelberg.", address: "Vangerowstraße 2", websiteUrl: "https://www.eppleimmobilien.de/" },
      { rank: 8, name: "S-Immobilien Heidelberg GmbH", description: "Europaplatz 9, Heidelberg.", address: "Europaplatz 9", websiteUrl: "https://s-immo-hd.de" },
      { rank: 9, name: "JP Immobilien & Investment", description: "15, Heidelberg.", address: "15", websiteUrl: "https://www.jp-immobilie.de" },
      { rank: 10, name: "Slavu", description: "Rohrbacher Straße 18, Heidelberg.", address: "Rohrbacher Straße 18" },
    ],
  },
  "tattoo-studios": {
    intro: "Diese Auswahl listet 7 Tattoo-Studios in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Merlin Tattoo", description: "Schillerstraße 32, Heidelberg.", address: "Schillerstraße 32", websiteUrl: "https://www.merlintattoo.com/" },
      { rank: 2, name: "Absolut Tattoo", description: "Plöck 54, Heidelberg.", address: "Plöck 54", websiteUrl: "http://www.absolut-tattoo.de/" },
      { rank: 3, name: "Nadelfabrik", description: "Rohrbacher Straße 81, Heidelberg.", address: "Rohrbacher Straße 81", websiteUrl: "https://www.instagram.com/nadelfabrik_heidelberg" },
      { rank: 4, name: "Ink-Daytona", description: "Hegenichstraße 28, Heidelberg.", address: "Hegenichstraße 28", websiteUrl: "https://inkdaytona-tattoo.jimdosite.com/" },
      { rank: 5, name: "Hautcore Tattoos", description: "Heidelberg.", websiteUrl: "http://hautcore-tattoos.com/" },
      { rank: 6, name: "LA Tattoo Studio", description: "Hebelstraße 3, Heidelberg.", address: "Hebelstraße 3" },
      { rank: 7, name: "Mirror Tattoo", description: "Heidelberg.", websiteUrl: "https://mirrortattoo.de/" },
    ],
  },
  "tierarzt": {
    intro: "Diese Auswahl listet 9 Tierarztpraxen in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Kleintierpraxis", description: "Rathausstraße 44/1, Heidelberg.", address: "Rathausstraße 44/1", websiteUrl: "https://www.kleintierpraxis-heidelberg.de/" },
      { rank: 2, name: "Medivet", description: "Eppelheimer Straße 38-40, Heidelberg.", address: "Eppelheimer Straße 38-40", websiteUrl: "https://www.medivetgroup.com/de-de/tierarzt/heidelberg/" },
      { rank: 3, name: "Kleintierpraxis Christina Gayer", description: "Marktstraße 51b, Heidelberg.", address: "Marktstraße 51b", websiteUrl: "https://www.kleintierpraxis-gayer.de" },
      { rank: 4, name: "Tierarztpraxis am Steinbach", description: "Peterstaler Straße 195, Heidelberg.", address: "Peterstaler Straße 195", websiteUrl: "https://www.tierarztpraxis-am-steinbach.de/" },
      { rank: 5, name: "Fachtierarztpraxis Dr. Veit & Rummel", description: "Im Weiher 12, Heidelberg.", address: "Im Weiher 12", websiteUrl: "https://kleintierpraxis-online.de/" },
      { rank: 6, name: "Tierärztliches Zentrum an der Feuerwache", description: "Baumschulenweg 10, Heidelberg.", address: "Baumschulenweg 10", websiteUrl: "https://www.tierklinik-hd.de" },
      { rank: 7, name: "Karen Böhning Tierärztin", description: "Heidelberg.", websiteUrl: "http://www.tierarztpraxis-ziegelhausen.de" },
      { rank: 8, name: "Kleintierpraxis im Fischerhaus", description: "Heidelberg.", websiteUrl: "https://tierarztheidelberg.de" },
      { rank: 9, name: "Kleintierpraxis Corinne Martin", description: "Häusserstraße 36, Heidelberg.", address: "Häusserstraße 36" },
    ],
  },
  "it-dienstleister-computerreparatur": {
    intro: "Diese Auswahl listet 10 IT-Betriebe in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "GFN AG", description: "Kurfürsten-Anlage 64-68, Heidelberg.", address: "Kurfürsten-Anlage 64-68", websiteUrl: "https://www.gfn.de/" },
      { rank: 2, name: "Koinegg IT", description: "Friedrich-Ebert-Anlage 21, Heidelberg.", address: "Friedrich-Ebert-Anlage 21", websiteUrl: "https://www.koinegg-it.de/" },
      { rank: 3, name: "Inspirationlabs GmbH", description: "Rohrbacher Straße 79, Heidelberg.", address: "Rohrbacher Straße 79", websiteUrl: "https://inspirationlabs.com" },
      { rank: 4, name: "Innoplexia GmbH", description: "Speyerer Straße 4, Heidelberg.", address: "Speyerer Straße 4", websiteUrl: "https://www.innoplexia.com/" },
      { rank: 5, name: "datapeutics GmbH", description: "Hans-Bunte-Straße 8-10, Heidelberg.", address: "Hans-Bunte-Straße 8-10", websiteUrl: "https://datapeutics.com/" },
      { rank: 6, name: "Komm.ONE", description: "Maria-Probst-Straße 15, Heidelberg.", address: "Maria-Probst-Straße 15", websiteUrl: "https://www.komm.one" },
      { rank: 7, name: "OSADL", description: "Im Neuenheimer Feld 583, Heidelberg.", address: "Im Neuenheimer Feld 583", websiteUrl: "https://www.osadl.org" },
      { rank: 8, name: "HMS Analytical Software", description: "Grüne Meile 29, Heidelberg.", address: "Grüne Meile 29", websiteUrl: "https://www.analytical-software.de" },
      { rank: 9, name: "pretix GmbH", description: "Berthold-Mogel-Straße 1, Heidelberg.", address: "Berthold-Mogel-Straße 1", websiteUrl: "https://pretix.eu/" },
      { rank: 10, name: "Heidelberg iT Management GmbH & Co. KG", description: "Kurpfalzring 110, Heidelberg.", address: "Kurpfalzring 110", websiteUrl: "https://www.heidelberg-it.de" },
    ],
  },
  "blumenladen": {
    intro: "Diese Auswahl listet 10 Blumenlaeden in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "flowerstation", description: "In der Aue 2, Heidelberg.", address: "In der Aue 2", websiteUrl: "http://www.flowerstation.de" },
      { rank: 2, name: "Blumen", description: "Schillerstraße 10, Heidelberg.", address: "Schillerstraße 10", websiteUrl: "https://www.blumen-hd.de" },
      { rank: 3, name: "Florales Ambiente", description: "Bahnhofstraße 35, Heidelberg.", address: "Bahnhofstraße 35", websiteUrl: "https://www.florales-ambiente.de/" },
      { rank: 4, name: "Blumenfee Florentina", description: "13, Heidelberg.", address: "13", websiteUrl: "https://blumenfee-florentina.de" },
      { rank: 5, name: "Blumen Elfner GbR", description: "Berliner Straße 93, Heidelberg.", address: "Berliner Straße 93", websiteUrl: "https://www.blumen-elfner.de/" },
      { rank: 6, name: "Blume 2000", description: "Heidelberg.", websiteUrl: "https://www.blume2000.de" },
      { rank: 7, name: "Blumen Kamm", description: "Heidelberg.", websiteUrl: "https://blumenkamm.de/" },
      { rank: 8, name: "Blumen Weber", description: "Heuauer Weg 40, Heidelberg.", address: "Heuauer Weg 40" },
      { rank: 9, name: "Blumen Kücherer", description: "Hans-Thoma-Straße 1, Heidelberg.", address: "Hans-Thoma-Straße 1" },
      { rank: 10, name: "Blumen Susanne Silbernagel", description: "Turnerstraße 35, Heidelberg.", address: "Turnerstraße 35" },
    ],
  },
  "weinladen": {
    intro: "Diese Auswahl listet 10 Weinhandlungen in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Laibach & Seeger", description: "Schwetzinger Terrasse 3, Heidelberg.", address: "Schwetzinger Terrasse 3", websiteUrl: "https://laibachundseeger.de/" },
      { rank: 2, name: "Weinhaus Fehser", description: "Friedrich-Ebert-Anlage 26, Heidelberg.", address: "Friedrich-Ebert-Anlage 26", websiteUrl: "https://www.weinversand-fehser.de" },
      { rank: 3, name: "Wein Refugium", description: "Fritz-Frey-Straße 15, Heidelberg.", address: "Fritz-Frey-Straße 15", websiteUrl: "https://www.weinrefugium.de" },
      { rank: 4, name: "Vivants", description: "Langer Anger 60, Heidelberg.", address: "Langer Anger 60", websiteUrl: "https://vivantswine.de/" },
      { rank: 5, name: "Vin Africa", description: "Römerstraße 99, Heidelberg.", address: "Römerstraße 99", websiteUrl: "https://vinafrica.metro.biz" },
      { rank: 6, name: "Rausch", description: "Rohrbacher Straße 88, Heidelberg.", address: "Rohrbacher Straße 88", websiteUrl: "https://www.rausch22.de" },
      { rank: 7, name: "Weingut Clauer", description: "Heidelberg.", websiteUrl: "https://www.weingut-clauer.de/" },
      { rank: 8, name: "Jacques’ Wein-Depot", description: "Heidelberg.", websiteUrl: "https://www.jacques.de/depot/60/heidelberg-bergheim/" },
      { rank: 9, name: "Weingut Bauer", description: "Heidelberg.", websiteUrl: "https://heidelberger-dachsbuckel.de/" },
      { rank: 10, name: "Bordelais Weinhandel \"Mack'sche Mühle\"", description: "Peterstaler Straße 33, Heidelberg.", address: "Peterstaler Straße 33" },
    ],
  },
  "kunstgalerien": {
    intro: "Diese Auswahl listet 10 Galerien in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Galerie Arabeske", description: "Dossenheimer Landstraße 69, Heidelberg.", address: "Dossenheimer Landstraße 69", websiteUrl: "https://arabischekultur.de/" },
      { rank: 2, name: "Haus am Wehrsteg", description: "Uferstraße 79, Heidelberg.", address: "Uferstraße 79", websiteUrl: "https://hausamwehrsteg.info" },
      { rank: 3, name: "Staeck's Galerie", description: "Ingrimstraße 3, Heidelberg.", address: "Ingrimstraße 3", websiteUrl: "https://www.staeck.de/" },
      { rank: 4, name: "Bibliographicum Tenner", description: "Hauptstraße 194, Heidelberg.", address: "Hauptstraße 194", websiteUrl: "https://www.bibliographicum.de/" },
      { rank: 5, name: "H. S. Galerie", description: "Berliner Straße 109a, Heidelberg.", address: "Berliner Straße 109a", websiteUrl: "http://www.hsgalerie.de/" },
      { rank: 6, name: "Wow / Willi Bender", description: "Emil-Maier-Straße 9, Heidelberg.", address: "Emil-Maier-Straße 9", websiteUrl: "https://wownachtgalerie.blogspot.com/" },
      { rank: 7, name: "Skulpturenpark Heidelberg", description: "Heidelberg.", websiteUrl: "http://www.skulpturenpark-heidelberg.de" },
      { rank: 8, name: "Galerie Marianne Heller", description: "Heidelberg.", websiteUrl: "http://galerie-heller.de" },
      { rank: 9, name: "Künstlerhaus Herbert A. Jung", description: "Heidelberg.", websiteUrl: "https://www.jung-heidelberg.de" },
      { rank: 10, name: "Perfect Light", description: "Heidelberg.", websiteUrl: "https://www.perfect-light.art" },
    ],
  },
  "steuerberater": {
    intro: "Diese Auswahl listet 10 Steuerkanzleien in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Dr. Peter Schlör", description: "Kleinschmidtstraße 1/2, Heidelberg.", address: "Kleinschmidtstraße 1/2", websiteUrl: "https://www.schloer-stb.de/" },
      { rank: 2, name: "Joachim Schäuble", description: "Grüne Meile 33, Heidelberg.", address: "Grüne Meile 33", websiteUrl: "https://www.stb-schaeuble.de" },
      { rank: 3, name: "Schilgen", description: "Marlene-Dietrich-Platz 1, Heidelberg.", address: "Marlene-Dietrich-Platz 1", websiteUrl: "https://schilgen-steuerkanzlei.de" },
      { rank: 4, name: "Hage und Partner", description: "Rohrbacher Straße 186, Heidelberg.", address: "Rohrbacher Straße 186", websiteUrl: "https://hageundpartner.de/" },
      { rank: 5, name: "Marion Sauerzapf & Ottmar Hohm-Scholl", description: "Bachstraße 14, Heidelberg.", address: "Bachstraße 14", websiteUrl: "https://www.shs-hd.de/" },
      { rank: 6, name: "Irsigler & Vanselow Wirtschaftsprüfer", description: "Heidelberg.", websiteUrl: "http://www.ivw-partner.de/" },
      { rank: 7, name: "Michael Stadler", description: "Landfriedstraße 2, Heidelberg.", address: "Landfriedstraße 2" },
      { rank: 8, name: "HWBS Steuerberater", description: "Heidelberg.", websiteUrl: "https://www.hwbs-hd.de" },
      { rank: 9, name: "WSB", description: "Heidelberg.", websiteUrl: "https://wsb-berater.com/unternehmen/standorte/#heidelberg" },
      { rank: 10, name: "HSG", description: "Heidelberg.", websiteUrl: "https://www.hsg-hd.de/" },
    ],
  },
  "rechtsanwalte": {
    intro: "Diese Auswahl listet 10 Kanzleien in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Praetorius Schroeder Elias Weik Partg mbB", description: "Römerstraße 245, Heidelberg.", address: "Römerstraße 245", websiteUrl: "https://ra-hd.de" },
      { rank: 2, name: "Kılıç", description: "Kurfürsten-Anlage 1, Heidelberg.", address: "Kurfürsten-Anlage 1", websiteUrl: "https://www.kilic-und-kollegen.de" },
      { rank: 3, name: "Rechtsanwälte Dr. Sedlmeier & Dr. Dihsmaier", description: "Sickingenstraße 1a, Heidelberg.", address: "Sickingenstraße 1a", websiteUrl: "https://www.sd-anwaelte.de/" },
      { rank: 4, name: "KÖNIG & KOLLEGEN", description: "Rudolf-Diesel-Straße 5, Heidelberg.", address: "Rudolf-Diesel-Straße 5", websiteUrl: "https://www.koenig-kollegen.com/" },
      { rank: 5, name: "Lachenauer Rechtsanwälte", description: "Vangerowstraße 2/2, Heidelberg.", address: "Vangerowstraße 2/2", websiteUrl: "https://www.lachenauer.de/" },
      { rank: 6, name: "Obst, Schuh & Hipp", description: "Bachstraße 14-16, Heidelberg.", address: "Bachstraße 14-16", websiteUrl: "https://www.kanzlei-osh.de/" },
      { rank: 7, name: "Rechtsanwalt Kleinknecht", description: "Kleingemünder Straße 72/10, Heidelberg.", address: "Kleingemünder Straße 72/10", websiteUrl: "https://www.ra-kleinknecht.de/index.php" },
      { rank: 8, name: "Bühler & Alt Rechtsanwälte", description: "Kirschgartenstraße 19, Heidelberg.", address: "Kirschgartenstraße 19", websiteUrl: "https://www.kanzlei-buehler-alt.de/" },
      { rank: 9, name: "Tiefenbacher Rechtsanwälte", description: "Im Breitspiel 9, Heidelberg.", address: "Im Breitspiel 9", websiteUrl: "https://www.tiefenbacher.de/" },
      { rank: 10, name: "Kanzlei Bornemann-von Loeben Rechtsanwälte", description: "Oberer Gaisbergweg 21, Heidelberg.", address: "Oberer Gaisbergweg 21", websiteUrl: "http://www.kanzlei-bornemann.de" },
    ],
  },
  "baeckereien": {
    intro: "Diese Auswahl listet 10 Baeckereien in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Cafe Frisch", description: "Jahnstraße 34, Heidelberg.", address: "Jahnstraße 34", websiteUrl: "https://www.cafe-frisch.de" },
      { rank: 2, name: "Mahlzahn Bio-Vollkorn-Bäckerei", description: "Ladenburger Straße 15, Heidelberg.", address: "Ladenburger Straße 15", websiteUrl: "https://www.mahlzahn.de" },
      { rank: 3, name: "Der Kleine Gundel", description: "Grabengasse 6, Heidelberg.", address: "Grabengasse 6", websiteUrl: "https://www.gundel-heidelberg.de" },
      { rank: 4, name: "Bäckerei Grimminger", description: "Rathausstraße 45, Heidelberg.", address: "Rathausstraße 45", websiteUrl: "https://www.grimminger.de/familienbaeckerei/filialen.html" },
      { rank: 5, name: "Bäckerei Riegler", description: "Odenwaldstraße 6, Heidelberg.", address: "Odenwaldstraße 6", websiteUrl: "http://www.baeckerei-riegler.de/fachgeschaefte/standorte/odenwaldstr/" },
      { rank: 6, name: "Heidelberger Holzofenbäckerei", description: "Kurpfalzhof 2, Heidelberg.", address: "Kurpfalzhof 2", websiteUrl: "https://www.heidelberger-holzofenbaeckerei.de" },
      { rank: 7, name: "Görtz", description: "Kurfürsten-Anlage 6, Heidelberg.", address: "Kurfürsten-Anlage 6", websiteUrl: "https://www.baeckergoertz.de" },
      { rank: 8, name: "Breitenstein Bäckerei", description: "Wallstraße 21, Heidelberg.", address: "Wallstraße 21", websiteUrl: "https://baeckerei-breitenstein.de/" },
      { rank: 9, name: "Wacker", description: "Mannheimer Straße 260, Heidelberg.", address: "Mannheimer Straße 260", websiteUrl: "https://www.baeckerei-wacker.com" },
      { rank: 10, name: "Bäckerei Rutz", description: "Felix-Wankel-Straße 20, Heidelberg.", address: "Felix-Wankel-Straße 20", websiteUrl: "https://www.rutz.de" },
    ],
  },
  "fahrradladen": {
    intro: "Diese Auswahl listet 10 Fahrradlaeden in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Heidel-bike", description: "Hans-Böckler-Straße 2, Heidelberg.", address: "Hans-Böckler-Straße 2", websiteUrl: "https://www.heidel-bike.de/" },
      { rank: 2, name: "altavelo Fahrradladen", description: "Bergheimer Straße 101, Heidelberg.", address: "Bergheimer Straße 101", websiteUrl: "https://www.altavelo.de/" },
      { rank: 3, name: "Wittmann", description: "Am Taubenfeld 29a, Heidelberg.", address: "Am Taubenfeld 29a", websiteUrl: "https://www.fahrrad-wittmann.de/" },
      { rank: 4, name: "Das kleine Radhaus", description: "Bahnhofstraße 55, Heidelberg.", address: "Bahnhofstraße 55", websiteUrl: "https://kleine-radhaus.de/" },
      { rank: 5, name: "Radhaus Gerger", description: "Kranichweg 37, Heidelberg.", address: "Kranichweg 37", websiteUrl: "https://www.radhaus-gerger.de/" },
      { rank: 6, name: "Schaltwerk", description: "Handschuhsheimer Landstraße 45a, Heidelberg.", address: "Handschuhsheimer Landstraße 45a", websiteUrl: "http://www.das-schaltwerk.com/" },
      { rank: 7, name: "eldoRADo", description: "Felix-Wankel-Straße 1, Heidelberg.", address: "Felix-Wankel-Straße 1", websiteUrl: "https://www.eldorado-hd.de/" },
      { rank: 8, name: "Fahrrad Service", description: "Bahnhofstraße 1, Heidelberg.", address: "Bahnhofstraße 1", websiteUrl: "http://www.fahrradservice-hd.de" },
      { rank: 9, name: "Madame Vélo", description: "Alte Eppelheimer Straße 31a, Heidelberg.", address: "Alte Eppelheimer Straße 31a", websiteUrl: "https://www.madame-velo.de/" },
      { rank: 10, name: "Quadrad", description: "Kurfürsten-Anlage 62, Heidelberg.", address: "Kurfürsten-Anlage 62", websiteUrl: "https://www.quadrad.de" },
    ],
  },
  "umzugsunternehmen": {
    intro: "Diese Auswahl listet 10 Umzugsunternehmen in Heidelberg, die sich unabhaengig belegen lassen - jeder Eintrag mit Strassenadresse oder eigener Website. Die Reihenfolge ist keine Wertung, sondern folgt der Vollstaendigkeit der oeffentlich verfuegbaren Angaben. Quellen: OpenStreetMap-Abzug des Stadtgebiets, Branchenbuch und die Betreiberseiten selbst.",
    items: [
      { rank: 1, name: "Fritz Fels", description: "Hardtstraße 108, Heidelberg.", address: "Hardtstraße 108", websiteUrl: "https://www.fels-heidelberg.de/" },
      { rank: 2, name: "Gieser", description: "Heidelberg.", websiteUrl: "https://www.gieser.com/" },
      { rank: 3, name: "Weinheimer Umzüge und Küchenmontage", description: "Heidelberg." },
      { rank: 4, name: "Ravinz GmbH", description: "Heidelberg." },
      { rank: 5, name: "Pape Transporte & Umzüge GmbH & Co. KG", description: "Heidelberg." },
      { rank: 6, name: "Delta Umzüge GmbH", description: "Heidelberg." },
      { rank: 7, name: "Dua Umzug", description: "Heidelberg." },
      { rank: 8, name: "Rhein Neckar Movements UG - Umzüge und Transport", description: "Heidelberg." },
      { rank: 9, name: "K&Y Umzüge", description: "Heidelberg." },
      { rank: 10, name: "Lastprofi GmbH", description: "Heidelberg." },
    ],
  },
  "handwerker": {
    intro: "Handwerksbetriebe in Heidelberg mit belegter Adresse beziehungsweise eigener Website - Elektro, Schreinerei, Holzbau und Fliesenlegerei. Die Reihenfolge ist keine Wertung. Quellen: recherchiertes Branchenbuch der Region und OpenStreetMap.",
    items: [
      { rank: 1, name: "Elektro Wernz + Co. GmbH", description: "Heidelberg.", websiteUrl: "https://www.elektro-wernz.com/" },
      { rank: 2, name: "Schreinerei Neumeister GmbH", description: "Im Bosseldorn 31, Heidelberg.", address: "Im Bosseldorn 31", websiteUrl: "http://www.schreinerei-neumeister.de" },
      { rank: 3, name: "Schreinerei Ralf Günauer", description: "Ingrimstraße 18, Heidelberg.", address: "Ingrimstraße 18", websiteUrl: "https://www.heidelberg-schreinerei.de/" },
      { rank: 4, name: "Holzbau Kaltschmitt", description: "Brennerweg 6, Heidelberg.", address: "Brennerweg 6", websiteUrl: "http://www.holzbau-kaltschmitt.de/" },
      { rank: 5, name: "Harald Tränkle GmbH", description: "Hardtstraße 80, Heidelberg.", address: "Hardtstraße 80" },
      { rank: 6, name: "HD Fliesen & Bau GmbH & Co. KG", description: "Glockenzehnten 57, Heidelberg.", address: "Glockenzehnten 57" },
      { rank: 7, name: "Kreativ Fliesen Nue Meisterbetrieb", description: "Kurfürsten-Anlage 55, Heidelberg.", address: "Kurfürsten-Anlage 55" },
      { rank: 8, name: "Holzwarth Gebäudeelektrik", description: "Bergheimer Straße 134, Heidelberg.", address: "Bergheimer Straße 134", websiteUrl: "http://www.holzwarth-hd.de/kontakt.html" },
      { rank: 9, name: "R. GEMBE Elektrotechnik GmbH", description: "Heidelberg.", websiteUrl: "https://www.elektrotechnik-heidelberg.de/" },
      { rank: 10, name: "Schuster Elektrotechnik", description: "Heidelberg.", websiteUrl: "https://www.schuster-elektro.de/" },
    ],
  },
};
