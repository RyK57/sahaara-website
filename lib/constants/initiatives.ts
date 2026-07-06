import type { InitiativeTab } from "@/lib/types/content";

export const initiativeTabs: InitiativeTab[] = [
  {
    value: "access",
    label: "Access",
    icon: "stethoscope",
    description:
      "SAHAARA brings blood pressure and health screenings directly to community centers, temples, and cultural gatherings—meeting people where they already gather. By reducing transportation, language, and familiarity barriers, we make preventive healthcare screening more accessible for South Asian adults across the Bay Area.",
    highlights: [
      "Community-based biometric screenings at temples and cultural centers",
      "Partnership with Jeeva Clinic for BP, glucose, and related vitals",
      "Culturally familiar settings that encourage proactive preventive care",
    ],
    images: [
      {
        src: "/images/initiatives/access/community-screening-1.jpg",
        alt: "Community blood pressure screening at a cultural center",
        caption: "Community screening",
      },
      {
        src: "/images/initiatives/access/community-screening-2.jpg",
        alt: "Volunteers assisting with health screenings",
        caption: "Volunteer outreach",
      },
      {
        src: "/images/initiatives/access/community-screening-3.jpg",
        alt: "Screening station setup at a temple event",
        caption: "Temple screening",
      },
      {
        src: "/images/initiatives/access/community-screening-4.jpg",
        alt: "Participants receiving blood pressure checks",
        caption: "BP screening",
      },
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
        note: "Recipes from workshops can be shared here later.",
        images: [
          {
            src: "/images/initiatives/awareness/cooking-workshop-1.jpg",
            alt: "Cooking workshop with South Asian ingredients",
            caption: "Teaching kitchen",
          },
          {
            src: "/images/initiatives/awareness/cooking-workshop-2.jpg",
            alt: "Participants preparing a healthy meal",
            caption: "Hands-on cooking",
          },
          {
            src: "/images/initiatives/awareness/cooking-workshop-3.jpg",
            alt: "Finished healthy South Asian dishes",
            caption: "Healthy plates",
          },
          {
            src: "/images/initiatives/awareness/cooking-workshop-4.jpg",
            alt: "Group photo at a cooking workshop",
            caption: "Workshop group",
          },
        ],
      },
      {
        title: "Health Workshop Series",
        description:
          "At Livermore Temple and other community venues, SAHAARA runs a multi-session health workshop series covering blood pressure management, diabetes prevention, nutrition, stress reduction, medication management, and physical activity—empowering families with actionable knowledge.",
        images: [
          {
            src: "/images/initiatives/awareness/health-workshop-1.jpg",
            alt: "Health workshop presentation on blood pressure",
            caption: "Blood pressure",
          },
          {
            src: "/images/initiatives/awareness/health-workshop-2.jpg",
            alt: "Workshop on diabetes and nutrition",
            caption: "Diabetes & nutrition",
          },
          {
            src: "/images/initiatives/awareness/health-workshop-3.jpg",
            alt: "Stress management and physical activity session",
            caption: "Stress & activity",
          },
          {
            src: "/images/initiatives/awareness/health-workshop-4.jpg",
            alt: "Medication management workshop at Livermore Temple",
            caption: "Medication management",
          },
        ],
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
    images: [
      {
        src: "/images/initiatives/research/guideline-work-1.jpg",
        alt: "Clinical guideline research collaboration",
        caption: "Guideline work",
      },
      {
        src: "/images/initiatives/research/poster-presentation-1.jpg",
        alt: "Research poster presentation at a conference",
        caption: "Poster presentation",
      },
      {
        src: "/images/initiatives/research/study-flyer-1.jpg",
        alt: "Prana Study community research flyer",
        caption: "Prana Study",
      },
      {
        src: "/images/initiatives/research/research-team-1.jpg",
        alt: "SAHAARA research team at a community event",
        caption: "Research team",
      },
    ],
  },
];
