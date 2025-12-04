"use client";

import { navigationLinktree } from "@/data/navigation";
import { Award, ExternalLink, Globe, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LinktreePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden py-20">
      {/* Background image */}
      <Image
        src="/foto/bg3.jpg"
        alt="Background Rabha Mitra Sejahtera"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-green-800/70" />

      <div className="relative max-w-md mx-auto px-4 py-8">
        {/* Profile Section */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mx-auto w-32 h-32 mb-6">
            {/* White circle */}
            <div className="relative rounded-full w-full h-full flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                priority
                className="bg-transparent"
              />
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="text-3xl font-bold text-white mb-2">
            RABHA MITRA SEJAHTERA
          </h1>
          <p className="text-emerald-200 text-lg mb-4">
            Empowering farmers reaching the world
          </p>

          {/* Tagline */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 mb-6 border border-emerald-700/30">
            <p className="text-yellow-300 font-medium text-sm">
              &quot;Commercial Coffee Indonesia&quot;
            </p>
            <div className="flex items-center justify-center mt-2">
              <Award className="w-4 h-4 text-green-300 mr-1" />
              <span className="text-green-300 text-xs">Eudr Certified</span>
              <span className="text-emerald-300 mx-2">•</span>
              <Award className="w-4 h-4 text-yellow-300 mr-1" />
              <span className="text-yellow-300 text-xs">4C Certified</span>
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
                  target="_blank"
                  className={`block group relative bg-white/10 backdrop-blur-xl border border-emerald-700/30 rounded-2xl p-5 hover:scale-105 transition-all duration-300 ${link.hoverColor} hover:shadow-2xl hover:bg-white/20`}
                >
                  <div className="flex items-center">
                    {/* Icon */}
                    <div
                      className={`bg-gradient-to-r ${link.color} w-14 h-14 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300">
                          {link.name}
                        </h3>
                        <ExternalLink
                          className={`w-5 h-5 text-emerald-300 group-hover:text-yellow-300 transition-all duration-300 `}
                        />
                      </div>
                      <p className="text-emerald-200 text-sm mb-1 group-hover:text-white transition-colors duration-300">
                        {link.description}
                      </p>
                      <span className="text-yellow-300 text-xs font-medium">
                        {link.followers}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  ></div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-center mb-3">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current mx-1" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current mx-1" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
            <p className="text-emerald-200 text-sm mb-2">
              &quot;Trusted by thousands of customers&quot;
            </p>
            <div className="flex items-center justify-center text-yellow-300 text-xs">
              <Globe className="w-4 h-4 mr-1" />
              <span>www.rmscoffee.com</span>
            </div>
          </div>

          <p className="text-emerald-300 text-xs mt-6">
            © 2025 Rabha Mitra Sejahtera Lampung
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinktreePage;
