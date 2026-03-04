"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const placeholderImages = [
  { src: "/logo.png", alt: "SAHARAA Event", title: "Community Screening" },
  { src: "/logo.png", alt: "Workshop", title: "Health Education Workshop" },
  { src: "/logo.png", alt: "Team", title: "SAHARAA Team" },
  { src: "/logo.png", alt: "Outreach", title: "Community Outreach" },
  { src: "/logo.png", alt: "Research", title: "Research Initiative" },
  { src: "/logo.png", alt: "Partnership", title: "Partner Event" },
];

export function MediaGallery() {
  return (
    <>
      <section className="border-b border-border bg-accent/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-6xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">
              Media
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Moments from our community screenings, workshops, and events
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderImages.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md hover:border-accent/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.alt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
