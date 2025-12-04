"use client";

import { productsData } from "@/data/product";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Coffee,
  CreditCard,
  Info,
  MapPin,
  MessageCircle,
  Package,
  Search,
  Ship,
  Trophy,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

// Type definitions
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

const ProductPage = () => {
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

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedProduct) {
        setSelectedProduct(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedProduct]);

  // Sample products data
  const products = productsData;

  const flatProducts: FlatProduct[] = products.map((product) => ({
    ...product,
    ...product.specification,
  }));

  const filteredProducts = flatProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.grade.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            width={400}
            height={400}
            src="/foto/bg3.jpg"
            alt="Products Background"
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
              Indonesian Robusta Collection
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Coffee
            <span className="block text-transparent bg-linear-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text">
              Products
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Discover our exclusive Indonesian Robusta coffee collection,
            carefully sourced from the finest plantations
          </p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="bg-linear-to-b from-amber-50 to-white py-8 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-amber-900">
              <p className="font-semibold">
                Showing {filteredProducts.length} of {flatProducts.length}{" "}
                products
              </p>
            </div>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, origin, or grade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-amber-200 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white text-amber-900 placeholder:text-amber-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-square bg-linear-to-br from-amber-100 to-amber-200">
                  <Image
                    width={400}
                    height={400}
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-950 text-amber-100 px-4 py-2 rounded-full text-sm font-bold">
                    {product.grade.split("(")[0].trim()}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-950 mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center text-amber-700 mb-4 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {product.origin}
                  </div>

                  <p className="text-amber-800 mb-6 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <button
                    onClick={() => handleProductSelect(product)}
                    className="w-full bg-linear-to-r from-amber-900 to-amber-800 text-white px-6 py-3 rounded-xl font-bold hover:from-amber-800 hover:to-amber-700 transition-all duration-300 hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Coffee className="w-20 h-20 text-amber-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                No products found
              </h3>
              <p className="text-amber-700">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-amber-900" />
            </button>

            <div className="flex flex-col lg:flex-row overflow-y-auto max-h-[90vh]">
              {/* Product Images */}
              <div className="lg:w-1/2 p-6 bg-linear-to-br from-amber-50 to-amber-100">
                <div className="relative">
                  <Image
                    width={400}
                    height={400}
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />

                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={() => handleImageNavigation("prev")}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                      >
                        <ChevronLeft className="w-6 h-6 text-amber-900" />
                      </button>
                      <button
                        onClick={() => handleImageNavigation("next")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                      >
                        <ChevronRight className="w-6 h-6 text-amber-900" />
                      </button>
                    </>
                  )}
                </div>

                {selectedProduct.images.length > 1 && (
                  <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                    {selectedProduct.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? "border-amber-600 scale-105"
                            : "border-amber-200 hover:border-amber-400"
                        }`}
                      >
                        <Image
                          width={400}
                          height={400}
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
              <div className="lg:w-1/2 p-8 overflow-y-auto">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h2 className="text-3xl font-bold text-amber-950 mb-3">
                      {selectedProduct.name}
                    </h2>
                    <div className="inline-block bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-full font-bold text-lg">
                      {selectedProduct.grade}
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center bg-amber-50 p-4 rounded-xl">
                      <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                      <div>
                        <p className="text-xs text-amber-700">Origin</p>
                        <p className="font-bold text-amber-950">
                          {selectedProduct.origin}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center bg-amber-50 p-4 rounded-xl">
                      <Trophy className="w-5 h-5 text-amber-600 mr-3" />
                      <div>
                        <p className="text-xs text-amber-700">Quality</p>
                        <p className="font-bold text-amber-950">
                          {selectedProduct.grade.split("(")[0]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-bold text-amber-950 mb-3 flex items-center">
                      <Info className="w-5 h-5 mr-2" />
                      Description
                    </h3>
                    <p className="text-amber-800 leading-relaxed bg-amber-50 p-4 rounded-xl">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Trading Information */}
                  <div>
                    <h3 className="text-lg font-bold text-amber-950 mb-3 flex items-center">
                      <Package className="w-5 h-5 mr-2" />
                      Trading Information
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          icon: Package,
                          label: "Minimum Order",
                          value: selectedProduct.minimumOrder,
                        },
                        {
                          icon: Package,
                          label: "Packing",
                          value: selectedProduct.packing,
                        },
                        {
                          icon: Ship,
                          label: "Shipment",
                          value: selectedProduct.shipment,
                        },
                        {
                          icon: MapPin,
                          label: "Port of Loading",
                          value: selectedProduct.portOfLoading,
                        },
                        {
                          icon: CreditCard,
                          label: "Payment",
                          value: selectedProduct.payment,
                        },
                        {
                          icon: CreditCard,
                          label: "Price Terms",
                          value: selectedProduct.priceTerms,
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-start bg-amber-50 p-3 rounded-lg"
                        >
                          <item.icon className="w-4 h-4 text-amber-600 mr-3 mt-0.5" />
                          <div className="flex-1">
                            <span className="font-semibold text-amber-950">
                              {item.label}:
                            </span>
                            <span className="ml-2 text-amber-800">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Terms */}
                  <div>
                    <h3 className="text-lg font-bold text-amber-950 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Sample Terms
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "We are ready to send samples for your approval",
                        "Terms and conditions will be reviewed and agreed upon",
                        "Sample sent after final price confirmation",
                        "All sample shipping costs borne by buyer",
                      ].map((term, idx) => (
                        <li
                          key={idx}
                          className="flex items-start bg-amber-50 p-3 rounded-lg"
                        >
                          <CheckCircle className="w-4 h-4 text-amber-600 mr-3 mt-0.5 shrink-0" />
                          <span className="text-amber-800 text-sm">{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="https://wa.me/6281179702022"
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full bg-linear-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact Us for Inquiry
                  </Link>
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
