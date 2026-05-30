import React from "react";

export default function MustReadSection() {
  return (
    <div className="w-full bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-bold text-black">
          Must Read
        </h2>

        <button className="text-[11px] font-medium text-[#c42828] flex items-center gap-1">
          See all
          <span>→</span>
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-4">
        {/* Left Large Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-[10px] h-[250px]">
              <img
                src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#ff2d2d]"></span>

                  <span className="text-[10px] text-white/80">
                    CNN • 12 hours ago
                  </span>
                </div>

                <h3 className="text-white text-[15px] leading-[20px] font-semibold line-clamp-3">
                  Ukraine's drone design catches attention across countries
                </h3>

                <p className="text-[11px] text-white/70 leading-[16px] mt-2 line-clamp-2">
                  Modern warfare technology continues evolving rapidly around
                  the world.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-[10px] h-[250px]">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#ff2d2d]"></span>

                  <span className="text-[10px] text-white/80">
                    BBC • 9 hours ago
                  </span>
                </div>

                <h3 className="text-white text-[16px] leading-[22px] font-bold line-clamp-3">
                  Taylor Swift is sending a powerful message to women
                </h3>

                <p className="text-[11px] text-white/70 leading-[16px] mt-2 line-clamp-2">
                  Fans react worldwide after latest performance speech.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Small List */}
        <div className="flex flex-col gap-4">
          {/* Small Item 1 */}
          <div className="flex gap-3">
            <div className="w-[120px] h-[80px] overflow-hidden rounded-[8px] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-[5px] h-[5px] rounded-full bg-[#ff2d2d]"></span>

                <span className="text-[10px] text-[#8a8a8a]">
                  CNN • 2 hours ago
                </span>
              </div>

              <h3 className="text-[13px] leading-[18px] font-semibold text-black line-clamp-3">
                Inside Qatar's city of the future
              </h3>
            </div>
          </div>

          {/* Small Item 2 */}
          <div className="flex gap-3">
            <div className="w-[120px] h-[80px] overflow-hidden rounded-[8px] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-[5px] h-[5px] rounded-full bg-[#ff2d2d]"></span>

                <span className="text-[10px] text-[#8a8a8a]">
                  ESPN • 4 hours ago
                </span>
              </div>

              <h3 className="text-[13px] leading-[18px] font-semibold text-black line-clamp-3">
                Weston secures victory in front of fans
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}