import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';

export function AppleLaunchLayout({

  desktopPadding = { value: "10px 100px", label: "Desktop Padding", type: "text" },
  mobilePadding = { value: "20px 10px", label: "Mobile Padding", type: "text" },

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
  desktopMainTitleSize = { value: "31px", label: "Desktop Main Title Size", type: "text" },
  mobileMainTitleSize = { value: "23px", label: "Mobile Main Title Size", type: "text" },

  backgroundColor = { value: "#ffffff", label: "Background Color", type: "color" },
  mainCardTitleColor = { value: "#e50914", label: "Primary Theme Color", type: "color" },
  cardBg = { value: "#ffffff", label: "Card Background", type: "color" },
  textColor = { value: "#000000c2", label: "Main Card Text Color", type: "color" },
  subtitleColor = { value: "#49484b", label: "Main Card Subtitle Color", type: "color" },

  desktopCardTitleSize = { value: "25px", label: "Desktop Card Title Size", type: "text" },
  mobileCardTitleSize = { value: "21px", label: "Mobile Card Title Size", type: "text" },
  cardTitleColor = { value: "#000000", label: "Mobile Card Title Color", type: "color" },

  desktopCardSubTitleSize = { value: "18px", label: "Desktop Card Subtitle Size", type: "text" },
  mobileCardSubTitleSize = { value: "15px", label: "Mobile Card Subtitle Size", type: "text" },
  cardSubTitleColor = { value: "#3c3838", label: "Mobile Card Subtitle Color", type: "color" },
  apiRoute = {
    value: "/top-category-post",
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

  const [hero, setHero] = useState({})


  useEffect(() => {
    async function GetPosts() {
      Promise.all([
        axios.get(`${BASEURL}/api/post/${webname}${apiRoute.value}?limit=4`)
      ]).then(([response]) => {
        setHero(response.data?.posts[0])
        setData({ posts: response.data?.posts });
      }).catch(error => {
        setData({ posts: items });
        setHero(items[0])
        console.log(error.response?.data || error.message);
      });
    }
    GetPosts();
  }, []);


  return (
    <div style={{
      padding: isMobile ? mobilePadding.value : desktopPadding.value,
      backgroundColor: backgroundColor.value,
      color: textColor.value, 
    }}>
      {
        mainTitle.value &&
        <h1
          style={{

            textAlign: mainTitleAline.value,
            fontSize: isMobile ? mobileMainTitleSize.value : desktopMainTitleSize.value,
            color: mainTitleColor.value
          }}
          className='text-bold mb-4 text-white text-[26px] text-center'>{mainTitle.value}
        </h1>
      }

      <div className='flex flex-col items-center ' style={{ margin: '0 auto' }}>
        <div className="md:flex gap-10">

          {/* Giant Hero Visual with Parallax Feeling Container */}
          <div
            className='relative w-[100%] '

            style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              margin: '0 auto 60px auto',
              backgroundColor: '#fff'
            }}>
            <img className='w-[100%] h-[300px]' src={hero?.banner} alt="" style={{ display: 'block', maxHeight: '650px', objectFit: 'cover' }} />
            {hero?.status === "Defalut" && (
              <div className="absolute top-6 right-[-42px] rotate-40 bg-red-600 w-40 py-1.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                DEFALUT
              </div>
            )}
          </div>
          <div className="">
            {hero?.category?.title && (
              <span className='' style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase', color: mainCardTitleColor?.value || '#0066cc' }}>
                {hero?.category?.title}
              </span>
            )}
            <h1 className=' ' style={{ fontSize: isMobile ? mobileCardTitleSize.value : desktopCardTitleSize.value, fontWeight: '700', letterSpacing: '-0.02em', margin: '10px 0 15px 0' }}>
              {hero?.title}
            </h1>
            {hero?.excerpt && (
              <p className='' style={{
                fontSize: isMobile ? mobileCardSubTitleSize.value : desktopCardSubTitleSize.value,
                color: subtitleColor.value,
                maxWidth: '700px',
                margin: '0 auto 40px auto',
                lineHeight: '1.3'
              }}>
                {hero?.excerpt}
              </p>
            )}
          </div>

        </div>

        {/* Multi-Floating Grid Secondary Elements */}
        <div className='w-full' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '5px' }}>
          {data?.posts?.slice(1, 4).map((item, idx) => (
            <div className='relative overflow-hidden' key={idx} style={{ backgroundColor: cardBg.value, borderRadius: '24px', padding: '10px', textAlign: 'left', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <img
                className='rounded-[10px] h-[200px]' src={item?.banner} alt="" style={{ width: '100%', display: 'block', maxHeight: '650px', objectFit: 'cover' }} />

              <h3 className='text-black' style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px',color:cardTitleColor.value }}>{item?.title}</h3>
              {item?.excerpt && <p style={{ color: cardSubTitleColor.value, fontSize: '1rem', lineHeight: '1.4' }}>{item.excerpt}</p>}
              {item?.status === "Defalut" && (
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