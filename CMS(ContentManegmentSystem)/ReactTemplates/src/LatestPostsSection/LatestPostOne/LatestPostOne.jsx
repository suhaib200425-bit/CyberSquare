import React from "react";
// import "./LatestNews.css";



function LatestPostOne({
  margin = { value: "" },
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  title = { value: "LATEST NEWS" }
}) {
  const isMobile = window.innerWidth <= 768;

  const latestNewsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
      title: "Ice sheets can melt much faster than we thought",
      category: "SCIENCE",
      date: "8 June 2026",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      title: "Trouble sleeping? This moon-shaped bedside light might help",
      category: "TECH",
      date: "12 June 2026",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
      title: "A simple background photo is forcing Android users to reset phones",
      category: "MOBILE",
      date: "18 June 2026",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      title: "You should blur the faces in your protest photos",
      category: "NEWS",
      date: "22 June 2026",
    },
  ];

  return (
    <section
      style={{
        padding: isMobile
          ? mobilePadding.value || "0px 10px"
          : desktopPadding.value || "0px 100px",
        margin: margin.value || "0px"
      }}
      className="w-full bg-white font-sans"
    >
      {/* HEADER */}
      <div className="flex items-center gap-5 pb-4 pt-10">
        <h2 className="text-[28px] font-bold text-black tracking-wide whitespace-nowrap">
          {title.value}
        </h2>
        <div className="h-[1px] w-full bg-gray-300"></div>
      </div>

      {/* CONTAINER */}
      <div className="flex gap-10 max-lg:flex-col pb-12">
        
        {/* LEFT BIG CARD */}
        <div className="w-[55%] max-lg:w-full">
          <img
            src={latestNewsData[0].image}
            className="w-full h-[360px] object-cover rounded"
            alt=""
          />

          <div className="mt-2">
            <span className="text-[11px] font-bold text-[#ff5a3c] tracking-wide">
              {latestNewsData[0].category}
            </span>

            <h3 className="mt-1 text-[30px] leading-[1.05] font-bold text-black max-md:text-[24px]">
              {latestNewsData[0].title}
            </h3>

            <p className="mt-1 text-[14px] text-gray-500">
              {latestNewsData[0].date}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[45%] flex flex-col gap-4 max-lg:w-full">
          {latestNewsData.slice(1).map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-6 border-b border-gray-200 pb-5 max-lg:flex-col max-lg:items-start"
            >
              <div className="flex-1">
                <span className="text-[11px] font-bold text-[#ff5a3c] tracking-wide">
                  {item.category}
                </span>

                <h4 className="mt-2 text-[18px] font-semibold leading-[1.5] text-black">
                  {item.title}
                </h4>

                <p className="mt-1 text-[14px] text-gray-500">
                  {item.date}
                </p>
              </div>

              <img
                src={item.image}
                className="w-[130px] h-[90px] object-cover rounded max-lg:w-full max-lg:h-[220px]"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestPostOne;