import { initiativeTabMetadata } from "@/lib/constants/initiatives";
import type {
  EducationMaterialsSection,
  InitiativeTab,
} from "@/lib/types/content";
import { loadImagesFromPublicDir, slugify } from "@/lib/media/image-files";

const RESEARCH_IMAGE_EXCLUDES = new Set([
  "clinical-guidelines",
  "patient-education",
]);

function loadResearchTabImages() {
  return loadImagesFromPublicDir(
    "initiatives/research",
    "SAHAARA research photo",
    {
      excludeSubdirs: RESEARCH_IMAGE_EXCLUDES,
    },
  );
}

function loadEducationMaterials(): EducationMaterialsSection[] {
  const sections: EducationMaterialsSection[] = [
    {
      title: "South Asian Clinical Guidelines",
      description:
        "Information on South Asian-specific clinical guidelines we have compiled after reviewing the literature. Click a card to flip it and explore the evidence behind each recommendation.",
      cards: [
        {
          title: "South Asian-Tailored Clinical Guidelines",
          frontSrc:
            "/initiatives/research/clinical-guidelines/front.png",
          backSrc: "/initiatives/research/clinical-guidelines/back.png",
          frontAlt:
            "South Asian-tailored clinical guidelines threshold comparisons",
          backAlt:
            "South Asian clinical guidelines literature and key considerations",
        },
      ],
    },
    {
      title: "Patient Education",
      description:
        "Information on South Asian-specific clinical guidelines we have compiled after reviewing the literature. Click to flip the card and explore the evidence on the back.",
      cards: [
        {
          title: "Vitamin D",
          frontSrc:
            "/initiatives/research/patient-education/vitamin-d-front.png",
          backSrc:
            "/initiatives/research/patient-education/vitamin-d-back.png",
          frontAlt:
            "Vitamin D deficiency symptoms and screening for South Asian populations",
          backAlt:
            "How to improve vitamin D levels for South Asian populations",
        },
      ],
    },
  ];

  return sections.filter((section) =>
    section.cards.every(
      (card) => card.frontSrc && card.backSrc,
    ),
  ) as EducationMaterialsSection[];
}

/** Merges initiative copy with images from `public/initiatives/{tab}/{subsection?}/`. */
export function loadInitiativeTabs(): InitiativeTab[] {
  return initiativeTabMetadata.map((tab) => {
    if (tab.value === "access") {
      const imageRows = [
        {
          label: "Community screenings",
          images: loadImagesFromPublicDir(
            "initiatives/access/first-row",
            "SAHAARA community screening photo",
          ),
        },
        {
          label: "On-site health access",
          images: loadImagesFromPublicDir(
            "initiatives/access/second-row",
            "SAHAARA community screening photo",
          ),
        },
      ].filter((row) => row.images.length > 0);

      return {
        ...tab,
        imageRows: imageRows.length > 0 ? imageRows : undefined,
      };
    }

    if (tab.value === "research") {
      const images = loadResearchTabImages();

      return {
        ...tab,
        images: images.length > 0 ? images : undefined,
        educationMaterials: loadEducationMaterials(),
      };
    }

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
