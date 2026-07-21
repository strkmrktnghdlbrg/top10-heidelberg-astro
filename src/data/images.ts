/**
 * Automatisches Image-Registry: scanne public/images/lists/ zur Build-Zeit
 * und biete `getImage(slug)` an. Wenn der Slug eines Top10-Lists eine
 * passende .jpg hat, gib den /images/...-Pfad zurück, sonst null
 * (Komponente fällt dann auf HueGradient zurück).
 *
 * Hinweis: public/images/districts/ wurde entfernt — jede dortige Datei
 * war ein 1:1-Duplikat der gleichnamigen lists/-Datei und wurde nie
 * ausgeliefert (getImage prüfte immer zuerst lists/). Reiner Repo-Ballast.
 *
 * Attribution: imageCredits aus image-credits.ts wird verheiratet.
 */

import { imageCredits, type ImageCreditRecord } from "./image-credits";

const listMods = import.meta.glob<string>("/public/images/lists/*.jpg", { eager: true, query: "?url", import: "default" });

const byBasename = (mods: Record<string, string>) => {
  const out: Record<string, string> = {};
  for (const path of Object.keys(mods)) {
    const m = path.match(/\/([^/]+)\.jpg$/);
    if (m) out[m[1]] = "/" + path.split("/public/").pop()!;
  }
  return out;
};

const lists = byBasename(listMods);

export function getImage(slug: string): string | null {
  return lists[slug] ?? null;
}

export function getImageCredit(slug: string): ImageCreditRecord | null {
  return imageCredits[slug] ?? null;
}

export const imagesAvailable = {
  lists: Object.keys(lists),
};
