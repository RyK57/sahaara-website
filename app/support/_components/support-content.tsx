"use client";

import { motion } from "framer-motion";
import { Heart, CreditCard, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SupportContent() {
  return (
    <>
      <section className="border-b border-border bg-accent/5 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-6xl text-center"
          >
            <Heart className="mx-auto size-12 text-accent" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl text-primary">
              Support Our Mission
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your donation helps us expand screenings, deliver workshops, and
              advance research for South Asian cardiovascular health.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="overflow-hidden transition-all hover:shadow-md hover:border-accent/30">
              <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                  <CreditCard className="size-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-primary">Donate via PayPal</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Secure, one-time or recurring donations through PayPal
                  </p>
                  <Button className="mt-4 bg-accent hover:bg-accent/90" asChild>
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
            <Card className="overflow-hidden transition-all hover:shadow-md hover:border-primary/30">
              <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                  <Building2 className="size-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-primary">Donate via Zelle</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Send donations directly to our organization via Zelle
                  </p>
                  <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
                    <p className="text-sm font-medium">Zelle to:</p>
                    <p className="mt-1 font-mono text-sm text-muted-foreground">
                      donations@sahaara.org
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Please include &quot;SAHARAA Donation&quot; in the memo
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
            className="text-center text-sm text-muted-foreground"
          >
            SAHARAA is a 501(c) nonprofit. Donations may be tax-deductible.
            Please consult your tax advisor.
          </motion.p>
        </div>
      </section>
    </>
  );
}
