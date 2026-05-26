/**
 * Heidelberger Stadtteile mit Koordinaten.
 * Wird von Stay22Map und Stay22NearbyHotels verwendet, um Hotel-Karten
 * pro Stadtteil zu zentrieren.
 *
 * Quelle: heidelberg-interaktiv-astro/src/data/districts.ts
 * (gleiche Daten, anderes Datenmodell-Subset).
 */

export type DistrictGeo = {
  slug: string;
  name: string;
  coordinates: [number, number]; // [lat, lng]
};

export const districts: DistrictGeo[] = [
  { slug: "altstadt",       name: "Altstadt",       coordinates: [49.4128, 8.7100] },
  { slug: "bahnstadt",      name: "Bahnstadt",      coordinates: [49.4040, 8.6680] },
  { slug: "bergheim",       name: "Bergheim",       coordinates: [49.4083, 8.6810] },
  { slug: "boxberg",        name: "Boxberg",        coordinates: [49.3812, 8.6960] },
  { slug: "emmertsgrund",   name: "Emmertsgrund",   coordinates: [49.3724, 8.6884] },
  { slug: "handschuhsheim", name: "Handschuhsheim", coordinates: [49.4291, 8.6878] },
  { slug: "kirchheim",      name: "Kirchheim",      coordinates: [49.3845, 8.6604] },
  { slug: "neuenheim",      name: "Neuenheim",      coordinates: [49.4196, 8.6886] },
  { slug: "pfaffengrund",   name: "Pfaffengrund",   coordinates: [49.3990, 8.6360] },
  { slug: "rohrbach",       name: "Rohrbach",       coordinates: [49.3878, 8.6855] },
  { slug: "schlierbach",    name: "Schlierbach",    coordinates: [49.4123, 8.7405] },
  { slug: "suedstadt",      name: "Südstadt",       coordinates: [49.3850, 8.6750] },
  { slug: "weststadt",      name: "Weststadt",      coordinates: [49.4040, 8.6920] },
  { slug: "wieblingen",     name: "Wieblingen",     coordinates: [49.4128, 8.6420] },
  { slug: "ziegelhausen",   name: "Ziegelhausen",   coordinates: [49.4250, 8.7434] },
];

const byName = new Map(districts.map((d) => [d.name.toLowerCase(), d]));

export function getDistrictGeo(districtName: string): DistrictGeo | undefined {
  return byName.get(districtName.toLowerCase());
}
