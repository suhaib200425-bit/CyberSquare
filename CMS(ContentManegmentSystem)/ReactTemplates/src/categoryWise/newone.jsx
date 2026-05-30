import React from 'react'

function LatestModel({
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    backgroundColor = { value: "" },
    contentColor = { value: "black" },
    themeColor = { value: "red" },
    title = { value: "Latest Posts" },
    titleWeight = { value: "600" },
    desktopTitleSize = { value: "32px" },
    mobileTitleSize = { value: "25px" },
}) {
    const featuredPosts = [
        {
            id: 1,
            category: 'Health',
            title: 'How Much Time On Social Networks Is Considered Healthy',
            image:
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
            size: 'small',
        },
        {
            id: 2,
            category: 'Lifestyle',
            title: 'How Fashion Trend Change The Way You Think',
            image:
                'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
            size: 'large',
        },
        {
            id: 3,
            category: 'Cars',
            title: 'Porsche Cayman Re-style Is On The Way',
            image:
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
            size: 'small',
        },
        {
            id: 4,
            category: 'Tech',
            title: 'Smart Watches That Will Make You Spend Some Money',
            image:
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
            size: 'small',
        },
        {
            id: 5,
            category: 'Tech',
            title: 'Best Cameras To Choose From In 2019',
            image:
                'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?q=80&w=1000&auto=format&fit=crop',
            size: 'small',
        },
    ]
    const isMobile = window.innerWidth < 768;

    return (
        <section className="mx-auto bg-white " style={{
            color: contentColor.value,
            backgroundColor: backgroundColor.value,
            padding: isMobile ? desktopPadding.value || "0px 10px" : desktopPadding.value || "0px 100px"
        }}>

            <h3 className='text-[24px] pt-10 pb-4 fw-[900]' style={{
                fontSize: isMobile ? mobileTitleSize.value : desktopTitleSize.value,
                fontWeight: titleWeight.value
            }}>{title.value}</h3>
            <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2 pb-10" >

                {/* featuredPosts */}
                {
                    featuredPosts.map((post, index) => {
                        const isLarge = index == 1
                        return <article
                            className={`relative group relative min-h-[190px] overflow-hidden rounded-[6px] bg-[#111] ${isLarge ? 'md:col-span-2 md:row-span-2 md:min-h-[390px]' : ''
                                }`}
                        >




                            <img
                                src={post.image}
                                alt={post.title}
                                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div style={{
                                background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.46), transparent)",
                    
                            }} className="absolute h-full inset-0 bg-gradient-to-t from-black via-black to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-5 text-white z-10">
                                <span className="mb-3 inline-flex text-[11px] font-bold italic">
                                    {post.category}
                                </span>
                                <h3
                                    className={`max-w-[520px] font-extrabold leading-tight ${isLarge ? "text-[24px] md:text-[28px]" : "text-[15px]"
                                        }`}
                                >
                                    {post.title}
                                </h3>
                            </div>
                        </article>
                    })
                }
            </div>
        </section>
    )
}

export default LatestModel