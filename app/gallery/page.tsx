import GalleryPage from "@/components/gallery/gallery-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee Gallery - Indonesian Coffee Journey & Operations",
  description:
    "Explore Arta Coffee's visual journey through Indonesian coffee production. View our extensive gallery showcasing coffee farms, processing facilities, quality control operations, and shipment preparations. Witness the complete supply chain from cherry to export-ready green beans.",
  keywords: [
    "Indonesian coffee photos",
    "coffee farm images",
    "coffee processing gallery",
    "specialty coffee production",
    "coffee quality control",
    "green bean processing",
    "coffee warehouse Indonesia",
    "coffee export documentation",
  ],
  openGraph: {
    title: "Coffee Gallery - Arta Coffee's Indonesian Operations",
    description:
      "Visual documentation of our Indonesian coffee brokerage operations, from farm to export.",
    url: "https://www.artacoffee.com/gallery",
    siteName: "Arta Coffee",
    images: [
      {
        url: "/images/gallery-featured.jpg",
        width: 1200,
        height: 630,
        alt: "Arta Coffee Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.artacoffee.com/gallery",
  },
};

export default function Page() {
  return <GalleryPage />;
}
