import {
  BookOpen,
  FileText,
  Globe,
  Info,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export const navigationData = [
  {
    name: "Home",
    href: "/",
    description: "Premium Indonesian Coffee Broker",
  },
  {
    name: "About Us",
    href: "/profile",
    description: "Learn about our coffee brokerage expertise",
  },
  {
    name: "Products",
    href: "/product",
    description: "Browse our Arabica & Robusta selection",
  },
  {
    name: "Gallery",
    href: "/gallery",
    description: "View our coffee operations",
  },
];

export const navigationLinktree = [
  {
    name: "Official Website",
    description: "Visit our main website",
    url: "/",
    icon: Globe,
    color: "from-[#3E2723] to-[#6F4E37]",
    hoverColor: "hover:shadow-[#3E2723]/25",
    followers: "Learn More",
  },
  {
    name: "WhatsApp Business",
    description: "Direct business inquiries",
    url: "https://wa.me/6281234567890", // Update with actual number
    icon: MessageCircle,
    color: "from-green-600 to-green-700",
    hoverColor: "hover:shadow-green-600/25",
    followers: "Quick Response",
  },
  {
    name: "Email Inquiry",
    description: "Business partnerships & quotes",
    url: "mailto:info@artacoffee.com",
    icon: Mail,
    color: "from-blue-600 to-blue-700",
    hoverColor: "hover:shadow-blue-600/25",
    followers: "info@artacoffee.com",
  },
  {
    name: "About Our Company",
    description: "Learn about Arta Coffee",
    url: "/profile",
    icon: Info,
    color: "from-[#6F4E37] to-[#3E2723]",
    hoverColor: "hover:shadow-[#6F4E37]/25",
    followers: "Our Story",
  },
  {
    name: "Product Catalog",
    description: "Download our coffee portfolio",
    url: "/files/arta-coffee-catalog.pdf",
    icon: FileText,
    color: "from-[#D4AF37] to-[#B8941F]",
    hoverColor: "hover:shadow-[#D4AF37]/25",
    followers: "PDF Download",
  },
  {
    name: "Company Profile",
    description: "Complete company overview",
    url: "/files/arta-coffee-company-profile.pdf",
    icon: BookOpen,
    color: "from-purple-600 to-purple-700",
    hoverColor: "hover:shadow-purple-600/25",
    followers: "PDF Brochure",
  },
  {
    name: "Office Location",
    description: "Visit our headquarters",
    url: "https://maps.google.com/?q=Jakarta,Indonesia", // Update with actual location
    icon: MapPin,
    color: "from-red-600 to-red-700",
    hoverColor: "hover:shadow-red-600/25",
    followers: "Jakarta, Indonesia",
  },
  {
    name: "Instagram",
    description: "Follow our coffee journey",
    url: "https://www.instagram.com/artacoffee",
    icon: Instagram,
    color: "from-pink-600 to-purple-600",
    hoverColor: "hover:shadow-pink-600/25",
    followers: "Follow Us",
  },
  {
    name: "LinkedIn",
    description: "Professional network & updates",
    url: "https://linkedin.com/company/arta-coffee",
    icon: Linkedin,
    color: "from-blue-700 to-blue-800",
    hoverColor: "hover:shadow-blue-700/25",
    followers: "Connect",
  },
  {
    name: "Phone Contact",
    description: "Call us for immediate assistance",
    url: "tel:+6281234567890", // Update with actual number
    icon: Phone,
    color: "from-emerald-600 to-emerald-700",
    hoverColor: "hover:shadow-emerald-600/25",
    followers: "+62 812-3456-7890",
  },
];
