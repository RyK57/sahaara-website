"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Target,
  Users,
  ArrowRight,
  Stethoscope,
  GraduationCap,
  Sparkles,
  BoneIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const statSlides = [
  {
    icon: Activity,
    value: "45%",
    label: "Higher cardiovascular risk",
    subtext: "vs. European ancestry",
  },
  {
    icon: Heart,
    value: "46%",
    label: "Hypertension prevalence",
    subtext: "vs. ~32% in White adults",
  },
  {
    icon: Target,
    value: "~30%",
    label: "Diabetes prevalence",
    subtext: "in some South Asian groups",
  },
  {
    icon: Heart,
    value: "2x",
    label: "Risk for heart disease",
    subtext: "vs. non-South Asians",
  },  
  {
    icon: BoneIcon,
    value: "1.5x",  
    label: "Risk for diabetes",
    subtext: "vs. non-South Asians",
  },  
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-primary/5 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-accent/15">
              <Heart className="size-7 text-accent" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">
              About SAHARAA
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              South Asian Health Access, Awareness & Research Alliance
            </p>
            <Badge variant="secondary" className="mt-4 bg-primary/10 text-primary border-primary/20">
              501(c) Nonprofit · UC Berkeley
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Stats Carousel */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-accent">
              The numbers that drive our mission
            </p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {statSlides.map((stat, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                  >
                    <Card className="border-border/80 bg-card/50 transition-colors hover:border-accent/30 hover:bg-accent/5">
                      <CardHeader className="pb-2">
                        <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-accent/15">
                          <stat.icon className="size-5 text-accent" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-primary">
                          {stat.value}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {stat.label}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">
                          {stat.subtext}
                        </p>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 hidden md:flex" />
              <CarouselNext className="-right-4 hidden md:flex" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Mission & Purpose Tabs */}
      <section className="border-y border-border bg-accent/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-3 bg-muted/50 p-1">
                <TabsTrigger
                  value="mission"
                  className="gap-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:border-accent/30"
                >
                  <Heart className="size-4 text-accent" />
                  Mission
                </TabsTrigger>
                <TabsTrigger
                  value="purpose"
                  className="gap-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:border-accent/30"
                >
                  <Target className="size-4 text-primary" />
                  Purpose
                </TabsTrigger>
                <TabsTrigger
                  value="approach"
                  className="gap-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:border-accent/30"
                >
                  <Stethoscope className="size-4 text-accent" />
                  Approach
                </TabsTrigger>
              </TabsList>

              <TabsContent value="mission" className="mt-0">
                <Card className="border-border/80 bg-background/80">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-primary">
                      <Heart className="size-5 text-accent animate-pulse" />
                      The Challenge
                    </CardTitle>
                    <CardDescription className="text-base flex gap-2 items-center">
                      <span>
                        South Asian communities face urgent public health threats from cardiovascular & metabolic diseases.
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-destructive/20 text-destructive text-xs font-bold">
                        AHA & SAHC identified
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Stat Card 1 */}
                      <div className="rounded-lg border border-border/20 bg-accent/10 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                        <span className="inline-flex items-center justify-center size-10 rounded-full bg-accent/20 mb-3">
                          <Activity className="size-5 text-accent" />
                        </span>
                        <h4 className="text-lg font-semibold text-primary mb-2">Elevated Risk & Early Onset</h4>
                        <p className="text-sm text-muted-foreground">
                          Higher rates of hypertension, type 2 diabetes, and atherosclerotic cardiovascular disease. These often start at younger ages and lower BMIs than among non-South Asians in the US.
                        </p>
                      </div>

                      {/* Stat Card 2 */}
                      <div className="rounded-lg border border-border/20 bg-primary/10 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                        <span className="inline-flex items-center justify-center size-10 rounded-full bg-primary/10 mb-3">
                          <Target className="size-5 text-primary" />
                        </span>
                        <h4 className="text-lg font-semibold text-primary mb-2">Limited Detection</h4>
                        <p className="text-sm text-muted-foreground">
                          Many South Asian adults fall into intermediate/high 10-year CVD risk, but awareness, screening, & early detection are lacking. Undiagnosed or undertreated cases are common.
                        </p>
                      </div>

                      {/* Stat Card 3 */}
                      <div className="rounded-lg border border-border/20 bg-background p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                        <span className="inline-flex items-center justify-center size-10 rounded-full bg-muted/20 mb-3">
                          <Stethoscope className="size-5 text-accent" />
                        </span>
                        <h4 className="text-lg font-semibold text-primary mb-2">Actionable Solutions</h4>
                        <p className="text-sm text-muted-foreground">
                          Much of this burden could be reduced with earlier screenings, lifestyle interventions, and proactive primary care for South Asian adults.
                        </p>
                      </div>
                    </div>

                    <Separator className="my-7" />

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-2">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/30">
                        <span className="text-sm text-primary font-medium">Did you know?</span>
                        <Separator orientation="vertical" className="h-5" />
                        <span className="text-xs text-muted-foreground">South Asians have a 2x risk for heart disease vs. others</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-border/30">
                        <span className="text-xs text-primary font-medium">Action:</span> 
                        <span className="text-xs text-muted-foreground">Engage with regular checkups and join our community screenings!</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>


              <TabsContent value="purpose" className="mt-0">
                <Card className="border-border/80 bg-background/80">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-primary">
                      <Target className="size-5 text-accent" />
                      Why SAHARAA Exists
                    </CardTitle>
                    <CardDescription className="text-base">
                      <div className="flex w-full justify-center my-2 mb-4">
                        <Image src="/cal.svg" alt="UC Berkeley" width={120} height={120} />
                      </div>
                      Founded by UC Berkeley students to address health
                      disparities while centering public health and community.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Through community-based screenings, culturally relevant
                      health education, and research surveys aimed at
                      understanding the health needs of South Asian communities
                      in the Bay Area, SAHARAA works to improve awareness, expand
                      access to preventive care, and help reduce gaps in
                      cardiovascular and metabolic health outcomes.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="approach" className="mt-0">
                <Card className="border-border/80 bg-background/80">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-primary">
                      <Stethoscope className="size-5 text-accent" />
                      How We Work
                    </CardTitle>
                    <CardDescription className="text-base">
                      Three pillars of our community health initiatives.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="flex flex-col gap-2 rounded-lg border border-border/60 bg-accent/5 p-4">
                        <div className="inline-flex size-9 items-center justify-center rounded-md bg-accent/15">
                          <Activity className="size-4 text-accent" />
                        </div>
                        <h4 className="font-semibold text-primary">Screenings</h4>
                        <p className="text-sm text-muted-foreground">
                          Community-based health screenings for early detection.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 rounded-lg border border-border/60 bg-primary/5 p-4">
                        <div className="inline-flex size-9 items-center justify-center rounded-md bg-primary/15">
                          <GraduationCap className="size-4 text-primary" />
                        </div>
                        <h4 className="font-semibold text-primary">Education</h4>
                        <p className="text-sm text-muted-foreground">
                          Culturally relevant health education and awareness.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 rounded-lg border border-border/60 bg-accent/5 p-4">
                        <div className="inline-flex size-9 items-center justify-center rounded-md bg-accent/15">
                          <Target className="size-4 text-accent" />
                        </div>
                        <h4 className="font-semibold text-primary">Research</h4>
                        <p className="text-sm text-muted-foreground">
                          Surveys and studies to understand community needs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Leadership CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl"
          >
            <Link href="/leadership" className="block">
              <Card className="group overflow-hidden border-border transition-all hover:border-accent/40 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-6 sm:flex-row">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent/15 transition-colors group-hover:bg-accent/25">
                    <Users className="size-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Our Leadership</CardTitle>
                    <CardDescription className="mt-1">
                      Meet the students and leaders driving SAHARAA&apos;s
                      mission forward
                    </CardDescription>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                      View full team
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

    </>
  );
}
