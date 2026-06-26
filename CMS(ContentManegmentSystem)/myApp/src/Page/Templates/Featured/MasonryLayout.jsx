import React from "react";
import { motion } from "framer-motion";
import { FiEye, FiHeart } from "react-icons/fi";

export function MasonryLayout ({
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
}) {
  // കണ്ടെയ്നർ സ്ക്രീനിൽ വരുമ്പോൾ മാത്രം വർക്ക് ചെയ്യാനുള്ള വേരിയന്റുകൾ
  const container = {
    hidden: { opacity: 0, y: 30 }, // ഗ്ലിച്ച് ഒഴിവാക്കാൻ y വാല്യൂ കുറച്ചു
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 } 
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.25 } },
  };

  return (
    <motion.section 
      variants={container} 
      initial="hidden" 
      whileInView="visible" 
      // once: true -> ഒരു തവണ മാത്രം ആനിമേറ്റ് ചെയ്യും
      // amount: 0.1 -> സെക്ഷന്റെ 10% സ്ക്രീനിൽ കാണുമ്പോൾ തന്നെ ആനിമേഷൻ തുടങ്ങും (Masonry-ക്ക് ഇതാണ് നല്ലത്)
      viewport={{ once: true, amount: 0.1 }} 
      className="py-16 px-4 bg-slate-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {posts.value.map((post) => (
          <motion.div
            key={post.id}
            variants={item}
            whileHover="hover"
            className="break-inside-avoid bg-white dark:bg-zinc-800 rounded-3xl p-5 shadow-sm hover:shadow-2xl border border-zinc-100 dark:border-zinc-700/50 flex flex-col justify-between transition-shadow duration-300 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                src={post.image}
                alt={post.title}
                className="w-full object-cover max-h-80"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md dark:bg-zinc-900/90 text-zinc-900 dark:text-zinc-50 font-medium text-xs px-3 py-1 rounded-full shadow-sm">
                {post.category}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-3">{post.excerpt}</p>
            </div>

            <div className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-700">
              <div className="flex items-center space-x-2">
                <img src={post.author?.avatar} alt={post.author?.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{post.author?.name}</span>
              </div>
              <span className="text-xs text-zinc-400 font-medium">{post.readingTime}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};