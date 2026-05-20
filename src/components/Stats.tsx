"use client";

import { motion } from "framer-motion";
import { Eye, Users, Award, Video } from "lucide-react";

const stats = [
  {
    icon: Eye,
    value: "2M+",
    label: "X Impressions",
    description: "Viral reach across Web3 content",
  },
  {
    icon: Users,
    value: "Community Builder",
    label: "Core Skill",
    description: "Building engaged communities from scratch",
  },
  {
    icon: Award,
    value: "Cysic Ambassador",
    label: "Role",
    description: "Official ecosystem representative",
  },
  {
    icon: Video,
    value: "AI Video Creator",
    label: "Expertise",
    description: "Cutting-edge AI video content",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const Stats = () => {
  return (
    <section id="stats" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/10 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            By The <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Proven impact across the Web3 space
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <stat.icon className="w-7 h-7 text-purple-400" />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-purple-400 font-medium mt-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
