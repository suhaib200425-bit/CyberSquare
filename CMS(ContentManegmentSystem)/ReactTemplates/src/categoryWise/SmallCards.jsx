import React from "react";

export default function SmallNewsCards({
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
  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      title:
        "Rio de Janeiro: The 'Marvelous City' welcomes visitors",
      tag: "Business",
      time: "4 hours ago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      title:
        "ChatGPT: How generative AI is changing learning",
      tag: "Tech",
      time: "7 hours ago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=1200&auto=format&fit=crop",
      title:
        "Disney gives first teaser reveal for fans",
      tag: "Movies",
      time: "3 hours ago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
      title:
        "First edition Shakespeare text found after years",
      tag: "Culture",
      time: "2 days ago",
    },
  ];
    const isMobile = window.innerWidth < 768;

  return (
    <div style={{
      padding : isMobile?mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px"
    }} className="w-full bg-white p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {news.map((item, index) => (
          <div key={index} className="w-full">
            {/* Image */}
            <div className="w-full h-[85px] md:h-[160px] overflow-hidden rounded-[8px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="pt-2">
              <div className="flex items-center gap-2 ">
                <span className="w-[5px] h-[5px] rounded-full bg-[#d62828]"></span>

                <span className="text-[13px] text-[#8a8a8a]"
                style={{
                  color:themeColor.value
                }}>
                  {item.tag} 
                </span>
              </div>

              <h2 className="text-[13px] md:text-[19px]  font-semibold text-black line-clamp-2">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}