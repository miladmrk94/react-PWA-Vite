import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


let vite = '/vite.svg'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    includeAssets: [vite],
    manifest: {
      theme_color: '#ffffff',
      icons: [
        {
          src: vite,
          sizes: '512x512',
          type: 'image/svg+xml',
          purpose: 'any maskable'
        },
        {
          src: vite,
          sizes: '512x512',
          type: 'image/png',
        }
      ]
    },
  })
  ],
})
