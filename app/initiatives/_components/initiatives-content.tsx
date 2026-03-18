"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BookOpen,
  FlaskConical,
  Stethoscope,
  FileText,
  Heart,
  Brain,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Users } from "lucide-react";
import Image from "next/image";

const initiativeData = [
  {
    key: "access",
    iconBg: "bg-accent/15",
    icon: (
      <Stethoscope className="size-8 md:size-10 text-accent" strokeWidth={1.5} />
    ),
    title: "Jeeva Clinic Partnership",
    subtitle: "Community Screening",
    highlights: [
      { icon: <Activity className="size-4 text-accent" />, text: "Biometric screenings: BP, Glucose, and more" },
      { icon: <Users className="size-4 text-primary" />, text: "At temples, cultural centers & local events" },
      { icon: <Sparkles className="size-4 text-primary" />, text: "Culturally relevant access for South Asian adults" },
    ],
    img: "/partners/jeevaclinic.png",
    imgAlt: "Jeeva Clinic logo",
    description:
      "SAHAARA partners with Jeeva Clinic to deliver biometric screenings right in the heart of the community. Screenings identify risk factors early—making preventive care more accessible, familiar, and proactive for South Asian adults.",
    extra: (
      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        <Badge variant="secondary" className="bg-accent/10 border-accent/20 text-accent">
          Early Risk ID
        </Badge>
        <Badge variant="secondary" className="bg-primary/10 border-primary/20 text-primary">
          Community Outreach
        </Badge>
        <Badge variant="secondary" className="border-foreground/20 text-muted-foreground bg-background">
          Early Detection
        </Badge>
      </div>
    )
  },
  {
    key: "research",
    iconBg: "bg-accent/20",
    icon: (
      <FlaskConical className="size-8 md:size-10 text-accent" strokeWidth={1.5} />
    ),
    title: "Community Research",
    subtitle: "Evidence for Change",
    highlights: [
      { icon: <FileText className="size-4 text-accent" />, text: "Prana Study: Health behaviors of Bay Area South Asians" },
      { icon: <FlaskConical className="size-4 text-primary" />, text: "Stanford Survey: Understanding behaviors and beliefs" },
      { icon: <Brain className="size-4 text-primary" />, text: "Evidence-based programming" },
    ],
    img: "/partners/sahc.png",
    imgAlt: "SAHC",
    description:
      "Through the Prana Study and Stanford Survey, we pinpoint the unique health needs and gaps among South Asians—informing smarter, sharper, more responsive programs.",
    extra: (
      <div className="border-t border-border/40 pt-4 text-sm text-muted-foreground text-center">
        <span className="font-medium text-primary">Scientifically driven,</span> our community-led research shapes every SAHAARA initiative.
      </div>
    )
  }
];

const workshopsData = [
  {
    number: 1,
    title: "Pre-survey, Goal setting & Orientation",
    items: [
      "Pre-survey & Goal setting sheet",
      "BP self-monitoring demo",
      "Orientation + physical activity",
    ],
    iconBg: "bg-primary/15",
    icon: <BookOpen className="size-6 text-primary" strokeWidth={1.5} />,
  },
  {
    number: 2,
    title: "DASH Diet + Physical Activity",
    items: [
      "DASH Diet education",
      "Physical activity with cooking classes",
    ],
    iconBg: "bg-accent/15",
    icon: <Activity className="size-6 text-accent" strokeWidth={1.5} />,
  },
  {
    number: 3,
    title: "Stress Management & CPR Demo",
    items: [
      "Stress management techniques",
      "CPR demo",
      "Physical activity",
    ],
    iconBg: "bg-primary/15",
    icon: <Heart className="size-6 text-primary" strokeWidth={1.5} />,
  },
  {
    number: 4,
    title: "Medication Management + Graduation",
    items: [
      "Medication management",
      "Graduation",
    ],
    iconBg: "bg-accent/15",
    icon: <FlaskConical className="size-6 text-accent" strokeWidth={1.5} />,
  },
];

export function InitiativesContent() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-primary-foreground/10 bg-primary py-16 md:py-24 rounded-b-3xl">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center flex flex-col items-center gap-3"
          >
            <div className="relative flex items-center justify-center mb-2">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-4 py-2 text-sm">
                3 Pillars, 1 Mission
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-primary-foreground">
              SAHAARA Initiatives
            </h1>
            <div className="mt-2 flex flex-row justify-center gap-2 md:gap-5">
              <Badge className="bg-accent/20 border-none text-accent-foreground text-base px-3 py-1.5 flex items-center gap-1">
                <Activity className="size-4" /> Access
              </Badge>
              <Badge className="bg-primary-foreground/20 border-none text-primary-foreground text-base px-3 py-1.5 flex items-center gap-1">
                <BookOpen className="size-4" /> Awareness
              </Badge>
              <Badge className="bg-accent/20 border-none text-accent-foreground text-base px-3 py-1.5 flex items-center gap-1">
                <FlaskConical className="size-4" /> Research
              </Badge>
            </div>
            <p className="mt-5 text-lg max-w-2xl mx-auto text-primary-foreground/90">
              SAHAARA bridges <span className="font-semibold text-primary">access</span>, spreads <span className="font-semibold text-accent">awareness</span>, and powers <span className="font-semibold text-primary">research</span>—transforming South Asian heart health from every angle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Initiatives - 2 Cards */}
      <section className="container px-4 py-16 md:px-6 md:py-24 bg-background">
        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {initiativeData.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Card className="h-full border-accent/20 hover:border-primary/50 transition-shadow group hover:shadow-lg shadow-none relative flex flex-col">
                <CardHeader className="flex flex-col items-center pb-2 gap-3">
                  <div className={`inline-flex size-14 items-center justify-center rounded-2xl ${item.iconBg} mb-1`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary text-center">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-accent text-center font-medium text-base">
                    {item.subtitle}
                  </CardDescription>
                  {item.img && (
                    <div className="relative w-full flex items-center justify-center my-2">
                      <Image
                        src={item.img}
                        alt={item.imgAlt}
                        width={120}
                        height={60}
                        className="rounded-md shadow-md border border-border bg-white object-contain"
                        style={{maxWidth: 120}}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="grow flex flex-col">
                  <ul className="space-y-3 mb-4 mt-2">
                    {item.highlights.map(({ icon, text }, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span>{icon}</span>
                        <span className="text-muted-foreground">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-2" />
                  <div className="text-muted-foreground text-sm mb-3 text-balance">
                    {item.description}
                  </div>
                  {item.extra}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workshops Section */}
      <section className="border-t border-accent-foreground/10 bg-accent py-16 md:py-24 rounded-3xl">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="bg-accent-foreground/20 text-accent-foreground border-accent-foreground/30 mb-4">
              Awareness
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-accent-foreground">
              Workshop Programs
            </h2>
            <p className="mt-3 text-accent-foreground/90 max-w-2xl mx-auto">
              Our 4-workshop series is tailored for South Asian communities—blending culture, science, and family dynamics to inspire sustainable, healthy habits.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {workshopsData.map((workshop, i) => (
              <motion.div
                key={workshop.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="h-full border-border/60 hover:border-primary/40 transition-all hover:shadow-md flex flex-col overflow-hidden">
                  <div className={`p-4 flex items-center justify-center ${workshop.iconBg}`}>
                    <div className="inline-flex size-12 items-center justify-center rounded-xl bg-background/80">
                      {workshop.icon}
                    </div>
                  </div>
                  <CardHeader className="pb-2 pt-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="bg-primary/20 text-primary text-xs font-bold shrink-0">
                        #{workshop.number}
                      </Badge>
                    </div>
                    <CardTitle className="text-base font-semibold text-primary">
                      {workshop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {workshop.items.map((bullet, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary shrink-0 mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
