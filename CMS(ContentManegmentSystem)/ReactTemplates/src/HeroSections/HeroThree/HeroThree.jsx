import React from "react";

const HeroThree = ({
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  gradientColors = {
    "type": "array",
    "value": [
      "#040415",
      "#090024",
      "#1d0a45"
    ],
  },
  layersColor = {
    value:"#626b833f"
  },
  title ={
    value:"The new <br /> Marketplace  <br /> for all your apps"
  },
  subtitle={
    value:"Where the best creators, designers and developers converge to innovate, collaborate and shape tomorrow’s digital landscape."
  }
}) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="w-full h-screen bg-[#05010F] flex items-center justify-center overflow-hidden">
      <div
        style={{
          background: `linear-gradient(135deg, ${gradientColors.value[0]}, ${gradientColors.value[1]}, ${gradientColors.value[2]})`,
          padding: isMobile ? mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px"
        }}
        className="relative w-[100%] h-[100%] //rounded-[40px] overflow-hidden border border-white/10
        bg-gradient-to-br from-[#040415] via-[#090024] to-[#1d0a45]"
      >
        {/* Background Glow */}
        <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full bg-[#8B5DFF]/40 blur-3xl"></div>

        {/* Circle Layers */}
        <div className="absolute right-[-250px] top-1/2 -translate-y-1/2">
          <div style={{
            backgroundColor:layersColor.value
          }} className="relative w-[850px] h-[850px] rounded-full bg-[#B066FF]/10 flex items-center justify-center">
            <div style={{
              backgroundColor:layersColor.value
            }} className="w-[720px] h-[720px] rounded-full bg-[#B066FF]/10 flex items-center justify-center">
              <div style={{
                backgroundColor:layersColor.value
              }} className="w-[590px] h-[590px] rounded-full bg-[#B066FF]/10 flex items-center justify-center">
                <div style={{
                  backgroundColor:layersColor.value
                }} className="w-[470px] h-[470px] rounded-full bg-[#B066FF]/10 flex items-center justify-center">
                  <div style={{
                    backgroundColor:layersColor.value
                  }} className="w-[350px] h-[350px] rounded-full bg-[#B066FF]/20 flex items-center justify-center">
                    <div style={{
                      backgroundColor:layersColor.value
                    }} className="w-[240px] h-[240px] rounded-full bg-[#B066FF]/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Hero Content */}
        <div className=" relative z-20 flex flex-col justify-end  w-[100%] h-[100%]  ">
          <div className="max-w-[500px] " style={{
            marginBottom: "50px"
          }}>
            <h1 dangerouslySetInnerHTML={{__html: title.value}} className="text-white text-[40px] sm:text-[60px] leading-[1] font-semibold">
              
            </h1>

            <p dangerouslySetInnerHTML={{__html:subtitle.value}} className=" text-white/60 text-[17px] leading-5 mt-3">
            </p>

            <button
              className="mt-3 px-4 py-3 rounded-[10px] bg-white text-black
              font-semibold text-sm hover:scale-105 duration-300"
            >
              BROWSE APPS
            </button>
          </div>
        </div>

        {/* Stars */}
        <div className="absolute inset-0 z-10">
          {[...Array(45)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroThree;