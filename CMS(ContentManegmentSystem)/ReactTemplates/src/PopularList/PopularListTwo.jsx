import React from "react";

function PopularListTwo() {
    const sidePosts = [
        {
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
            title: "Watch Roberto Martinez Say It Would Be A",
        },
        {
            image:
                "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
            title: "Animated Cartoon Is The New Future Of Entertainment",
        },
        {
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
            title: "Beijing May Regret Letting It Out Of The",
        },
    ];

    return (
        <section className="w-full bg-white px-[20px] py-[60px] md:px-[100px]">
            {/* Header */}
            <div className="mb-8 flex gap-2 items-center justify-between">
                <div className="flex items-center gap-4">
                    <h2 className="whitespace-nowrap text-[32px] font-bold text-black">
                        Trending News
                    </h2>


                </div>
                <div className="h-[3px] w-full bg-red-400"></div>
                <div className="hidden items-center gap-5 md:flex">
                    {["All", "Travel", "Finance", "Health", "Sports"].map(
                        (item, index) => (
                            <button
                                key={index}
                                className="text-[13px] font-medium text-[#666] hover:text-black"
                            >
                                {item}
                            </button>
                        )
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.8fr]">
                {/* Left */}
                <div className="relative h-[450px] overflow-hidden rounded-[12px]">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                        alt=""
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute bottom-0 left-0 p-8">
                        <button className="mb-4 rounded-full bg-red-500 px-4 py-[5px] text-[12px] font-semibold text-white">
                            Technology
                        </button>

                        <h3 className="max-w-[500px] text-[34px] font-bold leading-[1.2] text-white">
                            Technology Is Also A Particular Method By Which
                            Science Is Used For Practical Purposes
                        </h3>
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-5">
                    {sidePosts.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="h-[110px] min-w-[150px] overflow-hidden rounded-[10px]">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div>
                                <span className="mb-2 block text-[12px] font-semibold text-red-500">
                                    Technology
                                </span>

                                <h4 className="line-clamp-2 text-[22px] font-bold leading-[1.3] text-black">
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

export default PopularListTwo;