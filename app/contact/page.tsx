import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactContent } from "./_components/contact-content";

export const metadata = {
  title: "Contact Us | SAHARAA",
  description: "Get in touch with SAHARAA for questions, partnerships, or volunteering.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ContactContent />
      </main>
    </div>
  );
}
