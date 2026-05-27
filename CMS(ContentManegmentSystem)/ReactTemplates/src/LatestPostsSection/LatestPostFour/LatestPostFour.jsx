import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMTMxM2EwNjIwNTFkNWMxODZiYTUxMiIsImVtYWlsIjoic3VoYWlia29wcGF0aDY2QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoibmFzaXlhIiwiaWF0IjoxNzc5NjkzNjg2LCJleHAiOjE3Nzk3ODAwODZ9._ctVPVcX-NFXkQpkn3rzrNcYMX_ycmmkPvOT-qNdGtg"

export default function LatestPostFour({
    paddingDesktop = { value: "" },
    paddingMobile = { value: "" },
    margin = { value: "" },
    titleHed = { value: "Trending" },
    titleHedSize = { value: "25px" },
    theme = { value: "rgba(80, 14, 80, 0.87)" }
}) {

    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])
    const [active, setActive] = useState("")
    
    useEffect(() => {
        async function getAllPageData() {
            try {

                const [postResponse, categoryResponse] = await Promise.all([
                    axios.get(`http://10.198.16.119:5000/api/post/get/by/category/${active}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get(`http://10.198.16.119:5000/api/category`, {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                ]);

                console.log(postResponse.data);
                console.log(categoryResponse.data);

                setPosts(postResponse.data?.data);
                setCategories(categoryResponse.data?.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }
        }
        getAllPageData()
    }, [active])
    function dateFormate(date) {

        const formatted = new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        return formatted;
    }

    //   const Navigate = useNavigate()

    const isMobile = window.innerWidth < 768;
    return (
        <section className="w-full bg-white py-10 px-4 md:px-10 lg:px-16"
            style={{
                margin: margin.value,
                padding: isMobile ? paddingMobile.value || "0px 10px" : paddingDesktop.value || "0px 100px",

            }}>

            {/* TOP */}

            <div className="pt-10 flex flex-col  lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

                <div className="flex items-center gap-4 w-full">

                    <h2 className="text-[28px] font-bold whitespace-nowrap" style={{
                        fontSize: titleHedSize.value
                    }}>
                        {titleHed.value}
                    </h2>

                    <div className="w-full h-[2px] bg-red-400 "
                        style={{
                            backgroundColor: theme.value
                        }}></div>

                </div>

                {/* MENU */}

                <div className="flex  gap-5 text-[14px] text-gray-500 font-medium">
                    <button className=" font-semibold"
                        style={{
                            color: active == "" && "black"
                        }}
                        onClick={() => {
                            setActive(prev => {
                                return ""
                            })
                        }}>
                        All
                    </button>
                    {
                        categories?.slice(0, 7).map(category => <button
                            style={{
                                color: active == category._id && "black"
                            }}
                            onClick={() => {
                                setActive(prev => {
                                    if (prev == category.title) return ""
                                    return category._id
                                })
                            }} className="hover:text-black transition">
                            {category.title}
                        </button>
                        )
                    }


                </div>

            </div>

            {/* CONTENT */}

            {
                posts && posts.length ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* LEFT BIG CARD */}

                        <div
                            onClick={() => {
                                // Navigate(`/post/${posts[0]._id}`)
                            }}
                            className="relative rounded-[12px] overflow-hidden h-[420px] bg-cover bg-center flex items-end p-6"
                            style={{
                                backgroundImage: `url(${posts[0]?.banner})`
                            }}
                        >

                            {/* OVERLAY */}

                            <div className="absolute inset-0 bg-black/45"></div>

                            {/* CONTENT */}

                            <div className="relative z-10 text-white">

                                <div className="flex items-center gap-3 text-[12px] mb-4 flex-wrap">

                                    <span
                                        style={{
                                            backgroundColor: theme.value
                                        }}
                                        className="bg-red-500 px-3 py-1 rounded-full font-medium">
                                        {posts[0]?.category?.title}
                                    </span>

                                    <span className="text-white/80">
                                        📅 {dateFormate(posts[0]?.createdAt)}
                                    </span>

                                </div>

                                <h3 className="text-[32px] leading-[1.2] font-bold max-w-[500px]">
                                    {posts[0]?.title}
                                </h3>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}

                        <div className="flex flex-col gap-5 item-center justify-center">

                            {posts?.slice(1, 4).map((item) => (

                                <div

                                    onClick={() => {
                                        // Navigate(`/post/${item._id}`)
                                    }}
                                    key={item._id}
                                    className="flex gap-4 group cursor-pointer"
                                >

                                    {/* IMAGE */}

                                    <div className="w-[120px] h-[100px] overflow-hidden rounded-[10px] flex-shrink-0">

                                        <img
                                            src={item?.banner}
                                            alt={item?.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                        />

                                    </div>

                                    {/* TEXT */}

                                    <div>

                                        <div className="flex items-center gap-3 text-[12px] text-gray-500 flex-wrap mb-2">

                                            <span className="text-red-500 font-semibold"
                                                style={{
                                                    color: theme.value
                                                }}>
                                                {item?.category?.title}
                                            </span>

                                            <span>
                                                📅 {dateFormate(item.createdAt)}
                                            </span>

                                        </div>

                                        <h3
                                            onMouseEnter={(e) => {
                                                e.target.style.color = theme.value;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = "";
                                            }}
                                            className="text-[22px] leading-[1.3] font-bold text-black  transition line-clamp-2">
                                            {item?.title}
                                        </h3>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>
                    : <div className="text-[30px]">{
                        "LOADING...."
                    }</div>
            }

        </section>
    );
}