import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';

    function FashionTrendingSection({
        desktopPadding = { value: '' },
        mobilePadding = { value: '' },
        backgroundColor = { value: '' },
        contentColor = { value: 'black' },
        themeColor = { value: 'red' },
        title = { value: 'Latest Posts' },
        desktopTitleSize = { value: '32px' },
        mobileTitleSize = { value: '25px' },
        api = {
            value: "/popular-posts", type: "option", options: [
                {
                    name: "Latest Posts",
                    api: `/latest-posts`
                }, {
                    name: "Popular Posts",
                    api: "/popular-posts"
                }
            ]
        }
    }) {
        const Navigate = useNavigate()
        const [data, setData] = useState(null)
        const { webname } = useParams()

        // Latest posts data array
        const latestPosts = [
            {
                _id: 1,
                banner: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
                title: 'Breaking: Shocking Political Events Changing the World',
                category: 'ChatGPT',
                time: '2 Hours ago',
                navigate: true
            },
            {
                _id: 2,
                banner: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1200&auto=format&fit=crop',
                title: "Viral Health Trends: What's Fact and What's Fiction?",
                category: 'Trending',
                time: '7 Hours ago',
                navigate: true
            },
            {
                _id: 3,
                banner: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop',
                title: "Must-See Viral Videos: Trending Clips You Can't Miss",
                category: { title: 'Lifestyle' },
                time: '6 Hours ago',
                navigate: true
            },
            {
                _id: 4,
                banner: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop',
                title: 'Insider Secrets: Behind the Scenes of Major News Events',
                category: 'Globalimpact',
                time: '4 Hours ago',
                navigate: true
            }
        ];

        useEffect(() => {
            async function GetPosts() {
                Promise.all([
                    axios.get(`${BASEURL}/api/post/${webname}${api.value}?limit=5`)
                ]).then(([response]) => {
                    // console.log("FashionTrendingSection");
                    // console.log(response.data?.posts);

                    setData({ posts:[ ...response.data?.posts,...latestPosts ]})
                }).catch(error => {
                    setData({posts:latestPosts})
                    console.log(error.response?.data || error.message);
                });
            }
            GetPosts()
        }, [])    

        // Mobile screen detection handling
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };

            // Initial check
            handleResize();

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        // Inline styling calculations
        const sectionStyle = {
            padding: isMobile ? (mobilePadding.value || '0px 10px') : (desktopPadding.value || '0px 100px'),
            backgroundColor: backgroundColor.value,
            color: contentColor.value
        };

        const titleStyle = {
            fontSize: isMobile ? mobileTitleSize.value : desktopTitleSize.value
        };

        const gradientStyle = {
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.46), transparent)'
        };

        return (
            <section className="w-full bg-[#f5f6fb]" style={sectionStyle}>
                <div className="grid grid-cols-1  lg:grid-cols-[1.2fr_0.9fr] gap-6 pt-10 pb-10">

                    {/* Left Big Banner Section */}
                    <div onClick={() => {
                        if (data?.posts[0]?.navigate) return
                        Navigate(`/${webname}/post/${data?.posts[0]?._id}`)
                    }} className="relative overflow-hidden rounded-[10px] h-[300px] md:h-[520px]">
                        <img 
                            src={data?.posts[0]?.banner}
                            alt={data?.posts[0]?.category?.title}
                            className="w-full h-full object-cover"
                        />
                        <div  style={gradientStyle} className="absolute w-full inset-0"></div>

                        <div className="absolute bottom-8 left-8">
                            <div className="flex items-center gap-2 mb-1">
                                <span
                                    style={{ backgroundColor: themeColor.value }}
                                    className="bg-[#4f46e5] text-white text-[12px] font-semibold px-2 py-1 rounded-full"
                                >
                                    {data?.posts[0]?.category?.title}
                                </span>
                            </div>
                            <div className="inline-block">
                                <h2 className="line-clamp-2 text-white text-[48px] leading-[56px] font-bold">
                                    {data?.posts[0]?.title}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Latest Posts List */}
                    <div className="rounded-[10px] p-5">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-[22px] font-bold" style={titleStyle}>
                                {title.value}
                            </h3>
                            <button
                                style={{ borderColor: themeColor.value }}
                                className="w-[30px] h-[30px] rounded-full border border-[#d1d5db] flex items-center justify-center text-[12px]"
                            >
                                🌙
                            </button>
                        </div>

                        <div className="flex flex-col h-full gap-[20px] items-center">
                            {data?.posts?.slice(1,5).map((item, index) => (
                                <div key={index} className="flex gap-3 w-full" onClick={() => {
                                    if (item?.navigate) return
                                    Navigate(`/${webname}/post/${item._id}`)
                                }}>
                                    <div className="w-[110px] h-[90px] rounded-[15px] overflow-hidden shrink-0">
                                        <img
                                            src={item?.banner}
                                            alt={item?.category?.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                                            {/* <span className="text-[10px] text-[#9a9a9a]">⏱ {item.time}</span> */}
                                            <span className="text-[#d1d5db]">/</span>
                                            <span
                                                style={{ color: themeColor.value }}
                                                className="text-[10px] font-medium text-[#4f46e5]"
                                            >
                                                {item?.category?.title}
                                            </span>
                                        </div>
                                        <h4 className="line-clamp-2 text-[18px] leading-[25px] font-bold">
                                            {item?.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        );
    }

export default FashionTrendingSection;