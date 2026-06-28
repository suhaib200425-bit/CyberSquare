import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../../../assets/assets';

export function StoryTimelineLayout({
  backgroundColor = { value: "#ffffff", label: "Background Color", type: "color" },
  desktopPadding = { value: "10px 100px", label: "Desktop Padding", type: "text" },
  mobilePadding = { value: "10px 10px", label: "Mobile Padding", type: "text" },


  mainTitle = { value: "Feature Layout", label: "Main Title", type: "text" },
  mainTitleAline = { value: "center", label: "Main Title Aline", type: "options",
    options:[
      {
        label:"Start",
        value:"start"
      },{
        label:"Center",
        value:"center"
      },{
        label:"End",
        vale:"end"
      }
    ]
   },
  mainTitleColor = { value: "#000000db", label: "Main Title Color", type: "color" },
  desktopMainTitleSize = { value: "26px", label: "Desktop Main Title Size", type: "text" },
  mobileMainTitleSize = { value: "21px", label: "Mobile Main Title Size", type: "text" },

  themeColor = { value: "#e50914", label: "Primary Theme Color", type: "color" },
  cardBg = { value: "#141414", label: "Card Background", type: "color" },
  textColor = { value: "#ffffff", label: "Main Text Color", type: "color" },
  subtitleColor = { value: "#aaaaaa", label: "Subtitle Color", type: "color" },
  enableAnimation = { value: true, label: "Enable Animations", type: "boolean" },

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
        axios.get(`${BASEURL}/api/post/${webname}${apiRoute.value}?limit=4`)
      ]).then(([response]) => {
        setData({ posts: response.data?.posts });
      }).catch(error => {
        setData({ posts: items });
        console.log(error.response?.data || error.message);
      });
    }
    GetPosts();
  }, []);

  useEffect(() => {
    if (!data?.posts.length) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % data?.posts.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, data?.posts.length]);

  if (!data?.posts.length) return null;


  const isMobile = window.innerWidth < 768;

  const activeItem = data?.posts[current];

  return (
    <div className='w-[100%] overflow-hidden' 
    style={{ 
          padding:!isMobile?desktopPadding.value:mobilePadding.value,
          backgroundColor: backgroundColor.value || '#ffffff' 
        }}>
      <h1
        style={{
          
      textAlign: mainTitleAline.value,
          fontSize: isMobile ? mobileMainTitleSize.value : desktopMainTitleSize.value,
          color: mainTitleColor.value
        }}
        className='text-bold  text-white text-[26px] text-center'>{mainTitle.value}</h1>
      <div
        className={`w-full flex justify-center items-center   transition-colors duration-300`}
        
      >
        <div
          className="h-[50vh] md:h-[80vh] rounded-[10px] w-full relative overflow-hidden bg-cover bg-center font-sans select-none transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.85) 60%, rgba(15, 15, 15, 0.8) 80%), url(${activeItem?.banner})`,
            color: textColor.value || '#ffffff'
          }}
        >
          {/* Content Overlay Layout */}
          <div className="relative h-full flex flex-col items-center justify-center  z-10">

            {activeItem?.category?.title && (
              <motion.span
                key={activeItem?.category?.title}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-[11px] font-bold uppercase px-2 py-0.5 rounded-[20px] text-black"
                style={{ backgroundColor: themeColor?.value || '#fff' }}
              >
                {activeItem.category.title}
              </motion.span>
            )}

            {activeItem?.title && (
              <motion.h2
                key={activeItem?.title}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center text-[21px] md:text-[35px] w-full md:w-3/5 mt-3 md:mt-4 font-bold leading-snug"
              >
                {activeItem?.title}
              </motion.h2>
            )}

            {activeItem?.excerpt && (
              <motion.p
                key={activeItem?.excerpt}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center text-[15px] md:text-[17px] w-full md:w-3/5 opacity-85 m-0 leading-relaxed"
                style={{ color: subtitleColor.value || '#aaaaaa' }}
              >
                {activeItem?.excerpt}
              </motion.p>
            )}

            {activeItem.status === "Defalut" && (
              <div className="absolute top-6 right-[-42px] rotate-40 bg-red-600 w-40 py-1.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                DEFALUT
              </div>
            )}
          </div>
          

          {/* Progress Bars */}
          <div className="absolute bottom-4 left-2.5 right-2.5 flex gap-1.5 z-20">
            {data?.posts?.map((_, idx) => (
              <div key={idx} className="flex-1 h-[3px] bg-white/30 rounded-[2px] overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-0"
                  style={{
                    width: idx < current ? '100%' : idx === current ? '100%' : '0%',
                    transition: idx === current ? 'width 5000ms linear' : 'none'
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>

  );
}