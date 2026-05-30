import React from "react";

export default function FashionTrendingSection({
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    backgroundColor = { value: "" },
    contentColor = { value: "black" },
    themeColor = { value: "red" },
    title = { value: "Latest Posts" },
    desktopTitleSize = { value: "32px" },
    mobileTitleSize = { value: "25px" },
}) {

    const latestPosts = [
        {
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
            title:
                "Breaking: Shocking Political Events Changing the World",
            category: "ChatGPT",
            time: "2 Hours ago",
        },
        {
            image:
                "https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1200&auto=format&fit=crop",
            title:
                "Viral Health Trends: What's Fact and What's Fiction?",
            category: "Trending",
            time: "7 Hours ago",
        },
        {
            image:
                "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
            title:
                "Must-See Viral Videos: Trending Clips You Can't Miss",
            category: "Lifestyle",
            time: "6 Hours ago",
        },
        {
            image:
                "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
            title:
                "Insider Secrets: Behind the Scenes of Major News Events",
            category: "Globalimpact",
            time: "4 Hours ago",
        },
    ];
    const isMobile = window.innerWidth < 768;

    return (
        <section className="w-full bg-[#f5f6fb] " style={{
            padding: isMobile ? mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px",
            backgroundColor: backgroundColor.value,
            color: contentColor.value
        }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr] gap-6 pt-10  pb-10">

                {/* Left Featured Banner */}
                <div className="relative overflow-hidden rounded-[10px] h-[300px] md:h-[520px]">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop"
                        alt="Fashion"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div style={{
                        background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.46), transparent)",
                    }} className="absolute w-full   inset-0  "></div>

                    

                    {/* Content */}
                    <div className="absolute bottom-8 left-8">

                        {/* Meta */}
                        <div className="flex items-center gap-2 mb-1">
                            

                            <span style={{
                                backgroundColor:themeColor.value
                            }} className="bg-[#4f46e5] text-white text-[12px] font-semibold px-2 py-1 rounded-full">
                                Globalimpact
                            </span>
                        </div>

                        {/* Title */}
                        <div className=" inline-block ">
                            <h2 className="line-clamp-2 text-white text-[48px] leading-[56px] font-bold">
                                Art of Traditional African Fashion
                            </h2>
                        </div>

                    </div>
                </div>

                {/* Right Latest Posts */}
                <div className=" rounded-[10px] p-5">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-[22px] font-bold " style={{
                            fontSize:isMobile?mobileTitleSize.value:desktopTitleSize.value
                        }}>
                            {title.value} 
                        </h3>

                        <button style={{
                            borderColor:themeColor.value
                        }} className="w-[30px] h-[30px] rounded-full border border-[#d1d5db] flex items-center justify-center text-[12px]">
                            🌙
                        </button>
                    </div>

                    {/* Posts */}
                    <div className="flex flex-col h-full gap-[20px] items-center">
                        {latestPosts.map((item, index) => (
                            <div key={index} className="flex gap-3">

                                {/* Image */}
                                <div className="w-[110px] h-[90px] rounded-[15px] overflow-hidden shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="line-clamp-2 w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1">

                                    {/* Meta */}
                                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                                        <span className="text-[10px] text-[#9a9a9a]">
                                            ⏱ {item.time}
                                        </span>

                                        <span className="text-[#d1d5db]">/</span>

                                        <span style={{
                                            color : themeColor.value
                                        }} className="text-[10px] font-medium text-[#4f46e5]">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h4 className="line-clamp-2 text-[18px] leading-[25px] font-bold ">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}