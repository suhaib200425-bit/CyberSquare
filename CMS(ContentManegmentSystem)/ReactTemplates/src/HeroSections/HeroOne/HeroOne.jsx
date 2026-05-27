import React from "react";
// import "./HeroOne.css";

function HeroOne({
  backgroundImage = { value: "https://i.pinimg.com/736x/0a/f7/74/0af7741991985e2b530c8f62135c3eea.jpg" },
  desktopPadding = { value: "0px 100px" },
  mobilePadding = { value: "0px 10px" },
  overlayColor = { value: "rgba(0,0,0,0.74)" },
  contentAlineRow = { value: "center" },
  contentAlineCol = { value: "center" },
  textAline = { value: "center" },
  smallText = { value: "Welcome To The World Of Podverse" },
  mainTitle = { value: "DIVE INTO OUR <br/> PODVERSE" },
  subTitle = { value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque debitis quidem." },
  btnText = { value: "CLICK ME" },
  btnColor = { value: "white" }
}) {
  const isMobile = window.innerWidth <= 768;

  return (
    <section
      className="relative w-full h-screen font-sans overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage.value})`,
        padding: isMobile ? mobilePadding.value : desktopPadding.value
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor.value }}
      ></div>

      {/* Content */}
      <div
        className="relative z-10 w-full h-full flex flex-col"
        style={{
          alignItems: contentAlineRow.value,
          justifyContent: contentAlineCol.value,
          textAlign: textAline.value
        }}
      >
        <p className="text-sm mb-4 tracking-wide text-gray-300">
          {smallText.value}
        </p>

        <h1
          className="font-extrabold leading-none text-white
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          dangerouslySetInnerHTML={{ __html: mainTitle.value }}
        />

        <p className="mt-6 max-w-[500px] leading-relaxed text-gray-300">
          {subTitle.value}
        </p>

        <button
          className="mt-8 px-8 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
          style={{
            backgroundColor: btnColor.value,
            color: "black"
          }}
        >
          {btnText.value}
        </button>
      </div>
    </section>
  );
}

export default HeroOne;