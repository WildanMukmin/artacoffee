import { Coffee, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5DC] to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Coffee Icon Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Coffee className="w-24 h-24 text-[#6F4E37] animate-bounce" />
            <div className="absolute inset-0 bg-[#D4AF37] opacity-20 blur-xl rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* 404 Heading */}
        <h1 className="text-8xl font-bold text-[#3E2723] mb-4">404</h1>

        <h2 className="text-3xl font-bold text-[#6F4E37] mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-[#666666] mb-8 max-w-md mx-auto">
          Oops! It seems like this coffee bean has rolled away. The page you're
          looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#3E2723] hover:bg-[#6F4E37] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            href="/product"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B8941F] text-[#3E2723] px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Coffee className="w-5 h-5" />
            Browse Products
          </Link>
        </div>

        {/* Suggestion Links */}
        <div className="mt-12 pt-8 border-t border-[#6F4E37]/20">
          <p className="text-sm text-[#666666] mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/profile"
              className="text-sm text-[#6F4E37] hover:text-[#3E2723] underline"
            >
              About Us
            </Link>
            <span className="text-[#666666]">•</span>
            <Link
              href="/product"
              className="text-sm text-[#6F4E37] hover:text-[#3E2723] underline"
            >
              Our Products
            </Link>
            <span className="text-[#666666]">•</span>
            <Link
              href="/gallery"
              className="text-sm text-[#6F4E37] hover:text-[#3E2723] underline"
            >
              Gallery
            </Link>
            <span className="text-[#666666]">•</span>
            <Link
              href="/linktree"
              className="text-sm text-[#6F4E37] hover:text-[#3E2723] underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
