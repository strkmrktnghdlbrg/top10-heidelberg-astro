/**
 * Automatisches Image-Registry: scanne public/images/lists/ und
 * public/images/districts/ zur Build-Zeit und biete `getImage(slug)`
 * an. Wenn der Slug eines Top10-Lists eine passende .jpg hat, gib den
 * /images/...-Pfad zurück, sonst null (Komponente fällt dann auf
 * HueGradient zurück).
 *
 * Attribution: imageCredits aus image-credits.ts wird verheiratet.
 */

import { imageCredits, type ImageCreditRecord } from "./image-credits";

const listMods = import.meta.glob<string>("/public/images/lists/*.jpg", { eager: true, query: "?url", import: "default" });
const distMods = import.meta.glob<string>("/public/images/districts/*.jpg", { eager: true, query: "?url", import: "default" });

const byBasename = (mods: Record<string, string>) => {
  const out: Record<string, string> = {};
  for (const path of Object.keys(mods)) {
    const m = path.match(/\/([^/]+)\.jpg$/);
    if (m) out[m[1]] = "/" + path.split("/public/").pop()!;
  }
  return out;
};

const lists = byBasename(listMods);
const districts = byBasename(distMods);

export function getImage(slug: string): string | null {
  return lists[slug] ?? districts[slug] ?? null;
}

export function getImageCredit(slug: string): ImageCreditRecord | null {
  return imageCredits[slug] ?? null;
}

export const imagesAvailable = {
  lists: Object.keys(lists),
  districts: Object.keys(districts),
};
