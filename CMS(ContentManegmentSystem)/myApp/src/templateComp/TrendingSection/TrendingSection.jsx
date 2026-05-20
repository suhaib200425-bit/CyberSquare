import React, { useEffect, useState } from "react";
import { BASEURL } from "../../assets/assets";
import axios from "axios";

export default function TrendingNewsSection({
  paddingDesktop = { value: "" },
  paddingMobile = { value: "" },
  margin = { value: "" }
}) {

  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [active, setActive] = useState("All")
  useEffect(() => {
    async function getAllPageData() {
      try {

        const [postResponse, categoryResponse] = await Promise.all([
          axios.get(`${BASEURL}/api/post`),
          axios.get(`${BASEURL}/api/category`)
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
  }, [])
  function dateFormate(date) {

    const formatted = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return formatted;
  }

  const isMobile = window.innerWidth < 768;
  return (
    <section className="w-full bg-white py-10 px-4 md:px-10 lg:px-16"
      style={{
        margin: margin.value,
        padding: isMobile ? paddingMobile.value || "0px 10px" : paddingDesktop.value || "0px 100px",

      }}>

      {/* TOP */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

        <div className="flex items-center gap-4 w-full">

          <h2 className="text-[28px] font-bold whitespace-nowrap">
            Trending {active}
          </h2>

          <div className="w-full h-[2px] bg-red-400"></div>

        </div>

        {/* MENU */}

        <div className="flex  gap-5 text-[14px] text-gray-500 font-medium">
          <button className=" font-semibold" 
          style={{
            color:active=="All"&&"black"
          }}
          onClick={()=>{
            setActive(prev=>{
              return "All"
            })
          }}>
            All
          </button>
          {
            categories?.slice(0, 7).map(category => <button
             style={{
            color:active==category.title &&"black"
          }}
            onClick={()=>{
            setActive(prev=>{
              if(prev==category.title) return "All"
              return category.title
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
        posts ?
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LEFT BIG CARD */}

            <div
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

                  <span className="bg-red-500 px-3 py-1 rounded-full font-medium">
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

                      <span className="text-red-500 font-semibold">
                        {item?.category?.title}
                      </span>

                      <span>
                        📅 {dateFormate(item.createdAt)}
                      </span>

                    </div>

                    <h3 className="text-[22px] leading-[1.3] font-bold text-black group-hover:text-red-500 transition line-clamp-2">
                      {item?.title}
                    </h3>

                  </div>

                </div>

              ))}

            </div>

          </div>
          : <div className="text-[30px]">LOADING......</div>
      }

    </section>
  );
}