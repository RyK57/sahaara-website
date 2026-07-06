import { InitiativesContent } from "./_components/initiatives-content";

export const metadata = {
  title: "Initiatives | SAHAARA",
  description:
    "Explore SAHAARA's initiatives in Access, Awareness, and Research for South Asian cardiovascular health.",
};

export default function InitiativesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <InitiativesContent />
    </div>
  );
}
