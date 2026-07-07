import type { InitiativeTab } from "@/lib/types/content";

/** Initiative copy only — photos load from `public/initiatives/`. */
export const initiativeTabMetadata: Omit<InitiativeTab, "images" | "imageRows" | "educationMaterials">[] = [
  {
    value: "access",
    label: "Access",
    icon: "stethoscope",
    description:
      "SAHAARA brings blood pressure and health screenings directly to temples, churches, mosques, and other cultural centers—meeting people where they already gather. By reducing transportation, language, and familiarity barriers, we make preventive healthcare screening more accessible for South Asian adults across the Bay Area.",
    highlights: [
      "Community-based biometric screenings at temples, churches, mosques, and other cultural centers",
      "Partnership with Jeeva Clinic and South Asian Heart Center for BP, BMI, and related vitals",
      "Culturally familiar settings that encourage proactive preventive care",
    ],
  },
  {
    value: "awareness",
    label: "Awareness",
    icon: "book-open",
    description:
      "Education is at the heart of lasting health change. Through hands-on workshops and culturally tailored programming, SAHAARA helps community members build practical skills for nutrition, stress management, medication adherence, and physical activity.",
    subSections: [
      {
        title: "Cooking Workshops",
        description:
          "In partnership with the UC Berkeley Nutritional Teaching Kitchen, SAHAARA hosts healthy South Asian cooking classes. Participants learn how to prepare familiar meals with heart-healthy ingredients and techniques—bridging tradition and evidence-based nutrition.",
        note: "Recipes are student-created and reviewed with a nutritionist before sharing with the community.",
        recipeLink: {
          label: "View workshop recipes",
          href: "/resources#workshop-recipes",
        },
        images: [],
      },
      {
        title: "Health Workshop Series",
        description:
          "At Livermore Temple and other community venues, SAHAARA runs a multi-session health workshop series led alongside healthcare professionals—from nutritionists and pharmacists to physicians—providing direct, community-centered education and empowering families with actionable knowledge they can use at home.",
        workshops: [
          {
            title: "Workshop 1",
            topics: "Blood Pressure and Diabetes",
          },
          {
            title: "Workshop 2",
            topics: "Nutrition",
          },
          {
            title: "Workshop 3",
            topics: "Stress and Medication Management + Physical Activity",
          },
        ],
        images: [],
      },
    ],
  },
  {
    value: "research",
    label: "Research",
    icon: "flask-conical",
    description:
      "SAHAARA contributes to the evidence base for South Asian cardiovascular health through clinical guideline work, conference poster presentations, and ongoing community research studies that inform smarter, more responsive programming.",
    highlights: [
      "Clinical guideline development for South Asian cardiovascular care",
      "Poster presentations at academic and community conferences",
      "Prana Study and Stanford Survey on Bay Area South Asian health behaviors",
    ],
  },
];

/** @deprecated Use loadInitiativeTabs() for pages; kept for chat metadata. */
export const initiativeTabs: InitiativeTab[] = initiativeTabMetadata.map(
  (tab) => ({ ...tab }),
);
