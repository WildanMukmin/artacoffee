"use client";

import {
  ArrowDown,
  Award,
  Calendar,
  CheckCircle,
  Coffee,
  Leaf,
  Store,
  Trophy,
  Users,
  Target,
  Eye,
  Shield,
  TrendingUp,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const team = [
    {
      name: "John Anderson",
      position: "CEO & Founder",
      image: "/team/ceo.jpg",
      bio: "20+ years in coffee industry",
    },
    {
      name: "Sarah Martinez",
      position: "Operations Director",
      image: "/team/director.jpg",
      bio: "Expert in supply chain management",
    },
    {
      name: "Michael Chen",
      position: "Quality Manager",
      image: "/team/manager.jpg",
      bio: "Certified Q Grader",
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
        "Meticulous classification based on size, weight, and appearance to guarantee premium quality.",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Leaf,
      title: "Sustainable Supply Chain",
      description:
        "Ensuring reliable year-round coffee supply through partnerships with farmers across Indonesia.",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Store,
      title: "Storage & Processing",
      description:
        "Strategic warehouses near farms and ports to preserve freshness and streamline distribution.",
      color: "from-purple-400 to-violet-600",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Calendar },
    { number: "50+", label: "Global Partners", icon: Users },
    { number: "14+", label: "Coffee Varieties", icon: Coffee },
    { number: "25+", label: "Awards Won", icon: Trophy },
  ];

  const companyValues = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Our business is built on trust. With transparency, honesty, and unwavering ethics at every step — from farm partnerships to global distribution — we ensure every cup reflects our true values.",
      features: [
        "Transparent Pricing",
        "Honest Communication",
        "Ethical Business",
      ],
      image: "/foto/bg2.jpg",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "More than just coffee — we cultivate a future. Through sustainable farming and responsible business practices, we safeguard nature while empowering coffee farmers and enriching their communities.",
      features: [
        "Eco-Friendly Farming",
        "Community Empowerment",
        "Carbon Neutral",
      ],
      image: "/foto/bg1.jpg",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description:
        "Excellence without compromise. We deliver coffee of consistent quality and reliable volume, backed by precise systems and efficient processes — ensuring the world experiences Indonesian coffee at its finest, every time.",
      features: ["Quality Assurance", "Reliable Delivery", "Premium Standards"],
      image: "/foto/bg3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            width={400}
            height={400}
            src="/foto/bg1.jpg"
            alt="Arta Coffee Background"
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
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-amber-300/30">
            <Coffee className="w-5 h-5 text-amber-300 mr-2" />
            <span className="text-amber-100 font-medium">
              About Arta Coffee
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Excellence
            <span className="block text-transparent bg-linear-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text">
              Since Day One
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            A journey of passion, quality, and commitment to bringing
            Indonesia's finest coffee to the world
          </p>

          {/* Scroll Indicator */}
          <div className="flex items-center justify-center gap-2 text-amber-300 animate-bounce">
            <ArrowDown className="w-6 h-6" />
            <span className="font-medium">Discover Our Story</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-linear-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ number, label, icon: Icon }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 text-center hover:scale-105 transition-transform duration-300"
              >
                <Icon className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-amber-950 mb-2">
                  {number}
                </div>
                <div className="text-amber-800 text-sm font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-6">
                <span className="text-amber-900 font-semibold text-sm">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
                The Story Behind{" "}
                <span className="text-amber-700">Arta Coffee</span>
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-amber-400 rounded-full mb-8" />

              <div className="space-y-6 text-amber-900 leading-relaxed">
                <p className="text-lg">
                  Founded with a passion for exceptional coffee and a commitment
                  to Indonesian farmers, Arta Coffee began as a vision to bridge
                  the gap between local producers and global markets.
                </p>
                <p className="text-lg">
                  Over the years, our experience and knowledge in the coffee
                  industry continued to grow. Driven by a shared vision to
                  establish a larger, more professional, and globally-oriented
                  business, we evolved into a leading exporter of premium
                  Indonesian Robusta.
                </p>
                <p className="text-lg">
                  Today, Arta Coffee stands as a testament to quality,
                  sustainability, and fair trade. We bring the finest Indonesian
                  coffee, especially premium Robusta beans, to discerning
                  customers worldwide.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/product"
                  className="px-6 py-3 bg-amber-900 text-white rounded-full font-bold hover:bg-amber-800 transition-all duration-300 hover:scale-105 text-center"
                >
                  View Products
                </Link>
                <Link
                  href="/linktree"
                  className="px-6 py-3 bg-white border-2 border-amber-900 text-amber-900 rounded-full font-bold hover:bg-amber-50 transition-all duration-300 hover:scale-105 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  width={400}
                  height={400}
                  src="/foto/hero-home.jpeg"
                  alt="Arta Coffee Story"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-amber-400 text-amber-950 p-6 rounded-2xl shadow-2xl">
                <Calendar className="w-10 h-10 mb-2" />
                <p className="font-bold text-xl">Est. 2010</p>
                <p className="text-sm">Excellence Since</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-linear-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Vision & <span className="text-amber-700">Mission</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-amber-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-linear-to-br from-amber-950 to-amber-900 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-amber-400 rounded-2xl flex items-center justify-center mr-4">
                    <Eye className="w-7 h-7 text-amber-950" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-xl text-amber-100 leading-relaxed italic">
                  "To become the world's most trusted partner in providing
                  premium Indonesian Robusta coffee, setting the standard for
                  quality, sustainability, and ethical trade."
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-linear-to-br from-white to-amber-50 rounded-3xl p-10 border-2 border-amber-200">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-amber-950">
                  Our Mission
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Provide high-quality Robusta coffee sourced directly from Indonesian farmers",
                  "Support farmers through fair trade and quality control practices",
                  "Promote sustainable and eco-friendly farming systems",
                  "Deliver exceptional customer experiences at every touchpoint",
                  "Continuously innovate in processing and logistics",
                ].map((mission, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 shrink-0" />
                    <span className="text-amber-900 leading-relaxed">
                      {mission}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Our <span className="text-amber-700">Services</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              Comprehensive solutions that ensure quality from farm to cup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="bg-linear-to-br from-amber-50 to-amber-100/50 rounded-3xl p-8 border border-amber-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-950 mb-4">
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

      {/* Company Values Section */}
      <section className="py-20 bg-linear-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Our Core <span className="text-amber-700">Values</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="space-y-16">
            {companyValues.map((value, idx) => (
              <div
                key={value.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mr-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-amber-950">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-lg text-amber-800 leading-relaxed mb-6">
                    {value.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {value.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={idx % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      width={400}
                      height={400}
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
              Meet Our <span className="text-amber-700">Team</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-6" />
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              Behind every exceptional coffee is a team of passionate
              professionals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className="group bg-linear-to-br from-amber-50 to-amber-100/50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-200"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-amber-300 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-amber-950 mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-700 font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-amber-800 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-amber-950 to-amber-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-amber-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Coffee Journey
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the difference of premium Indonesian Robusta. Partner
            with us today.
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

export default ProfilePage;
