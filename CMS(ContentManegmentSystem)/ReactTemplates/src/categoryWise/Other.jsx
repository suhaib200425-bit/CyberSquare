import React from "react";

export default function MovieNewsCard({
  
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    backgroundColor = { value: "" },
    contentColor = { value: "black" },
    themeColor = { value: "red" },
    title = { value: "Latest Posts" },
    desktopTitleSize = { value: "32px" },
    mobileTitleSize = { value: "25px" },
    imageHeight = {value:"300px"},
}) {
    const isMobile = window.innerWidth < 768;

  return (
    <div style={{
      padding:isMobile?mobilePadding.value || "0px 10px" :desktopPadding.value || "0px 100px"
    }} className="w-full max-w-full bg-white p-4">
      <div className="flex flex-col md:flex-row gap-5 items-start">
        
        {/* Left Image */}
        <div
        style={{
          height:imageHeight.value
        }} className="w-full md:w-1/3 h-[300px]  overflow-hidden rounded-[8px] shrink-0">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
            alt="Movie Poster"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 pt-1">
          
          {/* Top Meta */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-[6px] h-[6px] rounded-full bg-[#d62828]"></span>

            <span className="text-[11px] text-[#8a8a8a]">
              Netflix • 2 hours ago
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[32px] leading-[38px] w-[90%] font-bold text-[#222] line-clamp-2">
            Where To Watch ‘John Wick: Chapter 4’
          </h2>

          {/* Description */}
          <p className="text-[13px] leading-[20px]  w-[80%]  text-[#6d6d6d] mt-3 line-clamp-3">
            There’s been official announcement regarding John Wick:
            Chapter 4 streaming release. Find where you can watch
            the latest action blockbuster online.
          </p>

          {/* Bottom */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-[12px] font-medium text-[#d62828]">
              Movies
            </span>

            <span className="text-[12px] text-[#9b9b9b]">
              • 4 min read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}