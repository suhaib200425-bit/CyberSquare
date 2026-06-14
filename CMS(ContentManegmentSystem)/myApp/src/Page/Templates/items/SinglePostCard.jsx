import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";


export default function SinglePostCard({
    desktopPadding = { value: '' },
    mobilePadding = { value: '' },
    backgroundColor = { value: '' },
    contentColor = { value: 'black' },
    themeColor = { value: 'red' },
    title = { value: 'Latest Posts' },
    desktopTitleSize = { value: '32px' },
    mobileTitleSize = { value: '25px' },
    imageHeight = { value: '250px' },
    api = {
        "label": "Posts List",
        "type": "option",
        "value": "/single-latest-post",
        "options": [
            {
                "name": "Latest Posts",
                "api": "/single-latest-post"
            }, {
                "name": "Popular Posts",
                "api": "/single-popular-post"
            }
        ]
    }
}) {
    const isMobile = window.innerWidth < 768;
    const post = {
        _id: 1,
        banner:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
        title: "Top 20 Gaming Smartphone Under 50k Best Selling",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero...",
        navigate: true
    };
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
                axios.get(`${BASEURL}/api/post/${webname}${api.value}`)
            ]).then(([response]) => {
                console.log('SinglePostCard');
                console.log(response.data);
                setData({post: response.data?.post || post})
            }).catch(error => {
                setData({ post: post })
                console.log(error.response?.data || error.message);
            });
        }
        GetPosts()
    }, [webname, api.value])

    return (
        <div
            style={{
                padding: isMobile
                    ? mobilePadding.value || '0px 10px'
                    : desktopPadding.value || '0px 100px',
                backgroundColor: backgroundColor.value,
                color: contentColor.value
            }}
            className="w-full max-w-full bg-white p-4"
        >
            <div className="flex flex-col md:flex-row gap-5 items-start">
                <div
                    style={{ height: imageHeight.value }}
                    className="w-full md:w-1/3 overflow-hidden rounded-[8px] shrink-0"
                >
                    <img
                        src={data?.post?.banner}
                        alt={data?.post?.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-3">
                        <span
                            className="w-[6px] h-[6px] rounded-full"
                            style={{ backgroundColor: themeColor.value }}
                        />

                        <span
                            className="text-[11px]"
                            style={{ color: themeColor.value }}
                        >
                            {data?.post?.category?.title}
                        </span>
                    </div>

                    <h2
                        className="text-[32px] leading-[38px] w-[90%] font-bold line-clamp-3"
                        style={{ color: contentColor.value }}
                    >
                        {data?.post?.title}
                    </h2>

                    <p
                        className="text-[13px] leading-[20px] w-[80%] mt-3 line-clamp-3"
                        style={{ color: '#6d6d6d' }}
                    >
                        {data?.post?.description ||
                            data?.post?.excerpt }
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                        <span
                            className="text-[12px] font-medium"
                            style={{ color: themeColor.value }}
                        >
                            {data?.post.category?.title}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}