import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturedArticlesSection({
    paddingDesktop = { value: "" },
    paddingMobile = { value: "" },
    margin = { value: "" },
    title = { value: "Latest Articles" },
    titleColor = { value: "black" },
    titleSize = { value: "25px" },
    titleWeight = { value: 500 },
    spantitle = { value: "Explore Our " },
    api = { value: "http://localhost:5000/api/post" },

}) {
    const [posts, setPosts] = useState([])
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
    }, [])

    function timeAgo(date) {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);

        const intervals = [
            { label: "year", seconds: 31536000 },
            { label: "month", seconds: 2592000 },
            { label: "day", seconds: 86400 },
            { label: "hour", seconds: 3600 },
            { label: "minute", seconds: 60 },
            { label: "second", seconds: 1 }
        ];

        for (let i of intervals) {
            const count = Math.floor(seconds / i.seconds);

            if (count >= 1) {
                return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
            }
        }

        return "just now";
    }
    const Navigate = useNavigate()
    const isMobile = window.innerWidth < 768;
    return (
        <section className="w-full bg-white p-5" style={
            {
                margin: margin.value || "30px 0px",
                padding: isMobile ? paddingMobile.value || "0px 10px" : paddingDesktop.value || "0px 100px",
            }
        }>
            <h2 className="text-[20px] font-light mb-3" style={{
                color: titleColor.value,
                fontWeight: titleWeight.value,
                fontSize: titleSize.value
            }}>
                <span className="hidden md:inline">{spantitle.value}</span>
                {title.value}
            </h2>
            {posts &&
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" >

                    {/* LEFT BIG CARD */}

                    <div
                        className="relative h-[500px] rounded-[14px] overflow-hidden bg-cover bg-center flex items-end p-6"
                        style={{
                            backgroundImage: `url(${posts[0]?.banner})`,
                        }}
                        onClick={()=>{
                    Navigate(`/post/${posts[0]._id}`)
                }}
                    >
                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* CONTENT */}
                        <div className="relative z-10 text-white">
                            <span className="text-[12px] bg-white/20 px-3 py-1 rounded-full">
                                {posts[0]?.category?.title}
                            </span>

                            <h2 className="text-[32px] leading-[1.2] font-bold mt-4 max-w-[500px]">
                                {posts[0]?.title}
                            </h2>

                            <div className="flex items-center gap-4 mt-4 text-[13px] text-white/80 flex-wrap">
                                <span>✍ "AUTHER", {timeAgo(posts[0]?.createdAt)} years ago</span>
                                {/* <span>💬 3</span> */}
                                {/* <span>⏱ 3 min read</span> */}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}

                    <div className="grid grid-cols-1 gap-4">

                        {/* TOP SMALL CARDS */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* CARD 1 */}

                            <div
                                className="relative h-[240px] rounded-[14px] overflow-hidden bg-cover bg-center flex items-end p-5"
                                style={{
                                    backgroundImage: `url(${posts[1]?.banner})`,
                                }}
                                onClick={()=>{
                    Navigate(`/post/${posts[1]._id}`)
                }}
                            >
                                <div className="absolute inset-0 bg-black/35"></div>

                                <div className="relative z-10 text-white">
                                    <span className="text-[11px] bg-white/20 px-3 py-1 rounded-full">
                                        {posts[1]?.category?.title}
                                    </span>

                                    <h3 className="text-[20px] font-semibold leading-[1.3] mt-3">
                                        {posts[1]?.title}
                                    </h3>
                                </div>
                            </div>

                            {/* CARD 2 */}

                            <div
                                className="relative h-[240px] rounded-[14px] overflow-hidden bg-cover bg-center flex items-end p-5"
                                style={{
                                    backgroundImage: `url(${posts[2]?.banner})`,
                                }}
                                onClick={()=>{
                    Navigate(`/post/${posts[2]._id}`)
                }}
                            >
                                <div className="absolute inset-0 bg-black/40"></div>

                                <div className="relative z-10 text-white">
                                    <span className="text-[11px] bg-white/20 px-3 py-1 rounded-full">
                                        {posts[2]?.category?.title}
                                    </span>

                                    <h3 className="text-[20px] font-semibold leading-[1.3] mt-3">
                                        {posts[2]?.title}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM WIDE CARD */}

                        <div
                            className="relative h-[240px] rounded-[14px] overflow-hidden bg-cover bg-center flex items-end p-5"
                            style={{
                                backgroundImage: `url(${posts[3]?.banner})`,
                            }}
                            onClick={()=>{
                    Navigate(`/post/${posts[3]._id}`)
                }}
                        >
                            <div className="absolute inset-0 bg-black/35"></div>

                            <div className="relative z-10 text-white">
                                <span className="text-[11px] bg-white/20 px-3 py-1 rounded-full">
                                    {posts[3]?.category?.title}
                                </span>

                                <h3 className="text-[26px] font-bold leading-[1.3] mt-3 max-w-[600px]">
                                    {posts[3]?.title}
                                </h3>

                                <div className="flex items-center gap-4 mt-4 text-[13px] text-white/80 flex-wrap">
                                    <span>✍ "AUTHER", {timeAgo(posts[3]?.createdAt)} years ago</span>
                                    {/* <span>💬 0</span> */}
                                    {/* <span>⏱ 3 min read</span> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </section>
    );
}