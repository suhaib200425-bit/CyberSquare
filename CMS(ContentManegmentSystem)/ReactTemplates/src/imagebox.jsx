import React from 'react'

function Imagebox({
    desktopPadding={value:""},
    mobilePadding={value:""},
    imageUrl={value:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"},
    imageWidth={value:"100%"},
    imageHeightInMobile={value:"200px"},
    imageHeightInDesktop={value:"200px"},
imageBorderRadius={value:"10px"}
}) {
  const isMobile = window.innerWidth < 768;

  return (
    <div className='w-full' style={{
        padding:isMobile?mobilePadding.value || "30px 10px":desktopPadding.value || "30px 100px"
    }}>
        <div className="" style={{
            overflow:"hidden",
                borderRadius:imageBorderRadius.value,
            width:imageWidth.value,
            height: isMobile ? imageHeightInMobile.value || "" :imageHeightInDesktop.value || ""
        }}>
            <img style={{
            }} width={"100%"} height={"100%"} src={imageUrl.value} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Imagebox