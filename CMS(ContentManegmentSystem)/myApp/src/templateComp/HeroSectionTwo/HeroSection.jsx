import React from "react";

export default function HeroSectionTwo({
  titleOne = { value: "Title One" },
  titleTwo = { value: "Title Two" },
  titleSizeDesktop = { value: "72px" },
  titleSizeMobile = { value: "45px" },
  titleOneColor = { value: "#102b5c" },
  titleTwoColor = { value: "white" },
  subTitle = { value: "Sub Title." },
  subTitleSize = { value: "17px" },
  subTitleColor = { value: "grey" },
  gradientColors = {
    "type": "array",
    "value": [
      "#ff416c",
      "#ff4b2b",
      "#ffcc70"
    ]
  },
  textAline = { value: "center" },
  paddingDesktop = { value: "0px" },
  paddingMobile = { value: "" }

}) {

  const isMobile = window.innerWidth < 768;
  return (
    <section className="w-full min-h-screen relative overflow-hidden flex justify-center items-center px-5 py-10 bg-[linear-gradient(90deg,#f5c244_0%,#f7cf74_45%,#f4b58c_100%)]" style={{
      background: `linear-gradient(90deg,
  ${gradientColors.value[0]}  0%, 
  ${gradientColors.value[1]} 45%, 
  ${gradientColors.value[2]} 100%)`,
      padding: isMobile ? paddingMobile.value || "0px 10px" : paddingDesktop.value || "0px 100px",
    }}>
      {/* TOP BAR */}

      {/* <div className="absolute top-0 left-0 w-full bg-[#d89705] text-center text-white py-3 text-[12px] font-bold tracking-[2px] z-[5]">
        VERSION 4 — FRIENDLY & ILLUSTRATED
      </div> */}

      {/* DOT BACKGROUND */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      ></div>

      {/* SHAPES */}

      <div className="absolute w-[160px] h-[160px] rounded-full bg-white/20 left-[-60px] top-[200px]"></div>

      <div className="absolute w-[280px] h-[280px] rounded-[40px] bg-[#ee8f66]/70 top-[90px] right-[120px] rotate-[25deg] opacity-25 max-md:w-[180px] max-md:h-[180px] max-md:right-[-40px]" style={{ background: gradientColors.value[0] }}></div>

      <div className="absolute opacity-50 w-[220px] h-[220px] rounded-[30px] bg-[#d79a2e]/50 right-[180px] bottom-[-70px] -rotate-[15deg] max-md:w-[150px] max-md:h-[150px]" style={{ background: gradientColors.value[2] }}></div>

      <div className="absolute w-[90px] h-[90px] rounded-[20px] bg-white/20 bottom-[120px] left-[320px] rotate-[20deg]"></div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-[760px] text-center ">

        {/* BADGE */}

        {/* <div className="inline-block bg-white px-6 py-3 rounded-full text-[14px] mb-8 shadow-[0_8px_20px_rgba(0,0,0,0.08)] max-[500px]:text-[12px]">
          🎓 Online · Self-Paced · $220
        </div> */}

        {/* TITLE */}

        <h1
          style={{
            textAlign: textAline.value,
            fontSize: isMobile ? titleSizeMobile.value : titleSizeDesktop.value,
            color: titleOneColor.value
          }}
          dangerouslySetInnerHTML={{ __html: titleOne.value || "Our Program is <br /> designed to help <br />" }}
          className="text-[72px] leading-[1.08] text-[#102b5c] font-black mb-6 max-md:text-[48px] max-[500px]:text-[38px]">

        </h1>

        <h1
          style={{
            textAlign: textAline.value,
            fontSize: isMobile ? titleSizeMobile.value : titleSizeDesktop.value,
            color: titleTwoColor.value
          }}
          className="font-medium text-[72px] leading-[1.08]  max-[500px]:text-[38px]  max-md:text-[48px] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          dangerouslySetInnerHTML={{ __html: titleTwo.value || "Change Starts <br /> With You"}}>

        </h1>

        {/* DESCRIPTION */}

        <p
          style={{
            textAlign: textAline.value,
            fontSize: subTitleSize.value,
            color: subTitleColor.value
          }}
          dangerouslySetInnerHTML={{ __html: subTitle.value || "An online education program for those charged with domestic violence offences — built by lawyers, designed for real and lasting change." }}
          className="max-w-[620px] mx-auto text-[18px] leading-[1.8] text-[#474747] max-md:text-[16px]">

        </p>

        {/* BUTTONS */}

        {/* <div className="flex justify-center items-center gap-5 flex-wrap mt-10">

          <button className="px-9 py-[18px] border-none rounded-full bg-[#102b5c] text-white text-[16px] font-bold cursor-pointer transition duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 max-[500px]:w-full">
            Enrol Now — $220 →
          </button>

          <button className="px-9 py-[18px] border-none rounded-full bg-white text-[#333] text-[16px] font-bold cursor-pointer transition duration-300 hover:-translate-y-1 max-[500px]:w-full">
            Learn More
          </button>

        </div> */}

        {/* FEATURES */}

        {/* <div className="mt-14 flex justify-center items-center gap-[18px] flex-wrap">

          <div className="bg-white px-6 py-4 rounded-full text-[14px] font-semibold shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
            📅 Available 7 days a week
          </div>

          <div className="bg-white px-6 py-4 rounded-full text-[14px] font-semibold shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
            ⚖️ Built by lawyers
          </div>

          <div className="bg-white px-6 py-4 rounded-full text-[14px] font-semibold shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
            📜 Certificate included
          </div>

          <div className="bg-white px-6 py-4 rounded-full text-[14px] font-semibold shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
            💻 Complete at your own pace
          </div>

        </div> */}

      </div>
    </section>
  );
}