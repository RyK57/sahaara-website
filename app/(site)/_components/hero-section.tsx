"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { defaultTransition, springSnappy } from "@/lib/motion";

const heroStagger = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const heroItem = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-primary">
        <div className="container mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20 lg:py-24">
          <div className="flex min-h-[85vh] flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16 lg:items-center">
            <motion.div
              variants={heroStagger}
              initial="initial"
              animate="animate"
              className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
            >
              <motion.div
                variants={heroItem}
                className="flex items-center gap-4 mb-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -3 }}
                  transition={springSnappy}
                >
                  <Image
                    src="/logo.png"
                    alt="SAHAARA"
                    width={300}
                    height={300}
                    className="rounded-3xl border-none shadow-2xl"
                    priority
                  />
                </motion.div>
              </motion.div>
              <motion.h1
                variants={heroItem}
                className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-2xl font-secondary"
              >
                SAHAARA
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="mt-2 text-lg md:text-xl text-primary-foreground/95 font-medium"
              >
                South Asian Health Access, Awareness & Research Alliance
              </motion.p>
              <motion.p
                variants={heroItem}
                className="mt-4 text-xl md:text-2xl text-primary-foreground/90 font-semibold"
              >
                Addressing Health Disparities in South Asian Communities
              </motion.p>
              <motion.p
                variants={heroItem}
                className="mt-6 text-lg text-primary-foreground/90 md:text-xl max-w-xl leading-relaxed"
              >
                South Asians face significantly higher cardiovascular and
                metabolic risk. Your support helps us expand screenings, deliver
                culturally relevant education, and advance research for community
                health.
              </motion.p>
              <motion.div
                variants={heroItem}
                className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
              >
                <Button asChild size="hero" variant="cta">
                  <Link href="/support">Donate</Link>
                </Button>
                <Button
                  asChild
                  size="hero"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 48, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ ...defaultTransition, delay: 0.35 }}
              className="flex flex-1 justify-center"
            >
              <motion.div
                className="w-full max-w-2xl"
                whileHover={{ scale: 1.02 }}
                transition={springSnappy}
              >
                <Image
                  src="/header.jpg"
                  alt="Community health and wellness"
                  width={1536}
                  height={2048}
                  className="h-auto w-full rounded-2xl shadow-2xl"
                  priority
                  sizes="(max-width: 1536px) 90vw, 60vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
