import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiSliders, FiClock, FiEye, FiTrendingUp } from "react-icons/fi";

export function UltimateCMSDashboardLayout ({
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
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically pull distinct filters
  const categories = ["All", ...new Set(posts.value.map((p) => p.category))];

  const filteredPosts = posts.value.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="py-12 px-4 md:px-8 bg-zinc-900 min-h-screen text-zinc-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Dynamic Controls Dashboard Header */}
        <div className="bg-zinc-800/80 border border-zinc-700/60 rounded-3xl p-6 mb-10 backdrop-blur-md flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Query dashboard index..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-xl py-2.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories?.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-zinc-950 shadow-md shadow-cyan-500/20"
                    : "bg-zinc-900 hover:bg-zinc-700/50 text-zinc-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Results Stream Container */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                layout
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-800 border border-zinc-700/40 rounded-2xl p-5 flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-0.5 bg-cyan-950 text-cyan-400 border border-cyan-800/40 font-bold text-[10px] uppercase tracking-wider rounded-md">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="flex items-center gap-1"><FiEye /> 1.2k</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-2 line-clamp-2">{post.excerpt}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={post.author?.avatar} alt={post.author?.name} className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-xs text-zinc-300 font-medium">{post.author?.name}</span>
                  </div>
                  <span className="text-xs text-zinc-500 flex items-center gap-1"><FiClock /> {post.readingTime}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};