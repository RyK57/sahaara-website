import { initiativeTabMetadata } from "@/lib/constants/initiatives";
import type { InitiativeTab } from "@/lib/types/content";
import { loadImagesFromPublicDir, slugify } from "@/lib/media/image-files";

/** Merges initiative copy with images from `public/initiatives/{tab}/{subsection?}/`. */
export function loadInitiativeTabs(): InitiativeTab[] {
  return initiativeTabMetadata.map((tab) => {
    const images = loadImagesFromPublicDir(
      `initiatives/${tab.value}`,
      "SAHAARA initiative photo",
    );

    const subSections = tab.subSections?.map((section) => ({
      ...section,
      images: loadImagesFromPublicDir(
        `initiatives/${tab.value}/${slugify(section.title)}`,
        "SAHAARA initiative photo",
      ),
    }));

    return {
      ...tab,
      images: images.length > 0 ? images : undefined,
      subSections,
    };
  });
}
