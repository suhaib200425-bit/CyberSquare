export default function LatestPostsFive({

    margin = { value: "" },
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    title = { value: "Latest Articles" }
}) {
    const posts = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
            title: "Top 20 Gaming Smartphone Under 50k Best Selling",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero...",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
            title: "Top 20 Gaming Smartphone Under 50k Best Selling",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero...",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
            title: "Top 20 Gaming Smartphone Under 50k Best Selling",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero...",
        },
        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
            title: "Top 20 Gaming Smartphone Under 50k Best Selling",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vero...",
        }
        
    ];


    const isMobile = window.innerWidth <= 768;

    return (
        <section style={{
            padding: isMobile
                ? mobilePadding.value || "0px 10px"
                : desktopPadding.value || "0px 100px",
            margin: margin.value || "0px"
        }} className="w-full bg-white px-4 py-8 md:px-10">
            {/* Heading */}
            <h2 className="mb-6 text-[28px] pt-[30px] //font-bold text-black">
                {title.value || "Latest Posts"}
            </h2>

            {/* Main Layout */}
            <div className="grid grid-cols-1 pb-15 gap-6 lg:grid-cols-[1.2fr_1.2fr_0.9fr]">
                {/* Left Cards */}
                {posts.map((post, index) => {
                    if (index < 2 || isMobile) {
                        return <div
                            key={post.id}
                            className="overflow-hidden rounded-[8px] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)]"
                        >
                            {/* Image */}
                            <div className="h-[180px] w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="mb-2 line-clamp-2 text-[20px] font-bold leading-[1.25] text-black">
                                    {post.title}
                                </h3>

                                <p className="mb-5 line-clamp-2 text-[13px] leading-[1.6] text-[#777]">
                                    {post.description}
                                </p>

                                {/* Bottom */}
                                <div className="flex items-center justify-between">
                                    <button className="rounded-full bg-black px-4 py-1 m-0 text-[12px] font-semibold text-white transition-all duration-300 hover:scale-105">
                                        Read
                                    </button>

                                    <span className="text-[12px] text-[#777]">
                                        smm 20, 2020
                                    </span>
                                </div>
                            </div>
                        </div>
                    }
                })}

                {/* Right Side Posts */}
                <div className="flex flex-col gap-5 ">
                    {posts?.map((item, index) => {
                        if (index >= 2 && !isMobile) {
                            return <div
                                key={item.id}
                                className="border-b border-[#e5e5e5] pb-4 last:border-none"
                            >
                                <h4 className="mb-2 line-clamp-2 text-[17px] font-bold leading-[1.3] text-black">
                                    {item.title}
                                </h4>

                                <p className=" line-clamp-2 mb-3 text-[13px] leading-[1.6] text-[#777]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
                                <button className="rounded-full bg-black px-4 py-1 m-0 text-[13px] font-semibold text-white transition-all duration-300 hover:translate-x-1">
                                    Read
                                </button>

                            </div>
                        }
                    })}
                </div>
            </div>
        </section>
    );
}