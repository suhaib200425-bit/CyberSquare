export default function PopularPostsList({

  margin = { value: "" },
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  title = { value: "Today’s Highlight " }
}) {
  const categories = [
    "All",
    "Gaming",
    "Tech",
    "Social Media",
    "Web Design",
  ];

  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
    },
  ];
    const isMobile = window.innerWidth < 768;

  return (
    <section style={{
        padding: isMobile ? mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px"
        }} className="w-full bg-[#f5f5f5] px-4 py-8 md:px-8">
      {/* Top Header */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <h2 className="mb-4 pt-10 text-[30px] font-extrabold text-black">
            Popular Posts
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((item, index) => (
              <button
                key={index}
                className={`rounded-full px-4 py-[3px] text-[12px] font-semibold transition-all duration-300 ${
                  index === 0
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Filter */}
        {/* <button className="flex items-center gap-2 self-start text-[14px] font-semibold text-black">
          Filter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h18M6 12h12M10 19h4"
            />
          </svg>
        </button> */}
      </div>

      {/* Posts Grid */}
      <div className="pb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="group">
            {/* Image */}
            <div className="mb-4 h-[190px] overflow-hidden rounded-[16px]">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h3 className="mb-3 line-clamp-2 text-[24px] font-bold leading-[1.2] text-black">
              {post.title}
            </h3>

            {/* Description */}
            <p className="mb-5 line-clamp-3 text-[13px] leading-[1.7] text-[#777]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem necessitatibus distinctio nostrum aliquid
              voluptates vel.
            </p>

            {/* Bottom */}
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black px-5 py-[7px] text-[12px] font-semibold text-white transition-all duration-300 hover:scale-105">
                Read
              </button>

              {/* <span className="text-[12px] text-[#666]">6min</span> */}

              <span className="text-[12px] text-[#666]">
                20 JAN 2022
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}