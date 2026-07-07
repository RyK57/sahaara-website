"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { defaultTransition } from "@/lib/motion";

export function SupportContent() {
  return (
    <section className="page-hero-accent page-hero-accent-compact">
      <div className="container px-4 md:px-6">
        <FadeIn
          onView={false}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="size-12 text-accent-foreground" />
          </motion.div>
          <h1 className="page-hero-title-accent">Donations Coming Soon</h1>
          <p className="page-hero-description-accent max-w-2xl">
            Thank you for your interest in supporting our mission! We&apos;re not
            yet ready to accept donations, but please check back again soon.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center"
          >
            <Button asChild className="w-full sm:w-auto">
              <Link href="/get-involved">Other Ways to Help</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="w-full border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 sm:w-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
