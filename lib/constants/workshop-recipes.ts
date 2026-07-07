import type { WorkshopRecipe } from "@/lib/types/content";

export const workshopRecipes: WorkshopRecipe[] = [
  {
    slug: "brown-jeera-rice",
    title: "Brown Jeera Rice",
    pdfSrc: "/recipes/Brown%20Jeera%20Rice%20Recipe.pdf",
  },
  {
    slug: "butter-chicken-curry",
    title: "Butter Chicken Curry",
    pdfSrc: "/recipes/Butter%20Chicken%20Curry%20Recipe.pdf",
  },
  {
    slug: "channa-masala",
    title: "Channa Masala",
    pdfSrc: "/recipes/Channa%20Masala%20Cooking%20Workshop.pdf",
  },
  {
    slug: "cucumber-raita",
    title: "Cucumber Raita",
    pdfSrc: "/recipes/Cucumber%20Raita%20South%20Asian%20Cooking%20Workshop.pdf",
  },
  {
    slug: "paneer-jalfrezi-wraps",
    title: "Paneer Jalfrezi Wraps",
    pdfSrc: "/recipes/Paneer%20Jalfrezi%20Wraps.pdf",
  },
  {
    slug: "roti-flatbread",
    title: "Roti Flatbread",
    pdfSrc: "/recipes/South%20Asian%20Cooking%20Workshop%20Roti%20Flatbread.pdf",
  },
  {
    slug: "sooji-halwa",
    title: "Sooji Halwa",
    pdfSrc: "/recipes/Sooji%20Halwa%20Recipe.pdf",
  },
];

export function getWorkshopRecipe(slug: string) {
  return workshopRecipes.find((recipe) => recipe.slug === slug);
}
