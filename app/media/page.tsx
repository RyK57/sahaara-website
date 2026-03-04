import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MediaGallery } from "./_components/media-gallery";

export const metadata = {
  title: "Media | SAHARAA",
  description: "Photos and media from SAHARAA events and community initiatives.",
};

export default function MediaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <MediaGallery />
      </main>
    </div>
  );
}
