

import React from "react";

export default function CategoryWise() {
  const cards = [
    {
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop",
      title:
        "Fruit producers turn to new farming methods",
      desc: "First producers turn to better crop techniques.",
    },
    {
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
      title:
        "Low employee engagement worries managers",
      desc: "Low employee engagement raises concerns.",
    },
    {
      category: "Sport News",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
      title:
        "We need to stop: Athletes speak on climate",
      desc: "Athletes raise awareness about climate issues.",
    },
    {
      category: "Sport News",
      image:
        "https://images.unsplash.com/photo-1543357480-c60d40007a3f?q=80&w=800&auto=format&fit=crop",
      title:
        "Emma Raducanu returns after surgery",
      desc: "Tennis star makes comeback after recovery.",
    },
  ];

  return (
    <div className="w-full bg-white p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((item, index) => (
          <div key={index} className="w-full">
            {/* Top Category */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[13px] font-semibold text-black">
                {item.category}
              </h3>

              <button className="text-[#c42c2c] text-[16px] leading-none font-semibold">
                +
              </button>
            </div>

            {/* Image */}
            <div className="w-full h-[120px] overflow-hidden rounded-[2px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="pt-2">
              <h2 className="text-[13px] leading-[17px] font-semibold text-black line-clamp-2">
                {item.title}
              </h2>

              <p className="text-[11px] leading-[15px] text-[#7a7a7a] mt-1 line-clamp-2">
                {item.desc}
              </p>

              <span className="text-[10px] text-[#9b9b9b] mt-2 block">
                Business • 4 hours ago
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}