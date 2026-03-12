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
    major: "Biology + Business",
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
            <div className="mt-4 space-y-2 text-base text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="size-5 shrink-0 text-accent" />
                <span>{member.hometown}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="size-5 shrink-0 text-accent" />
                <span>{member.major}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-5 shrink-0 text-accent" />
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
      <section className="border-b-2 border-border bg-primary/10 py-24 md:py-36">
        <div className="container px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-7xl text-center"
          >
            <h1 className="font-secondary text-5xl font-bold tracking-tight md:text-6xl text-primary">
              Our Leadership
            </h1>
            <p className="mt-8 text-2xl text-muted-foreground">
              The students and leaders driving SAHARAA&apos;s mission to advance
              South Asian cardiovascular and metabolic health
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-6 py-24 md:px-10 md:py-36">
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
