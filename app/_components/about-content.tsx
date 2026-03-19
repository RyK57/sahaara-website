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
  BoneIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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

      {/* Stats Marquee */}
      <section className="py-16 md:py-20 overflow-hidden bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-primary">
              The numbers that drive our mission
            </p>
            <div className="relative w-full overflow-x-hidden">
              <motion.div
                className="flex gap-6 w-fit"
                style={{ willChange: "transform" }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  duration: 30,
                }}
              >
                {[...statSlides, ...statSlides].map((stat, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[260px] bg-primary rounded-xl px-6 py-8 text-white"
                  >
                    <p className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/95">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs text-white/80">
                      {stat.subtext}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
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
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-left">
                        <p className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-none">
                          45%
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Higher cardiovascular risk vs. European ancestry. Hypertension, type 2 diabetes, and CVD often start at younger ages and lower BMIs.
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-none">
                          ~30%
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Diabetes prevalence in some South Asian groups. Many fall into high CVD risk but remain undiagnosed or undertreated.
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-none">
                          2x
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Heart disease risk vs. non-South Asians. Earlier screenings and lifestyle interventions could reduce much of this burden.
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
                      Why SAHAARA Exists
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
                      in the Bay Area, SAHAARA works to improve awareness, expand
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
      <section className="py-16 md:py-24 bg-primary">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl"
          >
            <Link href="/leadership" className="block">
              <Card className="group overflow-hidden border-accent-foreground/20 bg-accent transition-all hover:border-accent hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-6 sm:flex-row">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent/20 transition-colors group-hover:bg-accent/30">
                    <Users className="size-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white">Our Leadership</CardTitle>
                    <CardDescription className="mt-1 text-white/80">
                      Meet the students and leaders driving SAHAARA&apos;s
                      mission forward
                    </CardDescription>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
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
