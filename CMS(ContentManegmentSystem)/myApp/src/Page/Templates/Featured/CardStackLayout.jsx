import React, { useEffect, useRef, useState } from 'react';

import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';
export function CardStackLayout ({ 
    desktopPadding = { value: "20px 100px",label:"Desktop Padding" ,type:"text" },
    mobilePadding = { value: "20px 10px",label:"Mobile Padding" ,type:"text"  },

    backgroundColor = { value: "#aaaa", label: "Backgroun Color", type: "color" },
    mainTitle = { value: "Feature Layout", label: "Main Title", type: "text" },
    mainTitleColor = { value: "#000000db", label: "Main Title Color", type: "color" },
    desktopMainTitleSize = { value: "26px", label: "Desktop Main Title Size", type: "text" },
    mobileMainTitleSize = { value: "21px", label: "Mobile Main Title Size", type: "text" },

    cardTextColor = { value: "#187918db", label: "Card Text Color", type: "color" },
    cardBackgroundColor = { value: "#940909db", label: "Card Background Color", type: "color" },
    themeColor = { value: "#05d42e", label: "Main Title Color", type: "color" },

    apiRoute = {
        value: "/latest-posts",
        type: "options",
        options: [
            {
                label: "Latest Posts",
                value: "/latest-posts"
            }, {
                label: "Popular Posts",
                value: "/popular-posts"
            }
        ]
    }
})  {
    const { webname } = useParams()
    const Navigate = useNavigate()
    const [data, setData] = useState(null)
    const items = [
    {
        "_id": "6b2aa001e64f3be6f9052001",
        "title": "Building Scalable React Applications with Modern Architecture",
        "slug": "building-scalable-react-applications-with-modern-architecture",
        "banner": "https://picsum.photos/1200/700?random=101",
        "category": {
            "title": "React"
        },
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
        "category": {
            "title": "Redis"
        },
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
        "category": {
            "title": "Tailwind CSS"
        },
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
        "category": {
            "title": "MongoDB"
        },
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
        "category": {
            "title": "Docker"
        },
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
        "category": {
            "title": "TypeScript"
        },
        "status": "Defalut",
        "navigate": true,
        "views": 198,
        "excerpt": "Understand TypeScript fundamentals, advanced types, generics, and best practices for building robust React applications.",
        "createdAt": "2026-06-15T16:40:20.000Z"
    }
    ]
    useEffect(() => {
        async function GetPosts() {
            Promise.all([
                axios.get(`${BASEURL}/api/post/${webname}${apiRoute.value}?limit=4`)
            ]).then(([response]) => {
                console.log("Card Stack Layout");
                console.log(response.data);
                setData({ posts: response.data?.posts })

            }).catch(error => {
                setData({
                    posts: items
                })

                console.log("Card Stack Error");
                console.log(error.response?.data || error.message);
            });
        }
        GetPosts()
    }, [])


    const isMobile = window.innerWidth < 768;

    return (
        <>
            {
                data?.posts &&
                <div className="w-full  bg-[#0f0f11] px-20 "
                    style={{
                        backgroundColor: backgroundColor.value,
                        padding: isMobile ? mobilePadding.value : desktopPadding.value
                    }}
                >
                    <h1
                        style={{
                            fontSize: isMobile ? mobileMainTitleSize.value : desktopMainTitleSize.value,
                            color: mainTitleColor.value
                        }}
                        className='text-bold h-[60px] text-white text-[26px] text-center sticky pb-[20px] pt-[20px] top-[0px]'>{mainTitle.value}</h1>
                    <div className="relative flex flex-col gap-10">
                        {data?.posts?.slice(0, 4).map((item, index) => {
                            const offsetFactor = 0 + index;

                            return (
                                <div
                                    key={index}
                                    className="sticky top-[50px]"
                                    style={{
                                        zIndex: items.length + index,
                                    }}
                                >
                                    <div
                                        className="relative  overflow-hidden mt-5 w-[100%] md:w-[90%] mx-auto rounded-3xl p-6 h-[480px] flex flex-col justify-end bg-cover bg-center shadow-2xl"
                                        style={{
                                            transform: `scale(${1 - offsetFactor * 0.03})`,
                                            backgroundColor: cardBackgroundColor.value,
                                            color: cardTextColor.value,
                                            backgroundImage: `
                  linear-gradient(
                    to top,
                    rgba(0,0,0,0.85) 40%,
                    transparent 90%
                  ),
                  url(${item?.banner})
                `,
                                        }}
                                    >
                                        <div className="flex px-0 md:px-10 text-center flex-col justify-end items-center h-full text-white pb-5">
                                            {item?.category?.title && (
                                                <span
                                                    className="text-[11px] font-extrabold uppercase tracking-[1.5px] "
                                                    style={{
                                                        color:
                                                            themeColor?.value || "#ffd700",
                                                    }}
                                                >
                                                    {item?.category?.title}
                                                </span>
                                            )}

                                            <h3 className=" text-center text-3xl font-bold mt-1 px-0 md:px-30 mb-3">
                                                {item?.title}
                                            </h3>

                                            {/* {item?.excerpt && !isMobile && (
                                                <p className=" text-center text-sm opacity-80">
                                                    {item?.excerpt}
                                                </p>
                                            )} */}

                                            <button onClick={() => {
                                                !item.navigate && 
                                                 item.status != "Defalut" &&
                                                 Navigate(`/${webname}/post/${item._id}`)
                                            }} className='mt-3 px-3 bg-white text-black py-2 rounded-[5px]'>
                                                Read More
                                            </button>
                                        </div>
                                        {/* Badge */}
                                        {
                                            item.status == "Defalut" &&
                                            <div className="absolute top-6 right-[-42px] rotate-40 bg-red-600 w-40 py-2 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                                                DEFALUT
                                            </div>
                                        }

                                    </div>

                                </div>
                            );
                        })}

                        {/* scroll space */}
                        <div className="h-[50px]" />
                    </div>
                </div>
            }
        </>

    );
};