import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';

export function HexagonGridLayout({
  desktopPadding = { value: "20px 100px", label: "Desktop Padding", type: "text" },
  mobilePadding = { value: "20px 10px", label: "Mobile Padding", type: "text" },

  backgroundColor = { value: "#aaaa", label: "Backgroun Color", type: "color" },
  mainTitle = { value: "Feature Layout", label: "Main Title", type: "text" },
  mainTitleColor = { value: "#000000db", label: "Main Title Color", type: "color" },
  desktopMainTitleSize = { value: "26px", label: "Desktop Main Title Size", type: "text" },
  mobileMainTitleSize = { value: "21px", label: "Mobile Main Title Size", type: "text" },

  cardTextColor = { value: "#ffffffdb", label: "Card Text Color", type: "color" },
  cardBackgroundColor = { value: "#940909db", label: "Card Background Color", type: "color" },

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
}) {
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
        axios.get(`${BASEURL}/api/post/${webname}${apiRoute.value}?limit=6`)
      ]).then(([response]) => {
        console.log("Hexagon Grid Layout");
        console.log(response.data);
        setData({ posts: response.data?.posts })

      }).catch(error => {
        setData({
          posts: items
        })

        console.log("Hexagon Grid Layout Error");
        console.log(error.response?.data || error.message);
      });
    }
    GetPosts()
  }, [])


  const isMobile = window.innerWidth < 768;

  return (
    <div style={{
      padding: isMobile ? mobilePadding.value : desktopPadding.value,
      backgroundColor: backgroundColor?.value || '#0a0a0f',
      minHeight: '80vh'
    }}>
      <h1
        style={{
          fontSize: isMobile ? mobileMainTitleSize.value : desktopMainTitleSize.value,
          color: mainTitleColor.value
        }}
        className='text-bold h-[60px] text-white text-[26px] text-center pb-[20px] px-[20px] '>{mainTitle.value}</h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // maxWidth: '900px',
        margin: '0 auto',
        gap: '15px'
      }}>
        {data?.posts?.slice(0,isMobile?4:6).map((item, index) => (
          <div
            key={index}
            style={{
              width: '300px',
              height: '300px',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              backgroundColor: cardBackgroundColor.value,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
          >
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(to top, rgba(10,10,15,0.95) 45%, rgba(10,10,15,0.3)), url(${item?.banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '20px',
              boxSizing: 'border-box',
              color: cardTextColor.value,
              textAlign: 'center'
            }}>
              <h3 style={{ fontWeight:"500" , fontSize: '1.1rem', margin: '0 0 5px 0' }}>{item?.title}</h3>
              {item?.excerpt && <p style={{ fontSize: '0.75rem', opacity: 0.7, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item?.excerpt}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};