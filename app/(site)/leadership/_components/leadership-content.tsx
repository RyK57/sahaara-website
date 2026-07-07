"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { viewportLazy } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface LeadershipMember {
  name: string;
  role: string;
  linkedin: string;
  image: string;
  row: 1 | 2;
  /** Set to false to soft-hide from the UI without removing from data */
  isPublished?: boolean;
  isCofounder?: boolean;
}

const leadership: LeadershipMember[] = [
  {
    name: "Vivek Nalluri",
    role: "CEO",
    isCofounder: true,
    row: 1,
    linkedin: "https://www.linkedin.com/in/vivek-nalluri/",
    image: "/leadership/vivek.png",
  },
  {
    name: "Arnav Surpur",
    role: "Chairperson of Board",
    isCofounder: true,
    row: 1,
    linkedin: "https://www.linkedin.com/in/arnav-surpur-86749a27a/",
    image: "/leadership/arnav.png",
  },
  {
    name: "Sana Singru",
    role: "CFO",
    row: 2,
    linkedin: "https://www.linkedin.com/in/sana-singru/",
    image: "/leadership/sana.png",
  },
  {
    name: "Shreyaa Gunasekar",
    role: "Secretary",
    row: 2,
    linkedin: "https://www.linkedin.com/in/shreyaa-gunasekar/",
    image: "/leadership/shreyaa.png",
  },
  {
    name: "Dilsi Bhagat",
    role: "Director",
    row: 2,
    linkedin: "https://www.linkedin.com/in/dilsi-bhagat-b395a729b/",
    image: "/leadership/dilsi.png",
  },
  // Soft-hide: set isPublished to true to show Deepesh on the leadership page
  {
    name: "Deepesh Aggarwal",
    role: "Director",
    row: 2,
    isPublished: false,
    linkedin: "https://www.linkedin.com/in/deepesh-aggarwal-uc-berkeley/",
    image: "/leadership/deep.png",
  },
];

function LeadershipCard({
  member,
  index,
}: {
  member: LeadershipMember;
  index: number;
}) {
  const [imageError, setImageError] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      (window.navigator && window.navigator.maxTouchPoints > 0));

  const handleCardClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || isTouchDevice)
    ) {
      e.stopPropagation();
      e.preventDefault();
      setIsOverlayOpen((open) => !open);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setIsOverlayOpen(false);
  };

  const overlayClass =
    "gradient-card-overlay absolute inset-0 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100" +
    (isOverlayOpen ? " opacity-100 z-20" : "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportLazy}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
      className="group relative w-80 max-w-full overflow-hidden rounded-2xl border-2 border-border/60 bg-muted/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40"
      tabIndex={0}
      onClick={handleCardClick}
      onTouchEnd={handleCardClick}
      aria-label={`Show details for ${member.name}`}
      role="button"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            priority={index < 3}
            loading={index < 3 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw"
            className="object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-110 scale-125 translate-y-3"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/10 to-accent/10">
            <span className="font-secondary text-7xl font-semibold text-primary/40">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        <div
          className={overlayClass}
          onClick={isOverlayOpen ? handleOverlayClick : undefined}
          onTouchEnd={isOverlayOpen ? handleOverlayClick : undefined}
        >
          <div className="p-8 text-primary-foreground">
            <h3 className="font-secondary text-2xl font-bold tracking-tight">
              {member.name}
            </h3>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {member.isCofounder && (
                <Badge variant="secondary" className="px-3 py-1 rounded-md">
                  Cofounder
                </Badge>
              )}
              <Badge variant="accent" className="px-3 py-1 rounded-md">
                {member.role}
              </Badge>
            </div>
            <div className="mt-4 flex justify-center text-base text-primary-foreground/90">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                tabIndex={isOverlayOpen ? 0 : -1}
              >
                <Button variant="ghost" className="gap-2 font-semibold" asChild>
                  <span className="inline-flex items-center">
                    <Linkedin className="size-5 shrink-0" />
                    <span>Contact</span>
                  </span>
                </Button>
              </a>
            </div>
            {isOverlayOpen && (
              <button
                className="absolute top-3 right-3 rounded-full bg-overlay-medium p-1 text-primary-foreground hover:bg-overlay-heavy focus:outline-none z-40"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOverlayOpen(false);
                }}
                aria-label="Close details"
              >
                <svg width="24" height="24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LeadershipRow({
  members,
  columns,
  startIndex,
}: {
  members: LeadershipMember[];
  columns: "two" | "three";
  startIndex: number;
}) {
  const gridClass =
    columns === "two"
      ? "grid-cols-1 sm:grid-cols-2 max-w-3xl"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl";

  return (
    <div
      className={`mx-auto grid w-full justify-items-center gap-14 ${gridClass}`}
    >
      {members.map((member, i) => (
        <LeadershipCard
          key={member.name}
          member={member}
          index={startIndex + i}
        />
      ))}
    </div>
  );
}

export function LeadershipContent() {
  const published = leadership.filter((m) => m.isPublished !== false);
  const rowOne = published.filter((m) => m.row === 1);
  const rowTwo = published.filter((m) => m.row === 2);

  return (
    <>
      <section className="page-hero border-b-2 py-24 md:py-36">
        <div className="container px-6 md:px-10">
          <FadeIn onView={false} className="mx-auto max-w-7xl text-center">
            <h1 className="page-hero-title">Our Leadership</h1>
            <p className="page-hero-description">
              The students and leaders driving SAHAARA&apos;s mission to advance
              South Asian cardiovascular and metabolic health
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container px-6 py-24 md:px-10 md:py-36 bg-background">
        <FadeIn onView={false} className="mx-auto flex flex-col gap-16 md:gap-20">
          <LeadershipRow members={rowOne} columns="two" startIndex={0} />
          <LeadershipRow
            members={rowTwo}
            columns="three"
            startIndex={rowOne.length}
          />
        </FadeIn>
      </section>
    </>
  );
}
