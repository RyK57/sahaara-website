"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactContent() {
  return (
    <>
      <section className="border-b border-border bg-background py-12 md:py-20">
        <div className="container px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
              Contact Us
            </h1>
            <p className="mt-2 text-base md:text-lg text-muted-foreground">
              Have a question or want to get involved? Reach out anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-4 py-10 md:py-20">
        <div className="mx-auto max-w-2xl flex flex-col md:flex-row gap-0 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white/60 dark:bg-background/90 shadow-xl ring-1 ring-border/20 flex-1 flex flex-col justify-between items-stretch overflow-hidden backdrop-blur mb-8 md:mb-0"
          >
            {/* Side vertical line indicator for modern visual accent */}
            <div className="hidden md:block w-1 bg-gradient-to-b from-primary/80 to-accent/80 rounded-r-3xl absolute left-0 top-0 bottom-0 z-10" />
            {/* Info and Contact */}
            <div className="px-6 py-10 flex flex-col justify-center">
              {/* Email */}
              <div className="flex items-center gap-4 pb-8 border-b border-border/30 mb-8">
                <span className="flex items-center justify-center bg-primary/90 text-white rounded-lg shadow-sm h-12 w-12">
                  <Mail className="size-5" />
                </span>
                <div>
                  <a
                    href="mailto:contact@sahaara.org"
                    className="text-lg font-semibold text-primary hover:underline transition-colors"
                  >
                    contact@sahaara.org
                  </a>
                  <div className="text-xs text-muted-foreground mt-0.5">We respond within 2-3 business days</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center bg-accent/10 text-accent rounded-lg shadow-sm h-12 w-12">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="text-lg font-semibold text-primary">Bay Area, California</div>
                  <div className="text-xs text-muted-foreground">Founded at UC Berkeley</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex-1 flex flex-col justify-center"
          >
            <form className="space-y-5 bg-background border border-border rounded-lg px-6 py-7 shadow-sm">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="mt-1"
                  autoComplete="off"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1"
                  autoComplete="email"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help?"
                  rows={4}
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 rounded-md py-2 font-medium text-base flex gap-2 items-center"
              >
                <Send className="size-4" />
                Send
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
