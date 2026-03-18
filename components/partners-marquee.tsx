"use client";

import { motion } from "framer-motion";

const partners = [
  "Jeeva Clinic",
  "South Asian Heart Center",
  "Livermore Temple",
  "American Heart Association",
  "Berkeley School of Public Health",
];

import Image from "next/image";

const partnerData = [
  {
    name: "Jeeva Clinic",
    logo: "/partners/jeevaclinic.png",
    url: "https://www.instagram.com/jeevaclinic/?hl=en",
  },
  {
    name: "South Asian Heart Center",
    logo: "/partners/sahc.png",
    url: "https://www.southasianheartcenter.org/",
  },
  {
    name: "Livermore Temple",
    logo: "/partners/livermore_temple.jpg",
    url: "https://livermoretemple.org/",
  },
  {
    name: "American Heart Association",
    logo: "/partners/aha.png",
    url: "https://www.heart.org/en/",
  },
  {
    name: "Berkeley School of Public Health",
    logo: "/partners/cal_sph.jpg",
    url: "https://publichealth.berkeley.edu/",
  },
];

export function PartnersMarquee() {
  // Duplicate the data to make the marquee seamless
  const marqueePartners = [...partnerData, ...partnerData];
  return (
    <section className="border-t border-primary-foreground/10 py-14 bg-primary w-full overflow-x-hidden">
      <div className="container flex flex-col items-center gap-12">
        <h3 className="text-center text-3xl font-semibold font-secondary text-primary-foreground tracking-tight mb-4">
          Proudly partnered with
        </h3>
        <div className="relative w-full">
          {/* Marquee container */}
          <motion.div
            className="flex gap-10 md:gap-16 w-fit"
            style={{ willChange: "transform" }}
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 24,
            }}
          >
            {marqueePartners.map((partner, idx) => (
              <a
                key={partner.name + idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background rounded-2xl shadow-lg border border-primary-foreground/10 flex flex-col items-center px-8 py-6 hover:shadow-xl transition hover:border-accent focus-visible:ring-2 ring-accent group"
                style={{ minWidth: 200, maxWidth: 240 }}
                tabIndex={0}
              >
                <div
                  className={`relative flex items-center justify-center mb-4 shrink-0 overflow-hidden ${
                    partner.name === "South Asian Heart Center"
                      ? "w-28 h-24"
                      : "w-36 h-24"
                  }`}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name + " logo"}
                    fill
                    className="rounded-lg object-contain p-0.5"
                    sizes="160px"
                    priority
                  />
                </div>
                <span className="text-base text-center text-foreground group-hover:text-primary font-medium">
                  {partner.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

