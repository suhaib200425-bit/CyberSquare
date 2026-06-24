import React, { useState } from 'react';
const CenteredHero = ({
  badgeText = { value: "New Feature" },
  bgColor = { value: "rgba(203, 203, 218, 0.57)" },
  desktopPadding = { value: "50px 100px" },
  mobilePadding = { value: "40px 10px" },

  mainTitle = { value: "Discover Stories That Matter." },
  mainTitleColor = { value: "#0c0c0cda" },

  subTitle = { value: " Search through thousands of articles, expert guides, and breaking news updates curated just for you." },
  subTitleColor = { value: "grey" },

  heroBanner = { value: "https://i.pinimg.com/1200x/92/28/89/9228893e1bf6160e74fe395ab3cfadf4.jpg" },

  primaryButtonText = { value: "Get Started" },
  primaryButtonBgColor = { value: "white" },
  primaryButtonTextColor = { value: "#3b05ff" },
  primaryButtonHoverColor = { value: "#5123f8" },

  secondaryButtonText = { value: "Learn More" },
  secondaryButtonBgColor = { value: "black" },
  secondaryButtonTextColor = { value: "#dacece" },
  secondaryButtonHoverColor = { value: "#cec1c1bd" },
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hover, setHover] = useState();

  return (
    <section
      style={{
        minHeight: isMobile ? "maxContent" : "100vh",
        backgroundColor: bgColor.value,
        padding: isMobile ? mobilePadding.value : desktopPadding.value
      }} className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white  ">
      {/* Badge */}
      {
        badgeText.value &&
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
          {badgeText.value}
        </span>
      }

      {/* Big Heading */}
      <h1 style={{
        color: mainTitleColor.value
      }} className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
        {mainTitle.value}
      </h1>

      {/* Description Text */}
      <p style={{
        color: subTitleColor.value
      }} className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        {subTitle.value}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {
          primaryButtonText.value &&
          <button
            onMouseEnter={() => {
              setHover("primary")
            }}
            onMouseLeave={() => {
              setHover("")
            }}
            style={{
              color: primaryButtonBgColor.value,
              backgroundColor: hover == "primary" ? primaryButtonHoverColor.value : primaryButtonTextColor.value
            }}
            onClick={() => console.log('Primary Clicked')}
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg transition duration-200"
          >
            {primaryButtonText.value}
          </button>
        }
        {
          secondaryButtonText.value &&
          <button
            onMouseEnter={() => {
              setHover("secondary")
            }}
            onMouseLeave={() => {
              setHover("")
            }}
            style={{
              color: secondaryButtonBgColor.value,
              backgroundColor: hover == "secondary" ? secondaryButtonHoverColor.value : secondaryButtonTextColor.value
            }}
            onClick={() => console.log('Secondary Clicked')}
            className="px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg transition duration-200"
          >
            {secondaryButtonText.value}
          </button>
        }
      </div>

      {/* Optional Image */}
      <div className="w-full max-w-3xl h-[200px] mt-4 rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <img
          src={heroBanner.value}
          alt="Hero Dashboard Preview"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default CenteredHero;

