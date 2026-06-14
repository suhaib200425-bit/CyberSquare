

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';

export default function SelectedPostsLists({
    margin = { value: "" },
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    title = { value: "LATEST ARTICLES" },
    api = {
        value: "/latest-posts",
        type: "option",
        options: [
            {
                name: "Latest Posts",
                api: "/latest-posts"
            }, {
                name: "Popular Posts",
                api: "/popular-posts"
            }
        ]
    }
}) {
    // Responsive state management
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);

        const months = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];

        return `${String(date.getDate()).padStart(2, "0")} ${months[date.getMonth()]
            } ${date.getFullYear()}`;
    }

    const { webname } = useParams()
    const Navigate = useNavigate()
    const [data, setData] = useState(null)
    useEffect(() => {
        async function GetPosts() {
            Promise.all([
                axios.get(`${BASEURL}/api/post/${webname}${api.value}?limit=5`)
            ]).then(([response]) => {
                setData({ posts: [...response.data?.posts, ...posts] })
            }).catch(error => {
                setData({ posts: posts })
                console.log(error.response?.data || error.message);
            });
        }
        GetPosts()
    }, [webname, api.value])

    const posts = [
        {
            banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
            title: "Scientists Develop Artificial Leaf That Turns Carbon Dioxide Into Fuel",
            createdAt: "May 14, 2026",
            navigate: true
        },
        {
            banner: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1200&auto=format&fit=crop",
            title: "Scientists Discover New Species of Dinosaur in Argentina",
            createdAt: "May 18, 2026",
            navigate: true
        },
        {
            banner: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
            title: "New Study Shows Regular Exercise Can Improve Health",
            createdAt: "May 22, 2026",
            navigate: true
        },
        {
            banner: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
            title: "Cristiano Scores Twice In Manchester United Return",
            createdAt: "May 29, 2026",
            navigate: true
        }
    ];

    return (
        <section
            className="w-full bg-white"
            style={{
                padding: isMobile ? mobilePadding.value || '0px 10px' : desktopPadding.value || '0px 100px',
                margin: margin.value || '0px'
            }}
        >
            {/* Section Header */}
            <div className="border-b-2 border-gray-400 h-[80px] flex items-end pb-2 mb-3 pt-10">
                <h2 className="text-[30px] font-bold text-[#111111]">{title.value}</h2>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-[1.2fr_0.9fr] gap-5 pb-10 max-lg:grid-cols-1">

                {/* Main Featured Post (Left Side) */}
                <div className="w-full" onClick={() => {
                    if (post.navigate) return
                    Navigate(`/${webname}/post/${post._id}`)
                }}>
                    <img
                        src={data?.posts[0]?.banner}
                        className="w-full h-[420px] object-cover rounded-[6px] max-lg:h-[220px]"
                        alt={data?.posts[0]?.title}
                    />
                    <div className="mt-[15px]">
                        <h3 className="text-[25px] line-clamp-2 leading-[1.09] font-bold text-[#111111] max-md:text-[28px]">
                            {data?.posts[0]?.title}
                        </h3>
                    </div>
                </div>

                {/* Sub Posts Grid (Right Side) */}
                <div className="grid grid-cols-2 gap-[10px] max-lg:grid-cols-1">
                    {data?.posts?.slice(1,5).map((post, index) => (
                        <div key={index} className="flex flex-col gap-[5px]" onClick={() => {

                            if (post?.navigate) return
                            Navigate(`/${webname}/post/${post._id}`)
                        }}>
                            <img
                                src={post?.banner}
                                className="w-full h-[150px] object-cover rounded-[6px] max-lg:h-[120px]"
                                alt={post?.title}
                            />
                            <div className="flex-1">
                                <p className="text-[12px] text-[#9a9a9a]">{formatDate(post?.createdAt)}</p>
                                <h4 className="line-clamp-2 mt-[3px] text-[20px] leading-[1.05] font-semibold text-[#111111] max-md:text-[18px]">
                                    {post?.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}