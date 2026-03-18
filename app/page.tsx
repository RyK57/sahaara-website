"use client";

import Link from "next/link";
import { ArrowRight, Heart, Activity, BookOpen, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "./_components/hero-section";
import { AboutContent } from "./_components/about-content";
import { PartnersMarquee } from "@/components/partners-marquee";
import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-250 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <section className="bg-accent py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-6 md:px-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-accent-foreground">
              Addressing Health Disparities in South Asian Communities
            </h2>
            <p className="mt-4 text-accent-foreground/90">
              SAHAARA is a 501(c) nonprofit founded by UC Berkeley students to
              improve cardiovascular and metabolic health outcomes through
              community-based screenings, culturally relevant education, and
              research.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/support">Support Our Mission</Link>
              </Button>
            </div>
          </div>
        </section>
        <AboutContent />
        <section className="border-t border-primary-foreground/10 bg-accent py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight text-accent-foreground">
              Our Pillars
            </h2>
            <div className="grid divide-x divide-y divide-accent-foreground/20 md:grid-cols-3 max-w-5xl mx-auto">
              <Link
                href="/initiatives#access"
                className="group flex flex-col p-8 md:p-10 transition-all duration-200 border border-transparent hover:bg-accent-foreground/10 hover:shadow-lg rounded-lg -m-px"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-foreground/20 group-hover:bg-accent-foreground/30">
                  <Activity className="size-5 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-accent-foreground">Access</h3>
                <p className="mt-3 text-sm leading-relaxed text-accent-foreground/90">
                  Community-based biometric screenings and preventive care
                  through partnerships like Jeeva Clinic.
                </p>
                <span className="mt-6 text-sm font-medium text-accent-foreground underline-offset-4 group-hover:underline inline-flex items-center">
                  Learn more
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
              <Link
                href="/initiatives#awareness"
                className="group flex flex-col p-8 md:p-10 transition-all duration-200 border border-transparent hover:bg-accent-foreground/10 hover:shadow-lg rounded-lg -m-px"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-foreground/20 group-hover:bg-accent-foreground/30">
                  <BookOpen className="size-5 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-accent-foreground">Awareness</h3>
                <p className="mt-3 text-sm leading-relaxed text-accent-foreground/90">
                  Culturally relevant health education through workshop
                  programs designed for South Asian communities.
                </p>
                <span className="mt-6 text-sm font-medium text-accent-foreground underline-offset-4 group-hover:underline inline-flex items-center">
                  Learn more
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
              <Link
                href="/initiatives#research"
                className="group flex flex-col p-8 md:p-10 transition-all duration-200 border border-transparent hover:bg-accent-foreground/10 hover:shadow-lg rounded-lg -m-px"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-foreground/20 group-hover:bg-accent-foreground/30">
                  <FlaskConical className="size-5 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-accent-foreground">Research</h3>
                <p className="mt-3 text-sm leading-relaxed text-accent-foreground/90">
                  Surveys and studies including the Prana Study and Stanford
                  research to understand community health needs.
                </p>
                <span className="mt-6 text-sm font-medium text-accent-foreground underline-offset-4 group-hover:underline inline-flex items-center">
                  Learn more
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        {/* Support Our Mission */}
        <section className="relative container px-4 py-16 md:px-6 md:py-24 bg-primary overflow-hidden">
          {/* Animated background paths */}
          {/* <div className="absolute inset-0 pointer-events-none -z-10">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div> */}
          <div className="mx-auto max-w-5xl p-8 text-center md:p-12 relative z-10">
            <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-accent/20">
              <Heart className="size-8 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-primary-foreground">
              Support Our Mission
            </h2>
            <p className="mt-3 text-primary-foreground/90">
              Your donation helps us expand screenings, deliver workshops, and
              advance research for South Asian cardiovascular health.
            </p>
            <Button className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/support">Donate Now</Link>
            </Button>
          </div>
        </section>
        <PartnersMarquee />
      </main>
    </div>
  );
}
