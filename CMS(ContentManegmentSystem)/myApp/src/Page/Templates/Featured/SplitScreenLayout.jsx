import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

export function SplitScreenLayout({
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
    },
}) {
    const heroPost = posts.value[0];
    const items = posts.value.slice(1, 8);

    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full min-h-screen bg-zinc-900 text-white flex flex-col lg:flex-row"
        >
            {/* Left Splash Block */}
            {heroPost && (
                <div className="w-full lg:w-[55%] h-[60vh] lg:h-screen sticky top-0 relative overflow-hidden group">
                    <motion.img
                        initial={{  opacity: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        src={heroPost.image}
                        alt={heroPost.title}
                        className="absolute inset-0 w-full h-full object-cover filter brightness-75 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl z-10">
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            className="px-3 py-1 bg-white text-black font-black text-xs uppercase tracking-wider rounded-md mb-4 inline-block">
                            FEATURED STORY
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.8,
                                ease: "easeOut"
                            }} className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4">
                            {heroPost.title}
                        </motion.h2>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                         className="text-zinc-300 text-sm md:text-base line-clamp-2">
                            {heroPost.excerpt}
                        </motion.p>
                        <div className="mt-6 flex items-center gap-3 text-xs text-zinc-400">
                            <img src={heroPost.author?.avatar} alt={heroPost.author?.name} className="w-8 h-8 rounded-full object-cover" />
                            <span>{heroPost.author?.name}</span>
                            <span>•</span>
                            <span>{heroPost.readingTime}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Right Index List */}
            <div className="w-full lg:w-[45%] p-8 md:p-16 flex flex-col justify-center bg-zinc-950">
                <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
                    <h3 className="text-xl uppercase tracking-widest font-bold text-zinc-400">More Records</h3>
                    <FiArrowDown className="animate-bounce text-zinc-500" />
                </div>

                <div className="space-y-12">
                    {items.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, x: 100,rotateX:10 }}
                            whileInView={{ opacity: 1, x: 0,rotateX:0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group flex gap-4 cursor-pointer items-start border-b border-zinc-900 pb-8 last:border-none"
                        >
                            <div className="flex-1">
                                <span className="text-xs text-amber-400 font-mono block mb-1">{post.category}</span>
                                <h4 className="text-lg font-bold group-hover:text-amber-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                <p className="text-xs text-zinc-500 mt-2 line-clamp-1">{post.excerpt}</p>
                            </div>
                            <motion.div className="p-2 bg-zinc-900 group-hover:bg-amber-400 group-hover:text-black rounded-full transition-colors">
                                <FiArrowRight />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};