"use client";

import { motion } from "framer-motion";
import { Building2, Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { springSnappy } from "@/lib/motion";

const contactDetails = [
  {
    icon: Mail,
    iconBg: "bg-primary text-primary-foreground",
    title: "vivek.nalluri@berkeley.edu",
    href: "mailto:vivek.nalluri@berkeley.edu",
    description: "We respond within 2–3 business days",
    isLink: true,
  },
  {
    icon: Mail,
    iconBg: "bg-accent/10 text-accent",
    title: "contact@sahaara.org",
    href: "mailto:contact@sahaara.org",
    description: "General inquiries and partnerships",
    isLink: true,
  },
  {
    icon: MapPin,
    iconBg: "bg-accent/10 text-accent",
    title: "286 E Ramsey Dr, Mountain House, CA 95391",
    description: "Founded at UC Berkeley",
    isLink: false,
  },
  {
    icon: Building2,
    iconBg: "bg-accent/10 text-accent",
    title: "EIN: 41-4995579",
    description: "501(c) nonprofit organization",
    isLink: false,
  },
];

export function ContactContent() {
  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="container px-4 md:px-6">
          <FadeIn onView={false} className="mx-auto max-w-3xl text-center">
            <h1 className="page-hero-title">Contact Us</h1>
            <p className="page-hero-description">
              Have a question or want to get involved? Reach out anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container bg-background px-4 md:px-6 page-section-compact">
        <FadeIn
          onView={false}
          className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-2xl bg-card/70 px-6 py-6 shadow-xl ring-1 ring-border/10 dark:bg-background/80 md:gap-5 md:px-8 md:py-8"
        >
          <Stagger className="flex flex-col gap-4 md:gap-5" stagger={0.08}>
            {contactDetails.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <motion.span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-lg shadow-sm ${item.iconBg}`}
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={springSnappy}
                  >
                    <Icon className="size-5" />
                  </motion.span>
                  <div className="flex min-w-0 flex-col text-left">
                    <span className="text-lg font-semibold text-primary">
                      {item.title}
                    </span>
                    <span className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                </>
              );

              if (item.isLink && item.href) {
                return (
                  <StaggerItem key={item.title}>
                    <motion.a
                      href={item.href}
                      className="group flex items-center gap-4 rounded-xl border border-transparent px-4 py-3 no-underline md:px-5 md:py-4"
                      whileHover={{ x: 6, backgroundColor: "var(--accent)" }}
                      whileTap={{ scale: 0.99 }}
                      transition={springSnappy}
                    >
                      {content}
                    </motion.a>
                  </StaggerItem>
                );
              }

              return (
                <StaggerItem key={item.title}>
                  <div className="flex items-center gap-4 px-4 md:px-5 md:py-1">
                    {content}
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </FadeIn>
      </section>
    </>
  );
}
