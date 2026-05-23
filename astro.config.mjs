import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://top10-heidelberg.de",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/impressum") &&
        !page.includes("/datenschutz") &&
        !page.includes("/agb") &&
        !page.includes("/kontakt") &&
        !page.includes("/404"),
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
