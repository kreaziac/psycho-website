import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), preact(), tailwind()]
});