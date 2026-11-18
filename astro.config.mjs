// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL pública del sitio: Astro la usa para armar enlaces absolutos (imagen para compartir y canonical).
  site: 'https://roberto-mendoza.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});