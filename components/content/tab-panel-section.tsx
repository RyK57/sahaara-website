"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ImagePlaceholderGrid } from "@/components/content/image-placeholder-grid";
import { FlipCard } from "@/components/content/flip-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import type { ContentSubSection, EducationMaterialsSection, ImageRow } from "@/lib/types/content";

interface TabPanelSectionProps {
  description: string;
  highlights?: string[];
  images?: ContentSubSection["images"];
  imageRows?: ImageRow[];
  subSections?: ContentSubSection[];
  educationMaterials?: EducationMaterialsSection[];
}

export function TabPanelSection({
  description,
  highlights,
  images,
  imageRows,
  subSections,
  educationMaterials,
}: TabPanelSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      <FadeIn direction="up" delay={0.05} onView={false}>
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </FadeIn>

      {highlights && highlights.length > 0 && (
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" eager>
          {highlights.map((item) => (
            <StaggerItem key={item}>
              <div className="rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground transition-shadow hover:shadow-md">
                <span className="mr-2 text-accent">•</span>
                {item}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {subSections?.map((section, index) => (
        <FadeIn key={section.title} delay={index * 0.08} onView={false}>
          <div className="flex flex-col gap-5">
            {index > 0 && <Separator className="bg-border" />}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold tracking-tight text-primary">
                {section.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {section.description}
              </p>
              {section.note && (
                <p className="text-sm italic text-muted-foreground/80">
                  {section.note}
                </p>
              )}
              {section.recipeLink && (
                <Link
                  href={section.recipeLink.href}
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  {section.recipeLink.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              )}
            </div>

            {section.workshops && section.workshops.length > 0 && (
              <Stagger className="grid gap-3 sm:grid-cols-3" eager>
                {section.workshops.map((workshop) => (
                  <StaggerItem key={workshop.title}>
                    <div className="h-full rounded-lg border border-border bg-secondary/30 px-4 py-4">
                      <p className="text-sm font-semibold text-primary">
                        {workshop.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {workshop.topics}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            )}

            <ImagePlaceholderGrid images={section.images} columns={4} eager />
          </div>
        </FadeIn>
      ))}

      {imageRows?.map((row, index) => (
        <FadeIn key={row.label ?? `row-${index}`} delay={0.1 + index * 0.05} onView={false}>
          <div className="flex flex-col gap-4">
            {row.label && (
              <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {row.label}
              </h3>
            )}
            <ImagePlaceholderGrid images={row.images} columns={4} eager fit="contain" />
          </div>
        </FadeIn>
      ))}

      {images && images.length > 0 && (
        <FadeIn delay={0.1} onView={false}>
          <ImagePlaceholderGrid images={images} columns={4} eager />
        </FadeIn>
      )}

      {educationMaterials && educationMaterials.length > 0 && (
        <FadeIn delay={0.12} onView={false}>
          <div className="flex flex-col gap-5">
            <Separator className="bg-border" />
            <div className="grid gap-6 md:grid-cols-2 md:items-start">
              {educationMaterials.map((section) => (
                <div
                  key={section.title}
                  className="flex flex-col gap-5 rounded-2xl border border-border bg-secondary/20 p-5 md:p-6"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-primary">
                      {section.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {section.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    {section.cards.map((card) => (
                      <FlipCard
                        key={card.title}
                        {...card}
                        className="w-full max-w-md"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
