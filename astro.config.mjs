import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: "https://timtwiest.nl",
  integrations: [svelte(), sitemap(), compress({
    img: false
  })],
  markdown: {
    shikiConfig: {
      theme: "material-default",
      wrap: true
    }
  }
});
