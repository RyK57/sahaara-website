import type { WorkshopRecipe } from "@/lib/types/content";

export const workshopRecipes: WorkshopRecipe[] = [
  {
    slug: "brown-jeera-rice",
    title: "Brown Jeera Rice",
    description: "Student-created workshop recipe, reviewed with a nutritionist.",
    pdfSrc: "/recipes/Brown%20Jeera%20Rice%20Recipe.pdf",
  },
  {
    slug: "butter-chicken-curry",
    title: "Butter Chicken Curry",
    description: "Student-created workshop recipe, reviewed with a nutritionist.",
    pdfSrc: "/recipes/Butter%20Chicken%20Curry%20Recipe.pdf",
  },
  {
    slug: "channa-masala",
    title: "Channa Masala",
    description: "Student-created workshop recipe, reviewed with a nutritionist.",
    pdfSrc: "/recipes/Channa%20Masala%20Cooking%20Workshop.pdf",
  },
  {
    slug: "cucumber-raita",
    title: "Cucumber Raita",
    description: "Student-created workshop recipe, reviewed with a nutritionist.",
    pdfSrc: "/recipes/Cucumber%20Raita%20South%20Asian%20Cooking%20Workshop.pdf",
  },
  {
    slug: "paneer-jalfrezi-wraps",
    title: "Paneer Jalfrezi Wraps",
    description: "Student-created workshop recipe, reviewed with a nutritionist.",
    pdfSrc: "/recipes/Paneer%20Jalfrezi%20Wraps.pdf",
  },
  {
    slug: "roti-flatbread",
    title: "Roti Flatbread",
    description: "Student-created workshop recipe, reviewed with a nutritionist.",
    pdfSrc: "/recipes/South%20Asian%20Cooking%20Workshop%20Roti%20Flatbread.pdf",
  },
  {
    slug: "sooji-halwa",
    title: "Sooji Halwa",
    description: "Student-created workshop recipe, reviewed with a nutritionist.",
    pdfSrc: "/recipes/Sooji%20Halwa%20Recipe.pdf",
  },
];

export function getWorkshopRecipe(slug: string) {
  return workshopRecipes.find((recipe) => recipe.slug === slug);
}
