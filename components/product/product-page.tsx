"use client";

import { productsData } from "@/data/product";
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  MapPin,
  MessageCircle,
  Search,
  Trophy,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

// Complete and properly typed interfaces
interface ProductSpecification {
  grade: string;
  origin: string;
  shipment: string;
  packing: string;
  payment: string;
  priceTerms: string;
  minimumOrder: string;
  portOfLoading: string;
  sample: string;
  images: string[];
}

interface Product {
  id: number;
  name: string;
  description: string;
  specification: ProductSpecification;
}

// Flattened product type for easier handling
interface FlatProduct extends Product {
  grade: string;
  origin: string;
  shipment: string;
  packing: string;
  payment: string;
  priceTerms: string;
  minimumOrder: string;
  portOfLoading: string;
  sample: string;
  images: string[];
}

const ProductPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<FlatProduct | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (selectedProduct) {
      setCurrentImageIndex(0);
    }
  }, [selectedProduct]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedProduct) {
        setSelectedProduct(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedProduct]);

  // Sample products data with complete structure
  const products: Product[] = productsData;

  // Flatten products for easier handling with proper typing
  const flatProducts: FlatProduct[] = products.map((product) => ({
    ...product,
    ...product.specification,
  }));

  // Filter products with proper type checking
  const filteredProducts = flatProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  // Event handlers with proper typing
  const handleImageNavigation = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedProduct) return;

      setCurrentImageIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % selectedProduct.images.length;
        } else {
          return prev === 0 ? selectedProduct.images.length - 1 : prev - 1;
        }
      });
    },
    [selectedProduct]
  );

  const handleProductSelect = useCallback((product: FlatProduct) => {
    setSelectedProduct(product);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-emerald-700/30 mx-auto">
            <Coffee className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-emerald-200 font-medium">
              Indonesian Robusta Coffee Collection
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text block">
              Premium Products
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover our exclusive indonesian robusta coffee collection,
            carefully sourced from the finest plantations across Indonesia. Each
            product is a true result of dedication and passion for the highest
            quality.
          </p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="bg-white shadow-lg py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Search Input Container */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 
                         text-sm sm:text-base
                         border border-green-200 rounded-lg sm:rounded-xl 
                         focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200 ease-in-out
                         placeholder:text-gray-400
                         bg-gray-50 focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Info */}
          <div className="mb-8 text-center md:text-left">
            <p className="text-green-700">
              Showing {filteredProducts.length} of {flatProducts.length}{" "}
              products
            </p>
          </div>

          {/* Products Grid/List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6 text-center md:text-left">
                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-green-900 mb-3">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-green-700 mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price and Button */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <button
                      onClick={() => handleProductSelect(product)}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 w-full text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-600/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No products found message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Coffee className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-red-200/50 rounded-full flex items-center justify-center hover:bg-red-200/30 cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-red-700" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row overflow-y-auto">
              {/* Product Images */}
              <div className="lg:w-1/2 p-6">
                <div className="relative">
                  <Image
                    width={500}
                    height={500}
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-2xl"
                  />

                  {/* Image Navigation */}
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={() => handleImageNavigation("prev")}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg cursor-pointer"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                      </button>
                      <button
                        onClick={() => handleImageNavigation("next")}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg cursor-pointer"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Images */}
                {selectedProduct.images.length > 1 && (
                  <div className="flex gap-3 mt-4 overflow-x-auto">
                    {selectedProduct.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? "border-green-500"
                            : "border-gray-200 hover:border-green-300"
                        }`}
                      >
                        <Image
                          width={500}
                          height={500}
                          src={image}
                          alt={`${selectedProduct.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="lg:w-1/2 p-6">
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-green-900 mb-4">
                      {selectedProduct.name}
                    </h2>

                    {/* Grade / Price */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-yellow-600">
                          {selectedProduct.grade}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-green-900 mb-4">
                      Specifications
                    </h3>
                    <div className="grid grid-cols-1 gap-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-green-600 mr-2" />
                        <span className="font-bold">Origin:</span>
                        <span className="ml-1">{selectedProduct.origin}</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="w-4 h-4 text-green-600 mr-2" />
                        <span className="font-bold">Grade:</span>
                        <span className="ml-1">{selectedProduct.grade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-green-900 mb-3">
                      Description
                    </h3>
                    <p className="text-green-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Trading Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-green-900 mb-3">
                      Trading Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-bold">Minimum Order:</span>{" "}
                        {selectedProduct.minimumOrder}
                      </div>
                      <div>
                        <span className="font-bold">Packing:</span>{" "}
                        {selectedProduct.packing}
                      </div>
                      <div>
                        <span className="font-bold">Shipment:</span>{" "}
                        {selectedProduct.shipment}
                      </div>
                      <div>
                        <span className="font-bold">Port of Loading:</span>{" "}
                        {selectedProduct.portOfLoading}
                      </div>
                      <div>
                        <span className="font-bold">Payment:</span>{" "}
                        {selectedProduct.payment}
                      </div>
                      <div>
                        <span className="font-bold">Price Terms:</span>{" "}
                        {selectedProduct.priceTerms}
                      </div>
                      <div>
                        <span className="font-bold">Sample:</span>{" "}
                        {selectedProduct.sample}
                      </div>
                    </div>
                  </div>

                  {/* Sample Terms */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-green-900 mb-3">
                      Sample Terms
                    </h3>
                    <ul className="list-disc list-inside text-sm text-green-700 space-y-2 leading-relaxed">
                      <li>We are ready to send samples for your approval.</li>
                      <li>
                        Prior to sample dispatch, we will review and mutually
                        agree upon the terms and conditions, especially
                        regarding pricing.
                      </li>
                      <li>
                        Once we receive your final confirmation on the agreed
                        price, the sample will be sent accordingly.
                      </li>
                      <li>
                        All sample shipping costs will be borne by the buyer.
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-4">
                    <Link
                      href="https://wa.me/6281179702022"
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-600/25 flex items-center justify-center gap-2 mb-4 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Contact Admin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
