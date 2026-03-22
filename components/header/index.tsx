"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Book, Camera, FlaskConical, Heart, House, Menu, MessageCircle, Plus, User, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", icon: <House className="size-4" /> },
  { href: "/leadership", label: "Leadership", icon: <User className="size-4" /> },
  { href: "/initiatives", label: "Initiatives", icon: <FlaskConical className="size-4" /> },
  { href: "/media", label: "Media", icon: <Camera className="size-4" /> },
  { href: "/support", label: "Support Us", icon: <Heart className="size-4" /> },
  { href: "/resources", label: "Resources", icon: <Book className="size-4" /> },
  { href: "/get-involved", label: "Get Involved", icon: <Plus className="size-4" /> },
  { href: "/contact", label: "Contact", icon: <MessageCircle className="size-4" /> },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-foreground/10 bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/95">
      <div className="container flex h-20 md:h-24 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80 cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="SAHAARA"
            width={80}
            height={80}
            className="rounded-full"
          />
          <span className="font-bold tracking-tight text-primary-foreground font-primary text-2xl">
            SAHAARA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "text-primary-foreground/80 hover:text-primary-foreground cursor-pointer",
                  pathname === link.href && "text-primary-foreground font-medium"
                )}
              >
                <span className="flex items-center gap-2"> {link.icon} {link.label}</span>
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
          <SheetContent side="right" className="w-[280px] bg-primary border-primary-foreground/10">
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
                      "w-full justify-start text-primary-foreground hover:text-primary-foreground",
                      pathname === link.href && "bg-accent/20 text-accent font-medium"
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
