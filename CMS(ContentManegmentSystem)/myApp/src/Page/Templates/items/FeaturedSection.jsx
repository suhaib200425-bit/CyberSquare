import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";
import Loading from "../../Loading/Loading";
import NotFound from "../../NotFound/NotFound";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useEffect, useState } from "react";
function FeaturedSection({
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    backgroundColor = { value: "" },
    contentColor = { value: "" },
    themeColor = { value: "red" },
    title = { value: "New Posts" },
    desktopTitleSize = { value: "32px" },
    mobileTitleSize = { value: "25px" },
    api = {
        value: "/latest-posts", type: "option", options: [
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

    const { webname } = useParams()
    const Navigate = useNavigate()
    const [data, setData] = useState(null)
    useEffect(() => {
        async function GetPosts() {
            Promise.all([
                axios.get(`${BASEURL}/api/post/kite${api.value}?limit=3`)
            ]).then(([response]) => {
                setData({ posts: response.data?.posts })
            }).catch(error => {
                console.log(error.response?.data || error.message);
            });
        }
        GetPosts()
    }, [])


    const isMobile = window.innerWidth < 768;

    return (
        <section
            onClick={() => {
                console.log(data?.posts);

            }}
            className="w-full"
            style={{
                backgroundColor: backgroundColor.value,
                padding: isMobile
                    ? mobilePadding.value || "0px 10px"
                    : desktopPadding.value || "0px 100px",
            }}
        >
            {/* Section Title */}
            <div className="mb-8 flex items-center gap-4 pt-[50px]">
                <h2
                    className="font-bold whitespace-nowrap"
                    style={{
                        color: contentColor.value,
                        fontSize: isMobile
                            ? mobileTitleSize.value || "26px"
                            : desktopTitleSize.value || "32px",
                    }}
                >
                    {title.value}
                </h2>

                <div
                    className="h-[3px] w-full"
                    style={{ backgroundColor: themeColor.value }}
                />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 gap-6 pb-[30px] lg:grid-cols-[0.9fr_1.1fr]">
                {/* Left Card */}
                <div
                    onClick={() => {
                        Navigate(`/${webname}/post/${data?.posts[0]?._id}`)
                    }}
                    className="overflow-hidden rounded-[14px]"
                    style={{ backgroundColor: backgroundColor.value }}
                >
                    <div className="h-[260px] overflow-hidden">
                        <img
                            src={data?.posts[0]?.banner}
                            alt="Featured"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="p-5">
                        <span
                            className="mb-3 block text-[12px] font-semibold"
                            style={{ color: themeColor.value }}
                        >
                            {data?.posts[0]?.category?.title}
                        </span>

                        <h3
                            className="line-clamp-2 text-[22px] font-bold leading-[1.3] md:text-[26px]"
                            style={{ color: contentColor.value }}
                        >
                            {data?.posts[0]?.title}
                        </h3>
                    </div>
                </div>

                {/* Right Cards */}
                <div className="flex flex-col gap-6">
                    {data?.posts?.slice(1, 3).map((item) => (
                        <div
                            key={item._id}
                            onClick={() => {
                                Navigate(`/${webname}/post/${item?._id}`)
                            }}
                            className="relative h-[210px] md:[190px] overflow-hidden rounded-[14px]"
                        >
                            <img
                                src={item?.banner}
                                alt="Business"
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/45" />

                            <div className="absolute bottom-0 left-0 p-6">
                                <button
                                    className="mb-3 rounded-full px-4 py-[5px] text-[11px] font-semibold text-white"
                                    style={{ backgroundColor: themeColor.value }}
                                >
                                    {item?.category?.title}
                                </button>

                                <h3 className="line-clamp-3 max-w-[420px] text-[22px] font-bold leading-[1.2] text-white md:text-[25px]">
                                    {item?.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;