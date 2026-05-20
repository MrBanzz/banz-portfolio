"use client";

import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "Ambassador",
    organization: "Cysic Network",
    description: "Serving as a community ambassador, driving awareness and adoption of Cysic's innovative PoS infrastructure. Building bridges between the project and its growing global community.",
    icon: Award,
    gradient: "from-amber-500/20 to-orange-600/10",
  },
  {
    role: "Owner",
    organization: "Hidden Gems X",
    description: "Curating and managing a premium community of crypto investors focused on identifying undervalued projects with exceptional potential. Growing from 0 to thousands of engaged members.",
    icon: Sparkles,
    gradient: "from-emerald-500/20 to-teal-600/10",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            Experience & <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Communities</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Building meaningful connections and leading communities that shape the future of Web3
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-purple-400/30 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <exp.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 mb-3">
                  {exp.role}
                </span>
                <h3 className="text-2xl font-bold">{exp.organization}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
