"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { springSnappy } from "@/lib/motion";
import { GET_INVOLVED_AND_DONATE_DISABLED } from "@/lib/constants/site-pages";

const footerLinks = {
  about: [
    { href: "/#about", label: "About Us" },
    { href: "/leadership", label: "Leadership" },
    { href: "/initiatives", label: "Initiatives" },
    { href: "/media", label: "Media" },
  ],
  support: [
    { href: "/resources", label: "Resources" },
    ...(GET_INVOLVED_AND_DONATE_DISABLED
      ? []
      : [{ href: "/get-involved", label: "Get Involved" }]),
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary">
      <div className="container px-4 py-12 md:px-6 flex flex-col items-center">
        <Stagger className="w-full max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
          <StaggerItem className="space-y-4 flex flex-col items-center text-center">
            <Link href="/" className="flex items-center gap-2 justify-center">
              <Image
                src="/logo.png"
                alt="SAHAARA"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-semibold text-primary-foreground">
                SAHAARA
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              South Asian Health Access, Awareness & Research Alliance — a
              501(c) nonprofit addressing cardiovascular and metabolic health
              disparities.
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center text-center">
            <h4 className="mb-4 text-sm font-medium text-primary-foreground">
              Organization
            </h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center text-center">
            <h4 className="mb-4 text-sm font-medium text-primary-foreground">
              {GET_INVOLVED_AND_DONATE_DISABLED ? "Connect" : "Get Involved"}
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center text-center">
            <h4 className="mb-4 text-sm font-medium text-primary-foreground">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2 justify-center">
                <Mail className="size-4 shrink-0" />
                <a
                  href="mailto:contact@sahaarahealth.org"
                  className="hover:text-primary-foreground"
                >
                  contact@sahaarahealth.org
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <MapPin className="size-4 shrink-0" />
                <span>Berkeley, CA</span>
              </li>
            </ul>
          </StaggerItem>
        </Stagger>
        <FadeIn className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-primary-foreground/10 pt-8 w-full">
          <p className="text-sm text-primary-foreground/80 text-center">
            © {new Date().getFullYear()} SAHAARA. All rights reserved.
          </p>
          <motion.p
            className="flex items-center gap-1 text-sm text-primary-foreground/80 justify-center"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Made with{" "}
            <Heart className="size-4 fill-accent text-accent" /> for community
            health
          </motion.p>
        </FadeIn>
      </div>
    </footer>
  );
}
