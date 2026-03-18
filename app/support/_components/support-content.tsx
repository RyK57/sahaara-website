"use client";

import { motion } from "framer-motion";
import { Heart, CreditCard, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SupportContent() {
  return (
    <>
      <section className="border-b border-accent-foreground/10 bg-accent py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-6xl text-center"
          >
            <Heart className="mx-auto size-12 text-accent-foreground" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl text-accent-foreground">
              Support Our Mission
            </h1>
            <p className="mt-4 text-lg text-accent-foreground/90">
              Your donation helps us expand screenings, deliver workshops, and
              advance research for South Asian cardiovascular health.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-4 py-16 md:px-6 md:py-24 bg-background">
        <div className="mx-auto max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-accent border-accent/20 bg-accent/5">
              <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <CreditCard className="size-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-primary">Donate via PayPal</h2>
                  <p className="mt-1 text-sm text-foreground/80">
                    Secure, one-time or recurring donations through PayPal
                  </p>
                  <Button className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <a
                      href="https://www.paypal.com/donate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Donate with PayPal
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Building2 className="size-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-primary">Donate via Zelle</h2>
                  <p className="mt-1 text-sm text-foreground/80">
                    Send donations directly to our organization via Zelle
                  </p>
                  <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <p className="text-sm font-medium text-primary">Zelle to:</p>
                    <p className="mt-1 font-mono text-sm text-foreground/90">
                      donations@sahaara.org
                    </p>
                    <p className="mt-2 text-xs text-foreground/70">
                      Please include &quot;SAHAARA Donation&quot; in the memo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-foreground/70"
          >
            SAHAARA is a 501(c) nonprofit. Donations may be tax-deductible.
            Please consult your tax advisor.
          </motion.p>
        </div>
      </section>
    </>
  );
}
