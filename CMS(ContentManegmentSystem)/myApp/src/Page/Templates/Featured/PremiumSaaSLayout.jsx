import React from "react";
import { motion } from "framer-motion";
import { FiLayers, FiExternalLink } from "react-icons/fi";

export function PremiumSaaSLayout ({
     posts = { 
   value: [
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
        ] }
})  {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Aurora Ambient Backgrounds */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {posts.value.slice(0, 3).map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.35, duration: 0.6 }}
            // whileHover={{ y: -12, scale: 1.03 }}
            className="rounded-3xl p-6 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.15] transition-colors duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-video">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <FiLayers className="text-indigo-400 text-xs" />
                <span className="text-[11px] uppercase font-bold tracking-widest text-indigo-400">{post.category}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white leading-snug group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h3>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={post.author?.avatar} alt={post.author?.name} className="w-8 h-8 rounded-full border border-white/20 object-cover" />
                <div>
                  <h5 className="text-xs font-medium text-white">{post.author?.name}</h5>
                  <p className="text-[10px] text-zinc-400">{post.date} · {post.readingTime}</p>
                </div>
              </div>
              <FiExternalLink className="text-zinc-500 group-hover:text-white transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};