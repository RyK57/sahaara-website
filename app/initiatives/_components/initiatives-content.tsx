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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const iconPropsPrimary = { className: "size-6 text-primary", strokeWidth: 1.5 as const };
const iconPropsAccent = { className: "size-6 text-accent", strokeWidth: 1.5 as const };
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
      "SAHARAA partners with Jeeva Clinic to deliver biometric screenings right in the heart of the community. Screenings identify risk factors early—making preventive care more accessible, familiar, and proactive for South Asian adults.",
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
    key: "awareness",
    iconBg: "bg-primary/15",
    icon: (
      <BookOpen className="size-8 md:size-10 text-primary" strokeWidth={1.5} />
    ),
    title: "Workshop Programs",
    subtitle: "Empowering Knowledge",
    highlights: [
      { icon: <BookOpen className="size-4 text-primary" />, text: "Nutrition & Diet" },
      { icon: <Activity className="size-4 text-primary" />, text: "Physical Activity" },
      { icon: <Brain className="size-4 text-accent" />, text: "Stress & Mental Wellness" },
      { icon: <Heart className="size-4 text-accent" />, text: "Cardiovascular Risk Awareness" },
    ],
    img: "/partners/aha.png",
    imgAlt: "Workshop",
    description:
      "Our core workshops are tailored for South Asian communities—blending culture, science, and family dynamics to inspire sustainable, healthy habits.",
    extra: (
      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">Culturally Centered</Badge>
        <Badge variant="outline" className="border-accent/40 text-accent bg-accent/10">Interactive</Badge>
        <Badge variant="outline" className="border-foreground/20 text-muted-foreground bg-background">Family-Driven</Badge>
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
      { icon: <FlaskConical className="size-4 text-primary" />, text: "Stanford Survey: Risk perception & screening" },
      { icon: <Brain className="size-4 text-primary" />, text: "Evidence-based programming" },
    ],
    img: "/partners/sahc.png",
    imgAlt: "SAHC",
    description:
      "Through the Prana Study and Stanford Survey, we pinpoint the unique health needs and gaps among South Asians—informing smarter, sharper, more responsive programs.",
    extra: (
      <div className="border-t border-border/40 pt-4 text-sm text-muted-foreground text-center">
        <span className="font-medium text-primary">Scientifically driven,</span> our community-led research shapes every SAHARAA initiative.
      </div>
    )
  }
];

export function InitiativesContent() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center flex flex-col items-center gap-3"
          >
            <div className="relative flex items-center justify-center mb-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
                3 Pillars, 1 Mission
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">
              SAHARAA Initiatives
            </h1>
            <div className="mt-2 flex flex-row justify-center gap-2 md:gap-5">
              <Badge className="bg-accent/15 border-none text-accent text-base px-3 py-1.5 flex items-center gap-1">
                <Activity className="size-4" /> Access
              </Badge>
              <Badge className="bg-primary/15 border-none text-primary text-base px-3 py-1.5 flex items-center gap-1">
                <BookOpen className="size-4" /> Awareness
              </Badge>
              <Badge className="bg-accent/20 border-none text-accent text-base px-3 py-1.5 flex items-center gap-1">
                <FlaskConical className="size-4" /> Research
              </Badge>
            </div>
            <p className="mt-5 text-lg max-w-2xl mx-auto text-muted-foreground">
              SAHARAA bridges <span className="font-semibold text-primary">access</span>, spreads <span className="font-semibold text-accent">awareness</span>, and powers <span className="font-semibold text-primary">research</span>—transforming South Asian heart health from every angle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Showcase */}
      <section className="container px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
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
    </>
  );
}
