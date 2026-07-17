"use client";

import Link from "next/link";
import { Heart, Activity, BookOpen, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroSection } from "./_components/hero-section";
import { AboutContent } from "./_components/about-content";
import { PartnersMarquee } from "@/components/partners-marquee";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { springSnappy } from "@/lib/motion";
import { GET_INVOLVED_AND_DONATE_DISABLED } from "@/lib/constants/site-pages";

const PILLARS = [
  {
    title: "Access",
    icon: (
      <Activity className="size-5 text-accent-foreground" strokeWidth={1.5} />
    ),
    href: "/initiatives#access",
    description:
      "Community-based biometric screenings and preventive care through partnerships like Jeeva Clinic.",
  },
  {
    title: "Awareness",
    icon: (
      <BookOpen className="size-5 text-accent-foreground" strokeWidth={1.5} />
    ),
    href: "/initiatives#awareness",
    description:
      "Culturally relevant health education through workshop programs designed for South Asian communities.",
  },
  {
    title: "Research",
    icon: (
      <FlaskConical className="size-5 text-accent-foreground" strokeWidth={1.5} />
    ),
    href: "/initiatives#research",
    description:
      "Surveys and studies including the Prana Study and Stanford research to understand community health needs.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />

        <section className="bg-accent py-16 md:py-24">
          <FadeIn className="container mx-auto max-w-3xl px-6 md:px-12 text-center">
            <motion.div
              className="mx-auto mt-8 mb-4 max-w-xl rounded-2xl border border-primary/20 bg-primary/90 shadow-md px-6 py-6 flex flex-col items-center"
              whileHover={{ y: -4, boxShadow: "0 24px 48px -16px rgb(13 31 60 / 0.35)" }}
              transition={springSnappy}
            >
              <p className="text-base text-accent-foreground text-center font-semibold mb-2">
                About SAHAARA
              </p>
              <p className="text-primary-foreground/90 text-center">
                A 501(c) nonprofit founded by UC Berkeley students to
                improve cardiovascular and metabolic health outcomes through{" "}
                <span className="font-medium text-accent">
                  community-based screenings
                </span>
                ,{" "}
                <span className="font-medium text-accent">
                  culturally relevant education
                </span>
                , and <span className="font-medium text-accent">research</span>.
              </p>
            </motion.div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link
                  href={
                    GET_INVOLVED_AND_DONATE_DISABLED ? "/contact" : "/support"
                  }
                >
                  {GET_INVOLVED_AND_DONATE_DISABLED
                    ? "Contact Us"
                    : "Support Our Mission"}
                </Link>
              </Button>
            </div>
          </FadeIn>
        </section>

        <AboutContent />

        <section className="border-t border-primary-foreground/10 bg-accent py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <FadeIn className="mb-12 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-accent-foreground">
                Our Pillars
              </h2>
            </FadeIn>
            <Stagger className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {PILLARS.map((pillar) => (
                <StaggerItem key={pillar.title}>
                  <Link href={pillar.href} className="group block h-full">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={springSnappy}
                    >
                      <Card className="flex flex-col h-full border-none bg-primary transition-shadow hover:shadow-xl cursor-pointer">
                        <CardContent className="flex flex-1 flex-col items-center p-8 md:p-10">
                          <motion.div
                            className="inline-flex size-20 items-center justify-center rounded-lg bg-primary-foreground/20 mb-2"
                            whileHover={{ scale: 1.08, rotate: 4 }}
                            transition={springSnappy}
                          >
                            {pillar.icon}
                          </motion.div>
                          <h3 className="mt-5 font-semibold tracking-tight text-primary-foreground text-center">
                            {pillar.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90 text-center">
                            {pillar.description}
                          </p>
                          <span className="mt-6 text-sm font-medium text-primary-foreground underline-offset-4 group-hover:underline inline-flex items-center">
                            Learn more
                            <motion.span
                              className="ml-1 inline-block"
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                            >
                              →
                            </motion.span>
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="relative container px-4 py-16 md:px-6 md:py-24 bg-primary overflow-hidden">
          <FadeIn className="mx-auto max-w-5xl p-8 text-center md:p-12 relative z-10">
            <motion.div
              className="inline-flex size-14 items-center justify-center rounded-2xl bg-accent/20"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="size-8 text-accent" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-primary-foreground">
              {GET_INVOLVED_AND_DONATE_DISABLED
                ? "Join Our Mission"
                : "Support Our Mission"}
            </h2>
            <p className="mt-3 text-primary-foreground/90">
              {GET_INVOLVED_AND_DONATE_DISABLED
                ? "Reach out to learn about screenings, workshops, and research opportunities for South Asian cardiovascular health."
                : "Your donation helps us expand screenings, deliver workshops, and advance research for South Asian cardiovascular health."}
            </p>
            <Button variant="cta" size="hero" className="mt-6" asChild>
              <Link
                href={
                  GET_INVOLVED_AND_DONATE_DISABLED ? "/contact" : "/support"
                }
              >
                {GET_INVOLVED_AND_DONATE_DISABLED ? "Contact Us" : "Donate Now"}
              </Link>
            </Button>
          </FadeIn>
        </section>

        <PartnersMarquee />
      </main>
    </div>
  );
}
