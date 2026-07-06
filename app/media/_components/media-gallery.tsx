"use client";

import { MediaPhotoCollage } from "@/components/content/media-photo-collage";
import { FadeIn } from "@/components/motion/fade-in";
import { allMediaImages, mediaIntro } from "@/lib/constants/media";

export function MediaGallery() {
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

      <section className="bg-background px-2 py-10 sm:px-4 md:py-16 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <MediaPhotoCollage images={allMediaImages} />
        </div>
      </section>
    </>
  );
}
