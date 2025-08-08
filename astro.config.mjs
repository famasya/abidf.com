// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://abidf.com",
  build: {
    // Inline CSS for critical styles to reduce requests
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Enable CSS code splitting to reduce render-blocking CSS
      cssCodeSplit: true,
      // Optimize chunk splitting
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor chunks to improve caching
            vendor: ["astro"],
          },
        },
      },
    },
  },
  compressHTML: true,
  // Enable prefetch for better performance
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
