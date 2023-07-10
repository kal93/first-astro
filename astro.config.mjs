import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://silly-salamander-7605d5.netlify.app',
  output: 'hybrid',
  integrations: [react(), solidJs()],
  adapter: netlify()
});