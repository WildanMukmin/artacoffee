"use client";

import {
  Award,
  ExternalLink,
  Globe,
  Star,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  FileText,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LinkItem {
  name: string;
  description: string;
  url: string;
  icon: any;
  color: string;
  hoverColor: string;
  followers?: string;
}

const LinktreePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Navigation links data
  const navigationLinktree: LinkItem[] = [
    {
      name: "Instagram",
      description: "Follow our coffee journey",
      url: "https://instagram.com/artacoffee",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:border-pink-500",
      followers: "10K+ followers",
    },
    {
      name: "Facebook",
      description: "Join our community",
      url: "https://facebook.com/artacoffee",
      icon: Facebook,
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:border-blue-500",
      followers: "15K+ likes",
    },
    {
      name: "LinkedIn",
      description: "Connect professionally",
      url: "https://linkedin.com/company/artacoffee",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:border-blue-600",
      followers: "5K+ connections",
    },
    {
      name: "WhatsApp Business",
      description: "Chat with us directly",
      url: "https://wa.me/6281179702022",
      icon: MessageCircle,
      color: "from-green-500 to-green-700",
      hoverColor: "hover:border-green-500",
      followers: "24/7 support",
    },
    {
      name: "Product Catalog",
      description: "Browse our coffee selection",
      url: "/product",
      icon: ShoppingBag,
      color: "from-amber-500 to-amber-700",
      hoverColor: "hover:border-amber-500",
      followers: "14+ varieties",
    },
    {
      name: "Company Profile",
      description: "Learn about our story",
      url: "/about",
      icon: FileText,
      color: "from-emerald-500 to-emerald-700",
      hoverColor: "hover:border-emerald-500",
      followers: "15+ years experience",
    },
    {
      name: "Email Us",
      description: "Send us a message",
      url: "mailto:info@artacoffee.com",
      icon: Mail,
      color: "from-red-500 to-red-700",
      hoverColor: "hover:border-red-500",
      followers: "Quick response",
    },
    {
      name: "Location",
      description: "Visit our office",
      url: "https://maps.google.com/?q=Jakarta,Indonesia",
      icon: MapPin,
      color: "from-teal-500 to-teal-700",
      hoverColor: "hover:border-teal-500",
      followers: "Jakarta, Indonesia",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden py-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          width={1920}
          height={1080}
          src="/foto/bg3.jpg"
          alt="Arta Coffee Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-950/95 via-amber-900/90 to-amber-800/85" />

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-lg mx-auto px-4 py-8">
        {/* Profile Section */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Logo */}
          <div className="relative mx-auto w-32 h-32 mb-6">
            <div className="relative rounded-full w-full h-full flex items-center justify-center border-4 border-amber-300 shadow-2xl overflow-hidden bg-white">
              <div className="w-24 h-24 bg-amber-900 rounded-full flex items-center justify-center">
                <span className="text-white text-4xl font-bold">AC</span>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl -z-10" />
          </div>

          {/* Brand Name */}
          <h1 className="text-4xl font-bold text-white mb-3">ARTA COFFEE</h1>
          <p className="text-amber-200 text-lg mb-6">
            Premium Indonesian Robusta Exporter
          </p>

          {/* Tagline */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 mb-6 border-2 border-amber-400/30">
            <p className="text-amber-300 font-semibold text-base mb-2">
              "Connecting Indonesia's Finest Coffee to the World"
            </p>
            <div className="flex items-center justify-center flex-wrap gap-3">
              <div className="flex items-center">
                <Award className="w-4 h-4 text-amber-300 mr-1" />
                <span className="text-amber-200 text-xs">Premium Quality</span>
              </div>
              <span className="text-amber-300">•</span>
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-amber-300 mr-1" />
                <span className="text-amber-200 text-xs">10+ Countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          {navigationLinktree.map((link, index) => {
            const Icon = link.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : "_self"}
                  className={`block group relative bg-white/10 backdrop-blur-xl border-2 border-amber-400/30 rounded-2xl p-5 hover:scale-105 transition-all duration-300 ${link.hoverColor} hover:shadow-2xl hover:bg-white/20`}
                >
                  <div className="flex items-center">
                    {/* Icon */}
                    <div
                      className={`bg-linear-to-r ${link.color} w-14 h-14 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold text-lg group-hover:text-amber-300 transition-colors duration-300">
                          {link.name}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-amber-300 group-hover:text-amber-200 transition-all duration-300" />
                      </div>
                      <p className="text-amber-200 text-sm mb-1 group-hover:text-white transition-colors duration-300">
                        {link.description}
                      </p>
                      {link.followers && (
                        <span className="text-amber-400 text-xs font-medium">
                          {link.followers}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${link.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-amber-400/30 text-center">
            <div className="text-2xl font-bold text-amber-300 mb-1">25K+</div>
            <div className="text-xs text-amber-200">Bags Exported</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-amber-400/30 text-center">
            <div className="text-2xl font-bold text-amber-300 mb-1">10+</div>
            <div className="text-xs text-amber-200">Countries</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-amber-400/30 text-center">
            <div className="text-2xl font-bold text-amber-300 mb-1">15+</div>
            <div className="text-xs text-amber-200">Partners</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-amber-400/30">
            <div className="flex items-center justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-400 fill-current mx-0.5"
                />
              ))}
            </div>
            <p className="text-amber-200 text-sm mb-3">
              "Trusted by coffee enthusiasts worldwide"
            </p>
            <div className="flex items-center justify-center text-amber-300 text-sm font-semibold">
              <Globe className="w-4 h-4 mr-2" />
              <span>www.artacoffee.com</span>
            </div>
          </div>

          <p className="text-amber-300 text-xs mt-6 font-medium">
            © 2025 Arta Coffee - Jakarta, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinktreePage;
