import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GetInvolvedContent } from "./_components/get-involved-content";

export const metadata = {
  title: "Get Involved | SAHAARA",
  description:
    "Join SAHAARA and help improve cardiovascular health in South Asian communities.",
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <GetInvolvedContent />
      </main>
    </div>
  );
}
