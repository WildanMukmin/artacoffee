"use client";

import { navigationData } from "@/data/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeNav = usePathname();
  if (activeNav === "/linktree") return null;
  return (
    <>
      {/* Glass morphism background with blur effect */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-900/95 to-green-800/95 backdrop-blur-xl border-b border-emerald-700/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
              {/* Icon */}
              <div className="relative shrink-0">
                <Image
                  src="/logo.png"
                  alt="Rabha Coffee Logo"
                  width={40}
                  height={40}
                  className="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 bg-transparent
                       "
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

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationData.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    activeNav === item.href
                      ? "text-yellow-300 bg-white/10"
                      : "text-white/90 hover:text-yellow-300 hover:bg-white/5"
                  }`}
                >
                  {activeNav === item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-xl"></div>
                  )}
                  <span className="relative">{item.name}</span>
                  {activeNav === item.href && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"></div>
                  )}
                </Link>
              ))}

              {/* Enhanced CTA Button */}
              <div className="ml-6">
                <Link
                  href="/linktree"
                  className="relative group inline-flex items-center justify-center gap-2
      rounded-xl px-6 py-3 font-bold text-green-900
      bg-gradient-to-r from-yellow-500 to-amber-500
      shadow-lg shadow-yellow-500/30
      transition-all duration-300
      hover:scale-105 hover:shadow-amber-500/40"
                >
                  {/* Icon + Text */}
                  <span className="relative z-10 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2 text-white hover:text-yellow-400 transition-colors duration-300 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isMenuOpen ? (
                  <X className="relative h-6 w-6 transform transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="relative h-6 w-6 transform transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? " opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="bg-gradient-to-b from-emerald-800/95 to-green-900/95 backdrop-blur-xl border-t border-emerald-700/20">
            <div className="px-4 py-3 space-y-1">
              {navigationData.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 ${
                    activeNav === item.href
                      ? "text-yellow-300 bg-white/10"
                      : "text-white/90 hover:text-yellow-300 hover:bg-white/5"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 pb-2">
                <Link
                  href="/linktree"
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-green-900 px-4 py-3 rounded-lg font-bold flex items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
