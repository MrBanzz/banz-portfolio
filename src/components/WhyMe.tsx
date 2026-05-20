"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Zap, Award } from "lucide-react";

const reasons = [
  {
    title: "Web3 Native Expertise",
    description: "Deep understanding of blockchain ecosystems, tokenomics, and what drives community engagement in the Web3 space.",
    icon: Sparkles,
    gradient: "from-purple-500/30 to-indigo-600/20",
  },
  {
    title: "Proven Track Record",
    description: "Successfully built and scaled multiple communities from zero to thousands of active members.",
    icon: Award,
    gradient: "from-amber-500/30 to-orange-600/20",
  },
  {
    title: "AI-Powered Content",
    description: "Unique combination of community building skills with AI video creation capabilities for maximum reach.",
    icon: Zap,
    gradient: "from-emerald-500/30 to-teal-600/20",
  },
  {
    title: "Authentic Connections",
    description: "Dedication to building genuine relationships, not just pumping numbers. Your community becomes my priority.",
    icon: Heart,
    gradient: "from-pink-500/30 to-rose-600/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const WhyMe = () => {
  return (
    <section id="why-me" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Work With Me</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I bring a unique combination of skills, experience, and dedication that sets me apart in the Web3 space
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-purple-400/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10 flex gap-5">
                <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-7 h-7 text-purple-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300">Let&apos;s build something great together</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
