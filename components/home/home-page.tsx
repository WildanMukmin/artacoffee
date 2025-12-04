"use client";

import {
  Award,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  CloudRain,
  Coffee,
  Globe,
  Handshake,
  Info,
  Leaf,
  MapPin,
  Mountain,
  Package,
  Play,
  Sprout,
  Store,
  Thermometer,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % steps.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + steps.length) % steps.length);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Indonesian Robusta Ek-1 Grade 1",
      image: "/product/grade1-1.jpg",
      description:
        "EK-1 Grade 1 with 11 Defects means that these coffee beans fall under Grade 1 based on the Indonesian National Standard (0-11 defects), with this particular batch having around 11 defects.",
    },
    {
      id: 2,
      name: "Indonesian Robusta Ek-1 Grade 3",
      image: "/product/grade3-1.jpg",
      description:
        "EK-1 Grade 3 with 44 Defects means that these coffee beans fall under Grade 3 based on the Indonesian National Standard (26-44 defects), with this particular batch having around 44 defects.",
    },
    {
      id: 3,
      name: "Indonesian Robusta Ek-1 Grade 4B",
      image: "/product/grade4B-1.jpg",
      description:
        "EK-1 Grade 4B with 80 defects means this coffee bean falls under Grade 4B based on the Indonesian National Standard (61-80 defects), with this batch having around 80 defects.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Coffee Growers",
      description: "Where the flavor journey begins",
      color: "from-emerald-500 to-green-600",
      image: "/foto/petani-kopi.jpeg",
    },
    {
      number: "2",
      title: "Primary Sorting",
      description:
        "Separating coffee beans from impurities and defective beans",
      color: "from-blue-500 to-indigo-600",
      image: "/foto/bg1.jpg",
    },
    {
      number: "3",
      title: "Quality Grading",
      description: "Sorting beans according to size and overall quality",
      color: "from-purple-500 to-violet-600",
      image: "/foto/grading-selection.jpeg",
    },
    {
      number: "4",
      title: "Weighing the Harvest",
      description:
        "Measuring the total weight of freshly harvested coffee beans",
      color: "from-orange-500 to-red-600",
      image: "/foto/penimbangan.jpeg",
    },
    {
      number: "5",
      title: "Packaging & Storage",
      description:
        "Carefully graded beans are packed and stored to preserve quality before shipping",
      color: "from-yellow-500 to-amber-600",
      image: "/foto/pengemasan.jpeg",
    },
    {
      number: "6",
      title: "Market Distribution",
      description:
        "Delivering the final coffee products to partners and markets worldwide",
      color: "from-teal-500 to-cyan-600",
      image: "/foto/distribusi.jpeg",
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Company Introduction */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <Image
          src="/foto/bg2.jpg"
          alt="Rabha Mitra Sejahtera Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-green-800/70" />

        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen text-center lg:text-left">
            {/* Left Content */}
            <div
              className={`text-white transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-emerald-700/30 mt-8">
                <span className="text-emerald-200 font-medium ">
                  Lampung Coffee Exporter
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                RABHA
                <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text block">
                  MITRA
                </span>
                <span className="text-3xl md:text-6xl">SEJAHTERA</span>
              </h1>

              <p className="text-sm md:text-md mb-4 text-emerald-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
                The story of CV Rabha Mitra Sejahtera began with a strong
                friendship that developed during their junior high school years
                in 1992. Both founders subsequently followed parallel career
                paths, entering the same business sector, specifically the
                agricultural commodity of coffee, starting as coffee brokers in
                2006.
              </p>
              <p className="text-sm md:text-md mb-4 text-emerald-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Over the years, their experience and knowledge in the coffee
                industry continued to grow. Driven by a shared vision and
                mission to establish a larger, more professional, and
                globally-oriented business, they decided to form a formal
                entity.
              </p>
              <p className="text-sm md:text-md mb-10 text-emerald-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Thus, on February 18, 2022, CV Rabha Mitra Sejahtera was
                officially founded. The company aims to bring the finest quality
                Indonesian coffee, especially Lampung Robusta coffee, to the
                world market.
              </p>
            </div>

            {/* Right Content - Slideshow */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Slideshow container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full h-96 lg:h-[500px]">
                  <Image
                    src={`/foto/hero-home.jpeg`}
                    alt={`hero image`}
                    fill
                    className={`object-cover transition-opacity duration-1000 opacity-100`}
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute md:block hidden -bottom-14 -left-8 bg-gradient-to-r from-amber-400 to-amber-500 text-green-900 p-4 rounded-xl shadow-2xl animate-bounce">
                  <div className="text-center">
                    <Award className="w-4 h-4 mx-auto mb-1" />
                    <p className="font-bold text-xs md:text-sm">
                      CV. RABHA MITRA SEJAHTERA
                    </p>
                    <p className="text-xs opacity-80">Best Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Coffee,
                title: "Robusta Coffee Bean Distribution",
                description:
                  "Supplying green Robusta beans in multiple grades (1-5) that meet international export requirements.",
                color: "from-yellow-400 to-amber-500",
              },
              {
                icon: Award,
                title: "Quality Grading & Selection",
                description:
                  "Careful classification based on size, weight, and appearance to guarantee premium quality beans.",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: Leaf,
                title: "Consistent Supply Management",
                description:
                  "Ensuring a reliable year-round coffee supply through partnerships with farmers across different regions.",
                color: "from-blue-400 to-indigo-500",
              },
              {
                icon: Store,
                title: "Processing & Storage Facilities",
                description:
                  "Well-placed warehouses near farms and ports to preserve freshness and streamline distribution.",
                color: "from-red-400 to-pink-500",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div
                  className={`bg-gradient-to-r w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                >
                  <Icon className="w-8 h-8 text-green-900" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  {title}
                </h3>
                <p className="text-green-700 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-6">
              From Indonesia&apos;s Islands to the Global Stage
            </h2>
            <p className="text-xl text-green-700 max-w-4xl mx-auto leading-relaxed">
              Originating from Indonesia&apos;s fertile soils, our journey
              begins with distinctive and authentic coffee flavors. Every bean
              is nurtured with care, sustainably processed, and prepared for
              international markets—sharing the richness of Indonesian coffee
              with the world.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                onClick={() => setSelectedIndex(idx)}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Background Image */}
                <div className="relative h-80 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6">
                  <div className="w-12 h-12 mb-4 border-2 border-white text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Highlight */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src={steps[selectedIndex].image}
                  alt={steps[selectedIndex].title}
                  width={1200}
                  height={800}
                  className="w-auto max-w-full max-h-[80vh] rounded-xl object-contain"
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6">
                <div className="w-12 h-12 mb-4 border-2 border-white text-white rounded-full flex items-center justify-center font-bold">
                  {steps[selectedIndex].number}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {steps[selectedIndex].title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {steps[selectedIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-6">
              Our Storage Facilities
            </h2>
            <p className="text-xl text-green-700">
              Strategically positioned to preserve freshness and support a
              seamless supply chain.
            </p>
          </div>

          <div className="space-y-16">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="p-8 order-2 lg:order-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-green-900 mb-4">
                    BANDAR LAMPUNG
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    📍 Warehouse & Processing Facility — Jl. Insinyur Sutami,
                    Way Laga, Panjang District, Bandar Lampung City, Lampung.
                    This site functions as the central hub for storage,
                    processing, and logistics, ensuring our coffee is ready for
                    distribution to both domestic and international markets.
                  </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 order-1 lg:order-2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src="/foto/gudang9.jpeg"
                      alt="Warehouse Bandar Lampung"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src="/foto/gudang8.jpeg"
                      alt="Coffee Storage Facility"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="relative overflow-hidden py-20 px-6">
        {/* Background image */}
        <Image
          src="/foto/bg5.jpg"
          alt="Background Rabha Mitra Sejahtera"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-green-800/70" />

        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                  Our Vision
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
              </div>
              <div className="text-center">
                <p className="text-xl text-yellow-100 leading-relaxed font-medium italic">
                  &quot;To become a global company in providing Indonesian
                  Robusta coffee&quot;
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                  Our Mission
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
              </div>

              <ul className="space-y-4 text-center">
                {[
                  "Provide high-quality Robusta coffee sourced directly from farmers",
                  "Support farmers by ensuring quality control so they can compete in the global market",
                  "Promote sustainable farming systems with environmental conservation awareness",
                  "Deliver outstanding customer experiences at every interaction",
                  "Continuously innovate in technology and production processes",
                ].map((mission, index) => (
                  <li
                    key={index}
                    className="flex items-start justify-center group"
                  >
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0 group-hover:text-yellow-300 transition-colors duration-200" />
                    <span className="text-yellow-100 font-medium leading-relaxed group-hover:text-white transition-colors duration-200">
                      {mission}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-6">
              Our Company Values
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-16">
            {[
              {
                title: "Integrity",
                description:
                  "Our business is built on trust. With transparency, honesty, and unwavering ethics at every step — from farm partnerships to global distribution — we ensure every cup reflects our true values.",
                features: "Trust • Transparency • Ethics",
                image: "/foto/bg2.jpg",
                reverse: true,
              },
              {
                title: "Sustainability",
                description:
                  "More than just coffee — we cultivate a future. Through sustainable farming and responsible business practices, we safeguard nature while empowering coffee farmers and enriching their communities.",
                features: "People • Planet • Prosperity",
                image: "/foto/bg1.jpg",
                reverse: false,
              },
              {
                title: "Consistency",
                description:
                  "Excellence without compromise. We deliver coffee of consistent quality and reliable volume, backed by precise systems and efficient processes — ensuring the world experiences Indonesian coffee at its finest, every time.",
                features: "Excellence • Reliability • Timeliness",
                image: "/foto/bg3.jpg",
                reverse: true,
              },
            ].map(({ title, description, features, image, reverse }) => (
              <div
                key={title}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    reverse ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Text */}
                  <div
                    className={`${
                      reverse ? "lg:col-start-2" : ""
                    } text-center lg:text-left`}
                  >
                    <h3 className="text-3xl font-bold text-green-900 mb-6">
                      {title}
                    </h3>
                    <p className="text-green-700 leading-relaxed mb-6">
                      {description}
                    </p>
                    <p className="text-green-800 font-semibold">{features}</p>
                  </div>

                  {/* Image */}
                  <div className={reverse ? "lg:col-start-1" : ""}>
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative overflow-hidden py-20 px-6">
        {/* Background image */}
        <Image
          src="/foto/bg5.jpg"
          alt="Rabha Mitra Sejahtera Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-green-800/70" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Proud numbers from our journey in the Indonesian robusta coffee
              industry
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "25,000",
                label: "COFFEE BAGS EXPORTED",
                icon: <Package className="w-10 h-10 text-yellow-400 mx-auto" />,
                description: "High-quality coffee bags",
              },
              {
                number: "10",
                label: "EXPORT DESTINATIONS",
                icon: <Globe className="w-10 h-10 text-yellow-400 mx-auto" />,
                description: "Countries that trust our products",
              },
              {
                number: "15",
                label: "CLIENT TRUSTS",
                icon: (
                  <Handshake className="w-10 h-10 text-yellow-400 mx-auto" />
                ),
                description: "Long-term business partners",
              },
              {
                number: "14",
                label: "COFFEE VARIETIES",
                icon: <Coffee className="w-10 h-10 text-yellow-400 mx-auto" />,
                description: "Premium robusta varieties",
              },
            ].map(({ number, label, icon, description }) => (
              <div
                key={label}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">{icon}</div>

                {/* Number */}
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-3">
                  {number}
                  <span className="text-yellow-300 ml-1">+</span>
                </div>

                {/* Label */}
                <div className="text-emerald-200 text-sm font-semibold mb-2">
                  {label}
                </div>

                {/* Description */}
                <div className="text-emerald-300/80 text-xs leading-relaxed">
                  {description}
                </div>
              </div>
            ))}
          </div>

          {/* Additional info section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-emerald-100 text-lg leading-relaxed">
                <span className="text-yellow-400 font-semibold">
                  Rabha Mitra Sejahtera
                </span>{" "}
                continues to grow and is committed to bringing Indonesia’s best
                robusta coffee to the global market with consistently high
                international quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Information */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent mb-4">
              Plantation Information
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
              Complete details of the geographical and climatological conditions
              of our robusta coffee plantation
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Geographic Info */}
              <div className="space-y-6 text-center lg:text-left">
                <h4 className="text-2xl font-bold text-green-800 mb-6 flex items-center justify-center lg:justify-start">
                  <MapPin className="w-6 h-6 text-green-600 mr-3" />
                  Geographical Conditions
                </h4>

                <div className="space-y-5">
                  {[
                    {
                      label: "Plantation Size",
                      value: "up to 1500 hectares",
                      icon: <MapPin className="w-6 h-6 text-green-600" />,
                      color: "from-green-500 to-green-600",
                    },
                    {
                      label: "Altitude",
                      value: "700 - 1100 masl",
                      icon: <Mountain className="w-6 h-6 text-emerald-600" />,
                      color: "from-emerald-500 to-emerald-600",
                    },
                    {
                      label: "Soil Type",
                      value: "Volcanic loam",
                      icon: <Sprout className="w-6 h-6 text-amber-600" />,
                      color: "from-amber-500 to-orange-500",
                    },
                    {
                      label: "Average Annual Temperature",
                      value: "22°C",
                      icon: <Thermometer className="w-6 h-6 text-red-500" />,
                      color: "from-red-400 to-red-500",
                    },
                    {
                      label: "Average Rainfall",
                      value: "2500-3250 mm/th",
                      icon: <CloudRain className="w-6 h-6 text-blue-500" />,
                      color: "from-blue-500 to-blue-600",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-2xl p-5 hover:from-green-100/70 hover:to-emerald-100/70 transition-all duration-300 border border-green-100/50 text-left"
                    >
                      <div className="flex items-center">
                        <div className="mr-4">{item.icon}</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-green-600 mb-1 uppercase tracking-wide">
                            {item.label}
                          </div>
                          <div
                            className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                          >
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Production Info */}
              <div className="space-y-6 text-center lg:text-left">
                <h4 className="text-2xl font-bold text-green-800 mb-6 flex items-center justify-center lg:justify-start">
                  <Package className="w-6 h-6 text-amber-600 mr-3" />
                  Production Information
                </h4>

                {/* Harvest Season Card */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100/50">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <Calendar className="w-6 h-6 text-amber-700 mr-3" />
                    <div>
                      <h5 className="text-xl font-bold text-amber-800">
                        Harvest Season
                      </h5>
                      <div className="text-amber-700 font-medium">
                        Once/year (May - August)
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 rounded-xl p-4 mt-4 flex items-start">
                    <Info className="w-5 h-5 text-amber-600 mr-2 mt-1" />
                    <div className="text-sm text-amber-700 leading-relaxed text-left">
                      In some areas with irregular rainfall, a secondary harvest
                      may occur at the end of the year with limited volume.
                    </div>
                  </div>
                </div>

                {/* Production Capacity Card */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100/50">
                  <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <Package className="w-6 h-6 text-green-700 mr-3" />
                      <div>
                        <h5 className="text-xl font-bold text-green-800">
                          Production Capacity
                        </h5>
                        <div className="text-green-700 text-sm">Per year</div>
                      </div>
                    </div>
                    <div className="text-center lg:text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        1500-2000
                      </div>
                      <div className="text-green-600 font-medium text-sm">
                        tons/year
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center bg-white/60 rounded-xl p-4 border border-green-100/50">
                    <Coffee className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="text-sm text-green-600 font-medium">
                      Quality
                    </div>
                    <div className="text-lg font-bold text-green-800">
                      Premium
                    </div>
                  </div>
                  <div className="text-center bg-white/60 rounded-xl p-4 border border-green-100/50">
                    <Leaf className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="text-sm text-green-600 font-medium">
                      Method
                    </div>
                    <div className="text-lg font-bold text-green-800">
                      Organic
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden min-h-[600px] flex items-center">
        {/* Background image */}
        <Image
          src="/foto/bg4.jpg"
          alt="Background CTA"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-green-800/70" />

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Legacy Begins with Tradition and
              <span className="text-yellow-400"> Grows Through Passion</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Witness our inspiring journey in cultivating Indonesia’s finest
              robusta coffee. From the farms to your table — a story of
              dedication, innovation, and premium quality.
            </p>
          </div>

          {/* Video CTA Section */}
          <div className="relative">
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 border-4 border-white/20 hover:border-white/40">
                <Play className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="mt-8 space-y-2">
                <div className="text-white font-bold text-lg md:text-xl group-hover:text-yellow-400 transition-colors duration-300">
                  Watch Our Video
                </div>
                <div className="text-emerald-200 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                  Click to watch on YouTube
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-6">
              Our Featured Products
            </h2>
            <p className="text-xl text-green-700">
              A curated collection of premium coffee with the finest quality for
              you
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-200 flex items-center justify-center">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Coffee className="w-20 h-20 text-amber-600" />
                  )}
                </div>

                {/* Product Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-green-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-green-700 mb-6 text-sm leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <Link
                    href={`/product`}
                    className="bg-gradient-to-r from-green-900 to-green-800 text-white px-6 py-3 rounded-xl font-semibold text-center hover:scale-105 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href={`/product`}
              className="bg-gradient-to-r from-green-900 to-green-800 text-white px-6 py-3 rounded-xl font-semibold text-center hover:scale-105 transition-all duration-300"
            >
              See All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
