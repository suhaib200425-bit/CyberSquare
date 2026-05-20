import React from 'react';
import { useSearchParams } from 'react-router-dom';

function HeroSection({
  title = { value: "Hero Section" },
  titleColor = { value: "white" },
  titleSize = { value: "50px" },
  padding = { value: "" },
  Mobilepadding = { value: "" },
  subtitle = { value: "We build amazing experiences" },
  image = { value: "https://i.pinimg.com/736x/59/68/84/59688476322cfd9946898b7865582143.jpg" },
  imagePosition = { value: "center" },
  height = { value: "300px" },
  subtitleSize = { value: "17px" },
  subtitleWidth = { value: "" },
  subtitleMargin = { value: "10px" },
  subtitleColor = { value: "gray" },
  borderRadius = { value: "0px" },
  rowAline = { value: "center" },
  colAline = { value: "center" }
}) {
  const isMobile = window.innerWidth < 768;

  const { category } = useSearchParams()
  return (
    <div
      className="  w-full  flex flex-col   p-[50px] bg-no-repeat bg-cover"
      style={{
        padding: isMobile ? Mobilepadding.value || "0px 10px" : padding.value || "0px 100px",
        alignItems: rowAline.value,
        justifyContent: colAline.value,
        borderRadius: borderRadius.value,
        backgroundImage: `url(${image.value})`,
        backgroundPosition: imagePosition.value,
        height: height.value
      }}
    >

      
          <>
            <h1 className={`leading-[0.8] font-bold` }
            dangerouslySetInnerHTML={{__html:category?category:title.value}}
              style={{
                fontSize: titleSize.value,
                color: titleColor.value || "white"
              }}>
              
            </h1>

           {
            !category&& <p className="text-[20px]"
              style={{
                color: subtitleColor.value,
                margin: subtitleMargin.value,
                width: subtitleWidth.value,
                textAlign: rowAline.value,
                fontSize: subtitleSize.value
              }}>
              {subtitle.value}
            </p>
           }
          </>
      

    </div>
  );
}

export default HeroSection;