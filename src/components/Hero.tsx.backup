"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="rounded-full p-2 backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_30px_rgba(147,51,234,0.6)]">
                <Image
                  src="/avatar.jpg"
                  alt="Banz Avatar"
                  width={200}
                  height={200}
                  className="rounded-full w-40 h-40 lg:w-48 lg:h-48 object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="max-w-3xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Building Web3{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Communities
              </span>{" "}
              That Actually Last.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl"
            >
              I help Web3 projects build engaged, loyal communities through strategic
              community management, content creation, and growth initiatives.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("https://t.me/banz", "_blank")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on Telegram
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("#services")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground font-medium rounded-lg transition-colors"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
