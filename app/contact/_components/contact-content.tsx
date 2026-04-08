"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export function ContactContent() {
  return (
    <>
      <section className="border-b border-primary-foreground/10 bg-primary py-2 md:py-20">
        <div className="container px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
              Contact Us
            </h1>
            <p className="mt-2 text-base md:text-lg text-primary-foreground/90">
              Have a question or want to get involved? Reach out anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-4 py-12 md:py-8 flex flex-col items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-md w-full flex flex-col items-center gap-7 rounded-2xl bg-white/70 dark:bg-background/80 shadow-xl ring-1 ring-border/10 px-7 py-12 md:py-16 mt-2 cursor-pointer"
        >
          {/* Email */}
          <a
            href="mailto:vivek.nalluri@berkeley.edu"
            className="flex items-center gap-4 px-7 py-5 rounded-xl transition group border border-transparent hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{ textDecoration: 'none' }}
          >
            <span className="flex items-center justify-center bg-primary text-white rounded-lg shadow-sm h-12 w-12">
              <Mail className="size-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-primary group-hover:underline">
                vivek.nalluri@berkeley.edu
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                We respond within 2-3 business days
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 px-7 py-2">
            <span className="flex items-center justify-center bg-accent/10 text-accent rounded-lg shadow-sm h-12 w-12">
              <MapPin className="size-5" />
            </span>
            <div>
              <div className="text-lg font-semibold text-primary">
                Bay Area, California
              </div>
              <div className="text-xs text-muted-foreground">
                Founded at UC Berkeley
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
