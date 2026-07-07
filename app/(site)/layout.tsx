import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SahaaraChatWidget } from "@/components/chat/sahaara-chat-widget";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex w-full flex-1 flex-col">
        <div className="w-full min-w-0">{children}</div>
      </main>
      <Footer />
      <SahaaraChatWidget />
    </>
  );
}
