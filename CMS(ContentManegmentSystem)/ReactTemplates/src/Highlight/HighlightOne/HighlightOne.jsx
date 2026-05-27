export default function HighlightOne({

  margin = { value: "" },
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  title = { value: "Today’s Highlight " }
}) {
  const highlights = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming",
    },
  ];

  const isMobile = window.innerWidth < 768;

  return (
    <section style={{
      margin: margin.value,
      padding: isMobile ? mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px",

    }} className="w-full bg-white px-4 py-8 md:px-8">
      {/* Heading */}
      <h2 className=" mb-[30px] pt-10 text-[30px] font-[600] text-black">
        {title.value || "Today’s Highlight"}
      </h2>

      {/* Posts */}
      <div className="flex flex-col gap-7 pb-10">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 items-center gap-5 grid-cols-[0.8fr_1.2fr] "
          >
            {/* Left Image */}
            <div className="h-[130px] md:h-[250px] w-full overflow-hidden rounded-[14px]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <h3 className="line-clamp-2 md:line-clamp-3 mb-3 max-w-[420px] text-[20px] md:text-[32px] md:font-[500] leading-[1.15] text-black">
                {item.title}
              </h3>

              <p className="line-clamp-2 md:line-clamp-3 mb-5 max-w-[520px] text-[14px] leading-[1.2] md:leading-[1.7] text-[#777]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                nisi, possimus exercitationem obcaecati temporibus! Architecto
                accusantium laboriosam magni, pariatur perspiciatis.
              </p>

              {/* Bottom */}
              <div className="flex items-center gap-5">
                <button className="rounded-full bg-black px-5 py-[4px] text-[12px] font-semibold text-white transition-all duration-300 hover:scale-105">
                  Read
                </button>

                {/* <span className="text-[12px] text-[#666]">43min</span> */}

                <span className="text-[12px] text-[#666]">
                  20 JAN 2022
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}