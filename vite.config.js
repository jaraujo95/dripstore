import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dripstore/",
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects', // Path to your _redirects file
          dest: '' // The directory to copy the file to
        }
      ]
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})