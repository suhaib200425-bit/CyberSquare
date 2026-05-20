import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewsSection({
    postBannerRadius = { value: "15px" },
    title = { value: "Business" },
    titleSize = { value: "18px" },
    api = { value: "http://localhost:5000/api/post?limit=4" },
    paddingDesktop = { value: "0px 100px" },
    paddingMobile = { value: "0px 10px" },
    margin = { value: "30px 0px" },
    overingColor = { value: "#0e4646" }

}) {
    const [posts, setPosts] = useState([])
    const [hover, setHover] = useState(false)
    useEffect(() => {
        async function getPost() {
            try {
                const response = await axios.get(api.value)
                setPosts(response.data?.data)
            } catch (error) {
                console.log(error.response?.data || error.message);
                setPosts([])
            }
        }
        getPost()
    }, [api])

    function dateFormate(date) {

        const formatted = new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        return formatted;
    }
    const Navigate = useNavigate()

    const isMobile = window.innerWidth < 768;
    return (
        <section className="w-full px-4 md:px-10 lg:px-16 py-10 bg-white" style={{
            margin: margin.value,
            padding: isMobile ? paddingMobile.value || "0px 10px" : paddingDesktop.value || "0px 100px",
        }}>

            {/* TOP HEADER */}

            {posts ? <>
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[18px] tracking-[2px] font-semibold text-black uppercase"
                    style={{fontSize:titleSize.value}}>
                        {title.value}
                    </h2>

                    <button className="text-[18px] text-sky-600 hover:underline"
                    style={{fontSize:titleSize.value}}
                        onClick={() => {
                            Navigate(`/category/news?category=News`)
                        }}>
                        View all »
                    </button>
                </div>

                <div className="mb-3 rounded-md" style={{height:"3px",backgroundColor:overingColor.value}} />

                {/* GRID */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {posts.map((post) => (
                        <div
                        onClick={()=>{
                            Navigate(`/post/${post._id}`)
                        }}
                            key={post.id}
                            className="group cursor-pointer"
                        >

                            {/* IMAGE */}

                            <div className="overflow-hidden transition duration-300">
                                <img
                                    style={{ borderRadius: postBannerRadius.value }}
                                    src={post?.banner}
                                    alt={post?.title}
                                    className="overflow-hidden w-full h-[220px] object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* CONTENT */}

                            <div className="pt-4">

                                <span className="text-[11px] font-bold tracking-[1px] uppercase text-sky-700" style={{
                                    color: overingColor.value
                                }}>
                                    {post?.category?.title}
                                </span>

                                <h3
                                    onMouseEnter={(e) => {
                                        setHover(post?._id)
                                    }}
                                    onMouseLeave={(e) => {
                                        setHover(false)
                                    }}
                                    style={{
                                        color: hover==post?._id&&overingColor.value
                                    }} className="line-clamp-2 overflow-hidden text-[26px] leading-[1.15] font-bold text-black mt-2 hover:text-sky-700 transition">
                                    {post?.title}
                                </h3>

                                <p className="text-[13px] text-gray-500 mt-2">
                                    {dateFormate(post?.createdAt)}
                                </p>

                                <p className="line-clamp-2 overflow-hidden text-[15px] leading-[1.7] text-gray-600 mt-2">
                                    {post?.excerpt}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>
            </> :
                <h1>LOADING.....</h1>}
        </section>
    );
}