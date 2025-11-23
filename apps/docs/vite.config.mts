/// <reference types='vitest' />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig(() => ({
  root: import.meta.dirname,
  base: "https://relaxedleaf.github.io/react-flexy-panels/",
  cacheDir: "../../node_modules/.vite/apps/docs",
  server: {
    port: 4200,
    host: "localhost",
  },
  preview: {
    port: 4200,
    host: "localhost",
  },
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../../docs",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    exclude: ["react-flexy-panels"],
  },
  resolve: {
    alias: {
      "react-flexy-panels": path.resolve(
        __dirname,
        "../../packages/react-flexy-panels/src/index.ts"
      ),
    },
  },
}));
