"use client";

import { useMemo } from "react";
import { MediaPhotoCollage } from "@/components/content/media-photo-collage";
import { FadeIn } from "@/components/motion/fade-in";
import { mediaIntro } from "@/lib/constants/media";
import { scatterImages } from "@/lib/media/scatter-images";
import type { ContentImage } from "@/lib/types/content";

interface MediaGalleryProps {
  images: ContentImage[];
}

export function MediaGallery({ images }: MediaGalleryProps) {
  const scatteredImages = useMemo(() => scatterImages(images), [images]);

  return (
    <>
      <section className="page-hero-accent">
        <div className="container px-4 md:px-6">
          <FadeIn onView={false} className="mx-auto max-w-6xl text-center">
            <h1 className="page-hero-title-accent">Media</h1>
            <p className="page-hero-description-accent">{mediaIntro}</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-4 pb-12 pt-0 sm:px-6 md:pb-16 lg:px-8">
        <div className="container mx-auto max-w-7xl overflow-visible">
          <MediaPhotoCollage images={scatteredImages} />
        </div>
      </section>
    </>
  );
}
