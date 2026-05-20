"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Lightbulb, PenTool, Video, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Community Building",
    description: "Transform your project's social presence into a thriving, engaged community of loyal advocates and active participants.",
  },
  {
    icon: MessageSquare,
    title: "Discord Server Setup",
    description: "Design and implement professional Discord infrastructure with proper channels, roles, bots, and moderation systems.",
  },
  {
    icon: Lightbulb,
    title: "Project Advisory",
    description: "Strategic guidance on community strategy, tokenomics awareness, ecosystem positioning, and long-term growth planning.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling narratives and content that resonate with Web3 audiences and amplify your project's message.",
  },
  {
    icon: Video,
    title: "AI Video Content",
    description: "Engaging AI-powered video content that explains complex concepts and showcases your project to wider audiences.",
  },
  {
    icon: TrendingUp,
    title: "Web3 Growth Support",
    description: "Data-driven growth strategies tailored for the unique dynamics of decentralized ecosystems and token communities.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
            My <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Web3 community solutions tailored to amplify your project&apos;s reach and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-purple-400/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
