import fs from "fs";
import path from "path";
import type { ContentImage } from "@/lib/types/content";

export const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
]);

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function collectImageFiles(
  dir: string,
  baseDir: string,
  recursive = true,
  excludeSubdirs: Set<string> = new Set(),
): string[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (excludeSubdirs.has(entry.name)) continue;
      if (recursive) {
        files.push(
          ...collectImageFiles(fullPath, baseDir, recursive, excludeSubdirs),
        );
      }
      continue;
    }

    if (!IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) continue;

    files.push(path.relative(baseDir, fullPath).split(path.sep).join("/"));
  }

  return files;
}

interface LoadImagesOptions {
  recursive?: boolean;
  excludeSubdirs?: Set<string> | string[];
}

export function loadImagesFromPublicDir(
  publicDir: string,
  alt: string,
  options: LoadImagesOptions | boolean = {},
): ContentImage[] {
  const resolvedOptions =
    typeof options === "boolean" ? { recursive: options } : options;
  const recursive = resolvedOptions.recursive ?? false;
  const excludeSubdirs = new Set(resolvedOptions.excludeSubdirs ?? []);

  const absoluteDir = path.join(process.cwd(), "public", publicDir);
  const files = collectImageFiles(
    absoluteDir,
    absoluteDir,
    recursive,
    excludeSubdirs,
  );

  return files
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      src: `/${publicDir}/${file}`,
      alt,
    }));
}
