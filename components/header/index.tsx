"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/leadership", label: "Leadership" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/media", label: "Media" },
  { href: "/support", label: "Support Us" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80 cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="SAHARAA"
            width={72}
            height={72}
            className="rounded-full"
          />
          <span className="font-bold tracking-tight text-primary font-secondary text-xl">
            Sahaara
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "text-muted-foreground hover:text-primary cursor-pointer",
                  pathname === link.href && "text-primary font-medium"
                )}
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <Link href="/support">
            <Button variant="default" size="sm" className="ml-2 cursor-pointer bg-accent hover:bg-accent/90 text-accent-foreground">
              Donate
            </Button>
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <nav className="flex flex-col gap-2 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === link.href && "bg-accent/15 text-accent font-medium"
                    )}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
                <Link href="/support" onClick={() => setOpen(false)}>
                <Button className="mt-4 w-full bg-accent hover:bg-accent/90">Donate</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
