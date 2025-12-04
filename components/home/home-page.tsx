"use client";

import {
  Award,
  CheckCircle,
  ChevronRight,
  Coffee,
  Globe,
  Handshake,
  Heart,
  Info,
  Leaf,
  Package,
  Shield,
  Store,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroImages = ["/foto/hero-home.jpeg", "/foto/bg2.jpg", "/foto/bg3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const products = [
    {
      id: 1,
      name: "Indonesian Robusta Grade 1",
      grade: "Premium Quality",
      image: "/product/grade1-1.jpg",
      defects: "0-11 defects",
      description:
        "Our finest selection with minimal defects for premium markets",
    },
    {
      id: 2,
      name: "Indonesian Robusta Grade 3",
      grade: "Standard Quality",
      image: "/product/grade3-1.jpg",
      defects: "26-44 defects",
      description: "Balanced quality for commercial production needs",
    },
    {
      id: 3,
      name: "Indonesian Robusta Grade 4B",
      grade: "Commercial Quality",
      image: "/product/grade4B-1.jpg",
      defects: "61-80 defects",
      description: "Cost-effective solution for industrial applications",
    },
  ];

  const services = [
    {
      icon: Coffee,
      title: "Premium Coffee Distribution",
      description:
        "Supplying green Robusta beans in multiple grades that meet international export standards.",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: Award,
      title: "Quality Grading & Selection",
      description:
        "Meticulous classification ensuring only the finest beans reach global markets.",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Leaf,
      title: "Sustainable Supply Chain",
      description:
        "Year-round reliable supply through partnerships with farmers across Indonesia.",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Store,
      title: "Storage & Processing",
      description:
        "Strategic warehouses preserving freshness from farm to port.",
      color: "from-purple-400 to-violet-600",
    },
  ];

  const stats = [
    {
      icon: Package,
      number: "25,000+",
      label: "Coffee Bags Exported",
      description: "Premium quality shipments",
    },
    {
      icon: Globe,
      number: "10+",
      label: "Export Destinations",
      description: "Countries worldwide",
    },
    {
      icon: Handshake,
      number: "15+",
      label: "Trusted Partners",
      description: "Long-term relationships",
    },
    {
      icon: Coffee,
      number: "14+",
      label: "Coffee Varieties",
      description: "Premium selections",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Building trust through transparency, honesty, and ethical practices in every transaction.",
      features: ["Transparent Pricing", "Ethical Sourcing", "Fair Trade"],
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Protecting our planet while empowering farming communities for a better tomorrow.",
      features: ["Eco-Friendly Farming", "Community Support", "Carbon Neutral"],
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description:
        "Delivering consistent quality and reliable service that exceeds expectations.",
      features: ["Quality Control", "On-Time Delivery", "Premium Standards"],
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-full flex items-center pt-2">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === idx ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Arta Coffee Hero ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-amber-950/95 via-amber-900/90 to-amber-800/85" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-amber-300/30">
              <Coffee className="w-5 h-5 text-amber-300 mr-2" />
              <span className="text-amber-100 font-medium">
                Indonesia's Premium Coffee Exporter
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Connecting Indonesia's
              <span className="block text-transparent bg-linear-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text">
                Finest Coffee
              </span>
              to the World
            </h1>

            <p className="text-xl md:text-2xl text-amber-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Premium Robusta beans sourced directly from Indonesia's highlands,
              delivered with quality, sustainability, and integrity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/product"
                className="group px-8 py-4 bg-amber-400 text-amber-950 rounded-full font-bold text-lg hover:bg-amber-300 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center"
              >
                Explore Products
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/linktree"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-12">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-8 bg-amber-400"
                      : "w-4 bg-white/30"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-300 rotate-90" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-linear-to-b from-white via-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Our <span className="text-amber-700">Services</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              Comprehensive solutions from farm to your doorstep
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-linear-to-br from-amber-950 to-amber-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/foto/bg2.jpg"
                  alt="About Arta Coffee"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-amber-400 text-amber-950 p-6 rounded-2xl shadow-2xl">
                <Award className="w-8 h-8 mb-2" />
                <p className="font-bold text-lg">Premium</p>
                <p className="text-sm">Quality</p>
              </div>
            </div>

            {/* Content */}
            <div className="text-amber-50">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-amber-300">Arta Coffee</span>
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-amber-400 to-amber-300 rounded-full mb-8" />

              <p className="text-lg text-amber-100 mb-6 leading-relaxed">
                Arta Coffee is a leading Indonesian coffee exporter specializing
                in premium Robusta beans. We connect local farmers with
                international markets, ensuring quality, sustainability, and
                fair trade practices.
              </p>

              <p className="text-lg text-amber-100 mb-8 leading-relaxed">
                With strategic locations across Indonesia's coffee-growing
                regions, we maintain consistent supply and superior quality
                standards that meet global demands.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Years Experience", value: "15+" },
                  { label: "Global Partners", value: "50+" },
                  { label: "Quality Grades", value: "5" },
                  { label: "Export Countries", value: "10+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="text-3xl font-bold text-amber-300 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-amber-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-amber-400 text-amber-950 rounded-full font-bold hover:bg-amber-300 transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-linear-to-b from-white to-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Featured <span className="text-amber-700">Products</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              Premium Indonesian Robusta coffee in various grades
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100"
              >
                {/* Image */}
                <div className="relative aspect-square bg-linear-to-br from-amber-100 to-amber-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-950 text-amber-100 px-4 py-2 rounded-full text-sm font-bold">
                    {product.grade}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-950 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-amber-700 mb-4 text-sm">
                    <Info className="w-4 h-4 mr-2" />
                    {product.defects}
                  </div>
                  <p className="text-amber-800 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    href="/product"
                    className="block text-center px-6 py-3 bg-linear-to-r from-amber-900 to-amber-800 text-white rounded-xl font-bold hover:from-amber-800 hover:to-amber-700 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/product"
              className="inline-flex items-center px-8 py-4 bg-amber-950 text-white rounded-full font-bold text-lg hover:bg-amber-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View All Products
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Our <span className="text-amber-700">Values</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={value.title}
                className="bg-linear-to-br from-amber-50 to-amber-100/50 rounded-3xl p-8 border border-amber-200 hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-amber-600 to-amber-700 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-950 mb-4">
                  {value.title}
                </h3>
                <p className="text-amber-800 mb-6 leading-relaxed">
                  {value.description}
                </p>
                <ul className="space-y-2">
                  {value.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-amber-700"
                    >
                      <CheckCircle className="w-5 h-5 mr-2 text-amber-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-linear-to-br from-amber-950 to-amber-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-amber-300">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-400 to-amber-300 mx-auto rounded-full mb-6" />
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <stat.icon className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                <div className="text-4xl font-bold text-amber-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-100 font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-amber-200/80 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-amber-950 to-amber-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <Heart className="w-16 h-16 text-amber-300 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience
                <span className="block text-amber-300">
                  Premium Indonesian Coffee?
                </span>
              </h2>
              <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
                Partner with us and bring the finest Robusta beans to your
                market
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
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
