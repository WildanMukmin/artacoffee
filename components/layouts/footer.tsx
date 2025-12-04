import Link from "next/link";
import {
  Coffee,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { navigationData } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-amber-950 to-amber-900 text-amber-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <Coffee className="w-8 h-8 text-amber-300 group-hover:text-amber-200 transition-colors" />
              <span className="text-2xl font-bold text-white">Arta Coffee</span>
            </Link>
            <p className="text-amber-200 mb-6 leading-relaxed">
              Connecting the world with Indonesia's finest coffee beans.
              Quality, sustainability, and fair trade at the heart of everything
              we do.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-800/50 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-800/50 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-800/50 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {navigationData.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-amber-200 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {navigationData.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-amber-200 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-300 mt-0.5 shrink-0" />
                <span className="text-amber-200">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-300 shrink-0" />
                <Link
                  href="mailto:info@artacoffee.com"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  info@artacoffee.com
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-300 shrink-0" />
                <Link
                  href="tel:+62123456789"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  +62 123 456 789
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-300 text-sm text-center md:text-left">
              © {currentYear} Arta Coffee. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-amber-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-amber-300 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
