import React from "react";
import "./LatestPostTwo.css";

function LatestPostTwo({
  margin = { value: "" },
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  title = { value: "LATEST ARTICLES" }
}) {
  const isMobile = window.innerWidth <= 768;

  return (
    <section
      className="w-full bg-white"
      style={{
        padding: isMobile
          ? mobilePadding.value || "0px 10px"
          : desktopPadding.value || "0px 100px",
        margin: margin.value || "0px"
      }}
    >
      {/* HEADER */}
      <div className="border-b-2 border-gray-400 h-[80px] flex items-end pb-2 mb-3 pt-10">
        <h2 className="text-[30px] font-bold text-[#111111]">
          {title.value}
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-[1.2fr_0.9fr] gap-5 pb-10 max-lg:grid-cols-1">

        {/* LEFT MAIN CARD */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-[420px] object-cover rounded-[6px] max-lg:h-[220px]"
            alt=""
          />

          <div className="mt-[15px]">
            <h3 className="text-[34px] line-clamp-2 leading-[1.05] font-bold text-[#111111] max-md:text-[28px]">
              Sustainability in Business: Balancing Profit and Environmental Responsibility
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-[10px] max-lg:grid-cols-1">

          {[
            {
              image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
              title:
                "Scientists Develop Artificial Leaf That Turns Carbon Dioxide Into Fuel",
              date: "May 14, 2026",
            },
            {
              image:
                "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1200&auto=format&fit=crop",
              title:
                "Scientists Discover New Species of Dinosaur in Argentina",
              date: "May 18, 2026",
            },
            {
              image:
                "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
              title:
                "New Study Shows Regular Exercise Can Improve Health",
              date: "May 22, 2026",
            },
            {
              image:
                "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
              title:
                "Cristiano Scores Twice In Manchester United Return",
              date: "May 29, 2026",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-[5px]">

              <img
                src={item.image}
                className="w-full h-[150px] object-cover rounded-[6px] max-lg:h-[120px]"
                alt=""
              />

              <div className="flex-1">
                <p className="text-[12px] text-[#9a9a9a]">
                  {item.date}
                </p>

                <h4 className="line-clamp-2 mt-[3px] text-[20px] leading-[1.05] font-semibold text-[#111111] max-md:text-[18px]">
                  {item.title}
                </h4>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
export default LatestPostTwo;