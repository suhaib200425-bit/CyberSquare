import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";

function LatestPostOne({
    margin = { value: "" },
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    title = { value: "LATEST NEWS" },
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


    const isMobile = window.innerWidth <= 768;

    const latestNewsData = [
        {
            _id: 1,
            banner: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
            title: "Ice sheets can melt much faster than we thought",
            category: { title: "SCIENCE" },
            date: "8 June 2026"
        },
        {
            _id: 2,
            banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
            title: "Trouble sleeping? This moon-shaped bedside light might help",
            category: { title: "TECH" },
            date: "12 June 2026"
        },
        {
            _id: 3,
            banner: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?q=80&w=1200&auto=format&fit=crop",
            title: "A simple background photo is forcing Android users to reset phones",
            category: { title: "MOBILE" },
            date: "18 June 2026"
        },
        {
            _id: 4,
            banner: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
            title: "You should blur the faces in your protest photos",
            category: { title: "NEWS" },
            date: "22 June 2026"
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
                axios.get(`${BASEURL}/api/post/${webname}${api.value}?limit=5`)
            ]).then(([response]) => {
                setData({ posts: [...response.data?.posts, ...latestNewsData] })
            }).catch(error => {
                setData({ posts: latestNewsData })
                console.log(error.response?.data || error.message);
            });
        }
        GetPosts()
    }, [webname, api.value])

    return (
        <section
            style={{
                padding: isMobile
                    ? mobilePadding.value || "0px 10px"
                    : desktopPadding.value || "0px 100px",
                margin: margin.value || "0px"
            }}
            className="w-full bg-white font-sans"
        >
            <div className="flex items-center gap-5 pb-4 pt-10">
                <h2 className="text-[28px] font-bold text-black tracking-wide whitespace-nowrap">
                    {title.value}
                </h2>
                <div className="h-[1px] w-full bg-gray-300"></div>
            </div>

            <div className="flex gap-10 max-lg:flex-col pb-12">
                <div className="w-[55%] max-lg:w-full">
                    <img
                        src={data?.posts[0]?.banner}
                        className="w-full h-[360px] object-cover rounded"
                        alt=""
                    />

                    <div className="mt-2">
                        <span className="text-[11px] font-bold text-[#ff5a3c] tracking-wide">
                            {data?.posts[0]?.category?.title}
                        </span>

                        <h3 className="mt-1 text-[30px] leading-[1.05] font-bold text-black max-md:text-[24px]">
                            {data?.posts[0]?.title}
                        </h3>

                        <p className="mt-1 text-[14px] text-gray-500">
                            {formatDate(data?.posts[0]?.createdAt)}
                        </p>
                    </div>
                </div>

                <div className="w-[45%] flex flex-col gap-4 max-lg:w-full">
                    {data?.posts.slice(1, 4).map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center gap-6 border-b border-gray-200 pb-5 max-lg:flex-col max-lg:items-start"
                        >
                            <div className="flex-1">
                                <span className="text-[11px] font-bold text-[#ff5a3c] tracking-wide">
                                    {item?.category?.title}
                                </span>

                                <h4 className="mt-2 text-[18px] font-semibold leading-[1.5] text-black">
                                    {item?.title}
                                </h4>

                                <p className="mt-1 text-[14px] text-gray-500">
                                    {formatDate(item?.createdAt)}
                                </p>
                            </div>

                            <img
                                src={item?.banner}
                                className="w-[130px] h-[90px] object-cover rounded max-lg:w-full max-lg:h-[220px]"
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



export default LatestPostOne