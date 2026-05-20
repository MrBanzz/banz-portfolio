"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Share2, 
  Eye, 
  Activity, 
  Zap, 
  Award, 
  Star,
  CheckCircle,
  UserCheck
} from "lucide-react";
import Image from "next/image";

const metrics = [
  {
    metric: "1.3K/6.1K",
    label: "Verified Followers",
    description: "Authentic, verified audience with high engagement potential",
    icon: CheckCircle,
    gradient: "from-purple-500/30 to-indigo-600/20",
  },
  {
    metric: "2.6K/6.1K",
    label: "Active Followers",
    description: "Regularly engaging with content and community",
    icon: UserCheck,
    gradient: "from-emerald-500/30 to-teal-600/20",
  },
  {
    metric: "2.1M",
    label: "Impressions",
    description: "Total content views across all posts and interactions",
    icon: Eye,
    gradient: "from-blue-500/30 to-cyan-600/20",
  },
  {
    metric: "6.2%",
    label: "Engagement Rate",
    description: "High interaction rate indicating strong community connection",
    icon: Activity,
    gradient: "from-amber-500/30 to-orange-600/20",
  },
  {
    metric: "74.8K",
    label: "Engagements",
    description: "Total interactions including all engagement types",
    icon: Zap,
    gradient: "from-purple-500/30 to-pink-600/20",
  },
  {
    metric: "6.9K",
    label: "Profile Visits",
    description: "Direct visits to profile indicating strong personal brand",
    icon: Star,
    gradient: "from-indigo-500/30 to-purple-600/20",
  },
  {
    metric: "29.8K",
    label: "Replies",
    description: "Conversation starters and community discussions",
    icon: MessageCircle,
    gradient: "from-green-500/30 to-emerald-600/20",
  },
  {
    metric: "34.8K",
    label: "Likes",
    description: "Content appreciation and positive feedback",
    icon: Heart,
    gradient: "from-red-500/30 to-rose-600/20",
  },
  {
    metric: "2.5K",
    label: "Reposts",
    description: "Content sharing and amplification by community",
    icon: Share2,
    gradient: "from-cyan-500/30 to-blue-600/20",
  },
  {
    metric: "507",
    label: "Bookmarks",
    description: "Saved content for future reference and value",
    icon: Bookmark,
    gradient: "from-violet-500/30 to-purple-600/20",
  },
  {
    metric: "165",
    label: "Shares",
    description: "External sharing beyond the platform",
    icon: Share2,
    gradient: "from-orange-500/30 to-amber-600/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const XAnalytics = () => {
  return (
    <section id="x-analytics" className="py-20 relative overflow-hidden">
      {/* Animated gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-3/4 left-3/4 w-32 h-32 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/20 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            X <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Analytics</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Premium Web3 analytics dashboard showcasing community growth and engagement metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Analytics Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-purple-400/30 overflow-hidden">
              <Image
                src="/x-analytics.png"
                alt="X Analytics Dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.3)] pointer-events-none" />
          </motion.div>

          {/* Metrics Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:border-purple-400/40 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <metric.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        {metric.metric}
                      </span>
                      <h3 className="text-sm font-semibold mt-1">{metric.label}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300">Premium analytics for Web3 community growth and engagement</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default XAnalytics;
