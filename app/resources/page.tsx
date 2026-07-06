import { ResourcesContent } from "./_components/resources-content";

export const metadata = {
  title: "Resources | SAHAARA",
  description:
    "Health resources and information for South Asian cardiovascular and metabolic health.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ResourcesContent />
    </div>
  );
}
