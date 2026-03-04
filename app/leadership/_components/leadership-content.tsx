"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface LeadershipMember {
  name: string;
  role: string;
  hometown: string;
  major: string;
  gradYear: string;
  image: string;
}

const leadership: LeadershipMember[] = [
  {
    name: "Vivek Nalluri",
    role: "CEO",
    hometown: "Mountain House, CA",
    major: "Biologoy + Business",
    gradYear: "2027",
    image: "/leadership/vivek.png",
  },
  {
    name: "Sana Singru",
    role: "CFO",
    hometown: "Berkeley, CA",
    major: "MBA/MPH",
    gradYear: "2027",
    image: "/leadership/sana.png",
  },
  {
    name: "Shreyaa Gunasekar",
    role: "Secretary",
    hometown: "Fremont, CA",
    major: "Neuroscience",
    gradYear: "2027",
    image: "/leadership/shreyaa.png",
  },
  {
    name: "Arnav Surpur",
    role: "Chairperson of Board",
    hometown: "San Ramon, CA",
    major: "Nutritional Sciences",
    gradYear: "2027",
    image: "/leadership/arnav.png",
  },
  {
    name: "Deepesh Aggarwal",
    role: "Director",
    hometown: "Fremont, CA",
    major: "Molecular and CellBiology",
    gradYear: "2026",
    image: "/leadership/deep.png",
  },
  {
    name: "Dilsi Bhagat",
    role: "Director",
    hometown: "Cerritos, CA",
    major: "Chemical Biology",
    gradYear: "2028",
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
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-muted/30 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
      style={{ width: "220px", maxWidth: "100%" }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/15 to-accent/25">
            <span className="font-secondary text-4xl font-semibold text-primary/50">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        {/* Hover overlay with details */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-4 text-white">
            <h3 className="font-secondary text-lg font-semibold tracking-tight">
              {member.name}
            </h3>
            <Badge variant="secondary" className="mt-1 text-xs font-medium bg-accent">
              {member.role}
            </Badge>
            <div className="mt-2 space-y-1 text-xs text-white/90">
              <div className="flex items-center gap-1.5">
                <MapPin className="size-3.5 shrink-0 text-accent" />
                <span>{member.hometown}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="size-3.5 shrink-0 text-accent" />
                <span>{member.major}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="size-3.5 shrink-0 text-accent" />
                <span>Class of {member.gradYear}</span>
              </div>
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
      <section className="border-b border-border bg-primary/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-7xl text-center"
          >
            <h1 className="font-secondary text-3xl font-bold tracking-tight md:text-4xl text-primary">
              Our Leadership
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The students and leaders driving SAHARAA&apos;s mission to advance
              South Asian cardiovascular and metabolic health
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-4 py-16 md:px-6 md:py-24">
        <motion.div
          {...fadeIn}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          style={{ maxWidth: 720, margin: "0 auto" }}
        >
          {displayedLeadership.map((member, i) => (
            <LeadershipCard key={member.name} member={member} index={i} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
