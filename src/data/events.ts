/**
 * Heidelberger Events & Messen mit Zeitbezug.
 *
 * Jede Event-Page bekommt:
 *  - eigene URL: /events/<slug>/
 *  - Hero + Beschreibung + Reise-Tipps
 *  - Stay22 Live-Hotel-Block GENAU für die Event-Tage (checkin/checkout)
 *  - JSON-LD Event-Schema
 *
 * Beim jährlichen Re-Build via GitHub Action genügt es, in dieser
 * Datei die `dates` und `editionLabel` für die nächste Saison zu
 * aktualisieren — Pages, Hotels und Schema rollen automatisch nach.
 *
 * Stand: Mai 2026. Quellen: heidelberg-marketing.de, theater-heidelberg.de,
 * heidelberger-herbst.de, heidelberger-fruehling.de, Maimarkt-Veranstalter
 * (Mannheimer Maimarkt GmbH).
 */

import { city } from "./city";

export type EventDate = {
  /** ISO YYYY-MM-DD */
  start: string;
  /** ISO YYYY-MM-DD — bei eintägigen Events == start */
  end: string;
  /** Anzeige-Label für Mehr-Termine-Blöcke ("Hauptbeleuchtung", "Final-Wochenende"). */
  label?: string;
  /** Checkin-Datum für Stay22-Hotel-Suche. Default = start − 1 Tag. */
  hotelCheckIn?: string;
  /** Checkout-Datum. Default = end + 1 Tag. */
  hotelCheckOut?: string;
};

export type EventPage = {
  slug: string;
  /** H1 / Page-Title. */
  title: string;
  /** Lead unter H1. */
  subtitle: string;
  /** Meta-Description. */
  metaDescription: string;
  /** Saison-/Jahrgangs-Label im Hero ("Schlossbeleuchtung 2026"). */
  editionLabel: string;
  /** Lange Einleitung (1-3 Absätze als Markdown-light: \n\n trennt Absätze). */
  intro: string;
  /** Sektionen mit H2 + Body. */
  sections: { heading: string; body: string }[];
  /** FAQ-Block — wird als JSON-LD FAQPage + sichtbare H3-Liste gerendert. */
  faqs: { q: string; a: string }[];
  /** Event-Termine. */
  dates: EventDate[];
  /** Geo für Stay22-Nearby + Schema.org. */
  location: {
    name: string;
    street?: string;
    city: string;
    lat: number;
    lng: number;
  };
  /**
   * Optional alternative Geo für die Hotel-Suche (Stay22).
   * Use case Maimarkt Mannheim: Event ist in Mannheim, aber wir
   * empfehlen Übernachtung in Heidelberg (S-Bahn-Pendel). Schema-
   * Location bleibt Mannheim, Stay22 sucht in Heidelberg.
   */
  hotelLocation?: {
    name: string;
    lat: number;
    lng: number;
  };
  /** Suchradius in Metern für Stay22. */
  hotelRadius: number;
  /** Hue für Hero-Akzent. */
  hue: 1 | 2 | 3 | 4 | 5;
  /** Emoji für Pill + Cards. */
  emoji: string;
  /** Featured-Image-Pfad (optional). */
  heroImage?: string;
  /** Eingehende Affiliate-Hotline (Stay22) immer an. */
  showStay22?: boolean;
  /**
   * Optionaler GetYourGuide-Block. Wird direkt vor der FAQ-Section
   * gerendert, wenn gesetzt.
   */
  gyg?: {
    variant: "search-query" | "auto-city";
    query?: string;
    headline: string;
    lead: string;
    numberOfItems?: number;
  };
};

export const events: EventPage[] = [
  // ── Schlossbeleuchtung — Wahrzeichen-Event Nr. 1 ─────────────────
  {
    slug: "schlossbeleuchtung-2026",
    title: "Schlossbeleuchtung Heidelberg 2026 — Termine, Hotels & Tipps",
    subtitle:
      "Drei Sommernächte, in denen Schloss und Alte Brücke in bengalischem Rot leuchten und ein Feuerwerk vom Neckar abgefeuert wird. Hier sind die Termine 2026, die besten Aussichtspunkte und Hotels mit Schlossblick.",
    metaDescription:
      "Schlossbeleuchtung Heidelberg 2026: Termine 6. Juni, 11. Juli und 5. September. Beste Aussichtspunkte (Philosophenweg, Alte Brücke), Stay22-Hotels mit Live-Preisen für die Event-Wochenenden.",
    editionLabel: "Saison 2026",
    intro:
      "Die Heidelberger Schlossbeleuchtung ist eines der ältesten Lichtspektakel Deutschlands und gehört seit dem 17. Jahrhundert zur DNA der Stadt am Neckar. Drei Mal pro Jahr — jeweils an einem Samstagabend in Juni, Juli und September — wird die Schlossruine in rotes bengalisches Feuer getaucht, die Alte Brücke ebenso, und gegen 22:25 Uhr steigt ein Großfeuerwerk über dem Neckar in den Sommerhimmel.\n\nDie Anlässe gehen auf die Zerstörungen der Stadt 1689 und 1693 durch französische Truppen zurück; symbolisch zeigt das rote Licht den brennenden Königsstuhl, das Feuerwerk steht für die Wiedergeburt. Heute ist die Schlossbeleuchtung das am stärksten frequentierte Heidelberger Sommerevent — pro Termin reisen rund 50.000 Besucher an.\n\nWichtig zu wissen: Die Stadt ist an diesen drei Samstagen ausverkauft. Wer ein Hotel mit Schlossblick will, sollte mindestens 4–6 Wochen vorher buchen — die Stay22-Preise unten zeigen dir den aktuellen Stand für genau die Event-Wochenenden.",
    sections: [
      {
        heading: "Termine Schlossbeleuchtung 2026",
        body:
          "Die drei Termine 2026 sind fix terminiert und werden bei Schlechtwetter NICHT verschoben — Regen ist die Ausnahme, das Spektakel findet statt:\n\n• Samstag, 6. Juni 2026 — Auftakt-Termin im Frühsommer\n• Samstag, 11. Juli 2026 — Hauptbeleuchtung mitten in der Hochsaison\n• Samstag, 5. September 2026 — Abschluss-Termin, oft mildes Spätsommerwetter\n\nBeginn jeweils gegen 22:15 Uhr mit dem Anzünden der bengalischen Feuer, Höhepunkt ist das Großfeuerwerk vom Neckarufer ab ca. 22:25 Uhr.",
      },
      {
        heading: "Die besten Aussichtspunkte",
        body:
          "Philosophenweg — der Klassiker. Frontal-Blick auf Schloss und Feuerwerk, beste Foto-Perspektive. Wer hier einen guten Platz will, sollte spätestens 19:30 Uhr da sein.\n\nAlte Brücke und Neckarwiese (Neuenheimer Ufer) — am Brücken-Geländer mittendrin, Feuerwerk steigt direkt über deinem Kopf. Dichtes Gedränge, aber unschlagbare Stimmung.\n\nKönigstuhl-Aussichtsterrassen — höher gelegen, ruhiger, ideal für Familien. Mit der Bergbahn erreichbar (letzte Bahn bergauf 21:00 Uhr beachten).\n\nNeckarwiese westlich der Theodor-Heuss-Brücke — viel Platz, gute Sicht auf Feuerwerk, weniger überlaufen als die Alte Brücke.\n\nRestaurant-Terrassen mit Reservierung — Schlossweinstube, Zur Herrenmühle (Altstadt), Molkenkur. Reservierung Monate im Voraus nötig.",
      },
      {
        heading: "Anreise und Parken",
        body:
          "Mit dem Zug: ICE-Halt Heidelberg Hauptbahnhof, von dort 8 Min mit Bus/Straßenbahn zum Bismarckplatz. Die Altstadt ist Fußgängerzone.\n\nAuto: Innenstadt am Event-Tag ab 18:00 Uhr fast komplett gesperrt. Park-and-Ride dringend empfohlen — P+R Kirchheim oder Pfaffengrund, von dort mit ÖPNV in die Altstadt.\n\nFahrrad: Top-Option an warmen Sommer-Samstagen. Stellplätze rund um Bismarckplatz und Universitätsplatz.",
      },
      {
        heading: "Pauschalpakete & Schiffsfahrten",
        body:
          "Die Weißen Flotte Heidelberg bietet zur Schlossbeleuchtung Sonderfahrten ab Stadthalle an — Schiff fährt während des Feuerwerks auf dem Neckar, optimaler Blick aufs Wasser. Tickets online ca. 4 Wochen vor dem Termin.\n\nVerschiedene Heidelberger Hotels bündeln „Schlossbeleuchtungs-Pakete“ mit Übernachtung, Schlossblick-Zimmer und Drei-Gänge-Menü. Verfügbarkeit checkst du direkt im Hotel-Block unten — die Stay22-Live-Preise gelten exakt für die Event-Wochenenden.",
      },
    ],
    faqs: [
      {
        q: "Wann ist die Schlossbeleuchtung 2026?",
        a: "Drei Termine: Samstag 6. Juni 2026, Samstag 11. Juli 2026, Samstag 5. September 2026. Jeweils ab ca. 22:15 Uhr, Feuerwerk gegen 22:25 Uhr.",
      },
      {
        q: "Was kostet die Schlossbeleuchtung?",
        a: "Das Event ist kostenlos. Bezahlen musst du nur, wenn du Bonus-Erlebnisse buchst — Schiffsfahrt der Weißen Flotte (ca. 25–35 € p.P.), Restaurant-Reservierung mit Blick oder ein Hotel-Zimmer mit Schlossblick.",
      },
      {
        q: "Wo bekomme ich den besten Platz?",
        a: "Frontal-Blick und Foto-Motiv: Philosophenweg, ab 19:30 Uhr Platz sichern. Mittendrin-Stimmung mit Feuerwerk über dem Kopf: Alte Brücke und Neckarwiese. Familienfreundlich-ruhig: Königstuhl-Terrassen mit der Bergbahn.",
      },
      {
        q: "Findet die Schlossbeleuchtung bei Regen statt?",
        a: "Ja — die drei Termine sind fix und werden auch bei Regen durchgezogen. Bei starkem Wind kann das Feuerwerk allerdings sicherheitshalber verkürzt werden. Eine Verschiebung gab es in den letzten Jahrzehnten praktisch nicht.",
      },
      {
        q: "Wie früh muss ich ein Hotel buchen?",
        a: "Mindestens 4–6 Wochen vor dem Termin. Hotels mit direktem Schlossblick (Hotel Hirschgasse, Heidelberg Suites, Holländer Hof) sind oft 3 Monate vorab ausgebucht. Im Hotel-Block unten siehst du Live-Verfügbarkeit über Stay22.",
      },
    ],
    dates: [
      {
        start: "2026-06-06",
        end: "2026-06-06",
        label: "Auftakt-Termin",
        hotelCheckIn: "2026-06-05",
        hotelCheckOut: "2026-06-07",
      },
      {
        start: "2026-07-11",
        end: "2026-07-11",
        label: "Hauptbeleuchtung",
        hotelCheckIn: "2026-07-10",
        hotelCheckOut: "2026-07-12",
      },
      {
        start: "2026-09-05",
        end: "2026-09-05",
        label: "Abschluss-Termin",
        hotelCheckIn: "2026-09-04",
        hotelCheckOut: "2026-09-06",
      },
    ],
    location: {
      name: "Heidelberger Schloss",
      street: "Schlosshof 1",
      city: "Heidelberg",
      lat: 49.41058,
      lng: 8.71548,
    },
    hotelRadius: 2000,
    hue: 3,
    emoji: "🏰",
    gyg: {
      variant: "search-query",
      query: "Heidelberg Schlossbeleuchtung Boat",
      numberOfItems: 6,
      headline: "Schlossbeleuchtung 2026 vom Wasser erleben",
      lead: "Die drei Beleuchtungsnächte sind schnell ausgebucht — Bootsfahrten und geführte Schloss-Touren rund um das Spektakel lassen sich vorab sichern.",
    },
  },

  // ── Schlossfestspiele — Theater + Musik im Schlosshof ────────────
  {
    slug: "schlossfestspiele-heidelberg-2026",
    title: "Heidelberger Schlossfestspiele 2026 — Spielplan, Tickets, Hotels",
    subtitle:
      "Open-Air-Theater, Konzerte und Musicals im Schlosshof. Die wichtigsten Tipps für die Saison 2026 plus Hotels mit Live-Verfügbarkeit für die Festival-Wochen.",
    metaDescription:
      "Heidelberger Schlossfestspiele 2026: Sommer-Festival im Schlosshof mit Theater, Oper, Musical und Konzerten. Spielzeit-Daten, Anreise, Ticket-Tipps und Live-Hotels via Stay22.",
    editionLabel: "Spielzeit 2026",
    intro:
      "Die Heidelberger Schlossfestspiele sind Süddeutschlands traditionsreichstes Open-Air-Festival — seit 1926 verwandelt sich der Schlosshof jeden Sommer in eine der atmosphärischsten Spielstätten Europas. Trägerin ist das Theater und Orchester Heidelberg; gespielt wird zwischen Mitte Juni und Anfang August in mehreren parallelen Reihen: Schauspiel, Oper, Musical und Konzert.\n\nDer Schlosshof bietet rund 1.300 Sitzplätze unter freiem Himmel — gespielt wird auch bei leichtem Regen (Decken und Plastikhauben gibt's am Einlass). Hauptbühne ist die große Open-Air-Tribüne, kleinere Formate laufen in Englischem Bau und Königssaal.\n\nFür Reisende lohnt sich der Festival-Trip besonders, weil Heidelberger Sommerabende mild sind, das Schloss bei Einbruch der Dunkelheit angestrahlt wird und sich Theater + Hotel + Altstadt-Spaziergang zu einem dichten Wochenend-Programm kombinieren lassen. Wer Tickets hat, sollte rechtzeitig ein Hotel buchen — die untenstehenden Live-Preise gelten für die Festival-Wochen 2026.",
    sections: [
      {
        heading: "Spielzeit & Programm-Schwerpunkte 2026",
        body:
          "Die Schlossfestspiele 2026 laufen von Mitte Juni bis Anfang August. Das Programm wird traditionell im April veröffentlicht; typische Highlights sind ein großes Schauspiel-Hauptwerk im Schlosshof (oft Shakespeare oder Klassiker), eine Mozart- oder Verdi-Oper, ein Musical für Sommer-Familienpublikum und das Open-Air-Sinfoniekonzert mit dem Philharmonischen Orchester Heidelberg.\n\nFür den aktuellen Spielplan: heidelberger-theater.de → Schlossfestspiele.",
      },
      {
        heading: "Tickets, Sitzkategorien & Insider-Tipp",
        body:
          "Ticketkategorien gehen von ca. 24 € (oberer Rang) bis 92 € (Premium-Mittelplatz). Studierende und Schüler bekommen Restkartenrabatt 15 Minuten vor Beginn.\n\nInsider-Tipp: Die seitlichen Plätze im 1. Rang haben oft das beste Preis-Sicht-Verhältnis. Premium-Plätze sind frontal — aber bei Regen schlechter geschützt als die Seiten.\n\nVorverkauf ab ca. März über das Theater Heidelberg, Restkarten oft direkt an der Schlossfestspielkasse (Theaterstr. 4).",
      },
      {
        heading: "Anreise zum Schlosshof",
        body:
          "Zu Fuß: Vom Kornmarkt-Parkhaus oder vom Bismarckplatz aus zu Fuß ca. 15 Min bergauf, oder mit der Bergbahn (Station Kornmarkt) in 3 Min zur Schloss-Station.\n\nMit dem Auto: P+R nutzen, Parkhaus Kornmarkt am Vorstellungstag oft voll. Bergbahn-Tickets sind im Festival-Kombi-Ticket integriert.\n\nMit dem ÖPNV: Bus 33 von Bergheim-Bismarckplatz Richtung Kohlhof, Haltestelle Rathaus / Bergbahn. Letzter Bus vom Schloss zurück gegen 0:00 Uhr.",
      },
      {
        heading: "Hotel und Restaurant — die Festival-Routine",
        body:
          "Klassische Festival-Routine: Anreise nachmittags, Spaziergang Hauptstraße + Apéro, Abendessen 18:00–19:30 Uhr in einem Altstadt-Restaurant (Schnitzelbank, Zum Roten Ochsen, Vetter's Brauhaus), Bergbahn um 19:45 zum Schloss, Vorstellung 20:30, danach Drink im Schlossweinstuben-Innenhof oder Rückfahrt zum Hotel.\n\nDas spart Zeit am Festival-Abend und macht den Heidelberger Sommer-Trip zu einem dichten Wochenendpaket.",
      },
    ],
    faqs: [
      {
        q: "Wann finden die Schlossfestspiele 2026 statt?",
        a: "Mitte Juni bis Anfang August 2026. Die Spielplandetails veröffentlicht das Theater Heidelberg ab April auf heidelberger-theater.de.",
      },
      {
        q: "Was wird bei den Schlossfestspielen gespielt?",
        a: "Pro Saison gibt es ein großes Open-Air-Schauspiel im Schlosshof (oft Shakespeare), eine Oper, ein Musical und ein Open-Air-Sinfoniekonzert. Kleinere Formate (Lesungen, Kammerkonzerte) laufen in den Schloss-Innenräumen.",
      },
      {
        q: "Was passiert bei Regen?",
        a: "Bei leichtem Regen wird gespielt — Plastik-Regencapes und Decken gibt's gegen Pfand am Einlass. Bei Gewitter oder Sturm wird die Vorstellung pausiert oder ggf. abgebrochen; Ticket-Erstattung erfolgt nach den Schlossfestspiele-Bedingungen.",
      },
      {
        q: "Lohnt sich Heidelberg-Übernachten für die Schlossfestspiele?",
        a: "Ja — die letzte Bergbahn fährt um Mitternacht, danach hilft nur Taxi oder Bus. Wer im Schloss-Umfeld oder in der Altstadt übernachtet, kann nach der Vorstellung noch entspannt eine Weinstube besuchen oder direkt ins Bett. Hotels im Bereich Kornmarkt / Schlossberg sind ideal — Live-Verfügbarkeit unten.",
      },
    ],
    dates: [
      {
        start: "2026-06-19",
        end: "2026-08-02",
        label: "Festival-Saison",
        hotelCheckIn: "2026-07-03",
        hotelCheckOut: "2026-07-05",
      },
    ],
    location: {
      name: "Heidelberger Schloss — Schlosshof",
      street: "Schlosshof 1",
      city: "Heidelberg",
      lat: 49.41058,
      lng: 8.71548,
    },
    hotelRadius: 2000,
    hue: 2,
    emoji: "🎭",
  },

  // ── Heidelberger Herbst — Altstadtfest am letzten Sept-Wochenende ─
  {
    slug: "heidelberger-herbst-2026",
    title: "Heidelberger Herbst 2026 — das große Altstadtfest am 26. September",
    subtitle:
      "Eintägiges Volksfest mit 400 Ständen, Live-Bühnen und 300.000 Besuchern. Hier sind das Programm, die wichtigsten Tipps und Hotels für das Fest-Wochenende.",
    metaDescription:
      "Heidelberger Herbst 2026 am Samstag 26. September: Programm, Live-Bühnen, Floh-, Bauern- und Kunsthandwerkermarkt durch die ganze Altstadt. Live-Hotels für das Wochenende via Stay22.",
    editionLabel: "Ausgabe 2026",
    intro:
      "Der Heidelberger Herbst ist Heidelbergs größtes Altstadtfest und füllt am letzten September-Samstag die gesamte Fußgängerzone von Bismarckplatz bis Karlstor mit Ständen, Bühnen und Menschen. Mehr als 300.000 Besucher aus der Region zieht das Fest jedes Jahr an — eine Mischung aus Bauernmarkt, Flohmarkt, Kunsthandwerk, Weinmeile und Live-Musik.\n\nDie wichtigsten Anziehungspunkte: Die große Live-Bühne auf dem Marktplatz mit Bands aus Heidelberg und Umgebung, der Bauernmarkt am Universitätsplatz mit regionalen Spezialitäten, der Kunsthandwerkermarkt am Karlsplatz und der riesige Flohmarkt entlang der Hauptstraße. Hinzu kommen verschiedene Themen-Inseln (Kindererlebnis am Kornmarkt, Weinmeile auf der Plöck).\n\nDas Fest ist eintägig — 11:00 Uhr bis ca. 22:00 Uhr —, aber das Wochenende drumherum (Freitag-Anreise, Sonntag-Brunch + Altstadt-Erkundung) gibt Reisenden aus weiter weg eine perfekte Rahmung. Wer kombiniert übernachtet, sollte rechtzeitig buchen: das Wochenende ist eines der ausgebuchtesten des Jahres.",
    sections: [
      {
        heading: "Programm-Bereiche im Überblick",
        body:
          "Live-Musik (Marktplatz, Universitätsplatz, Kornmarkt) — von 12:00 Uhr durchgehend bis ca. 21:30 Uhr. Genre-Mix von Heidelberg-Studi-Bands über Rock-Cover bis Brass-Ensembles.\n\nBauernmarkt (Universitätsplatz) — regionale Direktvermarkter: Pfälzer Wein, Bergsträßer Obst, Käsereien, Honig, Wildwurst.\n\nKunsthandwerkermarkt (Karlsplatz und Anatomiegarten) — Keramik, Glas, Schmuck, Holzarbeiten von Ausstellern aus dem Rhein-Neckar-Raum.\n\nFlohmarkt (Hauptstraße) — über 1.000 Stände, Trödel + Antiquitäten. Aufbau ab 6 Uhr morgens, Hauptzeit 10:00–17:00 Uhr.\n\nKindererlebnis (Kornmarkt) — Karussell, Schminken, Mitmach-Stationen.",
      },
      {
        heading: "Anreise & Parken — Altstadt ist gesperrt",
        body:
          "Die komplette Hauptstraße und Nebenstraßen sind ab Freitagabend für Aufbau gesperrt, Samstag den ganzen Tag autofrei. Anfahrt mit dem Auto bedeutet zwingend P+R: P+R Kirchheim, P+R Pfaffengrund, oder S-Bahn-Anreise aus Mannheim/Karlsruhe.\n\nMit ÖPNV: ICE/RE bis Heidelberg Hauptbahnhof, von dort Tram 5 oder Bus 33 in 8 Min zum Bismarckplatz (Festrand westlich).\n\nFahrrad: Ideal — Stellplätze rund um Bismarckplatz, am Anatomiegarten und am Marstall.",
      },
      {
        heading: "Wo lohnt sich Übernachten?",
        body:
          "Altstadt: Du bist mitten im Geschehen, ab 22:00 Uhr nach Festende noch entspannt durch die Stadt. Aber: bei Live-Bühnen-nahen Hotels kann es bis 22 Uhr laut sein.\n\nWeststadt / Bergheim: 10–15 Gehminuten zum Fest, ruhig zum Schlafen, gute Restaurants drumherum für Freitag/Sonntag.\n\nNeuenheim (am anderen Neckarufer): Über die Alte Brücke 5 Min ins Fest. Toller Schlossblick, ruhig.\n\nDie Stay22-Live-Preise unten zeigen dir Verfügbarkeit und aktuelle Tarife für genau das Festwochenende.",
      },
    ],
    faqs: [
      {
        q: "Wann ist der Heidelberger Herbst 2026?",
        a: "Samstag, 26. September 2026, 11:00 Uhr bis ca. 22:00 Uhr. Aufbau am Freitag, Abbau Sonntag.",
      },
      {
        q: "Was kostet der Eintritt?",
        a: "Keiner. Heidelberger Herbst ist ein Open-Air-Stadtfest in der Fußgängerzone, freier Zugang. Bezahlt wird nur an den Ständen.",
      },
      {
        q: "Gibt es Veranstaltungs-Highlights, die man nicht verpassen sollte?",
        a: "Die offizielle Eröffnung 11:00 Uhr am Universitätsplatz, das Live-Konzert am Marktplatz ab 17:00 Uhr und das traditionelle Abschluss-Programm gegen 21:00 Uhr.",
      },
      {
        q: "Lohnt sich der ganze Tag oder reichen ein paar Stunden?",
        a: "Wer den Flohmarkt voll auskosten will: ganztägig. Wer nur Stimmung schnuppern + Live-Musik will: ab 15:00 Uhr reichen 3–4 Stunden. Wichtig: Restaurants sind ab 19:00 Uhr voll — reservieren oder früher essen.",
      },
    ],
    dates: [
      {
        start: "2026-09-26",
        end: "2026-09-26",
        label: "Festtag",
        hotelCheckIn: "2026-09-25",
        hotelCheckOut: "2026-09-27",
      },
    ],
    location: {
      name: "Heidelberger Altstadt — Marktplatz",
      street: "Marktplatz",
      city: "Heidelberg",
      lat: 49.41205,
      lng: 8.71097,
    },
    hotelRadius: 1500,
    hue: 3,
    emoji: "🎪",
  },

  // ── Weihnachtsmarkt — Klassiker für Adventsreisen ────────────────
  {
    slug: "weihnachtsmarkt-heidelberg-2026",
    title: "Weihnachtsmarkt Heidelberg 2026 — Termine, Standorte, Hotels",
    subtitle:
      "Vier Wochen Glühwein, Romantik und Lichterzauber zwischen Universitätsplatz und Karlsplatz, inklusive Eislaufbahn am Karlsplatz. Live-Hotels für die Advents-Wochenenden.",
    metaDescription:
      "Heidelberger Weihnachtsmarkt 2026: 23. November bis 22. Dezember, sechs Standorte in der Altstadt, Eislaufbahn am Karlsplatz. Adventswochenende-Hotels mit Live-Preisen via Stay22.",
    editionLabel: "Advent 2026",
    intro:
      "Der Heidelberger Weihnachtsmarkt zählt regelmäßig zu den schönsten Weihnachtsmärkten Deutschlands — die Kombination aus historischer Altstadt-Kulisse, Schlossblick und sechs miteinander verbundenen Marktstandorten macht ihn einzigartig. Geöffnet ist täglich vom letzten November-Montag bis zum 22. Dezember.\n\nDas Konzept: Statt eines großen, kompakten Marktes verteilt sich der Heidelberger Weihnachtsmarkt über die ganze Altstadt — Universitätsplatz, Marktplatz, Kornmarkt, Anatomiegarten, Karlsplatz mit Eislaufbahn und Bismarckplatz. So entsteht ein Spazierweg durch die Altstadt, bei dem sich Stand-Charakter (Glühwein vs. Kunsthandwerk vs. Internationales) immer wieder verändert.\n\nReise-Highlight: Die Schlossbeleuchtung in Schnee oder bei klarer Winternacht ist von der Alten Brücke aus magisch. Wer einen Wochenend-Trip plant, kombiniert idealerweise Anreise Freitag-Abend, Adventsspaziergang Samstag und Brunch + Heimreise Sonntag. Hotels in der Altstadt sind ab Ende Oktober oft ausgebucht — Live-Verfügbarkeit unten.",
    sections: [
      {
        heading: "Die sechs Standorte des Heidelberger Weihnachtsmarkts",
        body:
          "Universitätsplatz — der Hauptmarkt: Tannenbaum, klassische Glühwein-Stände, Kunsthandwerk, Krippenausstellung in der Peterskirche nebenan.\n\nMarktplatz — direkt vor der Heiliggeistkirche: Pfälzer Spezialitäten, Maronen, regionale Wurst.\n\nKornmarkt — Familienbereich mit Karussell, Bratapfel-Ständen, Blick auf die Schlossbeleuchtung.\n\nAnatomiegarten — kleinere, ruhige Insel mit Kunsthandwerkern.\n\nKarlsplatz — Eislaufbahn mit Schloss-Backdrop. Klassische Foto-Location. Schlittschuh-Verleih vor Ort.\n\nBismarckplatz — westliches Ende, größerer Markt mit mehr Internationalem (Crêpes, Churros, Raclette).",
      },
      {
        heading: "Öffnungszeiten und beste Besuchszeit",
        body:
          "Werktags: 11:00 Uhr bis 21:00 Uhr.\n\nFreitag und Samstag: 11:00 Uhr bis 22:00 Uhr.\n\nSonntag: 11:30 Uhr bis 21:00 Uhr (Sonntagsöffnung ab 11:30, weil 11:00 Uhr-Gottesdienst).\n\nGeschlossen: Heiligabend (24.12.) und alle Tage nach dem 22.12.\n\nBeste Atmosphäre nach Einbruch der Dunkelheit (ab ca. 17:00 Uhr in der Adventszeit). Wer Gedränge vermeiden will: Wochentags vormittags oder Sonntag früh.",
      },
      {
        heading: "Eislaufbahn am Karlsplatz",
        body:
          "Die Eislaufbahn vor der Kulisse von Schloss und Heiliggeistkirche ist DAS Insta-Motiv des Weihnachtsmarkts. Geöffnet zur gleichen Zeit wie der Markt, ca. 25. November bis 6. Januar (also auch nach Markt-Ende noch nutzbar).\n\nEintritt: ca. 6 € (Erwachsene), 4 € (Kinder), Schlittschuh-Verleih ca. 4 €. Bargeld oder Karte.\n\nFamilien-Tipp: Wochentag-Vormittage sind fast leer — ideal für Kinder oder Anfänger.",
      },
      {
        heading: "Anreise und Übernachten zum Weihnachtsmarkt",
        body:
          "Anreise: ICE/RE bis Heidelberg Hauptbahnhof, von dort Tram 5 oder Bus 33 zum Bismarckplatz. Auto: P+R Kirchheim oder Pfaffengrund, weiter mit ÖPNV — die Altstadt ist Fußgängerzone und in der Adventszeit besonders voll.\n\nÜbernachten: Hotels in der Altstadt sind ab Mitte Oktober für Advents-Wochenenden ausgebucht. Alternative: Bergheim (5 Min zu Fuß zum Bismarckplatz), Neuenheim (über die Alte Brücke), Weststadt. Stay22-Live-Preise unten zeigen Verfügbarkeit für genau die Advents-Wochenenden.",
      },
    ],
    faqs: [
      {
        q: "Wann ist der Heidelberger Weihnachtsmarkt 2026 geöffnet?",
        a: "Montag, 23. November bis Dienstag, 22. Dezember 2026. Werktags 11:00–21:00 Uhr, Fr/Sa bis 22:00 Uhr, So ab 11:30 Uhr. Heiligabend geschlossen.",
       },
      {
        q: "Welche sechs Standorte hat der Weihnachtsmarkt?",
        a: "Universitätsplatz (Hauptmarkt), Marktplatz, Kornmarkt, Anatomiegarten, Karlsplatz (mit Eislaufbahn) und Bismarckplatz. Alle in der Altstadt zu Fuß miteinander verbunden.",
      },
      {
        q: "Ist die Eislaufbahn auch nach Weihnachten geöffnet?",
        a: "Ja — die Eislaufbahn am Karlsplatz läuft ca. bis 6. Januar weiter, auch wenn der Weihnachtsmarkt nach dem 22.12. schließt.",
      },
      {
        q: "Welches Wochenende ist am vollsten?",
        a: "Das 2. und 3. Adventswochenende (typischerweise Dezember-Mitte). Wer es ruhiger will: erstes Adventswochenende oder Wochentage. Hotels für Mitte Dezember sind oft schon im September ausgebucht — siehe Live-Verfügbarkeit unten.",
      },
      {
        q: "Gibt es Glühwein-Tassen zum Sammeln?",
        a: "Ja — jeder Jahrgang hat motivisch eigene Glühweintassen. Pfand 3 €, viele Besucher behalten sie als Andenken. Motiv 2026 wird im November veröffentlicht.",
      },
    ],
    dates: [
      {
        start: "2026-11-23",
        end: "2026-12-22",
        label: "Marktlaufzeit",
        hotelCheckIn: "2026-12-04",
        hotelCheckOut: "2026-12-06",
      },
    ],
    location: {
      name: "Heidelberger Weihnachtsmarkt — Universitätsplatz",
      street: "Universitätsplatz",
      city: "Heidelberg",
      lat: 49.41135,
      lng: 8.70612,
    },
    hotelRadius: 1500,
    hue: 5,
    emoji: "🎄",
  },

  // ── Maimarkt Mannheim — Mega-Verbrauchermesse, 20 km von HD ──────
  {
    slug: "maimarkt-mannheim-2027",
    title: "Maimarkt Mannheim 2027 — Süddeutschlands größte Verbrauchermesse",
    subtitle:
      "11 Tage Messe, 1.400 Aussteller, 350.000 Besucher — von Heidelberg in 20 Minuten erreichbar. Termine und Hotels für die Messe-Tage.",
    metaDescription:
      "Maimarkt Mannheim 2027: Süddeutschlands größte Verbrauchermesse vom 24. April bis 4. Mai. Anreise von Heidelberg, Eintritt, Hotels mit Live-Preisen via Stay22.",
    editionLabel: "Saison 2027",
    intro:
      "Der Maimarkt Mannheim ist Süddeutschlands größte Verbraucher- und Regionalmesse — 11 Tage, rund 1.400 Aussteller aus über 20 Branchen und 350.000 Besucher machen ihn zur wichtigsten Frühjahrs-Messe der Region. Stattfindet er traditionell vom letzten April-Samstag bis zum darauffolgenden Sonntag.\n\nDas Messegelände am Maimarkt-Stadion ist 22 ha groß und gliedert sich in mehrere Themenhallen plus großes Freigelände: Garten und Wohnen, Auto und Mobilität, Essen und Trinken, Mode, Reisen und ein riesiger Tier-Bereich (zentrale Tier- und Pferdesport-Tradition seit 1613). Highlight ist die Maimarkt-Eröffnungsparade durch die Mannheimer Innenstadt.\n\nFür Heidelberg-Reisende gut zu wissen: Mannheim ist mit S-Bahn (S1, S2, S3) oder Regionalbahn in 15-20 Min vom Heidelberger Hauptbahnhof erreichbar. Viele Besucher wählen Heidelberg als ruhigeres, charmanteres Hotel-Ziel und pendeln tagsüber zur Messe. Live-Hotels in Heidelberg für die Messe-Tage unten.",
    sections: [
      {
        heading: "Termine Maimarkt 2027",
        body:
          "Samstag, 24. April bis Dienstag, 4. Mai 2027. Täglich geöffnet von 9:00 Uhr bis 18:00 Uhr (Mittwoch und Freitag-Abend gibt's traditionell verlängerte Öffnungszeiten bis 21:00 Uhr).\n\nEintritt: ca. 14 € (Tagesticket), 8 € (Kinder 6-14), Familienticket ca. 32 €. Online-Vorverkauf rabattiert.",
      },
      {
        heading: "Anreise vom Heidelberger Hotel",
        body:
          "S-Bahn-Anreise (empfohlen): S1, S2 oder S3 vom Heidelberger Hauptbahnhof Richtung Mannheim/Karlsruhe. Bis Mannheim ARENA/Maimarkt ca. 18-22 Min. Vom Bahnsteig direkter Fußweg zum Eingang Süd.\n\nAuto: A656 Heidelberg → Mannheim, Ausfahrt 1 Mannheim-Friedrichsfeld, dann beschilderte Maimarkt-Parkplätze. P-Tickets ca. 6 €. Achtung: Stoßzeiten 9:00-10:00 Uhr und 17:00-18:00 Uhr → Stau.",
      },
      {
        heading: "Was lohnt sich besonders auf dem Maimarkt?",
        body:
          "Garten & Wohnen — wer Saison-Käufe plant (Gartenmöbel, Außenküchen, Pflanzen), bekommt Messe-Konditionen.\n\nMaimarkt-Tier-Schau — eine der größten Deutschland-Schauen für Rinder, Pferde, Kleintiere. Pferde-Sport-Vorführungen mehrmals täglich.\n\nMaimarkt-Turnier — internationale Reitsport-Veranstaltung, Springreiten + Dressur, Tickets separat.\n\nFreigelände — Imbiss-Meile, Live-Bühnen, Familienbereich.\n\nBesondere Halle: Asiatische Spezialitäten und internationale Aussteller.",
      },
      {
        heading: "Warum Hotel in Heidelberg statt Mannheim?",
        body:
          "Während der Messetage sind Mannheimer Hotels oft preislich aufgeschlagen (Maimarkt + paralleles Geschäftsreise-Volumen). Heidelberg bietet meist günstigere Hotelpreise UND attraktivere Abend-Programm-Optionen (Altstadt-Spaziergang, Schlossblick, gute Restaurants), während Anreise mit S-Bahn nur 18-22 Min dauert.\n\nViele Maimarkt-Besucher kombinieren die Messe (1-2 Tage) mit einem Heidelberg-Wochenend-Trip (Schloss, Philosophenweg, Altstadt). Stay22-Hotels in Heidelberg unten mit Live-Preisen für die Messewoche 2027.",
      },
    ],
    faqs: [
      {
        q: "Wann ist der Maimarkt Mannheim 2027?",
        a: "Samstag 24. April bis Dienstag 4. Mai 2027, täglich 9:00–18:00 Uhr (Mi/Fr-Abend bis 21:00 Uhr verlängert).",
      },
      {
        q: "Wie komme ich von Heidelberg zum Maimarkt?",
        a: "S-Bahn (S1, S2, S3) vom Heidelberger Hauptbahnhof Richtung Mannheim, Halt 'Mannheim ARENA/Maimarkt'. 18-22 Min Fahrtzeit, dann 3 Min Fußweg zum Süd-Eingang.",
      },
      {
        q: "Was kostet der Eintritt zum Maimarkt?",
        a: "Tagesticket ca. 14 € (Erwachsene), 8 € (Kinder 6-14). Familien-Ticket ca. 32 €. Online-Vorverkauf günstiger.",
      },
      {
        q: "Macht es Sinn, dafür in Heidelberg zu übernachten statt in Mannheim?",
        a: "Ja, oft preiswerter (Mannheim hat Messe-Aufschläge), nur 18-22 Min S-Bahn-Anreise, und Heidelberg bietet das attraktivere Abend-/Wochenend-Programm (Altstadt, Schloss). Live-Preise unten.",
      },
    ],
    dates: [
      {
        start: "2027-04-24",
        end: "2027-05-04",
        label: "Messelaufzeit",
        hotelCheckIn: "2027-04-24",
        hotelCheckOut: "2027-04-26",
      },
    ],
    location: {
      name: "Maimarktgelände Mannheim",
      street: "Xaver-Fuhr-Straße 101, 68163 Mannheim",
      city: "Mannheim",
      lat: 49.4555,
      lng: 8.5172,
    },
    hotelLocation: {
      name: "Heidelberg Altstadt (für Maimarkt-Pendel via S-Bahn)",
      lat: 49.4093,
      lng: 8.6938,
    },
    hotelRadius: 2500,
    hue: 4,
    emoji: "🏭",
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
