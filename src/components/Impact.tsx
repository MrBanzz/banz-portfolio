"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Star, Target } from "lucide-react";

const impacts = [
  {
    metric: "2M+",
    label: "X Impressions",
    description: "Organic reach across social platforms, building brand awareness for Web3 projects",
    icon: TrendingUp,
    gradient: "from-purple-500/30 to-indigo-600/20",
  },
  {
    metric: "10x",
    label: "Cysic Growth",
    description: "Contributed to massive community growth as Ambassador, expanding global presence",
    icon: Users,
    gradient: "from-emerald-500/30 to-teal-600/20",
  },
  {
    metric: "5000+",
    label: "Hidden Gems X Members",
    description: "Built and curated a premium community of crypto investors from the ground up",
    icon: Star,
    gradient: "from-amber-500/30 to-orange-600/20",
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
    transition: { duration: 0.5 },
  },
};

const Impact = () => {
  return (
    <section id="impact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/10 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Real <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Measurable results that demonstrate the power of community-driven growth in Web3
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {impacts.map((impact) => (
            <motion.div
              key={impact.label}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-purple-400/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${impact.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <impact.icon className="w-7 h-7 text-purple-400" />
                </div>

                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    {impact.metric}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{impact.label}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {impact.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Summary highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Target className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300">Trusted by leading Web3 projects to build communities that last</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
