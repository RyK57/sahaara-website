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
      <section className="border-b border-primary-foreground/10 bg-primary py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-6xl text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-primary-foreground">
              Get Involved
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90">
              There are many ways to support SAHAARA&apos;s mission and make a
              difference in South Asian health
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-4 py-16 md:px-6 md:py-24 bg-background">
        <div className="mx-auto grid w-full max-w-7xl sm:grid-cols-2 gap-px bg-primary/10 rounded-xl overflow-hidden">
          {waysToGetInvolved.map((item, i) => {
            const Icon = item.icon;
            const col = i % 2;
            const row = Math.floor(i / 2);
            const isAccent = (row + col) % 2 === 1;
            const bgColor = isAccent ? "bg-accent" : "bg-primary";
            const hoverBg = isAccent
              ? "hover:bg-accent/90"
              : "hover:bg-primary/90";
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
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`
                  flex flex-col p-8 md:p-10 transition-colors
                  ${bgColor} ${hoverBg} ${textColor}
                  min-h-[260px]
                `}
                style={{ borderRadius: 0 }}
              >
                <div
                  className={`inline-flex size-10 items-center justify-center rounded-lg ${iconBg} mb-2`}
                >
                  <Icon className={`size-5 ${iconColor}`} strokeWidth={1.5} />
                </div>
                <h2 className={`mt-5 font-semibold tracking-tight ${textColor}`}>
                  {item.title}
                </h2>
                <p className={`mt-3 text-sm leading-relaxed ${textColor}/90`}>
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
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
