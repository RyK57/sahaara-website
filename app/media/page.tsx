import { MediaGallery } from "./_components/media-gallery";

export const metadata = {
  title: "Media | SAHAARA",
  description: "Photos and media from SAHAARA events and community initiatives.",
};

export default function MediaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MediaGallery />
    </div>
  );
}
