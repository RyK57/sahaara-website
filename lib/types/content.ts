export interface ContentImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface WorkshopItem {
  title: string;
  topics: string;
}

export interface EducationFlipCard {
  title: string;
  frontSrc: string;
  backSrc: string;
  frontAlt: string;
  backAlt: string;
}

export interface ImageRow {
  label?: string;
  images: ContentImage[];
}

export interface EducationMaterialsSection {
  title: string;
  description: string;
  cards: EducationFlipCard[];
}

export interface ContentSubSection {
  title: string;
  description: string;
  images: ContentImage[];
  note?: string;
  workshops?: WorkshopItem[];
  recipeLink?: {
    label: string;
    href: string;
  };
}

export interface InitiativeTab {
  value: string;
  label: string;
  icon: "stethoscope" | "book-open" | "flask-conical";
  description: string;
  images?: ContentImage[];
  imageRows?: ImageRow[];
  subSections?: ContentSubSection[];
  highlights?: string[];
  educationMaterials?: EducationMaterialsSection[];
}

export interface ResourceLink {
  title: string;
  description: string;
  href: string;
  img?: string;
}

export interface WorkshopRecipe {
  slug: string;
  title: string;
  description?: string;
  pdfSrc: string;
}

export interface MediaTab {
  value: string;
  label: string;
  icon: "stethoscope" | "chef-hat" | "heart-pulse" | "flask-conical" | "users";
  description: string;
  images?: ContentImage[];
}
