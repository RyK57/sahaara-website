"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Heart, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const resources = [
  {
    title: "American Heart Association",
    description: "South Asian health resources and guidelines",
    href: "https://www.heart.org",
    img: "/partners/aha.png",

  },
  {
    title: "South Asian Heart Center",
    description: "Specialized cardiovascular care for South Asians",
    href: "https://www.southasianheartcenter.org",
    img: "/partners/sahc.png",
  },
  {
    title: "CDC Heart Disease Facts",
    description: "National statistics and prevention information",
    href: "https://www.cdc.gov/heartdisease",
    img: "/partners/cdc.png", 
  },
];

export function ResourcesContent() {
  return (
    <>
      <section className="border-b border-primary-foreground/10 bg-primary py-16 md:py-24 rounded-b-3xl">
        <div className="container px-4 md:px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-[110rem] text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-primary-foreground">
              Resources
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Helpful links and information for cardiovascular and metabolic
              health
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-4 py-16 md:px-6 md:py-24 bg-background">
        <div className="mx-auto max-w-5xl flex flex-col gap-8 md:gap-10">
          <div className="grid gap-8 md:gap-10 md:grid-cols-3">
            {resources.map((resource, i) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex"
              >
                <Card className="w-full group transition-all hover:shadow-2xl border-primary/20 hover:border-accent bg-primary/5 flex min-h-[220px] md:min-h-[270px]">
                  <CardContent className="flex flex-col items-center justify-center gap-6 px-8 py-10 h-full w-full">
                    <div className="flex-none flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/20 mb-4">
                    {resource.img ? (
                      <Image
                        src={resource.img}
                        alt={`${resource.title} logo`}
                        width={120}
                        height={120}
                        className="object-contain rounded-lg border border-border bg-white p-2 max-h-20 max-w-20"
                        style={{ maxWidth: 120, maxHeight: 120 }}
                      />
                    ) : (
                      <Image
                        src={resource.img}
                        alt={`${resource.title} logo`}
                        width={120}
                        height={120}
                        className="object-contain rounded-lg border border-border bg-white p-2 max-h-20 max-w-20"
                        style={{ maxWidth: 120, maxHeight: 120 }}
                      />
                    )}

                    </div>
                    <div className="flex-1 flex flex-col items-center min-w-0 w-full">
                      <h2 className="font-semibold text-primary text-xl mb-2 text-center">{resource.title}</h2>
                      <p className="text-base text-foreground/80 text-center line-clamp-3">{resource.description}</p>
                    </div>
                    <div className="flex-none mt-4">
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-2 text-base"
                      >
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex gap-2 items-center"
                        >
                          Visit <ExternalLink className="size-5" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg">
              <Link href="/contact">Request Additional Resources</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
