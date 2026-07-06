import type { MediaTab } from "@/lib/types/content";

export const mediaIntro =
  "A visual look at SAHAARA in action — community screenings, workshops, research, and club events across the Bay Area.";

export const mediaTabs: MediaTab[] = [
  {
    value: "health-screenings",
    label: "Health Screenings",
    icon: "stethoscope",
    description:
      "Community blood pressure and biometric screenings at temples, cultural centers, and Bay Area gatherings. SAHAARA meets people where they already are to reduce barriers to preventive care.",
    images: [
      {
        src: "/images/media/health-screenings/screening-01.jpg",
        alt: "Community health screening setup",
        caption: "Screening station",
      },
      {
        src: "/images/media/health-screenings/screening-02.jpg",
        alt: "Blood pressure check at a cultural center",
        caption: "BP screening",
      },
      {
        src: "/images/media/health-screenings/screening-03.jpg",
        alt: "Volunteers assisting with vitals",
        caption: "Volunteer outreach",
      },
      {
        src: "/images/media/health-screenings/screening-04.jpg",
        alt: "Participants at a temple screening event",
        caption: "Temple screening",
      },
    ],
  },
  {
    value: "cooking-workshops",
    label: "Cooking Workshops",
    icon: "chef-hat",
    description:
      "Hands-on healthy South Asian cooking classes in partnership with the UC Berkeley Nutritional Teaching Kitchen. Participants learn heart-healthy twists on familiar family recipes.",
    images: [
      {
        src: "/images/media/cooking-workshops/workshop-01.jpg",
        alt: "Cooking workshop with South Asian ingredients",
        caption: "Teaching kitchen",
      },
      {
        src: "/images/media/cooking-workshops/workshop-02.jpg",
        alt: "Participants preparing a healthy meal",
        caption: "Hands-on cooking",
      },
      {
        src: "/images/media/cooking-workshops/workshop-03.jpg",
        alt: "Finished healthy South Asian dishes",
        caption: "Healthy plates",
      },
      {
        src: "/images/media/cooking-workshops/workshop-04.jpg",
        alt: "Group photo at a cooking workshop",
        caption: "Workshop group",
      },
    ],
  },
  {
    value: "health-workshop-series",
    label: "Health Workshop Series",
    icon: "heart-pulse",
    description:
      "Multi-session education at Livermore Temple and other community venues — covering blood pressure, diabetes, nutrition, stress, medication management, and physical activity.",
    images: [
      {
        src: "/images/media/health-workshops/workshop-01.jpg",
        alt: "Health workshop presentation on blood pressure",
        caption: "Blood pressure",
      },
      {
        src: "/images/media/health-workshops/workshop-02.jpg",
        alt: "Diabetes and nutrition education session",
        caption: "Diabetes & nutrition",
      },
      {
        src: "/images/media/health-workshops/workshop-03.jpg",
        alt: "Stress and physical activity workshop",
        caption: "Stress & activity",
      },
      {
        src: "/images/media/health-workshops/workshop-04.jpg",
        alt: "Medication management session at Livermore Temple",
        caption: "Medication management",
      },
    ],
  },
  {
    value: "research",
    label: "Research",
    icon: "flask-conical",
    description:
      "Poster presentations, community research outreach, and events highlighting SAHAARA's clinical guideline work, Prana Study, and Stanford survey efforts.",
    images: [
      {
        src: "/images/media/research/research-01.jpg",
        alt: "Research poster presentation",
        caption: "Poster presentation",
      },
      {
        src: "/images/media/research/research-02.jpg",
        alt: "Community research discussion",
        caption: "Research event",
      },
      {
        src: "/images/media/research/research-03.jpg",
        alt: "Prana Study community flyer table",
        caption: "Prana Study",
      },
      {
        src: "/images/media/research/research-04.jpg",
        alt: "SAHAARA research team at an event",
        caption: "Research team",
      },
    ],
  },
  {
    value: "club-events",
    label: "Club Events & Socials",
    icon: "users",
    description:
      "SAHAARA club gatherings, volunteer team events, outreach days, and socials that build community around South Asian health advocacy at UC Berkeley and beyond.",
    images: [
      {
        src: "/images/media/club-events/event-01.jpg",
        alt: "Club social gathering",
        caption: "Club social",
      },
      {
        src: "/images/media/club-events/event-02.jpg",
        alt: "Volunteer team at a community event",
        caption: "Volunteers",
      },
      {
        src: "/images/media/club-events/event-03.jpg",
        alt: "South Asian community outreach day",
        caption: "Outreach",
      },
      {
        src: "/images/media/club-events/event-04.jpg",
        alt: "SAHAARA club members at an event",
        caption: "Club event",
      },
    ],
  },
];
