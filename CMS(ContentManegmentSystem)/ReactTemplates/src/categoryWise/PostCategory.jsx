import React from 'react'

function PostCategory({
    
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    backgroundColor = { value: "" },
    contentColor = { value: "black" },
    contentSecColor = { value: "#1d1b1bbe" }
}) {
    const spotlightPosts = [
  {
    title: "What's People Buzzing About? Your Content Should Join The Conversation",
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=700&auto=format&fit=crop',
    meta: 'Gillion, 3 years ago',
  },
  {
    title: 'Does Coffee Help Deduce Stress Hormone Levels?',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700&auto=format&fit=crop',
    meta: 'Gillion, 1 year ago',
  },
  {
    title: 'Review Of Healthy Breakfast Meals For Energy Boost',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=700&auto=format&fit=crop',
    meta: 'Gillion, 2 years ago',
    rating: '8.2',
  },
]
    const socialData = [
    { label: "Like", count: "1423" },
    { label: "Follow", count: "727" },
    { label: "Follow", count: "386" },
    { label: "Subscribe", count: "284" },
  ];

  const colors = ["#4086e8", "#17a8ef", "#d12f8c", "#f25342"];

    const isMobile = window.innerWidth < 768;

    return (
        <section className="mx-auto bg-white   " style={{
            backgroundColor:backgroundColor.value,
            color:contentColor.value,
            padding:isMobile?mobilePadding.value || "0px 10px" :desktopPadding.value || "0px 100px"
        }}>
            <div className="grid gap-10 lg:grid-cols-[1fr_270px] pb-10 pt-10 ">
                <section>
                    <div className="mb-5 flex items-center gap-4">
                        <h2 className="whitespace-nowrap text-[22px] font-extrabold leading-none ">
                            Todays spotlight
                        </h2>
                        <span style={{
                            backgroundColor:contentSecColor.value
                        }} className="h-px flex-1 bg-[#e8e8e8]" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {spotlightPosts.map((post, index) => (
                            <article key={index} className="group">
                                <div className="relative h-[150px] overflow-hidden rounded-[5px] bg-[#eee]">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    
                                </div>
                                <h3 className="mt-3 text-[15px] font-extrabold leading-snug  line-clamp-2">{post.title}</h3>
                                <div style={{
                                    color:contentSecColor.value
                                }} className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-[#aaa]">
                                    <span>{post.meta}</span>
                                </div>
                            </article>
                            // <SpotlightCard key={post.title} post={post} />
                        ))}
                    </div>
                </section>

                <aside className="space-y-8">
                    <section>
                        <div className="mb-5 flex items-center gap-4">
                            <h2 className="whitespace-nowrap text-[22px] font-extrabold leading-none ">
                                Stay connected
                            </h2>
                            <span style={{
                                backgroundColor:contentSecColor.value
                            }} className="h-px flex-1 bg-[#e8e8e8]" />
                        </div>

                        <div className="space-y-3">
                            {
                                socialData.map((elem, index) => {
                                    return <button
                                        style={{
                                            backgroundColor: colors[index]
                                        }}
                                        type="button"
                                        className={`flex h-11 w-full items-center justify-between rounded-[5px] px-5 text-[12px] font-extrabold text-white shadow-sm transition hover:-translate-y-0.5`}
                                    >
                                        <span>{elem.label}</span>
                                        <span>{elem.count}</span>
                                    </button>
                                })
                            }

                        </div>
                    </section>


                </aside>
            </div>
        </section>
    )
}

export default PostCategory