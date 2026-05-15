import React, { useState } from 'react'
import { useEffect } from 'react';
function ImageAndContent({
    image = { value: "https://i.pinimg.com/736x/34/d0/fb/34d0fbe2843bfb28fb700210ab33b1cf.jpg" },
    title = { value: "Title" },
    titleSize = { value: "22px" },
    titleWeight = { value: "600" },
    subTitle = { value: "Welcome to our website Template" },
    subTitleSize = { value: "15px" },
    imagePadding = { value: "10px" },
    imageRadius = { value: "20px" },
    contentRowAline = { value: "start" },
    contentColumnAline = { value: "center" },
    shift = { value: "" },
    shiftBtn = { value: "" },
    alineRow = { value: "n" },
    padding = { value: "" },
    mobilePadding = { value: "" }
}) {

    

    const isMobile = window.innerWidth < 768;
    return (
        <div
            className={`relative ${alineRow.value ? "md:flex" : ""} block`}
            style={{
                padding: isMobile ? Mobilepadding.value || "0px 10px" : padding.value || "0px 100px",
                flexDirection: shift.value ? "row-reverse" : "row"
            }}
        >

            <div
                className={`${alineRow.value ? "md:w-1/2" : ""} w-full`}
                style={{ padding: imagePadding.value }}
            >
                <img
                    src={image.value}
                    alt=""
                    className="w-full h-full"
                    style={{ borderRadius: imageRadius.value }}
                />
            </div>

            <div
                className={`${alineRow.value ? "md:w-1/2" : ""} w-full`}
                style={{
                    padding: imagePadding.value,
                    alignItems: contentRowAline.value,
                    justifyContent: contentColumnAline.value
                }}
            >
                <div
                    className="title"
                    style={{
                        fontSize: titleSize.value,
                        fontWeight: titleWeight.value
                    }}
                >
                    {title.value}
                </div>

                <div
                    className="font-light"
                    style={{
                        fontSize: subTitleSize.value
                    }}
                >
                    {subTitle.value}
                </div>
            </div>

            {
                shiftBtn.value && (
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            setShiftTemplte(prev => !prev);
                        }}
                        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-red-800 flex items-center justify-center text-white font-medium cursor-pointer"
                    >
                        SHIFT
                    </div>
                )
            }

        </div>
    );
}
export default ImageAndContent