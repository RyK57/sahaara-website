export interface SitePage {
  path: string;
  label: string;
  description: string;
}

export const sitePages: SitePage[] = [
  {
    path: "/",
    label: "Home",
    description:
      "Overview of SAHAARA, mission, pillars (Access, Awareness, Research), and ways to support.",
  },
  {
    path: "/leadership",
    label: "Leadership",
    description: "Meet SAHAARA's student leaders and board.",
  },
  {
    path: "/initiatives",
    label: "Initiatives",
    description:
      "Programs across Access (community screenings), Awareness (cooking & health workshops), and Research.",
  },
  {
    path: "/initiatives#access",
    label: "Access initiatives",
    description: "Community blood pressure and health screenings at temples and cultural centers.",
  },
  {
    path: "/initiatives#awareness",
    label: "Awareness initiatives",
    description:
      "UC Berkeley Nutritional Teaching Kitchen cooking workshops and Livermore Temple health workshop series.",
  },
  {
    path: "/initiatives#research",
    label: "Research initiatives",
    description:
      "Clinical guidelines, poster presentations, Prana Study, and Stanford survey work.",
  },
  {
    path: "/media",
    label: "Media",
    description:
      "Photo collage across Health Screenings, Cooking Workshops, Health Workshop Series, Research, and Club Events.",
  },
  {
    path: "/resources",
    label: "Resources",
    description:
      "External health links including MASALA Study, AHA, South Asian Heart Center, and CDC.",
  },
  {
    path: "/get-involved",
    label: "Get Involved",
    description: "Volunteer, donate, participate in research, or spread the word.",
  },
  {
    path: "/contact",
    label: "Contact",
    description: "Email, address, and EIN for SAHAARA.",
  },
  {
    path: "/support",
    label: "Donate",
    description: "Support SAHAARA's mission (donations coming soon).",
  },
];
