"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Activity, BookOpen, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "./_components/hero-section";
import { PartnersMarquee } from "@/components/partners-marquee";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <section className="container px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-primary">
              Addressing Health Disparities in South Asian Communities
            </h2>
            <p className="mt-4 text-muted-foreground">
              SAHARAA is a 501(c) nonprofit founded by UC Berkeley students to
              improve cardiovascular and metabolic health outcomes through
              community-based screenings, culturally relevant education, and
              research.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link href="/support">Support Our Mission</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="border-t border-border/50 bg-primary/5 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight text-primary">
              Our Pillars
            </h2>
            <div className="grid divide-x divide-y divide-border/40 md:grid-cols-3">
              <div className="flex flex-col p-8 md:p-10">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-accent/15">
                  <Activity className="size-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-primary">Access</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Community-based biometric screenings and preventive care
                  through partnerships like Jeeva Clinic.
                </p>
                <Link
                  href="/initiatives#access"
                  className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline inline-flex items-center group"
                >
                  Learn more
                  <span className="inline-block relative ml-1 overflow-visible">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      width={16}
                      height={16}
                      className="size-4 text-accent group-hover:translate-y-[-4px] transition-transform duration-200"
                      initial={{ y: 0 }}
                      animate={{ y: 0 }}
                      whileHover={{ y: -4 }}
                      whileTap={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </span>
                </Link>
              </div>
              <div className="flex flex-col p-8 md:p-10">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/15">
                  <BookOpen className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-primary">Awareness</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Culturally relevant health education through workshop
                  programs designed for South Asian communities.
                </p>
                <Link
                  href="/initiatives#awareness"
                  className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
              <div className="flex flex-col p-8 md:p-10">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-accent/15">
                  <FlaskConical className="size-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-primary">Research</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Surveys and studies including the Prana Study and Stanford
                  research to understand community health needs.
                </p>
                <Link
                  href="/initiatives#research"
                  className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="container px-4 py-16 md:px-6 md:py-24 bg-accent/5">
          <div className="mx-auto max-w-5xl p-8 text-center md:p-12">
            <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-accent/15">
              <Heart className="size-8 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-primary">
              Support Our Mission
            </h2>
            <p className="mt-3 text-muted-foreground">
              Your donation helps us expand screenings, deliver workshops, and
              advance research for South Asian cardiovascular health.
            </p>
            <Button className="mt-6 bg-accent hover:bg-accent/90" asChild>
              <Link href="/support">Donate Now</Link>
            </Button>
          </div>
        </section>
        <PartnersMarquee />
      </main>
    </div>
  );
}
