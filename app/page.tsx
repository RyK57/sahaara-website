"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Activity, BookOpen, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "./_components/hero-section";
import { PartnersMarquee } from "@/components/partners-marquee";

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
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
              <Link
                href="/initiatives#access"
                className="group flex flex-col p-8 md:p-10 transition-all duration-200 border border-transparent hover:bg-primary/5 hover:shadow-lg hover:border-primary/30 rounded-lg -m-px"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/15 group-hover:bg-primary/25">
                  <Activity className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-primary">Access</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Community-based biometric screenings and preventive care
                  through partnerships like Jeeva Clinic.
                </p>
                <span className="mt-6 text-sm font-medium text-primary underline-offset-4 group-hover:underline inline-flex items-center">
                  Learn more
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
              <Link
                href="/initiatives#awareness"
                className="group flex flex-col p-8 md:p-10 transition-all duration-200 border border-transparent hover:bg-primary/5 hover:shadow-lg hover:border-primary/30 rounded-lg -m-px"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/15 group-hover:bg-primary/25">
                  <BookOpen className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-primary">Awareness</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Culturally relevant health education through workshop
                  programs designed for South Asian communities.
                </p>
                <span className="mt-6 text-sm font-medium text-primary underline-offset-4 group-hover:underline inline-flex items-center">
                  Learn more
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
              <Link
                href="/initiatives#research"
                className="group flex flex-col p-8 md:p-10 transition-all duration-200 border border-transparent hover:bg-primary/5 hover:shadow-lg hover:border-primary/30 rounded-lg -m-px"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/15 group-hover:bg-primary/25">
                  <FlaskConical className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-primary">Research</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Surveys and studies including the Prana Study and Stanford
                  research to understand community health needs.
                </p>
                <span className="mt-6 text-sm font-medium text-primary underline-offset-4 group-hover:underline inline-flex items-center">
                  Learn more
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="container px-4 py-16 md:px-6 md:py-24 bg-primary/5">
          <div className="mx-auto max-w-5xl p-8 text-center md:p-12">
            <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/15">
              <Heart className="size-8 text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-primary">
              Support Our Mission
            </h2>
            <p className="mt-3 text-muted-foreground">
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
