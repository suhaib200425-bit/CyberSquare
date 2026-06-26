import React from "react";
import { motion } from "framer-motion";
import { FiGitCommit, FiClock } from "react-icons/fi";

export function TimelineLayout({
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
        ]
    }
}) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden"
        >
            <div className="max-w-4xl mx-auto relative">
                {/* Center Timeline Spine */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

                <div className="space-y-12">
                    {posts.value.map((post, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Connector Nodes */}
                                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 bg-white dark:bg-zinc-950 p-1 rounded-full text-indigo-600">
                                    <FiGitCommit className="w-5 h-5 animate-pulse" />
                                </div>

                                {/* Content Panel Box */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -10 }}
                                        className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-md border border-zinc-100 dark:border-zinc-800 group cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 font-semibold text-xs rounded-full">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-zinc-400 flex items-center gap-1"><FiClock /> {post.readingTime}</span>
                                        </div>
                                        <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-xl mb-3" />
                                        <span className="text-xs text-indigo-500 font-mono tracking-wider font-bold block mb-1">{post.date}</span>
                                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-2">{post.excerpt}</p>
                                        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                                            <img src={post.author?.avatar} alt={post.author?.name} className="w-6 h-6 rounded-full object-cover" />
                                            <span className="text-[11px] text-zinc-600 dark:text-zinc-400">{post.author?.name}</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};