import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Sitemap({
      // METTEZ VOTRE VRAIE ADRESSE NETLIFY ICI :
      hostname: 'https://opheliebellissens.netlify.app', 
      dynamicRoutes: [
        '/',
        // Ajoutez ici les autres pages de votre site si vous en avez (ex: '/contact', '/a-propos')
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})