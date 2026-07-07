import { notFound } from "next/navigation";
import {
  getWorkshopRecipe,
  workshopRecipes,
} from "@/lib/constants/workshop-recipes";
import { RecipeViewer } from "./_components/recipe-viewer";

interface RecipePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return workshopRecipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getWorkshopRecipe(slug);

  if (!recipe) {
    return { title: "Recipe Not Found | SAHAARA" };
  }

  return {
    title: `${recipe.title} Recipe | SAHAARA`,
    description:
      recipe.description ??
      `Student-created ${recipe.title} recipe from a SAHAARA cooking workshop.`,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getWorkshopRecipe(slug);

  if (!recipe) notFound();

  return <RecipeViewer recipe={recipe} />;
}
