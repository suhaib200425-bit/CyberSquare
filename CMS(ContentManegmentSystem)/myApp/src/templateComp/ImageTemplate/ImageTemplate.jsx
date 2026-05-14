import React from 'react'
// import './ImageTemplate.css'
function ImageTemplate({
  image = { value: 'https://i.pinimg.com/1200x/7c/f0/87/7cf087a763eeb91509883bd994239339.jpg' },
  justifyContent = { value: "center" },
  imageWidth = { value: "100%" },
  imageHeight = { value: "150px" },
  borderRadius = { value: '10px' },
  margin = { value: "0px" },
  padding = { value: "" },
  mobilePadding = { value: "" }
}) {

  const isMobile = window.innerWidth < 768;
  return (
    <div className='flex item-center' style={{ 
      justifyContent: justifyContent.value, 
      margin: margin.value,
      padding: isMobile ? mobilePadding.value || "0px 10px" : padding.value || "0px 100px"
       }} >
      <div className="w-full h-full" >
        <img className='' src={image.value} style={{ height: imageHeight.value, width: imageWidth.value || "50%", borderRadius: borderRadius.value }} alt="" srcset="" />
      </div>
    </div>
  )
}

export default ImageTemplate