import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export function HorizontalNewsCards ({
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
  const container = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const cardAnim = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    hover: { y: -5, scale: 1.01 },
  };

  return (
    <motion.section variants={container} initial="hidden" whileInView="visible" className="py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto space-y-6">
        {posts.value.map((post) => (
          <motion.div
            key={post.id}
            variants={cardAnim}
            whileHover="hover"
            className="group bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-zinc-200/60 dark:border-zinc-700/60 flex flex-col md:flex-row cursor-pointer transition-shadow"
          >
            <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">{post.category}</span>
                  <span className="text-zinc-300 dark:text-zinc-600">|</span>
                  <span className="text-xs text-zinc-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-2">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-700/60">
                <div className="flex items-center space-x-2">
                  <img src={post.author?.avatar} alt={post.author?.name} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{post.author?.name}</span>
                </div>
                <motion.span variants={{ hover: { x: 4 } }} className="text-rose-600 dark:text-rose-400 flex items-center gap-1 text-sm font-semibold">
                  Read <FiArrowRight />
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};