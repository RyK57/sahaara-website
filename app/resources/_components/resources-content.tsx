"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { healthResources } from "@/lib/constants/resources";
import { springSnappy } from "@/lib/motion";

export function ResourcesContent() {
  return (
    <>
      <section className="page-hero rounded-b-3xl">
        <div className="container px-4 md:px-6 xl:px-12">
          <FadeIn onView={false} className="mx-auto max-w-7xl text-center">
            <h1 className="page-hero-title">Resources</h1>
            <p className="page-hero-description">
              Helpful links and information for cardiovascular and metabolic
              health
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-4 py-16 md:px-6 md:py-24">
        <div className="container mx-auto flex max-w-5xl flex-col gap-8 md:gap-10">
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {healthResources.map((resource, index) => (
              <StaggerItem key={resource.title} className="flex">
                <motion.div
                  className="flex w-full"
                  whileHover={{ y: -8 }}
                  transition={springSnappy}
                >
                  <Card className="group flex w-full border-none bg-accent shadow-sm transition-all hover:bg-accent/90 hover:shadow-xl">
                    <CardContent className="flex h-full w-full flex-col items-center gap-5 px-6 py-8">
                      {resource.img && (
                        <motion.div
                          className="mb-1 flex size-20 flex-none items-center justify-center rounded-2xl bg-accent-foreground/20"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={springSnappy}
                        >
                          <Image
                            src={resource.img}
                            alt={`${resource.title} logo`}
                            width={80}
                            height={80}
                            priority={index < 2}
                            loading={index < 2 ? "eager" : "lazy"}
                            className="max-h-16 max-w-16 rounded-lg border border-accent-foreground/20 bg-background object-contain p-2"
                          />
                        </motion.div>
                      )}
                      <div className="flex min-w-0 flex-1 flex-col items-center">
                        <h2 className="mb-2 text-center text-lg font-semibold text-accent-foreground md:text-xl">
                          {resource.title}
                        </h2>
                        <p className="text-center text-sm leading-relaxed text-accent-foreground/90 md:text-base">
                          {resource.description}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="mt-auto border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                      >
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          Visit <ExternalLink className="size-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn className="mt-8 text-center">
            <Button
              variant="outline"
              asChild
              className="border-accent px-8 py-3 text-lg text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link href="/contact">Request Additional Resources</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
