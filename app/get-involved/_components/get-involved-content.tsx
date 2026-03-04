"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Heart, ClipboardList, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const waysToGetInvolved = [
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Join our team of volunteers and help with screenings, workshops, and community outreach events.",
    accent: "primary",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "Support our mission financially. Every contribution helps us expand our programs.",
    accent: "accent",
  },
  {
    icon: ClipboardList,
    title: "Participate in Research",
    description:
      "Take part in our surveys and studies to help advance understanding of South Asian health needs.",
    accent: "primary",
  },
  {
    icon: Mail,
    title: "Spread the Word",
    description:
      "Share our mission with your community, temple, or cultural organization.",
    accent: "accent",
  },
];

export function GetInvolvedContent() {
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
              Get Involved
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              There are many ways to support SAHARAA&apos;s mission and make a
              difference in South Asian health
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl divide-x divide-y divide-border/40 sm:grid-cols-2">
          {waysToGetInvolved.map((item, i) => {
            const Icon = item.icon;
            const isAccent = item.accent === "accent";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col p-8 md:p-10"
              >
                <div className={`inline-flex size-10 items-center justify-center rounded-lg ${isAccent ? "bg-accent/15" : "bg-primary/15"}`}>
                  <Icon className={`size-5 ${isAccent ? "text-accent" : "text-primary"}`} strokeWidth={1.5} />
                </div>
                <h2 className="mt-5 font-semibold tracking-tight text-primary">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="/support">Donate</Link>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
