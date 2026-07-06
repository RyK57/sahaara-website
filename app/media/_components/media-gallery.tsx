"use client";

import {
  ChefHat,
  FlaskConical,
  HeartPulse,
  Stethoscope,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { MediaPhotoCollage } from "@/components/content/media-photo-collage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mediaIntro, mediaTabs } from "@/lib/constants/media";
import type { MediaTab } from "@/lib/types/content";

const tabIcons = {
  stethoscope: Stethoscope,
  "chef-hat": ChefHat,
  "heart-pulse": HeartPulse,
  "flask-conical": FlaskConical,
  users: Users,
} as const;

function getTabIcon(tab: MediaTab) {
  const Icon = tabIcons[tab.icon];
  return <Icon className="size-4" strokeWidth={1.5} />;
}

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

      <Tabs defaultValue="health-screenings" className="w-full">
        <section className="page-section-accent">
          <div className="container min-w-0 px-4 md:px-6">
            <div className="-mx-4 overflow-x-auto overscroll-x-contain px-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] lg:mx-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
              <TabsList
                variant="accent"
                className="mx-auto flex h-auto w-max snap-x snap-mandatory gap-2 bg-transparent p-0 lg:grid lg:w-full lg:max-w-6xl lg:snap-none lg:grid-cols-5 lg:gap-3"
              >
                {mediaTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex h-auto flex-none shrink-0 snap-start gap-1.5 whitespace-nowrap rounded-lg px-3 py-2.5 text-xs sm:gap-2 sm:py-3 sm:text-sm lg:min-w-0 lg:w-full lg:flex-1 lg:shrink lg:whitespace-normal lg:[&>span]:min-w-0 lg:[&>span]:flex-col lg:[&>span]:gap-1 lg:[&>span]:items-center xl:[&>span]:flex-row"
                  >
                    {getTabIcon(tab)}
                    <span className="leading-tight lg:min-w-0 lg:text-center lg:text-balance">
                      {tab.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
        </section>

        <section className="bg-background px-2 py-10 sm:px-4 md:py-16 lg:px-6">
          <FadeIn className="container mx-auto max-w-6xl">
            {mediaTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0">
                <div className="mb-5 flex min-w-0 items-start gap-3 px-2 sm:mb-6 sm:px-0">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground sm:size-10 sm:rounded-xl">
                    {getTabIcon(tab)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-balance text-lg font-semibold tracking-tight text-primary sm:text-xl md:text-2xl">
                      {tab.label}
                    </h2>
                    <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                      {tab.description}
                    </p>
                  </div>
                </div>
                <MediaPhotoCollage images={tab.images} />
              </TabsContent>
            ))}
          </FadeIn>
        </section>
      </Tabs>
    </>
  );
}
