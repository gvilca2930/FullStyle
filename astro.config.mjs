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
          'whatsapp',
        ],
        lucide: [
          'arrow-down',
          'arrow-up-right',
          'badge-check',
          'check',
          'chevron-left',
          'chevron-right',
          'clock',
          'clock-3',
          'crosshair',
          'image',
          'mail',
          'map-pin',
          'menu',
          'message-circle',
          'navigation',
          'package',
          'phone',
          'scissors',
          'sparkles',
          'star',
          'user-round',
          'x',
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
