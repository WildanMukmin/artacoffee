import ProductPage from "@/components/product/product-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Coffee Products - Arabica & Robusta from Indonesia",
  description:
    "Explore Arta Coffee's extensive portfolio of premium Indonesian coffee beans. We broker high-quality Arabica from Sumatra, Java, and Sulawesi, plus exceptional Robusta varieties. All beans are carefully sourced, graded, and available for export worldwide. Browse our selection of specialty, commercial, and organic grades.",
  keywords: [
    "Indonesian Arabica coffee",
    "Robusta coffee beans",
    "Sumatra Mandheling",
    "Java Arabica",
    "Toraja coffee",
    "Gayo coffee",
    "Lintong coffee",
    "specialty grade coffee",
    "green coffee beans wholesale",
    "organic coffee Indonesia",
    "Fair Trade coffee",
    "Rainforest Alliance coffee",
  ],
  openGraph: {
    title: "Premium Indonesian Coffee Products - Arta Coffee Broker",
    description:
      "Browse our selection of premium Arabica and Robusta coffee beans from Indonesia's finest origins. Quality guaranteed, sustainably sourced.",
    url: "https://www.artacoffee.com/product",
    siteName: "Arta Coffee",
    images: [
      {
        url: "/images/products-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Indonesian Coffee Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.artacoffee.com/product",
  },
};

export default function Page() {
  return <ProductPage />;
}
