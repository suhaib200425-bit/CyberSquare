import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiClock } from "react-icons/fi";

export const CarouselLayout = ({
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
        ] },
    sliderTitle = { value: "Trending Streams" },
}) => {
    const scrollRef = useRef(null);

    const slide = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const offset = direction === "left" ? -clientWidth * 0.6 : clientWidth * 0.6;
            scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">{sliderTitle.value}</h2>
                <div className="flex space-x-3">
                    <button onClick={() => slide("left")} className="p-3 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm hover:scale-110 active:scale-95 transition-all">
                        <FiChevronLeft className="text-zinc-800 dark:text-zinc-200" />
                    </button>
                    <button onClick={() => slide("right")} className="p-3 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm hover:scale-110 active:scale-95 transition-all">
                        <FiChevronRight className="text-zinc-800 dark:text-zinc-200" />
                    </button>
                </div>
            </div>

            <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 max-w-7xl mx-auto pb-6">
                {posts.value.map((post) => (
                    <motion.div
                        key={post.id}
                        className="flex-shrink-0 w-[290px] md:w-[380px] snap-start bg-white dark:bg-zinc-800/90 rounded-3xl p-5 border border-zinc-200/50 dark:border-zinc-700/50 shadow-lg group cursor-pointer"
                    >
                        <div className="relative overflow-hidden h-48 rounded-2xl mb-4">
                            <motion.img whileHover={{ scale: 1.1 }} src={post.image} alt={post.title} className="w-full h-full object-cover" />
                            <span className="absolute top-3 left-3 bg-violet-600 text-white text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-md">
                                {post.category}
                            </span>
                        </div>
                        <div className="flex items-center text-xs text-zinc-400 space-x-2 mb-2">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><FiClock /> {post.readingTime}</span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-violet-600 dark:group-hover:text-violet-400 line-clamp-2 transition-colors">
                            {post.title}
                        </h3>
                        <div className="mt-6 flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                            <img src={post.author?.avatar} alt={post.author?.name} className="w-8 h-8 rounded-full object-cover" />
                            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{post.author?.name}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}; 