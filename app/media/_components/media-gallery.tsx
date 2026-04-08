"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Timeline entries, inferred from file names, sorted by date
const timeline = [
  {
    src: "/media/MASALA_study_dr_kanaya_nov2025.jpeg",
    date: "2025-11",
    prettyDate: "Nov 2025",
    title: "MASALA Study Dr Kanaya",
  },
  {
    src: "/media/heart_dissection_workshop_march2026.jpeg",
    date: "2026-03",
    prettyDate: "Mar 2026",
    title: "Heart Dissection Workshop",
  },
  {
    src: "/media/livermore_temple_jan2026.jpeg",
    date: "2026-01",
    prettyDate: "Jan 2026",
    title: "Livermore Temple",
  },
  {
    src: "/media/livermore_temple_feb2026.jpeg",
    date: "2026-02",
    prettyDate: "Feb 2026",
    title: "Livermore Temple",
  },
  {
    src: "/media/svcc_temple_fremont_march2026.jpeg",
    date: "2026-03",
    prettyDate: "Mar 2026",
    title: "SVCC Temple Fremont",
  },
  {
    src: "/media/svcc_fremont_april2026.jpeg",
    date: "2026-04",
    prettyDate: "Apr 2026",
    title: "SVCC Fremont",
  },
];

export function MediaGallery() {
  const sortedTimeline = [...timeline].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="border-b border-accent-foreground/10 bg-accent py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-6xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-accent-foreground">
              Media
            </h1>
            <p className="mt-4 text-lg text-accent-foreground/90">
              Moments from our community screenings, workshops, and events — in timeline order (latest first).
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container relative px-4 py-16 md:px-6 md:py-24 bg-background">
        {/* Timeline axis */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border pointer-events-none" aria-hidden="true" />
        <div className="relative flex flex-col gap-16 w-full max-w-5xl mx-auto">
          {sortedTimeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            // Alternating layout: left and right
            return (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`
                  relative flex flex-col sm:flex-row items-center gap-8
                  ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}
                `}
              >
                {/* Timeline node/pin */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 z-10 bg-background border-2 border-accent-foreground rounded-full w-6 h-6 flex items-center justify-center"
                  style={{ top: "50%" }}
                >
                  <span className="block w-3 h-3 rounded-full bg-primary" />
                </div>

                {/* Card/Image */}
                <div
                  className={`
                    w-full sm:w-2/3 flex justify-center
                    ${isLeft ? "sm:pr-8 sm:justify-end" : "sm:pl-8 sm:justify-start"}
                  `}
                  style={{ alignSelf: "stretch" }}
                >
                  <div
                    className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-border bg-muted shadow-lg w-full max-w-3xl"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 95vw, (max-width: 1600px) 70vw, 1024px"
                      priority={i < 3}
                    />
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`
                    w-full sm:w-1/3 flex flex-col
                    ${isLeft ? "sm:items-start sm:pl-8 text-left" : "sm:items-end sm:pr-8 text-right"}
                  `}
                  style={{ alignSelf: "center" }}
                >
                  <div className="mt-4 sm:mt-0 flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                      {item.prettyDate}
                    </span>
                    <h3 className="font-semibold text-xl text-primary">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}