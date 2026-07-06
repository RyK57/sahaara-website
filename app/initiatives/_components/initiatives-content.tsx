"use client";

import { BookOpen, FlaskConical, Stethoscope } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabPanelSection } from "@/components/content/tab-panel-section";
import type { InitiativeTab } from "@/lib/types/content";

const tabIcons = {
  stethoscope: Stethoscope,
  "book-open": BookOpen,
  "flask-conical": FlaskConical,
} as const;

function getTabIcon(tab: InitiativeTab) {
  const Icon = tabIcons[tab.icon];
  return <Icon className="size-4" strokeWidth={1.5} />;
}

interface InitiativesContentProps {
  tabs: InitiativeTab[];
}

export function InitiativesContent({ tabs }: InitiativesContentProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container px-4 md:px-6">
          <FadeIn
            onView={false}
            className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center"
          >
            <Badge
              variant="secondary"
              className="mb-2 border-primary-foreground/30 bg-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground"
            >
              3 Pillars, 1 Mission
            </Badge>
            <h1 className="page-hero-title">SAHAARA Initiatives</h1>
            <div className="mt-2 flex flex-row flex-wrap justify-center gap-2 md:gap-5">
              {tabs.map((tab) => (
                <Badge
                  key={tab.value}
                  className="flex items-center gap-1 border-none bg-primary-foreground/20 px-3 py-1.5 text-base text-primary-foreground"
                >
                  {getTabIcon(tab)}
                  {tab.label}
                </Badge>
              ))}
            </div>
            {/* <p className="page-hero-description mx-auto mt-5 max-w-2xl">
              SAHAARA bridges{" "}
              <span className="font-semibold text-accent">access</span>, spreads{" "}
              <span className="font-semibold text-accent">awareness</span>, and
              powers{" "}
              <span className="font-semibold text-accent">research</span>
              —transforming South Asian heart health from every angle.
            </p> */}
          </FadeIn>
        </div>
      </section>

      <Tabs defaultValue="access" className="w-full">
        <section className="page-section-accent border-b-0 pb-3 md:pb-4">
          <div className="container min-w-0 px-4 md:px-6">
            <TabsList
              variant="accent"
              className="mx-auto grid h-auto w-full max-w-5xl grid-cols-3 gap-2 bg-transparent p-0 md:gap-3"
            >
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="gap-2 rounded-lg px-3 py-3 md:py-3.5"
                >
                  {getTabIcon(tab)}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <FadeIn onView={false} className="container mx-auto max-w-5xl">
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0">
                <Card className="border-border/80 bg-card shadow-sm">
                  <CardContent className="flex flex-col gap-6 p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                        {getTabIcon(tab)}
                      </div>
                      <h2 className="text-xl font-semibold tracking-tight text-primary md:text-2xl">
                        {tab.label}
                      </h2>
                    </div>
                    <TabPanelSection
                      description={tab.description}
                      highlights={tab.highlights}
                      images={tab.images}
                      subSections={tab.subSections}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </FadeIn>
        </section>
      </Tabs>
    </>
  );
}
