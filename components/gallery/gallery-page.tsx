"use client";

import { galleryData } from "@/data/gallery";
import { Coffee, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<
    null | (typeof galleryData)[0]
  >(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28">
        <Image
          src="/foto/bg5.jpg"
          alt="Background Rabha Mitra Sejahtera"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-green-800/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-emerald-700/30 mx-auto">
            <Coffee className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-emerald-200 font-medium">
              Rabha Mitra Sejahtera Gallery
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text block">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore the journey and activities of Rabha Mitra Sejahtera – from
            coffee farming, sorting, grading, to final distribution.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                item.type === "image"
                  ? "cursor-pointer hover:-translate-y-2"
                  : ""
              }`}
              onClick={() => item.type === "image" && setSelectedItem(item)}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-64 object-cover rounded-3xl"
                />
              )}

              {/* Overlay Title */}
              {item.type === "image" ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              ) : (
                <div className="absolute top-0 left-0 w-full bg-black/50 text-white px-4 py-2 text-sm font-medium">
                  {item.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Modal Highlight (only for images) */}
      {selectedItem && selectedItem.type === "image" && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex justify-center">
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className="w-auto max-w-full max-h-[80vh] rounded-xl object-contain"
              />
            </div>
            <p className="text-center text-white mt-4 text-lg font-medium">
              {selectedItem.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
