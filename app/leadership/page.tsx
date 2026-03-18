import { LeadershipContent } from "./_components/leadership-content";

export const metadata = {
  title: "Leadership | SAHAARA",
  description:
    "Meet the students and leaders driving SAHAARA's mission to advance South Asian cardiovascular and metabolic health.",
};

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex-1">
        <LeadershipContent />
      </main>
    </div>
  );
}
