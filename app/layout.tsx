import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.artacoffee.com"),
  title: {
    default: "Arta Coffee - Premium Indonesian Coffee Broker & Exporter",
    template: "%s | Arta Coffee",
  },
  description:
    "Arta Coffee is a leading Indonesian coffee broker specializing in premium Arabica and Robusta beans. We connect global buyers with the finest Indonesian coffee farmers, ensuring quality, sustainability, and fair trade practices.",
  keywords: [
    "Indonesian coffee broker",
    "coffee exporter Indonesia",
    "premium Arabica coffee",
    "Robusta coffee supplier",
    "specialty coffee Indonesia",
    "green coffee beans",
    "coffee trading Indonesia",
    "wholesale coffee broker",
    "sustainable coffee sourcing",
    "direct trade coffee",
    "Sumatra coffee",
    "Java coffee",
    "Sulawesi coffee",
    "Bali coffee",
    "Indonesian specialty coffee",
  ],
  authors: [{ name: "Arta Coffee" }],
  creator: "Arta Coffee",
  publisher: "Arta Coffee",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.artacoffee.com",
    siteName: "Arta Coffee",
    title: "Arta Coffee - Premium Indonesian Coffee Broker & Exporter",
    description:
      "Leading Indonesian coffee broker connecting global buyers with premium Arabica and Robusta beans. Quality, sustainability, and fair trade guaranteed.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arta Coffee - Indonesian Coffee Broker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arta Coffee - Premium Indonesian Coffee Broker",
    description:
      "Leading Indonesian coffee broker specializing in premium Arabica and Robusta beans",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "-",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://www.artacoffee.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.artacoffee.com" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="English" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-cream">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
