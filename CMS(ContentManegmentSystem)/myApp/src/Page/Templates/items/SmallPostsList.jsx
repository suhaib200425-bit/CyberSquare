import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";


export default function SmallPostsList({
  desktopPadding = { value: '' },
  mobilePadding = { value: '' },
  backgroundColor = { value: '' },
  contentColor = { value: 'black' },
  themeColor = { value: 'red' },
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
            banner: "https://i.pinimg.com/1200x/c2/5b/d9/c25bd9aae02b9edfb792d9319f9b40cd.jpg",
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


  const isMobile = window.innerWidth < 768;

  return (
    <div
      className="my-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
      style={{
        padding: isMobile
          ? mobilePadding.value || '0px 10px'
          : desktopPadding.value || '0px 100px',
        backgroundColor: backgroundColor.value
      }}
    >
      {(data?.posts || []).slice(0,4).map((post, index) => (
        <article
          key={index}
          className="grid grid-cols-[72px_1fr] items-center gap-3"
        >
          <img
            src={post?.banner}
            alt={post?.title}
            className="h-[58px] w-[72px] rounded-[5px] object-cover"
          />

          <div>
            <p
              className="text-[11px] font-bold italic"
              style={{ color: themeColor.value }}
            >
              {post?.category?.title}
            </p>

            <h4
              className="mt-1 text-[13px] font-bold leading-tight line-clamp-2"
              style={{ color: contentColor.value }}
            >
              {post?.title}
            </h4>
          </div>
        </article>
      ))}
    </div>
  );
}