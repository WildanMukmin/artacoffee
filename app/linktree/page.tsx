import LinktreePage from "@/components/linktree/linktree-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Social Links - Connect with Arta Coffee",
  description:
    "Connect with Arta Coffee through multiple channels. Access our official website, social media profiles, contact information, and business resources. Get in touch for coffee brokerage inquiries, partnerships, or general questions about Indonesian coffee.",
  keywords: [
    "Arta Coffee contact",
    "coffee broker contact",
    "Indonesian coffee supplier contact",
    "coffee business inquiry",
    "coffee export contact Indonesia",
  ],
  openGraph: {
    title: "Connect with Arta Coffee - Official Links",
    description:
      "All official links and contact channels for Arta Coffee, Indonesia's premier coffee broker.",
    url: "https://www.artacoffee.com/linktree",
    siteName: "Arta Coffee",
    images: [
      {
        url: "/images/logo-og.jpg",
        width: 800,
        height: 800,
        alt: "Arta Coffee Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.artacoffee.com/linktree",
  },
};

export default function Page() {
  return <LinktreePage />;
}
