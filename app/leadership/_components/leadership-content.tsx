"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface LeadershipMember {
  name: string;
  role: string;
  linkedin: string;
  image: string;
}

const leadership: LeadershipMember[] = [
  {
    name: "Vivek Nalluri",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/vivek-nalluri/",
    image: "/leadership/vivek.png",
  },
  {
    name: "Sana Singru",
    role: "CFO",
    linkedin: "https://www.linkedin.com/in/sana-singru/",
    image: "/leadership/sana.png",
  },
  {
    name: "Shreyaa Gunasekar",
    role: "Secretary",
    linkedin: "https://www.linkedin.com/in/shreyaa-gunasekar/",
    image: "/leadership/shreyaa.png",
  },
  {
    name: "Arnav Surpur",
    role: "Chairperson of Board",
    linkedin: "https://www.linkedin.com/in/arnav-surpur-86749a27a/",
    image: "/leadership/arnav.png",
  },
  {
    name: "Deepesh Aggarwal",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/deepesh-aggarwal-uc-berkeley/",
    image: "/leadership/deep.png",
  },
  {
    name: "Dilsi Bhagat",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/dilsi-bhagat-b395a729b/",
    image: "/leadership/dilsi.png",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function LeadershipCard({ member, index }: { member: LeadershipMember; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border-2 border-border/60 bg-muted/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40"
      style={{ width: "320px", maxWidth: "100%" }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw"
            // The translate-y-[8%] crops the bottom (zooms in and shifts up a bit)
            className="object-cover transition-transform duration-500 group-hover:scale-110 scale-125 translate-y-3"
            style={{ objectPosition: 'center 40%' }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/10 to-accent/10">
            <span className="font-secondary text-7xl font-semibold text-primary/40">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        {/* Hover overlay with details */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-8 text-white">
            <h3 className="font-secondary text-2xl font-bold tracking-tight">
              {member.name}
            </h3>
            <Badge variant="secondary" className="mt-2 text-zinc-100 font-semibold bg-accent px-3 py-1 rounded-md">
              {member.role}
            </Badge>
            <div className="mt-4 flex justify-center text-base text-white/90">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Button
                  variant="ghost"
                  className="gap-2 font-semibold"
                  asChild
                >
                  <span className="inline-flex items-center">
                    <Linkedin className="size-5 shrink-0" />
                    <span>Contact</span>
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function LeadershipContent() {
  const displayedLeadership = leadership.slice(0, 6);

  return (
    <>
      <section className="border-b-2 border-primary-foreground/10 bg-primary py-24 md:py-36">
        <div className="container px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-7xl text-center"
          >
            <h1 className="font-secondary text-5xl font-bold tracking-tight md:text-6xl text-primary-foreground">
              Our Leadership
            </h1>
            <p className="mt-8 text-2xl text-primary-foreground/90">
              The students and leaders driving SAHAARA&apos;s mission to advance
              South Asian cardiovascular and metabolic health
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-6 py-24 md:px-10 md:py-36 bg-background">
        <motion.div
          {...fadeIn}
          className="grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3"
          style={{ maxWidth: 1080, margin: "0 auto" }}
        >
          {displayedLeadership.map((member, i) => (
            <LeadershipCard key={member.name} member={member} index={i} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
