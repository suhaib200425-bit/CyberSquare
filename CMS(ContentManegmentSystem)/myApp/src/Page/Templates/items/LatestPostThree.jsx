import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";

export default function LatestPostsThree({
  margin = { value: "" },
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  title = { value: "Latest Articles" },
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
      banner:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero...",
        navigate:true
    },
    {
      _id: 2,
      banner:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero...",
        navigate:true
    },
    {
      _id: 3,
      banner:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero...",
        navigate:true
    },
    {
      _id: 4,
      banner:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero...",
        navigate:true
    }
  ];

  const isMobile = window.innerWidth <= 768;

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

  return (
    <section
      style={{
        padding: isMobile
          ? mobilePadding.value || "0px 10px"
          : desktopPadding.value || "0px 100px",
        margin: margin.value || "0px"
      }}
      className="w-full bg-white px-4 py-8 md:px-10"
    >
      <h2 className="mb-6 pt-[30px] text-[28px] font-bold text-black">
        {title.value || "Latest Posts"}
      </h2>

      <div className="grid grid-cols-1 gap-6 pb-15 lg:grid-cols-[1.2fr_1.2fr_0.9fr]">
        {data?.posts.slice(0,2).map((post, index) => {
         
            return (
              <div
                key={post._id}
                className="overflow-hidden rounded-[8px] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)]"
              >
                <div className="h-[180px] w-full overflow-hidden">
                  <img
                    src={post?.banner}
                    alt={post?.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 text-[20px] font-bold leading-[1.25] text-black">
                    {post?.title}
                  </h3>

                  <p className="mb-5 line-clamp-2 text-[13px] leading-[1.6] text-[#777]">
                    {post?.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <button onClick={()=>{
                        if(post?.navigate) return
                        Navigate(`/${webname}/post/${post?._id}`)
                    }} className="m-0 rounded-full bg-black px-4 py-1 text-[12px] font-semibold text-white transition-all duration-300 hover:scale-105">
                      Read
                    </button>

                    <span className="text-[12px] text-[#777]">
                      {formatDate(post?.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            );
        })}

        <div className="flex flex-col gap-5">
          {data?.posts.slice(2,4).map((post, index) => {
            return (
                <div
                  key={post._id}
                  className="border-b border-[#e5e5e5] pb-4 last:border-none"
                >
                  <h4 className="mb-2 line-clamp-2 text-[17px] font-bold leading-[1.3] text-black">
                    {post?.title}
                  </h4>

                  <p className="mb-3 line-clamp-2 text-[13px] leading-[1.6] text-[#777]">
                    {post?.excerpt}
                  </p>

                  <button onClick={()=>{
                        if(post?.navigate) return
                        Navigate(`/${webname}/post/${post?._id}`)
                    }} className="m-0 rounded-full bg-black px-4 py-1 text-[13px] font-semibold text-white transition-all duration-300 hover:translate-x-1">
                    Read
                  </button>
                </div>
              );
            
          })}
        </div>
      </div>
    </section>
  );
}
