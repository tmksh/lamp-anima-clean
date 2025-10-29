import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && screenGraphPlugin()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // 画像の最適化
    assetsInlineLimit: 4096, // 4kb以下の画像はインライン化
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // 開発サーバーの最適化
    fs: {
      strict: false,
    },
  },
  // 画像の最適化設定
  optimizeDeps: {
    exclude: [],
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
