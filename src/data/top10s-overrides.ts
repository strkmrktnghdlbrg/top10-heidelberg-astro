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
  items: Top10Item[];
};

export const top10Overrides: Record<string, Override> = {
  "online-werbeagenturen": {
    intro: "Heidelberg ist eine der dichtesten Agentur-Szenen Süddeutschlands — getragen von Universität, Mittelstand und der Druck-/Medienindustrie. Die folgenden zehn Agenturen decken die Felder Performance-Marketing, SEO, klassische Werbung und B2B-Kommunikation ab.",
    items: [
      { rank: 1,  name: "SUNRISE DIGITAL", description: "Performance-Marketing-Agentur mit Google-Partner- und Meta-Business-Status. Schwerpunkt SEO, Google Ads und Social Ads für Mittelstand und Online-Shops." },
      { rank: 2,  name: "stark.marketing", description: "Performance- und SEO-Agentur mit Fokus auf datengetriebene Optimierung, Content-SEO und Paid-Search-Kampagnen für lokale und nationale Kunden." },
      { rank: 3,  name: "zet zet Werbeagentur", description: "Inhabergeführte B2B-Agentur seit 1992 mit Schwerpunkt Markenstrategie, integriertes Content-Marketing und Corporate Design für erklärungsbedürftige Produkte." },
      { rank: 4,  name: "freiraum Agentur GmbH", description: "Kommunikationsberatung seit 2004 mit Profil in interner und externer Kommunikation, PR, Online-PR und SEO für Mittelstand und Verbände." },
      { rank: 5,  name: "Dreikon GmbH", description: "Full-Service-Online-Marketing-Agentur — Webdesign, SEO, Google Ads und Social-Media-Management aus dem Heidelberger Westen." },
      { rank: 6,  name: "Werbepresse", description: "SEO-Agentur mit Sitz in Heidelberg, spezialisiert auf organische Sichtbarkeit und lokale SEO für kleine und mittlere Unternehmen." },
      { rank: 7,  name: "OnlineMarketing.de Heidelberg", description: "Performance-Marketing mit Schwerpunkt E-Commerce und SaaS — Google Ads, Meta Ads, Conversion-Optimierung." },
      { rank: 8,  name: "Pixelschilder GmbH", description: "Heidelberger Web-Agentur für Websites, Shops und Marken-Identitäten — Fokus auf saubere UX und SEO-freundliche Umsetzung." },
      { rank: 9,  name: "STAYpineapple Studio", description: "Kreativ-Studio für Branding, Editorial und Bewegtbild — beliebt bei Startups aus dem Heidelberger Wissenschaftsumfeld." },
      { rank: 10, name: "AcademicMedia GmbH", description: "Spezialisierte Agentur für Universitäten, Forschungseinrichtungen und Wissenschafts-Unternehmen aus dem Rhein-Neckar-Raum." },
    ],
  },

  "restaurants": {
    intro: "Heidelberg vereint Brauhaus-Tradition, kreative Sterneküche, internationale Klassiker und studentisch geprägte Adressen. Diese zehn Restaurants stehen exemplarisch für die Bandbreite — von der historischen Wirtschaft bis zum sternegekrönten Tasting-Menü.",
    items: [
      { rank: 1,  name: "Le Gourmet (im Europäischer Hof)", description: "Feine Küche im Grandhotel an der Altstadt — wechselnde Menüs, klassisch französischer Anspruch, ausgezeichneter Service." },
      { rank: 2,  name: "Scharff's Schlossweinstube", description: "Historische Schlossweinstube im Heidelberger Schloss. Saisonale, regional geprägte Gourmetküche mit Schlossblick." },
      { rank: 3,  name: "Wirtshaus zum Nepomuk", description: "Klassische badisch-pfälzische Küche an der Alten Brücke — Saumagen, Spätzle und Maultaschen in stimmiger Kulisse." },
      { rank: 4,  name: "Kulturbrauerei Heidelberg", description: "Brauerei, Gasthaus und Biergarten im Herzen der Altstadt. Regionale Klassiker, eigenes Bier, große Karte." },
      { rank: 5,  name: "Schnitzelbank", description: "Eine der bekanntesten Altstadtkneipen Heidelbergs in der Bauamtsgasse — kleine, gemütliche Stube mit pfälzischer Küche und Weinen." },
      { rank: 6,  name: "Zum Roten Ochsen", description: "Studentenlokal seit 1703 in der Hauptstraße — Wirtshaus-Klassiker, Wandtafeln aus Jahrhunderten." },
      { rank: 7,  name: "Asia Heidelberg – Sichuan Küche", description: "Authentische Sichuan- und Thai-Küche mit Blick auf den Neckar und die Alte Brücke — sehr beliebt für scharfe Klassiker." },
      { rank: 8,  name: "Casa Mia", description: "Italiener im Herzen der Altstadt mit hausgemachter Pasta, knuspriger Pizza und einer breiten regional italienischen Karte." },
      { rank: 9,  name: "Vetter's Alt Heidelberger Brauhaus", description: "Eigenes Brauhaus mit eigener Würzbasis. Süffige Biere, deftige Klassiker, lange Theke — Treffpunkt für Einheimische." },
      { rank: 10, name: "Restaurant oben (Kohlhof)", description: "Kleines Sternerestaurant oberhalb Heidelbergs mit kreativen Mehr-Gänge-Menüs aus regionalen Produkten." },
    ],
  },

  "rechtsanwalte": {
    intro: "Heidelberg ist eine der Anwalts-Hochburgen in Baden-Württemberg — universitätsnah, mit starken Fachanwalts-Kanzleien für Wirtschaft, Familie, Arbeit, Erbrecht und Strafverteidigung. Die zehn Adressen unten sind etablierte Kanzleien mit klarer Spezialisierung.",
    items: [
      { rank: 1,  name: "Becker § Hansen Rechtsanwälte PartG mbB", description: "Kaiserstr. 67. Fachanwälte für Erbrecht, Bau- und Architektenrecht, Mietrecht, Wettbewerbsrecht, Handels- und Gesellschaftsrecht." },
      { rank: 2,  name: "Kanzlei Dr. Schoch & Leister", description: "Bahnhofstr. 1. Fachanwaltskanzlei mit Schwerpunkten Mietrecht, Wohnungseigentumsrecht, Erbrecht und Bau- und Architektenrecht." },
      { rank: 3,  name: "Weber & Partner Rechtsanwälte", description: "Bergheimer Str. 95. Fachanwälte für Erbrecht, Steuerrecht, Wirtschaftsrecht und Immobilienrecht." },
      { rank: 4,  name: "§KaG – Kanzlei am Gericht", description: "Bahnhofstr. 55-57. Beratung und gerichtliche Vertretung an den Standorten Heidelberg und Ludwigshafen, breites zivilrechtliches Profil." },
      { rank: 5,  name: "Ecovis Heidelberg Rechtsanwälte und Steuerberater", description: "Interdisziplinäre Beratung — Recht, Steuern und Wirtschaftsprüfung für Mittelstand, Familienunternehmen und Selbstständige." },
      { rank: 6,  name: "Rechtsanwaltskanzlei Dr. Hans-Joachim Neidlinger", description: "Etablierte Heidelberger Kanzlei mit Schwerpunkten Zivilrecht, Familienrecht, Erbrecht und Mietrecht." },
      { rank: 7,  name: "Anwaltskanzlei für Verkehrsrecht – Heidelberg", description: "Spezialisierte Adresse für Verkehrsunfälle, Bußgeld- und Führerscheinsachen — Pflichtverteidiger-Erfahrung." },
      { rank: 8,  name: "Kanzlei für Arbeitsrecht Heidelberg", description: "Fachanwaltskanzlei mit klarem Fokus Arbeitsrecht — Kündigungsschutz, Abfindung, Compliance und Betriebsrats-Beratung." },
      { rank: 9,  name: "Kanzlei für Familienrecht & Mediation", description: "Familien- und Erbrecht mit Mediations-Angebot — Scheidung, Sorgerecht, Unterhalt und Erbauseinandersetzungen." },
      { rank: 10, name: "Strafverteidiger-Kanzlei Heidelberg", description: "Fachanwaltskanzlei für Strafrecht mit Schwerpunkt Wirtschaftsstrafrecht und Verteidigung in Wirtschafts- und Steuerstrafverfahren." },
    ],
  },

  "steuerberater": {
    intro: "Mit Universität, Forschungseinrichtungen und stark wachsendem Mittelstand hat Heidelberg eine entsprechend dichte Steuerberatungs-Landschaft. Diese zehn Kanzleien sind etabliert und decken Privat-, Selbstständigen- und Unternehmensmandate ab.",
    items: [
      { rank: 1,  name: "SCHROEDER JAKOB PartGmbB Steuerberatung & Wirtschaftsprüfung", description: "Renommierte Heidelberger Adresse — gründliche Steuerberatung und Wirtschaftsprüfung für Unternehmen und vermögende Privatpersonen." },
      { rank: 2,  name: "Steuerberatung Tobias Staat", description: "Digital-orientierte Kanzlei mit Schwerpunkt Online-Geschäftsmodelle, Software-Entwicklung, Online-Coaching und Startups." },
      { rank: 3,  name: "ANTAX Steuerberatungsgesellschaft mbH", description: "Heidelberger Standort der ETL-Gruppe, einem der größten Beratungsnetzwerke Europas. Betreuung kleiner und mittlerer Unternehmen." },
      { rank: 4,  name: "Steuerberatung Lipponer (Heidelberg-Kirchheim)", description: "Schwarzwaldstraße 33. Familiengeführte Kanzlei, bekannt für gewissenhafte Betreuung von Mittelstand und Selbstständigen." },
      { rank: 5,  name: "HWBS Steuerberatungsgesellschaft mbH", description: "Langjährig etabliert in Heidelberg, Schwerpunkt Mittelstandsberatung, betriebswirtschaftliche Auswertungen und Nachfolgeberatung." },
      { rank: 6,  name: "Steuerberater Dr. Peter Schlör", description: "Inhabergeführte Kanzlei mit Profil bei Freiberuflern, Ärzten und beratenden Berufen." },
      { rank: 7,  name: "Ecovis Heidelberg", description: "Interdisziplinäre Kanzlei (Recht + Steuern), spezialisiert auf Familienunternehmen, Heilberufe und Internationales Steuerrecht." },
      { rank: 8,  name: "Steuerkanzlei für Ärzte & Heilberufe", description: "Heidelberger Spezialkanzlei für niedergelassene Ärzte, Zahnärzte und MVZ — Praxisgründung, Kooperationen und Honorarabrechnung." },
      { rank: 9,  name: "Steuerberatungsgesellschaft für Startups", description: "Fokus Forschungs- und Tech-Startups aus dem Heidelberger Universitätsumfeld — Wachstumsfinanzierung, ESOP, internationale Strukturen." },
      { rank: 10, name: "Steuerkanzlei für Privatkunden Heidelberg", description: "Spezialisiert auf Einkommensteuer, Vermietung und Erbschaftsteuer — auch für Pendler und Auslandsbeziehungen." },
    ],
  },

  "tieraerzte": {
    intro: "Heidelberg ist eine ausgesprochen tierfreundliche Stadt — die Tierarzt-Landschaft reicht von Hausarzt-Praxen in jedem Stadtteil bis zu spezialisierten Kleintierkliniken mit Diagnostik. Diese zehn Adressen sind etablierte Praxen mit guten Bewertungen.",
    items: [
      { rank: 1,  name: "Tierärztliches Zentrum an der Feuerwache (Dr. Meinhard Maurer)", description: "Baumschulenweg 10, 69124 Heidelberg. Vollausgestattete Praxis mit Röntgen, Ultraschall, OP. Tel. 06221 166800." },
      { rank: 2,  name: "Medivet Tierarztpraxis Heidelberg", description: "Eppelheimer Straße 38-40, 69115 Heidelberg. Teil der Medivet-Gruppe, breites Spektrum für Hund, Katze und Heimtiere." },
      { rank: 3,  name: "Tierarztpraxis Lenaustraße", description: "Lenaustraße 2, 69115 Heidelberg (Weststadt). Klassische Hausarztpraxis mit persönlicher Betreuung. Tel. 06221 24744." },
      { rank: 4,  name: "Kleintierpraxis Heidelberg-Rohrbach (Tierärztin Christine Bay)", description: "Anlaufstelle für Hund, Katze, Heimtiere in Rohrbach mit Schwerpunkt Vorsorge und Geriatrie." },
      { rank: 5,  name: "Kleintierpraxis im Fischerhaus (Dr. Ariane Rodewald)", description: "Heidelberg-Neuenheim, persönlich geführte Praxis mit Fokus auf Hund und Katze." },
      { rank: 6,  name: "Tierarztpraxis Ziegelhausen", description: "Kleingemünder Str. 13, 69118 Heidelberg. Wohnortnahe Praxis im östlichen Stadtteil. Tel. 06221 8930333." },
      { rank: 7,  name: "Kleintierpraxis Christina Gayer", description: "Marktstraße 51B, 69123 Heidelberg-Wieblingen. Hausarztpraxis mit Allgemein- und Spezialleistungen. Tel. 06221 7378888." },
      { rank: 8,  name: "Kleintierpraxis Dr. Andrea Wenske-Bauer", description: "Lenbachweg 1, 69126 Heidelberg-Boxberg. Etablierte Praxis im Süden — Vorsorge, Chirurgie, Heimtiere. Tel. 06221 332181." },
      { rank: 9,  name: "Tierarztpraxis Traxler (Tanja Traxler)", description: "Neckarhamm 5, 69123 Heidelberg-Wieblingen. Inhabergeführte Praxis mit ganzheitlichem Ansatz." },
      { rank: 10, name: "Tierarztpraxis Heidelberg (Dr. C. Martin)", description: "Kleintierpraxis mit Fokus Hund und Katze — Diagnostik, Operationen, regelmäßige Vorsorgetermine." },
    ],
  },

  "bio-laden": {
    intro: "In Heidelberg gibt es eine ausgewachsene Bio-Szene — vom Naturkost-Supermarkt mit 700 m² Fläche über klassische Alnatura-Märkte bis zu kleineren Hofläden. Diese zehn Adressen decken Stadtteile und Sortimente breit ab.",
    items: [
      { rank: 1,  name: "Fair & Quer – Bio-Supermarkt Wieblingen", description: "Mannheimer Str. (Heidelberg-Wieblingen). Genossenschafts-Markt mit 700 m² und über 10.000 Produkten — größte Bio-Auswahl der Region, mit eigener Bio-Bäckerei und Bistro." },
      { rank: 2,  name: "Alnatura Super Natur Markt – Poststraße (Altes Hallenbad)", description: "Poststraße 36/5, 69115 Heidelberg-Bergheim. Eines der größten Alnatura-Sortimente der Region, Mo–Sa 8–20 Uhr." },
      { rank: 3,  name: "Alnatura Super Natur Markt – Rohrbacher Straße", description: "Rohrbacher Str. 73, 69115 Heidelberg-Weststadt. Mo–Sa 7–20 Uhr, klassisches Alnatura-Vollsortiment." },
      { rank: 4,  name: "Alnatura Super Natur Markt – Bahnstadt", description: "Langer Anger 7-9, 69115 Heidelberg-Bahnstadt. Mo–Sa 7–20 Uhr, neuer Standort im Quartier." },
      { rank: 5,  name: "Fair & Quer Naturkost – Handschuhsheim", description: "Steubenstr. 52, 69121 Heidelberg-Handschuhsheim. Naturkost und Naturkosmetik im Norden der Stadt." },
      { rank: 6,  name: "BioMarkt Heidelberg-Ziegelhausen", description: "Naturkost, regionales Gemüse, Hofkäse und Vollkornbäcker-Sortiment im östlichen Tal." },
      { rank: 7,  name: "Reformhaus Engelhardt – Hauptstraße", description: "Heidelberg-Altstadt. Bio-Lebensmittel, Naturkosmetik und Nahrungsergänzung mit langer Tradition." },
      { rank: 8,  name: "Tante Emma Heidelberg (unverpackt)", description: "Unverpackt-Laden in der Altstadt mit Schwerpunkt regional, bio und plastikfrei — Müsli, Mehle, Pflegeprodukte zum Abfüllen." },
      { rank: 9,  name: "Hofladen Familie Lochbühler (Handschuhsheim)", description: "Saisonales Obst und Gemüse direkt vom Hof — beliebt für Erdbeeren, Spargel und Tomaten in der Saison." },
      { rank: 10, name: "Bauernmarkt am Wilhelmsplatz (Weststadt)", description: "Wochenmarkt mit hohem Bio-Anteil — regionale Erzeuger, Käse, Brot und Obst, jeden Samstag." },
    ],
  },

  "coworking-spaces": {
    intro: "Heidelberg hat eine kompakte, aber starke Coworking-Szene — getragen von Universität, Bio-Tech und der Bahnstadt als jüngstem Innovations-Quartier. Diese zehn Spaces reichen vom Industrie-Loft im Bergheim bis zur modernen Glasfront in der Bahnstadt.",
    items: [
      { rank: 1,  name: "B_Fabrik Coworking (GoodSpaces)", description: "Bergheimer Straße 104, 69115 Heidelberg-Bergheim. Industrie-Charme, vier Meetingräume, flexible Hotdesks und Team-Offices — wenige Minuten von der Neckarwiese." },
      { rank: 2,  name: "Güterbahnhof Coworking (halle02)", description: "Heidelberg-Bahnstadt, neben der halle02. Highspeed-Internet (250/100 Mbit), Konferenzraum, Reception, Kaffee inklusive — 5 Minuten zum Hauptbahnhof." },
      { rank: 3,  name: "Spaces Heidelberg", description: "Premium-Coworking mit Standorten Richtung Altstadt — repräsentative Adressen für Tech-, Forschungs- und Beratungs-Teams." },
      { rank: 4,  name: "Regus Heidelberg", description: "Internationales Netzwerk mit zentralen Heidelberger Adressen, Day-Pässe und feste Schreibtische — vor allem für Vielreisende." },
      { rank: 5,  name: "DAI Heidelberger Akademie für Innovation", description: "Coworking-Bereich mit Fokus auf Wissenschaft und Startup-Ökosystem — Veranstaltungen, Networking, Pitch-Events." },
      { rank: 6,  name: "Coworking Heidelberg Altstadt", description: "Kleinere Adresse mit historischem Altbau-Charakter — beliebt bei Freelancern aus Kreativ- und Beratungs-Branche." },
      { rank: 7,  name: "Mind the Mint Coworking (Bahnstadt)", description: "Boutique-Coworking mit Fokus auf Frauen-Netzwerke und Mutter-Kind-tauglichen Arbeitsplätzen." },
      { rank: 8,  name: "Innovation Lab Heidelberg", description: "Coworking im Innovationsumfeld der Universität — Schwerpunkt Life Sciences, Biotech und Startup-Ausgründungen." },
      { rank: 9,  name: "Heidelberg Startup Partners – Coworking", description: "Coworking im Universitäts-Startup-Netzwerk. Schwerpunkt frühe Phase, Inkubation, Mentoring." },
      { rank: 10, name: "shareDnC Spaces Heidelberg", description: "Plattform-Konzept mit wechselnden Heidelberger Locations — flexible Buchung von Tisch bis Konferenzraum." },
    ],
  },

  "musikschulen": {
    intro: "Heidelberg hat als Universitätsstadt eine breite Musikschullandschaft — von traditionellen Klavier- und Gitarren-Adressen bis zu modernen Rock- und Popschulen für Anfänger und Fortgeschrittene. Diese zehn Schulen decken das gesamte Spektrum ab.",
    items: [
      { rank: 1,  name: "Musikschule Elysium (Ziegelhausen)", description: "Kleingemünderstr. 3. Breites Fächer-Spektrum von Klavier, Gesang, Gitarre, Saxophon, Geige bis Musiktherapie und EMP — für Kinder und Erwachsene." },
      { rank: 2,  name: "Modern Music School Heidelberg-Bahnstadt", description: "Rock- und Pop-orientierter Unterricht — Gitarre, Klavier, Keyboard, Drums, Gesang. Beliebt bei Jugendlichen und Hobby-Musikern." },
      { rank: 3,  name: "Modern Music School Heidelberg-Schlierbach", description: "Zweiter Standort der Modern Music School — selbe Rock/Pop-Methodik im östlichen Stadtteil." },
      { rank: 4,  name: "Musikstudio Weststadt", description: "Inhabergeführt — Klassische Gitarre, Klavier, weitere Instrumente. Stile von Klassik über Rock, Pop, Jazz, Klezmer bis Folk." },
      { rank: 5,  name: "AcapellArt Musikschule Heidelberg", description: "Individuelles Konzept — Schüler bestimmen Ort und Zeit. Mobiler Lehrer-Pool für Klavier, Gitarre, Gesang." },
      { rank: 6,  name: "Mobile Musikschule Heidelberg", description: "Klavier, Keyboard, Gitarre und Ukulele — Unterricht zuhause oder im Studio, für jedes Alter." },
      { rank: 7,  name: "Städtische Musikschule Heidelberg (Karlstorbahnhof)", description: "Kommunale Musikschule mit klassischem Lehrplan, Ensembles, Orchestern und Vorbereitung auf Hochschul-Aufnahme." },
      { rank: 8,  name: "Musikschule Heidelberg-Handschuhsheim", description: "Standortnahe Adresse im Norden — Streich- und Holzblasinstrumente, klassischer Klavierunterricht." },
      { rank: 9,  name: "Klavierschule Heidelberg", description: "Auf Klavier spezialisierte Adresse — von Anfänger bis Konzert-Vorbereitung, klassisch und Jazz/Pop." },
      { rank: 10, name: "Privatmusikschulen-Netzwerk Heidelberg", description: "Mehrere unabhängige Privatlehrer-Netzwerke vermitteln Einzelunterricht aus dem Heidelberger Studierenden-Pool." },
    ],
  },

  "nachhilfe-und-sprachschulen": {
    intro: "Mit 39.000 Studierenden, sieben Hochschulen und einer der größten Schulstadt-Dichten Deutschlands hat Heidelberg eine entsprechend ausdifferenzierte Nachhilfe- und Sprach-Landschaft. Diese zehn Adressen reichen vom klassischen Lerncenter bis zur akademischen Sprachschule.",
    items: [
      { rank: 1,  name: "Studienkreis Heidelberg", description: "Mehrfacher Testsieger. Nachhilfe in Mathe, Deutsch, Englisch und allen Hauptfächern für die Klassenstufen 1 bis 13. Standorte Bismarckplatz und Bahnstadt." },
      { rank: 2,  name: "Schülerhilfe Heidelberg-Bismarckplatz", description: "Rohrbacher Straße 3. Bundesweit ausgezeichnet — Einzel- und Gruppenkurse für alle Fächer, Prüfungsvorbereitung Abitur." },
      { rank: 3,  name: "Heidelberger Pädagogium", description: "Deutsche Sprachkurse für internationale Studierende — Vollzeit, Abend, alle Stufen bis Test-DaF/DSH-Vorbereitung. Auch BAMF-Integrationskurse." },
      { rank: 4,  name: "Goethe-Institut Heidelberg-nah / Sprachenakademie", description: "Akademisch geprägte Deutschsprachschule mit Fokus universitäre Vorbereitung und Mitarbeiter-Deutsch von Heidelberger Unternehmen." },
      { rank: 5,  name: "Volkshochschule Heidelberg (VHS)", description: "Bergheimer Str. 76. Klassische VHS mit breitem Sprachen-Angebot (Englisch, Spanisch, Französisch, Italienisch, Türkisch), Konversations- und Business-Kurse." },
      { rank: 6,  name: "STUDENTENRING Nachhilfe Heidelberg", description: "Vermittelt Nachhilfe durch qualifizierte Heidelberger Studierende — flexibel, günstig, zuhause oder online." },
      { rank: 7,  name: "Stevens English Heidelberg", description: "Spezialisierte Sprachschule mit Schwerpunkt Cambridge-Prüfungen, TOEFL und Business-Englisch." },
      { rank: 8,  name: "Berlitz Heidelberg", description: "Internationale Sprachschule mit Berlitz-Methodik — Englisch, Deutsch als Fremdsprache, Business-Trainings für Firmen." },
      { rank: 9,  name: "Inlingua Heidelberg", description: "Sprachschule für Erwachsene und Unternehmen — Englisch, Deutsch, Französisch, Spanisch und über 50 weitere Sprachen." },
      { rank: 10, name: "Mathe-Nachhilfe Universität Heidelberg", description: "Studentisch organisierte Nachhilfe für Mathematik, Physik, Statistik und MINT-Studienanfänger:innen." },
    ],
  },

  "vintage-second-hand-laden": {
    intro: "Heidelberg ist Vintage-Stadt — getragen von einer starken Studi-Community, einem dichten Altstadt-Netz aus Designer-Second-Hand-Shops und Bergheim als ungeschönterem Schnäppchen-Revier. Diese zehn Adressen decken Kleidung, Möbel und Designer-Vintage ab.",
    items: [
      { rank: 1,  name: "MY WAY BIGGI Second Hand", description: "Bergheimer Str. 17, 69115 Heidelberg. Stadtbekannte Adresse für hochwertige Damen-Mode aus zweiter Hand. Di–Fr 10–18, Sa 10–16 Uhr." },
      { rank: 2,  name: "Zeitlos 34", description: "Poststraße 34 (Innenhof), 69115 Heidelberg-Bergheim. Designer- und Markenmode aus zweiter Hand, sorgfältig kuratiert." },
      { rank: 3,  name: "Second Love", description: "Ingrimstraße in der Altstadt — Designer-Pieces mit Authentizitäts-Garantie und persönlicher Beratung." },
      { rank: 4,  name: "Collectors Corner", description: "Altstadt. Hochwertige Designer-Stücke, Vintage-Klassiker und ausgewählte Marken — Beratung mit Echtheits-Prüfung." },
      { rank: 5,  name: "Peeces Vintage Heidelberg", description: "Junge Vintage-Mode für Studierende und Modefans — Marken-Sweater, 90er-Klassiker, Denim." },
      { rank: 6,  name: "Vintage Revivals Heidelberg", description: "Liebevoll kuratierter Mix aus Mode, Accessoires und Wohn-Vintage — Schwerpunkt 60er bis 80er Jahre." },
      { rank: 7,  name: "Oxfam Heidelberg", description: "Karitative Second-Hand-Kette — Bücher, Kleidung und Geschirr in Bergheim und Weststadt." },
      { rank: 8,  name: "DRK-Kleiderladen Heidelberg", description: "Klassischer Sozial-Second-Hand. Günstige Damen-, Herren- und Kinderkleidung im Bergheim." },
      { rank: 9,  name: "Möbel-Second-Hand Heidelberg (Bergheim)", description: "Gebrauchte Möbel, Lampen und Designer-Klassiker — beliebt bei Studierenden, die ihre erste Wohnung einrichten." },
      { rank: 10, name: "Flohmarkt am Karlsplatz (saisonal)", description: "Größter Flohmarkt der Region — monatlich in der Altstadt, Mix aus Trödel, Vintage-Mode und Designer-Schnäppchen." },
    ],
  },

  "baeckereien": {
    intro: "Heidelberg ist Brot-Stadt: Die Bandbreite reicht von Bio-Vollkornbäckern über klassische Handwerksbäckereien mit Sauerteig-Reifezeiten bis zu kleinen Holzofenbäckereien. Diese zehn Adressen sind die Bäckereien, die Heidelberger:innen tatsächlich nennen.",
    items: [
      { rank: 1,  name: "Bäckerei Wacker (Wieblingen)", description: "Mannheimer Straße 260, 69123 Heidelberg-Wieblingen. Handwerk pur — natürlicher Sauerteig, Wieblinger Neckarplotzer, Dinkel-Vollkornbrot und Apfelstrudel." },
      { rank: 2,  name: "Bäckerei Riegler", description: "Traditionelles Bäckerhandwerk, hauseigener Natursauerteig mit 42 Stunden Reifezeit — gilt vielen Heidelbergern als Referenz für Brot." },
      { rank: 3,  name: "Mahlzahn Bio-Vollkornbäckerei", description: "Fünf Filialen in Heidelberg. 100 % zertifizierter Bio-Anbau, eigener Backferment-Sauerteig mit 10–11 Stunden Reife. Schwerpunkt Vollkorn." },
      { rank: 4,  name: "Heidelberger Holzofenbäckerei", description: "Backen aus Leidenschaft im echten Holzofen — kräftige Krusten, lange Teigreifen, regional und ohne Convenience-Mischungen." },
      { rank: 5,  name: "Bäckerei Görtz – Filiale Heidelberg", description: "Regional verankerte Kette aus der Pfalz mit mehreren Heidelberger Filialen — verlässliche Standard-Qualität, breite Brot- und Brötchen-Auswahl." },
      { rank: 6,  name: "Café Konditorei Schafheutle", description: "Hauptstr. 94, Altstadt. Seit 1832. Pâtisserie, Sahnetorten und feines Kleingebäck — eine der ältesten Konditoreien Deutschlands." },
      { rank: 7,  name: "Bäckerei Hörner (Handschuhsheim)", description: "Familienbäckerei im Norden — klassische Backwaren, Bio-Brote, ofenfrische Brezeln und Kuchen am Wochenende." },
      { rank: 8,  name: "Bäckerei Spörlein", description: "Lokale Adresse mit mehreren Filialen — beliebt für süße Stücke, Berliner und Saisonbackwaren." },
      { rank: 9,  name: "Brotwerk Heidelberg", description: "Junge Manufaktur-Bäckerei mit Fokus auf Sauerteig-Brote, alte Getreidesorten und Slow Baking." },
      { rank: 10, name: "Bäckerei Mantei (Rohrbach)", description: "Quartiers-Bäckerei in Rohrbach — gute Frühstücks-Anlaufstelle, klassische badische Backwaren." },
    ],
  },

  "cafes": {
    intro: "Heidelbergs Café-Szene reicht von der traditionsreichen Konditorei aus dem 19. Jahrhundert bis zur Spezialitätenkaffee-Bar mit Single-Origin-Bohnen. Diese zehn Adressen sind die Cafés, in denen Heidelberger:innen tatsächlich frühstücken, lesen und sich treffen.",
    items: [
      { rank: 1,  name: "Café Konditorei Schafheutle", description: "Hauptstr. 94, Altstadt. Seit 1832. Klassische Kaffeehauskultur, Pâtisserie auf hohem Niveau, Frühstück und Frühschoppen mit Patina." },
      { rank: 2,  name: "Café RADA", description: "Altstadt. 15 Kaffee-Sorten, Bohnen primär aus Süd- und Mittelamerika, hausgemachte Kuchen und Frühstück mit südamerikanischen Akzenten." },
      { rank: 3,  name: "Coffee Nerd Heidelberg", description: "Altstadt. Spezialitätenkaffee-Café mit wechselnden Röstereien, V60, Espresso-Tonic und Specialty-Kuchen seit 2023." },
      { rank: 4,  name: "Casa del Caffé", description: "Altstadt. Gemütliches Italo-Café — heiße Kaffeespezialitäten, hausgemachte Kakao-Spezialitäten, italienische Mehlspeisen." },
      { rank: 5,  name: "Café Knösel", description: "Älteste Konditorei Heidelbergs — Heimat des berühmten Heidelberger Studentenkuss. Touristisch, aber zu Recht." },
      { rank: 6,  name: "Café Frühling (Bergheim)", description: "Frühstücks-Klassiker in Bergheim — große Frühstückskarte, langes Wochenend-Brunchen, vegane Optionen." },
      { rank: 7,  name: "Café Gundel", description: "Stadtbekannte Konditorei mit hausgemachten Torten — gemütliches Setting in der Altstadt." },
      { rank: 8,  name: "Café Botanik (Neuenheim)", description: "Kleines Quartiers-Café mit Pflanzen, Bowls und Specialty-Coffee — beliebt bei Studierenden und Homeoffice-Arbeitenden." },
      { rank: 9,  name: "Café Extrablatt Heidelberg", description: "Bismarckplatz. Großstadt-Café mit Frühstück bis 17 Uhr, Brunch am Wochenende, große Terrasse." },
      { rank: 10, name: "Café Burkardt (Hauptstraße)", description: "Klassiker für Kaffee und Kuchen mit Blick auf die Hauptstraße — gemütliches Wohnzimmer-Setting." },
    ],
  },

  "apotheken": {
    intro: "Heidelbergs Apotheken-Landschaft ist historisch tief — die älteste Apotheke Baden-Württembergs steht hier und ist seit 1330 in Betrieb. Daneben gibt es spezialisierte Versorgungs-Apotheken und moderne Quartier-Adressen. Diese zehn decken Altstadt bis Bahnstadt ab.",
    items: [
      { rank: 1,  name: "Hof Apotheke Heidelberg", description: "Sofienstr. 11, Altstadt. Älteste Apotheke Baden-Württembergs — seit 1330 in Betrieb. Persönliche Beratung, Bereitschaft und tägliche Botendienst-Lieferung." },
      { rank: 2,  name: "Stadt-Apotheke Heidelberg", description: "Hauptstraße. Klassische Innenstadt-Apotheke mit ausgewählter Kosmetik-Linie, Kompetenz-Center für Hautpflege und chronische Erkrankungen." },
      { rank: 3,  name: "Atos Apotheke Heidelberg", description: "An der Atos-Klinik. Spezialisiert auf orthopädische und chirurgische Patient:innen — Krankenhausapotheke mit Privat-Kundengeschäft." },
      { rank: 4,  name: "Apotheke am Bismarckplatz", description: "Zentral, gut erreichbar — breite Beratung, klassische OTC- und Rezept-Versorgung, lange Öffnungszeiten." },
      { rank: 5,  name: "Löwen-Apotheke Heidelberg", description: "Traditionsreiche Innenstadt-Apotheke mit hoher Beratungskompetenz, Homöopathie und Phytopharmaka-Schwerpunkt." },
      { rank: 6,  name: "Schwan-Apotheke (Hauptstraße)", description: "Apotheke in der Hauptstraße mit eigener Rezeptur — individuelle Salben und Mischungen auf Verschreibung." },
      { rank: 7,  name: "Bahnstadt-Apotheke", description: "Moderne Apotheke im neuen Stadtquartier Bahnstadt — junges Team, App-Bestellung und Rezept-Vorbestellung digital." },
      { rank: 8,  name: "Neuenheimer Apotheke", description: "Im Universitätsviertel Neuenheim — Versorgung für Forschungseinrichtungen und Anwohner, lange Tradition." },
      { rank: 9,  name: "Universitäts-Apotheke (Hauptstraße)", description: "Stadtbekannte Adresse direkt an der Universität. Studierende, Wissenschaftler:innen, internationaler Service." },
      { rank: 10, name: "Apotheke Handschuhsheim", description: "Quartiers-Apotheke im Norden — feste Stammkundschaft, klassische Versorgung, persönliche Beratung." },
    ],
  },

  "friseursalons": {
    intro: "Heidelbergs Friseur-Landschaft ist erwartungsgemäß dicht — von Kettensalons in der Hauptstraße über Boutique-Salons in der Altstadt bis zu inhabergeführten Stadtteil-Adressen. Diese zehn Salons sind etabliert und decken die wesentlichen Segmente ab.",
    items: [
      { rank: 1,  name: "bloom's Friseur Heidelberg", description: "Plöck 2/2, Altstadt. Exklusives Styling, breite Behandlungspalette von Colorierung über Hochsteck-Frisuren bis Hair-Spa. Zentrale Adresse." },
      { rank: 2,  name: "Florin Friseursalon", description: "Ziegelgasse 17, Altstadt. Inhabergeführter Boutique-Salon mit Fokus auf Schnitt-Architektur und Naturhaarfarben." },
      { rank: 3,  name: "TREJA – Ihr Friseur in der Altstadt", description: "Etablierter Salon in der Heidelberger Altstadt mit Fokus auf moderne Schnitte und Hochzeits-Frisuren." },
      { rank: 4,  name: "aproposHaare Heidelberg", description: "Bismarckplatz-nah. Schnitt, Colorierung, Hochsteck — beliebt bei Hochzeits-Klientel und für Beratung zu langen Haaren." },
      { rank: 5,  name: "Essanelle Heidelberg", description: "Hauptstr. 24, Altstadt. Kettensalon mit verlässlicher Standard-Qualität — schnelle Termine ohne Reservierung möglich." },
      { rank: 6,  name: "Klipp Friseure Heidelberg", description: "Mehrere Filialen — günstige Schnitte und Standard-Färbungen, gut für Walk-in-Termine in der Mittagspause." },
      { rank: 7,  name: "Vidal Sassoon-Schule (Heidelberg-nah)", description: "Aviation-Sassoon-Stil-Schnitte aus dem Heidelberger Friseur-Pool — moderne Bob-Cuts und Edge-Schnitte." },
      { rank: 8,  name: "Friseur Naturlocke (Neuenheim)", description: "Spezialisiert auf Locken — DevaCut, Curly-Methode und individuelle Locken-Pflege-Beratung." },
      { rank: 9,  name: "Top Hair Heidelberg-Handschuhsheim", description: "Inhabergeführter Quartiers-Salon im Norden — Stammkundschaft, persönlicher Ton, klassische Damen- und Herren-Schnitte." },
      { rank: 10, name: "Barbier-Stube Heidelberg", description: "Herren-Spezialist mit Bart-Schneide-Service, klassische Rasur und Heißschaum — Altstadt-Boutique mit Cinque-Stil-Ambiente." },
    ],
  },

  "buchlaeden": {
    intro: "Heidelberg ist UNESCO-Literaturstadt und hat eine außergewöhnlich dichte Buchhandlungs-Szene — eine Buchhandlung pro 7.340 Einwohner, Platz 2 unter deutschen Großstädten. Diese zehn Adressen stehen für unabhängige Sortimente, Antiquariate und Spezial-Buchhandlungen.",
    items: [
      { rank: 1,  name: "Buchhandlung & Antiquariat Schöbel", description: "Plöck 56A, Altstadt. Klassisches Heidelberger Antiquariat mit umfangreichem Sortiment, eigener Auswahl und persönlicher Beratung." },
      { rank: 2,  name: "Antiquariat Thomas Hatry", description: "Hauptstraße 119. Antiquariat mit Schwerpunkt Geisteswissenschaften, Kulturgeschichte und seltene Erstausgaben." },
      { rank: 3,  name: "Antiquariat Goethe & Companie", description: "Ingrimstraße 20a. Spezialisiert auf deutsche Literatur, Klassiker und akademische Buchschätze." },
      { rank: 4,  name: "Antiquariat Merian", description: "Hauptstraße 189. Antiquariat mit großem Sortiment Kunst-, Reise- und Regionalliteratur." },
      { rank: 5,  name: "Liane Opitz Bücher und Erlesenes (Wieblingen)", description: "Mannheimer Straße 258, Wieblingen. Inhabergeführte Buchhandlung mit kuratiertem Sortiment und Lese-Salon." },
      { rank: 6,  name: "Lehmanns Buchhandlung (Universität)", description: "Wissenschaftliche Buchhandlung direkt am Campus — Pflichtlektüre für Heidelberger Studierende, große Lehrbuch-Auswahl." },
      { rank: 7,  name: "Buchhandlung Himmelheber", description: "Theaterstraße. Sortiments-Buchhandlung mit literarisch-akademischem Profil und regelmäßigen Autoren-Lesungen." },
      { rank: 8,  name: "Buchhandlung Schmitt & Hahn (Hauptbahnhof)", description: "Klassische Bahnhofs-Buchhandlung — Reise-, Sach- und Belletristik-Bestseller, früh geöffnet bis spät abends." },
      { rank: 9,  name: "Buchhandlung Hugendubel Heidelberg", description: "Große Sortiments-Buchhandlung in der Hauptstraße — breit aufgestellt von Belletristik bis Kinder- und Jugendbuch." },
      { rank: 10, name: "Kinderbuchhandlung Heidelberg", description: "Spezialisierte Adresse für Kinder- und Jugendbuch — Beratung für Eltern, Lehrkräfte und Pädagog:innen, Lesungen für Kita-Gruppen." },
    ],
  },
};
