import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../../assets/assets";

export function SplitScreenLayout({
    desktopPadding = {
        value: "10px 100px",
        label: "Desktop Padding",
        type: "text"
    },
    mobilePadding = {
        value: "10px 10px",
        label: "Mobile Padding",
        type: "text"
    },
    rightBoxBgColor = {
        value: "black",
        label: "Rigth Box Background Color",
        type: "color"
    },
    topTitle={
value:"Feature Layout",
label:"Left Box Title",
type:"textArea"
    },
    topTitleColor={
        value: "white",
        label: "Top Title Color",
        type: "color"
    },
    imageRadius={
        value:"10px",
        label:"Image Border Radius",
        type:"text"
    },
    themeColor={

        value: "green",
        label: "Rigth Box Theme Color",
        type: "color"
    },
    cardTitle={

        value: "white",
        label: "Card Title Color",
        type: "color"
    },
    cardSubTitle={
        value: "grey",
        label: "Card SubTitle Color",
        type: "color"
    },
    apiRoute = {
        value: "/latest-post",
        type: "options",
        options: [
            {
                label: "Latest Posts",
                value: "/latest-posts"
            }, {
                label: "Popular Posts",
                value: "/popular-posts"
            }, {
                label: "Top Category Posts",
                value: "/top-category-posts"
            }
        ]
    }
}) {

    const { webname } = useParams();
    const Navigate = useNavigate();
    const [data, setData] = useState(null);

    const items = [
        {
            "_id": "6b2aa001e64f3be6f9052001",
            "title": "Building Scalable React Applications with Modern Architecture",
            "slug": "building-scalable-react-applications-with-modern-architecture",
            "banner": "https://picsum.photos/1200/700?random=101",
            "category": { "title": "React" },
            "status": "Defalut",
            "navigate": true,
            "views": 124,
            "excerpt": "Learn how to structure large React applications using feature-based architecture, reusable hooks, and efficient state management.",
            "createdAt": "2026-06-10T08:20:15.000Z"
        },
        {
            "_id": "6b2aa002e64f3be6f9052002",
            "title": "Understanding Redis Caching for High Performance APIs",
            "slug": "understanding-redis-caching-for-high-performance-apis",
            "banner": "https://picsum.photos/1200/700?random=102",
            "category": { "title": "Redis" },
            "status": "Defalut",
            "navigate": true,
            "views": 287,
            "excerpt": "Explore Redis caching strategies, cache invalidation techniques, and practical implementations for Node.js applications.",
            "createdAt": "2026-06-11T10:12:00.000Z"
        },
        {
            "_id": "6b2aa003e64f3be6f9052003",
            "title": "Creating Beautiful Dashboards with Tailwind CSS",
            "slug": "creating-beautiful-dashboards-with-tailwind-css",
            "banner": "https://picsum.photos/1200/700?random=103",
            "category": { "title": "Tailwind CSS" },
            "status": "Defalut",
            "navigate": true,
            "views": 89,
            "excerpt": "Design elegant admin dashboards using Tailwind CSS, responsive grids, reusable components, and utility-first styling.",
            "createdAt": "2026-06-12T09:30:00.000Z"
        },
        {
            "_id": "6b2aa004e64f3be6f9052004",
            "title": "Mastering MongoDB Aggregation Pipelines",
            "slug": "mastering-mongodb-aggregation-pipelines",
            "banner": "https://picsum.photos/1200/700?random=104",
            "category": { "title": "MongoDB" },
            "status": "Defalut",
            "navigate": true,
            "views": 451,
            "excerpt": "Dive deep into MongoDB aggregation with real-world examples including lookups, grouping, sorting, and performance optimization.",
            "createdAt": "2026-06-13T14:45:30.000Z"
        },
        {
            "_id": "6b2aa005e64f3be6f9052005",
            "title": "Deploying Full Stack Applications with Docker and Nginx",
            "slug": "deploying-full-stack-applications-with-docker-and-nginx",
            "banner": "https://picsum.photos/1200/700?random=105",
            "category": { "title": "Docker" },
            "status": "Defalut",
            "navigate": true,
            "views": 316,
            "excerpt": "Learn how to containerize React and Node.js applications using Docker, Docker Compose, and reverse proxy with Nginx.",
            "createdAt": "2026-06-14T11:15:45.000Z"
        },
        {
            "_id": "6b2aa006e64f3be6f9052006",
            "title": "A Practical Guide to TypeScript for React Developers",
            "slug": "a-practical-guide-to-typescript-for-react-developers",
            "banner": "https://picsum.photos/1200/700?random=106",
            "category": { "title": "TypeScript" },
            "status": "Defalut",
            "navigate": true,
            "views": 198,
            "excerpt": "Understand TypeScript fundamentals, advanced types, generics, and best practices for building robust React applications.",
            "createdAt": "2026-06-15T16:40:20.000Z"
        }
    ];

    useEffect(() => {
        async function GetPosts() {
            Promise.all([
                axios.get(`${BASEURL}/api/post/${webname}${apiRoute.value}?limit=8`)
            ]).then(([response]) => {
                console.log("Split Screen Layout");
                console.log(response.data);

                setData({ posts: response.data?.posts });
            }).catch(error => {
                setData({ posts: items });

                console.log("Split Screen Layout Error");
                console.log(error.response?.data || error.message);
            });
        }
        GetPosts();
    }, []);



    const isMobile = window.innerWidth < 768;

    const heroPost = data?.posts[0];
    const OtheItems = data?.posts.slice(1, 7);

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
                        initial={{ opacity: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        src={heroPost?.banner}
                        alt={heroPost?.title}
                        className="absolute inset-0 w-full h-full object-cover filter brightness-75 transition-all duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent" /> */}

                    <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl z-10">
                        <motion.span
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            className="px-3 py-1 bg-white text-black font-black text-xs uppercase tracking-wider rounded-md mb-4 inline-block">
                            FEATURED STORY
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.8,
                                ease: "easeOut"
                            }} className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4">
                            {heroPost?.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            className="text-zinc-300 text-sm md:text-base line-clamp-2">
                            {heroPost?.excerpt}
                        </motion.p>
                        <div className="mt-6 flex items-center gap-3 text-xs text-zinc-400">
                            {/* <img src={heroPost.author?.avatar} alt={heroPost.author?.name} className="w-8 h-8 rounded-full object-cover" />
                            <span>{heroPost.author?.name}</span>
                            <span>•</span>
                            <span>{heroPost.readingTime}</span> */}
                        </div>
                    </div>
                </div>
            )}

            {/* Right Index List */}
            <div
                style={{
                    backgroundColor:rightBoxBgColor.value
                }}
                className="w-full lg:w-[45%] p-8 md:p-16 flex flex-col justify-center bg-zinc-950"

            >
                <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
                    <h3 style={{
                        color:topTitleColor.value
                    }} className="text-xl uppercase tracking-widest font-bold text-zinc-400">
                        {topTitle.value}
                        </h3>
                    <FiArrowDown className="animate-bounce text-zinc-500" />
                </div>

                <div className="space-y-12">
                    {OtheItems?.map((post) => (
                        <motion.div
                            key={post._id}
                            initial={{ opacity: 0, x: 100, rotateX: 10 }}
                            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group h-[max-content] flex gap-4 cursor-pointer items-start border-b border-zinc-900 pb-8 last:border-none"
                        >
                            <div
                            style={{
                                borderRadius:imageRadius.value
                            }} className="w-[30%] h-[100px] overflow-hidden rounded-[15px]">
                                <img className="w-full h-full object-cover"
                                    src={post?.banner} alt="banner" srcset="" />
                            </div> 
                            <div className="flex-2">
                                <span
                                style={{
                                    color:themeColor.value
                                }}
                                 className="text-xs text-amber-400 font-mono block mb-1">{post?.category?.title}</span>
                                <h4 className={`text-lg font-bold group-hover:text-[${themeColor.value}] transition-colors line-clamp-2`}>
                                    {post?.title}
                                </h4>
                                <p className="text-xs text-zinc-500 mt-2 line-clamp-1">{post?.excerpt}</p>
                            </div>
                            <motion.div className={`p-2 bg-zinc-900 group-hover:bg-[${themeColor.value}] group-hover:text-black rounded-full transition-colors`}>
                                <FiArrowRight />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};