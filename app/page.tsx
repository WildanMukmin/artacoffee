import HomePage from "@/components/home/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Indonesian Coffee Broker - Direct Trade & Quality Assured",
  description:
    "Arta Coffee is your trusted Indonesian coffee broker specializing in premium Arabica and Robusta beans. We facilitate direct trade between global buyers and Indonesian farmers, ensuring exceptional quality, competitive pricing, and sustainable practices. Connect with Indonesia's finest coffee origins including Sumatra, Java, Sulawesi, and Bali.",
  keywords: [
    "Indonesian coffee broker",
    "premium coffee exporter Indonesia",
    "Arabica coffee supplier",
    "Robusta coffee wholesale",
    "specialty coffee Indonesia",
    "direct trade coffee",
    "green coffee beans Indonesia",
    "Sumatra Mandheling coffee",
    "Java Arabica coffee",
    "Sulawesi Toraja coffee",
    "sustainable coffee sourcing",
    "fair trade coffee Indonesia",
  ],
  openGraph: {
    title: "Arta Coffee - Premium Indonesian Coffee Broker",
    description:
      "Your trusted partner for premium Indonesian Arabica and Robusta coffee. Direct trade, quality assured, sustainably sourced.",
    url: "https://www.artacoffee.com",
    siteName: "Arta Coffee",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Arta Coffee - Indonesian Coffee Broker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.artacoffee.com",
  },
};

export default function Page() {
  return <HomePage />;
}
