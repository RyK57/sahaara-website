import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SupportContent } from "./_components/support-content";

export const metadata = {
  title: "Support Us | SAHARAA",
  description:
    "Donate to SAHARAA and support our mission to improve cardiovascular health in South Asian communities.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <SupportContent />
      </main>
    </div>
  );
}
