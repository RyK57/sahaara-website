import type { MediaTab } from "@/lib/types/content";

export const mediaIntro =
  "A visual look at SAHAARA in action — community screenings, workshops, research, and club events across the Bay Area.";

/** Category blurbs for chat / SEO — photos load automatically from `public/media`. */
export const mediaTabs: MediaTab[] = [
  {
    value: "health-screenings",
    label: "Health Screenings",
    icon: "stethoscope",
    description:
      "Community blood pressure and biometric screenings at temples, cultural centers, and Bay Area gatherings. SAHAARA meets people where they already are to reduce barriers to preventive care.",
  },
  {
    value: "cooking-workshops",
    label: "Cooking Workshops",
    icon: "chef-hat",
    description:
      "Hands-on healthy South Asian cooking classes in partnership with the UC Berkeley Nutritional Teaching Kitchen. Participants learn heart-healthy twists on familiar family recipes.",
  },
  {
    value: "health-workshop-series",
    label: "Health Workshop Series",
    icon: "heart-pulse",
    description:
      "Multi-session education at Livermore Temple and other community venues — covering blood pressure, diabetes, nutrition, stress, medication management, and physical activity.",
  },
  {
    value: "research",
    label: "Research",
    icon: "flask-conical",
    description:
      "Poster presentations, community research outreach, and events highlighting SAHAARA's clinical guideline work, Prana Study, and Stanford survey efforts.",
  },
  {
    value: "club-events",
    label: "Club Events & Socials",
    icon: "users",
    description:
      "SAHAARA club gatherings, volunteer team events, outreach days, and socials that build community around South Asian health advocacy at UC Berkeley and beyond.",
  },
];
