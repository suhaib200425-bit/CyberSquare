import React from "react";
import { Heart, MessageCircle, Flame } from "lucide-react";

export default function FeaturedPosts({
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  backgroundColor = { value: "" },
  contentColor = { value: "black" },
  contentSecColor = { value: "#2e2d2de0" },
  themeColor = { value: "#471449dd" },
  title = { value: "New Posts " },
  desktopTitleSize = { value: "30px" },
  mobileTitleSize = { value: "24px" },
  activeTextColor = { value: "white" }
}) {
  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
      category: "Trending",
      title:
        "Now: Social Media Buzz and Viral Sensations Capturing Global Attention",
      desc:
        "This year has seen abundant drama and controversy in the world of celebrities.",
      time: "8 Hours ago",
      author: "@dailyreport",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      category: "Travel",
      title:
        "The Ultimate Guide to Understanding Today's Biggest News Stories",
      desc:
        "This year has been whirlwind of drama and controversy in the world.",
      time: "2 Hours ago",
      author: "@travelzone",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
      category: "Lifestyle",
      title:
        "Lifestyle: What's Hot and What's Not in 2024's Fashion Scene",
      desc:
        "From unexpected breakthroughs to shocking revelations around the world.",
      time: "5 Minutes ago",
      author: "@lifestyle",
    },
  ];
  const isMobile = window.innerWidth < 768;

  return (
    <section style={{
      color:contentColor.value,
      backgroundColor:backgroundColor.value,
      padding: isMobile ? mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px"
    }} className="w-full bg-[#f4f5fb] px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-10">
        <h2 style={{
          fontSize: isMobile ? mobileTitleSize.value : desktopTitleSize.value
        }} className="text-[18px] font-bold ">
          {title.value}
        </h2>

        <button style={{
          color:themeColor.value
        }} className="text-[14px] font-semibold text-[#4f46e5] flex items-center gap-1">
          See All Trending
          <span>›</span>
        </button>
      </div>

      {/* Cards */}
      <div className="pb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((item, index) => (
          <div key={index} className="w-full">

            {/* Image */}
            <div className="w-full h-[220px] overflow-hidden rounded-[10px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 mt-3">
              <span className="w-[7px] h-[7px] rounded-full bg-[#ef4444]" style={{
                backgroundColor:themeColor.value
              }}></span>

              <span className="text-[11px] text-[#7b7b7b]" style={{
                color:contentSecColor.value
              }}>
                {item.category}
              </span>

              <span className="text-[#c5c5c5]">/</span>

              <span className="text-[11px] text-[#4f46e5] font-medium" style={{
                color:themeColor.value
              }}>
                {item.author}
              </span>
            </div>

            

            {/* Title */}
            <h3 className=" line-clamp-2 text-[20px] leading-[28px] font-bold mt-2 ">
              {item.title}
            </h3>

            {/* Description */}
            <p style={{
              color:contentSecColor.value
            }} className="line-clamp-23text-[13px] leading-[22px] text-[#7a7a7a] mt-3">
              {item.desc}
            </p>

            {/* Bottom Actions */}
            
          </div>
        ))}
      </div>
    </section>
  );
}