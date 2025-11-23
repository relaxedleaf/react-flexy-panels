/// <reference types='vitest' />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "path";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { preserveUseClient } from "../../utils/preserve-use-client";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { generateEntryPoints } from "../../utils/generateEntryPoints";

export default defineConfig(() => {
  const entries = generateEntryPoints({
    dirs: [path.join(__dirname, "src/components")],
  });
  return {
    root: import.meta.dirname,
    cacheDir: "../../node_modules/.vite/packages/react-flexy-panels",
    plugins: [
      react(),
      preserveUseClient(),
      dts({
        entryRoot: "src",
        tsconfigPath: path.join(import.meta.dirname, "tsconfig.lib.json"),
      }),
    ],
    build: {
      outDir: "./dist",
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      lib: {
        entry: {
          index: "src/index.ts",
          ...entries,
        },
        name: "react-flexy-panels",
        fileName: (format, entryName) => `${entryName}.js`,
        // Change this to the formats you want to support.
        // Don't forget to update your package.json as well.
        formats: ["es" as const],
      },
      rollupOptions: {
        // External packages that should not be bundled into your library.
        external: ["react", "react-dom", "react/jsx-runtime"],
        // Preserve entry signatures for better tree-shaking in consuming applications
        preserveEntrySignatures: "strict" as const,
        // Explicitly enable tree-shaking optimizations
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false,
          unknownGlobalSideEffects: false,
        },
      },
    },
  };
});
