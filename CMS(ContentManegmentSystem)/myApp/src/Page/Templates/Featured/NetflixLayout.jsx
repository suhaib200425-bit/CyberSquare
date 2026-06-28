import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASEURL } from '../../../assets/assets';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
export function NetflixLayout({
    desktopPadding = { value: "0px 100px", label: "Desktop Padding", type: "text" },
    mobilePadding = { value: "0px 10px", label: "Mobile Padding", type: "text" },
    sectionTitle = { value: "Trending Insights", label: "Section Title", type: "text" },
    themeColor = { value: "#e50914", label: "Primary Theme Color", type: "color" },
    cardBg = { value: "#141414", label: "Card Background", type: "color" },
    textColor = { value: "#ffffff", label: "Main Text Color", type: "color" },
    subtitleColor = { value: "#aaaaaa", label: "Subtitle Color", type: "color" },
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
    const [current, setCurrent] = useState(0);
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
                axios.get(`${BASEURL}/api/post/${webname}${apiRoute.value}?limit=5`)
            ]).then(([response]) => {
                console.log("NetflixLayout");
                console.log(response.data);

                setData({ posts: response.data?.posts });
            }).catch(error => {
                setData({ posts: items });
                console.log("NetflixLayout error");

                console.log(error.response?.data || error.message);
            });
        }
        GetPosts();
    }, []);
    const [activeIndex, setActiveIndex] = useState(0);


    const isMobile = window.innerWidth < 768;

    const ThemeColor = themeColor?.value || '#e50914';
    const CardBg = cardBg?.value || '#181818';
    const TextColor = textColor?.value || '#ffffff';
    const SubtitleColor = subtitleColor?.value || '#b3b3b3';

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % (data?.posts?.length >= 5 ? 5 : data?.posts?.length));
        }, 5000);
        return () => clearInterval(interval);
    }, [data?.posts?.length]);

    if (!data?.posts?.length) return null;
    const heroItem = data?.posts[activeIndex];

    return (
        <div style={{
            // maxWidth: "1400px",
            backgroundColor: '#000', color: TextColor, fontFamily: 'Helvetica, Arial, sans-serif', overflowX: 'hidden'
        }}>
            {/* Featured Hero Slider */}
            <div style={{
                position: 'relative',
                height: '70vh',
                backgroundImage: `linear-gradient(to top, #000 5%, transparent 40%), linear-gradient(to right, rgba(0,0,0,0.8) 30%, transparent 70%), url(${heroItem?.banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
            padding: isMobile ? mobilePadding.value : desktopPadding.value,
                transition: 'background-image 0.8s ease-in-out'
            }}>
                <div className='w-[90%] md:w-[60%]' style={{zIndex: 2 }}>
                    {heroItem?.category?.title && (
                        <motion.span
                            key={heroItem?.category?.title}
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.01,
                                ease: "easeOut",
                            }}
                            style={{
                                color: ThemeColor.value,
                                textTransform: 'uppercase', fontWeight: 'bold',
                                letterSpacing: '2px', fontSize: '14px'
                            }}>
                            {heroItem?.category?.title}
                        </motion.span>
                    )}
                    <motion.h1
                        key={heroItem?.title}
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        style={{ fontSize: '30px', margin: '10px 0', fontWeight: 'bold', lineHeight: '1.1' }}>{heroItem?.title}
                    </motion.h1>
                    {
                        heroItem?.excerpt &&
                        <motion.p
                            key={heroItem?.excerpt}
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                ease: "easeOut",
                            }}
                            style={{
                                color: SubtitleColor,
                                fontSize: '1.2rem',
                                marginBottom: '20px'
                            }}>
                            {heroItem?.excerpt}
                        </motion.p>
                    }
                    <motion.button
                        key={heroItem._id}
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                        style={{ backgroundColor: ThemeColor, color: '#fff', border: 'none', padding: '12px 24px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>
                        Read Now
                    </motion.button>
                </div>

                {/* BAGE  */}
                {heroItem.status === "Defalut" && (
                    <div className="absolute top-6 right-[-42px] rotate-40 bg-red-600 w-40 py-1.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                        DEFALUT
                    </div>
                )}
            </div>

            {/* Horizontal Slider Rows */}
            <div style={{ 
            padding: isMobile ? mobilePadding.value : desktopPadding.value,marginTop: '-40px', position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{sectionTitle?.value || "Popular on Showcase"}</h2>
                <div style={{

                    overflowX: "scroll",
                    scrollbarWidth: "none",
                    display: 'flex', gap: '10px', paddingBottom: '20px',
                }}>
                    {data?.posts?.slice(0, 5).map((item, index) => (
                        <div
                            className='relative'
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={{
                                flex: '0 0 240px',
                                backgroundColor: CardBg,
                                borderRadius: '4px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={item?.banner} alt="" style={{ width: '100%', height: '135px', objectFit: 'cover' }} />
                            <div style={{ padding: '12px' }}>
                                <h4 style={{ fontSize: '0.95rem', margin: '0 0 5px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item?.title}</h4>
                                {item?.excerpt && <p style={{ fontSize: '0.8rem', color: SubtitleColor, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item?.excerpt}</p>}
                            </div>
                            {/* BAGE  */}
                            {heroItem.status === "Defalut" && (
                                <div className="absolute top-6 right-[-42px] rotate-40 bg-red-600 w-40 py-1.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                                    DEFALUT
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};