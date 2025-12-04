"use client";

import { ArrowLeft, Home, MessageCircle, PackageX, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotFoundPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [steamAnimation, setSteamAnimation] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Steam animation
    const interval = setInterval(() => {
      setSteamAnimation((prev) => (prev + 1) % 3);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { name: "Home", href: "/", icon: Home, description: "Back to homepage" },
    {
      name: "Products",
      href: "/product",
      icon: PackageX,
      description: "Browse our coffee",
    },
    {
      name: "About Us",
      href: "/about",
      icon: Search,
      description: "Learn more about us",
    },
    {
      name: "Contact",
      href: "/linktree",
      icon: MessageCircle,
      description: "Get in touch",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          width={400}
          height={400}
          src="/foto/bg3.jpg"
          alt="Background"
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
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Coffee Cup Illustration */}
          <div className="relative mb-12">
            <div className="relative inline-block">
              {/* Cup */}
              <div className="relative">
                {/* Steam Animation */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`w-1 bg-amber-300/60 rounded-full transition-all duration-500 ${
                        steamAnimation === i
                          ? "h-8 opacity-100"
                          : "h-4 opacity-30"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-amber-400/30 blur-3xl -z-10" />
            </div>
          </div>

          {/* 404 Text */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold mb-4">
              <span className="text-transparent bg-linear-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text">
                404
              </span>
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6" />
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Looks like this page took a coffee break and never came back. Don't
            worry, we have plenty of other great pages for you to explore!
          </p>

          {/* Fun Message */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl p-6 mb-12 max-w-md mx-auto">
            <p className="text-amber-300 font-semibold mb-2">Did you know?</p>
            <p className="text-amber-100 text-sm">
              A good cup of coffee can fix almost anything... except broken
              links! Let's get you back on track.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {quickLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group bg-white/10 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl p-6 hover:bg-white/20 hover:border-amber-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <link.icon className="w-8 h-8 text-amber-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-amber-300 transition-colors">
                  {link.name}
                </h3>
                <p className="text-amber-200 text-sm group-hover:text-white transition-colors">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 text-amber-950 rounded-full font-bold text-lg hover:bg-amber-300 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <Link
              href="/linktree"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Coffee Beans Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-amber-600/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
