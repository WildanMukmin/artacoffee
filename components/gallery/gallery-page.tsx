"use client";

import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Image as ImageIcon,
  Video,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  title: string;
  category: string;
}

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Sample gallery data
  const galleryData: GalleryItem[] = [
    {
      id: 1,
      type: "image",
      src: "/foto/petani-kopi.jpeg",
      title: "Coffee Farmers at Work",
      category: "farming",
    },
    {
      id: 2,
      type: "image",
      src: "/foto/bg1.jpg",
      title: "Coffee Plantation",
      category: "farming",
    },
    {
      id: 3,
      type: "image",
      src: "/foto/grading-selection.jpeg",
      title: "Quality Grading Process",
      category: "processing",
    },
    {
      id: 4,
      type: "image",
      src: "/foto/penimbangan.jpeg",
      title: "Weighing the Harvest",
      category: "processing",
    },
    {
      id: 5,
      type: "image",
      src: "/foto/pengemasan.jpeg",
      title: "Packaging & Storage",
      category: "packaging",
    },
    {
      id: 6,
      type: "image",
      src: "/foto/distribusi.jpeg",
      title: "Distribution Ready",
      category: "distribution",
    },
    {
      id: 7,
      type: "image",
      src: "/foto/gudang8.jpeg",
      title: "Warehouse Facility",
      category: "facilities",
    },
    {
      id: 8,
      type: "image",
      src: "/foto/gudang9.jpeg",
      title: "Storage Warehouse",
      category: "facilities",
    },
    {
      id: 9,
      type: "image",
      src: "/foto/bg2.jpg",
      title: "Coffee Beans Collection",
      category: "product",
    },
    {
      id: 10,
      type: "image",
      src: "/foto/bg3.jpg",
      title: "Premium Quality Beans",
      category: "product",
    },
    {
      id: 11,
      type: "image",
      src: "/foto/bg4.jpg",
      title: "Coffee Processing",
      category: "processing",
    },
    {
      id: 12,
      type: "image",
      src: "/foto/bg5.jpg",
      title: "Our Coffee Journey",
      category: "farming",
    },
  ];

  const categories = [
    { id: "all", label: "All", count: galleryData.length },
    {
      id: "farming",
      label: "Farming",
      count: galleryData.filter((item) => item.category === "farming").length,
    },
    {
      id: "processing",
      label: "Processing",
      count: galleryData.filter((item) => item.category === "processing")
        .length,
    },
    {
      id: "packaging",
      label: "Packaging",
      count: galleryData.filter((item) => item.category === "packaging").length,
    },
    {
      id: "distribution",
      label: "Distribution",
      count: galleryData.filter((item) => item.category === "distribution")
        .length,
    },
    {
      id: "facilities",
      label: "Facilities",
      count: galleryData.filter((item) => item.category === "facilities")
        .length,
    },
    {
      id: "product",
      label: "Products",
      count: galleryData.filter((item) => item.category === "product").length,
    },
  ];

  const filteredGallery =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredGallery.findIndex(
      (item) => item.id === selectedItem.id
    );
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setSelectedItem(filteredGallery[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredGallery.findIndex(
      (item) => item.id === selectedItem.id
    );
    const prevIndex =
      currentIndex === 0 ? filteredGallery.length - 1 : currentIndex - 1;
    setSelectedItem(filteredGallery[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            width={400}
            height={400}
            src="/foto/bg5.jpg"
            alt="Gallery Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-amber-950/95 via-amber-900/90 to-amber-800/85" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-amber-300/30">
            <Coffee className="w-5 h-5 text-amber-300 mr-2" />
            <span className="text-amber-100 font-medium">
              Arta Coffee Gallery
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our Coffee
            <span className="block text-transparent bg-linear-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text">
              Journey in Pictures
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            From farm to cup – witness our dedication to quality through every
            step of the process
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-linear-to-b from-amber-50 to-white py-8 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-linear-to-r from-amber-600 to-amber-700 text-white shadow-lg scale-105"
                    : "bg-white text-amber-900 border-2 border-amber-200 hover:border-amber-400 hover:scale-105"
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-linear-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-amber-900 font-semibold">
              Showing {filteredGallery.length}{" "}
              {selectedCategory === "all"
                ? "items"
                : `${selectedCategory} items`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                onClick={() => item.type === "image" && setSelectedItem(item)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.type === "image" ? (
                  <>
                    <div className="relative aspect-4/3 bg-linear-to-br from-amber-100 to-amber-200">
                      <Image
                        width={400}
                        height={400}
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <ImageIcon className="w-5 h-5 text-amber-600" />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-amber-200 text-sm capitalize">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative">
                    <video
                      src={item.src}
                      controls
                      className="w-full aspect-4/3 object-cover rounded-3xl"
                    />
                    <div className="absolute top-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl flex items-center gap-2">
                      <Video className="w-5 h-5" />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-16">
              <Coffee className="w-20 h-20 text-amber-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                No items found
              </h3>
              <p className="text-amber-700">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && selectedItem.type === "image" && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedItem(null);
            }
          }}
        >
          <div className="relative max-w-7xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="flex flex-col items-center">
              <Image
                width={400}
                height={400}
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Image Info */}
              <div className="mt-6 text-center">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-amber-300 text-lg capitalize">
                  {selectedItem.category}
                </p>
                <p className="text-amber-200/60 text-sm mt-2">
                  {filteredGallery.findIndex(
                    (item) => item.id === selectedItem.id
                  ) + 1}{" "}
                  / {filteredGallery.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-amber-950 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Coffee className="w-16 h-16 text-amber-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Quality
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            See the dedication and care that goes into every bean. Contact us to
            learn more about our process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/linktree"
              className="px-8 py-4 bg-amber-400 text-amber-950 rounded-full font-bold text-lg hover:bg-amber-300 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/product"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
