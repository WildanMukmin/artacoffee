"use client";

import { navigationData } from "@/data/navigation";
import {
  ArrowUp,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const socialMediaData = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/cv-rms",
      Icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/cvrms02",
      Icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6281179702022",
      Icon: MessageCircle,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeNav = usePathname();
  if (activeNav === "/linktree") return null;

  return (
    <footer className="relative bg-gradient-to-b from-emerald-900 via-green-900 to-green-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-400 rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer mb-3">
                {/* Icon */}
                <div className="relative shrink-0 bg-transparent">
                  <Image
                    src="/logo.png"
                    alt="Rabha Coffee Logo"
                    width={40}
                    height={40}
                    className="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 bg-transparent"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span
                    className="text-lg sm:text-xl lg:text-2xl font-bold 
                               bg-gradient-to-r from-white to-yellow-100 
                               bg-clip-text text-transparent truncate max-w-[140px] sm:max-w-none"
                  >
                    RABHA MITRA
                  </span>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text block font-medium tracking-wider">
                    SEJAHTERA
                  </div>
                </div>
              </div>

              <p className="text-emerald-200 mb-6 text-lg leading-relaxed max-w-md">
                Delivering premium quality coffee directly from Indonesia’s
                finest plantations. Every cup is an unforgettable taste journey.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                {socialMediaData.map(({ name, href, Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-white/10 backdrop-blur rounded-xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 hover:scale-110"
                    aria-label={name}
                  >
                    <Icon className="w-6 h-6 text-yellow-400 group-hover:text-green-900 transition-colors duration-300" />
                    <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Navigation
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded"></div>
              </h3>
              <ul className="space-y-3">
                {navigationData.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-emerald-200 hover:text-yellow-400 ${
                        activeNav === item.href
                          ? "text-yellow-400 font-bold"
                          : ""
                      } transition-all duration-300 hover:translate-x-2 flex items-center group1`}
                    >
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Contact Us
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded"></div>
              </h3>
              <div className="space-y-4">
                {[
                  {
                    Icon: MessageCircle,
                    text: "+62 811 797 02022",
                    href: "https://wa.me/6281179702022",
                  },
                  {
                    Icon: Mail,
                    text: "cvrms02@gmail.com",
                    href: "mailto:cvrms02@gmail.com",
                  },
                  {
                    Icon: MapPin,
                    text: " Pergudangan Samson Jaya Jl. Insinyur Sutami No.09, Kel Way Laga, Kec. Sukabumi, Kota Bandar Lampung, Lampung 35122",
                    href: "https://maps.app.goo.gl/qeG6MkF4AGfQ6P3s6?g_st=awb",
                  },
                ].map(({ Icon, text, href }) => (
                  <Link
                    key={text}
                    href={href}
                    className="flex items-center text-emerald-200 hover:text-yellow-400 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-white/10 backdrop-blur rounded-lg mr-3 group-hover:bg-yellow-400/20 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{text}</span>
                  </Link>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="mt-6 p-4 bg-white/5 backdrop-blur rounded-xl border border-emerald-700/30">
                <h4 className="text-yellow-400 font-semibold mb-2">
                  Operating Hours
                </h4>
                <p className="text-emerald-200 text-sm">
                  Monday - Saturday: 08:00 - 16:00
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-emerald-700/30 bg-green-950/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-emerald-300 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 RMS Coffee. All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-6">
              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="group p-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-green-900 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 cursor-pointer"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
