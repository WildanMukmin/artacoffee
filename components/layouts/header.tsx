"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Coffee } from "lucide-react";
import { navigationData } from "@/data/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-linear-to-r from-amber-950 to-amber-900 shadow-2xl"
          : "bg-linear-to-b from-amber-950/90 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Coffee className="w-8 h-8 text-amber-300 group-hover:text-amber-200 transition-colors" />
              <div className="absolute -inset-1 bg-amber-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-2xl font-bold text-white">Arta Coffee</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationData.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg font-medium text-amber-200 hover:text-white hover:bg-amber-800/50 transition-all hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/linktree"
              className="ml-4 px-6 py-2 rounded-full font-semibold bg-amber-300 text-amber-950 hover:bg-amber-200 transition-all hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-amber-200 hover:text-white hover:bg-amber-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-amber-800/50">
            <div className="flex flex-col space-y-2">
              {navigationData.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg font-medium text-amber-200 hover:text-white hover:bg-amber-800/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/linktree"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-amber-300 text-amber-950 text-center rounded-full font-semibold hover:bg-amber-200 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
