import React from 'react';

function HeroSection({
  title = "Hero Section",
  subtitle = "We build amazing experiences",
  image = "https://i.pinimg.com/736x/d8/af/0d/d8af0d432eebda634921924c52aa78de.jpg",
  height="50vh",
  titleSize="50px",
  subtitleSize="17px",
  aline='center'
}) {
  return (
    <div
      className="rounded-[10px]  w-full flex flex-col item-center justify-center p-[50px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${image})`,height:height }}
    >
      <h1 className={`text-white  text-center leading-[0.8] font-bold`}
      style={{ fontSize: titleSize }}>
        {title}
      </h1>

      <p className="w-[100%] text-center text-gray-400 text-[20px]"
       style={{ fontSize: subtitleSize }}>
        {subtitle}
      </p>
    </div>
  );
}

export default HeroSection;