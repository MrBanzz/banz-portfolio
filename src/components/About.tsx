"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Banz</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Passionate about building lasting connections in the Web3 space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Web3 Community Specialist
              </h3>
              <p className="text-muted-foreground mb-6">
                I help Web3 projects transform their community presence from scattered
                followers into engaged, loyal advocates. With experience across major
                ecosystems and a track record of viral content, I bring a unique blend
                of technical understanding and community psychology to every project.
              </p>
              <p className="text-muted-foreground">
                Whether you are launching a new protocol, scaling an existing project,
                or looking to revitalize your community, I provide strategic guidance
                and hands-on execution to achieve measurable growth.
              </p>
            </div>
          </motion.div>

          {/* Right side - Key value propositions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold mb-2">Strategic Vision</h4>
              <p className="text-sm text-muted-foreground">
                Long-term community planning aligned with project goals
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold mb-2">Rapid Execution</h4>
              <p className="text-sm text-muted-foreground">
                Quick implementation of community initiatives
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold mb-2">Audience Focus</h4>
              <p className="text-sm text-muted-foreground">
                Deep understanding of Web3 community dynamics
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold mb-2">Proven Results</h4>
              <p className="text-sm text-muted-foreground">
                Measurable growth and engagement metrics
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
