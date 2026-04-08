"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function SupportContent() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-accent border-b border-accent-foreground/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl mx-auto"
      >
        <Heart className="mx-auto size-12 text-accent-foreground" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl text-accent-foreground">
          Donations Coming Soon
        </h1>
        <p className="mt-4 text-lg text-accent-foreground/90">
          Thank you for your interest in supporting our mission! We&apos;re not yet ready to accept donations, but please check back again soon.
        </p>
      </motion.div>
    </section>
  );
}
