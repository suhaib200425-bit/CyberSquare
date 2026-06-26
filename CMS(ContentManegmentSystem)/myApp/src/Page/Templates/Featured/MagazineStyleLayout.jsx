import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

export function MagazineStyleLayout({
    headlineText = { value: "THE CHRONICLE" },
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
            }
        ]
    }}) {
    // മെയിൻ കണ്ടെയ്നർ സ്ക്രീനിൽ വരുമ്പോൾ ഉള്ള ആനിമേഷൻ
    const container = {
        hidden: { opacity: 0, y: 45 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 }
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { scale: 1.01, y: -4 },
    };

    const leadPost = posts.value[0];
    const sidePosts = posts.value.slice(1, 4);

    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="visible"
            // once: true എന്നാൽ ഒരു തവണ സ്ക്രീനിൽ കയറിയാൽ ആനിമേഷൻ നടക്കും. 
            // amount: 0.2 എന്നാൽ സെക്ഷന്റെ 20% സ്ക്രീനിൽ കാണുമ്പോൾ ആനിമേഷൻ തുടങ്ങും.
            viewport={{ once: true, amount: 0.2 }}
            className="py-20 px-4 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100"
        >
            <div className="max-w-7xl mx-auto border-b-4 border-double border-stone-800 dark:border-stone-200 pb-4 mb-12 text-center">
                <h1 className="font-serif text-5xl md:text-7xl tracking-tighter font-black">{headlineText.value}</h1>
                <p className="font-serif italic text-sm tracking-widest mt-2 text-stone-500">VOL. XXVI // NO. 04</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Spread */}
                {leadPost && (
                    <motion.div variants={item} whileHover="hover" className="lg:col-span-2 group cursor-pointer border-r border-stone-200 dark:border-stone-800 pr-0 lg:pr-8">
                        <div className="overflow-hidden mb-4">
                            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={leadPost.image} alt={leadPost.title} className="w-full h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <span className="font-serif italic text-xs border-b border-stone-800 dark:border-stone-200 pb-0.5 tracking-wider uppercase">{leadPost.category}</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mt-4 tracking-tight group-hover:underline">{leadPost.title}</h2>
                        <p className="mt-3 font-serif text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{leadPost.excerpt}</p>
                        <div className="mt-6 flex items-center text-xs font-mono uppercase tracking-wider text-stone-500 gap-4">
                            <span>By {leadPost.author?.name}</span>
                            <span>—</span>
                            <span>{leadPost.date}</span>
                        </div>
                    </motion.div>
                )}

                {/* Column 2: Secondary Content */}
                <div className="lg:col-span-1 flex flex-col gap-8 border-r border-stone-200 dark:border-stone-800 pr-0 lg:pr-8">
                    {sidePosts.slice(0, 2).map((post) => (
                        <motion.div key={post.id} variants={item} whileHover="hover" className="group cursor-pointer">
                            <span className="font-mono text-xs text-amber-700 dark:text-amber-400 uppercase tracking-widest">{post.category}</span>
                            <h3 className="font-serif text-xl font-bold mt-2 leading-tight group-hover:text-amber-700 transition-colors">{post.title}</h3>
                            <p className="mt-2 text-xs text-stone-500 line-clamp-2">{post.excerpt}</p>
                            <div className="mt-3 text-[11px] font-mono text-stone-400">{post.date} · {post.readingTime}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Column 3: Bulletins / Trending */}
                <div className="lg:col-span-1">
                    <h4 className="font-mono text-xs font-bold tracking-widest bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 py-1 px-3 mb-4 uppercase">Trending Desk</h4>
                    <div className="divide-y divide-stone-200 dark:divide-stone-800">
                        {posts.value.slice(2, 6).map((post, i) => (
                            <motion.div key={post.id} variants={item} whileHover="hover" className="py-4 first:pt-0 group cursor-pointer">
                                <span className="font-serif italic text-2xl font-light text-stone-300 dark:text-stone-700 block mb-1">0{i + 1}</span>
                                <h5 className="font-serif text-sm font-bold tracking-tight group-hover:underline line-clamp-2">{post.title}</h5>
                                <span className="text-[10px] font-mono text-stone-400 block mt-1">{post.readingTime}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};