import { PluginOption } from "vite";
import fs from "node:fs";

export const preserveUseClient = (): PluginOption => {
  return {
    name: "preserve-use-client",
    generateBundle(options, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type === "chunk" && chunk.facadeModuleId) {
          // Check if this is a component entry point (index.ts file)
          if (chunk.facadeModuleId.endsWith("/index.ts")) {
            try {
              // Read the index.ts file to find the actual component file
              const indexContent = fs.readFileSync(
                chunk.facadeModuleId,
                "utf8"
              );
              const exportMatch = indexContent.match(
                /export \* from ["']\.\/([^"']+)["']/
              );

              if (exportMatch) {
                const componentName = exportMatch[1];
                const componentPath = chunk.facadeModuleId.replace(
                  "/index.ts",
                  `/${componentName}.tsx`
                );

                // Check if the actual component file has "use client"
                if (fs.existsSync(componentPath)) {
                  const componentCode = fs.readFileSync(componentPath, "utf8");
                  if (componentCode.includes('"use client"')) {
                    // Add "use client" directive at the top for client components
                    chunk.code = '"use client";\n' + chunk.code;
                  }
                }
              }
            } catch (error) {
              // File might not exist or be readable, skip silently
            }
          }
        }
      }
    },
  };
};
