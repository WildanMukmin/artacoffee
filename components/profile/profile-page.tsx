"use client";

import {
  ArrowDown,
  Award,
  Calendar,
  CheckCircle,
  Coffee,
  HomeIcon,
  Leaf,
  Store,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";

const ProfilePage = () => {
  const team = [
    {
      name: "Barli Halim",
      position: "Commissioner",
      image: "/foto/barli.jpeg",
    },
    {
      name: "Edi Yanto",
      position: "Director",
      image: "/foto/edi.jpeg",
    },
    {
      name: "Radianto STP",
      position: "Manager",
      image: "/foto/radianto.jpeg",
    },
  ];

  const values = [
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
  ];

  const stats = [
    { number: "3+", label: "Years of Experience", icon: Calendar },
    { number: "10K+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Coffee Varieties", icon: Coffee },
    { number: "15+", label: "Awards & Certificates", icon: Trophy },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <Image
          src="/foto/bg1.jpg"
          alt="Rabha Mitra Sejahtera Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-green-800/70" />

        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-emerald-700/30 shadow-lg">
            <HomeIcon className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-emerald-200 font-medium">
              About Rabha Mitra Sejahtera
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            ABOUT
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text block">
              CV RABHA MITRA SEJAHTERA
            </span>
          </h1>

          <p className="text-xl text-emerald-200 max-w-3xl mx-auto mb-12 leading-relaxed flex items-center gap-2 justify-center">
            <ArrowDown className="w-6 h-6 animate-bounce" />
            Scroll Down
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map(({ number, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/30 shadow-lg hover:scale-105 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {number}
                  </div>
                  <div className="text-emerald-300 text-sm font-medium">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center lg:text-left">
        {/* Our Story Section */}
        <div className="space-y-16 animate-fadeIn my-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-green-800 leading-relaxed">
                <p className="text-lg">
                  The story of CV Rabha Mitra Sejahtera began with a strong
                  friendship that developed during their junior high school
                  years in 1992. Both founders subsequently followed parallel
                  career paths, entering the same business sector, specifically
                  the agricultural commodity of coffee, starting as coffee
                  brokers in 2006.
                </p>
                <p className="text-lg">
                  Over the years, their experience and knowledge in the coffee
                  industry continued to grow. Driven by a shared vision and
                  mission to establish a larger, more professional, and
                  globally-oriented business, they decided to form a formal
                  entity.
                </p>
                <p className="text-lg">
                  Thus, on February 18, 2022, CV Rabha Mitra Sejahtera was
                  officially founded. The company aims to bring the finest
                  quality Indonesian coffee, especially Lampung Robusta coffee,
                  to the world market.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center">
              <Image
                width={500}
                height={500}
                src="/foto/hero-profile.jpg"
                alt="Premium Coffee Story"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-green-900 p-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <Calendar className="w-10 h-10 mx-auto mb-2" />
                  <p className="font-bold text-lg">Since 2022</p>
                  <p className="text-sm opacity-80">3 Years of Journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="space-y-16 animate-fadeIn my-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-center lg:text-left">
            {/* Vision */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-green-900 mb-2">
                  Our Vision
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 mx-auto rounded-full"></div>
              </div>
              <div className="text-center">
                <p className="text-xl text-green-800 leading-relaxed font-medium italic">
                  &quot;To become a global company in providing Indonesian
                  Robusta coffee&quot;
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-green-900 mb-2">
                  Our Mission
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 mx-auto rounded-full"></div>
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
                    <CheckCircle className="w-6 h-6 text-green-700 mr-3 mt-1 flex-shrink-0 group-hover:text-green-900 transition-colors duration-200" />
                    <span className="text-green-800 font-medium leading-relaxed group-hover:text-green-900 transition-colors duration-200">
                      {mission}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-16 animate-fadeIn my-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-6">Our Team</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Behind every premium coffee, there is an experienced team
              dedicated to delivering the best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl 
              border border-green-100 transition-all duration-500 hover:-translate-y-2 w-full max-w-xs"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-100/40 via-emerald-100/40 to-green-200/40 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {member.image ? (
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-md">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-green-800 font-bold text-2xl shadow-md">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-green-900 group-hover:text-emerald-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-yellow-600 font-medium tracking-wide uppercase text-sm">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-16 animate-fadeIn my-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              The fundamental values that guide every decision and action in
              delivering the finest robusta coffee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 w-full max-w-md"
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r  rounded-2xl flex items-center justify-center mx-auto mb-4  group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-10 h-10 text-green-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-green-700 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default ProfilePage;
