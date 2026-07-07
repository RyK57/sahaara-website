import { loadMediaImages } from "@/lib/media/load-media-images";
import { MediaGallery } from "./_components/media-gallery";

export const metadata = {
  title: "Media | SAHAARA",
  description: "Photos and media from SAHAARA events and community initiatives.",
};

export default function MediaPage() {
  const images = loadMediaImages();

  return (
    <div className="min-h-screen flex flex-col">
      <MediaGallery images={images} />
    </div>
  );
}
