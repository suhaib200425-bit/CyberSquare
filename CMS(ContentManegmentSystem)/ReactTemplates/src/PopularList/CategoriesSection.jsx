import React, { useState } from "react";

function CategoriesSection({
  
  desktopPadding = { value: "red" },
  mobilePadding = { value: "" },
  backgroundColor = { value: "" },
  contentColor = { value: "" },
  themeColor = { value: "" },
  title = { value: "Categories" },
  desktopTitleSize = { value: "32" },
  mobileTitleSize = { value: "25" },
  menuColor = { value: "#6646"}
}) {
  const [hover,setHover]=useState("")
  const isMobile = window.innerWidth < 768;

  return (
    <section style={{
      backgroundColor: backgroundColor.value,
      padding: isMobile ? mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px"
    }}  className="w-full bg-white px-[20px] py-[60px] md:px-[100px]">
      {/* Header */}
      <div className="mb-8 flex gap-3 items-center justify-center pt-[30px]">
        <div className="flex items-center gap-4">
          <h2 className="text-[26px] font-bold text-black" style={{
            color:contentColor.value,
            fontSize:isMobile?desktopTitleSize.value:mobileTitleSize.value
          }}>
            {title.value}
          </h2>

        </div>
          <div style={{
            backgroundColor:themeColor.value
          }} className="h-[3px] mt-1 rounded=[10px] w-full bg-red-400"></div>

        <div className="hidden items-center gap-5 md:flex">
          {["Sports", "Travel", "Entertainment", "Health", "Finance"].map(
            (item, index) => (
              <button
              onMouseEnter={()=>{setHover(item)}}
              onMouseLeave={()=>{setHover("")}}
              style={{
                color: hover==item? contentColor.value : menuColor.value
              }}
                key={index}
                className="text-[13px] duration-400 font-medium text-[#666] hover:text-black"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      {/* Layout */}
      
      <div className="grid grid-cols-1  gap-6 lg:grid-cols-[0.7fr_1.3fr_0.7fr]">
        {/* Left */}
        <div className="flex flex-col gap-6">
          {[1, 2].map((item) => (
            <div key={item}>
              <div className="mb-1 h-[180px] overflow-hidden rounded-[14px]">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 style={{
                color :contentColor.value
              }} className="line-clamp-2 text-[22px] font-[500] leading-[1.1] text-black">
                An Open Fund Projects Debunking Vaccine Misinformation
              </h3>
            </div>
          ))}
        </div>

        {/* Center */}

        {
          !isMobile &&
           <div className="h-[90%] overflow-hidden rounded-[18px]">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        }

      
        {/* Right */}
        <div className="flex flex-col gap-6">
          {[1, 2].map((item) => (
            <div key={item}>
              <div className="mb-2 h-[180px] overflow-hidden rounded-[14px]">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 style={{
                color :contentColor.value
              }} className="line-clamp-2 text-[22px] font-[500] leading-[1.1] text-black">
                What We're Looking Forward To In 2021 For
              </h3>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;