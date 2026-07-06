"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Book,
  Camera,
  FlaskConical,
  House,
  Menu,
  MessageCircle,
  Plus,
  User,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { springSnappy } from "@/lib/motion";

const navLinkClass =
  "relative z-10 text-primary-foreground/80 hover:text-accent-foreground";

const navLinks = [
  { href: "/", label: "Home", icon: <House className="size-4" /> },
  {
    href: "/leadership",
    label: "Leadership",
    icon: <User className="size-4" />,
  },
  {
    href: "/initiatives",
    label: "Initiatives",
    icon: <FlaskConical className="size-4" />,
  },
  { href: "/media", label: "Media", icon: <Camera className="size-4" /> },
  { href: "/resources", label: "Resources", icon: <Book className="size-4" /> },
  {
    href: "/get-involved",
    label: "Get Involved",
    icon: <Plus className="size-4" />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <MessageCircle className="size-4" />,
  },
];

function NavLink({
  href,
  label,
  icon,
  isActive,
  onClick,
  className,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link href={href} onClick={onClick} className="relative">
      <Button
        variant="ghost"
        size="sm"
        disableMotion
        className={cn(
          navLinkClass,
          isActive && "text-accent-foreground font-medium",
          className,
        )}
      >
        <span className="relative z-10 flex items-center gap-2">
          {icon}
          {label}
        </span>
      </Button>
      {isActive && (
        <motion.span
          layoutId="header-nav-pill"
          className="absolute inset-0 rounded-md bg-accent"
          transition={springSnappy}
          style={{ zIndex: 0 }}
        />
      )}
    </Link>
  );
}

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
          <motion.div
            whileHover={{ scale: 1.04, rotate: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={springSnappy}
          >
            <Image
              src="/logo.png"
              alt="SAHAARA"
              width={80}
              height={80}
              className="rounded-full"
            />
          </motion.div>
          <span className="font-bold tracking-tight text-primary-foreground font-primary text-2xl">
            SAHAARA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
              isActive={pathname === link.href}
            />
          ))}
          <Link href="/support">
            <Button variant="cta" size="sm" className="ml-2 cursor-pointer">
              Donate
            </Button>
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" disableMotion>
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-primary border-primary-foreground/10"
          >
            <nav className="flex flex-col gap-2 pt-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href}
                  onClick={() => setOpen(false)}
                  className="w-full justify-start"
                />
              ))}
              <Link href="/support" onClick={() => setOpen(false)}>
                <Button variant="cta" className="mt-4 w-full">
                  Donate
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
