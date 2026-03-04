import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InitiativesContent } from "./_components/initiatives-content";

export const metadata = {
  title: "Initiatives | SAHARAA",
  description:
    "Explore SAHARAA's initiatives in Access, Awareness, and Research for South Asian cardiovascular health.",
};

export default function InitiativesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-8xl mx-auto w-full px-8">
          <InitiativesContent />
        </div>
      </main>
    </div>
  );
}
