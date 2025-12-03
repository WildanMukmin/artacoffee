import ProfilePage from "@/components/profile/profile-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Leading Indonesian Coffee Broker Since 2020",
  description:
    "Learn about Arta Coffee, Indonesia's trusted coffee broker connecting global buyers with premium coffee farmers. Our expertise spans Arabica and Robusta sourcing, quality control, export logistics, and sustainable trade practices. Discover our mission to elevate Indonesian coffee on the world stage.",
  keywords: [
    "about Arta Coffee",
    "Indonesian coffee broker company",
    "coffee export company Indonesia",
    "sustainable coffee trading",
    "coffee broker services",
    "Indonesian coffee industry",
    "coffee quality control",
    "direct trade coffee broker",
    "specialty coffee consultant",
  ],
  openGraph: {
    title: "About Arta Coffee - Your Indonesian Coffee Broker Partner",
    description:
      "Expertise in Indonesian coffee brokerage. Connecting global buyers with premium Arabica and Robusta farmers since 2020.",
    url: "https://www.artacoffee.com/profile",
    siteName: "Arta Coffee",
    images: [
      {
        url: "/images/profile-team.jpg",
        width: 1200,
        height: 630,
        alt: "Arta Coffee Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.artacoffee.com/profile",
  },
};

export default function Page() {
  return <ProfilePage />;
}
