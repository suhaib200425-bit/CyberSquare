import React, { useState } from "react";

export default function NewStoriesPosts({
    
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    backgroundColor = { value: "" },
    contentColor = { value: "black" },
    themeColor = { value: "red" },
    title = { value: "New Stories Posts" },
    desktopTitleSize = { value: "32px" },
    mobileTitleSize = { value: "25px" },
    activeTextColor ={value:"white"}
}) {
  const categories = [
    "All",
    "Sports",
    "Technology",
    "Politics",
    "Business",
    "Education",
  ];

  const [activeCategory,setActiveCategory] = useState("All")
  const [hover,setHover] = useState(null)

  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      title:
        "Unbelievable True Stories: Stranger Than Fiction Viral News from World",
      category: "Technology",
      time: "4 Days ago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
      title:
        "Insider Secrets: Behind the Scenes of Major News Events Unveiled",
      category: "Technology",
      time: "8 Days ago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
      title:
        "Economic Shifts: How Major Financial News is Influencing Global Markets",
      category: "Technology",
      time: "3 Days ago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      title:
        "Cultural Phenomena: Exploring the Trends That Define Our Current Era",
      category: "Globalimpact",
      time: "22 Days ago",
    },
  ];
    const isMobile = window.innerWidth < 768;

  return (
    <section style={{
        padding:isMobile?mobilePadding.value || "0px 10px":desktopPadding.value || "0px 100px"
    }} className="w-full bg-white px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 style={{
            fontSize:isMobile ? mobileTitleSize.value : desktopTitleSize.value
        }} className="text-[32px] leading-none font-bold text-[#111]">
          {title.value}
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 text-black">
          {categories.map((item, index) => (
            <button
            onClick={()=>setActiveCategory(item)}
            style={{
                color:activeCategory==item && activeTextColor.value,
                backgroundColor:activeCategory==item && themeColor.value
            }}
              key={index}
              className={`px-2.5 py-1 rounded-[15px] border text-[13px] font-medium transition-all`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        {posts.map((item, index) => (
          <div key={index} className="w-full">
            {/* Image */}
            <div className="w-full h-[220px] overflow-hidden rounded-[10px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-500"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center flex-wrap gap-2 mt-4">
             

              <span className="text-[#d1d5db]">/</span>

              <span style={{
                color:themeColor.value
              }} className="text-[11px] font-medium text-[#4f46e5]">
                {item.category}
              </span>
            </div>

            {/* Title */}
            <h3 className=" text-[24px]  font-semibold text-[#1a1a1a] mt-4 line-clamp-3">
              {item.title}
            </h3>

            {/* Button */}
            {
                !isMobile && <button
            onMouseEnter={()=>{
                setHover(index)
            }}
            onMouseLeave={()=>{
                setHover(null)
            }}
            style={{
                color:hover==index ? backgroundColor.value :themeColor.value,
                borderColor:hover!=index && themeColor.value,
                backgroundColor:hover==index && themeColor.value
            }} className="mt-3 px-6 py-2 rounded-full border border-[#dbe2ff] text-[#4f46e5] text-[13px] font-semibold flex items-center gap-2 hover:bg-[#4f46e5] hover:text-white transition-all">
              Read More
              <span>→</span>
            </button>
            }
          </div>
        ))}
      </div>
    </section>
  );
}