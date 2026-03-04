import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutContent } from "./_components/about-content";

export const metadata = {
  title: "About Us | SAHARAA",
  description:
    "Learn about SAHARAA's mission to address cardiovascular and metabolic health disparities in South Asian communities.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <AboutContent />
      </main>
    </div>
  );
}
