import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, MapPin } from "lucide-react";

const footerLinks = {
  about: [
    { href: "/about", label: "About Us" },
    { href: "/leadership", label: "Leadership" },
    { href: "/initiatives", label: "Initiatives" },
    { href: "/media", label: "Media" },
  ],
  support: [
    { href: "/support", label: "Support Us" },
    { href: "/resources", label: "Resources" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary/5">
      <div className="container px-4 py-12 md:px-6 flex flex-col items-center">
        <div className="w-full max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
          <div className="space-y-4 flex flex-col items-center text-center">
            <Link href="/" className="flex items-center gap-2 justify-center">
              <Image
                src="/logo.png"
                alt="SAHARAA"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-semibold text-primary">SAHARAA</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              South Asian Health Access, Awareness & Research Alliance — a 501(c)
              nonprofit addressing cardiovascular and metabolic health disparities.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-4 text-sm font-medium text-primary">Organization</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-4 text-sm font-medium text-primary">Get Involved</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-4 text-sm font-medium text-primary">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 justify-center">
                <Mail className="size-4 shrink-0" />
                <a
                  href="mailto:contact@sahaara.org"
                  className="hover:text-foreground"
                >
                  contact@sahaara.org
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <MapPin className="size-4 shrink-0" />
                <span>Bay Area, California</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 w-full">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} SAHARAA. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground justify-center">
            Made with <Heart className="size-4 fill-accent text-accent" /> for
            community health
          </p>
        </div>
      </div>
    </footer>
  );
}
