import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";

export default function SectionPostListTwo({
    margin = { value: "" },
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    title = { value: "Today’s Highlight" },
    api = {
        "label": "Posts List",
        "type": "option",
        "value": "/latest-posts",
        "options": [
            {
                "name": "Latest Posts",
                "api": "/latest-posts"
            }, {
                "name": "Popular Posts",
                "api": "/popular-posts"
            }
        ]
    }
}) {
    const posts = [
        {
            _id: 1,
            banner:
                "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
            title: "Top 20 Gaming Smartphone Under 50k Best Selling",
            navigate:true
        },
        {
            _id: 2,
            banner:
                "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1200&auto=format&fit=crop",
            title: "Top 20 Gaming Smartphone Under 50k Best Selling",
            navigate:true
        },
        {
            _id: 3,
            banner:
                "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
            title: "Top 20 Gaming Smartphone Under 50k Best Selling",
            navigate:true

        }
    ];

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
                axios.get(`${BASEURL}/api/post/${webname}${api.value}?limit=3`)
            ]).then(([response]) => {
                setData({ posts: [...response.data?.posts, ...posts] })
            }).catch(error => {
                setData({ posts: posts })
                console.log(error.response?.data || error.message);
            });
        }
        GetPosts()
    }, [webname, api.value])

    const isMobile = window.innerWidth < 768;

    return (
        <section
            style={{
                margin: margin.value,
                padding: isMobile
                    ? mobilePadding.value || "0px 10px"
                    : desktopPadding.value || "0px 100px"
            }}
            className="w-full bg-white px-4 py-8 md:px-8"
        >
            <h2 className="mb-[30px] pt-10 text-[30px] font-[600] text-black">
                {title.value || "Today’s Highlight"}
            </h2>

            <div className="flex flex-col gap-7 pb-10">
                {data?.posts?.slice(0,3).map((post) => (
                    <div
                        key={post?._id}
                        className="grid grid-cols-1 items-center gap-5 md:grid-cols-[0.8fr_1.2fr]"
                    >
                        <div className="h-[130px] w-full overflow-hidden rounded-[14px] md:h-[250px]">
                            <img
                                src={post?.banner}
                                alt={post?.title}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <h3 className="mb-3 line-clamp-2 max-w-[420px] text-[20px] leading-[1.15] text-black md:line-clamp-3 md:text-[32px] md:font-[500]">
                                {post?.title}
                            </h3>

                            <p className="mb-5 line-clamp-2 max-w-[520px] text-[14px] leading-[1.2] text-[#777] md:line-clamp-3 md:leading-[1.7]">
                                {post?.excerpt}
                            </p>

                            <div className="flex items-center gap-5">
                                <button onClick={()=>{
                                    if(post?.navigate) return
                                    Navigate(`/${webname}/post/${post._id}`)
                                }} className="rounded-full bg-black px-5 py-[4px] text-[12px] font-semibold text-white transition-all duration-300 hover:scale-105">
                                    Read
                                </button>

                                <span className="text-[12px] text-[#666]">
                                    {formatDate(post?.createdAt) || "20 JAN 2022" }
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

