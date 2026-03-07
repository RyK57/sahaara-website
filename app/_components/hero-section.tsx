"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/header.jpg"
          alt="Background"
          fill
          priority
          className="object-cover w-full h-full brightness-100"
          sizes="100vw"
          quality={100}
          style={{
            filter: "none",
            opacity: 1,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Main Hero Section Content */}
      <div className="container flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 md:px-6 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center w-full max-w-3xl mx-auto"
        >
          <div className="bg-white/95 rounded-xl shadow-xl px-8 py-10 w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-2 mb-6">
              <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="SAHARAA"
                  width={300}
                  height={300}
                  className="rounded-xl shadow brightness-100"
                  priority
                />
                <span className="absolute inset-x-0 bottom-6 flex items-end justify-center">
                  <span className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl bg-none rounded-2xl border-none py-1 px-3 text-primary font-primary">
                    SAHAARA
                  </span>
                </span>
              </div>
            </div>
            <p className="text-lg text-foreground md:text-xl">
              South Asian Health Access, Awareness & Research Alliance
            </p>
            <p className="mt-6 max-w-3xl text-foreground">
              Improving cardiovascular and metabolic health outcomes for South
              Asian communities through access, awareness, and research.
            </p>
            <div className="mt-10 flex gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/about">About Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
