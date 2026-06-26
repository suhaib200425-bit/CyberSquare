import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiClock, FiCalendar } from "react-icons/fi";

export const BentoGridLayout = ({
  bgColor = { value: "white" },
  accentColor = { value: "emerald" },
  posts = { value: [
  {
    id: 1,
    title: "Designing the Future: The Rise of AI-Driven Interfaces",
    excerpt: "Explore how generative AI is transforming user experience frameworks and crafting adaptable design systems.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    author: { name: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    date: "Jun 24, 2026",
    readingTime: "5 min read",
    isFeatured: true
  },
  {
    id: 4,
    title: "Designing the Future: The Rise of AI-Driven Interfaces",
    excerpt: "Explore how generative AI is transforming user experience frameworks and crafting adaptable design systems.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    author: { name: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    date: "Jun 24, 2026",
    readingTime: "5 min read",
    isFeatured: true
  },
  {
    id: 2,
    title: "Next.js 16 Survival Guide: Advanced Server Actions",
    excerpt: "Master the art of handling mutations, edge cases, and parallel routing patterns cleanly.",
    category: "Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    author: { name: "Alex Rivera", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" },
    date: "Jun 22, 2026",
    readingTime: "4 min read"
  },
  {
    id: 3,
    title: "The Subtle Art of Creating Delightful Micro-Animations",
    excerpt: "How tiny, deliberate animation choices build high user engagement and deep brand trust.",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=60",
    author: { name: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150" },
    date: "Jun 19, 2026",
    readingTime: "7 min read"
  }
] },
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -10 ,scale: 1.02,rotateZ:2 ,transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`bg-[${bgColor.value}] py-20 px-6  relative overflow-hidden`}
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {posts.value.slice(0, 3).map((post, idx) => {
          const isMedium = idx

          return (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover="hover"
              className={`group rounded-3xl border border-zinc-700/50 p-6 flex flex-col justify-between backdrop-blur-md shadow-xl hover:shadow-emerald-500/5
               
                ${isMedium ? "md:col-span-1 min-h-[260px]" : "min-h-[220px]"}`}
            >
              <div className="relative overflow-hidden rounded-2xl w-full h-44 mb-4 ${isLarge ? 'md:h-72' : 'h-36'}">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest bg-zinc-900/90 text-emerald-400 rounded-md">
                  {post.category}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`font-bold text-white tracking-tight leading-tight group-hover:text-emerald-400 transition-colors text-lg"}`}>
                    {post.title}
                  </h3>
                  { <p className="mt-3 text-zinc-400 text-sm line-clamp-2">{post.excerpt}</p>}
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-700/40 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <img src={post.author?.avatar} alt={post.author?.name} className="w-6 h-6 rounded-full object-cover" />
                    <span>{post.author?.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><FiClock /> {post.readingTime}</span>
                    <motion.span variants={{ hover: { rotate: 45 } }} className="text-white text-base">
                      <FiArrowUpRight />
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};