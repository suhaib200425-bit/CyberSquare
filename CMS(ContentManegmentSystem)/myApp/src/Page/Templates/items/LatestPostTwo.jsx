
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';

export default function LatestPostTwo({
    margin = { value: '' },
    desktopPadding = { value: '' },
    mobilePadding = { value: '' },
    title = { value: 'Latest Articles' },
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

    const posts = [
        {
            _id: 1,
            banner: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
            title: "Ice sheets can melt much faster than we thought",
            category: { title: "SCIENCE" },
            date: "8 June 2026",
            navigate: true
        },
        {
            _id: 2,
            banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
            title: "Trouble sleeping? This moon-shaped bedside light might help",
            category: { title: "TECH" },
            date: "12 June 2026",
            navigate: true
        },
        {
            _id: 3,
            banner: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?q=80&w=1200&auto=format&fit=crop",
            title: "A simple background photo is forcing Android users to reset phones",
            category: { title: "MOBILE" },
            date: "18 June 2026",
            navigate: true
        },
        {
            _id: 4,
            banner: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
            title: "You should blur the faces in your protest photos",
            category: { title: "NEWS" },
            date: "22 June 2026",
            navigate: true
        }
    ];
    // Dynamic screen size handling
    const [isMobile, setIsMobile] = useState(false);
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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initial check on mount
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
    const overlyColor = {
        background: "linear-gradient(to top, black, transparent)"
    }

    return (
        <section
            className='w-full bg-white font-sans'
            style={{
                padding: isMobile ? mobilePadding.value || '0px 10px' : desktopPadding.value || '0px 100px',
                margin: margin.value || '0px'
            }}
        >
            {/* Component Title */}
            <h1 className='text-center pt-10 pb-5 text-[25px] font-semibold'>
                {title.value}
            </h1>

            {/* Main Article Grid Layout */}
            <div className='grid grid-cols-2 gap-[15px] max-lg:grid-cols-1'>

                {/* LEFT SIDE: FEATURED BIG CARD */}
                <div onClick={() => {
                    if (post?.navigate) return
                    Navigate(`/${webname}/post/${data?.posts[1]._id}`)
                }} className='relative h-[500px] overflow-hidden rounded-[10px] cursor-pointer group'>
                    <div style={overlyColor} className="absolute z-10 h-[500px] w-full inset-0 bg-gradient-to-b from-black to-transparent" ></div>

                    <img
                        src={data?.posts[0]?.banner}
                        className='w-full h-full object-cover z-0 transition duration-200 group-hover:scale-105'
                        alt={data?.posts[0]?.title}
                    />
                    <div className='absolute inset-0 bg-gradi
                    ent-to-t from-black/90 via-black/20 to-transparent'></div>
                    <div className='absolute left-[30px] bottom-[28px] z-10 text-white'>
                            <p className='text-[13px]'>{formatDate(data?.posts[1]?.createdAt)}</p>
                        <span className='mt-[2px] inline-block bg-black px-[10px] py-[2px] rounded text-[13px] text-[#a8a699]'>
                            {data?.posts[0]?.category?.title}
                        </span>
                        <h2 className='mt-[10px] text-[42px] font-bold leading-[1.1] max-lg:text-[26px] line-clamp-2'>
                            {data?.posts[0]?.title}
                        </h2>
                    </div>
                </div>

                {/* RIGHT SIDE: CARDS STACK */}
                <div className='flex flex-col gap-[18px]'>

                    {/* TOP CARD (Medium Size) */}
                    <div onClick={() => {
                        if (post?.navigate) return
                        Navigate(`/${webname}/post/${data?.posts[1]._id}`)
                    }} className='relative h-[250px] overflow-hidden rounded-[10px] cursor-pointer group'>
                        <div style={overlyColor} className="z-10 absolute h-[250px] w-full inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <img
                            src={data?.posts[1]?.banner}
                            className='w-full h-full object-cover z-0 transition duration-200 group-hover:scale-105'
                            alt={data?.posts[1]?.title}
                        />
                        <div className='absolute left-[25px] bottom-[22px] text-white z-10'>
                            <p className='text-[13px]'>{formatDate(data?.posts[1]?.createdAt)}</p>
                            <span className='mt-[2px] inline-block bg-black px-[10px] py-[2px] rounded text-[13px] text-[#a8a699]'>
                                {data?.posts[1]?.category?.title}
                            </span>
                            <h3 className='mt-[10px] text-[34px] font-bold leading-[1.2] line-clamp-1 max-lg:text-[26px]'>
                                {data?.posts[1]?.title}
                            </h3>
                        </div>
                    </div>

                    {/* BOTTOM GRID (Two Small Cards) */}
                    <div className='grid grid-cols-2 gap-[18px] max-lg:grid-cols-1'>


                        {
                            data?.posts?.slice(2, 4).map(post => (
                                <div onClick={() => {
                                    if (post?.navigate) return
                                    Navigate(`/${webname}/post/${post._id}`)
                                }} className='relative h-[230px] overflow-hidden rounded-[40px] cursor-pointer group'>
                                    <div style={overlyColor} className='z-10 h-[230px] absolute inset-0 bg-gradient-to-t from-black/90 to-transparent'></div>
                                    {/* <div className="bg-gradient-to-b from-black to-transparent"></div> */}
                                    <img
                                        src={post?.banner}
                                        className='z-0 w-full h-full object-cover transition duration-200 group-hover:scale-105'
                                        alt="Healthy fruit smoothie recipe cover"
                                    />
                                    <div className='absolute left-[18px] bottom-[18px] text-white z-10'>
                                        <p className='text-[13px]'>{formatDate(post?.createdAt)}</p>
                                        <span className='mt-[2px] inline-block bg-black px-[10px] py-[2px] rounded text-[13px] text-[#a8a699]'>
                                            {post?.category?.title}
                                        </span>
                                        <h4 className='mt-[8px] text-[22px] font-bold leading-[1.3] line-clamp-2'>
                                           {post?.title}
                                        </h4>
                                    </div>
                                </div>
                            ))
                        }
                        {/* Small Card 2 */}


                    </div> {/* End of Bottom Grid */}
                </div> {/* End of Right Side */}
            </div> {/* End of Main Grid */}
        </section>
    );
}