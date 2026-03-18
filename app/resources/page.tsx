import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResourcesContent } from "./_components/resources-content";

export const metadata = {
  title: "Resources | SAHAARA",
  description:
    "Health resources and information for South Asian cardiovascular and metabolic health.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-8xl mx-auto w-full px-8">
          <ResourcesContent />
        </div>
      </main>
    </div>
  );
}
