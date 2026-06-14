import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";

export default function SelectedPostListThree({
  desktopPadding = { value: '' },
  mobilePadding = { value: '' },
  backgroundColor = { value: '' },
  contentColor = { value: 'black' },
  themeColor = { value: 'red' },
  title = { value: 'Latest Posts' },
  titleWeight = { value: '600' },
  desktopTitleSize = { value: '32px' },
  mobileTitleSize = { value: '25px' },
  postSize ={type:"bool",value:true},
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
        },{
            _id: 5,
            banner: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
            title: "Ice sheets can melt much faster than we thought",
            category: { title: "SCIENCE" },
            date: "8 June 2026",
            navigate: true
        }
    ];

    const { webname } = useParams()
    const Navigate = useNavigate()
    const [data, setData] = useState(null)
    useEffect(() => {
        async function GetPosts() {
            Promise.all([
                axios.get(`${BASEURL}/api/post/${webname}${api.value}?limit=${postSize.value?8:5}`)
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
      className="mx-auto bg-white"
      style={{
        color: contentColor.value,
        backgroundColor: backgroundColor.value,
        padding: isMobile
          ? mobilePadding.value || '0px 10px'
          : desktopPadding.value || '0px 100px'
      }}
    >
      <h3
        className="pt-10 pb-4"
        style={{
          fontSize: isMobile
            ? mobileTitleSize.value
            : desktopTitleSize.value,
          fontWeight: titleWeight.value
        }}
      >
        {title.value}
      </h3>

      <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2 pb-10">
        {(data?.posts || []).slice(0,postSize.value?9:5).map((post, index) => {
          const isLarge = index === 1;

          return (
            <article
              key={post._id || index}
              onClick={()=>{
                if(post?.navigate) return
                Navigate(`/${webname}/post/${post._id}`)
              }}
              className={`relative group min-h-[190px] overflow-hidden rounded-[6px] bg-[#111] ${
                isLarge
                  ? 'md:col-span-2 md:row-span-2 md:min-h-[390px]'
                  : ''
              }`}
            >
              <img
                src={post.banner || post.image}
                alt={post.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,.74), rgba(0,0,0,.46), transparent)'
                }}
              />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white z-10">
                <span
                  className="mb-3 inline-flex text-[11px] font-bold italic"
                  style={{ color: themeColor.value }}
                >
                  {post.category?.title || post.category}
                </span>

                <h3
                  className={`max-w-[520px] font-extrabold leading-tight ${
                    isLarge
                      ? 'text-[24px] md:text-[28px]'
                      : 'text-[15px]'
                  }`}
                >
                  {post.title}
                </h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}