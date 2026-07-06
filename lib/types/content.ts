export interface ContentImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ContentSubSection {
  title: string;
  description: string;
  images: ContentImage[];
  note?: string;
}

export interface InitiativeTab {
  value: string;
  label: string;
  icon: "stethoscope" | "book-open" | "flask-conical";
  description: string;
  images?: ContentImage[];
  subSections?: ContentSubSection[];
  highlights?: string[];
}

export interface ResourceLink {
  title: string;
  description: string;
  href: string;
  img?: string;
}

export interface MediaTab {
  value: string;
  label: string;
  icon: "stethoscope" | "chef-hat" | "heart-pulse" | "flask-conical" | "users";
  description: string;
  images: ContentImage[];
}
