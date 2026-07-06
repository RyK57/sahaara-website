import type { ContentImage } from "@/lib/types/content";
import { loadImagesFromPublicDir } from "@/lib/media/image-files";

/** Reads every image under `public/media` — drop files in and they show on /media. */
export function loadMediaImages(): ContentImage[] {
  return loadImagesFromPublicDir("media", "SAHAARA event photo", true);
}
