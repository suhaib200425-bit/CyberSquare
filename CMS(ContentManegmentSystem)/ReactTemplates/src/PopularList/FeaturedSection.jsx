import React from "react";

function FeaturedSection({
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  backgroundColor = { value: "" },
  contentColor = { value: "" },
  themeColor = { value: "" },
  title = { value: "Featured" },
  desktopTitleSize = { value: "32" },
  mobileTitleSize = { value: "25" },
}) {
  const isMobile = window.innerWidth < 768;

  return (
    <section style={{
      backgroundColor: backgroundColor.value,
      padding: isMobile ? mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px"
    }} className="w-full bg-[#fafafa] ">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4 pt-[50px]">
        <h2 className="text-[32px] font-bold text-black" style={{
          color: contentColor.value,
          fontSize: isMobile ? mobileTitleSize.value || "26px" : desktopTitleSize.value || "32px"

        }}>
          {title.value}
        </h2>

        <div className="h-[3px] w-full bg-red-400" style={{
          backgroundColor: themeColor.value
        }}></div>
      </div>

      <div className="pb-[30px] grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left */}
        <div className="overflow-hidden rounded-[14px] bg-white" style={{
          backgroundColor: backgroundColor.value,

        }}>
          <div className="h-[260px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5">
            <span style={{
              color: themeColor.value
            }} className="mb-3 block text-[12px] font-semibold text-red-500">
              Food & Health
            </span>

            <h3 style={{
              color: contentColor.value

            }} className="text-[24px] md:text-[28px] font-bold leading-[1.3] text-black">
              Half A Million Tons Of Recycling Dumped Or Incinerated Every Year,
              Shock Stats Show
            </h3>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="relative h-[190px] overflow-hidden rounded-[14px]"
            >
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/45"></div>

              <div className="absolute bottom-0 left-0 p-6 ">
                <button style={{
                  // color:backgroundColor.value,
                  backgroundColor: themeColor.value
                }} className="mb-3 fw-[600] rounded-full bg-red-500 px-4 py-[5px] text-[11px] font-semibold text-white">
                  Business
                </button>

                <h3 className="max-w-[420px] text-[23px] md:text-[28px] font-bold leading-[1.2] text-white">
                  Climate Changes In The Recent Prospective Of
                  The Global Warming
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;