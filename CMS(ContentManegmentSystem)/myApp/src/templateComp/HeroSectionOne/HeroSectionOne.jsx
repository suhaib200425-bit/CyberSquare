import React from "react";
import { useNavigate } from "react-router-dom";

export default function ModernHero({
    backgroundColor = { value: "rgb(221, 228, 204)" },
    title = { value: "Hero Title" },
    titleColor = { value: "" },
    titleSizeDesktop = { value: "30px" },
    titleSizeMobile = { value: "25px" },
    subTitle = { value: "Hero SubTitle" },
    subTitleColor = { value: "" },
    btnText = { value: "CLICK ME" },
    btnRoute = { value: "" },
    btnBackgroundColor = { value: "black" },
    btnColor = { value: "white" },
    heroImage = { value: "" },
    heroImageRadius = { value: "5px" },
    padding = { value: "10px" },
    mobilePadding = { value: "" }
}) {
    const Navigate = useNavigate()

    const isMobile = window.innerWidth < 768;
    return (
        <section style={{
            background: backgroundColor.value,
            padding: isMobile ? mobilePadding.value || "0px 10px" : padding.value || "0px 100px",
        }} className="w-full min-h-screen bg-[#eef2f7] flex justify-center items-center  overflow-hidden relative font-sans">

            {/* Blur Background */}
            <div className="w-[300px] h-[300px] bg-white blur-[120px] absolute top-[-100px] left-[-50px]"></div>

            <div className="w-[300px] h-[300px] bg-[#d8ebff] blur-[120px] absolute bottom-[-100px] right-[-50px]"></div>

            {/* Floating Balls */}
            <div className="absolute left-[6%] top-[45%] w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[#8fd3ff] to-white shadow-2xl"></div>

            <div className="absolute right-[4%] bottom-[10%] w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#9dd5ff] to-white shadow-2xl"></div>

            {/* Main Card */}
            <div className="relative z-10 w-full h-full  //bg-white/70 //backdrop-blur-xl rounded-[0px] //p-8 //shadow-[0px_20px_60px_rgba(0,0,0,0.08)]">

                {/* Navbar */}


                {/* Hero Content */}
                <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}
                    <div>

                        <span className="text-[13px] tracking-[3px] text-slate-500 uppercase">
                            Vector Base
                        </span>

                        <h1
                        style={{
                            color:titleColor.value,
                            fontSize:isMobile?titleSizeMobile.value:titleSizeDesktop.value

                        }}
                        className="text-[30px] sm:text-[55px] lg:text-[72px] leading-[1.1] font-bold text-slate-900 mt-5 mb-6"
                            dangerouslySetInnerHTML={{ __html: title.value }}
                        >

                        </h1>

                        <p className="text-slate-500 text-[18px] leading-[1.9] max-w-[520px] mb-9"
                            dangerouslySetInnerHTML={{ __html: subTitle.value }}
                            style={{color:subTitleColor.value}}>

                        </p>

                        {/* Search */}


                        {/* Buttons */}
                        <div className="flex items-center gap-5 flex-wrap">

                            <button
                                style={{ backgroundColor: btnBackgroundColor.value, color: btnColor.value }}
                                onClick={() => {
                                    if (btnRoute) Navigate(btnRoute)
                                }} className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:scale-105 transition">
                                {btnText.value}
                            </button>

                            <div className="flex items-center gap-3">

                                <div className="w-[45px] h-[45px] rounded-full bg-white shadow-md flex justify-center items-center cursor-pointer hover:-translate-y-1 transition">
                                    ♡
                                </div>

                                <div className="w-[45px] h-[45px] rounded-full bg-white shadow-md flex justify-center items-center cursor-pointer hover:-translate-y-1 transition">
                                    ✉
                                </div>

                                <div className="w-[45px] h-[45px] rounded-full bg-white shadow-md flex justify-center items-center cursor-pointer hover:-translate-y-1 transition">
                                    ⚙
                                </div>

                                <div className="w-[45px] h-[45px] rounded-full bg-white shadow-md flex justify-center items-center cursor-pointer hover:-translate-y-1 transition">
                                    ☁
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex justify-center">
                        {heroImage.value &&
                            <img
                                src={heroImage.value}
                                style={{ borderRadius: heroImageRadius.value }}
                                alt=""
                                className="w-full max-w-[500px] rounded-[40px] object-cover shadow-2xl"
                            />
                        }
                    </div>
                </div>

                {/* Bottom Menu */}


            </div>
        </section>
    );
}