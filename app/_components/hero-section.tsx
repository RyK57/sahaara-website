"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-primary">
        <div className="container mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20 lg:py-24">
          <div className="flex min-h-[85vh] flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16 lg:items-center">
            {/* Left column - text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="flex items-center gap-4 mb-10">
                <Image
                  src="/logo.png"
                  alt="SAHAARA"
                  width={300}
                  height={300}
                  className="rounded-3xl border-none shadow-2xl"
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-2xl">
                SAHAARA 
              </h1>
              <p className="mt-2 text-lg md:text-xl text-primary-foreground/95 font-medium">
                South Asian Health Access, Awareness & Research Alliance
              </p>
              <p className="mt-4 text-xl md:text-2xl text-primary-foreground/90 font-semibold">
                Addressing Health Disparities in South Asian Communities
              </p>
              <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl max-w-xl leading-relaxed">
                South Asians face significantly higher cardiovascular and metabolic
                risk. Your support helps us expand screenings, deliver culturally
                relevant education, and advance research for community health.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                >
                  <Link href="/support">Donate</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
                >
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right column - enlarged image centered */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-1 justify-center"
            >
              <div className="relative w-full max-w-2xl aspect-[4/3] overflow-hidden">
                <Image
                  src="/header.png"
                  alt="Community health and wellness"
                  fill
                  className="object-cover object-center rounded-2xl shadow-2xl"
                  style={{ objectPosition: 'center top' }}
                  priority
                  sizes="(max-width: 1536px) 90vw, 60vw"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 rounded-b-2xl"
                  style={{
                    height: "15%",
                    background:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 94, 0))",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
