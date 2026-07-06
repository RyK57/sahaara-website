"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Heart, ClipboardList, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { springSnappy } from "@/lib/motion";

const waysToGetInvolved = [
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Join our team of volunteers and help with screenings, workshops, and community outreach events.",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "Support our mission financially. Every contribution helps us expand our programs.",
  },
  {
    icon: ClipboardList,
    title: "Participate in Research",
    description:
      "Take part in our surveys and studies to help advance understanding of South Asian health needs.",
  },
  {
    icon: Mail,
    title: "Spread the Word",
    description:
      "Share our mission with your community, temple, or cultural organization.",
  },
];

export function GetInvolvedContent() {
  return (
    <>
      <section className="page-hero-accent">
        <div className="container px-4 md:px-6">
          <FadeIn onView={false} className="mx-auto max-w-6xl text-center">
            <h1 className="page-hero-title-accent">Get Involved</h1>
            <p className="page-hero-description-accent">
              There are many ways to support SAHAARA&apos;s mission and make a
              difference in South Asian health
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container px-4 py-16 md:px-6 md:py-24 bg-background">
        <Stagger className="mx-auto grid w-full max-w-7xl sm:grid-cols-2 gap-px bg-primary/10 rounded-xl overflow-hidden">
          {waysToGetInvolved.map((item, i) => {
            const Icon = item.icon;
            const col = i % 2;
            const row = Math.floor(i / 2);
            const isAccent = (row + col) % 2 === 1;
            const bgColor = isAccent ? "bg-accent" : "bg-primary";
            const textColor = isAccent
              ? "text-accent-foreground"
              : "text-primary-foreground";
            const iconBg = isAccent
              ? "bg-accent-foreground/20"
              : "bg-primary-foreground/20";
            const iconColor = isAccent
              ? "text-accent-foreground"
              : "text-primary-foreground";

            return (
              <StaggerItem key={item.title}>
                <motion.div
                  className={`flex flex-col p-8 md:p-10 rounded-none min-h-64 ${bgColor} ${textColor}`}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                  transition={springSnappy}
                >
                  <motion.div
                    className={`inline-flex size-10 items-center justify-center rounded-lg ${iconBg} mb-2`}
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={springSnappy}
                  >
                    <Icon className={`size-5 ${iconColor}`} strokeWidth={1.5} />
                  </motion.div>
                  <h2
                    className={`mt-5 font-semibold tracking-tight ${textColor}`}
                  >
                    {item.title}
                  </h2>
                  <p className={`mt-3 text-sm leading-relaxed ${textColor}/90`}>
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Link href="/support">Donate</Link>
          </Button>
        </FadeIn>
      </section>
    </>
  );
}
