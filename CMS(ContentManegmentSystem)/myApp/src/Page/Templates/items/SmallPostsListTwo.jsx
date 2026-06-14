import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";


export default function SmallPostsListTwo({
  desktopPadding = { value: '' },
  mobilePadding = { value: '' },
  backgroundColor = { value: '' },
  contentColor = { value: 'black' },
  themeColor = { value: 'red' },
  title = { value: 'Latest Posts' },
  desktopTitleSize = { value: '32px' },
  mobileTitleSize = { value: '25px' },
  imageHeight = { value: '160px' },
  postSize ={type:"bool",value:false},
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
                axios.get(`${BASEURL}/api/post/${webname}${api.value}?limit=${postSize.value?8:4}`)
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
      style={{
        padding: isMobile
          ? mobilePadding.value || '0px 10px'
          : desktopPadding.value || '0px 100px',
        backgroundColor: backgroundColor.value,
        color: contentColor.value
      }}
      className="w-full bg-white p-4"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {(data?.posts || []).slice(0,postSize.value?8:4).map((post, index) => (
          <div key={post._id || index} className="w-full">
            <div
              className="w-full overflow-hidden rounded-[8px]"
              style={{
                height: isMobile ? '85px' : imageHeight.value
              }}
            >
              <img
                src={post.banner || post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-[5px] h-[5px] rounded-full"
                  style={{ backgroundColor: themeColor.value }}
                />

                <span
                  className="text-[13px]"
                  style={{ color: themeColor.value }}
                >
                  {post.category?.title || post.category}
                </span>
              </div>

              <h2
                className="text-[13px] md:text-[19px] font-semibold line-clamp-2"
                style={{ color: contentColor.value }}
              >
                {post.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}