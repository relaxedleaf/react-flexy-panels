import * as path from "path";
import * as fs from "fs";

export const generateEntryPoints = ({ dirs }: { dirs: Array<string> }) => {
  const entries: Record<string, string> = {};

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) {
      console.warn("Directory not found:", dir);
      return {};
    }

    const entriesInsideDir = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .sort(); // Sort alphabetically for consistent output

    for (const entryName of entriesInsideDir) {
      const indexPath = path.join(dir, entryName, "index.ts");

      // Check if index.ts exists
      if (fs.existsSync(indexPath)) {
        // Use the exact folder name as the key (as requested)
        entries[entryName] = indexPath;
      }
    }
  }

  return entries;
};
