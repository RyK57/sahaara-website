import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WorkshopRecipe } from "@/lib/types/content";

interface RecipeViewerProps {
  recipe: WorkshopRecipe;
}

export function RecipeViewer({ recipe }: RecipeViewerProps) {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <header className="shrink-0 border-b border-border bg-background">
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Button variant="ghost" asChild className="shrink-0">
            <Link
              href="/resources#workshop-recipes"
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back to recipes
            </Link>
          </Button>
          <div className="min-w-0 text-right">
            <p className="truncate text-sm font-medium text-foreground">
              {recipe.title}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              Student-created · nutritionist reviewed
            </p>
          </div>
        </div>
      </header>

      <iframe
        src={recipe.pdfSrc}
        title={`${recipe.title} recipe PDF`}
        className="min-h-0 w-full flex-1 border-0 bg-muted/20"
      />
    </div>
  );
}
