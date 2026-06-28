import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';

export function InfiniteScrollLayout({
  backgroundColor = { value: "#ffffff", label: "Background Color", type: "color" },
  desktopPadding = { value: "10px 100px", label: "Desktop Padding", type: "text" },
  mobilePadding = { value: "10px 10px", label: "Mobile Padding", type: "text" },

  
  themeColor= { value: "#e50914", label: "Primary Theme Color", type: "color" },
  cardBg= { value: "#ffffff", label: "Card Background", type: "color" },
  textColor= { value: "#151414", label: "Card Text Color", type: "color" },
  subtitleColor= { value: "#2d2c2c", label: "Card Subtitle Color", type: "color" },

  mainTitle = { value: "Feature Layout", label: "Main Title", type: "text" },
  mainTitleAline = {
    value: "center", label: "Main Title Aline", type: "options",
    options: [
      {
        label: "Start",
        value: "start"
      }, {
        label: "Center",
        value: "center"
      }, {
        label: "End",
        vale: "end"
      }
    ]
  },
  mainTitleColor = { value: "#000000db", label: "Main Title Color", type: "color" },
  mainTitleBold = { value: "400", label: "Main Title Bold", type: "text" },
  desktopMainTitleSize = { value: "26px", label: "Desktop Main Title Size", type: "text" },
  mobileMainTitleSize = { value: "21px", label: "Mobile Main Title Size", type: "text" },
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

  const isMobile = window.innerWidth < 768;

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

  return (
    <div style={{
      padding: isMobile ? mobilePadding.value : desktopPadding.value,
      backgroundColor: backgroundColor.value || '#fafafa',
      minHeight: '100vh'
    }}>
      <h1
        style={{
          fontWeight: mainTitleBold.value,
          textAlign: mainTitleAline.value,
          fontSize: isMobile ? mobileMainTitleSize.value : desktopMainTitleSize.value,
          color: mainTitleColor.value
        }}
        className='text-bold mb-5 text-white text-[26px] text-center'>{mainTitle.value}
      </h1>

      <div className="  grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {data?.posts?.slice(0, 6).map((item, index) => (
          <div
          className='relative'
          onClick={()=>{
            if(item.navigate || item.status=="Defalut") return
            Navigate(`/${webname}/post/${item._id}`)
          }}
            key={index}
            style={{
              backgroundColor: cardBg.value,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              color: textColor.value,
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
            }}
          >
            {item?.banner && <img src={item?.banner} alt="" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />}
            <div className='' style={{ padding: '24px' }}>
              {item?.category?.title && (
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: themeColor?.value || '#ff4500', textTransform: 'uppercase' }}>
                  {item?.category?.title}
                </span>
              )}
              <h2 className='line-clamp-3' style={{ fontSize: '19px', margin: '8px 0' }}>{item?.title}</h2>
              {item?.excerpt && <p className='line-clamp-4' style={{ color: subtitleColor.value, fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>{item?.excerpt}</p>}
              {item?.status === "Defalut" && (
              <div className="absolute top-6 right-[-42px] rotate-40 bg-red-600 w-40 py-1.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                DEFALUT
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};