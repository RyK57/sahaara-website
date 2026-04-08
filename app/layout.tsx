import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SAHAARA | South Asian Health Access, Awareness & Research Alliance",
    template: "%s | SAHAARA",
  },
  description:
    "SAHAARA is a 501(c) nonprofit addressing cardiovascular and metabolic health disparities in South Asian communities through access, awareness, and research.",
};

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary antialiased flex flex-col min-h-screen w-full">
        <Header />
        <main className="w-full flex-1 flex flex-col">
          <div className="w-full min-w-0">
            {children}
          </div>
        </main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
