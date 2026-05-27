import React from "react";
// import "./LatestPostThree.css";

function LatestPostThree({
  margin = { value: "" },
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  title = { value: "Latest Articles" }
}) {
  const isMobile = window.innerWidth <= 768;

  return (
    <section
      className="w-full bg-white font-sans"
      style={{
        padding: isMobile
          ? mobilePadding.value || "0px 10px"
          : desktopPadding.value || "0px 100px",
        margin: margin.value || "0px"
      }}
    >
      {/* TITLE */}
      <h1 className="text-center pt-10 pb-5 text-[25px] font-semibold">
        {title.value}
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-[15px] max-lg:grid-cols-1">

        {/* LEFT BIG CARD */}
        <div className="relative h-[500px] overflow-hidden rounded-[10px] cursor-pointer group">
          <img
            src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover transition duration-200 group-hover:scale-110"
            alt=""
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          <div className="absolute left-[30px] bottom-[28px] z-10 text-white">
            <p className="text-[13px]">March 22, 2026</p>

            <span className="mt-[2px] inline-block bg-black px-[10px] py-[2px] rounded text-[13px] text-[#a8a699]">
              category
            </span>

            <h2 className="mt-[10px] text-[42px] font-bold leading-[1.1] max-lg:text-[26px] line-clamp-2">
              Apple Watch
            </h2>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-[18px]">

          {/* TOP CARD */}
          <div className="relative h-[250px] overflow-hidden rounded-[10px] cursor-pointer group">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover transition duration-200 group-hover:scale-110"
              alt=""
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            <div className="absolute left-[25px] bottom-[22px] text-white z-10">
              <p className="text-[13px]">March 22, 2026</p>

              <span className="mt-[2px] inline-block bg-black px-[10px] py-[2px] rounded text-[13px] text-[#a8a699]">
                category
              </span>

              <h3 className="mt-[10px] text-[34px] font-bold leading-[1.2] line-clamp-1 max-lg:text-[26px]">
                Standing among the flowers
              </h3>
            </div>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-2 gap-[18px] max-lg:grid-cols-1">

            {/* CARD 1 */}
            <div className="relative h-[230px] overflow-hidden rounded-[40px] cursor-pointer group">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-full object-cover transition duration-200 group-hover:scale-110"
                alt=""
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute left-[18px] bottom-[18px] text-white z-10">
                <p className="text-[13px]">March 22, 2026</p>

                <span className="mt-[2px] inline-block bg-black px-[10px] py-[2px] rounded text-[13px] text-[#a8a699]">
                  category
                </span>

                <h4 className="mt-[8px] text-[22px] font-bold leading-[1.3] line-clamp-2">
                  How to Run Faster
                </h4>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative h-[230px] overflow-hidden rounded-[40px] cursor-pointer group">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-full object-cover transition duration-200 group-hover:scale-110"
                alt=""
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute left-[18px] bottom-[18px] text-white z-10">
                <p className="text-[13px]">March 22, 2026</p>

                <span className="mt-[2px] inline-block bg-black px-[10px] py-[2px] rounded text-[13px] text-[#a8a699]">
                  category
                </span>

                <h4 className="mt-[8px] text-[22px] font-bold leading-[1.3] line-clamp-2">
                  Preparing Healthy Fruit Smoothie
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestPostThree;