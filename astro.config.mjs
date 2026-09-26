import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: process.env.SITE_URL,
  output: 'static',

  integrations: [
    icon({
      include: {
        'simple-icons': [
          'instagram',
          'facebook',
          'tiktok',
        ],
      },
    }),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});