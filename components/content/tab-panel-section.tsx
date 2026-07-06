"use client";

import { Separator } from "@/components/ui/separator";
import { ImagePlaceholderGrid } from "@/components/content/image-placeholder-grid";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import type { ContentSubSection } from "@/lib/types/content";

interface TabPanelSectionProps {
  description: string;
  highlights?: string[];
  images?: ContentSubSection["images"];
  subSections?: ContentSubSection[];
}

export function TabPanelSection({
  description,
  highlights,
  images,
  subSections,
}: TabPanelSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      <FadeIn direction="up" delay={0.05}>
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </FadeIn>

      {highlights && highlights.length > 0 && (
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
        <FadeIn key={section.title} delay={index * 0.08}>
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
            </div>
            <ImagePlaceholderGrid images={section.images} columns={4} />
          </div>
        </FadeIn>
      ))}

      {images && images.length > 0 && (
        <FadeIn delay={0.1}>
          <ImagePlaceholderGrid images={images} columns={4} />
        </FadeIn>
      )}
    </div>
  );
}
